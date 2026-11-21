# Leonida Guide – Regeln für die Arbeit im Repo

Projektsprache ist Deutsch. Statische Web-App (Karte + Ratgeber zu GTA VI / Leonida), läuft auf PC, iPad und Handy.

## 1. Aufbau
- `public/` – die Seite selbst (wird unverändert ausgeliefert): `index.html`, Inhalte (`data.js`, `gebiete.js`, `funde.js`, `community.js`, `orte.js`), Englisch (`data-en.js`, `i18n.js`, `i18n-en.js`), Leaflet, `tiles/`, `_headers`.
- `scripts/build.mjs` – baut `public/` → `dist/`, hängt Inhalts-Hashes an Skripte/Styles (`?v=…`) und schreibt `dist/build.json` (Commit + Zeit).
- `scripts/check.mjs` – alle Prüfungen (siehe 2).
- `scripts/verify-deploy.mjs` – vergleicht nach dem Deploy die Build-ID der Live-Seite mit dem Commit.
- `dist/` wird nie eingecheckt.

## 2. Prüfungen
- `npm run check` läuft vor jedem Merge: Syntax (JS + JSON), Datentests (eindeutige IDs, gültige Koordinaten, Kategorien, Quellen, alle `at`-Verweise, vollständige Kachelpakete, Lizenzhinweis), Build, Größenbudget, Browser (PC, iPad, iPhone, jeweils DE und EN, alle Ansichten ohne JS-Fehler), Offline (Karte lädt nur aus eigenen Dateien) und Barrierefreiheit (Sprache, Viewport, Namen für Bedienelemente, Feldbeschriftungen, Alt-Texte).
- Größenbudget: je Datei ≤ 25 MiB (Cloudflare-Grenze, Warnung ab 5 MiB), ≤ 20.000 Dateien, gesamt ≤ 150 MiB, Programm + Daten ohne Leaflet und Kacheln ≤ 1,5 MiB.
- Browserprüfungen brauchen Playwright (`npm i -D playwright && npx playwright install chromium`). Ohne Playwright werden sie übersprungen und als Warnung gemeldet – vor einem Merge nicht akzeptabel.

## 3. Cloudflare Pages
- Projekt `leonida-helfer`, direkt mit diesem GitHub-Repo verbunden. Jeder Push auf `main` baut automatisch: Build-Befehl `npm run build`, Ausgabe `dist`, Node 22 (`.nvmrc`). GitHub Actions sind dafür nicht nötig.
- Die Header kommen aus `public/_headers`. Kachelpakete sind ein Jahr gecacht (`immutable`): geänderte Kacheln nur unter neuem Pfad ablegen (z. B. `tiles/v2/`).
- Nach dem Deploy: `npm run verify-deploy` – Build-ID live muss dem Commit auf `main` entsprechen.
- Parallel läuft GitHub Pages über `.github/workflows/pages.yml` (gleicher Build).

## 4. Git
- `main` ist der einzige dauerhafte Zweig und immer startbar.
- Ablauf: kurzer Zweig von `origin/main` → Änderung → `npm run check` → PR → Merge → Zweig sofort löschen.
- Jede Änderung bekommt eine Zeile in `CHANGELOG.md`.
- Originalmaterial (Rohrecherche, Screenshots, fremde Texte) kommt nie in den Build und nicht in dieses Repo.

## 5. Inhalte
- Neue Orte: `public/funde.js` (Format siehe Kopfkommentar), englischer Text im Feld `en`.
- Jede Angabe mit Quelle (`src` → Schlüssel in `LH.QUELLEN`) und Sicherheit (`q`: `m` mehrere Quellen, `e` eine Quelle, `u` uneins).
- Lizenzhinweis zu gtadb (CC BY 4.0) in der App nie entfernen.
