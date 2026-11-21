# Leonida Guide

GTA-6-Helfer für Leonida: interaktive Karte mit Fundorten, Geld, Missionen, Codes, Cheats und 100-%-Checkliste. Läuft am PC und am iPad (Safari/Chrome).

**Live:** https://leonida-guide.pages.dev

## Bereitstellung
- Statische Seite, kein Build-Schritt. Cloudflare Pages ist mit diesem Repo verbunden.
- **Jeder Push auf `main` geht automatisch online** (ca. 1 Minute).
- Pages-Einstellungen: Framework „None“, Build-Befehl leer, Ausgabeverzeichnis `/`.
- Caching und Sicherheits-Header: `_headers`.

## Dateien
| Datei | Inhalt |
|---|---|
| `index.html` | Programm (Karte, alle Ansichten, Sprachschalter) |
| `leaflet.js`, `leaflet.css` | Leaflet 1.9.4 (BSD-2) |
| `data.js`, `gebiete.js`, `funde.js`, `community.js`, `orte.js` | Inhalte |
| `data-en.js`, `i18n.js`, `i18n-en.js` | Englisch + Sprachumschaltung |
| `tiles/` | Kartenkacheln von map.gtadb.org (CC BY 4.0), als JSON-Pakete |

## Regeln
- Alles bleibt im Wurzelverzeichnis.
- Kachelpakete sind ein Jahr gecacht (`immutable`): geänderte Kacheln nur unter neuem Pfad ablegen (z. B. `tiles/v2/`).
- Jede Änderung bekommt eine Zeile in `CHANGELOG.md`.
- Spielstände liegen im localStorage des Browsers (`leonida-helper-v3`, `leonida-lang`).

## Lizenzen
- Programmcode: MIT (siehe `LICENSE`).
- Kartenkacheln und Ortsnamen: GTADB.ORG, CC BY 4.0 – Namensnachweis in der App nicht entfernen.
- Leaflet: BSD-2-Clause.
- GTA VI © Rockstar Games; dies ist ein inoffizielles Fanprojekt.
