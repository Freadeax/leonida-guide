/* =====================================================================
   LEONIDA HELPER – Sprache (Deutsch / English)
   - LANG kommt aus localStorage "leonida-lang" (sonst Browsersprache).
   - Englisch: Inhalte aus data-en.js werden über LH gelegt, Reste über
     I18N_DICT (exakt) und I18N_REGEL (Muster) übersetzt.
   - Die Oberfläche bleibt deutsch im Code; ein MutationObserver übersetzt
     Textknoten und placeholder/title/aria-label beim Einfügen.
   ===================================================================== */
"use strict";
window.LANG = (function () {
  let l = null;
  try { l = localStorage.getItem("leonida-lang"); } catch (e) {}
  if (l !== "de" && l !== "en") l = /^de\b/i.test(navigator.language || "de") ? "de" : "en";
  return l;
})();
window.LOC = LANG === "en" ? "en-US" : "de-DE";
document.documentElement.lang = LANG;

function setzeSprache(l) {
  if (l === LANG) return;
  try { localStorage.setItem("leonida-lang", l); } catch (e) {}
  location.reload();
}
/* Schalter mit Flaggen – überall gleich */
function sprachSchalter() {
  return `<div class="sprache" role="group" aria-label="Sprache / Language">` +
    [["de", "🇩🇪", "Deutsch"], ["en", "🇬🇧", "English"]].map(([id, f, n]) =>
      `<button type="button" data-lang="${id}" class="${LANG === id ? "on" : ""}" aria-pressed="${LANG === id}" title="${n}" data-noi18n="1"><span class="flagge">${f}</span>${n}</button>`).join("") + `</div>`;
}
document.addEventListener("click", e => { const b = e.target.closest("[data-lang]"); if (b) setzeSprache(b.dataset.lang); });

/* ---------------------------------------------------------------- Übersetzer */
const I18N_DICT = window.I18N_DICT = {};
const I18N_REGEL = window.I18N_REGEL = [];
function trS(s) {
  if (LANG !== "en" || typeof s !== "string" || !s) return s;
  const k = s.trim(); if (!k) return s;
  let r = I18N_DICT[k];
  if (r === undefined) {
    for (const [re, f] of I18N_REGEL) { if (re.test(k)) { r = k.replace(re, f); break; } }
  }
  if (r === undefined) return s;
  const a = s.match(/^\s*/)[0], z = s.match(/\s*$/)[0];
  return a + r + z;
}
window.trS = trS;

/* ---------------------------------------------------------------- Inhalte auf Englisch */
function englischAnwenden() {
  const E = window.LH_EN || {}, L = window.LH;
  const setze = (ziel, quelle, felder) => quelle.forEach((q, i) => { if (!ziel[i]) return; felder.forEach((f, j) => { if (q[j] != null && q[j] !== "") ziel[i][f] = q[j]; }); });
  if (E.STAND) L.STAND = E.STAND;
  L.KATEGORIEN.forEach(k => { if (E.KATEGORIEN && E.KATEGORIEN[k.id]) k.name = E.KATEGORIEN[k.id]; });
  /* Quellen */
  const QN = { "Geld": "money", "Codes": "codes", "Geheimnisse": "secrets", "Trophäen": "trophies", "Jagd": "hunting", "Angeln": "fishing", "Gang-Operationen": "gang operations",
    "Missionen": "missions", "Immobilien": "real estate", "Randys Liste": "Randy's list", "Sammelobjekte": "collectibles", "Karten Key Lento": "cards Key Lento", "Wracks": "wrecks",
    "Magazine": "magazines", "127 Waffenvarianten": "127 weapon variants", "Geld-Glitch": "money glitch", "Platin-Roadmap": "platinum roadmap", "Meditation": "meditation", "Bugs": "bugs", "Donnies Pakete": "Donnie's packages", "Stuntsprünge": "stunt jumps", "Geldverstecke": "cash stashes", "Sammelkarten": "collectible cards", "Unterwasser": "underwater", "Brets Decks": "Bret's decks", "Billard": "pool", "Videospiele": "video games", "9 Easter Eggs": "9 Easter eggs", "31 Tipps": "31 tips", "Ego-Perspektive": "first-person", "Ego-Glitch": "first-person glitch", "seltene Autos": "rare cars", "Paul-Walker-Auto": "Paul Walker car", "Kodak-Black-Sender": "Kodak Black station", "Verschwörungshaus": "conspiracy house" };
  Object.values(L.QUELLEN).forEach(q => { q.name = q.name.replace(/\(([^)]+)\)/, (m, a) => "(" + (QN[a] || a) + ")"); });
  /* Orte */
  const O = E.orte || {};
  L.ORTE.forEach(o => {
    const e = Object.assign({}, O[o.id] || {}, o.en || {});
    if (e.n) o.n = e.n; else o.n = trS(o.n);
    if (e.r) o.r = e.r; else if (o.r) o.r = trS(o.r);
    if (e.t) o.t = e.t; else if (o.t) o.t = trS(o.t);
    if (e.s) o.s = e.s; else if (o.s) o.s = o.s.map(trS);
    if (o.codes) o.codes = o.codes.map((c, i) => [(e.c && e.c[i]) || trS(c[0]), c[1]]);
    if (o.waffen) o.waffen = o.waffen.map(trS);
    if (o.typ) o.typ = trS(o.typ);
    if (o.geb) o.geb = trS(o.geb);
  });
  /* Untertypen und Gebiete */
  if (L.TYP_STANDARD) Object.keys(L.TYP_STANDARD).forEach(k => L.TYP_STANDARD[k] = trS(L.TYP_STANDARD[k]));
  if (L.TYP_ZEICHEN) { const z = {}; Object.entries(L.TYP_ZEICHEN).forEach(([k, v]) => z[trS(k)] = v); L.TYP_ZEICHEN = z; }
  if (L.GEBIETE_POS) Object.values(L.GEBIETE_POS).forEach(v => { v[2] = trS(v[2]); });
  if (L.STAEDTE) L.STAEDTE = L.STAEDTE.map(trS).sort((a, b) => a.localeCompare(b));
  if (L.GEBIETE) L.GEBIETE.forEach(g => { if (Array.isArray(g)) g[0] = trS(g[0]); });
  /* Listen */
  if (E.CODES_EXTRA) setze(L.CODES_EXTRA, E.CODES_EXTRA, ["n", "w"]);
  if (E.GELD) setze(L.GELD, E.GELD, ["n", "w", "einheit", "risiko"]);
  if (E.GELD_REGELN) setze(L.GELD_REGELN, E.GELD_REGELN, ["titel", "text"]);
  if (E.STERNE) setze(L.STERNE, E.STERNE, ["n", "t"]);
  if (E.HEAT) setze(L.HEAT, E.HEAT, ["n", "bed", "fix"]);
  if (E.VERPASSBAR) setze(L.VERPASSBAR, E.VERPASSBAR, ["n", "t"]);
  if (E.GLITCHES) setze(L.GLITCHES, E.GLITCHES, ["n", "t"]);
  if (E.AUTOS) setze(L.AUTOS, E.AUTOS, ["titel", "text"]);
  if (E.LAGER) setze(L.LAGER, E.LAGER, ["titel", "text"]);
  if (E.CHEATS) setze(L.CHEATS, E.CHEATS.map(c => [c[0], null, c[1], null, c[2]]), [0, 1, 2, 3, 4]);
  if (E.TROPHAEEN) L.TROPHAEEN.forEach((t, i) => { if (E.TROPHAEEN[i]) t[3] = E.TROPHAEEN[i]; });
  if (E.TIPPS) setze(L.TIPPS, E.TIPPS, [0, 1]);
  L.TIPPS.forEach(t => { if (t.en) { t[0] = t.en[0]; t[1] = t.en[1]; } });
  L.GLITCHES.forEach(g => { if (g.en) Object.assign(g, g.en); });
  L.VERPASSBAR.forEach(g => { if (g.en) Object.assign(g, g.en); });
  if (E.TIERE) setze(L.TIERE, E.TIERE, [0, 1]);
  if (E.STRANGERS) setze(L.STRANGERS, E.STRANGERS, [2, 3, 4]);
  if (E.HUNDERT) setze(L.HUNDERT, E.HUNDERT, [1, 2, 5]);
  if (E.ROADMAP) setze(L.ROADMAP, E.ROADMAP, [0, 1]);
  if (E.BUGS) setze(L.BUGS, E.BUGS, [0, 1, 2, 3]);
  ["CODES_HINWEIS", "CHEAT_EINGABE", "CHEAT_WARNUNG", "TROPHAEEN_INFO", "GLITCH_WARNUNG", "STRANGERS_INFO", "HUNDERT_INFO"].forEach(k => { if (E[k]) L[k] = E[k]; });
  ["ANGELN", "JAGD_INFO", "TAUCH_ANLEITUNG", "FAHNDUNG_TIPPS"].forEach(k => { if (E[k] && L[k]) E[k].forEach((t, i) => { if (typeof L[k][i] === "string") L[k][i] = t; else if (L[k][i]) L[k][i].t = t; }); });
  /* alles, was sonst noch deutsch ist: Musterübersetzung */
  const tief = x => typeof x === "string" ? trS(x) : Array.isArray(x) ? x.map(tief) : x;
  ["GELD", "GELD_REGELN", "VERPASSBAR", "TIPPS", "AUTOS", "LAGER", "STRANGERS", "CHEATS", "TROPHAEEN"].forEach(k => {
    if (!Array.isArray(L[k])) return;
    L[k] = L[k].map(x => Array.isArray(x) ? tief(x) : x && typeof x === "object" ? Object.fromEntries(Object.entries(x).map(([a, b]) => [a, tief(b)])) : tief(x));
  });
}

/* ---------------------------------------------------------------- Oberfläche übersetzen */
const I18N_ATTR = ["placeholder", "title", "aria-label"];
function knotenUebersetzen(root) {
  if (LANG !== "en") return;
  if (root.nodeType === 3) { const t = trS(root.nodeValue); if (t !== root.nodeValue) root.nodeValue = t; return; }
  if (root.nodeType !== 1) return;
  if (root.closest && root.closest("[data-noi18n], script, style, code, textarea")) return;
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {
    acceptNode: n => n.nodeType === 1 ? (n.matches("[data-noi18n], script, style, code, textarea, svg") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_SKIP) : NodeFilter.FILTER_ACCEPT
  });
  const els = [root, ...root.querySelectorAll("[placeholder],[title],[aria-label]")];
  els.forEach(el => I18N_ATTR.forEach(a => { const v = el.getAttribute && el.getAttribute(a); if (v) { const t = trS(v); if (t !== v) el.setAttribute(a, t); } }));
  let n; while ((n = w.nextNode())) { const t = trS(n.nodeValue); if (t !== n.nodeValue) n.nodeValue = t; }
}
function oberflaecheStarten() {
  if (LANG !== "en") return;
  knotenUebersetzen(document.body);
  new MutationObserver(list => list.forEach(m => {
    if (m.type === "characterData") knotenUebersetzen(m.target);
    else m.addedNodes.forEach(knotenUebersetzen);
  })).observe(document.body, { childList: true, subtree: true, characterData: true });
  /* toasts und Dialoge laufen über textContent → werden ebenfalls erfasst */
}

/* ---------------------------------------------------------------- Wörterbuch */
(function () {
  const D = I18N_DICT, R = (re, f) => I18N_REGEL.push([re, f]);
  window.I18N_ADD = (obj) => Object.assign(D, obj);
  window.I18N_R = R;
})();
