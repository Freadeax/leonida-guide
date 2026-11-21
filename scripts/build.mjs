// Baut die Seite: public/ → dist/
// - kopiert alle Dateien unverändert
// - versieht Skripte und Styles in index.html mit einem Inhalts-Hash (?v=…),
//   damit Browser nach jedem Update sofort die neue Fassung laden
// - schreibt dist/build.json mit Commit und Zeit (zum Abgleich nach dem Deploy)
import { cpSync, rmSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { execSync } from "node:child_process";
import { join } from "node:path";

const SRC = "public", OUT = "dist";
const hash = (datei) => createHash("sha256").update(readFileSync(join(SRC, datei))).digest("hex").slice(0, 10);

function commit() {
  if (process.env.CF_PAGES_COMMIT_SHA) return process.env.CF_PAGES_COMMIT_SHA;
  if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA;
  try { return execSync("git rev-parse HEAD", { stdio: ["ignore", "pipe", "ignore"] }).toString().trim(); }
  catch { return "unbekannt"; }
}

rmSync(OUT, { recursive: true, force: true });
cpSync(SRC, OUT, { recursive: true });

let html = readFileSync(join(SRC, "index.html"), "utf8");
html = html.replace(/(src|href)="([\w.-]+\.(?:js|css))(?:\?v=[^"]*)?"/g, (m, attr, datei) =>
  existsSync(join(SRC, datei)) ? `${attr}="${datei}?v=${hash(datei)}"` : m);
writeFileSync(join(OUT, "index.html"), html);

const build = { commit: commit(), zeit: new Date().toISOString(), branch: process.env.CF_PAGES_BRANCH || null };
writeFileSync(join(OUT, "build.json"), JSON.stringify(build, null, 2) + "\n");
console.log(`Build fertig: ${OUT}/ · Commit ${build.commit.slice(0, 7)}`);
