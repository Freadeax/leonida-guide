// npm run publish – veröffentlicht die Seite auf GitHub Pages, ohne GitHub Actions.
// Ablauf: sauberer Arbeitsstand → npm run check (inkl. Build) → dist/ in den Zweig gh-pages → Push.
// GitHub Pages: Settings → Pages → Source „Deploy from a branch“ → gh-pages / (root).
import { execSync } from "node:child_process";
import { cpSync, rmSync, writeFileSync, readdirSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const sh = (c, opt = {}) => execSync(c, { stdio: ["ignore", "pipe", "inherit"], ...opt }).toString().trim();
const laut = (c, opt = {}) => execSync(c, { stdio: "inherit", ...opt });

if (sh("git status --porcelain")) { console.error("✗ Arbeitsstand nicht sauber – erst committen."); process.exit(1); }
const commit = sh("git rev-parse HEAD"), zweig = sh("git branch --show-current");
if (zweig !== "main" && !process.argv.includes("--zweig-ok")) {
  console.error(`✗ Veröffentlicht wird nur von main (aktuell: ${zweig}). Ausnahme: --zweig-ok`); process.exit(1);
}

laut("node scripts/check.mjs");          // bricht bei Fehlern ab, baut dist/

const wt = mkdtempSync(join(tmpdir(), "gh-pages-"));
let vorhanden = true;
try { sh("git fetch --depth=1 origin gh-pages"); } catch { vorhanden = false; }
if (vorhanden) laut(`git worktree add -B gh-pages "${wt}" FETCH_HEAD`);
else { laut(`git worktree add --detach "${wt}"`); laut("git checkout --orphan gh-pages", { cwd: wt }); }
try {
  for (const f of readdirSync(wt)) if (f !== ".git") rmSync(join(wt, f), { recursive: true, force: true });
  cpSync("dist", wt, { recursive: true });
  writeFileSync(join(wt, ".nojekyll"), "");  // GitHub Pages liefert die Dateien unverändert aus
  laut("git add -A", { cwd: wt });
  if (!sh("git status --porcelain", { cwd: wt })) console.log("✓ gh-pages ist schon aktuell");
  else {
    laut(`git commit -q -m "Veröffentlichung ${commit.slice(0, 7)} (${zweig})"`, { cwd: wt });
    laut("git -c push.negotiate=true push origin gh-pages", { cwd: wt });
    console.log(`✓ veröffentlicht: Commit ${commit.slice(0, 7)} → gh-pages (online nach ca. 1 Minute)`);
  }
} finally {
  laut(`git worktree remove --force "${wt}"`);
}
