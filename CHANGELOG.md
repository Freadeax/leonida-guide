# Changelog

## 2026-11-22
- Stand v11 aus dem Artifact übernommen: interaktive Karte mit Spiel-Legende (`karte2.js`, `legende.js`, `symbole.js`, Leaflet.markercluster), geprüfte/ungefähre Positionen (`lage.js`, `positionen.js`), tägliche Nachträge (`nachtrag.js`, 1.347 Einträge).
- GitHub Pages ist jetzt der Hauptweg: Workflow prüft jeden Push/PR mit `npm run check` (inkl. Browser), veröffentlicht nur grüne `main`-Stände; `verify-deploy` zeigt auf GitHub Pages.
- `npm run check` an v11 angepasst (neue Datendateien, Pins/Cluster statt `.pin`).
- Barrierefreiheit: Beschriftungen für Stadtfilter, 100-%-Zähler und Export-Feld wieder ergänzt (DE/EN).

## 2026-11-21
- Umbau auf Projektstandard: Seite in `public/`, `npm run build` → `dist/` (Node 22), `npm run check` (Syntax, Datentests, Build, Größenbudget, Browser PC/iPad/iPhone DE+EN, Offline, Barrierefreiheit), Build-ID in `build.json` + `npm run verify-deploy`, GitHub-Pages-Workflow, `CLAUDE.md`.
- Barrierefreiheit: Beschriftungen für Stadtfilter, 100-%-Zähler und Export-Feld.
- Repo angelegt: Grundgerüst für Cloudflare Pages (`_headers`, README, Changelog).
- Stand v7.1 aus dem Artifact übernommen (inkl. `community.js` und allen 132 Kachelpaketen).
