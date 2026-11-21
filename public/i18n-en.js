/* =====================================================================
   LEONIDA HELPER – English dictionary for interface and generated texts.
   I18N_ADD: exact strings (trimmed). I18N_R: patterns (whole string).
   ===================================================================== */
"use strict";
(function () {
const A = I18N_ADD, R = I18N_R;
const nr = s => s.replace(/(\d)\.(\d{3})/g, "$1,$2").replace(/(\d),(\d)(?= Tsd)/g, "$1.$2");
const tsd = s => nr(s).replace(/(\d[\d,.–-]*) Tsd\. \$/g, (m, z) => "$" + z.replace(/–/g, "–$") + "k");
const ca = s => s.replace(/\bca\. /g, "about ");

/* ------------------------------------------------ Untertypen, Gebiete */
A({
  "Stadt oder Gebiet": "City or area", "Exportierter Spielstand": "Exported save",
  "Tankstelle": "Gas station", "Supermarkt": "Supermarket", "Fast Food": "Fast food", "Schnapsladen": "Liquor store", "Kleidung": "Clothing",
  "Friseur": "Barber", "Tattoo": "Tattoo", "Tuning": "Tuning", "Garage": "Garage", "Bahnhof": "Train station", "Bar & Club": "Bar & club",
  "Hehler": "Fence", "Bank": "Bank", "Banktresor": "Bank vault", "Payday Loan": "Payday Loan", "Juwelier": "Jeweler", "Pfandhaus": "Pawn shop",
  "Rennen": "Race", "Drohnenrennen": "Drone race", "Kitty-Litter-Labor": "Kitty Litter lab", "Schießstand": "Shooting range", "Trophäen-Ort": "Trophy spot",
  "Wrack": "Wreck", "MP": "SMG", "Scharfschützengewehr": "Sniper rifle", "Jagdgewehr": "Hunting rifle", "Pistole": "Pistol", "Sturmgewehr": "Assault rifle",
  "Revolver": "Revolver", "Bowling": "Bowling", "Sonstiges": "Other", "Schrotflinte": "Shotgun", "Schwere Waffe": "Heavy weapon", "Nahkampf": "Melee",
  "Story & Basis": "Story & base", "Ammu-Nation": "Ammu-Nation", "Geldquelle": "Money source", "Sammelobjekt": "Collectible", "Code": "Code",
  "Easter Egg": "Easter egg", "Meditation": "Meditation", "Aktivität": "Activity", "Eigener Punkt": "My marker", "Sonstige Waffe": "Other weapon",
  "Andere": "Other", "Verlorene Drogen": "Lost drugs", "Geldversteck": "Cash stash", "WAiNK-Wahrzeichen": "WAiNK landmark", "WAiNK-Kuriosität": "WAiNK curiosity", "WAiNK-Skulptur": "WAiNK sculpture", "No-Flusher-Tag": "No Flusher tag", "Sammelkarte": "Collectible card", "Magazin & Buch": "Magazine & book", "Playlist-Poster": "Playlist poster", "Billard": "Pool", "Golf": "Golf", "Basketballkorb": "Basketball hoop", "Arcade": "Arcade", "Jagd": "Hunting", "Stuntsprung": "Stunt jump", "Seltenes Auto": "Rare car", "Strangers & Freaks": "Strangers & Freaks", "Randys Wunschliste": "Randy's Wish List", "Wymans Klassiker": "Wyman's classics", "Zufallsereignis": "Random event", "Nebenauftrag": "Side job", "Beziehung": "Relationship", "Illegal Operation": "Illegal operation", "Kokain-Flamingo": "Cocaine flamingo", "Buchtausch": "Book swap", "Luxusuhr": "Luxury watch", "Okkultes Ritual": "Occult ritual", "Nebenmission": "Side mission", "Mysterium": "Mystery", "Comic": "Comic", "Billardtisch": "Pool table", "Schießstand-Challenge": "Shooting range challenge", "Schießstand-Info": "Shooting range info", "Race Challenge": "Race challenge", "Angel-Herausforderung": "Fishing challenge", "Angelplatz": "Fishing spot", "Videospiel": "Video game", "Workout": "Workout", "Herausforderung": "Challenge", "Geldversteck": "Cash stash", "Leonida Keys (Süd)": "Leonida Keys (South)", "Nord-Mariana": "North Mariana", "VCIA (Flughafen)": "VCIA (airport)"
});

/* ------------------------------------------------ Generierte Ortstexte (gebiete.js) */
A({
  "überfallbar (Stick-Up)": "robbable (stick-up)", "überfallbar, 100–3.000 $": "robbable, $100–3,000",
  "Casual & Street": "Casual & street", "Casual & Street, Ultimate Edition": "Casual & street, Ultimate Edition", "Casual & Street (2 Läden)": "Casual & street (2 stores)",
  "Sportmode": "Sportswear", "Sportmode (Sahara Arena)": "Sportswear (Sahara Arena)", "Sportmode (4 Läden)": "Sportswear (4 stores)", "Sportmode (2 Läden)": "Sportswear (2 stores)",
  "Formell": "Formal", "Formell (2 Läden)": "Formal (2 stores)", "Souvenir & Bademode": "Souvenirs & swimwear", "Second Hand": "Second hand", "Unisex": "Unisex",
  "Beauty-Salon": "Beauty salon", "Barbier": "Barber", "Beauty-Salon, Ultimate Edition": "Beauty salon, Ultimate Edition", "Illustrativ": "Illustrative",
  "New School (laut PowerPyx-Laborliste in Crosstown)": "New School (in Crosstown per PowerPyx's lab list)", "New School, Ultimate Edition": "New School, Ultimate Edition",
  "Geometrisch & Blackwork": "Geometric & blackwork", "Schriftzüge": "Lettering", "Retro-Teile": "Retro parts", "Muscle-Cars": "Muscle cars", "Sportmotorräder": "Sport bikes",
  "Luxusautos": "Luxury cars", "Donks, Ultimate Edition": "Donks, Ultimate Edition", "Folierungen und Lackierungen": "Wraps and paint jobs", "Rennwagen": "Race cars",
  "Dirtbikes": "Dirt bikes", "Offroad": "Off-road", "Offroad, handgemalte Lackierungen, Ultimate Edition": "Off-road, hand-painted liveries, Ultimate Edition",
  "Chopper und klassische US-Motorräder": "Choppers and classic American bikes",
  "Laut PowerPyx 25 Bahnhöfe insgesamt, die meisten im Stadtgebiet von Vice City.": "According to PowerPyx there are 25 stations in total, most of them in Vice City.",
  "Club, Sammelkarten-Set „NINE1NINE Dancers“": "Club, collectible card set “NINE1NINE Dancers”", "Club, Aufnahmekabinen im 2. Stock – Sammelobjekte": "Club, recording booths on the 2nd floor – collectibles",
  "Stripclub – Sammelkarten-Set „Delights Dancers“; ohne Partner schadet es der Beziehung": "Strip club – collectible card set “Delights Dancers”; going without your partner hurts the relationship",
  "Hotel": "Hotel", "Bar": "Bar",
  "Ab „Slam Dunk“ (Kapitel 2). Drogen: niedrig, Schmuck: niedrig, Scheine: sehr niedrig. Nach der Story wieder da.": "From “Slam Dunk” (chapter 2). Narcotics: low, jewelry: low, bills: very low. Returns after the story.",
  "Ab Kapitel 3. Bester Preis für Drogen (hoch), Schmuck und Scheine mittel.": "From chapter 3. Best price for narcotics (high), jewelry and bills medium.",
  "Ab Kapitel 3 über seine Jobs. Bester Preis für Schmuck und markierte Scheine (hoch), Drogen mittel.": "From chapter 3 via his jobs. Best price for jewelry and marked bills (high), narcotics medium.",
  "Nimmt bestimmte Luxusautos mit Advanced Tracker. Ab „Clonin' Keys, Makin' GS“ (Kapitel 3).": "Takes specific luxury cars with an advanced tracker. From “Clonin' Keys, Makin' GS” (chapter 3).",
  "Safehouse-/Garagenort laut Leonida Insights.": "Safehouse/garage location according to Leonida Insights.",
  "Straßenrennen, freigeschaltet über „Dealer's Choice“. Startgeld und Mietwagen kosten.": "Street races, unlocked through “Dealer's Choice”. Entry fee and rental car cost money.",
  "Straßenrennen": "Street races", "Teil der 8-Rennen-Serie Animal Crackers": "Part of the 8-race Animal Crackers series",
  "Demolition-Rennen nördlich von Ambrosia": "Demolition races north of Ambrosia", "Teil der 8-Rennen-Serie Animal Crackers. Genaue Lage offen.": "Part of the 8-race Animal Crackers series. Exact location open.",
  "Fundort noch nicht veröffentlicht.": "Location not yet published.", "Ultimate Edition": "Ultimate Edition",
  "offen (vermutlich Ultimate Edition, Lucia)": "open (probably Ultimate Edition, Lucia)", "offen (vermutlich Kirks Strang)": "open (probably Kirk's strand)",
  "Plätze 2–9 zählen doppelt (einmal Jason, einmal Lucia) – zusammen mit Balkon und Gipfel 18 Meditationen. Lila Symbol auf der Karte, ab „Coffee Break“ (Kapitel 2).": "Spots 2–9 count twice (once as Jason, once as Lucia) – with the balcony and the summit that's 18 meditations. Purple icon on the map, from “Coffee Break” (chapter 2).",
  /* Waffen-Fundorte */
  "Fundort: Bodenluke in einem Schiffswrack, SO Permit Keys bei der Mile Zero Air Station („Spionageboot“-Rätsel)": "Found: floor hatch in a shipwreck, SE Permit Keys by Mile Zero Air Station (“spy boat” puzzle)",
  "Fundort: Big Day Motel, Zimmer 115, an der US-35 nördlich von Ambrosia": "Found: Big Day Motel, room 115, on US-35 north of Ambrosia",
  "Fundort: neben einem versunkenen Auto, SW-Ufer Kalaga Reservoir": "Found: next to a sunken car, SW shore of Kalaga Reservoir",
  "Fundort: Boden eines Mobilheims, Südufer Moreau River (Ost-Lummox)": "Found: floor of a mobile home, south bank of the Moreau River (east Lummox)",
  "Fundort: Couch im selben Mobilheim am Moreau River": "Found: couch in the same mobile home on the Moreau River",
  "Fundort: Kamin der Outlaw's Cabin, Moreau": "Found: fireplace of Outlaw's Cabin, Moreau",
  "Fundort: Bürotresor im Black-Eagle-Lager, Balsero (Code steht am Büro-PC)": "Found: office safe in the Black Eagle warehouse, Balsero (code on the office PC)",
  "Fundort: gelber „Scoop“-Container, Frachtbereich Port Vice City (Stapel hochklettern, Security meiden)": "Found: yellow “Scoop” container, Port Vice City cargo area (climb the stacks, avoid security)",
  "Welt: Kofferraum in einer alten Scheune an einer Sackgasse, Bonanza": "World: car trunk in an old barn at a dead end, Bonanza",
  "Fundort: Couch im Baum am Tanglewood Ln, Port Gellhorn – herunterschießen, draufsetzen": "Found: couch in a tree on Tanglewood Ln, Port Gellhorn – shoot it down, sit on it",
  "Fundort: Tatort-Zimmer, 2. Stock Sunlite Motel, Ocean Beach": "Found: crime-scene room, 2nd floor of the Sunlite Motel, Ocean Beach",
  "Fundort: Meeresboden westlich von Bobcat Key (treibende Leichen markieren die Stelle)": "Found: seabed west of Bobcat Key (floating bodies mark the spot)",
  "Fundort: angespültes Schmugglerboot auf einer Insel östlich der Mile Zero Air Station": "Found: beached smuggler boat on an island east of Mile Zero Air Station",
  "Welt: Kofferraum eines blauen Autos im Erdrutsch, Küstenstraße in Bonanza": "World: trunk of a blue car in a landslide, coastal road in Bonanza",
  "Kaufbar: Waffenladen in Port Gellhorn (2.420 $)": "Buyable: gun store in Port Gellhorn ($2,420)",
  "Fundort: Herausforderung – am Holzthron essen, Berg-Campingplatz im Westen von Nord-Kelly-County": "Found: challenge – eat at the wooden throne, mountain campsite in western North Kelly County",
  "Fundort: hinter der Tür des oberen Badezimmers, Haus im Nordwesten von Key Lento": "Found: behind the upstairs bathroom door, house in northwest Key Lento",
  "Fundort: verlassener gelber Waggon am Flussufer, Moreau": "Found: abandoned yellow railcar on the riverbank, Moreau",
  "Fundort: Black-Eagle-Lager, Balsero (nur Lucia, Personal ruft Polizei)": "Found: Black Eagle warehouse, Balsero (Lucia only, staff call the police)",
  "Fundort: unter einem Jagdstand östlich des Kalaga Reservoir": "Found: under a hunting stand east of Kalaga Reservoir",
  "Mission: Dach der Aichi Condominiums, Washington Beach (nach passender Mission)": "Mission: roof of the Aichi Condominiums, Washington Beach (after the matching mission)",
  "Mission: Wolkenkratzer-Dach in Vice Beach (nach passender Mission)": "Mission: skyscraper roof in Vice Beach (after the matching mission)",
  "Fundort: Hubschrauberlandeplatz auf einem Dach an der Northside Ave, Washington Beach": "Found: rooftop helipad on Northside Ave, Washington Beach",
  "Fundort: gelber „Scoop“-Container, nördlicher Frachtbereich Port Vice City (vom Wasser aus anfahren)": "Found: yellow “Scoop” container, northern cargo area of Port Vice City (approach from the water)",
  "Fundort: Garage des Sunrise Motels, Tequesta (gleiche Stelle wie Cockroach Xtreme 556)": "Found: Sunrise Motel garage, Tequesta (same spot as the Cockroach Xtreme 556)",
  "Welt: Schlagkäfige von Dino Golf, an der SR-32 in Frogswater": "World: Dino Golf batting cages, on SR-32 in Frogswater",
  "Fundort: neben einem versunkenen Haikäfig in einer Unterwasserschlucht nördlich der Saint Attaway Islands": "Found: next to a sunken shark cage in an underwater canyon north of the Saint Attaway Islands",
  "Fundort: unterirdischer Emerald River über das Selkie Hole (Tauchausrüstung liegt dort)": "Found: underground Emerald River via the Selkie Hole (scuba gear is there)",
  "Fundort: verschlossenes Obergeschoss der Evergreen-Hütte, westlich Lake Tallaloko": "Found: locked upper floor of the Evergreen cabin, west of Lake Tallaloko",
  "Fundort: Luke eines halb versunkenen Panzers zwischen Bobcat Bight und Bobcat Key": "Found: hatch of a half-sunken tank between Bobcat Bight and Bobcat Key",
  "Story-Labor: Trailer im südlichen Mittelblock, pinker Rauch, gelbe Rohre an den Fenstern. 2.000 $. Tyrones Strang (Kapitel 3), Trophäe „Spin On This!“.": "Story lab: trailer in the southern middle block, pink smoke, yellow pipes at the windows. $2,000. Tyrone's strand (chapter 3), trophy “Spin On This!”.",
});
R(/^Kaufbar: (.+?)(?: \(([\d.]+) \$\))?$/, (m, a, b) => "Buyable: " + a.replace("Lummox County", "Lummox County") + (b ? " ($" + nr(b) + ")" : ""));
R(/^Illegal Operation: (.+)$/, (m, a) => "Illegal operation: " + a.replace("Nord-Mariana", "North Mariana").replace("Südufer", "south shore").replace("NE-Ufer", "NE shore").replace(" – Tresor ", " – safe ").replace(/\(nördlich /, "(north of "));
R(/^Ultimate Edition, bei (.+) \(([\d.]+) \$\)$/, (m, a, b) => "Ultimate Edition, at " + a + " ($" + nr(b) + ")");
R(/^([\d.]+) \$, 1 Stellplatz\. Alle kaufbaren = Trophäe „Little Boxes“\.$/, (m, a) => "$" + nr(a) + ", 1 space. Buying all = trophy “Little Boxes”.");
R(/^Story: nach „(.+)“ \(Kap\. (\d)\), (\d) Stellpl(?:atz|ätze)\. Alle kaufbaren = Trophäe „Little Boxes“\.$/, (m, a, k, n) => `Story: after “${a}” (ch. ${k}), ${n} space${n > 1 ? "s" : ""}. Buying all = trophy “Little Boxes”.`);
R(/^Kleine Bank: (.+? Tsd\. \$)\.(?: Kassenschublade und Safe ausräumen\.)?$/, (m, a) => "Small bank: " + tsd(a) + (m.includes("Kasse") ? ". Empty the cash drawer and the safe." : "."));
R(/^Großbank mit Tresor: (.+? Tsd\. \$)\. .*$/, (m, a) => "Large bank with vault: " + tsd(a) + ". The vault is only open while a security van delivers – follow the van. Cash drawer + vault + safe. Instant 4 stars. From the end of chapter 4.");
R(/^(.+? Tsd\. \$)\. Alle 7 für 100 %\. Tipps über Yasmani\.$/, (m, a) => tsd(a) + ". All 7 for 100%. Tips via Yasmani.");
R(/^Smash 'n' Grab: (.+? Tsd\. \$)(?: · Tresor (\d+))?(?: · Mission „(.+)“)?\. 34 von 35 für 100 %\.$/, (m, a, t, mi) => "Smash 'n' grab: " + tsd(a) + (t ? " · safe " + t : "") + (mi ? " · mission “" + mi + "”" : "") + ". 34 of 35 for 100%.");
R(/^Smash 'n' Grab in Key Lento: (.+? Tsd\. \$)\.$/, (m, a) => "Smash 'n' grab in Key Lento: " + tsd(a) + ".");
R(/^3 Strecken mit Bestzeit: (.+)\. Bei den ersten beiden.*$/, (m, a) => "3 courses with target time: " + a + ". Beat the target on the first two to open the third. All 42 for 100%, every location = trophy “Top Fun”.");
const TY = { "Garage am Nordrand des Suchgebiets.": "Garage on the north edge of the search area.", "Garage im Gebäude mitten im Suchgebiet.": "Garage in the building in the middle of the search area.",
  "Zweitsüdlichster Trailer.": "Second-southernmost trailer.", "Garage in der Mitte, Zugang über die Gasse im Westen.": "Garage in the middle, access via the alley to the west.",
  "Wohnung 2. Stock im Nordteil.": "2nd-floor apartment in the north part.", "Garage hinter dem Gebäude von Cross My Heart Tattoos.": "Garage behind the Cross My Heart Tattoos building.",
  "Garage an der Ostseite des mittleren Gebäudes.": "Garage on the east side of the middle building.", "Garage im Nordwest-Gebäude an der Schnellstraße.": "Garage in the northwest building by the expressway.",
  "Langes Gebäude in der Mitte.": "Long building in the middle.", "Verschlossene Wohnung, Zugang über offenes Fenster an der Ostseite.": "Locked apartment, access via the open window on the east side.",
  "Obergeschoss des östlichen C-förmigen Motels.": "Upper floor of the eastern C-shaped motel.", "Trailer in der Mitte, durch das Ostfenster rein.": "Trailer in the middle, enter through the east window.",
  "ca. 3 Gegner.": "About 3 enemies.", "Tastenfeld 1999 (steht auf einer Plakatwand).": "Keypad 1999 (written on a billboard).", "Snap Gun oder Tür eintreten.": "Snap Gun or kick the door in.",
  "Brandgefahr.": "Fire hazard.", "Snap Gun nötig.": "Snap Gun required." };
R(/^(.*) Tyrones Strang \(Kapitel 3\), Trophäe „Spin On This!“\.$/, (m, a) => a.replace("Wohnung 2. Stock im Nordteil.", "2nd-floor apartment in the north part.").split(/(?<=\.) (?=[A-ZÄÖÜ\d]|ca\.)/).map(x => TY[x] || x.replace(/^([\d.]+) \$\.$/, (q, z) => "$" + nr(z) + ".")).join(" ") + " Tyrone's strand (chapter 3), trophy “Spin On This!”.");
R(/^Bahnhof (.+)$/, "$1 station");
R(/^(.+) · Tresor (\d+)$/, "$1 · safe $2");
R(/^Top-Fun-Drohnenrennen (\d+) – (.+)$/, "Top Fun drone race $1 – $2");
R(/^Kitty-Litter-Labor (\d+) – (.+)$/, "Kitty Litter lab $1 – $2");
R(/^(.+) \((\d) Rennen\)$/, "$1 ($2 races)");
R(/^(.+) \(laut DETONATED\)$/, "$1 (per DETONATED)");

/* ------------------------------------------------ Oberfläche */
A({
  "Karte": "Map", "Fundorte": "Locations", "Geld": "Money", "Fahndung": "Wanted", "Autos & Lager": "Cars & storage", "Missionen": "Missions", "100 %": "100%",
  "Codes": "Codes", "Cheats": "Cheats", "Trophäen": "Trophies", "Tipps": "Tips", "Jagd & Angeln": "Hunting & fishing", "Spielstand": "Save", "Mehr": "More",
  "Ort, Waffe, Code suchen…": "Search place, weapon, code…", "Eigenen Punkt setzen": "Add your own marker", "Filter": "Filter",
  "Tippe auf die Karte, um den Punkt zu setzen": "Tap the map to place the marker",
  "Kopiert": "Copied", "Kopieren nicht möglich – Text markieren und kopieren": "Can't copy – select the text and copy it",
  "Mehrere Quellen": "Several sources", "Eine Quelle": "One source", "Quellen uneins": "Sources disagree",
  "Lage genau (gtadb)": "Exact location (gtadb)", "Lage: Gebiet": "Location: area", "Lage ungefähr": "Approximate location",
  "Verpassbar": "Missable", "nicht auf der Karte": "not on the map", "Quellen:": "Sources:", "Abbrechen": "Cancel", "OK": "OK",
  "Auf der Karte": "On the map", "Ort": "Place", "Karte": "Map", "Lage offen": "Location open", "optional": "optional", "erledigt": "done",
  /* Missionen */
  "Ich bin in": "I'm in", "Missionen späterer Kapitel bleiben unscharf (Spoiler-Schutz). Antippen deckt einzeln auf.": "Missions of later chapters stay blurred (spoiler protection). Tap to reveal one.",
  "Story beendet": "Story finished", "Nächste Pflichtmission": "Next required mission", "Anzeigen": "Show", "Mission suchen…": "Search missions…",
  "Nur mit Tricks": "Only with tricks", "Nur offene": "Only open", "Alle aufklappen": "Expand all", "Kartenmarker": "Map marker", "Figur": "Character",
  "Start": "Start", "Belohnung": "Reward", "Art": "Type", "Tricks": "Tricks", "Tipp": "Tip",
  "Keine besonderen Tricks bekannt – einfach der Story folgen.": "No special tricks known – just follow the story.",
  "Kap.": "Ch.", "Person": "Person",
  /* Geld */
  "Geld verdienen": "Making money", "Einfachste Methode je Kapitel": "Easiest method per chapter", "Regeln": "Rules", "Methoden": "Methods",
  "Einfachste Methode je Kapitel, Regeln zum Sichern, alle Methoden und ein Ziel-Rechner. Beträge sind Richtwerte aus Guides.": "Easiest method per chapter, rules for keeping your money, all methods and a goal calculator. Amounts are guide estimates.",
  "Dein Kapitel stellst du unter Missionen ein.": "Set your chapter on the Missions page.", "Methode": "Method", "Risiko": "Risk", "Ziel-Rechner": "Goal calculator",
  "Kontostand $": "Balance $", "Ziel $": "Goal $", "Aktuelles Kapitel": "Current chapter", "Nach der Story": "After the story", "z. B. 12000": "e.g. 12000", "z. B. 120000": "e.g. 120000",
  "Rechnet mit dem Mittelwert pro Durchgang. In Kapitel 1 lohnt Farmen nicht – das Bargeld ist am Kapitelende weg.": "Uses the average per run. Farming in chapter 1 isn't worth it – the cash is gone at the end of the chapter.",
  "Ziel schon erreicht.": "Goal already reached.",
  /* Mehr */
  "Sterne, Heat, Hinweise löschen": "Stars, heat, clearing icons", "Verkaufen, Garagen, Werkzeuge": "Selling, garages, tools", "Checkliste mit Zählern": "Checklist with counters",
  "Tresore, Türen, Passwörter": "Safes, doors, passwords", "Alle 61 mit Freischaltung": "All 61 with unlocks", "55 zum Abhaken": "55 to tick off",
  "Tipps & Glitches": "Tips & glitches", "Verpassbares, Kniffe": "Missables, tricks", "Tiere, Regeln": "Animals, rules", "Speichern, Export, Quellen": "Saving, export, sources",
  /* Spielstand */
  "Spielstand & Einstellungen": "Save & settings", "Gespeichert nur in diesem Browser. Für ein anderes Gerät: exportieren und dort importieren.": "Stored in this browser only. For another device: export here and import there.",
  "Spielstände": "Saves", "Umbenennen": "Rename", "Löschen": "Delete", "Neuer Spielstand": "New save", "Haken im aktiven Spielstand zurücksetzen": "Reset checkmarks in the active save",
  "Export / Import (aktiver Spielstand)": "Export / import (active save)", "Kopieren": "Copy", "Exportierten Text hier einfügen…": "Paste exported text here…",
  "Als neuen Spielstand importieren": "Import as new save", "Datei wählen": "Choose file", "Anzeige": "Display", "Story-Spoiler zeigen (Trophäen)": "Show story spoilers (trophies)",
  "Gebietsnamen auf der Karte": "Area names on the map", "gtadb-Orte auf der Karte": "gtadb places on the map", "Über die Daten": "About the data",
  "Inhalte pflegen: alles steht in": "Editing content: everything lives in", "(Anleitung oben in der Datei).": "(instructions at the top of the file).",
  "Fan-Projekt, nicht von Rockstar Games. GTA VI ist eine Marke von Take-Two Interactive.": "Fan project, not by Rockstar Games. GTA VI is a trademark of Take-Two Interactive.",
  "Quellen": "Sources", "Name, z. B. Cheat-Save": "Name, e.g. cheat save", "Anlegen": "Create", "Speichern": "Save", "Spielstand löschen?": "Delete save?",
  "Haken zurücksetzen?": "Reset checkmarks?", "Zurücksetzen": "Reset", "Spielstand gewechselt": "Save switched", "Importiert und aktiviert": "Imported and activated",
  "Import fehlgeschlagen: Text ist kein gültiger Export": "Import failed: the text is not a valid export", "Hauptspielstand": "Main save", "aktiv": "active",
  "Karte und Orte:": "Map and places:", "für diese App in Pakete umgepackt. Karten-Bibliothek: Leaflet (BSD-2).": "repacked for this app. Map library: Leaflet (BSD-2).",
  "Kacheln und Ortsdaten unter": "Tiles and place data under"
});
R(/^(\d+) von (\d+) erledigt · (\d+) mit Tricks$/, "$1 of $2 done · $3 with tricks");
R(/^(\d+) von (\d+) erledigt$/, "$1 of $2 done");
R(/^Kapitel (\d)$/, "Chapter $1");
R(/^nur (Jason|Lucia)$/, "$1 only");
R(/^Es fehlen ([\d.,]+) \$$/, (m, a) => "$" + a + " to go");
R(/^ca\. ([\d.,]+) ×$/, "about $1 ×");
R(/^Pay 'n' Spray \((\d+)\)$/, "Pay 'n' Spray ($1)");
R(/^(\d+) Haken · (\d+) Zähler · (\d+) eigene Punkte$/, "$1 checkmarks · $2 counters · $3 own markers");


/* ------------------------------------------------ Nachtrag aus dem Durchlauf */
A({
  "), für diese App in Pakete umgepackt. Karten-Bibliothek: Leaflet (BSD-2).": "), repacked for this app. Map library: Leaflet (BSD-2).",
  "100 % Checkliste": "100% checklist", "Cheat suchen…": "Search cheats…", "Name, Typ, Waffe suchen…": "Search name, type, weapon…", "Ort oder Code suchen…": "Search place or code…",
  "Schließen": "Close", "mehr": "more", "weniger": "less", "Achtung:": "Warning:", "Alle": "All", "Alle Städte & Gebiete": "All cities & areas", "Alle Typen": "All types",
  "Alle an": "All on", "Alle aus": "All off", "Als erledigt markieren": "Mark as done", "Angeln": "Fishing", "Angeln ist Freizeit, Geld bringt nur die Jagd.": "Fishing is just for fun – only hunting makes money.",
  "Auf map.gtadb.org": "On map.gtadb.org", "Autos verkaufen": "Selling cars", "Bekannte Bugs & Lösungen": "Known bugs & fixes",
  "Danach sind alle Hinweise weg – erst dann zurück an den Tatort.": "After that all icons are gone – only then go back to the crime scene.",
  "Das tust du jetzt": "What to do now", "Details leicht uneins": "Details differ slightly", "Eingabe:": "Input:", "Empfohlene Waffe": "Recommended weapon", "Erledigt": "Done",
  "Ertrag": "Yield", "Freischalten": "Unlock", "Ganz Leonida": "All of Leonida", "Garagen, Safehouses & Werkzeuge": "Garages, safehouses & tools", "Gebietsnamen": "Area names",
  "Gut zu wissen": "Good to know", "Ich werde gesucht": "I'm wanted", "Jagd": "Hunting", "Kategorien": "Categories", "Labor-Tür": "Lab door", "Lebensraum": "Habitat",
  "Läden & Dienste erscheinen ab Zoomstufe 3, Banken ab 2 – oder sofort, wenn du eine Stadt wählst. Gestrichelter Ring = Lage ungefähr. Lange drücken auf die Karte zeigt die Koordinaten.": "Shops & services appear from zoom level 3, banks from 2 – or right away when you pick a city. Dashed ring = approximate location. Long-press the map to show coordinates.",
  "Lösung": "Fix", "Nicht verpassen": "Don't miss", "Nur mit Code": "Only with code", "Nur offene Punkte": "Only open items", "Offen": "Open", "Platin": "Platinum", "Silber": "Silver",
  "Rockstar hat noch keine offizielle Liste bekannter Probleme veröffentlicht. Diese Einträge stammen von Spielerberichten.": "Rockstar hasn't published an official list of known issues yet. These entries come from player reports.",
  "Schwere": "Severity", "Sofort die Gegend verlassen, bevor die Polizei eintrifft.": "Leave the area right away, before the police arrive.", "Stadt / Gebiet": "City / area",
  "Tastenfeld": "Keypad", "Tier": "Animal", "Tippe an, was du im Spiel siehst. Die App sagt dir die Reihenfolge.": "Tap what you see in the game. The app tells you the order.",
  "Tresor": "Safe", "Tresore & Codes": "Safes & codes", "Verpassbar:": "Missable:", "Was du nicht verpassen solltest, nützliche Kniffe und bekannte Glitches.": "What not to miss, useful tricks and known glitches.",
  "Welche roten Symbole stehen unter den Sternen?": "Which red icons are shown under the stars?", "West-Vice-Dale": "West Vice-Dale", "Pay 'n' Spray – West-Vice-Dale": "Pay 'n' Spray – West Vice-Dale",
  "Wie sehen die Sterne aus?": "What do the stars look like?", "Wo du Autos loswirst, was sie bringen und wo du sie abstellst.": "Where to get rid of cars, what they pay and where to park them.",
  "gtadb-Ort": "gtadb place", "gtadb-Orte (ab Zoom 3)": "gtadb places (from zoom 3)", "noch unbekannt": "still unknown", "ohne Kartenpunkt": "no map marker", "selten": "rare",
  "· Kacheln und Ortsdaten unter": "· Tiles and place data under", "– Name antippen für Untertypen": "– tap a name for subtypes",
  "„Positive Mental Attitude“ – die Balkon-Meditation in Kapitel 1.": "“Positive Mental Attitude” – the balcony meditation in chapter 1.", "Karte & Orte:": "Map & places:",
  "Brians Lockup": "Brian's lockup", "Wohnmobil-Tresor (Burned Houses)": "RV safe (Burned Houses)", "kritisch": "critical", "mittel": "medium", "gering": "minor", "alle": "all", "du bist hier": "you are here",
  "Purchases over $1,000 go through BuckMe. Carry $0 and you lose nothing when you die.": "Purchases over $1,000 go through BuckMe. Carry $0 and you lose nothing when you die."
});
R(/^nötig ([\d.,]+) \$$/, "needed $$$1");
R(/^nötig (\d+)(?: von (\d+))?(?: · (.+))?$/, (m, a, b, c) => "needed " + a + (b ? " of " + b : "") + (c ? " · " + c : ""));
R(/^(\d+) von (\d+) Punkten erfüllt · Spielstand „(.+)“$/, (m, a, b, c) => `${a} of ${b} items done · save “${I18N_DICT[c] || c}”`);
R(/^(\d+) von (\d+) erledigt · Spielstand „(.+)“$/, (m, a, b, c) => `${a} of ${b} done · save “${I18N_DICT[c] || c}”`);
R(/^(\d+) bekannte Codes\. Tippen auf „Karte“ zeigt den Ort\.$/, "$1 known codes. Tap “Map” to show the place.");
R(/^(\d+) Cheats, davon (\d+) mit bekanntem Code\. Jeder Cheat muss im Spiel freigeschaltet werden\.$/, "$1 cheats, $2 of them with a known code. Every cheat has to be unlocked in the game.");
R(/^Koordinaten: (.+)$/, "Coordinates: $1");
R(/^Kap\. (\d)$/, "Ch. $1");
R(/^Ab Kap\.(.*)$/, "From ch.$1");
R(/^Ab Kapitel (\d)$/, "From chapter $1");
R(/^Jagdbare Tiere \((\d+)\)$/, "Huntable animals ($1)");
R(/^Platin-Roadmap \(ca\. (\d+) Std\.\)$/, "Platinum roadmap (about $1 h)");
R(/^(.+) · nicht auf der Karte$/, (m, a) => (I18N_DICT[a] || a) + " · not on the map");
R(/^Datenstand (.+) \(Spiel erschienen am 19\.11\.2026\)\. .*$/, "Data as of $1 (game released 19 Nov 2026). Each entry shows whether several sources agree. “Approximate location” means: area from the guide, marker placed by hand – take a close look in the game.");
R(/^([·–] )(.+)$/, (m, a, b) => I18N_DICT[b] ? a + I18N_DICT[b] : m);

/* gesammelt per Durchlauf – Ergänzungen unten */
window.I18N_NACHTRAG && window.I18N_NACHTRAG(A, R, { nr, tsd, ca });

if (LANG === "en") englischAnwenden();
})();
