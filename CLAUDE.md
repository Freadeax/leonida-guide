# Leonida Guide – Regeln für die Arbeit im Repo

Projektsprache ist Deutsch. Statische Web-App (Karte + Ratgeber zu GTA VI / Leonida), läuft auf PC, iPad und Handy.

## 1. Aufbau
- `public/` – die Seite selbst (wird unverändert ausgeliefert): `index.html`, Karte (`karte2.js`, `legende.js`, `symbole.js`, `lage.js`, `positionen.js`), Inhalte (`data.js`, `gebiete.js`, `funde.js`, `community.js`, `orte.js`, `nachtrag.js`), Englisch (`data-en.js`, `i18n.js`, `i18n-en.js`), Leaflet + markercluster, `tiles/`, `_headers`.
- `nachtrag.js` und `lage.js` werden von Werkzeugen erzeugt (siehe Projekt-Doku `werkzeug-nachtrag.md`, `werkzeug-lage*.md`) – nicht von Hand ändern. Nach Nachträgen `lage.js` neu bauen.
- `scripts/build.mjs` – baut `public/` → `dist/`, hängt Inhalts-Hashes an Skripte/Styles (`?v=…`) und schreibt `dist/build.json` (Commit + Zeit).
- `scripts/check.mjs` – alle Prüfungen (siehe 2).
- `scripts/verify-deploy.mjs` – vergleicht nach dem Deploy die Build-ID der Live-Seite mit dem Commit.
- `dist/` wird nie eingecheckt.

## 2. Prüfungen
- `npm run check` läuft vor jedem Merge: Syntax (JS + JSON), Datentests (eindeutige IDs, gültige Koordinaten, Kategorien, Quellen, alle `at`-Verweise, vollständige Kachelpakete, Lizenzhinweis), Build, Größenbudget, Browser (PC, iPad, iPhone, jeweils DE und EN, alle Ansichten ohne JS-Fehler), Offline (Karte lädt nur aus eigenen Dateien) und Barrierefreiheit (Sprache, Viewport, Namen für Bedienelemente, Feldbeschriftungen, Alt-Texte).
- Größenbudget: je Datei ≤ 25 MiB (Cloudflare-Grenze, Warnung ab 5 MiB), ≤ 20.000 Dateien, gesamt ≤ 150 MiB, Programm + Daten ohne Leaflet und Kacheln ≤ 1,5 MiB.
- Browserprüfungen brauchen Playwright (`npm i -D playwright && npx playwright install chromium`). Ohne Playwright werden sie übersprungen und als Warnung gemeldet – vor einem Merge nicht akzeptabel.

## 3. Bereitstellung: GitHub Pages (ohne GitHub Actions)
- Live: https://freadeax.github.io/leonida-guide/ (Seite liegt unter einem Unterpfad → nur relative Pfade verwenden).
- Keine GitHub Actions. Pages liefert den Zweig `gh-pages` aus (Settings → Pages → Source „Deploy from a branch“ → `gh-pages` / root).
- `gh-pages` enthält nur die gebaute Seite (`dist/` + `.nojekyll`) und wird nie von Hand bearbeitet.
- Veröffentlichen: nach dem Merge auf `main` → `npm run publish` (prüft sauberen Stand, läuft `npm run check`, schiebt `dist/` nach `gh-pages`). Bei rotem Check wird nichts veröffentlicht.
- Danach: `npm run verify-deploy` – Build-ID live muss dem Commit auf `main` entsprechen.
- Kachelpakete nie überschreiben, geänderte Kacheln nur unter neuem Pfad (z. B. `tiles/v2/`). `public/_headers` wirkt nur bei Cloudflare Pages (früheres Projekt `leonida-helfer`, nicht mehr Hauptweg).

## 4. Git
- `main` ist der einzige dauerhafte Zweig und immer startbar.
- Ablauf: kurzer Zweig von `origin/main` → Änderung → `npm run check` → PR → Merge → Zweig sofort löschen → `npm run publish` von `main`.
- `gh-pages` ist ein reiner Auslieferungszweig (kein Arbeitszweig).
- Jede Änderung bekommt eine Zeile in `CHANGELOG.md`.
- Originalmaterial (Rohrecherche, Screenshots, fremde Texte) kommt nie in den Build und nicht in dieses Repo.

## 5. Inhalte
- Neue Orte: `public/funde.js` (Format siehe Kopfkommentar), englischer Text im Feld `en`.
- Jede Angabe mit Quelle (`src` → Schlüssel in `LH.QUELLEN`) und Sicherheit (`q`: `m` mehrere Quellen, `e` eine Quelle, `u` uneins).
- Lizenzhinweis zu gtadb (CC BY 4.0) in der App nie entfernen.
