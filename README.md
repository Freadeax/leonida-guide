# Leonida Guide

GTA-6-Helfer für Leonida: interaktive Karte mit Fundorten, Geld, Missionen, Codes, Cheats und 100-%-Checkliste. Läuft am PC und am iPad (Safari/Chrome).

**Live:** https://leonida-helfer.pages.dev

## Entwicklung
```
npm run build          # public/ → dist/
npm run check          # alle Prüfungen (vor jedem Merge)
npm run verify-deploy  # Live-Build-ID mit main vergleichen
```
Node 22. Keine Abhängigkeiten zur Laufzeit; Playwright nur lokal für die Browserprüfungen.

## Bereitstellung
- Cloudflare Pages (Projekt `leonida-helfer`) ist mit diesem Repo verbunden: **jeder Push auf `main` geht automatisch online.**
- Pages-Einstellungen: Build-Befehl `npm run build`, Ausgabeverzeichnis `dist`, Node 22.
- Header (Caching, Sicherheit): `public/_headers`.
- Parallel: GitHub Pages über `.github/workflows/pages.yml`.

## Dateien
| Pfad | Inhalt |
|---|---|
| `public/index.html` | Programm (Karte, alle Ansichten, Sprachschalter) |
| `public/leaflet.*` | Leaflet 1.9.4 (BSD-2) |
| `public/data.js`, `gebiete.js`, `funde.js`, `community.js`, `orte.js` | Inhalte |
| `public/data-en.js`, `i18n.js`, `i18n-en.js` | Englisch + Sprachumschaltung |
| `public/tiles/` | Kartenkacheln von map.gtadb.org (CC BY 4.0), als JSON-Pakete |
| `scripts/` | Build, Prüfungen, Deploy-Abgleich |

## Regeln
- Arbeitsregeln für Menschen und KI: `CLAUDE.md`.
- Kachelpakete sind ein Jahr gecacht (`immutable`): geänderte Kacheln nur unter neuem Pfad ablegen (z. B. `tiles/v2/`).
- Jede Änderung bekommt eine Zeile in `CHANGELOG.md`.
- Spielstände liegen im localStorage des Browsers (`leonida-helper-v3`, `leonida-lang`).

## Lizenzen
- Programmcode: MIT (siehe `LICENSE`).
- Kartenkacheln und Ortsnamen: GTADB.ORG, CC BY 4.0 – Namensnachweis in der App nicht entfernen.
- Leaflet: BSD-2-Clause.
- GTA VI © Rockstar Games; dies ist ein inoffizielles Fanprojekt.
