/* =====================================================================
   LEONIDA HELPER – Positionskorrekturen (21.11.2026)
   Ergebnis der Positionsprüfung:
   - Einträge, deren Name ein eindeutiger gtadb-Ort ist (gleicher Name UND
     gleicher Stadtteil), sitzen jetzt genau auf diesem Punkt (g: 2).
   - Landpunkte, die laut Kartenkacheln im Wasser lagen, sind aufs nächste
     Land verschoben (Genauigkeit bleibt wie vorher).
   - Einträge ohne Kartenpunkt mit eindeutigem Ort haben einen bekommen
     (u. a. Messerflüge, BASE-Sprünge, Unter-Brücken-Flüge; Flüsse/Kanäle nur „ungefähr“).
   Format: id: [x, y, g]. Wird nach allen Datendateien geladen.
   Bewusst NICHT verschoben: Ketten mit anderem Stadtteil (Fleeca, Taco Bomb …),
   Ortsangaben mit „nördlich von …“ u. ä., Sammelkarten-Sets mit Ortsnamen.
   ===================================================================== */
"use strict";
(function () {
  const K = {
  "c-billard-gegner-7-the-rusty-anchor": [-2272, -5257, 2], // gtadb: The Rusty Anchor, Key Lento (vorher [-2461, -5827])
  "dienst-chacey-s-southside-southside": [-1763, -2514, 2], // gtadb: Chacey's, El Joven Blvd, Southside, Vice City (vorher [-1815, -2081])
  "dienst-peewees-southside-southside": [-1652, -2373, 2], // gtadb: Peewees, Southside, Vice City (vorher [-1612, -2043])
  "dienst-peewees-rockridge-rockridge": [-1339, 522, 2], // gtadb: Peewees, Rockridge, Vice City (vorher [-1117, 805])
  "dienst-stock-305-stockyard-stockyard": [-329, 1766, 2], // gtadb: Stock 305, Stockyard, Vice City (vorher [-335, 1845])
  "dienst-dock-ring-souvenirs-shoreline-shoreline": [33, 137, 2], // gtadb: Dock Ring, Shoreline, Vice City (vorher [-132, 205])
  "dienst-electric-fang-tattoo-stockyard-stockyard": [-379, 1840, 2], // gtadb: Electric Fang Tattoo, Stockyard, Vice City (vorher [-280, 1927])
  "dienst-wasteland-off-road-port-gellhorn-port-ge": [-6276, 4225, 2], // gtadb: Wasteland Off-Road, Port Gellhorn (vorher [-6423, 3705])
  "dienst-delights-cabaret-port-gellhorn": [-6360, 3591, 2], // gtadb: Delights, Interstate 404, Port Gellhorn (vorher [-6524, 3889])
  "dienst-uncle-jack-s-liquor-port-gellhorn-port-g": [-6355, 3866, 2], // gtadb: Uncle Jack's Liquor, Port Gellhorn (vorher [-6417, 3660])
  "dienst-taco-bomb-gellhorn-gellhorn": [-5250, 3499, 2], // gtadb: Taco Bomb, Historic Route 628, Kelly County (vorher [-5312, 3559])
  "dienst-eris-shoreline-shoreline": [-303, 430, 2], // gtadb: Sahara Arena, Catalan Blvd, Shoreline, Vice City (vorher [-334, 38])
  "raub-shorefront-downtown-downtown": [-393, -495, 2], // gtadb: ShoreFront, Downtown, Vice City (vorher [-541, -276])
  "raub-shorefront-rockridge-rockridge": [-1347, 801, 2], // gtadb: ShoreFront, Rockridge, Vice City (vorher [-1309, 737])
  "raub-fleeca-ocean-beach-ocean-beach": [1695, 45, 2], // gtadb: Fleeca, Ocean Beach, Vice Beach (vorher [1730, 686])
  "raub-fleeca-ocean-beach-ocean-beachx": [1695, 45, 2], // gtadb: Fleeca, Ocean Beach, Vice Beach (vorher [1730, 686])
  "pool-5": [-6360, 3591, 2], // gtadb: Delights, Interstate 404, Port Gellhorn (vorher [-6524, 3889])
  "c-karte-3-harley-delights-dancers": [-6360, 3591, 2], // gtadb: Delights, Interstate 404, Port Gellhorn (vorher [-6555, 3669])
  "gellhorn-raceway": [-6733, 2325, 2], // gtadb: Gellhorn International Raceway, Port Gellhorn (vorher [-6564, 2030])
  "c-billardtisch-ohne-gegner-grand-majestic": [-1065, -1317, 2], // gtadb: Grand Majestic, Tequesta, Vice City (vorher [-1218, -2091])
  "c-race-challenge-boone-speedway-trial": [-3092, -3376, 2], // gtadb: Boone Speedway, Hamlet (vorher [-2831, -3411])
  "waffe-pete-s-kz-59": [-817, 4360, 2], // gtadb: Sundown Private Airfield, Sundown, Waning Sands
  "c-pilot-pete-1-the-last-mile-passing-the-t": [-817, 4360, 2], // gtadb: Sundown Private Airfield, Sundown, Waning Sands
  "eclipse": [2247, 961, 0], // lag im Wasser, aufs nächste Land (104 Einheiten) (vorher [2350, 950])
  "laden-barrage": [-6283, -6394, 1], // lag im Wasser, aufs nächste Land (124 Einheiten) (vorher [-6191, -6311])
  "waffe-unpacked-comshot-12": [-2278, -5290, 0], // lag im Wasser, aufs nächste Land (12 Einheiten) (vorher [-2290, -5290])
  "waffe-mercenary-lmg-6": [583, -384, 0], // lag im Wasser, aufs nächste Land (92 Einheiten) (vorher [620, -300])
  "st-trailer-nw": [-2836, -5432, 0], // lag im Wasser, aufs nächste Land (88 Einheiten) (vorher [-2750, -5450])
  "st-riquezas": [-7996, -5411, 1], // lag im Wasser, aufs nächste Land (84 Einheiten) (vorher [-8080, -5420])
  "w-s6": [-479, -1087, 0], // lag im Wasser, aufs nächste Land (28 Einheiten) (vorher [-470, -1060])
  "c-moonstone-boutique-tuer-zum-saeurelabor": [-2501, -5706, 0], // lag im Wasser, aufs nächste Land (80 Einheiten) (vorher [-2555, -5647])
  "c-billardtisch-ohne-gegner-tiki-touchdown": [-2535, -5536, 0], // lag im Wasser, aufs nächste Land (36 Einheiten) (vorher [-2508, -5560])
  "c-billardtisch-ohne-gegner-riquezas-keys": [-7759, -5641, 0], // lag im Wasser, aufs nächste Land (96 Einheiten) (vorher [-7850, -5671])
  "c-bullhead-harpune": [-2185, -5865, 0], // lag im Wasser, aufs nächste Land (60 Einheiten) (vorher [-2161, -5920])
  /* Neu: Einträge aus v9 ohne Kartenpunkt, die nach einem gtadb-Ort benannt sind */
  "v9-71199251": [2030, 1010, 2], // gtadb: The Amalfi, Ocean Beach, Vice Beach
  "v9-d77a9863": [-393, -495, 2], // gtadb: ShoreFront, Downtown, Vice City
  "v9-e1a7ffa0": [-1065, -1317, 2], // gtadb: Grand Majestic, Tequesta, Vice City
  "v9-d9a3057e": [-288, 844, 2], // gtadb: The Sumerian, Delphino Cir, Bayside, Vice City
  "v9-43f281be": [-613, -879, 2], // gtadb: Fenestra Plaza, Tequesta, Vice City
  "v9-4da0c0b0": [-107, 1067, 2], // gtadb: Rivo Bridge, Rialto Islands
  "v9-6a445981": [-3430, 6371, 1], // gtadb: Mount Kalaga, Lummox County
  "v9-82e3f5ce": [-1606, 1038, 1], // gtadb: Fleeca Field, Rockridge, Vice City
  "v9-39472612": [-333, 4052, 1], // gtadb: Evergreen Mall, Waning Sands
  "v9-9808f15b": [-6733, 2325, 1], // gtadb: Gellhorn International Raceway, Port Gellhorn
  "v9-fc91bdbe": [1420, 1766, 1], // gtadb: Ajax Gym, SW 4th St, Vice Beach
  "v9-8ad92a64": [-1837, -2876, 1], // gtadb: Apollo Aggregates, Peregrine Bay
  "v9-156a2e5e": [-272, -456, 2], // gtadb: Clarissa Hotel, Downtown, Vice City (Nordseite)
  "v9-fa9776d2": [-227, -501, 2], // gtadb: Clarissa Hotel, Downtown, Vice City (Ostseite)
  "v9-f284082a": [-272, -546, 2], // gtadb: Clarissa Hotel, Downtown, Vice City (Südseite)
  "v9-e033a016": [-4115, 6943, 0], // ungefähr bei gtadb: MacAlister Gold Mine, Leonida
  "v9-0b3cff8b": [-2902, 6721, 0], // ungefähr bei gtadb: Kalaga Reservoir, Lummox County
  "v9-ba64bc5f": [257, 4290, 0], // ungefähr bei gtadb: Leith River, Leonard County
  "v9-949dc5e5": [222, 4201, 0], // ungefähr bei gtadb: Leith River, Leonard County
  "v9-1686a5da": [257, 3990, 0], // ungefähr bei gtadb: Leith River, Leonard County
  "v9-569d96b3": [-557, 4034, 0], // ungefähr bei gtadb: Canal, Leonard County
  "v9-869865c5": [-592, 3945, 0], // ungefähr bei gtadb: Canal, Leonard County
  "v9-a7e8b5df": [-557, 3734, 0], // ungefähr bei gtadb: Canal, Leonard County
  "v9-00923558": [-2636, 716, 0], // ungefähr bei gtadb: Tisha-Wocka Flea Market, Tisha-Wocka, Vice City
  "v9-a6d59771": [-2786, 786, 0], // ungefähr bei gtadb: Tisha-Wocka Flea Market, Tisha-Wocka, Vice City
  "v9-33e1674b": [-2936, 716, 0], // ungefähr bei gtadb: Tisha-Wocka Flea Market, Tisha-Wocka, Vice City
  "v9-e8b68854": [-2786, 646, 0], // ungefähr bei gtadb: Tisha-Wocka Flea Market, Tisha-Wocka, Vice City
  "v9-eb9ad980": [-1266, -74, 0], // ungefähr bei gtadb: Vice River, Vice City
  "v9-4ab901bc": [-1266, -374, 0], // ungefähr bei gtadb: Vice River, Vice City
  "v9-871fc4a1": [-6124, -442, 0], // ungefähr bei gtadb: Nehrling River, Mariana County
  "v9-82845420": [-6344, -442, 0], // ungefähr bei gtadb: Nehrling River, Mariana County
  "v9-955079e2": [-6044, -442, 0], // ungefähr bei gtadb: Nehrling River, Mariana County
  "v9-91e9600c": [-6484, -1378, 0], // ungefähr bei gtadb: Bobcat Key, Mariana County
  "v9-5fee686b": [-6519, -1467, 0], // ungefähr bei gtadb: Bobcat Key, Mariana County
  "v9-4a25530c": [-6484, -1678, 0], // ungefähr bei gtadb: Bobcat Key, Mariana County
  "v9-c9f64643": [-3682, -1007, 0], // ungefähr bei gtadb: Goliath, Mariana County
  "v9-ce7300d9": [-1903, -2650, 0], // ungefähr bei gtadb: Fuzzard Drain Canal, Vice-Dale County
  "v9-c0787cde": [-2088, -2589, 0], // ungefähr bei gtadb: Fuzzard Drain Canal, Vice-Dale County
  "v9-24f3153a": [-2203, -2650, 0], // ungefähr bei gtadb: Fuzzard Drain Canal, Vice-Dale County
  "waffe-honky-tonk-mustang-357": [-1812, -2463, 2], // gtadb: Phil's Ammu-Nation
  "waffe-star-spangled-556": [-1812, -2463, 2], // gtadb: Phil's Ammu-Nation
  "waffe-mossy-mediator": [-6283, -6394, 1], // wie Barrage Gun Supply (laden-barrage)
  "waffe-chronic-vatra": [-5250, -1684, 1], // wie Illegal Operation gang-29
  "waffe-final-chapter-kvga-12": [-2939, 3996, 1], // wie Illegal Operation gang-16
  };
  const byId = {}; LH.ORTE.forEach(o => { byId[o.id] = o; });
  Object.entries(K).forEach(([id, [x, y, g]]) => { const o = byId[id]; if (!o) return; o.p = [x, y]; o.g = g; });
})();
