// npm run check – läuft vor jedem Merge.
// 1 Syntax  2 Datentests  3 Build  4 Größenbudget  5 Browser  6 Offline  7 Barrierefreiheit
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, extname } from "node:path";
import { execFileSync } from "node:child_process";
import { createServer } from "node:http";
import vm from "node:vm";

const fehler = [], warnungen = [];
const schritt = (n) => console.log(`\n▶ ${n}`);
const ok = (t) => console.log(`  ✓ ${t}`);
const fail = (t) => { fehler.push(t); console.log(`  ✗ ${t}`); };
const warn = (t) => { warnungen.push(t); console.log(`  ! ${t}`); };

// Reihenfolge wie in index.html (nachtrag.js ergänzt Orte, lage.js setzt die geprüften Positionen)
const DATEN = ["data.js", "gebiete.js", "funde.js", "community.js", "orte.js", "positionen.js", "data-en.js", "nachtrag.js", "lage.js"];
const alleDateien = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f); return statSync(p).isDirectory() ? alleDateien(p) : [p];
});

/* 1 ─ Syntax (das Projekt hat kein TypeScript; geprüft wird jede JS-Datei) */
schritt("Syntax");
for (const f of readdirSync("public").filter((f) => f.endsWith(".js"))) {
  try { execFileSync(process.execPath, ["--check", join("public", f)], { stdio: "pipe" }); }
  catch (e) { fail(`${f}: ${e.stderr.toString().split("\n").slice(0, 4).join(" ")}`); }
}
for (const f of alleDateien("public/tiles")) { try { JSON.parse(readFileSync(f, "utf8")); } catch { fail(`${f}: kein gültiges JSON`); } }
if (!fehler.length) ok("alle JS- und JSON-Dateien gültig");

/* 2 ─ Datentests */
schritt("Datentests");
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
for (const f of DATEN) {
  const p = join("public", f);
  if (!existsSync(p)) { fail(`${f} fehlt`); continue; }
  try { vm.runInContext(readFileSync(p, "utf8"), ctx, { filename: f }); } catch (e) { fail(`${f} lädt nicht: ${e.message}`); }
}
const LH = ctx.LH;
if (!LH || !Array.isArray(LH.ORTE)) fail("LH.ORTE fehlt");
else {
  const ids = new Map();
  for (const o of LH.ORTE) {
    if (!o.id) fail(`Ort ohne id: ${o.n}`);
    else if (ids.has(o.id)) fail(`doppelte id: ${o.id}`);
    ids.set(o.id, o);
    if (!o.n) fail(`Ort ${o.id} ohne Namen`);
    if (o.p && (!Array.isArray(o.p) || o.p.length !== 2 || o.p.some((z) => !Number.isFinite(z)))) fail(`Ort ${o.id}: ungültige Koordinaten`);
    if (o.k && LH.KATEGORIEN && !LH.KATEGORIEN.some((k) => k.id === o.k)) fail(`Ort ${o.id}: unbekannte Kategorie ${o.k}`);
    for (const q of o.src || []) if (LH.QUELLEN && !LH.QUELLEN[q]) fail(`Ort ${o.id}: unbekannte Quelle ${q}`);
  }
  const verweise = [];
  (function lauf(x, pfad) {
    if (Array.isArray(x)) x.forEach((v, i) => lauf(v, `${pfad}[${i}]`));
    else if (x && typeof x === "object") for (const [k, v] of Object.entries(x)) {
      if (k === "at" && typeof v === "string") verweise.push([pfad, v]); else lauf(v, `${pfad}.${k}`);
    }
  })(LH, "LH");
  const kaputt = verweise.filter(([, v]) => !ids.has(v));
  kaputt.forEach(([p, v]) => fail(`${p}: Verweis auf unbekannten Ort „${v}“`));
  if (!kaputt.length) ok(`${ids.size} Orte, ${verweise.length} Verweise, keine doppelten IDs`);
}
const idx = JSON.parse(readFileSync("public/tiles/index.json", "utf8"));
const fehlend = idx.packs.filter((p) => !existsSync(`public/tiles/${p}.json`));
fehlend.forEach((p) => fail(`Kachelpaket fehlt: ${p}`));
if (!fehlend.length) ok(`${idx.packs.length} Kachelpakete vollständig`);
const html = readFileSync("public/index.html", "utf8");
if (!/CC BY 4\.0/.test(html + readFileSync("public/tiles/index.json", "utf8"))) fail("Lizenzhinweis gtadb (CC BY 4.0) fehlt");

/* 3 ─ Build */
schritt("Build");
try { execFileSync(process.execPath, ["scripts/build.mjs"], { stdio: "inherit" }); ok("dist/ erzeugt"); }
catch { fail("Build fehlgeschlagen"); }

/* 4 ─ Größenbudget (Cloudflare Pages Free: 20.000 Dateien, 25 MiB je Datei) */
schritt("Größenbudget");
const BUDGET = { dateiMax: 25 * 1024 * 1024, dateiWarn: 5 * 1024 * 1024, anzahl: 20000, gesamt: 150 * 1024 * 1024, code: 1.5 * 1024 * 1024 };
const dist = existsSync("dist") ? alleDateien("dist") : [];
let gesamt = 0, code = 0;
for (const f of dist) {
  const g = statSync(f).size; gesamt += g;
  if ([".js", ".html", ".css"].includes(extname(f)) && !/leaflet/.test(f)) code += g;
  if (g > BUDGET.dateiMax) fail(`${f}: ${(g / 1048576).toFixed(1)} MiB > 25 MiB`);
  else if (g > BUDGET.dateiWarn) warn(`${f}: ${(g / 1048576).toFixed(1)} MiB (groß)`);
}
if (dist.length > BUDGET.anzahl) fail(`${dist.length} Dateien > ${BUDGET.anzahl}`);
if (gesamt > BUDGET.gesamt) fail(`gesamt ${(gesamt / 1048576).toFixed(0)} MiB > 150 MiB`);
if (code > BUDGET.code) fail(`Programm + Daten ${(code / 1048576).toFixed(2)} MiB > 1,5 MiB`);
ok(`${dist.length} Dateien · ${(gesamt / 1048576).toFixed(1)} MiB gesamt · Programm + Daten ${(code / 1024).toFixed(0)} KiB`);

/* 5–7 ─ Browser, Offline, Barrierefreiheit */
let pw = null;
try { pw = await import("playwright"); } catch {
  try { const { createRequire } = await import("node:module"); pw = createRequire(import.meta.url)(join(execFileSync("npm", ["root", "-g"]).toString().trim(), "playwright")); } catch {}
}
if (!pw) warn("Playwright nicht installiert – Browser-, Offline- und Barrierefreiheitsprüfung übersprungen (npm i -D playwright && npx playwright install chromium)");
else if (existsSync("dist/index.html")) {
  const TYP = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json" };
  const server = createServer((req, res) => {
    const pfad = join("dist", decodeURIComponent(req.url.split("?")[0]).replace(/\/$/, "/index.html"));
    if (!pfad.startsWith("dist") || !existsSync(pfad)) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { "content-type": TYP[extname(pfad)] || "application/octet-stream" }); res.end(readFileSync(pfad));
  }).listen(0);
  const URL = `http://127.0.0.1:${server.address().port}/`;
  const views = [...html.matchAll(/\["(\w+)", "[^"]+", "[^"]*"\]/g)].map((m) => m[1]);
  const browser = await pw.chromium.launch();
  const geraete = [["PC", { viewport: { width: 1400, height: 900 } }], ["iPad", pw.devices["iPad Pro 11"]], ["iPhone", pw.devices["iPhone 14"]]];

  schritt("Browser");
  for (const [name, opt] of geraete) for (const lang of ["de", "en"]) {
    const c = await browser.newContext(opt); const p = await c.newPage(); const err = [];
    p.on("pageerror", (e) => err.push(e.message));
    await p.addInitScript((l) => localStorage.setItem("leonida-lang", l), lang);
    await p.goto(URL + "#karte"); await p.waitForTimeout(2500);
    // v11: Pins (.kx-pin) und Zahl-Cluster (.marker-cluster) aus karte2.js; dazu alle Einträge mit Kartenposition
    const sichtbar = await p.$$eval(".kx-pin, .marker-cluster", (x) => x.length);
    const pins = await p.evaluate(() => (window.LH && LH.ORTE || []).filter((o) => o.p).length);
    for (const v of views) { await p.evaluate((v) => { location.hash = v; }, v); await p.waitForTimeout(150); }
    if (err.length) fail(`${name}/${lang}: JS-Fehler: ${err.slice(0, 3).join(" | ")}`);
    else if (pins < 50) fail(`${name}/${lang}: nur ${pins} Punkte auf der Karte`);
    else if (!sichtbar) fail(`${name}/${lang}: keine Pins/Cluster sichtbar`);
    else ok(`${name}/${lang}: ${pins} Punkte (${sichtbar} Marker sichtbar), ${views.length} Ansichten ohne Fehler`);
    await c.close();
  }

  schritt("Offline (nur eigene Dateien)");
  {
    const c = await browser.newContext(geraete[1][1]); const p = await c.newPage(); const fremd = [], err = []; let kacheln = 0;
    await c.route("**/*", (r) => { const u = r.request().url(); if (u.startsWith(URL) || u.startsWith("data:")) return r.continue(); fremd.push(u); return r.abort(); });
    p.on("pageerror", (e) => err.push(e.message));
    p.on("response", (r) => { if (/\/tiles\/.+\.json/.test(r.url()) && r.ok()) kacheln++; });
    await p.goto(URL + "#karte"); await p.waitForTimeout(3000);
    if (err.length) fail(`Offline: JS-Fehler: ${err[0]}`);
    else if (!kacheln) fail("Offline: keine Kachelpakete geladen");
    else ok(`Karte lädt ohne fremde Server (${kacheln} Kachelpakete)`);
    if (fremd.length) warn(`fremde Anfragen blockiert: ${[...new Set(fremd.map((u) => new URL(u).host))].join(", ")}`);
    await c.close();
  }

  schritt("Barrierefreiheit");
  {
    const c = await browser.newContext(geraete[0][1]); const p = await c.newPage();
    await p.goto(URL + "#karte"); await p.waitForTimeout(1500);
    const probleme = [];
    for (const v of ["karte", ...views]) {
      await p.evaluate((v) => { location.hash = v; }, v); await p.waitForTimeout(150);
      probleme.push(...(await p.evaluate((v) => {
        const sichtbar = (el) => el.offsetParent !== null || el.getClientRects().length > 0;
        const name = (el) => (el.getAttribute("aria-label") || el.getAttribute("title") || el.textContent || el.getAttribute("alt") || "").trim();
        const out = [];
        if (!document.documentElement.lang) out.push("html ohne lang");
        if (!document.querySelector('meta[name="viewport"]')) out.push("kein viewport-meta");
        document.querySelectorAll("button, a[href], [role=button]").forEach((el) => { if (sichtbar(el) && !name(el)) out.push(`${v}: Bedienelement ohne Namen (${el.outerHTML.slice(0, 60)})`); });
        document.querySelectorAll("input:not([type=hidden]):not([hidden]), select, textarea").forEach((el) => {
          if (!sichtbar(el)) return;
          const lbl = el.id && document.querySelector(`label[for="${el.id}"]`);
          if (!lbl && !el.closest("label") && !el.getAttribute("aria-label") && !el.getAttribute("placeholder") && !el.getAttribute("title")) out.push(`${v}: Feld ohne Beschriftung (${el.outerHTML.slice(0, 60)})`);
        });
        document.querySelectorAll("img:not([alt])").forEach((el) => out.push(`${v}: Bild ohne alt`));
        return out;
      }, v)));
    }
    const eindeutig = [...new Set(probleme)];
    if (eindeutig.length) eindeutig.slice(0, 15).forEach(fail); else ok("Sprache, Viewport, Namen für Bedienelemente, Feldbeschriftungen, Bild-Alternativtexte");
    await c.close();
  }
  await browser.close(); server.close();
}

console.log(`\n${fehler.length ? "✗" : "✓"} ${fehler.length} Fehler, ${warnungen.length} Warnungen`);
process.exit(fehler.length ? 1 : 0);
