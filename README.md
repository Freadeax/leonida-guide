# Leonida Guide

GTA-6-Helfer für Leonida: interaktive Karte (Legende wie im Spiel, Pins, Cluster, „gefunden“-Haken) mit Fundorten, Geld, Missionen, Codes, Cheats und 100-%-Checkliste. Deutsch/Englisch. Läuft am PC, iPad und iPhone (Safari/Chrome).

**Live:** https://freadeax.github.io/leonida-guide/

## Entwicklung
```
npm run build          # public/ → dist/
npm run check          # alle Prüfungen (vor jedem Merge)
npm run publish        # main prüfen, bauen und nach gh-pages veröffentlichen
npm run verify-deploy  # Live-Build-ID mit main vergleichen
```
Node 22. Keine Abhängigkeiten zur Laufzeit; Playwright nur lokal für die Browserprüfungen.

## Bereitstellung (GitHub Pages, ohne Actions)
- GitHub Pages liefert den Zweig **`gh-pages`** aus. Einmalig: *Settings → Pages → Source: Deploy from a branch → `gh-pages` / (root)*.
- `npm run publish` (nur von `main`): prüft alles mit `npm run check`, baut `dist/` und schiebt es nach `gh-pages`. Nach ca. 1 Minute ist die neue Fassung online. Ist ein Check rot, wird nichts veröffentlicht.
- `gh-pages` nie von Hand bearbeiten. Neue Fassungen erkennt der Browser über die Inhalts-Hashes (`?v=…`), die der Build setzt.
- `public/_headers` gilt nur bei Cloudflare Pages (früheres Projekt `leonida-helfer`, nicht mehr Hauptweg); GitHub Pages ignoriert die Datei.

## Dateien
| Pfad | Inhalt |
|---|---|
| `public/index.html` | Programm (alle Ansichten, Sprachschalter) |
| `public/karte2.js`, `legende.js`, `symbole.js` | Interaktive Karte: Seitenleiste mit Spiel-Legende, Pins, Popups |
| `public/lage.js`, `positionen.js` | Geprüfte bzw. ungefähre Kartenpositionen (aus der gtadb-Ortsliste) |
| `public/data.js`, `gebiete.js`, `funde.js`, `community.js`, `orte.js`, `nachtrag.js` | Inhalte (`nachtrag.js` = tägliche Nachträge) |
| `public/data-en.js`, `i18n.js`, `i18n-en.js` | Englisch + Sprachumschaltung |
| `public/leaflet.*`, `leaflet.markercluster.js`, `MarkerCluster.css` | Leaflet 1.9.4 (BSD-2), Leaflet.markercluster 1.5.3 (MIT) |
| `public/tiles/` | Kartenkacheln von map.gtadb.org (CC BY 4.0), als JSON-Pakete |
| `scripts/` | Build, Prüfungen, Deploy-Abgleich |

## Regeln
- Arbeitsregeln für Menschen und KI: `CLAUDE.md`.
- Kachelpakete nie überschreiben: geänderte Kacheln nur unter neuem Pfad ablegen (z. B. `tiles/v2/`).
- Jede Änderung bekommt eine Zeile in `CHANGELOG.md`.
- Spielstände liegen im localStorage des Browsers (`leonida-helper-v3`, `leonida-lang`).

## Lizenzen
- Programmcode: MIT (siehe `LICENSE`).
- Kartenkacheln und Ortsnamen: GTADB.ORG, CC BY 4.0 – Namensnachweis in der App nicht entfernen.
- Leaflet: BSD-2-Clause. Leaflet.markercluster: MIT.
- GTA VI © Rockstar Games; dies ist ein inoffizielles Fanprojekt. Eigene Piktogramme, keine Spiel-Icons.
