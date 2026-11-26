# Changelog

## 2026-11-26
- Nachtrag v9.7 aus dem Artifact übernommen (`nachtrag.js`, `lage.js`): 92 neue Orte (51 WAiNK-Scans, 12 No-Flusher-Tags, 6 Unterwasser-Entdeckungen inkl. BURG-Stationen, 3 Flamingos, 18 Autos mit Fundort, 2 Easter Eggs), 18 Ergänzungen (Kenton-Wracks, Fundwege für CPD Moreland 850, Tyrone's W-10, Convict Kalinga .50 u. a.), 16 Tipps, 5 Verpassbares, 4 Bugs, Auto-/Lager-/Jagd-Infos, Patch-Stand 26.11.; 73 neue ungefähre Pins. Neuer Untertyp „Unterwasser-Entdeckung“ (`symbole.js`, `legende.js`, `i18n-en.js`). Cache-Stand `?v=113`.

## 2026-11-24 (2)
- Nachtrag v9.6: 12 neue Magazine/Bücher/Comics (u. a. 4 in Jasons Haus, nur Kapitel 1; RX Men, Trigger Happy, Drive Shaft mit Tresor-Code 5399, Pêche, Endowed, Ratface, Manly Gaze), Ort für „The Cowboy's Prayer Is to Die Young“.
- Kartenpunkte geprüft (`lage_verbessern.py`): 9 Punkte an gtadb-Orte gesetzt (Sunrise RV Park ×3 genau; Apollo Aggregates, Manatee Motel, Dawson Dam, Archipelago, Arcadia Towers ×2 in der Nähe), 26 bisher punktlose Einträge mit ungefährem Punkt (Hyde Island, Little Hardin Island, Frampton/Zephyr Islands, Catalan Key, Bluegrass, Starfish Island, Vespucci/Rialto Islands u. a.). Cache-Stand `?v=112`.

## 2026-11-24
- Nachtrag v9.5 aus dem Artifact übernommen (`nachtrag.js`, `lage.js`): Patch 01.002.002 (23.11.) mit Patchnotes, Glitch-Status nach dem Patch, 12 neue Orte (Easter Eggs, Trophäen-Orte, Russo-Mysterium), 22 BASE-Sprünge mit Absprungstelle, Tipps, Bugs, Verpassbares, Auto-, Lager- und Jagd-Infos; 13 neue ungefähre Pins. Cache-Stand `?v=111`.

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
