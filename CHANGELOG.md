# Changelog

## 2026-11-23
- Nachtrag v9.4 aus dem Artifact übernommen (`nachtrag.js`, `lage.js`): 27 neue Orte (13 Flamingos → 39/125, 8 Easter Eggs, 6 Randy-Autos), 4 Ergänzungen, Tipps, Bugs, Verpassbares, Auto-Verkaufswerte; 24 neue ungefähre Pins über `lage_ergaenzen.py`.

## 2026-11-22
- Stand v11 aus dem Artifact übernommen: interaktive Karte mit Spiel-Legende (`karte2.js`, `legende.js`, `symbole.js`, Leaflet.markercluster), geprüfte/ungefähre Positionen (`lage.js`, `positionen.js`), tägliche Nachträge (`nachtrag.js`, 1.347 Einträge).
- GitHub Pages ist jetzt der Hauptweg, ohne GitHub Actions: `npm run publish` prüft `main` mit `npm run check` und schiebt die gebaute Seite in den Zweig `gh-pages`; Actions-Workflow entfernt; `verify-deploy` zeigt auf GitHub Pages.
- `npm run check` an v11 angepasst (neue Datendateien, Pins/Cluster statt `.pin`).
- Barrierefreiheit: Beschriftungen für Stadtfilter, 100-%-Zähler und Export-Feld wieder ergänzt (DE/EN).

## 2026-11-21
- Umbau auf Projektstandard: Seite in `public/`, `npm run build` → `dist/` (Node 22), `npm run check` (Syntax, Datentests, Build, Größenbudget, Browser PC/iPad/iPhone DE+EN, Offline, Barrierefreiheit), Build-ID in `build.json` + `npm run verify-deploy`, GitHub-Pages-Workflow, `CLAUDE.md`.
- Barrierefreiheit: Beschriftungen für Stadtfilter, 100-%-Zähler und Export-Feld.
- Repo angelegt: Grundgerüst für Cloudflare Pages (`_headers`, README, Changelog).
- Stand v7.1 aus dem Artifact übernommen (inkl. `community.js` und allen 132 Kachelpaketen).
