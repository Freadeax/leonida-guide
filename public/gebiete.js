/* AUTOMATISCH ERZEUGT von tools/gen_gebiete.py – nicht von Hand ändern, sondern das Skript anpassen.
   Gebäude nach Typ (PowerPyx), Waffenvarianten (DETONATED), Gebiete und Koordinaten (gtadb). Stand 20.11.2026. */
LH.QUELLEN.det = { name: "DETONATED (127 Waffenvarianten)", url: "https://detonated.com/all-127-weapon-variant-locations/" };
LH.QUELLEN.ppm = { name: "PowerPyx (Meditation)", url: "https://www.powerpyx.com/gta-6-all-meditation-spot-locations/" };
LH.GEBIETE_POS = {"Key Lento": [-2366, -5793, "Key Lento", "Mariana"], "Southwind": [-6373, -6381, "Leonida Keys (Süd)", "Mariana"], "Permit Keys": [-5774, -6360, "Leonida Keys (Süd)", "Mariana"], "Mile Zero": [-6956, -6403, "Leonida Keys (Süd)", "Mariana"], "Abismo Key": [-5127, -7328, "Leonida Keys (Süd)", "Mariana"], "Riquezas Keys": [-8083, -5419, "Leonida Keys (Süd)", "Mariana"], "Gambit Bay": [-2779, -5237, "Key Lento", "Mariana"], "Corsair Key": [-1254, -4533, "Grassrivers", "Mariana"], "Watson Bay": [-5020, -3324, "Watson Bay", "Mariana"], "Wetman Bay": [-4381, -4770, "Grassrivers", "Mariana"], "Grassrivers": [-3057, -4300, "Grassrivers", "Mariana"], "Gullet Marsh": [-3679, -3601, "Grassrivers", "Mariana"], "Cottonmouth Lake": [-3480, -4788, "Grassrivers", "Mariana"], "Pelican Valley": [-3716, -3085, "Grassrivers", "Mariana"], "Capri": [-6873, 273, "Capri", "Mariana"], "Belpoint": [-7879, -363, "Capri", "Mariana"], "Big Pine": [-5333, -1700, "Nord-Mariana", "Mariana"], "Bobcat Key": [-6484, -1528, "Nord-Mariana", "Mariana"], "Hamlet": [-2683, -3241, "Hamlet", "Vice-Dale"], "Peregrine Bay": [-1837, -2876, "Hamlet", "Vice-Dale"], "Southside": [-1773, -2057, "Vice City", "Vice-Dale"], "Peacock Bay": [-1205, -1880, "Vice City", "Vice-Dale"], "Tequesta": [-899, -1124, "Vice City", "Vice-Dale"], "Downtown": [-634, -147, "Vice City", "Vice-Dale"], "Little Cuba": [-1197, 66, "Vice City", "Vice-Dale"], "Salton": [-1416, -556, "Vice City", "Vice-Dale"], "VCIA": [-2300, -700, "Vice City", "Vice-Dale"], "Balsero": [-1791, 610, "Vice City", "Vice-Dale"], "Rockridge": [-1245, 814, "Vice City", "Vice-Dale"], "Crosstown": [-645, 1176, "Vice City", "Vice-Dale"], "La Perle": [-962, 1486, "Vice City", "Vice-Dale"], "Stockyard": [-349, 1798, "Vice City", "Vice-Dale"], "Bayside": [-339, 994, "Vice City", "Vice-Dale"], "Decor District": [-225, 2185, "Vice City", "Vice-Dale"], "Shoreline": [-284, 137, "Vice City", "Vice-Dale"], "Port Vice City": [597, -494, "Vice City", "Vice-Dale"], "Gloriana Key": [572, -1479, "Vice City", "Vice-Dale"], "Dalton Island": [1717, -1368, "Vice City", "Vice-Dale"], "Tisha-Wocka": [-2615, 834, "Vice City", "Vice-Dale"], "West Vice-Dale": [-2900, 300, "Vice City", "Vice-Dale"], "Ocean Beach": [1732, 743, "Vice Beach", "Vice-Dale"], "Washington Beach": [1779, 2158, "Vice Beach", "Vice-Dale"], "Leaf Links": [435, 2449, "Vice Beach", "Vice-Dale"], "Belville": [-1439, 2930, "Belville", "Leonard"], "Waning Sands": [48, 4043, "Waning Sands", "Leonard"], "Lake Leonida": [-1975, 4732, "Lake Leonida", "Leonard"], "Ambrosia": [-2776, 3890, "Ambrosia", "Kelly"], "Port Gellhorn": [-6493, 3782, "Port Gellhorn", "Kelly"], "Gellhorn": [-5300, 3500, "Gellhorn", "Kelly"], "Buckskin Swamp": [-4133, 920, "Buckskin Swamp", "Kelly"], "Emerald Springs": [-4282, 2353, "Emerald Springs", "Kelly"], "Manifest Canyon": [-4990, 5127, "Manifest Canyon", "Kelly"], "Draper Island": [-7013, 4900, "Port Gellhorn", "Kelly"], "North Kelly County": [-4300, 4800, "Manifest Canyon", "Kelly"], "Millport": [-982, 6489, "Millport", "Lummox"], "Mount Kalaga": [-3430, 6371, "Mount Kalaga", "Lummox"], "Kalaga Reservoir": [-2902, 6721, "Mount Kalaga", "Lummox"], "Moreau": [-3872, 7923, "Moreau", "Lummox"], "Lake Tallaloko": [-1718, 7122, "Millport", "Lummox"], "Saint Attaway Islands": [-3157, 8508, "Moreau", "Lummox"], "Yorktown": [-5613, 6887, "Moreau", "Lummox"]};
LH.STAEDTE = ["Ambrosia", "Belville", "Buckskin Swamp", "Capri", "Emerald Springs", "Gellhorn", "Grassrivers", "Hamlet", "Key Lento", "Lake Leonida", "Leonida Keys (Süd)", "Manifest Canyon", "Millport", "Moreau", "Mount Kalaga", "Nord-Mariana", "Port Gellhorn", "Vice Beach", "Vice City", "Waning Sands", "Watson Bay"];
LH.ORTE = LH.ORTE.filter(o => o.id !== "medi-hinweis");
LH.ORTE.forEach(o => { if (o.k === "spray") { o.k = "dienst"; o.typ = "Pay 'n' Spray"; } });
LH.ORTE.push(...[
{
"id": "dienst-xero-gas-southwind-southwind",
"k": "dienst",
"typ": "Tankstelle",
"n": "Xero Gas – Southwind",
"r": "Southwind, Mariana County",
"geb": "Leonida Keys (Süd)",
"p": [
-6296,
-6325
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-globe-oil-gas-watson-bay-watson-bay",
"k": "dienst",
"typ": "Tankstelle",
"n": "Globe Oil Gas – Watson Bay",
"r": "Watson Bay, Mariana County",
"geb": "Watson Bay",
"p": [
-5103,
-3185
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-gas-grassrivers-grassrivers",
"k": "dienst",
"typ": "Tankstelle",
"n": "Xero Gas – Grassrivers",
"r": "Grassrivers, Mariana County",
"geb": "Grassrivers",
"p": [
-3089,
-4347
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-gas-grassrivers-grassriversx",
"k": "dienst",
"typ": "Tankstelle",
"n": "Xero Gas – Grassrivers",
"r": "Grassrivers, Mariana County",
"geb": "Grassrivers",
"p": [
-3089,
-4347
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-gas-capri-capri",
"k": "dienst",
"typ": "Tankstelle",
"n": "Xero Gas – Capri",
"r": "Capri, Mariana County",
"geb": "Capri",
"p": [
-6836,
239
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ltd-gas-capri-capri",
"k": "dienst",
"typ": "Tankstelle",
"n": "LTD Gas – Capri",
"r": "Capri, Mariana County",
"geb": "Capri",
"p": [
-6931,
154
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-gas-hamlet-hamlet",
"k": "dienst",
"typ": "Tankstelle",
"n": "Xero Gas – Hamlet",
"r": "Hamlet, Vice-Dale County",
"geb": "Hamlet",
"p": [
-2610,
-3292
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-globe-oil-gas-hamlet-hamlet",
"k": "dienst",
"typ": "Tankstelle",
"n": "Globe Oil Gas – Hamlet",
"r": "Hamlet, Vice-Dale County",
"geb": "Hamlet",
"p": [
-2627,
-3217
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ltd-gas-hamlet-hamlet",
"k": "dienst",
"typ": "Tankstelle",
"n": "LTD Gas – Hamlet",
"r": "Hamlet, Vice-Dale County",
"geb": "Hamlet",
"p": [
-2639,
-3395
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-arrow-gas-hamlet-hamlet",
"k": "dienst",
"typ": "Tankstelle",
"n": "Arrow Gas – Hamlet",
"r": "Hamlet, Vice-Dale County",
"geb": "Hamlet",
"p": [
-2815,
-3213
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-gas-southside-southside",
"k": "dienst",
"typ": "Tankstelle",
"n": "Xero Gas – Southside",
"r": "Southside, Vice-Dale County",
"geb": "Vice City",
"p": [
-1716,
-2149
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ron-gas-southside-southside",
"k": "dienst",
"typ": "Tankstelle",
"n": "Ron Gas – Southside",
"r": "Southside, Vice-Dale County",
"geb": "Vice City",
"p": [
-1814,
-2211
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-gas-tequesta-tequesta",
"k": "dienst",
"typ": "Tankstelle",
"n": "Xero Gas – Tequesta",
"r": "Tequesta, Vice-Dale County",
"geb": "Vice City",
"p": [
-992,
-1126
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-arrow-gas-vcia-vcia",
"k": "dienst",
"typ": "Tankstelle",
"n": "Arrow Gas – VCIA",
"r": "VCIA, Vice-Dale County",
"geb": "Vice City",
"p": [
-2279,
-660
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-gas-salton-salton",
"k": "dienst",
"typ": "Tankstelle",
"n": "Xero Gas – Salton",
"r": "Salton, Vice-Dale County",
"geb": "Vice City",
"p": [
-1369,
-478
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ron-gas-salton-salton",
"k": "dienst",
"typ": "Tankstelle",
"n": "Ron Gas – Salton",
"r": "Salton, Vice-Dale County",
"geb": "Vice City",
"p": [
-1508,
-489
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-247-gas-west-vice-dale-west-vice-dale",
"k": "dienst",
"typ": "Tankstelle",
"n": "247 Gas – West Vice-Dale",
"r": "West Vice-Dale, Vice-Dale County",
"geb": "Vice City",
"p": [
-3002,
248
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ron-gas-balsero-balsero",
"k": "dienst",
"typ": "Tankstelle",
"n": "Ron Gas – Balsero",
"r": "Balsero, Vice-Dale County",
"geb": "Vice City",
"p": [
-1737,
546
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ron-gas-balsero-balserox",
"k": "dienst",
"typ": "Tankstelle",
"n": "Ron Gas – Balsero",
"r": "Balsero, Vice-Dale County",
"geb": "Vice City",
"p": [
-1737,
546
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ron-gas-little-cuba-little-cuba",
"k": "dienst",
"typ": "Tankstelle",
"n": "Ron Gas – Little Cuba",
"r": "Little Cuba, Vice-Dale County",
"geb": "Vice City",
"p": [
-1321,
-34
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-emilio-s-auto-center-gas",
"k": "dienst",
"typ": "Tankstelle",
"n": "Emilio's Auto Center Gas",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-globe-oil-gas-crosstown-crosstown",
"k": "dienst",
"typ": "Tankstelle",
"n": "Globe Oil Gas – Crosstown",
"r": "Crosstown, Vice-Dale County",
"geb": "Vice City",
"p": [
-718,
1091
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-gas-rockridge-rockridge",
"k": "dienst",
"typ": "Tankstelle",
"n": "Xero Gas – Rockridge",
"r": "Rockridge, Vice-Dale County",
"geb": "Vice City",
"p": [
-1252,
893
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-vargo-s-gas",
"k": "dienst",
"typ": "Tankstelle",
"n": "Vargo's Gas",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-gas-crosstown-crosstown",
"k": "dienst",
"typ": "Tankstelle",
"n": "Xero Gas – Crosstown",
"r": "Crosstown, Vice-Dale County",
"geb": "Vice City",
"p": [
-598,
1128
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-arrow-gas-la-perle-la-perle",
"k": "dienst",
"typ": "Tankstelle",
"n": "Arrow Gas – La Perle",
"r": "La Perle, Vice-Dale County",
"geb": "Vice City",
"p": [
-946,
1387
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-gas-la-perle-la-perle",
"k": "dienst",
"typ": "Tankstelle",
"n": "Xero Gas – La Perle",
"r": "La Perle, Vice-Dale County",
"geb": "Vice City",
"p": [
-1072,
1496
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ron-gas-bayside-bayside",
"k": "dienst",
"typ": "Tankstelle",
"n": "Ron Gas – Bayside",
"r": "Bayside, Vice-Dale County",
"geb": "Vice City",
"p": [
-272,
957
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-arrow-gas-decor-district-decor-district",
"k": "dienst",
"typ": "Tankstelle",
"n": "Arrow Gas – Decor District",
"r": "Decor District, Vice-Dale County",
"geb": "Vice City",
"p": [
-75,
2268
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-gas-washington-beach-washington-bea",
"k": "dienst",
"typ": "Tankstelle",
"n": "Xero Gas – Washington Beach",
"r": "Washington Beach, Vice-Dale County",
"geb": "Vice Beach",
"p": [
1874,
2232
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ron-gas-washington-beach-washington-beac",
"k": "dienst",
"typ": "Tankstelle",
"n": "Ron Gas – Washington Beach",
"r": "Washington Beach, Vice-Dale County",
"geb": "Vice Beach",
"p": [
1806,
2258
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ltd-gas-ocean-beach-ocean-beach",
"k": "dienst",
"typ": "Tankstelle",
"n": "LTD Gas – Ocean Beach",
"r": "Ocean Beach, Vice-Dale County",
"geb": "Vice Beach",
"p": [
1636,
861
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-gas-buckskin-swamp-buckskin-swamp",
"k": "dienst",
"typ": "Tankstelle",
"n": "Xero Gas – Buckskin Swamp",
"r": "Buckskin Swamp, Kelly County",
"geb": "Buckskin Swamp",
"p": [
-4020,
980
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-gas-buckskin-swamp-buckskin-swampx",
"k": "dienst",
"typ": "Tankstelle",
"n": "Xero Gas – Buckskin Swamp",
"r": "Buckskin Swamp, Kelly County",
"geb": "Buckskin Swamp",
"p": [
-4020,
980
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-gas-gellhorn-gellhorn",
"k": "dienst",
"typ": "Tankstelle",
"n": "Xero Gas – Gellhorn",
"r": "Gellhorn, Kelly County",
"geb": "Gellhorn",
"p": [
-5236,
3424
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-emerald-springs-country-store-gas",
"k": "dienst",
"typ": "Tankstelle",
"n": "Emerald Springs Country Store Gas",
"r": "Kelly County",
"county": "Kelly",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-247-gas-emerald-springs-emerald-springs",
"k": "dienst",
"typ": "Tankstelle",
"n": "247 Gas – Emerald Springs",
"r": "Emerald Springs, Kelly County",
"geb": "Emerald Springs",
"p": [
-4265,
2304
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-alpha-gas-gellhorn-gellhorn",
"k": "dienst",
"typ": "Tankstelle",
"n": "Alpha Gas – Gellhorn",
"r": "Gellhorn, Kelly County",
"geb": "Gellhorn",
"p": [
-5131,
3530
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-eager-beaver-gas",
"k": "dienst",
"typ": "Tankstelle",
"n": "Eager Beaver Gas",
"r": "Kelly County",
"county": "Kelly",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-oyster-point-gas-stop",
"k": "dienst",
"typ": "Tankstelle",
"n": "Oyster Point Gas Stop",
"r": "Kelly County",
"county": "Kelly",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-arrow-gas-port-gellhorn-port-gellhorn",
"k": "dienst",
"typ": "Tankstelle",
"n": "Arrow Gas – Port Gellhorn",
"r": "Port Gellhorn, Kelly County",
"geb": "Port Gellhorn",
"p": [
-6519,
3739
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-vortex-percy-s-general-store",
"k": "dienst",
"typ": "Tankstelle",
"n": "Vortex & Percy's General Store",
"r": "Kelly County",
"county": "Kelly",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-jackson-s-tire-co",
"k": "dienst",
"typ": "Tankstelle",
"n": "Jackson's Tire Co.",
"r": "Kelly County",
"county": "Kelly",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-gas-ambrosia-ambrosia",
"k": "dienst",
"typ": "Tankstelle",
"n": "Xero Gas – Ambrosia",
"r": "Ambrosia, Kelly County",
"geb": "Ambrosia",
"p": [
-2720,
4015
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-gas-belville-belville",
"k": "dienst",
"typ": "Tankstelle",
"n": "Xero Gas – Belville",
"r": "Belville, Leonard County",
"geb": "Belville",
"p": [
-1394,
2874
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-247-gas-belville-belville",
"k": "dienst",
"typ": "Tankstelle",
"n": "247 Gas – Belville",
"r": "Belville, Leonard County",
"geb": "Belville",
"p": [
-1584,
2896
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-arrow-gas-belville-belville",
"k": "dienst",
"typ": "Tankstelle",
"n": "Arrow Gas – Belville",
"r": "Belville, Leonard County",
"geb": "Belville",
"p": [
-1334,
2890
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-alpha-gas-belville-belville",
"k": "dienst",
"typ": "Tankstelle",
"n": "Alpha Gas – Belville",
"r": "Belville, Leonard County",
"geb": "Belville",
"p": [
-1286,
2943
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-gas-waning-sands-waning-sands",
"k": "dienst",
"typ": "Tankstelle",
"n": "Xero Gas – Waning Sands",
"r": "Waning Sands, Leonard County",
"geb": "Waning Sands",
"p": [
106,
4089
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-arrow-gas-waning-sands-waning-sands",
"k": "dienst",
"typ": "Tankstelle",
"n": "Arrow Gas – Waning Sands",
"r": "Waning Sands, Leonard County",
"geb": "Waning Sands",
"p": [
-110,
4057
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-globe-oil-gas",
"k": "dienst",
"typ": "Tankstelle",
"n": "Globe Oil Gas",
"r": "Lummox County",
"county": "Lummox",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-247-gas",
"k": "dienst",
"typ": "Tankstelle",
"n": "247 Gas",
"r": "Lummox County",
"county": "Lummox",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-buck-creek-country-store",
"k": "dienst",
"typ": "Tankstelle",
"n": "Buck Creek Country Store",
"r": "Lummox County",
"county": "Lummox",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-redshaw-s-gasoline",
"k": "dienst",
"typ": "Tankstelle",
"n": "Redshaw's Gasoline",
"r": "Lummox County",
"county": "Lummox",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-247-gas-millport-millport",
"k": "dienst",
"typ": "Tankstelle",
"n": "247 Gas – Millport",
"r": "Millport, Lummox County",
"geb": "Millport",
"p": [
-985,
6429
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-gas-millport-millport",
"k": "dienst",
"typ": "Tankstelle",
"n": "Xero Gas – Millport",
"r": "Millport, Lummox County",
"geb": "Millport",
"p": [
-1101,
6462
],
"g": 1,
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-food-mart-southwind-southwind",
"k": "dienst",
"typ": "Supermarkt",
"n": "Xero Food Mart – Southwind",
"r": "Southwind, Mariana County",
"geb": "Leonida Keys (Süd)",
"p": [
-6321,
-6353
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-randy-s-big-gas-mart",
"k": "dienst",
"typ": "Supermarkt",
"n": "Randy's Big Gas Mart",
"r": "Mariana County",
"county": "Mariana",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-poppers-convenience-store",
"k": "dienst",
"typ": "Supermarkt",
"n": "Poppers Convenience Store",
"r": "Mariana County",
"county": "Mariana",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-jim-s-mini-mart",
"k": "dienst",
"typ": "Supermarkt",
"n": "Jim's Mini Mart",
"r": "Mariana County",
"county": "Mariana",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-food-mart-grassrivers-grassrivers",
"k": "dienst",
"typ": "Supermarkt",
"n": "Xero Food Mart – Grassrivers",
"r": "Grassrivers, Mariana County",
"geb": "Grassrivers",
"p": [
-3144,
-4328
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-food-mart-grassrivers-grassriversx",
"k": "dienst",
"typ": "Supermarkt",
"n": "Xero Food Mart – Grassrivers",
"r": "Grassrivers, Mariana County",
"geb": "Grassrivers",
"p": [
-3144,
-4328
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-food-mart-capri-capri",
"k": "dienst",
"typ": "Supermarkt",
"n": "Xero Food Mart – Capri",
"r": "Capri, Mariana County",
"geb": "Capri",
"p": [
-6977,
333
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ltd-food-mart-capri-capri",
"k": "dienst",
"typ": "Supermarkt",
"n": "LTD Food Mart – Capri",
"r": "Capri, Mariana County",
"geb": "Capri",
"p": [
-6913,
311
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-leonida-truck-stop",
"k": "dienst",
"typ": "Supermarkt",
"n": "Leonida Truck Stop",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-globe-oil-food-center-hamlet-hamlet",
"k": "dienst",
"typ": "Supermarkt",
"n": "Globe Oil Food Center – Hamlet",
"r": "Hamlet, Vice-Dale County",
"geb": "Hamlet",
"p": [
-2683,
-3379
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-righto-cash-carry",
"k": "dienst",
"typ": "Supermarkt",
"n": "Righto Cash & Carry",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ramon-s-groceries",
"k": "dienst",
"typ": "Supermarkt",
"n": "Ramon's Groceries",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ltd-food-mart-hamlet-hamlet",
"k": "dienst",
"typ": "Supermarkt",
"n": "LTD Food Mart – Hamlet",
"r": "Hamlet, Vice-Dale County",
"geb": "Hamlet",
"p": [
-2595,
-3224
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-247-hamlet-hamlet",
"k": "dienst",
"typ": "Supermarkt",
"n": "247 – Hamlet",
"r": "Hamlet, Vice-Dale County",
"geb": "Hamlet",
"p": [
-2715,
-3162
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-food-mart-southside-southside",
"k": "dienst",
"typ": "Supermarkt",
"n": "Xero Food Mart – Southside",
"r": "Southside, Vice-Dale County",
"geb": "Vice City",
"p": [
-1791,
-2111
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ron-stop-n-snack-southside-southside",
"k": "dienst",
"typ": "Supermarkt",
"n": "Ron Stop'N'Snack – Southside",
"r": "Southside, Vice-Dale County",
"geb": "Vice City",
"p": [
-1679,
-1944
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-wells-rosa",
"k": "dienst",
"typ": "Supermarkt",
"n": "Wells Rosa",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-247-west-vice-dale-west-vice-dale",
"k": "dienst",
"typ": "Supermarkt",
"n": "247 – West Vice-Dale",
"r": "West Vice-Dale, Vice-Dale County",
"geb": "Vice City",
"p": [
-2937,
373
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-food-mart-tequesta-tequesta",
"k": "dienst",
"typ": "Supermarkt",
"n": "Xero Food Mart – Tequesta",
"r": "Tequesta, Vice-Dale County",
"geb": "Vice City",
"p": [
-995,
-1191
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-quick-picks-mini-mart",
"k": "dienst",
"typ": "Supermarkt",
"n": "Quick Picks Mini Mart",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-247-downtown-downtown",
"k": "dienst",
"typ": "Supermarkt",
"n": "247 – Downtown",
"r": "Downtown, Vice-Dale County",
"geb": "Vice City",
"p": [
-600,
-19
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ron-stop-n-snack-little-cuba-little-cuba",
"k": "dienst",
"typ": "Supermarkt",
"n": "Ron Stop'N'Snack – Little Cuba",
"r": "Little Cuba, Vice-Dale County",
"geb": "Vice City",
"p": [
-1109,
119
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-food-mart-salton-salton",
"k": "dienst",
"typ": "Supermarkt",
"n": "Xero Food Mart – Salton",
"r": "Salton, Vice-Dale County",
"geb": "Vice City",
"p": [
-1463,
-692
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ron-stop-n-snack-salton-salton",
"k": "dienst",
"typ": "Supermarkt",
"n": "Ron Stop'N'Snack – Salton",
"r": "Salton, Vice-Dale County",
"geb": "Vice City",
"p": [
-1403,
-449
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-delgado-sons",
"k": "dienst",
"typ": "Supermarkt",
"n": "Delgado & Sons",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ron-stop-n-snack-balsero-balsero",
"k": "dienst",
"typ": "Supermarkt",
"n": "Ron Stop'N'Snack – Balsero",
"r": "Balsero, Vice-Dale County",
"geb": "Vice City",
"p": [
-1820,
643
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ron-stop-n-snack-balsero-balserox",
"k": "dienst",
"typ": "Supermarkt",
"n": "Ron Stop'N'Snack – Balsero",
"r": "Balsero, Vice-Dale County",
"geb": "Vice City",
"p": [
-1820,
643
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-globe-oil-food-center-crosstown-crosstow",
"k": "dienst",
"typ": "Supermarkt",
"n": "Globe Oil Food Center – Crosstown",
"r": "Crosstown, Vice-Dale County",
"geb": "Vice City",
"p": [
-681,
1223
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-hugo-s-quick-mart",
"k": "dienst",
"typ": "Supermarkt",
"n": "Hugo's Quick-Mart",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xyz-market",
"k": "dienst",
"typ": "Supermarkt",
"n": "XYZ Market",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-food-mart-crosstown-crosstown",
"k": "dienst",
"typ": "Supermarkt",
"n": "Xero Food Mart – Crosstown",
"r": "Crosstown, Vice-Dale County",
"geb": "Vice City",
"p": [
-565,
1066
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-emilio-s-auto-center-food-store",
"k": "dienst",
"typ": "Supermarkt",
"n": "Emilio's Auto Center Food Store",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-rico-s-convenience-store",
"k": "dienst",
"typ": "Supermarkt",
"n": "Rico's Convenience Store",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-food-mart-rockridge-rockridge",
"k": "dienst",
"typ": "Supermarkt",
"n": "Xero Food Mart – Rockridge",
"r": "Rockridge, Vice-Dale County",
"geb": "Vice City",
"p": [
-1268,
875
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-blessed-food-market",
"k": "dienst",
"typ": "Supermarkt",
"n": "Blessed Food Market",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-vetiver-minimarket",
"k": "dienst",
"typ": "Supermarkt",
"n": "Vetiver Minimarket",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"p": [
-1007,
1497
],
"g": 2,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-247-bayside-bayside",
"k": "dienst",
"typ": "Supermarkt",
"n": "247 – Bayside",
"r": "Bayside, Vice-Dale County",
"geb": "Vice City",
"p": [
-406,
980
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-food-mart-la-perle-la-perle",
"k": "dienst",
"typ": "Supermarkt",
"n": "Xero Food Mart – La Perle",
"r": "La Perle, Vice-Dale County",
"geb": "Vice City",
"p": [
-940,
1431
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ron-stop-n-snack-bayside-bayside",
"k": "dienst",
"typ": "Supermarkt",
"n": "Ron Stop'N'Snack – Bayside",
"r": "Bayside, Vice-Dale County",
"geb": "Vice City",
"p": [
-470,
1082
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-247-washington-beach-washington-beach",
"k": "dienst",
"typ": "Supermarkt",
"n": "247 – Washington Beach",
"r": "Washington Beach, Vice-Dale County",
"geb": "Vice Beach",
"p": [
1834,
2095
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ron-stop-n-snack-washington-beach-washin",
"k": "dienst",
"typ": "Supermarkt",
"n": "Ron Stop'N'Snack – Washington Beach",
"r": "Washington Beach, Vice-Dale County",
"geb": "Vice Beach",
"p": [
1903,
2046
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-a-l-surf-mart",
"k": "dienst",
"typ": "Supermarkt",
"n": "A&L Surf Mart",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-247-ocean-beach-ocean-beach",
"k": "dienst",
"typ": "Supermarkt",
"n": "247 – Ocean Beach",
"r": "Ocean Beach, Vice-Dale County",
"geb": "Vice Beach",
"p": [
1780,
695
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ltd-food-mart-ocean-beach-ocean-beach",
"k": "dienst",
"typ": "Supermarkt",
"n": "LTD Food Mart – Ocean Beach",
"r": "Ocean Beach, Vice-Dale County",
"geb": "Vice Beach",
"p": [
1751,
862
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-superprecious-market",
"k": "dienst",
"typ": "Supermarkt",
"n": "!Superprecious! Market",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-food-mart-belville-belville",
"k": "dienst",
"typ": "Supermarkt",
"n": "Xero Food Mart – Belville",
"r": "Belville, Leonard County",
"geb": "Belville",
"p": [
-1359,
2787
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-247-belville-belville",
"k": "dienst",
"typ": "Supermarkt",
"n": "247 – Belville",
"r": "Belville, Leonard County",
"geb": "Belville",
"p": [
-1556,
2966
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-alpha-convenience-store-belville-belvill",
"k": "dienst",
"typ": "Supermarkt",
"n": "Alpha Convenience Store – Belville",
"r": "Belville, Leonard County",
"geb": "Belville",
"p": [
-1586,
3029
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-food-mart-waning-sands-waning-sands",
"k": "dienst",
"typ": "Supermarkt",
"n": "Xero Food Mart – Waning Sands",
"r": "Waning Sands, Leonard County",
"geb": "Waning Sands",
"p": [
-71,
4089
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-247-waning-sands-waning-sands",
"k": "dienst",
"typ": "Supermarkt",
"n": "247 – Waning Sands",
"r": "Waning Sands, Leonard County",
"geb": "Waning Sands",
"p": [
114,
3929
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-food-mart-buckskin-swamp-buckskin-s",
"k": "dienst",
"typ": "Supermarkt",
"n": "Xero Food Mart – Buckskin Swamp",
"r": "Buckskin Swamp, Kelly County",
"geb": "Buckskin Swamp",
"p": [
-4165,
1014
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-food-mart-buckskin-swamp-buckskin-sx",
"k": "dienst",
"typ": "Supermarkt",
"n": "Xero Food Mart – Buckskin Swamp",
"r": "Buckskin Swamp, Kelly County",
"geb": "Buckskin Swamp",
"p": [
-4165,
1014
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-food-mart-gellhorn-gellhorn",
"k": "dienst",
"typ": "Supermarkt",
"n": "Xero Food Mart – Gellhorn",
"r": "Gellhorn, Kelly County",
"geb": "Gellhorn",
"p": [
-5186,
3426
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-emerald-springs-country-store",
"k": "dienst",
"typ": "Supermarkt",
"n": "Emerald Springs Country Store",
"r": "Kelly County",
"county": "Kelly",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-tucker-s-citrus-farms",
"k": "dienst",
"typ": "Supermarkt",
"n": "Tucker's Citrus Farms",
"r": "Kelly County",
"county": "Kelly",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-247-emerald-springs-emerald-springs",
"k": "dienst",
"typ": "Supermarkt",
"n": "247 – Emerald Springs",
"r": "Emerald Springs, Kelly County",
"geb": "Emerald Springs",
"p": [
-4448,
2410
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-food-mart-ambrosia-ambrosia",
"k": "dienst",
"typ": "Supermarkt",
"n": "Xero Food Mart – Ambrosia",
"r": "Ambrosia, Kelly County",
"geb": "Ambrosia",
"p": [
-2762,
3964
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-cane-grocery",
"k": "dienst",
"typ": "Supermarkt",
"n": "Cane Grocery",
"r": "Kelly County",
"county": "Kelly",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-bunch-farms-country-store",
"k": "dienst",
"typ": "Supermarkt",
"n": "Bunch Farms Country Store",
"r": "Kelly County",
"county": "Kelly",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-alpha-convenience-store-gellhorn-gellhor",
"k": "dienst",
"typ": "Supermarkt",
"n": "Alpha Convenience Store – Gellhorn",
"r": "Gellhorn, Kelly County",
"geb": "Gellhorn",
"p": [
-5290,
3401
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-sarena-s-bargain-store",
"k": "dienst",
"typ": "Supermarkt",
"n": "Sarena's Bargain Store",
"r": "Kelly County",
"county": "Kelly",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-247-port-gellhorn-port-gellhorn",
"k": "dienst",
"typ": "Supermarkt",
"n": "247 – Port Gellhorn",
"r": "Port Gellhorn, Kelly County",
"geb": "Port Gellhorn",
"p": [
-6656,
3753
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-dale-s-shopwell",
"k": "dienst",
"typ": "Supermarkt",
"n": "Dale's Shopwell",
"r": "Kelly County",
"county": "Kelly",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-eager-beaver-express",
"k": "dienst",
"typ": "Supermarkt",
"n": "Eager Beaver Express",
"r": "Kelly County",
"county": "Kelly",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-huck-s-pump-n-go",
"k": "dienst",
"typ": "Supermarkt",
"n": "Huck's Pump N Go",
"r": "Lummox County",
"county": "Lummox",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-247",
"k": "dienst",
"typ": "Supermarkt",
"n": "247",
"r": "Lummox County",
"county": "Lummox",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-redshaw-s-general-store",
"k": "dienst",
"typ": "Supermarkt",
"n": "Redshaw's General Store",
"r": "Lummox County",
"county": "Lummox",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-247-millport-millport",
"k": "dienst",
"typ": "Supermarkt",
"n": "247 – Millport",
"r": "Millport, Lummox County",
"geb": "Millport",
"p": [
-990,
6542
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-xero-food-mart-millport-millport",
"k": "dienst",
"typ": "Supermarkt",
"n": "Xero Food Mart – Millport",
"r": "Millport, Lummox County",
"geb": "Millport",
"p": [
-1144,
6483
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-trotman-s-supermarket",
"k": "dienst",
"typ": "Supermarkt",
"n": "Trotman's Supermarket",
"r": "Lummox County",
"county": "Lummox",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-pollo-diablo-hamlet-hamlet",
"k": "dienst",
"typ": "Fast Food",
"n": "Pollo Diablo – Hamlet",
"r": "Hamlet, Vice-Dale County",
"geb": "Hamlet",
"p": [
-2568,
-3204
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-chacey-s-southside-southside",
"k": "dienst",
"typ": "Fast Food",
"n": "Chacey's – Southside",
"r": "Southside, Vice-Dale County",
"geb": "Vice City",
"p": [
-1815,
-2081
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-peewees-southside-southside",
"k": "dienst",
"typ": "Fast Food",
"n": "Peewees – Southside",
"r": "Southside, Vice-Dale County",
"geb": "Vice City",
"p": [
-1612,
-2043
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-frank-s-waffles",
"k": "dienst",
"typ": "Fast Food",
"n": "Frank's Waffles",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-marbles-salton-salton",
"k": "dienst",
"typ": "Fast Food",
"n": "Marbles – Salton",
"r": "Salton, Vice-Dale County",
"geb": "Vice City",
"p": [
-1293,
-479
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-pollo-diablo-vcia-vcia",
"k": "dienst",
"typ": "Fast Food",
"n": "Pollo Diablo – VCIA",
"r": "VCIA, Vice-Dale County",
"geb": "Vice City",
"p": [
-2180,
-619
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-chacey-s-salton-salton",
"k": "dienst",
"typ": "Fast Food",
"n": "Chacey's – Salton",
"r": "Salton, Vice-Dale County",
"geb": "Vice City",
"p": [
-1408,
-514
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-marbles-west-vice-dale-west-vice-dale",
"k": "dienst",
"typ": "Fast Food",
"n": "Marbles – West Vice-Dale",
"r": "West Vice-Dale, Vice-Dale County",
"geb": "Vice City",
"p": [
-3011,
359
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-peewees-rockridge-rockridge",
"k": "dienst",
"typ": "Fast Food",
"n": "Peewees – Rockridge",
"r": "Rockridge, Vice-Dale County",
"geb": "Vice City",
"p": [
-1117,
805
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-burger-shot-ocean-beach-ocean-beach",
"k": "dienst",
"typ": "Fast Food",
"n": "Burger Shot – Ocean Beach",
"r": "Ocean Beach, Vice-Dale County",
"geb": "Vice Beach",
"p": [
1795,
580
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-pollo-diablo-ocean-beach-ocean-beach",
"k": "dienst",
"typ": "Fast Food",
"n": "Pollo Diablo – Ocean Beach",
"r": "Ocean Beach, Vice-Dale County",
"geb": "Vice Beach",
"p": [
1833,
809
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-taco-bomb-belville-belville",
"k": "dienst",
"typ": "Fast Food",
"n": "Taco Bomb – Belville",
"r": "Belville, Leonard County",
"geb": "Belville",
"p": [
-1468,
2868
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-peewees-belville-belville",
"k": "dienst",
"typ": "Fast Food",
"n": "Peewees – Belville",
"r": "Belville, Leonard County",
"geb": "Belville",
"p": [
-1488,
2956
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-taco-bomb-waning-sands-waning-sands",
"k": "dienst",
"typ": "Fast Food",
"n": "Taco Bomb – Waning Sands",
"r": "Waning Sands, Leonard County",
"geb": "Waning Sands",
"p": [
-10,
3918
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-pollo-diablo-waning-sands-waning-sands",
"k": "dienst",
"typ": "Fast Food",
"n": "Pollo Diablo – Waning Sands",
"r": "Waning Sands, Leonard County",
"geb": "Waning Sands",
"p": [
-10,
4025
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-taco-bomb-gellhorn-gellhorn",
"k": "dienst",
"typ": "Fast Food",
"n": "Taco Bomb – Gellhorn",
"r": "Gellhorn, Kelly County",
"geb": "Gellhorn",
"p": [
-5312,
3559
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-marbles-ambrosia-ambrosia",
"k": "dienst",
"typ": "Fast Food",
"n": "Marbles – Ambrosia",
"r": "Ambrosia, Kelly County",
"geb": "Ambrosia",
"p": [
-2896,
3905
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-hank-s-waffles",
"k": "dienst",
"typ": "Fast Food",
"n": "Hank's Waffles",
"r": "Kelly County",
"county": "Kelly",
"p": [
-6187,
4526
],
"g": 2,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-taco-bomb",
"k": "dienst",
"typ": "Fast Food",
"n": "Taco Bomb",
"r": "Lummox County",
"county": "Lummox",
"p": [
-5250,
3499
],
"g": 2,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-pollo-diablo-millport-millport",
"k": "dienst",
"typ": "Fast Food",
"n": "Pollo Diablo – Millport",
"r": "Millport, Lummox County",
"geb": "Millport",
"p": [
-1055,
6476
],
"g": 1,
"t": "überfallbar (Stick-Up)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-discount-liquors",
"k": "dienst",
"typ": "Schnapsladen",
"n": "Discount Liquors",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "überfallbar, 100–3.000 $",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-uncle-jack-s-liquor-tequesta-tequesta",
"k": "dienst",
"typ": "Schnapsladen",
"n": "Uncle Jack's Liquor – Tequesta",
"r": "Tequesta, Vice-Dale County",
"geb": "Vice City",
"p": [
-894,
-1260
],
"g": 1,
"t": "überfallbar, 100–3.000 $",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-liquor-store",
"k": "dienst",
"typ": "Schnapsladen",
"n": "Liquor Store",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"p": [
-659,
1210
],
"g": 2,
"t": "überfallbar, 100–3.000 $",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-palmis-liquor",
"k": "dienst",
"typ": "Schnapsladen",
"n": "Palmis Liquor",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "überfallbar, 100–3.000 $",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-dutch-courage",
"k": "dienst",
"typ": "Schnapsladen",
"n": "Dutch Courage",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "überfallbar, 100–3.000 $",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-uncle-jack-s-liquor-bayside-bayside",
"k": "dienst",
"typ": "Schnapsladen",
"n": "Uncle Jack's Liquor – Bayside",
"r": "Bayside, Vice-Dale County",
"geb": "Vice City",
"p": [
-349,
1040
],
"g": 1,
"t": "überfallbar, 100–3.000 $",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-zak-s-liquor",
"k": "dienst",
"typ": "Schnapsladen",
"n": "Zak's Liquor",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "überfallbar, 100–3.000 $",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-one-stop-liquor-ocean-beach-ocean-beach",
"k": "dienst",
"typ": "Schnapsladen",
"n": "One Stop Liquor – Ocean Beach",
"r": "Ocean Beach, Vice-Dale County",
"geb": "Vice Beach",
"p": [
1790,
732
],
"g": 1,
"t": "überfallbar, 100–3.000 $",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-corked-wine-bank",
"k": "dienst",
"typ": "Schnapsladen",
"n": "Corked Wine Bank",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "überfallbar, 100–3.000 $",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ocean-beach-liquor-ocean-beach",
"k": "dienst",
"typ": "Schnapsladen",
"n": "Ocean Beach Liquor",
"r": "Ocean Beach, Vice-Dale County",
"geb": "Vice Beach",
"p": [
1907,
740
],
"g": 1,
"t": "überfallbar, 100–3.000 $",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-uncle-jack-s-liquor-port-gellhorn-port-g",
"k": "dienst",
"typ": "Schnapsladen",
"n": "Uncle Jack's Liquor – Port Gellhorn",
"r": "Port Gellhorn, Kelly County",
"geb": "Port Gellhorn",
"p": [
-6417,
3660
],
"g": 1,
"t": "überfallbar, 100–3.000 $",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ambrosia-liquors",
"k": "dienst",
"typ": "Schnapsladen",
"n": "Ambrosia Liquors",
"r": "Kelly County",
"county": "Kelly",
"t": "überfallbar, 100–3.000 $",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-slinger-southside-southside",
"k": "dienst",
"typ": "Kleidung",
"n": "Slinger – Southside",
"r": "Southside, Vice-Dale County",
"geb": "Vice City",
"p": [
-1795,
-2098
],
"g": 1,
"t": "Casual & Street",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-slinger-peacock-bay-peacock-bay",
"k": "dienst",
"typ": "Kleidung",
"n": "Slinger – Peacock Bay",
"r": "Peacock Bay, Vice-Dale County",
"geb": "Vice City",
"p": [
-1322,
-2014
],
"g": 1,
"t": "Casual & Street",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-slinger-tequesta-tequesta",
"k": "dienst",
"typ": "Kleidung",
"n": "Slinger – Tequesta",
"r": "Tequesta, Vice-Dale County",
"geb": "Vice City",
"p": [
-950,
-1229
],
"g": 1,
"t": "Casual & Street",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-slinger-downtown-downtown",
"k": "dienst",
"typ": "Kleidung",
"n": "Slinger – Downtown",
"r": "Downtown, Vice-Dale County",
"geb": "Vice City",
"p": [
-676,
-151
],
"g": 1,
"t": "Casual & Street",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-suburban",
"k": "dienst",
"typ": "Kleidung",
"n": "Suburban",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Casual & Street",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-urban-legendz",
"k": "dienst",
"typ": "Kleidung",
"n": "Urban Legendz",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Casual & Street",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-drip-drops-la-perle-la-perle",
"k": "dienst",
"typ": "Kleidung",
"n": "Drip Drops – La Perle",
"r": "La Perle, Vice-Dale County",
"geb": "Vice City",
"p": [
-1006,
1503
],
"g": 1,
"t": "Casual & Street",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-stock-305-stockyard-stockyard",
"k": "dienst",
"typ": "Kleidung",
"n": "Stock 305 – Stockyard",
"r": "Stockyard, Vice-Dale County",
"geb": "Vice City",
"p": [
-335,
1845
],
"g": 1,
"t": "Casual & Street, Ultimate Edition",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-slinger-decor-district-decor-district",
"k": "dienst",
"typ": "Kleidung",
"n": "Slinger – Decor District",
"r": "Decor District, Vice-Dale County",
"geb": "Vice City",
"p": [
-127,
2239
],
"g": 1,
"t": "Casual & Street",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-this-that-decor-district-decor-district",
"k": "dienst",
"typ": "Kleidung",
"n": "This / That – Decor District",
"r": "Decor District, Vice-Dale County",
"geb": "Vice City",
"p": [
-118,
2220
],
"g": 1,
"t": "Casual & Street",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-slinger-ocean-beach-ocean-beach",
"k": "dienst",
"typ": "Kleidung",
"n": "Slinger – Ocean Beach",
"r": "Ocean Beach, Vice-Dale County",
"geb": "Vice Beach",
"p": [
1757,
803
],
"g": 1,
"t": "Casual & Street",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-mid-ocean-beach-ocean-beach",
"k": "dienst",
"typ": "Kleidung",
"n": "Mid – Ocean Beach",
"r": "Ocean Beach, Vice-Dale County",
"geb": "Vice Beach",
"p": [
1807,
671
],
"g": 1,
"t": "Casual & Street",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-this-that-ocean-beach-ocean-beach",
"k": "dienst",
"typ": "Kleidung",
"n": "This / That – Ocean Beach",
"r": "Ocean Beach, Vice-Dale County",
"geb": "Vice Beach",
"p": [
1870,
726
],
"g": 1,
"t": "Casual & Street (2 Läden)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-mid-washington-beach-washington-beach",
"k": "dienst",
"typ": "Kleidung",
"n": "Mid – Washington Beach",
"r": "Washington Beach, Vice-Dale County",
"geb": "Vice Beach",
"p": [
1748,
2213
],
"g": 1,
"t": "Casual & Street",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-this-that-waning-sands-waning-sands",
"k": "dienst",
"typ": "Kleidung",
"n": "This / That – Waning Sands",
"r": "Waning Sands, Leonard County",
"geb": "Waning Sands",
"p": [
21,
4076
],
"g": 1,
"t": "Casual & Street",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-mid-waning-sands-waning-sands",
"k": "dienst",
"typ": "Kleidung",
"n": "Mid – Waning Sands",
"r": "Waning Sands, Leonard County",
"geb": "Waning Sands",
"p": [
-114,
3981
],
"g": 1,
"t": "Casual & Street",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-alpha-sports-downtown-downtown",
"k": "dienst",
"typ": "Kleidung",
"n": "Alpha Sports – Downtown",
"r": "Downtown, Vice-Dale County",
"geb": "Vice City",
"p": [
-717,
-14
],
"g": 1,
"t": "Sportmode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-endzone-downtown-downtown",
"k": "dienst",
"typ": "Kleidung",
"n": "Endzone – Downtown",
"r": "Downtown, Vice-Dale County",
"geb": "Vice City",
"p": [
-756,
-261
],
"g": 1,
"t": "Sportmode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-eris-shoreline-shoreline",
"k": "dienst",
"typ": "Kleidung",
"n": "Eris – Shoreline",
"r": "Shoreline, Vice-Dale County",
"geb": "Vice City",
"p": [
-334,
38
],
"g": 1,
"t": "Sportmode (Sahara Arena)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-alpha-sports-ocean-beach-ocean-beach",
"k": "dienst",
"typ": "Kleidung",
"n": "Alpha Sports – Ocean Beach",
"r": "Ocean Beach, Vice-Dale County",
"geb": "Vice Beach",
"p": [
1771,
636
],
"g": 1,
"t": "Sportmode (4 Läden)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-endzone-ocean-beach-ocean-beach",
"k": "dienst",
"typ": "Kleidung",
"n": "Endzone – Ocean Beach",
"r": "Ocean Beach, Vice-Dale County",
"geb": "Vice Beach",
"p": [
1772,
694
],
"g": 1,
"t": "Sportmode (2 Läden)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-endzone-washington-beach-washington-beac",
"k": "dienst",
"typ": "Kleidung",
"n": "Endzone – Washington Beach",
"r": "Washington Beach, Vice-Dale County",
"geb": "Vice Beach",
"p": [
1835,
2214
],
"g": 1,
"t": "Sportmode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-alpha-sports-waning-sands-waning-sands",
"k": "dienst",
"typ": "Kleidung",
"n": "Alpha Sports – Waning Sands",
"r": "Waning Sands, Leonard County",
"geb": "Waning Sands",
"p": [
141,
4015
],
"g": 1,
"t": "Sportmode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-nola-capri-capri",
"k": "dienst",
"typ": "Kleidung",
"n": "Nola – Capri",
"r": "Capri, Mariana County",
"geb": "Capri",
"p": [
-6828,
162
],
"g": 1,
"t": "Formell",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ferruccio-tucci-capri-capri",
"k": "dienst",
"typ": "Kleidung",
"n": "Ferruccio Tucci – Capri",
"r": "Capri, Mariana County",
"geb": "Capri",
"p": [
-6937,
294
],
"g": 1,
"t": "Formell",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-nola-peacock-bay-peacock-bay",
"k": "dienst",
"typ": "Kleidung",
"n": "Nola – Peacock Bay",
"r": "Peacock Bay, Vice-Dale County",
"geb": "Vice City",
"p": [
-1162,
-1788
],
"g": 1,
"t": "Formell",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-nola-ocean-beach-ocean-beach",
"k": "dienst",
"typ": "Kleidung",
"n": "Nola – Ocean Beach",
"r": "Ocean Beach, Vice-Dale County",
"geb": "Vice Beach",
"p": [
1742,
853
],
"g": 1,
"t": "Formell (2 Läden)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ferruccio-tucci-ocean-beach-ocean-beach",
"k": "dienst",
"typ": "Kleidung",
"n": "Ferruccio Tucci – Ocean Beach",
"r": "Ocean Beach, Vice-Dale County",
"geb": "Vice Beach",
"p": [
1737,
590
],
"g": 1,
"t": "Formell (2 Läden)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-nola-decor-district-decor-district",
"k": "dienst",
"typ": "Kleidung",
"n": "Nola – Decor District",
"r": "Decor District, Vice-Dale County",
"geb": "Vice City",
"p": [
-192,
2271
],
"g": 1,
"t": "Formell",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ferruccio-tucci-decor-district-decor-dis",
"k": "dienst",
"typ": "Kleidung",
"n": "Ferruccio Tucci – Decor District",
"r": "Decor District, Vice-Dale County",
"geb": "Vice City",
"p": [
-283,
2092
],
"g": 1,
"t": "Formell",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ferruccio-tucci-waning-sands-waning-sand",
"k": "dienst",
"typ": "Kleidung",
"n": "Ferruccio Tucci – Waning Sands",
"r": "Waning Sands, Leonard County",
"geb": "Waning Sands",
"p": [
-26,
4013
],
"g": 1,
"t": "Formell",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-lost-mines-souvenirs",
"k": "dienst",
"typ": "Kleidung",
"n": "Lost Mines Souvenirs",
"r": "Mariana County",
"county": "Mariana",
"t": "Souvenir & Bademode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-souvenir-shop",
"k": "dienst",
"typ": "Kleidung",
"n": "Souvenir Shop",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Souvenir & Bademode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-dollar-domain",
"k": "dienst",
"typ": "Kleidung",
"n": "Dollar Domain",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Souvenir & Bademode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-little-cuba-souvenir-store-little-cuba",
"k": "dienst",
"typ": "Kleidung",
"n": "Little Cuba Souvenir Store",
"r": "Little Cuba, Vice-Dale County",
"geb": "Vice City",
"p": [
-1340,
124
],
"g": 1,
"t": "Souvenir & Bademode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-telegraphe",
"k": "dienst",
"typ": "Kleidung",
"n": "Telegraphe",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Souvenir & Bademode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-sea-swell-gifts",
"k": "dienst",
"typ": "Kleidung",
"n": "Sea Swell Gifts",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Souvenir & Bademode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-starboard-souvenirs",
"k": "dienst",
"typ": "Kleidung",
"n": "Starboard Souvenirs",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Souvenir & Bademode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-vice-style",
"k": "dienst",
"typ": "Kleidung",
"n": "Vice Style",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Souvenir & Bademode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-sunshine-sally-s",
"k": "dienst",
"typ": "Kleidung",
"n": "Sunshine Sally's",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Souvenir & Bademode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-dock-ring-souvenirs-shoreline-shoreline",
"k": "dienst",
"typ": "Kleidung",
"n": "Dock Ring Souvenirs – Shoreline",
"r": "Shoreline, Vice-Dale County",
"geb": "Vice City",
"p": [
-132,
205
],
"g": 1,
"t": "Souvenir & Bademode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-coquina-box",
"k": "dienst",
"typ": "Kleidung",
"n": "Coquina Box",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Souvenir & Bademode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-knick-knack-paddle-shack",
"k": "dienst",
"typ": "Kleidung",
"n": "Knick Knack Paddle Shack",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Souvenir & Bademode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-island-gifts",
"k": "dienst",
"typ": "Kleidung",
"n": "Island Gifts",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Souvenir & Bademode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-washed-ashore-souvenirs",
"k": "dienst",
"typ": "Kleidung",
"n": "Washed Ashore Souvenirs",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Souvenir & Bademode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-coastal-souvenirs",
"k": "dienst",
"typ": "Kleidung",
"n": "Coastal Souvenirs",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Souvenir & Bademode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-de-luge-swimwear",
"k": "dienst",
"typ": "Kleidung",
"n": "De'luge Swimwear",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Souvenir & Bademode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-larry-s-lagoon",
"k": "dienst",
"typ": "Kleidung",
"n": "Larry's Lagoon",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Souvenir & Bademode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-waves",
"k": "dienst",
"typ": "Kleidung",
"n": "Waves",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Souvenir & Bademode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-gifts-a-gogo",
"k": "dienst",
"typ": "Kleidung",
"n": "Gifts A GoGo",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Souvenir & Bademode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-beach-please",
"k": "dienst",
"typ": "Kleidung",
"n": "Beach Please",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Souvenir & Bademode",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-nifty-threads-island-wear",
"k": "dienst",
"typ": "Kleidung",
"n": "Nifty Threads Island Wear",
"r": "Mariana County",
"county": "Mariana",
"t": "Second Hand",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-hamlet-thrift-hamlet",
"k": "dienst",
"typ": "Kleidung",
"n": "Hamlet Thrift",
"r": "Hamlet, Vice-Dale County",
"geb": "Hamlet",
"p": [
-2727,
-3210
],
"g": 1,
"t": "Second Hand",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-aline-s-thrift-store",
"k": "dienst",
"typ": "Kleidung",
"n": "Aline's Thrift Store",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Second Hand",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-dr-froogal",
"k": "dienst",
"typ": "Kleidung",
"n": "Dr Froogal",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Second Hand",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-bargain-world",
"k": "dienst",
"typ": "Kleidung",
"n": "Bargain World",
"r": "Kelly County",
"county": "Kelly",
"t": "Second Hand",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-lori-scott-hair-beauty",
"k": "dienst",
"typ": "Friseur",
"n": "Lori Scott Hair & Beauty",
"r": "Mariana County",
"county": "Mariana",
"t": "Unisex",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-hair-by-clair",
"k": "dienst",
"typ": "Friseur",
"n": "Hair By Clair",
"r": "Mariana County",
"county": "Mariana",
"t": "Beauty-Salon",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-kurt-s-barber-shop",
"k": "dienst",
"typ": "Friseur",
"n": "Kurt's Barber Shop",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"p": [
-2573,
-3556
],
"g": 2,
"t": "Barbier",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-sara-s-unisex-salon",
"k": "dienst",
"typ": "Friseur",
"n": "Sara's Unisex Salon",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"p": [
-2554,
-3414
],
"g": 2,
"t": "Beauty-Salon, Ultimate Edition",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-au-courant",
"k": "dienst",
"typ": "Friseur",
"n": "AU Courant",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Unisex",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-salon-p-rez",
"k": "dienst",
"typ": "Friseur",
"n": "Salon Pérez",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Barbier",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-bellissima-hair-salon",
"k": "dienst",
"typ": "Friseur",
"n": "Bellissima Hair Salon",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Unisex",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-salon-belle",
"k": "dienst",
"typ": "Friseur",
"n": "Salon Belle",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Beauty-Salon",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-fabiola-s-unisex-salon",
"k": "dienst",
"typ": "Friseur",
"n": "Fabiola's Unisex Salon",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Beauty-Salon",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-crosstown-cutz-crosstown",
"k": "dienst",
"typ": "Friseur",
"n": "Crosstown Cutz",
"r": "Crosstown, Vice-Dale County",
"geb": "Vice City",
"p": [
-663,
1261
],
"g": 1,
"t": "Barbier",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-clip-fade",
"k": "dienst",
"typ": "Friseur",
"n": "Clip & Fade",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Barbier",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-onyx-salon",
"k": "dienst",
"typ": "Friseur",
"n": "Onyx Salon",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Beauty-Salon",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-oomph",
"k": "dienst",
"typ": "Friseur",
"n": "Oomph!",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Beauty-Salon",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-gabriel-wexler",
"k": "dienst",
"typ": "Friseur",
"n": "Gabriel Wexler",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Beauty-Salon",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-a-better-you",
"k": "dienst",
"typ": "Friseur",
"n": "A Better You",
"r": "Leonard County",
"county": "Leonard",
"t": "Beauty-Salon",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-pearl-house-hair-salon-port-gellhorn-por",
"k": "dienst",
"typ": "Friseur",
"n": "Pearl House Hair Salon – Port Gellhorn",
"r": "Port Gellhorn, Kelly County",
"geb": "Port Gellhorn",
"p": [
-6616,
3767
],
"g": 1,
"t": "Unisex",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-captain-starlings-barber-shop",
"k": "dienst",
"typ": "Friseur",
"n": "Captain Starlings Barber Shop",
"r": "Kelly County",
"county": "Kelly",
"t": "Unisex",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-layin-ink",
"k": "dienst",
"typ": "Tattoo",
"n": "Layin' Ink",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Black & Gray",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-dominion-ink",
"k": "dienst",
"typ": "Tattoo",
"n": "Dominion Ink",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Anime",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-hyper-ink",
"k": "dienst",
"typ": "Tattoo",
"n": "Hyper Ink",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Illustrativ",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-cross-my-heart-crosstown-crosstown",
"k": "dienst",
"typ": "Tattoo",
"n": "Cross My Heart – Crosstown",
"r": "Crosstown, Vice-Dale County",
"geb": "Vice City",
"p": [
-716,
1092
],
"g": 1,
"t": "New School (laut PowerPyx-Laborliste in Crosstown)",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-inkomplete-tattoo-co",
"k": "dienst",
"typ": "Tattoo",
"n": "Inkomplete Tattoo Co.",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Old School",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-twa-ponya-tattoo-la-perle-la-perle",
"k": "dienst",
"typ": "Tattoo",
"n": "Twa Ponya Tattoo – La Perle",
"r": "La Perle, Vice-Dale County",
"geb": "Vice City",
"p": [
-1076,
1447
],
"g": 1,
"t": "Neo-Traditional",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-electric-fang-tattoo-stockyard-stockyard",
"k": "dienst",
"typ": "Tattoo",
"n": "Electric Fang Tattoo – Stockyard",
"r": "Stockyard, Vice-Dale County",
"geb": "Vice City",
"p": [
-280,
1927
],
"g": 1,
"t": "New School, Ultimate Edition",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-black-spot-tattoo",
"k": "dienst",
"typ": "Tattoo",
"n": "Black Spot Tattoo",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Geometrisch & Blackwork",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-blood-sugar-tattoo",
"k": "dienst",
"typ": "Tattoo",
"n": "Blood Sugar Tattoo",
"r": "Kelly County",
"county": "Kelly",
"t": "Schriftzüge",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-freedom-tattoo-port-gellhorn-port-gellho",
"k": "dienst",
"typ": "Tattoo",
"n": "Freedom Tattoo – Port Gellhorn",
"r": "Port Gellhorn, Kelly County",
"geb": "Port Gellhorn",
"p": [
-6332,
3782
],
"g": 1,
"t": "Stick & Poke",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-coastal-auto-care-key-lento-key-lento",
"k": "dienst",
"typ": "Tuning",
"n": "Coastal Auto Care – Key Lento",
"r": "Key Lento, Mariana County",
"geb": "Key Lento",
"p": [
-2269,
-5810
],
"g": 1,
"t": "Retro-Teile",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-capri-classic-capri",
"k": "dienst",
"typ": "Tuning",
"n": "Capri Classic",
"r": "Capri, Mariana County",
"geb": "Capri",
"p": [
-6822,
117
],
"g": 1,
"t": "Muscle-Cars",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-two-wheel-fury-motorsport",
"k": "dienst",
"typ": "Tuning",
"n": "Two Wheel Fury Motorsport",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Sportmotorräder",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-euroform-automotive",
"k": "dienst",
"typ": "Tuning",
"n": "Euroform Automotive",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"p": [
-1155,
-126
],
"g": 2,
"t": "Luxusautos",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-vice-auto-customs",
"k": "dienst",
"typ": "Tuning",
"n": "Vice Auto Customs",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Tuner",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-lowballers-customs",
"k": "dienst",
"typ": "Tuning",
"n": "Lowballers Customs",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Lowrider",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-rideout-customs",
"k": "dienst",
"typ": "Tuning",
"n": "Rideout Customs",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"p": [
-866,
975
],
"g": 2,
"t": "Donks, Ultimate Edition",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-vice-vinyl",
"k": "dienst",
"typ": "Tuning",
"n": "Vice Vinyl",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"p": [
-381,
1669
],
"g": 2,
"t": "Folierungen und Lackierungen",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-stockyard-speedshop-stockyard",
"k": "dienst",
"typ": "Tuning",
"n": "Stockyard Speedshop",
"r": "Stockyard, Vice-Dale County",
"geb": "Vice City",
"p": [
-371,
1834
],
"g": 1,
"t": "Hot Rods",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-whisler-motorsport",
"k": "dienst",
"typ": "Tuning",
"n": "Whisler Motorsport",
"r": "Kelly County",
"county": "Kelly",
"t": "Rennwagen",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-dirt-merchants-port-gellhorn-port-gellho",
"k": "dienst",
"typ": "Tuning",
"n": "Dirt Merchants – Port Gellhorn",
"r": "Port Gellhorn, Kelly County",
"geb": "Port Gellhorn",
"p": [
-6337,
3779
],
"g": 1,
"t": "Dirtbikes",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-wasteland-off-road-port-gellhorn-port-ge",
"k": "dienst",
"typ": "Tuning",
"n": "Wasteland Off-Road – Port Gellhorn",
"r": "Port Gellhorn, Kelly County",
"geb": "Port Gellhorn",
"p": [
-6423,
3705
],
"g": 1,
"t": "Offroad",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-one-eyed-willie-s-auto-shop-lake-leonida",
"k": "dienst",
"typ": "Tuning",
"n": "One-Eyed Willie's Auto Shop – Lake Leonida",
"r": "Lake Leonida, Leonard County",
"geb": "Lake Leonida",
"p": [
-2094,
4787
],
"g": 1,
"t": "Offroad, handgemalte Lackierungen, Ultimate Edition",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ledford-motorcycle-workshop",
"k": "dienst",
"typ": "Tuning",
"n": "Ledford Motorcycle Workshop",
"r": "Lummox County",
"county": "Lummox",
"t": "Chopper und klassische US-Motorräder",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-bahnhof-capri-capri",
"k": "dienst",
"typ": "Bahnhof",
"n": "Bahnhof Capri",
"r": "Capri",
"geb": "Capri",
"p": [
-6524,
508
],
"g": 2,
"t": "Laut PowerPyx 25 Bahnhöfe insgesamt, die meisten im Stadtgebiet von Vice City.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-bahnhof-tequesta-tequesta",
"k": "dienst",
"typ": "Bahnhof",
"n": "Bahnhof Tequesta",
"r": "Tequesta",
"geb": "Vice City",
"p": [
-948,
-1126
],
"g": 1,
"t": "Laut PowerPyx 25 Bahnhöfe insgesamt, die meisten im Stadtgebiet von Vice City.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-bahnhof-downtown-downtown",
"k": "dienst",
"typ": "Bahnhof",
"n": "Bahnhof Downtown",
"r": "Downtown",
"geb": "Vice City",
"p": [
-587,
-170
],
"g": 1,
"t": "Laut PowerPyx 25 Bahnhöfe insgesamt, die meisten im Stadtgebiet von Vice City.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-bahnhof-shoreline-park-shoreline",
"k": "dienst",
"typ": "Bahnhof",
"n": "Bahnhof Shoreline Park",
"r": "Shoreline",
"geb": "Vice City",
"p": [
-372,
258
],
"g": 1,
"t": "Laut PowerPyx 25 Bahnhöfe insgesamt, die meisten im Stadtgebiet von Vice City.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-bahnhof-crosstown-crosstown",
"k": "dienst",
"typ": "Bahnhof",
"n": "Bahnhof Crosstown",
"r": "Crosstown",
"geb": "Vice City",
"p": [
-545,
1076
],
"g": 1,
"t": "Laut PowerPyx 25 Bahnhöfe insgesamt, die meisten im Stadtgebiet von Vice City.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-bahnhof-vcia-salton",
"k": "dienst",
"typ": "Bahnhof",
"n": "Bahnhof VCIA",
"r": "Salton",
"geb": "Vice City",
"p": [
-1507,
-223
],
"g": 2,
"t": "Laut PowerPyx 25 Bahnhöfe insgesamt, die meisten im Stadtgebiet von Vice City.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-bahnhof-waning-sands-waning-sands",
"k": "dienst",
"typ": "Bahnhof",
"n": "Bahnhof Waning Sands",
"r": "Waning Sands",
"geb": "Waning Sands",
"p": [
-27,
3924
],
"g": 2,
"t": "Laut PowerPyx 25 Bahnhöfe insgesamt, die meisten im Stadtgebiet von Vice City.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-bahnhof-ambrosia-ambrosia",
"k": "dienst",
"typ": "Bahnhof",
"n": "Bahnhof Ambrosia",
"r": "Ambrosia",
"geb": "Ambrosia",
"p": [
-2286,
3716
],
"g": 2,
"t": "Laut PowerPyx 25 Bahnhöfe insgesamt, die meisten im Stadtgebiet von Vice City.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-bahnhof-port-gellhorn-port-gellhorn",
"k": "dienst",
"typ": "Bahnhof",
"n": "Bahnhof Port Gellhorn",
"r": "Port Gellhorn",
"geb": "Port Gellhorn",
"p": [
-6603,
3622
],
"g": 2,
"t": "Laut PowerPyx 25 Bahnhöfe insgesamt, die meisten im Stadtgebiet von Vice City.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-bahnhof-draper-island-draper-island",
"k": "dienst",
"typ": "Bahnhof",
"n": "Bahnhof Draper Island",
"r": "Draper Island",
"geb": "Port Gellhorn",
"p": [
-7378,
5114
],
"g": 2,
"t": "Laut PowerPyx 25 Bahnhöfe insgesamt, die meisten im Stadtgebiet von Vice City.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-bahnhof-millport-millport",
"k": "dienst",
"typ": "Bahnhof",
"n": "Bahnhof Millport",
"r": "Millport",
"geb": "Millport",
"p": [
-680,
6217
],
"g": 2,
"t": "Laut PowerPyx 25 Bahnhöfe insgesamt, die meisten im Stadtgebiet von Vice City.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-nine1nine-club-downtown",
"k": "dienst",
"typ": "Bar & Club",
"n": "NINE1NINE (Club)",
"r": "Downtown",
"geb": "Vice City",
"p": [
-671,
468
],
"g": 2,
"t": "Club, Sammelkarten-Set „NINE1NINE Dancers“",
"q": "e",
"src": [
"li",
"pp"
]
},
{
"id": "dienst-jack-of-hearts-club-crosstown",
"k": "dienst",
"typ": "Bar & Club",
"n": "Jack of Hearts (Club)",
"r": "Crosstown",
"geb": "Vice City",
"p": [
-686,
1195
],
"g": 2,
"t": "Club, Aufnahmekabinen im 2. Stock – Sammelobjekte",
"q": "e",
"src": [
"li",
"pp"
]
},
{
"id": "dienst-delights-cabaret-port-gellhorn",
"k": "dienst",
"typ": "Bar & Club",
"n": "Delights Cabaret",
"r": "Port Gellhorn",
"geb": "Port Gellhorn",
"p": [
-6524,
3889
],
"g": 1,
"t": "Stripclub – Sammelkarten-Set „Delights Dancers“; ohne Partner schadet es der Beziehung",
"q": "e",
"src": [
"li",
"pp"
]
},
{
"id": "dienst-y-hotel-ocean-beach",
"k": "dienst",
"typ": "Bar & Club",
"n": "Y Hotel",
"r": "Ocean Beach",
"geb": "Vice Beach",
"p": [
1675,
758
],
"g": 1,
"t": "Hotel",
"q": "e",
"src": [
"li",
"pp"
]
},
{
"id": "dienst-manatee-s-rest",
"k": "dienst",
"typ": "Bar & Club",
"n": "Manatee's Rest",
"t": "Bar",
"q": "e",
"src": [
"li",
"pp"
]
},
{
"id": "dienst-hehler-dunk-trailer-port-gellhorn",
"k": "dienst",
"typ": "Hehler",
"n": "Hehler Dunk (Trailer)",
"r": "Port Gellhorn",
"geb": "Port Gellhorn",
"p": [
-6484,
3855
],
"g": 1,
"t": "Ab „Slam Dunk“ (Kapitel 2). Drogen: niedrig, Schmuck: niedrig, Scheine: sehr niedrig. Nach der Story wieder da.",
"q": "m",
"src": [
"pp"
]
},
{
"id": "dienst-hehler-tyrone-la-perle",
"k": "dienst",
"typ": "Hehler",
"n": "Hehler Tyrone",
"r": "La Perle",
"geb": "Vice City",
"p": [
-856,
1479
],
"g": 1,
"t": "Ab Kapitel 3. Bester Preis für Drogen (hoch), Schmuck und Scheine mittel.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-hehler-yasmani-little-cuba",
"k": "dienst",
"typ": "Hehler",
"n": "Hehler Yasmani",
"r": "Little Cuba",
"geb": "Vice City",
"p": [
-1229,
206
],
"g": 1,
"t": "Ab Kapitel 3 über seine Jobs. Bester Preis für Schmuck und markierte Scheine (hoch), Drogen mittel.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-randy-high-end-autos-balsero",
"k": "dienst",
"typ": "Hehler",
"n": "Randy (High-End-Autos)",
"r": "Balsero",
"geb": "Vice City",
"p": [
-1878,
537
],
"g": 1,
"t": "Nimmt bestimmte Luxusautos mit Advanced Tracker. Ab „Clonin' Keys, Makin' GS“ (Kapitel 3).",
"q": "e",
"src": [
"pp",
"gmr"
]
},
{
"id": "dienst-mitchell-auto-center-port-gellhorn",
"k": "dienst",
"typ": "Garage",
"n": "Mitchell Auto Center",
"r": "Port Gellhorn",
"geb": "Port Gellhorn",
"p": [
-6523,
3865
],
"g": 1,
"t": "4.000 $, 1 Stellplatz. Alle kaufbaren = Trophäe „Little Boxes“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-7th-avenue-garage",
"k": "dienst",
"typ": "Garage",
"n": "7th Avenue Garage",
"t": "12.000 $, 1 Stellplatz. Alle kaufbaren = Trophäe „Little Boxes“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-vela-rota-drive-garage",
"k": "dienst",
"typ": "Garage",
"n": "Vela Rota Drive Garage",
"t": "24.000 $, 1 Stellplatz. Alle kaufbaren = Trophäe „Little Boxes“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-persistence-road-garage",
"k": "dienst",
"typ": "Garage",
"n": "Persistence Road Garage",
"t": "7.600 $, 1 Stellplatz. Alle kaufbaren = Trophäe „Little Boxes“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-wyatt-motors",
"k": "dienst",
"typ": "Garage",
"n": "Wyatt Motors",
"t": "21.600 $, 1 Stellplatz. Alle kaufbaren = Trophäe „Little Boxes“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-bonita-court-garage",
"k": "dienst",
"typ": "Garage",
"n": "Bonita Court Garage",
"t": "34.000 $, 1 Stellplatz. Alle kaufbaren = Trophäe „Little Boxes“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-atlantic-court-garage",
"k": "dienst",
"typ": "Garage",
"n": "Atlantic Court Garage",
"t": "40.000 $, 1 Stellplatz. Alle kaufbaren = Trophäe „Little Boxes“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-store-n-bolt",
"k": "dienst",
"typ": "Garage",
"n": "Store n' Bolt",
"t": "16.800 $, 1 Stellplatz. Alle kaufbaren = Trophäe „Little Boxes“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-port-gellhorn-station-garage-port-gellho",
"k": "dienst",
"typ": "Garage",
"n": "Port Gellhorn Station Garage",
"r": "Port Gellhorn",
"geb": "Port Gellhorn",
"p": [
-6448,
3737
],
"g": 1,
"t": "Story: nach „Daily Driver“ (Kap. 2), 1 Stellplatz. Alle kaufbaren = Trophäe „Little Boxes“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-thompson-court-garage",
"k": "dienst",
"typ": "Garage",
"n": "Thompson Court Garage",
"t": "Story: nach „Company Cars“ (Kap. 4), 2 Stellplätze. Alle kaufbaren = Trophäe „Little Boxes“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-ne-15th-street-garage",
"k": "dienst",
"typ": "Garage",
"n": "NE 15th Street Garage",
"t": "Story: nach „Operation Savage Glory“ (Kap. 5), 2 Stellplätze. Alle kaufbaren = Trophäe „Little Boxes“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-pegassi-residences-garage-tequesta",
"k": "dienst",
"typ": "Garage",
"n": "Pegassi Residences Garage",
"r": "Tequesta",
"geb": "Vice City",
"p": [
-153,
-898
],
"g": 2,
"t": "Story: nach „Operation Savage Glory“ (Kap. 5), 3 Stellplätze. Alle kaufbaren = Trophäe „Little Boxes“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "dienst-paradise-garage-watson-bay",
"k": "dienst",
"typ": "Garage",
"n": "Paradise Garage",
"r": "Watson Bay",
"geb": "Watson Bay",
"p": [
-4088,
-2424
],
"g": 2,
"t": "Safehouse-/Garagenort laut Leonida Insights.",
"q": "e",
"src": [
"li"
]
},
{
"id": "dienst-shore-court-ocean-beach",
"k": "dienst",
"typ": "Garage",
"n": "Shore Court",
"r": "Ocean Beach",
"geb": "Vice Beach",
"p": [
1791,
802
],
"g": 1,
"t": "Safehouse-/Garagenort laut Leonida Insights.",
"q": "e",
"src": [
"li"
]
},
{
"id": "dienst-brian-s-garage-hamlet",
"k": "dienst",
"typ": "Garage",
"n": "Brian's Garage",
"r": "Hamlet",
"geb": "Hamlet",
"p": [
-2749,
-3332
],
"g": 1,
"t": "Safehouse-/Garagenort laut Leonida Insights.",
"q": "e",
"src": [
"li"
]
},
{
"id": "raub-shorefront-watson-bay-watson-bay",
"k": "raub",
"typ": "Bank",
"n": "Shorefront – Watson Bay",
"r": "Watson Bay",
"geb": "Watson Bay",
"p": [
-5087,
-3310
],
"g": 1,
"t": "Kleine Bank: 5–20 Tsd. $. Kassenschublade und Safe ausräumen.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-gibson-brothers-bank",
"k": "raub",
"typ": "Bank",
"n": "Gibson Brothers Bank",
"r": "Mariana County",
"county": "Mariana",
"t": "Kleine Bank: 10–30 Tsd. $. Kassenschublade und Safe ausräumen.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-lombank-peacock-bay-peacock-bay",
"k": "raub",
"typ": "Bank",
"n": "Lombank – Peacock Bay",
"r": "Peacock Bay",
"geb": "Vice City",
"p": [
-1161,
-1988
],
"g": 1,
"t": "Kleine Bank: 5–20 Tsd. $. Kassenschublade und Safe ausräumen.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-fleeca-peacock-bay-peacock-bay",
"k": "raub",
"typ": "Bank",
"n": "Fleeca – Peacock Bay",
"r": "Peacock Bay",
"geb": "Vice City",
"p": [
-1263,
-1858
],
"g": 1,
"t": "Kleine Bank: 5–20 Tsd. $. Kassenschublade und Safe ausräumen.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-shorefront-downtown-downtown",
"k": "raub",
"typ": "Bank",
"n": "Shorefront – Downtown",
"r": "Downtown",
"geb": "Vice City",
"p": [
-541,
-276
],
"g": 1,
"t": "Kleine Bank: 5–15 Tsd. $. Kassenschublade und Safe ausräumen.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-shorefront-rockridge-rockridge",
"k": "raub",
"typ": "Bank",
"n": "Shorefront – Rockridge",
"r": "Rockridge",
"geb": "Vice City",
"p": [
-1309,
737
],
"g": 1,
"t": "Kleine Bank: 5–20 Tsd. $. Kassenschublade und Safe ausräumen.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-lombank-bayside-bayside",
"k": "raub",
"typ": "Bank",
"n": "Lombank – Bayside",
"r": "Bayside",
"geb": "Vice City",
"p": [
-307,
910
],
"g": 1,
"t": "Kleine Bank: 15–45 Tsd. $. Kassenschublade und Safe ausräumen.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-fleeca-washington-beach-washington-beach",
"k": "raub",
"typ": "Bank",
"n": "Fleeca – Washington Beach",
"r": "Washington Beach",
"geb": "Vice Beach",
"p": [
1678,
2297
],
"g": 1,
"t": "Kleine Bank: 10–30 Tsd. $. Kassenschublade und Safe ausräumen.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-lombank-ocean-beach-ocean-beach",
"k": "raub",
"typ": "Bank",
"n": "Lombank – Ocean Beach",
"r": "Ocean Beach",
"geb": "Vice Beach",
"p": [
1801,
817
],
"g": 1,
"t": "Kleine Bank: 15–45 Tsd. $. Kassenschublade und Safe ausräumen.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-fleeca-ocean-beach-ocean-beach",
"k": "raub",
"typ": "Bank",
"n": "Fleeca – Ocean Beach",
"r": "Ocean Beach",
"geb": "Vice Beach",
"p": [
1730,
686
],
"g": 1,
"t": "Kleine Bank: 5–15 Tsd. $. Kassenschublade und Safe ausräumen.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-shorefront-ocean-beach-ocean-beach",
"k": "raub",
"typ": "Bank",
"n": "Shorefront – Ocean Beach",
"r": "Ocean Beach",
"geb": "Vice Beach",
"p": [
1641,
684
],
"g": 1,
"t": "Kleine Bank: 5–15 Tsd. $. Kassenschublade und Safe ausräumen.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-druthers-state-bank",
"k": "raub",
"typ": "Bank",
"n": "Druthers State Bank",
"r": "Leonard County",
"county": "Leonard",
"t": "Kleine Bank: 15–45 Tsd. $. Kassenschublade und Safe ausräumen.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-shorefront-ambrosia-ambrosia",
"k": "raub",
"typ": "Bank",
"n": "Shorefront – Ambrosia",
"r": "Ambrosia",
"geb": "Ambrosia",
"p": [
-2643,
4001
],
"g": 1,
"t": "Kleine Bank: 5–15 Tsd. $. Kassenschublade und Safe ausräumen.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-fleeca-vcia-vcia",
"k": "raub",
"typ": "Banktresor",
"n": "Fleeca – VCIA",
"r": "VCIA",
"geb": "Vice City",
"p": [
-2341,
-704
],
"g": 1,
"t": "Großbank mit Tresor: 100–150 Tsd. $. Tresor offen nur, wenn ein Geldtransporter liefert – Transporter folgen. Kassenschublade + Tresor + Safe. Sofort 4 Sterne. Ab Ende Kapitel 4.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-fleeca-tequesta-tequesta",
"k": "raub",
"typ": "Banktresor",
"n": "Fleeca – Tequesta",
"r": "Tequesta",
"geb": "Vice City",
"p": [
-791,
-1004
],
"g": 1,
"t": "Großbank mit Tresor: 65–110 Tsd. $. Tresor offen nur, wenn ein Geldtransporter liefert – Transporter folgen. Kassenschublade + Tresor + Safe. Sofort 4 Sterne. Ab Ende Kapitel 4.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-lombank-downtown-downtown",
"k": "raub",
"typ": "Banktresor",
"n": "Lombank – Downtown",
"r": "Downtown",
"geb": "Vice City",
"p": [
-576,
3
],
"g": 1,
"t": "Großbank mit Tresor: 135–205 Tsd. $. Tresor offen nur, wenn ein Geldtransporter liefert – Transporter folgen. Kassenschublade + Tresor + Safe. Sofort 4 Sterne. Ab Ende Kapitel 4.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-fleeca-downtown-downtown",
"k": "raub",
"typ": "Banktresor",
"n": "Fleeca – Downtown",
"r": "Downtown",
"geb": "Vice City",
"p": [
-756,
-187
],
"g": 1,
"t": "Großbank mit Tresor: 100–150 Tsd. $. Tresor offen nur, wenn ein Geldtransporter liefert – Transporter folgen. Kassenschublade + Tresor + Safe. Sofort 4 Sterne. Ab Ende Kapitel 4.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-lombank-ocean-beach-ocean-beachx",
"k": "raub",
"typ": "Banktresor",
"n": "Lombank – Ocean Beach",
"r": "Ocean Beach",
"geb": "Vice Beach",
"p": [
1801,
817
],
"g": 1,
"t": "Großbank mit Tresor: 135–205 Tsd. $. Tresor offen nur, wenn ein Geldtransporter liefert – Transporter folgen. Kassenschublade + Tresor + Safe. Sofort 4 Sterne. Ab Ende Kapitel 4.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-fleeca-ocean-beach-ocean-beachx",
"k": "raub",
"typ": "Banktresor",
"n": "Fleeca – Ocean Beach",
"r": "Ocean Beach",
"geb": "Vice Beach",
"p": [
1730,
686
],
"g": 1,
"t": "Großbank mit Tresor: 75–135 Tsd. $. Tresor offen nur, wenn ein Geldtransporter liefert – Transporter folgen. Kassenschublade + Tresor + Safe. Sofort 4 Sterne. Ab Ende Kapitel 4.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-lombank-ocean-beach-ocean-beachxx",
"k": "raub",
"typ": "Banktresor",
"n": "Lombank – Ocean Beach",
"r": "Ocean Beach",
"geb": "Vice Beach",
"p": [
1801,
817
],
"g": 1,
"t": "Großbank mit Tresor: 75–135 Tsd. $. Tresor offen nur, wenn ein Geldtransporter liefert – Transporter folgen. Kassenschublade + Tresor + Safe. Sofort 4 Sterne. Ab Ende Kapitel 4.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-shorefront-ocean-beach-ocean-beachx",
"k": "raub",
"typ": "Banktresor",
"n": "Shorefront – Ocean Beach",
"r": "Ocean Beach",
"geb": "Vice Beach",
"p": [
1641,
684
],
"g": 1,
"t": "Großbank mit Tresor: 95–140 Tsd. $. Tresor offen nur, wenn ein Geldtransporter liefert – Transporter folgen. Kassenschublade + Tresor + Safe. Sofort 4 Sterne. Ab Ende Kapitel 4.",
"q": "e",
"src": [
"pp",
"mf"
]
},
{
"id": "raub-fleeca-key-lento",
"k": "raub",
"typ": "Bank",
"n": "Fleeca – Key Lento",
"at": "kl-fleeca",
"t": "Kleine Bank: 5–20 Tsd. $.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-quick-buck-hamlet-hamlet",
"k": "raub",
"typ": "Payday Loan",
"n": "Quick Buck – Hamlet",
"r": "Hamlet",
"geb": "Hamlet",
"p": [
-2762,
-3242
],
"g": 1,
"t": "5–15 Tsd. $. Alle 7 für 100 %. Tipps über Yasmani.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-payline-loans-247",
"k": "raub",
"typ": "Payday Loan",
"n": "Payline Loans 247",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "5–15 Tsd. $. Alle 7 für 100 %. Tipps über Yasmani.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-payday-loans-southside-southside",
"k": "raub",
"typ": "Payday Loan",
"n": "Payday Loans – Southside",
"r": "Southside",
"geb": "Vice City",
"p": [
-1923,
-2147
],
"g": 1,
"t": "5–15 Tsd. $. Alle 7 für 100 %. Tipps über Yasmani.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-payday-loans-little-cuba-little-cuba",
"k": "raub",
"typ": "Payday Loan",
"n": "Payday Loans – Little Cuba",
"r": "Little Cuba",
"geb": "Vice City",
"p": [
-1217,
105
],
"g": 1,
"t": "15–25 Tsd. $. Alle 7 für 100 %. Tipps über Yasmani.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-payday-loans-rockridge-rockridge",
"k": "raub",
"typ": "Payday Loan",
"n": "Payday Loans – Rockridge",
"r": "Rockridge",
"geb": "Vice City",
"p": [
-1331,
831
],
"g": 1,
"t": "5–15 Tsd. $. Alle 7 für 100 %. Tipps über Yasmani.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-quick-buck-la-perle-la-perle",
"k": "raub",
"typ": "Payday Loan",
"n": "Quick Buck – La Perle",
"r": "La Perle",
"geb": "Vice City",
"p": [
-1037,
1418
],
"g": 1,
"t": "5–15 Tsd. $. Alle 7 für 100 %. Tipps über Yasmani.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-cash-flow",
"k": "raub",
"typ": "Payday Loan",
"n": "Cash Flow",
"r": "Kelly County",
"county": "Kelly",
"t": "2–10 Tsd. $. Alle 7 für 100 %. Tipps über Yasmani.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-timeless-peculiars",
"k": "raub",
"typ": "Pfandhaus",
"n": "Timeless Peculiars",
"r": "Mariana County",
"county": "Mariana",
"t": "Smash 'n' Grab: 4,5–12 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-victoria-lee-jeweler",
"k": "raub",
"typ": "Juwelier",
"n": "Victoria Lee Jeweler",
"r": "Mariana County",
"county": "Mariana",
"t": "Smash 'n' Grab: 9–20 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-hamlet-pawn-hamlet",
"k": "raub",
"typ": "Pfandhaus",
"n": "Hamlet Pawn",
"r": "Hamlet",
"geb": "Hamlet",
"p": [
-2768,
-3128
],
"g": 1,
"t": "Smash 'n' Grab: 4,5–12 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-joyeria-empe-os",
"k": "raub",
"typ": "Pfandhaus",
"n": "Joyeria Empeños",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 4,5–12 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-ernesto-s-pawn",
"k": "raub",
"typ": "Pfandhaus",
"n": "Ernesto's Pawn",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 4,5–12 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-donovan-banks-co",
"k": "raub",
"typ": "Juwelier",
"n": "Donovan Banks & Co.",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 14–25 Tsd. $ · Tresor 0104. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-plush",
"k": "raub",
"typ": "Juwelier",
"n": "Plush",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 9–20 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-pawn-city",
"k": "raub",
"typ": "Pfandhaus",
"n": "Pawn City",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 1–10 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-icegem-diamonds-watches",
"k": "raub",
"typ": "Juwelier",
"n": "Icegem Diamonds & Watches",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 14–25 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-richardson-jewelry-diamonds",
"k": "raub",
"typ": "Juwelier",
"n": "Richardson Jewelry & Diamonds",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 4,5–12 Tsd. $ · Tresor 6815. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-all-that-glitters",
"k": "raub",
"typ": "Juwelier",
"n": "All That Glitters",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 9–20 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-peacock",
"k": "raub",
"typ": "Juwelier",
"n": "Peacock",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 9–20 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-fast-cash",
"k": "raub",
"typ": "Pfandhaus",
"n": "Fast Cash",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 1–10 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-the-jewelry-place",
"k": "raub",
"typ": "Juwelier",
"n": "The Jewelry Place",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 1–10 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-crown-jewels",
"k": "raub",
"typ": "Juwelier",
"n": "Crown Jewels",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 1–10 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-dorado-pawn-shop",
"k": "raub",
"typ": "Pfandhaus",
"n": "Dorado Pawn Shop",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 4,5–12 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-white-sands-jewelry-pawn",
"k": "raub",
"typ": "Pfandhaus",
"n": "White Sands Jewelry Pawn",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 4,5–12 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-down-town-pawn",
"k": "raub",
"typ": "Pfandhaus",
"n": "Down Town Pawn",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 1–10 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-vice-city-pawn-crosstown",
"k": "raub",
"typ": "Pfandhaus",
"n": "Vice City Pawn",
"r": "Crosstown",
"geb": "Vice City",
"p": [
-660,
1162
],
"g": 2,
"t": "Smash 'n' Grab: 4,5–12 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-pawn-stash",
"k": "raub",
"typ": "Pfandhaus",
"n": "Pawn Stash",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 4,5–12 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-blanc-giroux",
"k": "raub",
"typ": "Juwelier",
"n": "Blanc & Giroux",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 14–25 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-roval-jewelry",
"k": "raub",
"typ": "Juwelier",
"n": "Roval Jewelry",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 14–25 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-covgari",
"k": "raub",
"typ": "Juwelier",
"n": "Covgari",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 14–25 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-akoya-jewelers",
"k": "raub",
"typ": "Juwelier",
"n": "Akoya Jewelers",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 14–25 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-marshal-s",
"k": "raub",
"typ": "Juwelier",
"n": "Marshal's",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 9–20 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-casa-de-empe-o",
"k": "raub",
"typ": "Pfandhaus",
"n": "Casa de Empeño",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 4,5–12 Tsd. $ · Tresor 1680. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-rococo-rich",
"k": "raub",
"typ": "Juwelier",
"n": "Rococo Rich",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 14–25 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-legendary-custom-jewelry",
"k": "raub",
"typ": "Juwelier",
"n": "Legendary Custom Jewelry",
"r": "Vice-Dale County",
"county": "Vice-Dale",
"t": "Smash 'n' Grab: 14–25 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-brilliant-cuts",
"k": "raub",
"typ": "Juwelier",
"n": "Brilliant Cuts",
"r": "Leonard County",
"county": "Leonard",
"t": "Smash 'n' Grab: 9–20 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-skala",
"k": "raub",
"typ": "Juwelier",
"n": "Skala",
"r": "Leonard County",
"county": "Leonard",
"t": "Smash 'n' Grab: 14–25 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-kowalski",
"k": "raub",
"typ": "Juwelier",
"n": "Kowalski",
"r": "Leonard County",
"county": "Leonard",
"t": "Smash 'n' Grab: 14–25 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-buck-s-jewelry-pawn-port-gellhorn",
"k": "raub",
"typ": "Pfandhaus",
"n": "Buck's Jewelry & Pawn",
"r": "Port Gellhorn",
"geb": "Port Gellhorn",
"p": [
-6467,
3816
],
"g": 1,
"t": "Smash 'n' Grab: 1–10 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-avery-pawn",
"k": "raub",
"typ": "Pfandhaus",
"n": "Avery Pawn",
"r": "Kelly County",
"county": "Kelly",
"t": "Smash 'n' Grab: 1–10 Tsd. $ · Mission „Hit Avery Pawn“. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-florence-co",
"k": "raub",
"typ": "Pfandhaus",
"n": "Florence & Co.",
"r": "Kelly County",
"county": "Kelly",
"t": "Smash 'n' Grab: 4,5–12 Tsd. $. 34 von 35 für 100 %.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "raub-the-siren-s-chest",
"k": "raub",
"typ": "Juwelier",
"n": "The Siren's Chest",
"at": "kl-laeden",
"t": "Smash 'n' Grab in Key Lento: 1–10 Tsd. $.",
"q": "e",
"src": [
"pp",
"li"
]
},
{
"id": "aktiv-hit-n-run-vc-salton-3-rennen-salton",
"k": "aktiv",
"typ": "Rennen",
"n": "Hit 'N Run VC – Salton (3 Rennen)",
"r": "Salton",
"geb": "Vice City",
"p": [
-1576,
-611
],
"g": 1,
"t": "Straßenrennen, freigeschaltet über „Dealer's Choice“. Startgeld und Mietwagen kosten.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-hit-n-run-vc-la-perle-2-rennen-la-perle",
"k": "aktiv",
"typ": "Rennen",
"n": "Hit 'N Run VC – La Perle (2 Rennen)",
"r": "La Perle",
"geb": "Vice City",
"p": [
-1011,
1381
],
"g": 1,
"t": "Straßenrennen",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-hit-n-run-vc-ocean-beach-2-rennen-ocean-",
"k": "aktiv",
"typ": "Rennen",
"n": "Hit 'N Run VC – Ocean Beach (2 Rennen)",
"r": "Ocean Beach",
"geb": "Vice Beach",
"p": [
1813,
753
],
"g": 1,
"t": "Straßenrennen",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-hit-n-run-vc-gloriana-key-2-rennen-glori",
"k": "aktiv",
"typ": "Rennen",
"n": "Hit 'N Run VC – Gloriana Key (2 Rennen)",
"r": "Gloriana Key",
"geb": "Vice City",
"p": [
587,
-1337
],
"g": 1,
"t": "Straßenrennen",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-animal-crackers-big-pine-2-rennen-big-pi",
"k": "aktiv",
"typ": "Rennen",
"n": "Animal Crackers – Big Pine (2 Rennen)",
"r": "Big Pine",
"geb": "Nord-Mariana",
"p": [
-5248,
-1623
],
"g": 1,
"t": "Teil der 8-Rennen-Serie Animal Crackers",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-ambrosia-raceway-demolition-2-rennen-amb",
"k": "aktiv",
"typ": "Rennen",
"n": "Ambrosia Raceway – Demolition (2 Rennen)",
"r": "Ambrosia",
"geb": "Ambrosia",
"p": [
-2978,
4645
],
"g": 2,
"t": "Demolition-Rennen nördlich von Ambrosia",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-animal-crackers-grayson-2-rennen",
"k": "aktiv",
"typ": "Rennen",
"n": "Animal Crackers – Grayson (2 Rennen)",
"r": "Lummox County",
"county": "Lummox",
"t": "Teil der 8-Rennen-Serie Animal Crackers. Genaue Lage offen.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-animal-crackers-redshaw-s-2-rennen",
"k": "aktiv",
"typ": "Rennen",
"n": "Animal Crackers – Redshaw's (2 Rennen)",
"r": "Lummox County",
"county": "Lummox",
"t": "Teil der 8-Rennen-Serie Animal Crackers. Genaue Lage offen.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-animal-crackers-ranchers-2-rennen",
"k": "aktiv",
"typ": "Rennen",
"n": "Animal Crackers – Ranchers (2 Rennen)",
"r": "Lummox County",
"county": "Lummox",
"t": "Teil der 8-Rennen-Serie Animal Crackers. Genaue Lage offen.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-top-fun-drohnenrennen-1-hamlet-hamlet",
"k": "aktiv",
"typ": "Drohnenrennen",
"n": "Top-Fun-Drohnenrennen 1 – Hamlet",
"r": "Hamlet",
"geb": "Hamlet",
"p": [
-2681,
-3154
],
"g": 1,
"t": "3 Strecken mit Bestzeit: Deep Roots 1:31 · Power Station South 1:26 · Power Station North 2:04. Bei den ersten beiden die Bestzeit schlagen, dann öffnet die dritte. Alle 42 für 100 %, jeder Ort = Trophäe „Top Fun“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-top-fun-drohnenrennen-2-watson-bay-watso",
"k": "aktiv",
"typ": "Drohnenrennen",
"n": "Top-Fun-Drohnenrennen 2 – Watson Bay",
"r": "Watson Bay",
"geb": "Watson Bay",
"p": [
-5072,
-3202
],
"g": 1,
"t": "3 Strecken mit Bestzeit: Leonida RC Raceway 1:27 · Watson Bay 1:34 · Marshland Animal Park 1:17. Bei den ersten beiden die Bestzeit schlagen, dann öffnet die dritte. Alle 42 für 100 %, jeder Ort = Trophäe „Top Fun“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-top-fun-drohnenrennen-3-capri-capri",
"k": "aktiv",
"typ": "Drohnenrennen",
"n": "Top-Fun-Drohnenrennen 3 – Capri",
"r": "Capri",
"geb": "Capri",
"p": [
-6787,
242
],
"g": 1,
"t": "3 Strecken mit Bestzeit: Capri Train Station 1:50 · Ravella Drive 1:51 · Capri Lake 2:01. Bei den ersten beiden die Bestzeit schlagen, dann öffnet die dritte. Alle 42 für 100 %, jeder Ort = Trophäe „Top Fun“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-top-fun-drohnenrennen-4-buckskin-swamp-b",
"k": "aktiv",
"typ": "Drohnenrennen",
"n": "Top-Fun-Drohnenrennen 4 – Buckskin Swamp",
"r": "Buckskin Swamp",
"geb": "Buckskin Swamp",
"p": [
-4163,
842
],
"g": 1,
"t": "3 Strecken mit Bestzeit: Kowaachobee Village 1:24 · Swampy Sal's Safari Park 1:40 · Camp Moonflower 1:48. Bei den ersten beiden die Bestzeit schlagen, dann öffnet die dritte. Alle 42 für 100 %, jeder Ort = Trophäe „Top Fun“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-top-fun-drohnenrennen-5-balsero-balsero",
"k": "aktiv",
"typ": "Drohnenrennen",
"n": "Top-Fun-Drohnenrennen 5 – Balsero",
"r": "Balsero",
"geb": "Vice City",
"p": [
-1866,
455
],
"g": 1,
"t": "3 Strecken mit Bestzeit: Navitrak 1:29 · Apollo Aggregates 1:27 · Tisha-Wocka Flea Market 1:08. Bei den ersten beiden die Bestzeit schlagen, dann öffnet die dritte. Alle 42 für 100 %, jeder Ort = Trophäe „Top Fun“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-top-fun-drohnenrennen-6-downtown-downtow",
"k": "aktiv",
"typ": "Drohnenrennen",
"n": "Top-Fun-Drohnenrennen 6 – Downtown",
"r": "Downtown",
"geb": "Vice City",
"p": [
-561,
-92
],
"g": 1,
"t": "3 Strecken mit Bestzeit: Future Leonida Art Museum 1:47 · Shoreline Market 2:01 · Wildland Zoo 1:30. Bei den ersten beiden die Bestzeit schlagen, dann öffnet die dritte. Alle 42 für 100 %, jeder Ort = Trophäe „Top Fun“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-top-fun-drohnenrennen-7-dalton-island-da",
"k": "aktiv",
"typ": "Drohnenrennen",
"n": "Top-Fun-Drohnenrennen 7 – Dalton Island",
"r": "Dalton Island",
"geb": "Vice City",
"p": [
1772,
-1389
],
"g": 1,
"t": "3 Strecken mit Bestzeit: Avarice Petroleum 1:53 · The Jamaica 1:16 · Ivory Towers 1:42. Bei den ersten beiden die Bestzeit schlagen, dann öffnet die dritte. Alle 42 für 100 %, jeder Ort = Trophäe „Top Fun“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-top-fun-drohnenrennen-8-vice-beach-leaf-",
"k": "aktiv",
"typ": "Drohnenrennen",
"n": "Top-Fun-Drohnenrennen 8 – Vice Beach",
"r": "Leaf Links",
"geb": "Vice Beach",
"p": [
375,
2542
],
"g": 1,
"t": "3 Strecken mit Bestzeit: Leaf Links 1:30 · Vice Regal Hotel 1:41 · St. Vitus Medical Center 2:00. Bei den ersten beiden die Bestzeit schlagen, dann öffnet die dritte. Alle 42 für 100 %, jeder Ort = Trophäe „Top Fun“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-top-fun-drohnenrennen-9-waning-sands-wan",
"k": "aktiv",
"typ": "Drohnenrennen",
"n": "Top-Fun-Drohnenrennen 9 – Waning Sands",
"r": "Waning Sands",
"geb": "Waning Sands",
"p": [
160,
4100
],
"g": 1,
"t": "3 Strecken mit Bestzeit: Hot Skidz 1:39 · Thundergolf 1:57 · Evergreen Mall 1:52. Bei den ersten beiden die Bestzeit schlagen, dann öffnet die dritte. Alle 42 für 100 %, jeder Ort = Trophäe „Top Fun“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-top-fun-drohnenrennen-10-ambrosia-ambros",
"k": "aktiv",
"typ": "Drohnenrennen",
"n": "Top-Fun-Drohnenrennen 10 – Ambrosia",
"r": "Ambrosia",
"geb": "Ambrosia",
"p": [
-2716,
3975
],
"g": 1,
"t": "3 Strecken mit Bestzeit: Captain O'Malley Marina 2:03 · Allied Crystal 2:02 · Waste Transfer Services 1:55. Bei den ersten beiden die Bestzeit schlagen, dann öffnet die dritte. Alle 42 für 100 %, jeder Ort = Trophäe „Top Fun“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-top-fun-drohnenrennen-11-port-gellhorn-p",
"k": "aktiv",
"typ": "Drohnenrennen",
"n": "Top-Fun-Drohnenrennen 11 – Port Gellhorn",
"r": "Port Gellhorn",
"geb": "Port Gellhorn",
"p": [
-6544,
3642
],
"g": 1,
"t": "3 Strecken mit Bestzeit: Manifest Canyon 1:28 · Red Apple Orchard 1:12 · Port Gellhorn 1:39. Bei den ersten beiden die Bestzeit schlagen, dann öffnet die dritte. Alle 42 für 100 %, jeder Ort = Trophäe „Top Fun“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-top-fun-drohnenrennen-12-draper-island-d",
"k": "aktiv",
"typ": "Drohnenrennen",
"n": "Top-Fun-Drohnenrennen 12 – Draper Island",
"r": "Draper Island",
"geb": "Port Gellhorn",
"p": [
-6848,
4951
],
"g": 1,
"t": "3 Strecken mit Bestzeit: Draper Island Terminal 1:49 · Draper Refinery East 1:44 · Draper Refinery West 1:51. Bei den ersten beiden die Bestzeit schlagen, dann öffnet die dritte. Alle 42 für 100 %, jeder Ort = Trophäe „Top Fun“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-top-fun-drohnenrennen-13-moreau-sawmill-",
"k": "aktiv",
"typ": "Drohnenrennen",
"n": "Top-Fun-Drohnenrennen 13 – Moreau Sawmill",
"r": "Moreau",
"geb": "Moreau",
"p": [
-3735,
7891
],
"g": 1,
"t": "3 Strecken mit Bestzeit: Abandoned Mining Pit 1:03 · Adler Creek 1:21 · MacAlister Gold Mine 0:59. Bei den ersten beiden die Bestzeit schlagen, dann öffnet die dritte. Alle 42 für 100 %, jeder Ort = Trophäe „Top Fun“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-top-fun-drohnenrennen-14-millport-millpo",
"k": "aktiv",
"typ": "Drohnenrennen",
"n": "Top-Fun-Drohnenrennen 14 – Millport",
"r": "Millport",
"geb": "Millport",
"p": [
-912,
6472
],
"g": 1,
"t": "3 Strecken mit Bestzeit: Millport 1:31 · Rushwood Logging 2:08 · Tallaloko Lakeside Resort 2:05. Bei den ersten beiden die Bestzeit schlagen, dann öffnet die dritte. Alle 42 für 100 %, jeder Ort = Trophäe „Top Fun“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-kitty-litter-labor-1-hamlet-hamlet",
"k": "aktiv",
"typ": "Kitty-Litter-Labor",
"n": "Kitty-Litter-Labor 1 – Hamlet",
"r": "Hamlet",
"geb": "Hamlet",
"p": [
-2679,
-3113
],
"g": 1,
"t": "Story-Labor: Trailer im südlichen Mittelblock, pinker Rauch, gelbe Rohre an den Fenstern. 2.000 $. Tyrones Strang (Kapitel 3), Trophäe „Spin On This!“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-kitty-litter-labor-2-balsero-balsero",
"k": "aktiv",
"typ": "Kitty-Litter-Labor",
"n": "Kitty-Litter-Labor 2 – Balsero",
"r": "Balsero",
"geb": "Vice City",
"p": [
-1895,
477
],
"g": 1,
"t": "Garage am Nordrand des Suchgebiets. 2.000 $, ca. 3 Gegner. Tyrones Strang (Kapitel 3), Trophäe „Spin On This!“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-kitty-litter-labor-3-balsero-balsero",
"k": "aktiv",
"typ": "Kitty-Litter-Labor",
"n": "Kitty-Litter-Labor 3 – Balsero",
"r": "Balsero",
"geb": "Vice City",
"p": [
-1780,
687
],
"g": 1,
"t": "Garage im Gebäude mitten im Suchgebiet. Tastenfeld 1999 (steht auf einer Plakatwand). 2.500 $. Tyrones Strang (Kapitel 3), Trophäe „Spin On This!“.",
"codes": [
[
"Tastenfeld",
"1999"
]
],
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-kitty-litter-labor-4-balsero-balsero",
"k": "aktiv",
"typ": "Kitty-Litter-Labor",
"n": "Kitty-Litter-Labor 4 – Balsero",
"r": "Balsero",
"geb": "Vice City",
"p": [
-1674,
732
],
"g": 1,
"t": "Zweitsüdlichster Trailer. 2.500 $. Snap Gun oder Tür eintreten. Tyrones Strang (Kapitel 3), Trophäe „Spin On This!“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-kitty-litter-labor-5-rockridge-rockridge",
"k": "aktiv",
"typ": "Kitty-Litter-Labor",
"n": "Kitty-Litter-Labor 5 – Rockridge",
"r": "Rockridge",
"geb": "Vice City",
"p": [
-1361,
847
],
"g": 1,
"t": "Garage in der Mitte, Zugang über die Gasse im Westen. 2.500 $. Tyrones Strang (Kapitel 3), Trophäe „Spin On This!“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-kitty-litter-labor-6-crosstown-crosstown",
"k": "aktiv",
"typ": "Kitty-Litter-Labor",
"n": "Kitty-Litter-Labor 6 – Crosstown",
"r": "Crosstown",
"geb": "Vice City",
"p": [
-800,
1154
],
"g": 1,
"t": "Wohnung 2. Stock im Nordteil. 2.000 $. Brandgefahr. Tyrones Strang (Kapitel 3), Trophäe „Spin On This!“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-kitty-litter-labor-7-crosstown-crosstown",
"k": "aktiv",
"typ": "Kitty-Litter-Labor",
"n": "Kitty-Litter-Labor 7 – Crosstown",
"r": "Crosstown",
"geb": "Vice City",
"p": [
-772,
1252
],
"g": 1,
"t": "Garage hinter dem Gebäude von Cross My Heart Tattoos. 2.500 $. Tyrones Strang (Kapitel 3), Trophäe „Spin On This!“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-kitty-litter-labor-8-crosstown-crosstown",
"k": "aktiv",
"typ": "Kitty-Litter-Labor",
"n": "Kitty-Litter-Labor 8 – Crosstown",
"r": "Crosstown",
"geb": "Vice City",
"p": [
-543,
1074
],
"g": 1,
"t": "Garage an der Ostseite des mittleren Gebäudes. 2.500 $. Tyrones Strang (Kapitel 3), Trophäe „Spin On This!“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-kitty-litter-labor-9-decor-district-deco",
"k": "aktiv",
"typ": "Kitty-Litter-Labor",
"n": "Kitty-Litter-Labor 9 – Decor District",
"r": "Decor District",
"geb": "Vice City",
"p": [
-249,
2336
],
"g": 1,
"t": "Garage im Nordwest-Gebäude an der Schnellstraße. 2.500 $. Tyrones Strang (Kapitel 3), Trophäe „Spin On This!“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-kitty-litter-labor-10-little-cuba-little",
"k": "aktiv",
"typ": "Kitty-Litter-Labor",
"n": "Kitty-Litter-Labor 10 – Little Cuba",
"r": "Little Cuba",
"geb": "Vice City",
"p": [
-1269,
71
],
"g": 1,
"t": "Langes Gebäude in der Mitte. 2.500 $. Snap Gun nötig. Tyrones Strang (Kapitel 3), Trophäe „Spin On This!“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-kitty-litter-labor-11-salton-salton",
"k": "aktiv",
"typ": "Kitty-Litter-Labor",
"n": "Kitty-Litter-Labor 11 – Salton",
"r": "Salton",
"geb": "Vice City",
"p": [
-1486,
-626
],
"g": 1,
"t": "Verschlossene Wohnung, Zugang über offenes Fenster an der Ostseite. 2.000 $. Tyrones Strang (Kapitel 3), Trophäe „Spin On This!“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-kitty-litter-labor-12-tequesta-tequesta",
"k": "aktiv",
"typ": "Kitty-Litter-Labor",
"n": "Kitty-Litter-Labor 12 – Tequesta",
"r": "Tequesta",
"geb": "Vice City",
"p": [
-1054,
-1113
],
"g": 1,
"t": "Obergeschoss des östlichen C-förmigen Motels. 2.500 $. Snap Gun nötig. Tyrones Strang (Kapitel 3), Trophäe „Spin On This!“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "aktiv-kitty-litter-labor-13-west-vice-dale-wes",
"k": "aktiv",
"typ": "Kitty-Litter-Labor",
"n": "Kitty-Litter-Labor 13 – West Vice-Dale",
"r": "West Vice-Dale",
"geb": "Vice City",
"p": [
-3042,
224
],
"g": 1,
"t": "Trailer in der Mitte, durch das Ostfenster rein. 2.500 $. Tyrones Strang (Kapitel 3), Trophäe „Spin On This!“.",
"q": "e",
"src": [
"pp"
]
},
{
"id": "waffe-assassin-nipper-38",
"k": "waffe",
"typ": "Pistole",
"n": "Assassin Nipper .38",
"p": [
-5600,
-6520
],
"g": 0,
"t": "Fundort: Bodenluke in einem Schiffswrack, SO Permit Keys bei der Mile Zero Air Station („Spionageboot“-Rätsel)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-low-point-nipper-38",
"k": "waffe",
"typ": "Pistole",
"n": "Low Point Nipper .38",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-zodiac-nipper-38",
"k": "waffe",
"typ": "Pistole",
"n": "Zodiac Nipper .38",
"at": "gang-34",
"t": "Illegal Operation: Ocean Beach Lab",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-duval-signature-es9",
"k": "waffe",
"typ": "Pistole",
"n": "Duval Signature ES9",
"t": "Ultimate Edition",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-quarter-mile-es9",
"k": "waffe",
"typ": "Pistole",
"n": "Quarter Mile ES9",
"at": "gang-33",
"t": "Illegal Operation: Chatfield Storage & Logistics (Waxman Island)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-sand-storm-es9",
"k": "waffe",
"typ": "Pistole",
"n": "Sand Storm ES9",
"at": "laden-bigshots",
"t": "Kaufbar: Big Shots, Hamlet (1.470 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-the-guardian-es18",
"k": "waffe",
"typ": "Pistole",
"n": "The Guardian ES18",
"at": "gang-24",
"t": "Illegal Operation: Saber Shipping Yard (Little Cuba)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-caminos-signature-k17",
"k": "waffe",
"typ": "Pistole",
"n": "Caminos Signature K17",
"t": "offen (vermutlich Ultimate Edition, Lucia)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-dwnply-s-k17",
"k": "waffe",
"typ": "Pistole",
"n": "DWNPLY's K17",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-ej-s-k17",
"k": "waffe",
"typ": "Pistole",
"n": "EJ's K17",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-ptt-youngin-k17",
"k": "waffe",
"typ": "Pistole",
"n": "PTT Youngin$ K17",
"at": "gang-23",
"t": "Illegal Operation: Kamar Devon Community Center (Southside)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-san4san-k17",
"k": "waffe",
"typ": "Pistole",
"n": "San4San K17",
"at": "gang-17",
"t": "Illegal Operation: Sound4Sound Studio (Stockyard)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-nite-raptor-k17",
"k": "waffe",
"typ": "Pistole",
"n": "Nite Raptor K17",
"at": "laden-blackeagle",
"t": "Kaufbar: Black Eagle, Balsero (2.050 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-dumpster-k17-mcd",
"k": "waffe",
"typ": "Pistole",
"n": "Dumpster K17 MCD",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-stoner-k17-mcd",
"k": "waffe",
"typ": "Pistole",
"n": "Stoner K17 MCD",
"p": [
-2750,
4450
],
"g": 0,
"t": "Fundort: Big Day Motel, Zimmer 115, an der US-35 nördlich von Ambrosia",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-the-patriarch-drx",
"k": "waffe",
"typ": "Pistole",
"n": "The Patriarch DRX",
"p": [
-3060,
6600
],
"g": 0,
"t": "Fundort: neben einem versunkenen Auto, SW-Ufer Kalaga Reservoir",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-rogue-alpha-drx",
"k": "waffe",
"typ": "Pistole",
"n": "Rogue Alpha DRX",
"at": "laden-quickscope",
"t": "Kaufbar: Quickscope, Downtown (4.410 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-brainwasher-1992",
"k": "waffe",
"typ": "Pistole",
"n": "Brainwasher 1992",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-brian-s-1992",
"k": "waffe",
"typ": "Pistole",
"n": "Brian's 1992",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-deadringer-1992",
"k": "waffe",
"typ": "Pistole",
"n": "Deadringer 1992",
"p": [
-3300,
7700
],
"g": 0,
"t": "Fundort: Boden eines Mobilheims, Südufer Moreau River (Ost-Lummox)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-money-bag-1992",
"k": "waffe",
"typ": "Pistole",
"n": "Money Bag 1992",
"p": [
-3285,
7690
],
"g": 0,
"t": "Fundort: Couch im selben Mobilheim am Moreau River",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-martha-s-1992",
"k": "waffe",
"typ": "Pistole",
"n": "Martha's 1992",
"p": [
-3950,
7960
],
"g": 0,
"t": "Fundort: Kamin der Outlaw's Cabin, Moreau",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-monty-s-1992",
"k": "waffe",
"typ": "Pistole",
"n": "Monty's 1992",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-raul-s-1992",
"k": "waffe",
"typ": "Pistole",
"n": "Raul's 1992",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-russo-s-1992",
"k": "waffe",
"typ": "Pistole",
"n": "Russo's 1992",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-the-silver-1992",
"k": "waffe",
"typ": "Pistole",
"n": "The Silver 1992",
"at": "laden-bigshots",
"t": "Kaufbar: Big Shots, Hamlet (2.210 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-black-eagle-import-kalinga",
"k": "waffe",
"typ": "Pistole",
"n": "Black Eagle Import Kalinga",
"p": [
-1860,
560
],
"g": 0,
"t": "Fundort: Bürotresor im Black-Eagle-Lager, Balsero (Code steht am Büro-PC)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-convict-kalinga-50",
"k": "waffe",
"typ": "Pistole",
"n": "Convict Kalinga .50",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-gil-s-kalinga-50",
"k": "waffe",
"typ": "Pistole",
"n": "Gil's Kalinga .50",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-iron-oak-wcr-1",
"k": "waffe",
"typ": "Revolver",
"n": "Iron & Oak WCR-1",
"at": "laden-ironoak",
"t": "Kaufbar: Iron & Oak, Stockyard (1.260 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-cargo-h-l-38",
"k": "waffe",
"typ": "Revolver",
"n": "Cargo H&L .38",
"p": [
620,
-500
],
"g": 0,
"t": "Fundort: gelber „Scoop“-Container, Frachtbereich Port Vice City (Stapel hochklettern, Security meiden)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-lyle-s-h-l-38",
"k": "waffe",
"typ": "Revolver",
"n": "Lyle's H&L .38",
"t": "Welt: Kofferraum in einer alten Scheune an einer Sackgasse, Bonanza",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-ride-free-h-l-38",
"k": "waffe",
"typ": "Revolver",
"n": "Ride Free H&L .38",
"at": "gang-14",
"t": "Illegal Operation: Biker Hideout (Südufer Lake Leonida)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-jack-sheepe-h-l-38",
"k": "waffe",
"typ": "Revolver",
"n": "Jack Sheepe H&L .38",
"t": "Ultimate Edition, bei Biff's Gun Supply, Ambrosia (2.260 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-couch-potato-mustang-357",
"k": "waffe",
"typ": "Revolver",
"n": "Couch Potato Mustang .357",
"p": [
-6420,
3930
],
"g": 0,
"t": "Fundort: Couch im Baum am Tanglewood Ln, Port Gellhorn – herunterschießen, draufsetzen",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-honky-tonk-mustang-357",
"k": "waffe",
"typ": "Revolver",
"n": "Honky Tonk Mustang .357",
"at": "laden-phil",
"t": "Kaufbar: Phil's, Southside (3.780 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-kingfishers-akulus",
"k": "waffe",
"typ": "Revolver",
"n": "Kingfishers Akulus",
"at": "gang-2",
"t": "Illegal Operation: Sunrise RV Park (nördlich Cottonmouth Lake)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-bae-lux-s-w-10",
"k": "waffe",
"typ": "MP",
"n": "Bae-Lux's W-10",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-chromium-w-10",
"k": "waffe",
"typ": "MP",
"n": "Chromium W-10",
"at": "gang-18",
"t": "Illegal Operation: La Perle Trap House",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-little-friend-w-10",
"k": "waffe",
"typ": "MP",
"n": "Little Friend W-10",
"p": [
1710,
620
],
"g": 0,
"t": "Fundort: Tatort-Zimmer, 2. Stock Sunlite Motel, Ocean Beach",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-roxy-s-w-10",
"k": "waffe",
"typ": "MP",
"n": "Roxy's W-10",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-tyrone-s-w-10",
"k": "waffe",
"typ": "MP",
"n": "Tyrone's W-10",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-moneymaker-w-10",
"k": "waffe",
"typ": "MP",
"n": "Moneymaker W-10",
"at": "laden-tequesta",
"t": "Kaufbar: Tequesta Guns & Ammo (1.557 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-marabunta-grande-type-9",
"k": "waffe",
"typ": "MP",
"n": "Marabunta Grande Type 9",
"t": "Illegal Operation: Weed Grow (NE-Ufer Lake Tallaloko)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-neon-sunset-type-9",
"k": "waffe",
"typ": "MP",
"n": "Neon Sunset Type 9",
"at": "laden-vcfire",
"t": "Kaufbar: Vice City Firearms, Salton (2.310 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-eris-fresh-dsg",
"k": "waffe",
"typ": "MP",
"n": "Eris Fresh DSG",
"t": "Illegal Operation: Illegal Goods Store (Southside, Ultimate Edition)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-chronic-vatra",
"k": "waffe",
"typ": "MP",
"n": "Chronic Vatra",
"at": "gang-29",
"t": "Illegal Operation: Industrial Weed Grow (Nord-Mariana)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-double-cross-vatra",
"k": "waffe",
"typ": "MP",
"n": "Double Cross Vatra",
"p": [
-6760,
-1528
],
"g": 0,
"t": "Fundort: Meeresboden westlich von Bobcat Key (treibende Leichen markieren die Stelle)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-kolt-associates-vatra",
"k": "waffe",
"typ": "MP",
"n": "Kolt & Associates Vatra",
"at": "gang-5",
"t": "Illegal Operation: June Warehouse (Port Gellhorn)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-spangled-vatra",
"k": "waffe",
"typ": "MP",
"n": "Spangled Vatra",
"at": "laden-jackson",
"t": "Kaufbar: Jackson Firearms, Balsero (2.520 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-furry-dw-9",
"k": "waffe",
"typ": "MP",
"n": "Furry DW-9",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-dazzler-dq-9",
"k": "waffe",
"typ": "MP",
"n": "Dazzler DQ-9",
"at": "laden-ironoak",
"t": "Kaufbar: Iron & Oak, Stockyard (3.680 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-guardia-brothers-vf5",
"k": "waffe",
"typ": "MP",
"n": "Guardia Brothers VF5",
"at": "gang-26",
"t": "Illegal Operation: Saber Shipping Facility (Balsero)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-midlife-crisis-vf5",
"k": "waffe",
"typ": "MP",
"n": "Midlife Crisis VF5",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-scrapper-vf5c",
"k": "waffe",
"typ": "MP",
"n": "Scrapper VF5C",
"at": "gang-6",
"t": "Illegal Operation: La Cascara Motel (Port Gellhorn)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-gutterball-moreland-850",
"k": "waffe",
"typ": "Schrotflinte",
"n": "Gutterball Moreland 850",
"at": "gang-4",
"t": "Illegal Operation: Kingpin Bowling (Port Gellhorn)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-watcher-pro-moreland-850",
"k": "waffe",
"typ": "Schrotflinte",
"n": "Watcher Pro Moreland 850",
"at": "laden-tactical",
"t": "Kaufbar: Tactical Outlet Guns, Belville (1.470 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-cpd-moreland-850",
"k": "waffe",
"typ": "Schrotflinte",
"n": "CPD Moreland 850",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-san4san-gorse-425",
"k": "waffe",
"typ": "Schrotflinte",
"n": "San4San Gorse 425",
"at": "gang-21",
"t": "Illegal Operation: Parlor Apartments (Rockridge)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-smuggler-gorse-425",
"k": "waffe",
"typ": "Schrotflinte",
"n": "Smuggler Gorse 425",
"p": [
-6520,
-6250
],
"g": 0,
"t": "Fundort: angespültes Schmugglerboot auf einer Insel östlich der Mile Zero Air Station",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-basher-gorse-425",
"k": "waffe",
"typ": "Schrotflinte",
"n": "Basher Gorse 425",
"at": "laden-pg-pawn",
"t": "Kaufbar: Pawn & Gun, Port Gellhorn",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-dirty-drifter",
"k": "waffe",
"typ": "Schrotflinte",
"n": "Dirty Drifter",
"t": "Welt: Kofferraum eines blauen Autos im Erdrutsch, Küstenstraße in Bonanza",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-darknite-drifter",
"k": "waffe",
"typ": "Schrotflinte",
"n": "Darknite Drifter",
"t": "Kaufbar: Waffenladen in Port Gellhorn (2.420 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-marabunta-grande-hobo",
"k": "waffe",
"typ": "Schrotflinte",
"n": "Marabunta Grande Hobo",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-backdoor-hobo",
"k": "waffe",
"typ": "Schrotflinte",
"n": "Backdoor Hobo",
"at": "laden-zenon",
"t": "Kaufbar: Zenon's Pawn Shop, La Perle (2.502 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-final-chapter-shortstraw",
"k": "waffe",
"typ": "Schrotflinte",
"n": "Final Chapter Shortstraw",
"at": "gang-15",
"t": "Illegal Operation: Hog Stars Garage (Ambrosia)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-woodhatch-longshot",
"k": "waffe",
"typ": "Schrotflinte",
"n": "Woodhatch Longshot",
"at": "laden-woodhatch",
"t": "Kaufbar: Woodhatch, Capri (2.990 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-nitepower-az1200",
"k": "waffe",
"typ": "Schrotflinte",
"n": "Nitepower AZ1200",
"at": "laden-blackeagle",
"t": "Kaufbar: Black Eagle, Balsero (4.830 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-throttler-vero",
"k": "waffe",
"typ": "Schrotflinte",
"n": "Throttler Vero",
"at": "gang-13",
"t": "Illegal Operation: Farm Fix Meth Lab (Belville)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-hostile-super400",
"k": "waffe",
"typ": "Schrotflinte",
"n": "Hostile Super400",
"at": "gang-28",
"t": "Illegal Operation: Mill Station Radar Base (Grassrivers)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-bruiser-super400",
"k": "waffe",
"typ": "Schrotflinte",
"n": "Bruiser Super400",
"at": "laden-vcpawn",
"t": "Kaufbar: Vice City Gun & Pawn, Rockridge (5.930 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-final-chapter-kvga-12",
"k": "waffe",
"typ": "Schrotflinte",
"n": "Final Chapter KVGA-12",
"at": "gang-16",
"t": "Illegal Operation: Irons Building Supply (Ambrosia)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-hellspawn-comshot-12",
"k": "waffe",
"typ": "Schrotflinte",
"n": "Hellspawn Comshot 12",
"p": [
-5300,
4800
],
"g": 0,
"t": "Fundort: Herausforderung – am Holzthron essen, Berg-Campingplatz im Westen von Nord-Kelly-County",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-unpacked-comshot-12",
"k": "waffe",
"typ": "Schrotflinte",
"n": "Unpacked Comshot 12",
"p": [
-2290,
-5290
],
"g": 0,
"t": "Fundort: hinter der Tür des oberen Badezimmers, Haus im Nordwesten von Key Lento",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-kolt-associates-556",
"k": "waffe",
"typ": "Sturmgewehr",
"n": "Kolt & Associates 556",
"at": "gang-8",
"t": "Illegal Operation: Stash House (Port Gellhorn)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-raul-s-cqb-556",
"k": "waffe",
"typ": "Sturmgewehr",
"n": "Raul's CQB 556",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-raul-s-heist-556",
"k": "waffe",
"typ": "Sturmgewehr",
"n": "Raul's Heist 556",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-star-spangled-556",
"k": "waffe",
"typ": "Sturmgewehr",
"n": "Star Spangled 556",
"at": "laden-phil",
"t": "Kaufbar: Phil's, Southside (3.050 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-kingpin-heathen",
"k": "waffe",
"typ": "Sturmgewehr",
"n": "Kingpin Heathen",
"at": "gang-35",
"t": "Illegal Operation: Vespucci Mansion (Vespucci Island)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-marabunta-grande-kz-59",
"k": "waffe",
"typ": "Sturmgewehr",
"n": "Marabunta Grande KZ-59",
"t": "Illegal Operation: Nova Auto Junkyard (Hamlet) – Tresor 7777",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-pete-s-kz-59",
"k": "waffe",
"typ": "Sturmgewehr",
"n": "Pete's KZ-59",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-san4san-kz-59",
"k": "waffe",
"typ": "Sturmgewehr",
"n": "San4San KZ-59",
"at": "gang-20",
"t": "Illegal Operation: Janjak's Garage (La Perle)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-little-cuba-hind",
"k": "waffe",
"typ": "Sturmgewehr",
"n": "Little Cuba Hind",
"at": "laden-martez",
"t": "Kaufbar: Martez Empeños, Little Cuba (3.570 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-guardia-brothers-fra",
"k": "waffe",
"typ": "Sturmgewehr",
"n": "Guardia Brothers FRA",
"at": "gang-25",
"t": "Illegal Operation: Casa Guardia (Little Cuba)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-redneck-w-22",
"k": "waffe",
"typ": "Jagdgewehr",
"n": "Redneck W-22",
"p": [
-3800,
7820
],
"g": 0,
"t": "Fundort: verlassener gelber Waggon am Flussufer, Moreau",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-mossy-mediator",
"k": "waffe",
"typ": "Jagdgewehr",
"n": "Mossy Mediator",
"at": "laden-barrage",
"t": "Kaufbar: Barrage Gun Supply, Southwind (1.890 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-copperheads-w-14",
"k": "waffe",
"typ": "Scharfschützengewehr",
"n": "Copperheads W-14",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-black-eagle-import-m306-tmr",
"k": "waffe",
"typ": "Scharfschützengewehr",
"n": "Black Eagle Import M306 TMR",
"p": [
-1845,
575
],
"g": 0,
"t": "Fundort: Black-Eagle-Lager, Balsero (nur Lucia, Personal ruft Polizei)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-mister-mangrove-laird-350",
"k": "waffe",
"typ": "Scharfschützengewehr",
"n": "Mister Mangrove Laird 350",
"t": "offen (vermutlich Kirks Strang)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-twin-s-laird-350",
"k": "waffe",
"typ": "Scharfschützengewehr",
"n": "Twin's Laird 350",
"p": [
-2620,
6700
],
"g": 0,
"t": "Fundort: unter einem Jagdstand östlich des Kalaga Reservoir",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-fincredible-laird-350",
"k": "waffe",
"typ": "Scharfschützengewehr",
"n": "Fincredible Laird 350",
"at": "laden-aplenty",
"t": "Kaufbar: Guns Aplenty!, Watson Bay (2.000 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-firebreak-sm-69",
"k": "waffe",
"typ": "Scharfschützengewehr",
"n": "Firebreak SM-69",
"at": "laden-rusty",
"t": "Kaufbar: Rusty Willis Jr. Hunting Supplies, Lummox County (3.890 $)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-iaa-sms-01",
"k": "waffe",
"typ": "Scharfschützengewehr",
"n": "IAA SMS-01",
"t": "Mission: Dach der Aichi Condominiums, Washington Beach (nach passender Mission)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-fib-sm-69",
"k": "waffe",
"typ": "Scharfschützengewehr",
"n": "FIB SM-69",
"t": "Mission: Wolkenkratzer-Dach in Vice Beach (nach passender Mission)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-internal-affairs-ff-sr",
"k": "waffe",
"typ": "Scharfschützengewehr",
"n": "Internal Affairs FF-SR",
"p": [
1760,
2300
],
"g": 0,
"t": "Fundort: Hubschrauberlandeplatz auf einem Dach an der Northside Ave, Washington Beach",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-island-poacher-ff-50",
"k": "waffe",
"typ": "Scharfschützengewehr",
"n": "Island Poacher FF-50",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-francisco-s-lmg-6",
"k": "waffe",
"typ": "Schwere Waffe",
"n": "Francisco's LMG 6",
"t": "Fundort noch nicht veröffentlicht.",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-mercenary-lmg-6",
"k": "waffe",
"typ": "Schwere Waffe",
"n": "Mercenary LMG 6",
"p": [
620,
-300
],
"g": 0,
"t": "Fundort: gelber „Scoop“-Container, nördlicher Frachtbereich Port Vice City (vom Wasser aus anfahren)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-deever-tech-glr40",
"k": "waffe",
"typ": "Schwere Waffe",
"n": "Deever Tech GLR40",
"p": [
-860,
-1160
],
"g": 0,
"t": "Fundort: Garage des Sunrise Motels, Tequesta (gleiche Stelle wie Cockroach Xtreme 556)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-brontasaurus-bat",
"k": "waffe",
"typ": "Nahkampf",
"n": "Brontasaurus Bat",
"t": "Welt: Schlagkäfige von Dino Golf, an der SR-32 in Frogswater",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-shark-knife",
"k": "waffe",
"typ": "Nahkampf",
"n": "Shark Knife",
"p": [
-3157,
8700
],
"g": 0,
"t": "Fundort: neben einem versunkenen Haikäfig in einer Unterwasserschlucht nördlich der Saint Attaway Islands",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-explorer-s-knife",
"k": "waffe",
"typ": "Nahkampf",
"n": "Explorer's Knife",
"p": [
-4282,
2400
],
"g": 0,
"t": "Fundort: unterirdischer Emerald River über das Selkie Hole (Tauchausrüstung liegt dort)",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-tallaloko-knife",
"k": "waffe",
"typ": "Nahkampf",
"n": "Tallaloko Knife",
"p": [
-1980,
7122
],
"g": 0,
"t": "Fundort: verschlossenes Obergeschoss der Evergreen-Hütte, westlich Lake Tallaloko",
"q": "e",
"src": [
"det"
]
},
{
"id": "waffe-soldier-s-combat-knife",
"k": "waffe",
"typ": "Nahkampf",
"n": "Soldier's Combat Knife",
"p": [
-6400,
-1720
],
"g": 0,
"t": "Fundort: Luke eines halb versunkenen Panzers zwischen Bobcat Bight und Bobcat Key",
"q": "e",
"src": [
"det"
]
}
]);
(function (P) { const m = Object.fromEntries(LH.ORTE.map(o => [o.id, o])); Object.entries(P).forEach(([id, ch]) => { if (m[id]) Object.assign(m[id], ch); }); })({"turnt-nipper": {"typ": "Pistole", "p": [-6484, -1350], "g": 0, "r": "Abgestürztes Paratrike im Baum, Nordspitze Bobcat Bay (Küsteninsel nordwestlich des Mariana-Festlands)", "q": "m", "src": ["ol", "sks", "det"]}, "donnie-38": {"typ": "Revolver"}, "akulus": {"typ": "Scharfschützengewehr", "src": ["ol", "det"], "r": "Pelican Valley: Hütte am Wasser im Marschland südwestlich von Hamlet"}, "conspiracist": {"typ": "MP", "q": "m", "src": ["sk", "det", "ol"], "t": "Sportskeeda und DETONATED: Waffenkammer unter der Luke eines Mobilheims in Balsero, südwestlich der Griffin Shooting Range. OutputLag nennt abweichend einen Trailerplatz im Norden von Mariana County."}, "crabshack": {"typ": "MP"}, "clunker": {"typ": "Sturmgewehr"}, "cockroach": {"typ": "Sturmgewehr"}, "coldwar": {"typ": "Sturmgewehr"}, "grx": {"typ": "Sturmgewehr"}, "heathen": {"typ": "Sturmgewehr"}, "polilla-vfg1": {"typ": "Sturmgewehr"}, "drugmule": {"typ": "Sturmgewehr"}, "polilla-kz": {"typ": "Sturmgewehr"}, "kingfisher-w22": {"typ": "Jagdgewehr"}, "hunter-laird": {"typ": "Scharfschützengewehr"}, "laird-tiger": {"typ": "Scharfschützengewehr", "p": [-3679, -3601], "g": 1, "r": "Manatee Motel (Gullet Marsh, südwestlich von Hamlet) – Kingfishers-Operation", "src": ["ol", "det"]}, "killtelligence": {"typ": "Scharfschützengewehr"}, "kl-sms1": {"typ": "Scharfschützengewehr"}, "kingfisher-op": {"p": [-4381, -4770], "g": 1, "n": "Kingfishers Fishing Shacks (Illegal Operation)", "r": "Wetman Bay, nordwestlich von Key Lento", "src": ["olg", "gb", "ol", "det"]}, "range-balsero": {"n": "Griffin Shooting Range", "r": "Nordwestliches Vice City (Balsero)", "src": ["pp", "sk"], "q": "m", "t": "6 Herausforderungen (3-Point, Hook, Loop, Maze, Compound, Villa) mit je 3 Medaillen = 18 Gold. Waiver Pass (5 $) markiert sie auf der Karte. Gold zählt für 100 % und „The Shootist“."}, "range-gellhorn": {"n": "Rodgers Ranch Shooting Range", "r": "Nordöstliches Port Gellhorn", "p": [-6200, 3950], "src": ["pp"], "t": "6 Herausforderungen (Market, Zombie, Hunting, Saloon, Cops & Robbers, Alien) mit je 4 Medaillen = 24 Gold. Waiver Pass (5 $)."}, "gang-3": {"p": [-3679, -3370], "g": 1, "geb": "Grassrivers", "waffen": ["Kingfishers Laird 350"]}, "gang-4": {"geb": "Port Gellhorn", "waffen": ["Gutterball Moreland 850"]}, "gang-5": {"p": [-6521, 3743], "g": 1, "geb": "Port Gellhorn", "waffen": ["Kolt & Associates Vatra"]}, "gang-6": {"geb": "Port Gellhorn", "waffen": ["Scrapper VF5C"]}, "gang-8": {"p": [-6451, 3865], "g": 1, "geb": "Port Gellhorn", "waffen": ["Kolt & Associates 556"]}, "gang-10": {"p": [-1630, 7158], "g": 1, "geb": "Millport"}, "gang-13": {"p": [-1557, 2880], "g": 1, "geb": "Belville", "waffen": ["Throttler Vero"]}, "gang-14": {"p": [-1877, 4586], "g": 1, "geb": "Lake Leonida", "waffen": ["Ride Free H&L .38"]}, "gang-15": {"p": [-2684, 3890], "g": 1, "geb": "Ambrosia", "waffen": ["Final Chapter Shortstraw"]}, "gang-16": {"p": [-2939, 3996], "g": 1, "geb": "Ambrosia", "waffen": ["Final Chapter KVGA-12"]}, "gang-17": {"p": [-581, 1896], "g": 1, "geb": "Vice City", "waffen": ["San4San K17"]}, "gang-20": {"p": [-965, 1323], "g": 1, "geb": "Vice City", "waffen": ["San4San KZ-59"]}, "gang-21": {"p": [-1008, 826], "g": 1, "geb": "Vice City", "waffen": ["San4San Gorse 425"]}, "gang-23": {"p": [-1902, -2077], "g": 1, "geb": "Vice City", "waffen": ["PTT Youngin$ K17"]}, "gang-24": {"p": [-1062, -64], "g": 1, "geb": "Vice City", "waffen": ["The Guardian ES18"]}, "gang-25": {"p": [-1086, 294], "g": 1, "geb": "Vice City", "waffen": ["Guardia Brothers FRA"]}, "gang-26": {"p": [-1957, 770], "g": 1, "geb": "Vice City", "waffen": ["Guardia Brothers VF5"]}, "gang-28": {"p": [-3129, -4304], "g": 1, "geb": "Grassrivers", "waffen": ["Hostile Super400"]}, "gang-29": {"p": [-5250, -1684], "g": 1, "geb": "Nord-Mariana", "waffen": ["Chronic Vatra"]}, "gang-34": {"p": [1797, 792], "g": 1, "geb": "Vice Beach", "waffen": ["Zodiac Nipper .38"]}, "gang-33": {"waffen": ["Quarter Mile ES9"]}, "gang-2": {"waffen": ["Kingfishers Akulus"]}, "gang-18": {"waffen": ["Chromium W-10"]}, "gang-7": {"waffen": ["Clunker 556"]}, "gang-31": {"waffen": ["GRX 556"]}, "gang-35": {"waffen": ["Kingpin Heathen"]}, "gang-12": {"waffen": ["La Polilla Negra VF-G1"]}, "gang-11": {"waffen": ["La Polilla Negra KZ-59"]}, "gang-1": {"waffen": ["Kingfishers W-22"]}, "medi-2": {"r": "Kleine Sandbank vor der Westküste", "q": "m", "src": ["gm", "ppm"], "t": "Plätze 2–9 zählen doppelt (einmal Jason, einmal Lucia) – zusammen mit Balkon und Gipfel 18 Meditationen. Lila Symbol auf der Karte, ab „Coffee Break“ (Kapitel 2)."}, "medi-3": {"r": "Holzsteg bei einem Aussichtsturm mitten im Sumpf", "q": "m", "src": ["gm", "ppm"], "t": "Plätze 2–9 zählen doppelt (einmal Jason, einmal Lucia) – zusammen mit Balkon und Gipfel 18 Meditationen. Lila Symbol auf der Karte, ab „Coffee Break“ (Kapitel 2)."}, "medi-4": {"r": "Camp Moonflower, Ufer des Emerald River", "q": "m", "src": ["gm", "ppm"], "t": "Plätze 2–9 zählen doppelt (einmal Jason, einmal Lucia) – zusammen mit Balkon und Gipfel 18 Meditationen. Lila Symbol auf der Karte, ab „Coffee Break“ (Kapitel 2).", "p": [-4282, 2420], "g": 0}, "medi-5": {"r": "Wo die Gleise die Landstraße kreuzen", "q": "m", "src": ["gm", "ppm"], "t": "Plätze 2–9 zählen doppelt (einmal Jason, einmal Lucia) – zusammen mit Balkon und Gipfel 18 Meditationen. Lila Symbol auf der Karte, ab „Coffee Break“ (Kapitel 2)."}, "medi-6": {"r": "South Moreau: Wasserrad an einer verfallenen Papiermühle am Fluss", "q": "m", "src": ["gm", "ppm"], "t": "Plätze 2–9 zählen doppelt (einmal Jason, einmal Lucia) – zusammen mit Balkon und Gipfel 18 Meditationen. Lila Symbol auf der Karte, ab „Coffee Break“ (Kapitel 2).", "p": [-3880, 7650], "g": 0}, "medi-7": {"r": "Turm mit Blick auf eine Mine", "q": "m", "src": ["gm", "ppm"], "t": "Plätze 2–9 zählen doppelt (einmal Jason, einmal Lucia) – zusammen mit Balkon und Gipfel 18 Meditationen. Lila Symbol auf der Karte, ab „Coffee Break“ (Kapitel 2)."}, "medi-8": {"r": "Nordwestlich von Tallaloko, Blick auf einen nach Osten fließenden Fluss", "q": "m", "src": ["gm", "ppm"], "t": "Plätze 2–9 zählen doppelt (einmal Jason, einmal Lucia) – zusammen mit Balkon und Gipfel 18 Meditationen. Lila Symbol auf der Karte, ab „Coffee Break“ (Kapitel 2)."}, "medi-9": {"r": "Felsvorsprung am Strand östlich von Waning Sands", "q": "m", "src": ["gm", "ppm"], "t": "Plätze 2–9 zählen doppelt (einmal Jason, einmal Lucia) – zusammen mit Balkon und Gipfel 18 Meditationen. Lila Symbol auf der Karte, ab „Coffee Break“ (Kapitel 2).", "p": [700, 4050], "g": 0}, "medi-10": {"r": "Steinkreis auf dem Gipfel – erscheint erst, wenn alle anderen erledigt sind; beide Figuren nötig", "q": "m", "src": ["gm", "ppm"], "t": "Plätze 2–9 zählen doppelt (einmal Jason, einmal Lucia) – zusammen mit Balkon und Gipfel 18 Meditationen. Lila Symbol auf der Karte, ab „Coffee Break“ (Kapitel 2).", "p": [-3410, 6400], "g": 0}, "laden-bigshots": {"p": [-2629, -3218], "g": 1, "r": "Hamlet (laut DETONATED)", "src": ["pp", "det"]}, "laden-blackeagle": {"p": [-1614, 588], "g": 1, "r": "Balsero (laut DETONATED)", "src": ["pp", "det"]}, "laden-quickscope": {"p": [-609, -235], "g": 1, "r": "Downtown (laut DETONATED)", "src": ["pp", "det"]}, "laden-ironoak": {"p": [-291, 1781], "g": 1, "r": "Stockyard (laut DETONATED)", "src": ["pp", "det"]}, "laden-vcfire": {"p": [-1541, -594], "g": 1, "r": "Salton (laut DETONATED)", "src": ["pp", "det"]}, "laden-jackson": {"p": [-1840, 716], "g": 1, "r": "Balsero (laut DETONATED)", "src": ["pp", "det"]}, "laden-tactical": {"p": [-1461, 2775], "g": 1, "r": "Belville (laut DETONATED)", "src": ["pp", "det"]}, "laden-woodhatch": {"p": [-6838, 364], "g": 1, "r": "Capri (laut DETONATED)", "src": ["pp", "det"]}, "laden-vcpawn": {"p": [-1235, 862], "g": 1, "r": "Rockridge (laut DETONATED)", "src": ["pp", "det"]}, "laden-martez": {"p": [-1225, 245], "g": 1, "r": "Little Cuba (laut DETONATED)", "src": ["pp", "det"]}, "laden-barrage": {"p": [-6191, -6311], "g": 1, "r": "Southwind (laut DETONATED)", "src": ["pp", "det"]}, "laden-aplenty": {"p": [-4996, -3363], "g": 1, "r": "Watson Bay (laut DETONATED)", "src": ["pp", "det"]}, "laden-biff": {"p": [-2795, 3812], "g": 1, "r": "Ambrosia (laut DETONATED)", "src": ["pp", "det"]}});
