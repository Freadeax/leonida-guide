// Vergleicht nach dem Deploy die Build-ID der Live-Seite mit dem lokalen Commit.
// Aufruf: npm run verify-deploy [-- https://adresse] (Standard: Cloudflare Pages)
import { execSync } from "node:child_process";
const url = (process.argv[2] || process.env.DEPLOY_URL || "https://leonida-helfer.pages.dev").replace(/\/$/, "");
const lokal = execSync("git rev-parse origin/main 2>/dev/null || git rev-parse HEAD").toString().trim();
const r = await fetch(`${url}/build.json`, { cache: "no-store" });
if (!r.ok) { console.error(`✗ ${url}/build.json: HTTP ${r.status}`); process.exit(1); }
const live = await r.json();
const gleich = live.commit === lokal;
console.log(`${gleich ? "✓" : "✗"} live ${live.commit.slice(0, 7)} (${live.zeit}) · erwartet ${lokal.slice(0, 7)} · ${url}`);
process.exit(gleich ? 0 : 1);
