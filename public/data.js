/* =====================================================================
   LEONIDA HELPER – Inhalte (Stand: 20.11.2026, Spiel-Release 19.11.2026)
   ---------------------------------------------------------------------
   So pflegst du Inhalte:
   - Jeder Ort in ORTE braucht eine eindeutige id (wird für "erledigt" gespeichert,
     also später NICHT ändern).
   - p: [x, y] = Spielkoordinaten wie auf map.gtadb.org (x = Ost, y = Nord).
     Ohne p erscheint der Eintrag nur in der Liste, nicht auf der Karte.
   - g: Lage-Genauigkeit  2 = an gtadb-Ort ausgerichtet, 1 = Gebiet bekannt, 0 = ungefähr
   - q: Quellenlage       m = mehrere Quellen, e = eine Quelle, u = Quellen uneins
   - c: ab Kapitel (Zahl) oder Text, v: true = verpassbar
   - src: Kürzel aus QUELLEN
   - at: id eines anderen Ortes (für Listeneinträge ohne eigene Position)
   ===================================================================== */

window.LH = {};

LH.STAND = "21.11.2026, 03:30 (v8)";

LH.KATEGORIEN = [
  { id: "basis",  name: "Wichtige Orte",             farbe: "#4fc3f7", zeichen: "★" },
  { id: "waffe",  name: "Waffen & Fundorte",         farbe: "#ff5a5a", zeichen: "W" },
  { id: "laden",  name: "Ammu-Nation & Waffenläden", farbe: "#aab4c3", zeichen: "A" },
  { id: "gang",   name: "Gang-Operationen",          farbe: "#ff7043", zeichen: "G" },
  { id: "raub",   name: "Banken & Überfälle",        farbe: "#ef5350", zeichen: "€", minZoom: 2 },
  { id: "geld",   name: "Geld & Schätze",            farbe: "#3ddc84", zeichen: "$" },
  { id: "dienst", name: "Läden & Dienste",           farbe: "#a1887f", zeichen: "L", minZoom: 3 },
  { id: "samm",   name: "Sammelobjekte",             farbe: "#c6ff00", zeichen: "S" },
  { id: "code",   name: "Tresore & Codes",           farbe: "#ffd23f", zeichen: "#" },
  { id: "geheim", name: "Geheimnisse & Easter Eggs", farbe: "#b388ff", zeichen: "?" },
  { id: "medi",   name: "Meditationsplätze",         farbe: "#ff7ac6", zeichen: "M" },
  { id: "aktiv",  name: "Rennen & Aktivitäten",      farbe: "#ff9a3c", zeichen: "R" },
  { id: "eigen",  name: "Eigene Markierungen",       farbe: "#ffffff", zeichen: "+" }
];
/* Kurzzeichen auf dem Kartenpunkt je Untertyp (sonst das Zeichen der Kategorie) */
LH.TYP_ZEICHEN = { "Tankstelle": "T", "Supermarkt": "M", "Fast Food": "F", "Schnapsladen": "B", "Kleidung": "K", "Friseur": "H", "Tattoo": "I",
  "Tuning": "W", "Pay 'n' Spray": "P", "Garage": "G", "Bahnhof": "Z", "Bar & Club": "C", "Hehler": "$", "Bank": "B", "Banktresor": "V",
  "Payday Loan": "L", "Juwelier": "J", "Pfandhaus": "P", "Rennen": "R", "Drohnenrennen": "D", "Kitty-Litter-Labor": "K", "Schießstand": "S", "Trophäen-Ort": "T" };
/* Untertyp für Einträge ohne eigenes typ-Feld */
LH.TYP_STANDARD = { basis: "Story & Basis", laden: "Ammu-Nation", geld: "Geldquelle", samm: "Sammelobjekt", code: "Code", geheim: "Easter Egg", medi: "Meditation", aktiv: "Aktivität", eigen: "Eigener Punkt", dienst: "Sonstiges", waffe: "Sonstige Waffe" };

LH.QUELLEN = {
  pp:  { name: "PowerPyx",            url: "https://www.powerpyx.com/" },
  ol:  { name: "OutputLag",           url: "https://outputlag.com/guides/gta-6-unique-weapons-locations/" },
  olg: { name: "OutputLag (Geld)",    url: "https://outputlag.com/guides/gta-6-make-money-fast/" },
  sk:  { name: "Sportskeeda",         url: "https://www.sportskeeda.com/gta/all-hidden-legendary-weapons-locations-gta-6" },
  skc: { name: "Sportskeeda (Codes)", url: "https://www.sportskeeda.com/esports/all-safe-locker-codes-gta-6" },
  sks: { name: "Sportskeeda (Geheimnisse)", url: "https://www.sportskeeda.com/esports/all-secret-locations-gta-6" },
  mf:  { name: "MetaForge",           url: "https://metaforge.app/gta-6/gta-6-money-guide-how-to-make-money-fast" },
  gm:  { name: "GameTrek",            url: "https://gmtreks.com/gta6" },
  gr:  { name: "Game Rant",           url: "https://gamerant.com/unlimited-money-glitch-gta-6/" },
  cv:  { name: "Cultured Vultures",   url: "https://culturedvultures.com/gta-6-all-door-codes-and-safe-combinations/" },
  bb:  { name: "Beebom",              url: "https://beebom.com/gta-6-safe-codes/" },
  rb:  { name: "Red Bull (Cheats)",   url: "https://www.redbull.com/us-en/gta-6-cheat-codes" },
  tn:  { name: "TechNerdiness (Trophäen)", url: "https://www.technerdiness.com/gta/gta-6-trophy-list/" },
  al:  { name: "AlcastHQ",            url: "https://alcasthq.com/gta-6-wanted-level/" },
  gz:  { name: "GTA-Zone",            url: "https://gta-zone.com/news/gta-6-easter-eggs/" },
  wg:  { name: "WikiGTAVI",           url: "https://www.wikigtavi.com/guides/gta-6-easter-eggs-secrets" },
  pd:  { name: "playday.one (Jagd)",  url: "https://playday.one/2026/11/18/gta-6-hunting-guide-animals-locations/" },
  gb:  { name: "GTA BOOM",            url: "https://www.gtaboom.com/how-to-make-money-fast-and-early-in-gta-6-725c" },
  vc:  { name: "VICE",                url: "https://www.vice.com/en/article/gta-6-how-to-make-money-fast/" },
  ggm: { name: "games.gg (Geld-Glitch)", url: "https://games.gg/grand-theft-auto-vi/guides/grand-theft-auto-6-money-glitch-what-works-and-what-to-avoid/" },
  gtg: { name: "grandtheft.gg",       url: "https://grandtheft.gg/gta-6-unlimited-money-glitch" },
  ps:  { name: "playstationinfo.de",  url: "https://www.playstationinfo.de/en/2026/11/18/gta-6-guide-all-known-safe-codes-and-how-to-pull-off-the-heists-successfully/" },
  sh:  { name: "Shacknews (Angeln)",  url: "https://www.shacknews.com/article/151389/how-to-go-fishing-gta6" },
  at:  { name: "allthings.how",       url: "https://allthings.how/gta-6-how-fishing-and-hunting-work-catch-and-release-explained/" },
  ppg: { name: "PowerPyx (Gang-Operationen)", url: "https://www.powerpyx.com/?p=372652" },
  pps: { name: "PowerPyx (Pay 'n' Spray)", url: "https://www.powerpyx.com/?p=371138" },
  gmm: { name: "GameTrek (Missionen)", url: "https://gmtreks.com/gta6/page/01M7QSGT3QP6VF7KRTAP9HRZ1W" },
  gm100: { name: "GameTrek (100 %)", url: "https://gmtreks.com/gta6/page/01M7QS1TTMPP95NC7RW6F7TMFM" },
  gmsf: { name: "GameTrek (Strangers & Freaks)", url: "https://gmtreks.com/gta6/page/01M7QVGK6BDTA8232FS0MEXMBE" },
  gmg: { name: "GameTrek (Gangs)", url: "https://gmtreks.com/gta6/page/01M7QVHTVTRCM9QJE3S1MG73CX" },
  gmr: { name: "GameTrek (Randys Liste)", url: "https://gmtreks.com/gta6/page/01M7SGBV0JDTQWNACGXYKKXC1K" },
  gmp: { name: "GameTrek (Immobilien)", url: "https://gmtreks.com/gta6/page/01M7SGAVG02PNJVMDEN3YS6AGD" },
  gmsg: { name: "GameTrek (Snap Gun)", url: "https://gmtreks.com/gta6/page/01M7SFSKPN27JN66113E17RH29" },
  gmpl: { name: "GameTrek (Platin-Roadmap)", url: "https://gmtreks.com/gta6/page/01M7QSDE93TAHE8SSEFGG01CGV" },
  bc:  { name: "beatcopgame (Bugs)",  url: "https://beatcopgame.com/gta-6-bugs-tracker-all-bugs-weve-spotted-so-far/" },
  nd:  { name: "Nerdism (Bugs)",      url: "https://nerdism.com/gta-6-bugs-errors-fixes-live/" },
  psq: { name: "Push Square (Key Lento)", url: "https://www.pushsquare.com/guides/gta-6-key-lento-collectibles-and-secrets-walkthrough" },
  tbl: { name: "The Big Lead (Sammelobjekte)", url: "https://www.thebiglead.com/gta-6-collectibles-guide-cards-styles-meteorite-chunks-landmark-scans/" },
  li:  { name: "Leonida Insights (Key Lento)", url: "https://leonidainsights.com/en/world/places/key-lento/" },
  sag: { name: "Signal Atlas (Karten Key Lento)", url: "https://signalatlasgaming.com/guides/key-lento-cards" },
  gbt: { name: "GTA BOOM (Wracks)", url: "https://www.gtaboom.com/gta-6-treasure-hunting-2b73" },
  mfm: { name: "MetaForge (Magazine)", url: "https://metaforge.app/gta-6/gta-6-magazines-books-comics-locations" },
  rbu: { name: "Red Bull (Ultimate Edition)", url: "https://www.redbull.com/int-en/gta-6-ultimate-edition-bonuses" },
  gtadb: { name: "map.gtadb.org",     url: "https://map.gtadb.org" }
};

/* ------------------------------------------------------------------ ORTE */
LH.ORTE = [
  /* ---------- Wichtige Orte ---------- */
  { id: "jason-haus", k: "basis", n: "Jasons Haus", r: "Key Lento", p: [-2354, -5532], g: 2, c: 1, q: "m", src: ["olg", "gm", "gz"],
    t: "Startpunkt von Kapitel 1. Unter den Dielen im Schlafzimmer liegt ein Bargeld-Versteck – Geld dort geht beim Tod nicht verloren. Im Briefkasten vor dem Haus landen Missions- und Hehlerzahlungen.",
    s: ["Briefkasten bei jedem Verlassen prüfen", "Die 4 optionalen Hausreparaturen vor der Mission „Coming Home“ erledigen (danach weg)", "Balkon-Meditation nur in Kapitel 1 (siehe Meditationsplätze)", "Easter Egg: Das GPS im Boot am Steg zeigt die Karte von Los Santos"] },
  { id: "brian-lockup", k: "basis", typ: "Hehler", n: "Brians Lagerraum (Lockup)", r: "Key Lento, Südwesten", p: [-2580, -5895], g: 1, c: 1, q: "m", src: ["olg", "gr", "cv"],
    t: "Hehler für Drogen, Schmuck und markierte Scheine. Ware in die Kiste legen – das Geld kommt später in Jasons Briefkasten.",
    codes: [["Tür", "7700"]] },
  { id: "kenton", k: "basis", n: "Kentons Laden „Island Dreams“", r: "Key Lento, Osten", p: [-2040, -5470], g: 0, c: 1, q: "m", src: ["gm", "bb", "olg"],
    t: "Start der Mission „Island Dreams“ (auf der Karte „Work For Kenton“). Danach gibt es Tauchausrüstung, Metalldetektor und Kentons Boot für die Schatztauchgänge.",
    s: ["Tauchplätze = lila Truhen-Symbole auf der Spielkarte", "Schätze direkt bei Kenton verkaufen", "Kenton ist nach Kapitel 1 kurz weg und meldet sich zwischen Kapitel 2 und 3 wieder (als Jason)"] },
  { id: "moses", k: "basis", typ: "Hehler", n: "Moses' Werkstatt (Autoverkauf)", r: "Port Gellhorn", p: [-6430, 3720], g: 0, c: 2, q: "m", src: ["mf", "olg", "vc"],
    t: "Ab Kapitel 2 (Lucia). Kauft Autos ohne Tracker für ca. 1.000–2.000 $. Etwa 2 Minuten Pause zwischen zwei Verkäufen.",
    s: ["Kein Auto direkt neben der Werkstatt klauen – besser von der Hauptstraße in Port Gellhorn", "Autos mit gelbem Tracker hier nicht abgeben"] },
  { id: "paynspray-laperle", k: "basis", typ: "Pay 'n' Spray", n: "Pay 'n' Spray – La Perle", r: "Vice City, La Perle", p: [-905, 1440], g: 1, c: 3, q: "m", src: ["mf", "gm", "pp"],
    t: "Ab Anfang Kapitel 3 kannst du Autos mit Standard-Tracker an jedem Pay 'n' Spray verkaufen (ca. 4.000 $ pro gutem Auto). Gelbe Tracker melden das Auto nach einer Weile der Polizei – vorher hierher fahren." },
  { id: "starlet", k: "basis", n: "Starlet Motel", r: "Kelly County, Historic Route 628", p: [-5355, 3462], g: 2, c: 2, q: "m", src: ["pp", "gz"],
    t: "Lucias Unterkunft in Kapitel 2. Küche und Büro sind nach Kapitel 2 nicht mehr zugänglich.", v: true,
    s: ["Sammelkarte „Victor Maravilla“ am Kühlschrank in der Küche (verpassbar)", "Sammelkarte „Vicki“ im Bad des Büros (verpassbar)"] },

  /* ---------- Geld & Hehler ---------- */
  { id: "tauchgebiet", k: "geld", typ: "Wrack", n: "Schatztauchen mit Kenton", r: "Gewässer der Leonida Keys", p: [-2700, -6350], g: 0, c: 1, q: "m", src: ["olg", "gm", "mf"],
    t: "Bestes frühes Geld ohne Polizei: ca. 1.400 $ für das erste Wrack, spätere Plätze bis ca. 4.000 $ pro Tauchgang. 7 Schatz-Sets, alle auch nach der Story machbar. Die genauen Plätze zeigt das Spiel als lila Truhen.",
    s: ["6 Wracks mit Namen und Schätzen stehen in der Liste (Kategorie Geld & Hehler, „Wrack …“)", "Boot mit Schnorchel-Symbol nehmen (Kentons Boot oder Jasons Boot am Steg)", "Bei Tageslicht tauchen, langsam mit dem Detektor suchen", "Sauerstoff im Blick behalten", "Trophäe „This Was No Boat Accident“: Kentons letzte Mission"] },
  { id: "red-barn", k: "geld", n: "Rote Scheune (Geld-Schleife)", r: "Süd-Vice-Dale, kurz östlich von Hamlet", p: [-2150, -3300], g: 0, c: 1, q: "e", src: ["gr"],
    t: "Drogen im Büro und im Tresor, ein Geldsack im offenen Van in der Mitte. Laut Game Rant tauchen die Sachen nach Speichern und Laden wieder auf – ca. 8.000 $ alle 5 Minuten.",
    s: ["Eigenes Auto mitbringen (Kofferraum als Lager)", "Alles einpacken, volle Taschen in den Kofferraum", "Speichern, Spielstand laden → du stehst bei Jasons Haus, die Ware ist noch im Auto", "Bei 4 Taschen zu Brians Lockup (Code 7700)", "Hinweis: Bargeld aus Kapitel 1 geht am Kapitelende verloren – das Geld vorher ausgeben oder sichern"] },
  { id: "flugzeug", k: "geld", n: "Absturz Schmugglerflugzeug (Zufallsereignis)", r: "Grassrivers, nördlich der Interstate-Brücke Richtung Hamlet", p: [-3000, -3950], g: 0, c: 1, q: "e", src: ["olg"],
    t: "Über die lange Interstate-Brücke Richtung Hamlet fahren und dem Rauch in die Grassrivers folgen. Überlebenden Schmuggler ausschalten und die Ware aus dem Flugzeug holen, bevor es explodiert. Verkauf an Brian." },
  { id: "lucky-dog", k: "geld", n: "Lucky Dog – Hund auf dem Jetski (ca. 1.200 $)", r: "Gambit Bay", p: [-2779, -5237], g: 1, c: 1, q: "m", src: ["gz", "wg"],
    t: "Mit dem Boot vom Steg an Jasons Haus in die Gambit Bay fahren, ins Wasser springen und wegschwimmen. Nach ca. 5 Minuten allein auf See holt dich ein Hund auf einem Jetski ab.",
    s: ["Ball werfen und dem Hund über die Insel folgen", "Er gräbt ein Versteck mit ca. 1.200 $ aus (WikiGTAVI: Geldbörse mit 1.218 $)"] },
  { id: "kingfisher-op", k: "geld", n: "Kingfishers-Versteck (Illegal Operation)", r: "Inseln nordwestlich von Key Lento", p: [-3020, -5080], g: 0, c: 1, q: "m", src: ["olg", "gb", "ol"],
    t: "Gelbe Masken-Symbole auf der Karte = Illegal Operations. Per Boot anfahren, Wachen am Steg ausschalten, jeden Raum durchsuchen (Focus hilft). Pro Versteck ca. 1.000–2.000 $ plus Ware zum Verkaufen. In einer Kiste auf dem Schreibtisch liegt das Kingfishers W-22." },
  { id: "papagei", k: "geld", n: "Sprechender Papagei (ca. 1.300 $)", r: "Three Sheets Liquor, Key Lento (Shirleys Rum-Auftrag)", g: 0, c: 1, v: true, q: "m", src: ["olg", "gz"],
    t: "Nach Shirleys Rum-Auftrag zurück zum Schnapsladen, über den seitlichen Zaun (nicht hinter der Theke) in den Hinterhof, Schläger ausschalten, roten Papagei im Käfig ansprechen. Er verrät das Geld im kleinen weißen Wandgitter neben dem gelben Generator." },

  /* ---------- Einzigartige Waffen ---------- */
  { id: "crabshack", k: "waffe", n: "Crabshack VF5 (MP)", r: "Pelican Valley, verlassene Forschungsstation im Sumpf", p: [-3716, -3085], g: 0, c: 1, q: "m", src: ["ol", "skc", "cv"],
    t: "Beste frühe Waffe. Hinter einer Tastentür in der alten Krabben-Forschungsstation.",
    s: ["Stromkasten am Hauptgebäude einschalten", "Am PC mit Passwort CLEAVES anmelden und die Riesenkrabbe besiegen", "Tresor mit 0072 öffnen – darin liegt ein Zettel mit dem Türcode", "Im ersten Schuppen 0212 am Tastenfeld eingeben"],
    codes: [["PC-Passwort", "CLEAVES"], ["Tresor / Wassergarage", "0072"], ["Tür", "0212"]] },
  { id: "akulus", k: "waffe", n: "Swamp Bait Akulus + Cruel Huntsman's SM-69", r: "Pelican Valley, verwüstete blutige Hütte", p: [-3640, -3160], g: 0, c: 1, q: "e", src: ["ol"],
    t: "Revolver liegt auf dem Boden, das Jagd-Scharfschützengewehr SM-69 auf der anderen Seite neben Munition. Kein Kampf nötig – beides auf einem Weg mitnehmen." },
  { id: "kingfisher-w22", k: "waffe", n: "Kingfishers W-22 (Kleinwildgewehr)", r: "Fischerhütte der Kingfishers auf einer Insel", at: "kingfisher-op", c: 1, q: "m", src: ["ol", "olg"],
    t: "Waffenkoffer in der Hütte. Nur per Boot erreichbar, bewachte Gang." },
  { id: "laird-tiger", k: "waffe", n: "Kingfishers Laird 350 (Scharfschütze)", r: "Heruntergekommenes Tiger-Motel südlich von Hamlet", p: [-2600, -3760], g: 0, c: 1, v: true, q: "e", src: ["ol"],
    t: "Erst das erste Zimmer plündern, dann das Zimmer daneben. Gang und evtl. Polizei kommen. Wer wegfährt, findet das Zimmer evtl. vernagelt vor – möglicherweise verpassbar." },
  { id: "conspiracist", k: "waffe", n: "Conspiracist Type 9 (Maschinenpistole)", r: "Bunker unter einem Wohnwagen – Lage laut Quellen unterschiedlich", p: [-1950, 520], g: 0, c: 1, q: "u", src: ["sk", "ol"],
    t: "Sportskeeda: Waffenkammer unter einem Mobilheim in Balsero, südwestlich der Griffin-Schießanlage (Marker hier). OutputLag: Trailerplatz ganz im Norden von Mariana County, Bunker unter dem Wohnwagen mit Satellitenschüssel, unter dem Schriftzug „Leonida“ der Spielkarte.",
    s: ["Über den Zaun, in den Wohnwagen", "Falltür hinten öffnen und hinunterklettern – die Waffe liegt offen im Bunker"] },
  { id: "turnt-nipper", k: "waffe", n: "Turnt Nipper .38 (kompakte Pistole)", r: "Ultraleichtflugzeug im Baum, Küsteninsel nordwestlich des Mariana-Festlands", p: [-7600, -420], g: 0, c: 1, q: "m", src: ["ol", "sks"],
    t: "Das Wrack hängt mit Fallschirm im Baum. Herunterschießen und am Boden durchsuchen. Eine Schusswaffe mitnehmen." },
  { id: "clunker", k: "waffe", n: "Clunker 556 (Sturmgewehr)", r: "Brooks Boatworks (Illegal Operation, Kolt & Associates)", p: [-6560, 3640], g: 0, c: 2, q: "e", src: ["sk", "cv", "skc"],
    t: "Versteck ausnehmen, Tresor öffnen.", codes: [["Tresor Brooks Boatworks", "6823"]] },
  { id: "cockroach", k: "waffe", n: "Cockroach Xtreme 556 (Sturmgewehr)", r: "Sunrise Motel, Autogarage – Tequesta", p: [-860, -1160], g: 1, q: "e", src: ["sk"], t: "In der Garage des Sunrise Motels." },
  { id: "coldwar", k: "waffe", n: "Cold War 556 (Sturmgewehr)", r: "Bunker bei Big Pine, Nord-Mariana County", p: [-5333, -1700], g: 1, q: "e", src: ["sk"], t: "Im Bunker bei Big Pine." },
  { id: "grx", k: "waffe", n: "GRX 556 (Sturmgewehr)", r: "Leonida Carrier Warehouse (Illegal Operation), Balsero", p: [-1791, 690], g: 1, q: "e", src: ["sk"], t: "Versteck ausnehmen." },
  { id: "polilla-vfg1", k: "waffe", n: "La Polilla Negra VF-G1", r: "Watson Bay Safehouse (Illegal Operation)", p: [-5000, -3290], g: 1, q: "e", src: ["sk"], t: "Versteck ausnehmen." },
  { id: "polilla-kz", k: "waffe", n: "La Polilla Negra KZ-59", r: "Palmer Fishing Warehouse (Illegal Operation), Watson Bay", p: [-5110, -3390], g: 1, q: "e", src: ["sk"], t: "Versteck ausnehmen." },
  { id: "drugmule", k: "waffe", n: "Drug Mule KZ-59", r: "Unter Wasser beim Schiffswrack, Nordküste der Riquezas Keys", p: [-8083, -5250], g: 0, q: "e", src: ["sk"], t: "Tauchausrüstung nötig." },
  { id: "heathen", k: "waffe", n: "Vice City Heathen (kaufbar, 5.150 $)", r: "Prestige Firearms, nördlich von Ocean Beach", at: "laden-prestige", q: "e", src: ["sk"], t: "Einzigartige Variante in der Vitrine." },
  { id: "donnie-38", k: "waffe", n: "Donnie's H&L .38 (Revolver)", r: "Kofferraum von Donnies '85 Blista – Mission „Don Gone“", c: 1, v: true, q: "e", src: ["ol"],
    t: "Ende Kapitel 1. Den Kofferraum öffnen, BEVOR du das Auto zerstörst – danach ist die Waffe weg." },
  { id: "hunter-laird", k: "waffe", n: "Hunter's Laird 350 (Zufallsbegegnung)", r: "Feldweg nach Schüssen, zwei Jäger", c: 1, q: "e", src: ["ol"],
    t: "Hilfe anbieten, den verletzten Jäger in seinem Truck ins Krankenhaus fahren – er schenkt dir sein Gewehr." },
  { id: "killtelligence", k: "waffe", n: "Killtelligence SM-69 (Belohnung)", r: "Mission „Veteran Hunted“ (Bret), Lummox County", c: 2, q: "e", src: ["pp"],
    t: "Belohnung der Strangers-&-Freaks-Mission mit Bret (nur als Jason, Kapitel 2), dazu 500 $." },

  /* ---------- Tresore & Codes (mit Ort) ---------- */
  { id: "kalaga-turm", k: "code", n: "Mount Kalaga: Turm-Hütte mit Logbuch", r: "Gipfel Mount Kalaga, Hütte unterhalb des Turms", p: [-3400, 6430], g: 1, q: "u", src: ["sks", "cv"],
    t: "Tastenfeld an der Holzhütte unter dem Turm. Im Logbuch auf dem Tisch, Seite 2: Kritzelei einer mysteriösen Gestalt.",
    codes: [["Tür (Sportskeeda)", "69185"], ["Tür (Cultured Vultures)", "691865"]] },
  { id: "cottonmouth-tresor", k: "code", n: "Trailer-Tresor am Cottonmouth Lake", r: "Cottonmouth Lake, Mariana County", p: [-3480, -4788], g: 1, q: "m", src: ["bb"], codes: [["Tresor", "44017"]] },
  { id: "sunrise-rv", k: "code", n: "Sunrise RV Park – Dock-Lagerhaus (Kingfishers)", r: "Sunrise RV Park, Mariana County", p: [-3477, -4497], g: 2, q: "e", src: ["cv"], codes: [["Tresor", "6769"]] },

  /* ---------- Geheimnisse & Easter Eggs ---------- */
  { id: "skunk-ape", k: "geheim", n: "Bigfoot / Skunk Ape", r: "Sümpfe südlich des Cottonmouth Lake", p: [-3500, -4960], g: 1, c: 1, q: "m", src: ["gz", "wg"],
    t: "Dem Gebrüll folgen und den menschenähnlichen Baum untersuchen. Ab Beginn des freien Spiels. Kirk bietet später die Mission „Search for the Skunk Ape“ an." },
  { id: "ufo", k: "geheim", n: "UFO-Entführung (Trophäe)", r: "Feldweg beim Starlet Motel / außerhalb Port Gellhorn", p: [-5480, 3400], g: 1, c: 2, q: "m", src: ["gz", "wg"],
    t: "Nach Kapitel 1, nachts nach 2 Uhr: verlassenes Auto finden, dem blauen Licht folgen. Gibt die versteckte Trophäe „The Truth Is Out There“." },
  { id: "ufo-haus", k: "geheim", n: "UFO-Haus mit Meteorit", r: "Belville, Leonard County", p: [-1439, 2930], g: 1, q: "e", src: ["wg"],
    t: "Schlange im Kofferraum, Verschwörungs-Keller in der Garage, ein Meteorit, den man online verkaufen kann." },
  { id: "kalaga-steine", k: "geheim", n: "Steinkreis & Meteorkrater", r: "Gipfel Mount Kalaga", p: [-3430, 6371], g: 1, q: "e", src: ["wg"], t: "Oben auf dem Berg." },
  { id: "osterei", k: "geheim", n: "Ein echtes Osterei", r: "Vogelnest auf dem höchsten Funkturm von Vice City", q: "m", src: ["wg", "gz"],
    t: "Turm hochklettern (ca. 6 Minuten), Ei nehmen und werfen. Von der Plattform startet auch ein BASE-Jump." },
  { id: "red-dead-roman", k: "geheim", n: "Red-Dead-Roman", r: "Jacob's Tavern, Millport", p: [-1059, 6490], g: 2, q: "e", src: ["gz"], t: "Western-Roman, der in New Austin spielt." },
  { id: "eclipse", k: "geheim", n: "Paul Walkers Eclipse", r: "Villa-Garage, Vespucci Island", q: "e", src: ["gz"],
    t: "In Villa und Garage einbrechen, Auto kurzschließen, Kofferraum öffnen. Früh im Spiel möglich." },
  { id: "dexter", k: "geheim", n: "Dexters Wohnung", r: "Washington Island, Vice City", q: "e", src: ["gz"], t: "Eckwohnung im 2. Stock (verschlossen)." },
  { id: "forschung-2314", k: "geheim", n: "Verlassene Forschungsanlage", r: "Ort unbestätigt", q: "e", src: ["wg"], codes: [["Tastenfeld", "2314"]], t: "Code bekannt, Ort wurde noch nicht veröffentlicht." },

  /* ---------- Meditationsplätze (Trophäe „Positive Mental Attitude“) ---------- */
  { id: "medi-1", k: "medi", n: "1 · Jasons Haus (Balkon)", r: "Key Lento", p: [-2335, -5550], g: 2, c: 1, v: true, q: "m", src: ["gm", "pp"],
    t: "VERPASSBAR – nur in Kapitel 1 und nicht auf der Karte markiert.",
    s: ["Mission „Down to Earth“ abschließen", "Lucia geht danach von der Küche auf den Balkon – sofort folgen", "Ihre Einladung zum Meditieren annehmen"] },
  { id: "medi-2", k: "medi", n: "2 · Smooth Sand", r: "Sandbank westlich von Capri", p: [-7150, 250], g: 0, q: "e", src: ["gm"] },
  { id: "medi-3", k: "medi", n: "3 · Swamp", r: "Buckskin Swamp, Kelly County", p: [-4133, 920], g: 1, q: "e", src: ["gm"] },
  { id: "medi-4", k: "medi", n: "4 · Worn Stone", r: "Camp Moonflower, Kelly County", q: "e", src: ["gm"] },
  { id: "medi-5", k: "medi", n: "5 · Red Rocks", r: "Manifest Canyon, Kelly County", p: [-4990, 5127], g: 1, q: "e", src: ["gm"] },
  { id: "medi-6", k: "medi", n: "6 · Water Wheel", r: "Papiermühle, Lummox County", q: "e", src: ["gm"] },
  { id: "medi-7", k: "medi", n: "7 · Jutting Cliff", r: "Mount Kalaga", p: [-3500, 6320], g: 0, q: "e", src: ["gm"] },
  { id: "medi-8", k: "medi", n: "8 · Waterfall", r: "Wasserfall, Lummox County (laut Quelle nordwestlich von Tallaloko)", p: [-2863, 6012], g: 0, q: "e", src: ["gm"] },
  { id: "medi-9", k: "medi", n: "9 · Seaside", r: "Felsstrand, Leonard County", q: "e", src: ["gm"] },
  { id: "medi-hinweis", k: "medi", n: "Hinweis: Anzahl Meditationsplätze uneins", r: "GameTrek nennt an einer Stelle 10 Plätze, in der 100-%-Liste 18 (15 nötig)", q: "u", src: ["gm", "gm100"], t: "Die 10 hier sind die mit Namen bekannten. Weitere Plätze ergänzen, sobald sie belegt sind." },
  { id: "medi-10", k: "medi", n: "10 · Ascent Mountain", r: "Steinkreis auf einem Gipfel, Lummox County", q: "e", src: ["gm"], t: "Wird erst nach den anderen Plätzen freigeschaltet." },

  /* ---------- Waffenläden (24 laut PowerPyx) ---------- */
  { id: "laden-phil", k: "laden", n: "Phil's Ammu-Nation (Expanded)", r: "Vice-Dale County", p: [-1812, -2463], g: 2, q: "m", src: ["pp", "gtadb"] },
  { id: "laden-pg-pawn", k: "laden", n: "Pawn & Gun – Port Gellhorn", r: "Kelly County", p: [-6350, 3367], g: 2, q: "m", src: ["pp", "gtadb"] },
  { id: "laden-crosstown", k: "laden", n: "Pawn & Gun – Crosstown", r: "Vice City, Crosstown", p: [-646, 1176], g: 1, q: "e", src: ["pp"] },
  { id: "laden-zenon", k: "laden", n: "Zenon's Pawn Shop", r: "Vice City, La Perle", p: [-990, 1530], g: 1, q: "e", src: ["pp"] },
  { id: "laden-hamlet", k: "laden", n: "Hamlet Traders", r: "Hamlet", p: [-2640, -3290], g: 1, q: "e", src: ["pp"] },
  { id: "laden-tequesta", k: "laden", n: "Tequesta Guns & Ammo", r: "Vice City, Tequesta", p: [-940, -1090], g: 1, q: "e", src: ["pp"] },
  { id: "laden-prestige", k: "laden", n: "Prestige Firearms (Expanded)", r: "nördlich von Ocean Beach", p: [1650, 1250], g: 0, q: "e", src: ["pp", "sk"], t: "Hier gibt es die einzigartige Vice City Heathen für 5.150 $." },
  { id: "laden-barrage", k: "laden", n: "Barrage Gun Supply", r: "Mariana County", q: "e", src: ["pp"] },
  { id: "laden-chuck", k: "laden", n: "Chuck's Tackle & Shot (Limited)", r: "Key Lento, Mariana County – Waffen und Angelzubehör", q: "e", src: ["pp"] },
  { id: "laden-aplenty", k: "laden", n: "Guns Aplenty! (Hunting)", r: "Mariana County", q: "e", src: ["pp"], t: "Jagd-Sortiment, u. a. Wortham W-22." },
  { id: "laden-richardson", k: "laden", n: "Richardson Hunting Supplies", r: "Mariana County", q: "e", src: ["pp"] },
  { id: "laden-woodhatch", k: "laden", n: "Woodhatch (Expanded)", r: "Mariana County", q: "e", src: ["pp"] },
  { id: "laden-bigshots", k: "laden", n: "Big Shots (Expanded)", r: "Vice-Dale County", q: "e", src: ["pp"] },
  { id: "laden-vcfire", k: "laden", n: "Vice City Firearms", r: "Vice-Dale County", q: "e", src: ["pp"] },
  { id: "laden-martez", k: "laden", n: "Martez Empeños", r: "Vice-Dale County", q: "e", src: ["pp"] },
  { id: "laden-jackson", k: "laden", n: "Jackson Firearms", r: "Vice-Dale County", q: "e", src: ["pp"] },
  { id: "laden-vcpawn", k: "laden", n: "Vice City Gun & Pawn", r: "Vice-Dale County", q: "e", src: ["pp"] },
  { id: "laden-quickscope", k: "laden", n: "Quickscope", r: "Vice-Dale County", q: "e", src: ["pp"] },
  { id: "laden-blackeagle", k: "laden", n: "Black Eagle (Expanded)", r: "Vice-Dale County", q: "e", src: ["pp"] },
  { id: "laden-ironoak", k: "laden", n: "Iron & Oak (Expanded)", r: "Vice-Dale County", q: "e", src: ["pp"] },
  { id: "laden-tactical", k: "laden", n: "Tactical Outlet Guns", r: "Leonard County", q: "e", src: ["pp"] },
  { id: "laden-outfitters", k: "laden", n: "Gellhorn Outfitters", r: "Kelly County", q: "e", src: ["pp"] },
  { id: "laden-biff", k: "laden", n: "Biff's Gun Supply", r: "Kelly County", q: "e", src: ["pp"] },
  { id: "laden-rusty", k: "laden", n: "Rusty Willis Jr. Hunting Supplies (Hunting)", r: "Lummox County", q: "e", src: ["pp"], t: "Jagd-Sortiment, u. a. Wortham W-22." },

  /* ---------- Rennen & Schießstände ---------- */
  { id: "gellhorn-raceway", k: "aktiv", typ: "Rennen", n: "Gellhorn International Raceway", r: "Kelly County", p: [-6564, 2030], g: 2, q: "m", src: ["rb", "gtadb"], t: "Zählt für den Cheat „Repair Vehicle“ (10 Siege auf Gellhorn Raceway, Thrillbilly Mud Club und Boone Speedway)." },
  { id: "thrillbilly", k: "aktiv", typ: "Rennen", n: "Thrillbilly Mud Club", r: "Kelly County, Route 32", p: [-4007, 4756], g: 2, q: "m", src: ["rb", "gtadb"] },
  { id: "boone", k: "aktiv", typ: "Rennen", n: "Boone Speedway", r: "Hamlet", p: [-3092, -3376], g: 2, q: "m", src: ["rb", "gtadb"] },
  { id: "range-balsero", k: "aktiv", typ: "Schießstand", n: "Schießstand Balsero (Griffin)", r: "Vice City, Balsero", p: [-1880, 600], g: 0, q: "m", src: ["sk", "gm"], t: "Herausforderungen schalten Waffen, Farben und Varianten frei. Gold in allen Herausforderungen = Trophäe „The Shootist“; Medaillen schalten Munitions-Cheats frei." },
  { id: "range-gellhorn", k: "aktiv", typ: "Schießstand", n: "Schießstand Port Gellhorn", r: "Port Gellhorn", p: [-6380, 3560], g: 0, q: "e", src: ["gm"], t: "Wie Balsero: Waffen-Freischaltungen über Herausforderungen." },
  { id: "kingpin", k: "aktiv", typ: "Bowling", n: "Kingpin Bowling (Kolt & Associates)", r: "Port Gellhorn", q: "m", src: ["skc", "cv", "tn"], codes: [["Tresor", "0300"]], t: "Trophäe „Let's Go Bowling“: einen Follow-Through auf der Bowlingbahn von Kolt & Associates schaffen." }
];

/* Codes ohne eigenen Kartenpunkt (erscheinen im Bereich „Codes“) */
LH.CODES_EXTRA = [
  { n: "Acid Lab / Moonstone Boutique (Mission „Lab Fees“)", c: "0420", w: "Tür zum Hinterzimmer mit Geld und Ware", q: "m", src: ["olg", "cv", "bb"] },
  { n: "Casa de Empeño (Mission „Yasmani's Jewelry Jobs“)", c: "1680", w: "Tresor im kleinen Büro hinten", q: "m", src: ["ps", "cv"] },
  { n: "Richardson Jewelry & Diamonds (Yasmani)", c: "6815", w: "Tresor, Nordost-Ecke des mittleren Hinterraums", q: "m", src: ["ps", "cv"] },
  { n: "Donovan Banks & Co. (Yasmani)", c: "0104", w: "Tresor mitten im langen Flur hinten", q: "m", src: ["ps", "cv"] },
  { n: "La Cascara Motel (Kolt & Associates), Port Gellhorn", c: "6969", w: "Tresor", q: "e", src: ["skc"] },
  { n: "Saber Shipping Facility (Guardia Brothers)", c: "1965", w: "Tresor", q: "e", src: ["cv"] },
  { n: "Saber Shipping Yard (Guardia Brothers)", c: "8046", w: "Tresor", q: "e", src: ["cv"] },
  { n: "Belville – Final Chapter", c: "2121", w: "Tresor (Illegal Operation)", q: "e", src: ["cv"] },
  { n: "Nova Auto Junkyard", c: "7777", w: "Tresor", q: "e", src: ["bb"] },
  { n: "Garage mit '74 Vamos (Randys Wunschliste)", c: "2727", w: "Garagentor – Tipp: auf die Schilder achten", q: "m", src: ["cv"] }
];
LH.CODES_HINWEIS = "Missions-Codes sind fest. Andere Tresorcodes können je nach Spielstand zufällig sein – dann Kassierer, Ladenbesitzer oder Hehler einschüchtern, oder den Tresor sprengen.";

/* ----------------------------------------------------------------- GELD */
LH.GELD = [
  { kap: 1, n: "Kenton-Tauchgänge", w: "ca. 1.400 $ pro Wrack, später bis ca. 4.000 $", e: 2500, einheit: "Tauchgang", risiko: "keins", at: "tauchgebiet", src: ["olg", "gm"] },
  { kap: 1, n: "Illegal Operations ausnehmen + Ware verkaufen", w: "ca. 1.000–2.000 $+ pro Versteck", e: 1500, einheit: "Versteck", risiko: "hoch (Kampf)", at: "kingfisher-op", src: ["gb", "vc", "mf"] },
  { kap: 1, n: "Verlorene Drogen für Donnie (8 Pakete + Corsair-Wrack)", w: "ca. 3.400 $ bei Donnie (2.720 $ bei Brian) + 1.200 $ fürs Wrack", e: 3400, einheit: "Runde", risiko: "mittel (Gegner, Alligatoren)", at: "ld-1", src: ["gtb", "rt", "old"] },
  { kap: 1, n: "Drogendeal-Lagerhalle bei Apollo Aggregates", w: "ca. 13.000 $ (Bargeld, Kokain, Karte „Leroy Rook“)", e: 13000, einheit: "Besuch", risiko: "keins (alle schon tot)", at: "red-barn", src: ["vp", "olm", "ozc"] },
  { kap: 1, n: "Explodierende Boote auf See (Zufall)", w: "ca. 1.500–2.000 $", e: 1750, einheit: "Ereignis", risiko: "Haie, Zeitlimit", src: ["olg"] },
  { kap: 1, n: "Ladenüberfälle", w: "ein paar hundert $ pro Laden", e: 300, einheit: "Laden", risiko: "mittel (Polizei)", src: ["olg", "mf"] },
  { kap: 1, n: "Passanten überfallen", w: "ca. 100–200 $", e: 150, einheit: "Person", risiko: "gering", src: ["olg"] },
  { kap: 2, n: "Autos an Moses verkaufen", w: "ca. 1.000–2.000 $ pro Auto", e: 1500, einheit: "Auto", risiko: "gering", at: "moses", src: ["mf", "olg"] },
  { kap: 3, n: "Getrackte Autos beim Pay 'n' Spray", w: "ca. 4.000 $ pro gutem Auto", e: 4000, einheit: "Auto", risiko: "gering", at: "paynspray-laperle", src: ["mf"] },
  { kap: 3, n: "Juweliere ausrauben (nach „Yasmani's Jewelry Jobs“)", w: "10.000–25.000 $ pro Laden", e: 17500, einheit: "Laden", risiko: "hoch", src: ["mf"] },
  { kap: 3, n: "Randys Wunschliste (18 Sportwagen, Key Cloner)", w: "30.000 $+ pro Auto in perfektem Zustand", e: 30000, einheit: "Auto", risiko: "mittel", src: ["mf"] },
  { kap: 4, n: "Banktresore (Ende Kapitel 4, „That's Where The Money Is…“)", w: "bis 205.000 $ pro Tresor", e: 150000, einheit: "Tresor", risiko: "sofort 4 Sterne", src: ["mf"] }
];
LH.GELD_REGELN = [
  { titel: "Kapitel 1: nicht farmen", text: "Bargeld, das du trägst, geht am Ende von Kapitel 1 verloren (Point of no Return: Mission „Tourist Trap“). Nur Geld in der Family Savings (BuckMe) kommt in Kapitel 2 mit. Erstes Sparziel ca. 5.000 $.", q: "m", src: ["mf", "olg", "gb"] },
  { titel: "Bank statt Tasche", text: "BuckMe öffnet etwa zur Hälfte von Kapitel 1 (Mission „Buck Me“). Einzahlen an jedem Geldautomaten. Bei Tod oder Festnahme verlierst du Bargeld und Waffen, die dir nicht gehören.", q: "m", src: ["olg", "gm"] },
  { titel: "Vor BuckMe: Dielen-Versteck", text: "Bargeld unter den Dielen in Jasons Schlafzimmer ist bei Tod sicher.", q: "m", src: ["olg", "gm"] },
  { titel: "Briefkasten", text: "Missionsgeld und Hehlerzahlungen von Brian landen in Jasons Briefkasten – bei jedem Losfahren prüfen.", q: "m", src: ["olg", "gm"] },
  { titel: "Story-Zahlung", text: "Am Ende von Kapitel 3 gibt es automatisch 120.000 $.", q: "e", src: ["mf"] },
  { titel: "Großes Ziel", text: "Die Mission „Save for the Future“ braucht 2 Mio. $ für das volle Familiensparen – Banktresore sind dafür am schnellsten.", q: "e", src: ["mf"] },
  { titel: "Geld-Cheat bringt nichts", text: "Der 250.000-$-Cheat geht erst nach der Story, und mit aktivem Cheat kannst du nicht speichern – das Geld bleibt nie erhalten.", q: "m", src: ["rb", "mf"] }
];

/* ------------------------------------------------------------- FAHNDUNG */
LH.STERNE = [
  { id: "hohl", n: "Hohle weiße Sterne", t: "Verbrechen gemeldet, aber keine Beschreibung. Schnell weg, bevor die Polizei da ist." },
  { id: "weiss", n: "Volle weiße Sterne", t: "Polizei hat dich erkannt und sieht dich. Sichtlinie brechen." },
  { id: "blink", n: "Weiß blinkend", t: "Polizei hat dich verloren und sucht am letzten bekannten Ort. Versteckt bleiben und dich weiter entfernen." },
  { id: "rot", n: "Rote Sterne", t: "Du bist entkommen, aber die Gegend wird mit deiner Beschreibung abgesucht. Hinweise unten löschen, Gegend meiden." }
];
LH.HEAT = [
  { id: "person",  n: "Person",      bed: "Gesicht/Beschreibung bekannt", fix: "Maske, Hut oder Sonnenbrille aufsetzen oder neue Frisur", prio: 3 },
  { id: "kleidung",n: "Kleidung",    bed: "Outfit bekannt", fix: "Komplett umziehen – im Kleidungsladen oder mit dem Ersatz-Outfit aus dem Kofferraum des eigenen Autos", prio: 2 },
  { id: "auto",    n: "Fahrzeug",    bed: "Wagen bekannt", fix: "Auto stehen lassen und ein anderes nehmen (ältere Autos lassen sich kurzschließen)", prio: 1 },
  { id: "waffe",   n: "Waffe",       bed: "Waffe gesehen", fix: "Waffe wegstecken, am besten in den Kofferraum", prio: 4 },
  { id: "cctv",    n: "Kamera",      bed: "Auf Überwachungsvideo", fix: "Aufnahmen löschen – meist am Laptop im Hinterzimmer", prio: 5 },
  { id: "duo",     n: "Duo",         bed: "Polizei sucht ein Paar", fix: "Jason und Lucia trennen (kann sofort eine Stufe senken)", prio: 0 }
];
LH.FAHNDUNG_TIPPS = [
  "Jeder Hinweis wird einzeln gelöscht – ein einziger passender Hinweis reicht, damit ein Polizist dich erkennt.",
  "Tatort wird zur „Hot Area“: Wer mit passender Beschreibung zurückkommt, startet die Jagd neu. Auf der Karte zeigt das Gebiet seine Sternstufe.",
  "Ab 3 Sternen ist Flucht im normalen Auto schwer – schnelles Motorrad oder zu Fuß durch Gassen.",
  "Die Minikarte zeigt keine Polizei und keine Straßensperren – Focus (L3+R3) zeigt Polizisten in der Nähe.",
  "Zu Fuß: in dichten Büschen oder Müllcontainern verstecken verkleinert den Suchradius.",
  "Waffe nur zeigen statt schießen hält die Stufe niedrig.",
  "Vor dem Überfall umziehen, danach Outfit und Auto wechseln, Kamera-Aufnahmen vorher löschen.",
  "Ein Banktresor gibt sofort 4 Sterne. Trophäe „Hot Together“: 4 Sterne gemeinsam mit dem Partner abschütteln."
];

/* ----------------------------------------------------------------- CHEATS */
LH.CHEAT_EINGABE = "Erst nach dem Ende der Story verfügbar (Menü Fortschritt → Cheats). Im freien Spiel Steuerkreuz hoch (Handy), dann L1 + R1 halten (Xbox: LB + RB) und die Folge auf dem Steuerkreuz eingeben. Die Folgen sind auf PS5 und Xbox gleich. Die Quellen beschreiben die Tastenhaltung leicht unterschiedlich.";
LH.CHEAT_WARNUNG = "Ein aktiver Cheat sperrt Trophäen/Erfolge UND das Speichern für die laufende Sitzung. Vorher manuell speichern und am besten einen eigenen Cheat-Spielstand nutzen. Nur im Story-Modus.";
LH.CHEATS = [
  ["Spieler", "$250,000", "Sofort 250.000 $", "↑ → ↓ ← ↑ ← ↓ →", "Story beenden"],
  ["Spieler", "Drunk", "Du und dein Partner seid betrunken", "", "2.500 $ für Alkohol ausgeben"],
  ["Spieler", "Raise Heat Level", "Heat auf der ganzen Karte erhöhen", "← ↓ → ↓ ↑ ↓ ↑", "25-mal 3 Sterne abschütteln"],
  ["Spieler", "Raise Wanted Level", "Fahndungsstufe erhöhen", "← ↓ → ↓ ↑ → ↑", "50-mal 3 Sterne abschütteln"],
  ["Spieler", "Unlimited Focus", "Focus läuft nie aus", "↓ ↑ ↑ ↓ ↑ ↓ ↑ ↓ ↑ →", "Story beenden"],
  ["Spieler", "No Fall Damage", "Kein Fallschaden", "", "20-mal 40 ft freien Fall überleben"],
  ["Spieler", "Parachute", "Fallschirm ins Inventar", "", "50 Fallschirm-/BASE-Sprünge ab 300 ft"],
  ["Spieler", "Body Armor", "Schutzweste", "↓ ↑ ← ↑ ↑ ↑ ↑ ↑ ↓ ↓", "100 Workouts"],
  ["Spieler", "Repair Vehicle", "Fahrzeug komplett reparieren", "", "10 Siege auf Gellhorn Raceway, Thrillbilly Mud Club und Boone Speedway"],
  ["Spieler", "Unlimited Nitrous", "Nitro und Sprit gehen nie aus", "", "50 Stuntsprünge"],
  ["Kampf", "Max Ammo", "Alle Munition voll", "↓ ↑ → ↓ ← ← ↑ ↑ ↓ ←", "25 Bronze-Medaillen (oder besser) am Schießstand"],
  ["Kampf", "Infinite Ammo", "Unendlich Munition", "↓ ↑ → ↓ ← ← ↑ ↓ ↓ ↓", "25 Silber-Medaillen (oder besser) am Schießstand"],
  ["Kampf", "No Reload", "Unendlich Munition ohne Nachladen", "↓ ↑ → ↓ ← ← ↑ ↓ ↓ ↑", "25 Gold-Medaillen am Schießstand"],
  ["Kampf", "All Explosive Weapons", "Alle Sprengwaffen mit voller Munition", "", "100 Granaten werfen"],
  ["Kampf", "Incendiary Ammo", "Brandmunition", "", "100 Gegner mit Feuer verbrennen"],
  ["Kampf", "Exploding Bottles", "Flaschen explodieren", "", "100 Molotows werfen"],
  ["Kampf", "Explosive Shotgun", "Mason & Keen Shortstraw mit Sprenggeschossen", "", "100 Gegner mit Explosionsschaden treffen"],
  ["Kampf", "Hauners H-AT", "Hauners H-AT ins Inventar", "", "100 Fahrzeuge sprengen"],
  ["Kampf", "Attack Force", "Treffer schleudern Ziele weg", "↓ ↑ ← ← → ↓ ↓ ↑ ↓", "Story beenden"],
  ["Kampf", "Exploding Balls", "Sportbälle explodieren beim Aufprall", "↓ ↑ ← ← → ↓ ↓ ↑ →", "20 Gegner mit Explosionsschaden treffen"],
  ["Kampf", "Vehicle Force", "Zusammenstöße schleudern Ziele weg", "↓ ↑ ← ← → ↓ ← ↑ ↓", "25 Gegner mit einem Fahrzeug töten"],
  ["Fahrzeug", "Interstate Ambulance", "Krankenwagen", "", "Im Fortschrittsmenü entdecken"],
  ["Fahrzeug", "Airboat 09", "Sumpfboot", "", "5 Überlebens-Herausforderungen"],
  ["Fahrzeug", "Bravado Banshee", "Sportwagen", "", "Alle Kampf-Herausforderungen"],
  ["Fahrzeug", "Tuff BMX", "BMX", "", "5 Fitness-Herausforderungen"],
  ["Fahrzeug", "Maibatsu Boomazoom", "Fahrzeug", "← ↑ → ↓ ← ← ↑ ←", "5 Shopping-Herausforderungen"],
  ["Fahrzeug", "Nagasaki Carbon RS", "Motorrad", "", "Alle Erkundungs-Herausforderungen"],
  ["Fahrzeug", "'65 Vapid Dominator", "Muscle-Car", "", "Alle Fitness-Herausforderungen"],
  ["Fahrzeug", "Progen Emerus", "Supersportwagen", "", "Alle Fahrzeug-Herausforderungen"],
  ["Fahrzeug", "Inflatable Flamingo", "Aufblasbarer Flamingo", "", "50 Kokain-Flamingos zerstören"],
  ["Fahrzeug", "MTL Pumper", "Feuerwehrwagen", "← ↑ → ↓ ← → → ↑", "Im Fortschrittsmenü entdecken"],
  ["Fahrzeug", "Vapid Stanier G2 Taxi", "Taxi", "", "5 Sport-Herausforderungen"],
  ["Fahrzeug", "Hauners P-996 Lazer", "Kampfjet", "", "Alle Herausforderungen"],
  ["Fahrzeug", "HVY Bulldozer", "Bulldozer", "← ↑ → ↓ ← → → ↓", "Im Fortschrittsmenü entdecken"],
  ["Fahrzeug", "Lapwing Mallard", "Flugzeug", "", "5 Fahrzeug-Herausforderungen"],
  ["Fahrzeug", "Brimstone Golfer", "Golfwagen", "", "Alle Sport-Herausforderungen"],
  ["Fahrzeug", "Hauners Rhino Tank", "Panzer", "", "Alle Überlebens-Herausforderungen"],
  ["Fahrzeug", "Maibatsu Sanchez", "Geländemotorrad", "", "5 Kriminal-Herausforderungen"],
  ["Fahrzeug", "Nagasaki Sea Sparrow", "Hubschrauber", "", "5 Erkundungs-Herausforderungen"],
  ["Fahrzeug", "Speeder 700 GT", "Boot", "", "5 Kampf-Herausforderungen"],
  ["Fahrzeug", "Truffade Thrax", "Supersportwagen", "", "Alle Shopping-Herausforderungen"],
  ["Fahrzeug", "Western Zombie Bobber", "Motorrad", "", "Alle Kriminal-Herausforderungen"],
  ["Umgebung", "Move Time Forward", "Uhrzeit vorstellen", "", "10 Sammler-Uhren finden"],
  ["Umgebung", "Pause Time of Day", "Uhrzeit anhalten", "", "20 Sammler-Uhren finden"],
  ["Umgebung", "Cycle Weather", "Wetter durchschalten", "↓ → ↑ ↓ → ↑ →", "Story beenden"],
  ["Filter", "Golden Hour", "Goldfilter, Breitbild", "", "4 Stunden Händchen halten"],
  ["Filter", "Powdered Sugar", "Welt weiß mit Glitzer", "", "Allen Weltraumschrott mit WAiNK scannen"],
  ["Filter", "Pinhole", "Lochkamera", "", "25 Gang-Operationen mit Partner"],
  ["Filter", "Neon Jungle", "Neon-Highlights", "", "Alle 16 Girlypop-Fahrzeuge entdecken"],
  ["Filter", "Yesteryear", "Schwarz-Weiß-Röhrenfernseher", "", "Den Ridgway entdecken"],
  ["Filter", "Cataclysm", "Trüber Rauch", "↓ ↓ ↑ → → ↑ ← ← → →", "Marthas Vamos im Fortschrittsmenü entdecken"],
  ["Filter", "Videotape", "Videokassetten-Look", "", "50 Aktivitäten mit Partner"],
  ["Filter", "Dark Mirror", "Welt kopfüber und schwarz", "", "500.000 $ mit Fahrzeugverkäufen"],
  ["Filter", "Migraine", "Verschwommen, verzerrt", "", "6 Minuten mit 6 Sternen überleben"],
  ["Filter", "Dollhouse", "Knallige Farben, schmales Bild", "↓ ↓ ↑ → → ↑ ← ← ↓ →", "8 Stunden mit Partner verbringen"],
  ["Filter", "Bubblegum", "Lila und Gelb mit Glitzer", "", "Alle 24 Karten des Sets „Vice City Flamingos“"],
  ["Filter", "Fast Forward", "Bewegungsunschärfe, schnelle Wolken", "", "50 Meditationen"],
  ["Filter", "Fisheye", "Fischaugen-Filter", "", "100 Fische fangen"],
  ["Filter", "Faded Glory", "Farb-Röhrenfernseher", "↓ ↓ ↑ → → ↑ ← ← ← →", "50 Läden mit Partner ausrauben"],
  ["Filter", "Pixel Art", "Verpixelt", "", "250.000 $ mit Sammelobjekten verdienen"],
  ["Filter", "Hellscape", "Rot-orange mit Hitzeflimmern", "", "100 Polizeifahrzeuge stehlen"]
];

/* -------------------------------------------------------------- TROPHÄEN */
/* [id, Name, Stufe P/G/S/B, Beschreibung, story(spoiler)?, verpassbar?] */
LH.TROPHAEEN = [
  ["t01", "Vice Got a Price!", "P", "Alle anderen Trophäen", 0, 0],
  ["t02", "Just Like Paradise", "B", "Mission „Gone Fishing“ abschließen", 1, 0],
  ["t03", "Paradise Lost", "B", "Kapitel 1 abschließen", 1, 0],
  ["t04", "Tits Ass Drug Money", "B", "Kapitel 2 abschließen", 1, 0],
  ["t05", "Vice City, Baby!", "B", "Kapitel 3 abschließen", 1, 0],
  ["t06", "Top of the World, Ma", "B", "Kapitel 4 abschließen", 1, 0],
  ["t07", "You Gotta Know When to Get Off", "G", "Letzte Mission abschließen", 1, 0],
  ["t08", "Trust", "B", "Mission „Breakfast Run“ abschließen", 1, 0],
  ["t09", "Break the Bank", "B", "Mission „The Cartel Heist“ abschließen", 1, 0],
  ["t10", "Family Matters", "B", "Mission „Child's Play“ abschließen", 1, 0],
  ["t11", "DWNFALL", "B", "Mission „Headliners“ abschließen", 1, 0],
  ["t12", "Hi-Jacked", "B", "Mission „VCIA Takedown“ abschließen", 1, 0],
  ["t13", "Snow Storm", "B", "Mission „Operation Savage Glory“ abschließen", 1, 0],
  ["t14", "Strangers & Freaks", "S", "8 Strangers-&-Freaks-Stränge abschließen", 0, 0],
  ["t15", "Road to Rehabilitation", "B", "Andys letzte Mission", 0, 0],
  ["t16", "This Was No Boat Accident", "B", "Kentons letzte Mission", 0, 0],
  ["t17", "The Lone Rider", "B", "Billys letzte Mission", 0, 0],
  ["t18", "Supply & Demand", "B", "Randys letzte Mission", 0, 0],
  ["t19", "Spin On This!", "B", "Tyrones letzte Mission", 0, 0],
  ["t20", "Fair Game", "B", "Ein einzigartiges Tier für Bret jagen", 0, 0],
  ["t21", "Cunning Stunts", "S", "250 Stunts", 0, 0],
  ["t22", "The Shootist", "S", "Gold in jeder Schießstand-Herausforderung", 0, 0],
  ["t23", "Master of None", "B", "Jede Aktivitätsart einmal ausprobieren", 0, 0],
  ["t24", "Top Fun", "B", "An jedem Ort ein Top-Fun-Drohnenrennen gewinnen", 0, 0],
  ["t25", "Earn Cash, Not Kudos", "B", "20 verschiedene Rennen gewinnen", 0, 0],
  ["t26", "Baited My Tackle", "B", "Cal in einer Angel-Herausforderung schlagen", 0, 0],
  ["t27", "Stick Fiddler", "B", "Ein Arcade-Spiel durchspielen", 0, 0],
  ["t28", "Positive Mental Attitude", "B", "An jedem Meditationsplatz meditieren – der Balkon in Kapitel 1 ist verpassbar", 0, 1],
  ["t29", "Let's Go Bowling", "B", "Follow-Through auf der Bowlingbahn von Kolt & Associates", 0, 0],
  ["t30", "A Long Road", "G", "100 % Spielfortschritt", 0, 0],
  ["t31", "Don't Touch My Deck", "S", "3 Sammelkarten-Sets komplett", 0, 0],
  ["t32", "You WAiNKer!", "S", "100 WAiNK-Orte (Scans/Graffiti)", 0, 0],
  ["t33", "One Last Thing", "B", "50 Herausforderungen", 0, 0],
  ["t34", "Whip it Good", "B", "100 Fahrzeuge entdecken", 0, 0],
  ["t35", "The Goodtime State", "B", "Ganz Leonida erkunden", 0, 0],
  ["t36", "In The Beginning", "B", "Einen Cocktail mit Meerblick an einem Strand genießen", 0, 0],
  ["t37", "Maximum Withdrawal", "S", "5 Banktresore ausrauben und entkommen", 0, 0],
  ["t38", "Hot Together", "B", "4 Sterne gemeinsam mit dem Partner abschütteln", 0, 0],
  ["t39", "Retail Therapy", "B", "3 Läden hintereinander mit Partner ausrauben, ohne die Fahndung zu verlieren", 0, 0],
  ["t40", "Sneakthief", "B", "Juwelier unentdeckt ausrauben", 0, 0],
  ["t41", "A Classic Blitz Play", "B", "Geldtransporter ausrauben und entkommen", 0, 0],
  ["t42", "Pest Control", "B", "Eine Illegal Operation jeder Gang ausrauben", 0, 0],
  ["t43", "Capital Offense", "B", "Aus einem Autohaus-Schaufenster ausbrechen", 0, 0],
  ["t44", "Dime on the Dollar", "B", "250.000 $ markierte Scheine waschen", 0, 0],
  ["t45", "Gunslinger", "B", "5 Gegner mit einer Combat-Focus-Nutzung ausschalten", 0, 0],
  ["t46", "Ten Pin", "B", "Gegner mit einem Nahkampf-Drive-by umwerfen", 0, 0],
  ["t47", "Catch Me If You Can", "B", "Ein Flugzeug am VCIA stehlen und starten", 0, 0],
  ["t48", "Actions Speak Louder Than Words", "B", "Entscheidungen mit Folgen treffen", 0, 0],
  ["t49", "Challenging Tank", "B", "Laut GameTrek: den Rhino-Panzer auf der Mile Zero Air Station stehlen", 0, 0],
  ["t50", "Personal Best", "B", "Auslöser unbestätigt („A partnership with mass appeal“)", 0, 0],
  ["t51", "Bad Luck, I Guess", "B", "Auslöser unbestätigt („Second time's the charm“)", 0, 0],
  ["t52", "The Truth Is Out There", "B", "UFO-Entführung nachts bei Port Gellhorn (siehe Karte)", 0, 0],
  ["t53", "Treat Yo Self", "B", "100.000 $ in Läden ausgeben", 0, 0],
  ["t54", "Little Boxes", "B", "Jede Garagen-Immobilie kaufen", 0, 0],
  ["t55", "On the Spot", "B", "10 Fahrzeuge in der Scooter-Bros-App registrieren", 0, 0]
];
LH.TROPHAEEN_INFO = "55 Trophäen (1 Platin, 2 Gold, 6 Silber, 46 Bronze), alle offline. Schwierigkeit laut PowerPyx 4/10, ca. 200 Stunden. Die Liste ist inoffiziell, mehrere Seiten haben dieselben Namen.";

/* ------------------------------------------------------- TIPPS & GLITCHES */
LH.VERPASSBAR = [
  { n: "Balkon-Meditation (Trophäe „Positive Mental Attitude“)", t: "Nach „Down to Earth“ sofort Lucia auf den Balkon folgen.", at: "medi-1" },
  { n: "Jasons 4 Hausreparaturen", t: "Vor „Coming Home“ erledigen – sie geben eine bessere Start-Beziehung und verschwinden danach." },
  { n: "Donnie's H&L .38", t: "In „Don Gone“ den Kofferraum öffnen, bevor du das Auto zerstörst.", at: "donnie-38" },
  { n: "2 Sammelkarten im Starlet Motel", t: "Küche und Büro nur bis Ende Kapitel 2.", at: "starlet" },
  { n: "Bargeld aus Kapitel 1", t: "Wird am Kapitelende gelöscht – in die Family Savings stecken oder ausgeben.", at: "jason-haus" },
  { n: "Papagei-Geld bei Three Sheets Liquor", t: "Kann verpasst werden.", at: "papagei" }
];
LH.TIPPS = [
  ["Geld", "Vor BuckMe Bargeld unter den Dielen in Jasons Schlafzimmer verstecken, danach nach jeder Mission zur Bank."],
  ["Geld", "Scooter Bros Premium (12.500 $) gibt drei kostenlose Fahrzeuglieferungen pro Tag und rechnet sich schnell."],
  ["Geld", "Lieber ein zuverlässiges Startauto registrieren als mehrere schwache."],
  ["Kampf", "Früh einen Schalldämpfer für die Pistole bei Ammu-Nation kaufen."],
  ["Kampf", "Focus (L3 + R3) markiert Gegner, Gegenstände, Verstecktes und Geräusche – auch unter Wasser."],
  ["Kampf", "Von hinten packen schaltet Gegner ohne Tötung aus. Das Jagdmesser erlaubt tödliche Schleichangriffe. Ein gelbes X bestätigt das Ausschalten."],
  ["Kampf", "Beim Fahren Quadrat/X: Autotür aufstoßen – hilft gegen Biker und Leute, die dich aus dem Auto ziehen wollen."],
  ["Kampf", "Zu Fuß trägst du nur wenige Waffen – den Rest im Kofferraum lagern und vor Missionen tauschen."],
  ["Fahrzeug", "Autos mit gelbem Tracker melden sich nach einer Weile bei der Polizei – vorher zum Pay 'n' Spray oder Scooter Bros rufen."],
  ["Fahrzeug", "Luxusautos brauchen geklonte Schlüssel (Key Cloner, Kapitel 3). Ältere Autos lassen sich kurzschließen."],
  ["Fahrzeug", "In ein liegengebliebenes Auto laufen schiebt es, Quadrat/X gedrückt halten schiebt schneller."],
  ["Welt", "Türen hinten in Läden führen oft zu versteckten Räumen oder Treppen."],
  ["Welt", "Manche Läden, Aktivitäten und Begegnungen gibt es nur zu bestimmten Uhrzeiten. Drogendeals laufen nachts."],
  ["Welt", "Regen senkt Grip und Sicht."],
  ["Beziehung", "R2/RT in Lucias Nähe gedrückt halten (Händchen halten) baut die Beziehung kostenlos auf."],
  ["Beziehung", "Stripclubs ohne Partner schwächen die Beziehung, gemeinsam gibt es keinen Malus."],
  ["Angeln", "Angeln geht sofort ab Spielbeginn am Steg in Key Lento – aber nur Fangen und Freilassen, es bringt kein Geld."]
];
LH.GLITCHES = [
  { n: "Rote Scheune: Speichern-und-Laden-Schleife", q: "e", src: ["gr"], at: "red-barn",
    t: "Ware in der roten Scheune östlich von Hamlet einpacken, im Auto lagern, speichern und laden – die Ware liegt wieder da. Verkauf bei Brian (7700). Laut Game Rant ca. 8.000 $ pro 5 Minuten. Manchmal muss man ein paar Spieltage warten oder öfter laden." },
  { n: "Ladenüberfälle zurücksetzen (ab Marbles)", q: "e", src: ["gtg"],
    t: "Ein paar Läden am Spielanfang ausrauben, dann per Missions-Reset die Läden wieder mit Geld füllen und wiederholen. Nur eine Quelle, Schritte nicht geprüft." }
];
LH.GLITCH_WARNUNG = "Laut games.gg gibt es noch keinen geprüften Geld-Glitch mit reproduzierbaren Schritten. Glitches können jederzeit per Patch verschwinden. „Money Generator“-Seiten sind Betrug.";

/* ------------------------------------------------------- JAGD & ANGELN */
LH.ANGELN = [
  "Nur Fangen und Freilassen – Fische lassen sich nicht behalten oder verkaufen.",
  "Sofort ab Spielbeginn möglich, zum Beispiel am Steg in Key Lento.",
  "Trophäe „Baited My Tackle“: Cal in einer Angel-Herausforderung schlagen.",
  "100 Fische fangen schaltet den Filter-Cheat „Fisheye“ frei."
];
LH.JAGD_INFO = [
  "Geld bringt nur die Jagd: Tiere erlegen und verkaufen. Wo und für wie viel, nennen die Quellen noch nicht.",
  "Freischaltung über Bret Vogel: Mission „Veteran Hunted“ (Kapitel 2, Lummox County, nur als Jason).",
  "Kleine Tiere mit schwachen Waffen jagen, damit der Kadaver nicht beschädigt wird. Alligatoren, Bären und Wildschweine aus Distanz.",
  "Trophäe „Fair Game“: ein einzigartiges Tier für Bret jagen."
];
/* [Tier, Lebensraum, Waffe, selten?] */
LH.TIERE = [
  ["Amerikanischer Alligator", "Feuchtgebiet", "Shrewsbury SM-69", 0],
  ["Amerikanischer Schwarzbär", "Wald, Feuchtgebiet", "Shrewsbury SM-69", 0],
  ["Spitzkrokodil", "Küste", "Shrewsbury SM-69", 0],
  ["Rotfuchs", "Wald", "Hawk & Little Mediator", 0],
  ["Blauer Axanthic-Leguan", "Küste, Stadt", "Wortham W-22", 1],
  ["Dosenschildkröte", "Küste, Wald, Stadt", "Wortham W-22", 0],
  ["Aga-Kröte", "Küste", "Wortham W-22", 0],
  ["Florida-Waldkaninchen", "Wald, Feuchtgebiet", "Wortham W-22", 0],
  ["Diamant-Klapperschlange", "Küste, Wald", "Wortham W-22", 0],
  ["Grauhörnchen", "Küste, Wald, Stadt, Feuchtgebiet", "Wortham W-22", 0],
  ["Fleckenskunk", "Wald, Stadt, Feuchtgebiet", "Wortham W-22", 0],
  ["Graufuchs", "Wald", "Hawk & Little Mediator", 0],
  ["Grüner Leguan", "Küste, Stadt", "Wortham W-22", 0],
  ["Leonida-Rotluchs", "Wald, Feuchtgebiet", "Hawk & Little Mediator", 0],
  ["Leonida-Wassermokassinotter", "Küste", "Wortham W-22", 0],
  ["Leonida-Truthahn", "Wald, Feuchtgebiet", "Wortham W-22", 0],
  ["Leonida-Truthahn (weiß)", "Wald, Feuchtgebiet", "Wortham W-22", 1],
  ["Mosaik-Floridaente", "Feuchtgebiet", "Wortham W-22", 1],
  ["Floridaente", "Feuchtgebiet", "Wortham W-22", 0],
  ["Nilwaran", "Feuchtgebiet", "Wortham W-22", 0],
  ["Neunbinden-Gürteltier", "Wald", "Wortham W-22", 0],
  ["Kojote", "Wald, Feuchtgebiet", "Hawk & Little Mediator", 0],
  ["Nutria", "Feuchtgebiet", "Wortham W-22", 0],
  ["Gescheckter Weißwedelhirsch", "Wald, Feuchtgebiet", "Shrewsbury SM-69", 1],
  ["Rundschwanz-Bisamratte", "laut Quelle „Westland“", "Wortham W-22", 0],
  ["Schnappschildkröte", "Feuchtgebiet", "Wortham W-22", 0],
  ["Weißer Flussotter", "Feuchtgebiet", "Wortham W-22", 1],
  ["Weißwedelhirsch", "Feuchtgebiet", "Wortham W-22", 0],
  ["Wildschwein", "Wald", "Shrewsbury SM-69", 0]
];

/* ------------------------------------------------- Gebietsnamen auf der Karte */
/* [Name, x, y, ab Zoomstufe] – Lage aus den gtadb-Orten gemittelt */
LH.GEBIETE = [
  ["Vice City", -900, 250, 0], ["Vice Beach", 1650, 1400, 1], ["Port Gellhorn", -6450, 3800, 0], ["Ambrosia", -2750, 4150, 1],
  ["Mount Kalaga", -3430, 6550, 0], ["Leonida Keys", -3600, -6500, 0], ["Grassrivers", -3100, -4250, 1], ["Hamlet", -2687, -3251, 1],
  ["Watson Bay", -5028, -3327, 2], ["Capri", -6873, 273, 1], ["Belville", -1439, 2930, 2], ["Waning Sands", 48, 4037, 2],
  ["Millport", -900, 6450, 2], ["Key Lento", -2366, -5793, 1], ["Big Pine", -5333, -1600, 2], ["Buckskin", -4133, 1000, 2],
  ["Manifest Canyon", -4990, 5250, 2], ["Moreau", -3885, 7907, 2], ["Yorktown", -5613, 6887, 2], ["Sundown", -650, 4330, 3],
  ["VCIA (Flughafen)", -2400, -650, 2], ["Port Vice City", 450, -450, 3], ["Rialto Islands", 509, 1250, 3], ["Starfish Island", 799, 474, 3],
  ["Dalton Island", 1717, -1368, 3], ["Gloriana Key", 572, -1479, 3], ["Catalan Key", -201, -1882, 3], ["Riquezas Keys", -8083, -5419, 2],
  ["Goose Key", -6584, -6403, 2], ["Abismo Key", -5127, -7328, 2], ["Corsair Key", -1254, -4533, 2],
  ["Downtown", -634, -147, 3], ["Little Cuba", -1197, 66, 3], ["La Perle", -943, 1486, 3], ["Crosstown", -646, 1176, 4],
  ["Rockridge", -1245, 814, 3], ["Salton", -1418, -556, 3], ["Tequesta", -899, -1124, 3], ["Peacock Bay", -1197, -1888, 3],
  ["Southside", -1773, -2057, 3], ["Balsero", -1791, 610, 3], ["Ocean Beach", 1730, 737, 3], ["Washington Beach", 1779, 2186, 3],
  ["Stockyard", -352, 1792, 4], ["Bayside", -357, 994, 4], ["Leaf Links", 381, 2421, 4], ["Shoreline", -253, 137, 4]
];


/* =====================================================================
   ERGÄNZUNG 20.11.2026 nachmittags
   ===================================================================== */
LH.ORTE.push(
  /* Trophäen-Orte */
  { id: "rhino", k: "aktiv", typ: "Trophäen-Ort", n: "Rhino-Panzer (Trophäe „Challenging Tank“)", r: "Mile Zero Air Station, Goose Key", p: [-6956, -6403], g: 1, q: "e", src: ["gmpl", "gtadb"], t: "Den Rhino auf der Mile Zero Air Station stehlen." },
  { id: "vcia-flug", k: "aktiv", typ: "Trophäen-Ort", n: "Flugzeug am VCIA stehlen (Trophäe „Catch Me If You Can“)", r: "Vice City International Airport", p: [-2373, -774], g: 1, q: "e", src: ["gmpl", "tn"], t: "Ein Flugzeug am Flughafen stehlen und abheben." },

  /* Pay 'n' Spray (19 laut PowerPyx; Lage = Gebiet) */
  { id: "pns-1",  k: "spray", n: "Pay 'n' Spray – Southwind", r: "Mariana County", p: [-6390, -6450], g: 1, q: "e", src: ["pps"] },
  { id: "pns-2",  k: "spray", n: "Pay 'n' Spray – Key Lento", r: "Mariana County", p: [-2420, -5720], g: 1, q: "e", src: ["pps"] },
  { id: "pns-3",  k: "spray", n: "Pay 'n' Spray – Watson Bay", r: "Mariana County", p: [-5080, -3260], g: 1, q: "e", src: ["pps"] },
  { id: "pns-4",  k: "spray", n: "Pay 'n' Spray – Grassrivers", r: "Mariana County", p: [-2700, -4700], g: 0, q: "e", src: ["pps"] },
  { id: "pns-5",  k: "spray", n: "Pay 'n' Spray – Hamlet", r: "Vice-Dale County", p: [-2560, -3420], g: 1, q: "e", src: ["pps"] },
  { id: "pns-6",  k: "spray", n: "Pay 'n' Spray – Salton", r: "Vice-Dale County", p: [-1450, -600], g: 1, q: "e", src: ["pps"] },
  { id: "pns-7",  k: "spray", n: "Pay 'n' Spray – West-Vice-Dale", r: "Vice-Dale County", g: 0, q: "e", src: ["pps"] },
  { id: "pns-8",  k: "spray", n: "Pay 'n' Spray – Downtown", r: "Vice-Dale County", p: [-600, -120], g: 1, q: "e", src: ["pps"] },
  { id: "pns-9",  k: "spray", n: "Pay 'n' Spray – Balsero", r: "Vice-Dale County", p: [-1760, 560], g: 1, q: "e", src: ["pps"] },
  { id: "pns-10", k: "spray", n: "Pay 'n' Spray – La Perle", at: "paynspray-laperle", r: "Vice-Dale County", q: "m", src: ["pps", "pp"] },
  { id: "pns-11", k: "spray", n: "Pay 'n' Spray – Stockyard", r: "Vice-Dale County", p: [-330, 1760], g: 1, q: "e", src: ["pps"] },
  { id: "pns-12", k: "spray", n: "Pay 'n' Spray – Waxman Island", r: "Vice-Dale County", g: 0, q: "e", src: ["pps"] },
  { id: "pns-13", k: "spray", n: "Pay 'n' Spray – Ocean Beach", r: "Vice-Dale County", p: [1700, 800], g: 1, q: "e", src: ["pps"] },
  { id: "pns-14", k: "spray", n: "Pay 'n' Spray – Washington Beach", r: "Vice-Dale County", p: [1760, 2150], g: 1, q: "e", src: ["pps"] },
  { id: "pns-15", k: "spray", n: "Pay 'n' Spray – Waning Sands", r: "Leonard County", p: [80, 4000], g: 1, q: "e", src: ["pps"] },
  { id: "pns-16", k: "spray", n: "Pay 'n' Spray – Port Gellhorn", r: "Kelly County", p: [-6400, 3880], g: 1, q: "e", src: ["pps"] },
  { id: "pns-17", k: "spray", n: "Pay 'n' Spray – Ambrosia", r: "Kelly County", p: [-2660, 4220], g: 1, q: "e", src: ["pps"] },
  { id: "pns-18", k: "spray", n: "Pay 'n' Spray – Grayson", r: "Lummox County", g: 0, q: "e", src: ["pps"] },
  { id: "pns-19", k: "spray", n: "Pay 'n' Spray – Millport", r: "Lummox County", p: [-880, 6400], g: 1, q: "e", src: ["pps"] }
);

/* 39 Gang-Operationen (Reihenfolge wie im Spielmenü laut PowerPyx). Ort nur, wo eine Quelle ihn nennt. */
(function () {
  const G = [
    ["Fishing Shacks", "Kingfishers", "kingfisher-op"], ["Sunrise RV Park", "Kingfishers", "sunrise-rv"], ["Manatee Motel", "Kingfishers"],
    ["Kingpin Bowling", "Kolts & Associates", "kingpin"], ["June Warehouse", "Kolts & Associates"], ["La Cascara Motel", "Kolts & Associates", null, "Port Gellhorn · Tresor 6969"],
    ["Brooks Boatworks", "Kolts & Associates", "clunker"], ["Stash House", "Kolts & Associates"], ["M7 Compound", "M7"], ["Weed Grow", "M7"],
    ["Palmer Fishing Warehouse", "La Polilla Negra", "polilla-kz"], ["Watson Bay Safehouse", "La Polilla Negra", "polilla-vfg1"],
    ["Farm Fix Meth Lab", "Final Chapter MC", null, "Ambrosia County"], ["Biker Hideout", "Final Chapter MC"], ["Hog Stars Garage", "Final Chapter MC"], ["Irons Building Supply", "Final Chapter MC", null, "Ambrosia County"],
    ["Sound4Sound Studio", "San4San", null, "Vice City"], ["La Perle Trap House", "San4San", null, "Vice City, La Perle", [-980, 1440]], ["Illegal Sneaker Trade", "San4San"], ["JanJak's Garage", "San4San", null, "Vice City"], ["Parlor Apartments", "San4San"],
    ["Southside Trap House", "PTT Youngin$", null, "Vice City, Southside", [-1760, -2100]], ["Kamar Devon Community Center", "PTT Youngin$"],
    ["Saber Shipping Yard", "Guardia Brothers", null, "Tresor 8046"], ["Casa Guardia", "Guardia Brothers"], ["Saber Shipping Facility", "Guardia Brothers", null, "Tresor 1965"],
    ["Exotic Animals Front", "Andere"], ["Mill Station Radar Base", "Andere"], ["Industrial Weed Grow", "Andere"], ["Slator Towing Inc", "Andere"],
    ["Leonida Carrier Warehouse", "Andere", "grx"], ["Cigar Import Front", "Andere"], ["Chatfield Storage & Logistics", "Andere"],
    ["Ocean Beach Lab", "Andere", null, "Vice Beach, Ocean Beach", [1760, 690]], ["Vespucci Mansion", "Andere"], ["Gas Station Meth Front", "Andere"],
    ["Walker Farm", "Andere"], ["Backroom Weed Front", "Andere"], ["Carter Mining Boathouse", "Andere"]
  ];
  G.forEach(([n, gang, at, r, p], i) => {
    const o = { id: "gang-" + (i + 1), k: "gang", n: `${i + 1} · ${n}`, r: `${gang}${r ? " · " + r : ""}`, q: "m", src: ["ppg", "gmg"],
      t: "Alle wertvollen Sachen mitnehmen (Waffen, Uhren, Tresorgeld), sonst zählt der Ort nicht. Einmal ausgeräumt, kommt nichts wieder." };
    if (at) o.at = at;
    if (p) { o.p = p; o.g = 1; }
    LH.ORTE.push(o);
  });
})();

/* ---------------------------------------------------------- AUTOS & LAGER */
LH.AUTOS = [
  { titel: "Moses (ab Kapitel 2)", text: "Autos ohne Tracker, ca. 1.000–2.000 $ pro Auto, etwa 2 Minuten Pause zwischen zwei Verkäufen. Nicht direkt neben der Werkstatt klauen. Über Moses gibt es auch den Slim Jim (öffnet Autotüren leise) und die Scooter-Bros-App.", at: "moses", q: "m", src: ["mf", "olg", "gmsg", "gmsf"] },
  { titel: "Pay 'n' Spray (ab Kapitel 3)", text: "Autos mit Standard-Tracker an jedem der 19 Pay 'n' Sprays verkaufen, ca. 4.000 $ pro gutem Auto. Gelbe Tracker melden das Auto nach einer Weile der Polizei – vorher hinfahren.", q: "m", src: ["mf", "pps", "gm"] },
  { titel: "Randys Wunschliste (Kapitel 3)", text: "Start mit 16 Sportwagen, laut manchen Quellen bis 22. Freigeschaltet über „Clonin' Keys, Makin' GS“ (Key Cloner, Zorrusso für Randy). In perfektem Zustand liefern, ca. 30.000 $+ pro Auto. Reihenfolge egal, mehrere gleichzeitig möglich. Neue Autos erscheinen nach Lieferungen. Weitere Fundorte per SMS an Randy (Handy → Erinnerungen). Trophäe „Supply & Demand“.", q: "m", src: ["mf", "gmr"] },
  { titel: "Nicht registrieren, was du liefern willst", text: "Ein registriertes eigenes Auto zählt zwar, aber du verlierst es. Für Lieferungen immer frische Autos stehlen.", q: "e", src: ["gmr"] },
  { titel: "Scooter Bros", text: "Autos registrieren (Trophäe „On the Spot“: 10 Fahrzeuge). Premium für 12.500 $ bringt 3 kostenlose Lieferungen pro Tag.", q: "m", src: ["gm", "tn"] },
  { titel: "Fürs 100 %", text: "Fahrzeuge im Wert von 200.000 $ an Hehler verkaufen. 500.000 $ aus Fahrzeugverkäufen schalten den Filter-Cheat „Dark Mirror“ frei.", q: "e", src: ["gm100", "rb"] }
];
LH.LAGER = [
  { titel: "Jasons Safehouse", text: "Peach Palm Drive, Key Lento. Kostenlos ab Spielstart, mit Garage. Bett zum Speichern und Zeit vorspulen, Kleiderschrank, Startpunkt beim Figurenwechsel.", at: "jason-haus", q: "e", src: ["gmp"] },
  { titel: "Weitere Safehouses", text: "In Port Gellhorn und Vice City, kostenlos im Laufe der Story. Safehouses kann man nicht kaufen.", q: "e", src: ["gmp"] },
  { titel: "8 kaufbare Garagen", text: "Je 2–6 Stellplätze, für Jason und Lucia gemeinsam. Bezahlt wird über BuckMe. Kein Einkommen. Alle kaufen = Trophäe „Little Boxes“. GameTrek empfiehlt eine Garage in Vice City ab Kapitel 3. Einzelne Namen und Preise nennt die Quelle noch nicht.", q: "e", src: ["gmp", "tn"] },
  { titel: "4 kostenlose Story-Garagen", text: "Kommen mit dem Story-Fortschritt.", q: "e", src: ["gmp"] },
  { titel: "Firmen", text: "Laut GameTrek gibt es zum Start keine kaufbaren Firmen mit Einnahmen.", q: "e", src: ["gmp"] },
  { titel: "Werkzeuge", text: "Slim Jim (Kapitel 2, Moses): Autotüren leise öffnen. Snap Gun (Kapitel 3, von Yasmani nach „Dubious Provenance“): alarmgesicherte Türen leise öffnen – linker Stick auf den Sweet Spot, R2/RT halten. Key Cloner (Kapitel 3): Luxusautos.", q: "e", src: ["gmsg", "gmr"] }
];

/* ---------------------------------------------------------- MISSIONEN */
LH.MISSIONEN_INFO = {
  de: "Alle Story-Missionen in Spielreihenfolge (GameTrek/PowerPyx), inkl. optionaler Aufgaben. Der Name in Klammern ist der Kartenmarker im Spiel. Antippen öffnet Start, Belohnung und Tricks. Andere Quellen zählen 91 Pflichtmissionen; „Pay Abe's Fee“ steht in Kapitel 4 und 5.",
  en: "All story missions in game order (GameTrek/PowerPyx), including optional tasks. The name in brackets is the in-game map marker. Tap a mission for start, reward and tricks. Other sources count 91 required missions; “Pay Abe's Fee” is listed in chapters 4 and 5."
};
/* [Kapitel, Name, Kartenmarker, Figur (J/L/–), optional?] */
LH.MISSIONEN = [];
(function () {
  const K = {
    0: [["Prologue"]],
    1: [["Gone Fishing"], ["Gear Up", "Pick Up Another Gun"], ["Lab Fees", "Collect Brian's Rent"], ["Just a Scratch", "Fix Your Car"], ["Unwanted Attention", "Go See Cal"], ["Pipework", "Collect Mandy's Rent"],
        ["Get Shirley's Rum", "", "", 1], ["Steal the Scooter", "", "", 1], ["Hey Arnold!", "Meet Brian"], ["Island Dreams", "Work for Kenton"], ["Feng Shui", "Meet Cal"],
        ["Pick up Groceries", "", "", 1], ["Buy Flowers", "", "", 1], ["Buy Lucia a Necklace", "", "", 1], ["Get The Chop", "", "", 1], ["Get Lucia's Clothes", "", "", 1],
        ["Coming Home", "Lucia's Release"], ["Clean Up After Donnie", "Donnie's Drop"], ["Buck Me", "Set Up Bank Account"], ["Down to Earth", "Meet Brian"], ["Deposit Cash Into BuckMe"],
        ["Save for the Future"], ["Find the Lost Drugs", "", "", 1], ["Day Release", "Meet Mattia & Kat"], ["Clock Out", "", "", 1], ["Clear Skies", "Join Donnie On A Job"], ["Building a Life"],
        ["Swamped", "Meet Brian"], ["Don Gone", "Head to Donnie's Trailer"], ["Donnie's Lost Drugs"], ["Recalibration", "Talk to Lucia"], ["Tourist Trap", "Take Up Mattia's Offer"],
        ["Home Sweet Home"], ["Discharge Time"]],
    2: [["What's in the Bag?"], ["Take Care of Jason", "Play Nurse"], ["Overnight Charges", "See Linda, The Manager"], ["Just Moved In"], ["Girl's Trip", "Find Painkillers"],
        ["Pick Up A Gun", "", "", 1], ["Moses", "Take A Vehicle to Moses"], ["New Look"], ["How Do I Look?"], ["Painkiller Supplier"], ["Ambulance Chaser", "Move the Ambulance"],
        ["Check Out McKittrick Farm", "Kyle 1", "", 1], ["Behind on Payments"], ["Slam Dunk", "Find Painkillers"], ["Collect Chemicals for Kyle", "Kyle 2", "", 1],
        ["Daily Driver", "Steal the Crawler for Moses"], ["Breakfast Run", "Check on Jason"], ["Coffee Break"], ["Thrillbillies", "Check Out the Mud Club", "", 1],
        ["Twist Wrist, Smash, Grab", "Join Billy on a Job", "", 1], ["Hit Avery Pawn", "", "", 1], ["Hit Kingpin Bowling", "", "", 1], ["Impounded Vehicle", "", "", 1],
        ["Prepare for Vice City"], ["Veteran Hunted", "Meet Bret", "J", 1], ["Afternoon Delight", "Rob Vicki's Boss"], ["Checking Out", "Move to Vice City"]],
    3: [["Welcome to Vice City"], ["Dealer's Choice", "Go See Dre'Quan", "J"], ["Dubious Provenance", "Visit the Antique Store"], ["Mami Knows Best", "Catch Up With Mia", "L"],
        ["Get Your Wheels", "", "", 1], ["Join a Street Race", "Yago 1", "", 1], ["Here, Kitty Kitty", "Speak with Tyrone", "J"], ["Send Money to Lorena"], ["Encrypted Hard Drive"],
        ["Boobie Time", "Talk to Boobie", "J"], ["Buddy?", "Check on Kyle", "", 1], ["Meet the Heders", "Meet Brian & Lori"], ["Yasmani's Jewelry Jobs"], ["Bumper to Bumper", "Mentor Yago", "J", 1],
        ["Car Service", "Steal The Car for Raul", "L"], ["Send More Money to Lorena"], ["Top Billing", "Watch the Real Dimez"], ["First Impressions", "Meeting with Raul"],
        ["Crosstown Traffic", "Meet Raul / Meet Karim"], ["Credit Check", "Meet Raul's Crew"], ["Clonin' Keys, Makin' GS", "Steal the Zorrusso for Randy"], ["Ride Or Die", "Meet Dre'Quan", "J"],
        ["Raul's Next Job"], ["Race Against Yago", "Yago 3", "", 1], ["Sinfrontera National Bank", "Scope Out the Bank"], ["Security Expert"], ["Caught Slipping"], ["Heist Planning"],
        ["Company Property", "Meet Brian"], ["Safe Word", "Steal the Practice Safe"], ["The Missing Link", "Meet Andrea", "L"], ["Join Billy on a Job", "Mall Rats", "", 1],
        ["Brother To Brother", "Back up Yago", "J", 1], ["Cooties", "Shoot the Music Video"], ["Hidden Charges"], ["Bricked Up", "Return to the Apartment"],
        ["South Leonida Real Estate", "Meet Mia", "L"], ["The Cartel Heist", "Start the Heist"]],
    4: [["Ocean Beach"], ["Another Life"], ["Pool Day"], ["Company Cars", "Speak to the Concierge"], ["Lawyer Up", "Meet Abe Gonzalez"], ["Heavy Lifting", "Bring Raul the Hard Drive"],
        ["It's A Date!", "", "", 1], ["Party Hard", "Work Personal Security"], ["Pay Abe's Fee"], ["Photo/Shoot", "Shoot a Promo"], ["Bad Driver!", "Find Felipe", "", 1],
        ["Attend Eddie Acosta's Party", "", "", 1], ["Making Gainz", "Meet Raul", "L"], ["Blood Sweat and Gear", "Work Out", "L"], ["Too Much Baggage", "Scope Out the Airport", "J"],
        ["Watch It", "Meet Dre'Quan", "J"], ["Amateur Hour", "Workout", "L"], ["Call Nate", "", "L"], ["Cash Injections", "Hang Out With Nate", "L"], ["Dirty Work", "Deal with Raina"],
        ["Nate Will Be in Touch", "Help Kordell's Crew"], ["Adventures in Babysitting", "Work Security for Andrés", "J"], ["Rafa's Kidnapping", "", "J"], ["Fresh Evidence", "Meet Dre'Quan", "J"],
        ["Child's Play", "Rescue Rafa"], ["This is a Free Call From…", "Pick up Shayna", "L", 1], ["Power Play", "Help Kordell's Crew", "L"], ["Close Surveillance", "Spy on the Bodybuilders", "J"],
        ["Delivery Method", "Help Andrea", "J"], ["Team Building", "Meet Kordell", "L"], ["Fully Catered", "Steal a Catering Truck"], ["Heist Plans in Place"], ["Headliners", "Help With The Launch Party"],
        ["VCIA Takedown", "Start the Airport Heist"], ["Tie Up Loose Ends"], ["That's Where The Money Is…", "Wait at the Cafe", "", 1], ["Call Valentina Back"], ["Sunset", "Stop by the Front Desk"], ["Starting From Zero"]],
    5: [["Bird in the Hand"], ["Taking Liberties"], ["Doggie Bag", "Meet Vinny"], ["VC Baby", "Talk to Mattia"], ["Operation Savage Glory"], ["Honest Abe", "Negotiate a Deal with Abe"],
        ["Unfinished Business"], ["Pay Abe's Fee"], ["Protective Custody", "Meet with Abe"], ["The End of the Road"]]
  };
  Object.entries(K).forEach(([kap, liste]) => liste.forEach(([name, alt, wer, opt], i) => {
    LH.MISSIONEN.push({ id: "m" + kap + "-" + (i + 1), kap: +kap, n: name, alt: alt || "", wer: wer || "", opt: !!opt });
  }));
})();
LH.KAPITEL_NAMEN = { de: { 0: "Prolog", 1: "Kapitel 1", 2: "Kapitel 2", 3: "Kapitel 3", 4: "Kapitel 4", 5: "Kapitel 5" }, en: { 0: "Prologue", 1: "Chapter 1", 2: "Chapter 2", 3: "Chapter 3", 4: "Chapter 4", 5: "Chapter 5" } };

/* Tricks je Mission (Quelle: PowerPyx-Walkthroughs, ergänzt um GameTrek/OutputLag).
   Schlüssel = Missionsname. v: verpassbar/wichtig. codes: [[Bezeichnung, Code]] */
LH.MISSION_TIPPS = {
  "Gone Fishing": { start: { de: "Mariana County", en: "Mariana County" }, lohn: { de: "Jasons Haus in Key Lento", en: "Jason's house in Key Lento" },
    de: ["Duckt euch und schaltet Wachen von hinten aus. Schüsse in die Beine halten den Ruf „hart/professionell“.", "Verpassbar: Bargeld im weiß-roten Trailer links vor dem Flugzeug mitnehmen (Bonus für professionellen Ruf).", "Tiere mit dem Fernglas beobachten zählt für 100 %."],
    en: ["Crouch and knock guards out from behind. Leg shots keep a hardened/professional reputation.", "Missable: grab the cash in the white-and-red trailer on the left before the plane (professional reputation bonus).", "Studying animals with binoculars counts toward 100%."] },
  "Gear Up": { start: { de: "Ammu-Nation nahe Jasons Haus, Key Lento", en: "Ammu-Nation near Jason's house, Key Lento" }, lohn: { de: "Langwaffe nach Wahl", en: "Long gun of your choice" },
    de: ["Schrotflinte oder taktisches Gewehr kaufen – die Schrotflinte ist meist das einzig Bezahlbare.", "Danach kommen 3 Kingfishers im Truck. Abschießen oder sterben – beides beendet die Mission ohne Folgen."],
    en: ["Buy a shotgun or tactical rifle – the shotgun is usually all you can afford.", "Three Kingfishers arrive in a truck afterwards. Killing them or dying both end the mission with no lasting effect."] },
  "Lab Fees": { start: { de: "Key Lento – Brian am pinken Marker anrufen, dann in die verschlossene Boutique", en: "Key Lento – call Brian at the pink marker, then enter the locked boutique" }, lohn: { de: "600 $ in den Briefkasten", en: "$600 to the mailbox" },
    codes: [["Labor-Tür", "0420"], ["Brians Lockup", "7700"]],
    de: ["Kasse vor dem Gehen ausräumen.", "Den Verkäufer einmal schlagen, wenn er die Miete verweigert – dann rückt er die Säure raus.", "Ab hier ist Brians Lockup Hehler für Drogen, Schmuck und markierte Scheine."],
    en: ["Empty the register before you leave.", "Punch the clerk once when he refuses rent and he hands over the acid.", "From here Brian's lockup works as a fence for narcotics, jewelry and marked bills."] },
  "Just a Scratch": { start: { de: "Key Lento (Jason)", en: "Key Lento (Jason)" }, lohn: { de: "Kostenlose Motor-Reparatur und Neulackierung", en: "Free engine repair and respray" },
    de: ["Ganado zerstört? Manuell speichern und laden – er steht wieder vor Jasons Haus.", "Tuning am ersten Auto geht später verloren; neue Autos registrieren geht erst ab Kapitel 2."],
    en: ["Destroyed the Ganado? Save manually and reload – it respawns outside Jason's house.", "Upgrades on your first car are lost later; registering new cars only works from chapter 2."] },
  "Pipework": { start: { de: "Key Lento – Mandy vor ihrem Haus", en: "Key Lento – Mandy outside her house" }, lohn: { de: "Macizo-Zigarre", en: "Macizo cigar" },
    de: ["Der Pümpel liegt im Bad gegenüber dem Schlafzimmer.", "An der Spüle rechten Stick antippen, dann den Schraubenschlüssel am Rohr nutzen.", "Die Zigarre beim Gehen von der Straße aufheben – sonst ist die Belohnung weg."],
    en: ["The plunger is on the bathroom floor opposite the bedroom.", "At the kitchen sink tap the right stick, then use the wrench on the pipe.", "Pick up the cigar from the street on your way out or you miss the reward."] },
  "Get Shirley's Rum": { v: true, de: ["Verpassbar, nur Kapitel 1.", "Danach zurück zu Three Sheets Liquor, über den seitlichen Zaun (Exotic Animals Front): ca. 1.300 $ im Wandgitter beim gelben Generator, ca. 900–1.300 $ im Tresor hinten, 100 $ in der Kasse."],
    en: ["Missable, chapter 1 only.", "Afterwards return to Three Sheets Liquor and hop the side fence (Exotic Animals Front): about $1,300 in the wall vent by the yellow generator, about $900–1,300 in the back safe, $100 in the register."] },
  "Steal the Scooter": { v: true, de: ["Verpassbar, nur Kapitel 1. Zählt nicht für „Strangers & Freaks“."], en: ["Missable, chapter 1 only. Does not count for “Strangers & Freaks”."] },
  "Clean Up After Donnie": { start: { de: "Anruf von Donnie – Angelsteg in den Grassrivers", en: "Call from Donnie – fishing dock in the Grassrivers" }, lohn: { de: "Donnie als Hehler (Trailer in Key Lento)", en: "Donnie as a fence (trailer in Key Lento)" },
    de: ["Mit dem Angler am Steg reden, mit dem Boot zur Hütte flussabwärts, Crew ausschalten.", "Kokain über die Gambit Bay zu Donnies Trailer bringen – liefern nur, wenn seine Flagge oben ist.", "Geld kommt erst am nächsten Tag in Jasons Briefkasten."],
    en: ["Talk to the fisherman on the dock, boat to the shack downriver, take out the crew.", "Bring the cocaine across Gambit Bay to Donnie's trailer – he only takes deliveries when his flag is up.", "The money arrives the next day in Jason's mailbox."] },
  "Find the Lost Drugs": { start: { de: "Anruf nach „Down to Earth“ (nur Jason)", en: "Call after “Down to Earth” (Jason only)" }, lohn: { de: "ca. 3.400 $ bei Donnie / 2.720 $ bei Brian", en: "about $3,400 from Donnie / $2,720 from Brian" },
    codes: [["Wohnmobil-Tresor (Burned Houses)", "44017"]],
    de: ["4 Suchzonen in den Sümpfen: Recreation Area (2), Burned Houses (3), Pelican Valley (2), Thorpe Adventures (1) – alle als Punkte auf der Karte.", "Pakete piepen und blinken gelb; Focus (L3+R3) macht den Peilton hörbar.", "Recreation Area: ein Paket hängt im Baum – herunterschießen. Pelican Valley: Alligatoren mit Schüssen verscheuchen.", "Bei Donnie abgeben, nicht bei Brian – und vor „Swamped“ kassieren, sonst ist das Geld weg."],
    en: ["4 search zones in the swamps: Recreation Area (2), Burned Houses (3), Pelican Valley (2), Thorpe Adventures (1) – all marked on the map.", "Packages beep and flash yellow; Focus (L3+R3) makes the tracker audible.", "Recreation Area: one package hangs in a tree – shoot it down. Pelican Valley: scare the alligators off with gunshots.", "Deliver to Donnie, not Brian – and collect before “Swamped” or the money is gone."] },
  "Donnie's Lost Drugs": { start: { de: "Nach „Don Gone“ – Marker im Meer vor Corsair Key", en: "After “Don Gone” – marker in the sea off Corsair Key" }, lohn: { de: "1.200 $ bei Brians Lockup", en: "$1,200 at Brian's lockup" },
    de: ["Ein Boot an der Küste klauen, zum gesunkenen Boot tauchen.", "Das Fach hinten am Boot öffnen und die Tasche nehmen, dann zu Brians Lockup (7700)."],
    en: ["Steal a boat on the coast and dive to the sunken boat.", "Open the compartment at the back of the boat, take the bag, then go to Brian's lockup (7700)."] },
  "Doggie Bag": { de: ["Sammelkarte „Ichiro Yamada“: im Port VC Terminal durchs offene Rolltor, links durch die Türen „Storage“, großer Holztisch."], en: ["Collectible card “Ichiro Yamada”: in the Port VC Terminal through the open shutter, left through the “Storage” doors, big wooden table."] },
  "Power Play": { de: ["Sammelkarte „Tracy“: im Vice-Dale Water Dept Leiter aufs Dach des östlichen Gebäudes am Fluss, durch die offene Tür – erster Raum neben dem Klappstuhl."], en: ["Collectible card “Tracy”: at the Vice-Dale Water Dept take the ladder to the roof of the eastern building by the river, through the open door – first room next to the folding chair."] },
  "Blood Sweat and Gear": { de: ["Magazin „Remote Strike“ liegt im Ajax Gym (Trauma Floor) auf dem Billardtisch bei den Spinden."], en: ["The magazine “Remote Strike” is in Ajax Gym (Trauma Floor) on the pool table by the lockers."] },
  "Island Dreams": { start: { de: "Kentons Laden „Island Dreams“, Key Lento", en: "Kenton's “Island Dreams” shop, Key Lento" }, lohn: { de: "400 $ und Schatztauchen", en: "$400 and treasure diving" },
    de: ["Metalldetektor mit L2/LT zielen und im pinken Bereich suchen, bis das Licht grün wird.", "Den Hai zweimal mit der Harpune treffen, um Dobbs zu retten – egal wie, keine Folgen.", "R1/RB nahe an Fischen = Fisch studieren (100 %).", "Danach: Kentons Wracks bringen das einfachste Geld in Kapitel 1."],
    en: ["Aim the metal detector with L2/LT and search the pink area until the light turns green.", "Hit the shark twice with the harpoon to save Dobbs – either outcome has no consequences.", "R1/RB near fish studies them (100%).", "Afterwards Kenton's wrecks are the easiest money in chapter 1."] },
  "Coming Home": { start: { de: "Hamlet (Gefängnis), nach „Feng Shui“", en: "Hamlet (prison), after “Feng Shui”" }, lohn: { de: "Lucia zieht bei Jason ein", en: "Lucia moves in with Jason" }, v: true,
    de: ["Vorher die 5 optionalen Aufgaben erledigen (Einkaufen, Blumen, Kette für 425 $, The Chop, Lucias Kleidung) – bessere Beziehung, die Kette spielt in Kapitel 2 eine Rolle.", "Vorher auch die 4 Hausreparaturen machen – danach nicht mehr möglich.", "Lucias Kleidung von Andy im Kofferraum mitnehmen."],
    en: ["Do the 5 optional tasks first (groceries, flowers, $425 necklace, The Chop, Lucia's clothes) – better relationship, and the necklace matters in chapter 2.", "Also finish the 4 house repairs first – not possible afterwards.", "Carry Lucia's clothes from Andy in the trunk."] },
  "Buck Me": { start: { de: "Fleeca-Bank, Key Lento", en: "Fleeca bank, Key Lento" }, lohn: { de: "BuckMe-App, Konto und 100 $ Startguthaben", en: "BuckMe app, account and $100 welcome bonus" },
    de: ["Einzahlen an jedem Geldautomaten (BuckMe-App → ATM Finder).", "Einkäufe über 1.000 $ laufen über BuckMe. Mit 0 $ in der Tasche verlierst du beim Tod nichts.", "Geld in der Family Savings kann nie wieder abgehoben werden."],
    en: ["Deposit at any ATM (BuckMe app → ATM Finder).", "Purchases over $1,000 go through BuckMe. Carry $0 and you lose nothing when you die.", "Money in Family Savings can never be withdrawn."] },
  "Down to Earth": { v: true, de: ["Direkt danach: Lucia geht auf den Balkon und lädt zum Meditieren ein – sofort folgen und annehmen. Einzige Chance für diese Meditation (Trophäe „Positive Mental Attitude“)."],
    en: ["Right after: Lucia goes to the balcony and invites you to meditate – follow and accept immediately. Only chance for this meditation (trophy “Positive Mental Attitude”)."] },
  "Save for the Future": { start: { de: "Kein Marker – in der Missionsliste (Buch-Symbol)", en: "No marker – in the mission list (book icon)" }, lohn: { de: "Höhere Kontolimits und Rabatte", en: "Higher account limits and discounts" },
    de: ["Geld per BuckMe-App überall in die Family Savings schieben.", "Stufen: 5.000 $ (Limit 15.000), 10.000 $ (Limit 100.000, 20 % auf RydeMe), 100.000 $ (Limit 500.000, 20 % auf Garagen), 1 Mio. $ (Limit 2 Mio.), dann 2 Mio. $.", "Nur Family Savings überlebt das Ende von Kapitel 1. Ab Kapitel 4 automatisch BuckMe Premium."],
    en: ["Move money into Family Savings anywhere via the BuckMe app.", "Tiers: $5,000 (limit 15,000), $10,000 (limit 100,000, 20% off RydeMe), $100,000 (limit 500,000, 20% off garages), $1M (limit 2M), then $2M.", "Only Family Savings survives the end of chapter 1. Automatic BuckMe Premium from chapter 4."] },
  "Clear Skies": { start: { de: "Southwind – Wasserflugzeug am Nachmittag", en: "Southwind – the seaplane in the afternoon" },
    de: ["Direkt über dem anderen Flugzeug fliegen, um dessen Radarsignatur zu verdecken.", "Bei den Bikern in Deckung bleiben und herauszielen. Ihre Motorräder mit WAiNK scannen (Steuerkreuz hoch halten)."],
    en: ["Fly directly above the other plane to hide its radar signature.", "Stay in cover against the bikers. Scan their bikes with WAiNK (hold D-pad up)."] },
  "Swamped": { start: { de: "Hinterzimmer von Brians Marina, Key Lento", en: "Back room of Brian's marina, Key Lento" },
    de: ["Nah an Loris Boot fahren und Quadrat/X halten zum Rüberspringen – zu weit weg klappt nicht, zu langes Warten zerstört den Motor.", "Vom Hubschrauber aus die Bodengegner ausschalten.", "Zu Hause Lucia von Brians Ruhestand erzählen = Beziehungsbonus.", "Danach ist Donnie als Hehler weg."],
    en: ["Get close to Lori's boat and hold Square/X to jump over – too far won't work, waiting too long wrecks the engine.", "Clear ground enemies from the helicopter.", "Tell Lucia about Brian's retirement at home for a relationship boost.", "Donnie is no longer available as a fence afterwards."] },
  "Don Gone": { start: { de: "Donnies Trailer, Key Lento", en: "Donnie's trailer, Key Lento" }, v: true, lohn: { de: "Verpassbar: Donnie's H&L .38", en: "Missable: Donnie's H&L .38" },
    de: ["ZUERST den Kofferraum von Donnies Auto öffnen – darin liegt Donnie's H&L .38. Nach der Zerstörung ist sie weg.", "L3+R3 markiert alle Beweise im Trailer – alle einpacken.", "Auto mit dem Benzinkanister aus dem Kofferraum anzünden oder im Meer versenken."],
    en: ["FIRST open the trunk of Donnie's car – Donnie's H&L .38 is inside. It's gone once the car is destroyed.", "L3+R3 highlights all evidence in the trailer – pack everything.", "Burn the car with the jerry can from the trunk or sink it in the ocean."] },
  "Tourist Trap": { v: true, start: { de: "Südspitze von Key Lento, nach „Recalibration“", en: "Southern tip of Key Lento, after “Recalibration”" },
    de: ["POINT OF NO RETURN von Kapitel 1: vorher einen eigenen manuellen Spielstand anlegen.", "Mindestens 5.000 $ in die Family Savings – Bargeld und das Haus in Key Lento sind danach weg.", "Vorher alles in Key Lento erledigen: Balkon-Meditation, 5 Lesesachen im Haus, Brian/Donnie-Verkäufe, Shirley.", "Polizisten töten schadet dem Ruf hier nicht. Mit dem Boot über den pinken Wegpunkt fliehen."],
    en: ["Chapter 1 POINT OF NO RETURN: make a separate manual save first.", "Put at least $5,000 into Family Savings – pocket cash and the Key Lento house are lost.", "Finish everything in Key Lento first: balcony meditation, the 5 readables in the house, Brian/Donnie sales, Shirley.", "Killing cops doesn't hurt your profile here. Escape by boat via the pink waypoint."] },
  "Moses": { start: { de: "Port Gellhorn, nach „Girl's Trip“ – ein Auto in Moses' Garage fahren", en: "Port Gellhorn, after “Girl's Trip” – drive a car into Moses' garage" }, lohn: { de: "Slim Jim, Scooter-Bros-App, Gratis-Auto für Lucia, Autoverkauf", en: "Slim Jim, Scooter Bros app, free car for Lucia, car selling" },
    de: ["Vorher mit WAiNK scannen (Steuerkreuz hoch halten), ob das Auto einen Tracker hat – spart eine Fahrt.", "Slim Jim: rechten Stick neigen, bis der Balken pink wird.", "Später: von der Hauptstraße in Port Gellhorn klauen, nicht direkt bei der Garage."],
    en: ["Scan with WAiNK first (hold D-pad up) to check for a tracker – saves a trip.", "Slim Jim: tilt the right stick until the bar turns pink.", "Later: steal on Port Gellhorn's main road, not right next to the garage."] },
  "Daily Driver": { start: { de: "Port Gellhorn, nach Moses' Foto vom '82 Crawler", en: "Port Gellhorn, after Moses texts the '82 Crawler" }, lohn: { de: "1.250 $ + 500 $ bei gutem Zustand, Garage in Port Gellhorn, Immobilien-App", en: "$1,250 + $500 in good condition, Port Gellhorn garage, real-estate app" },
    de: ["Der Crawler ist der weiße Jeep in der Mitte des Suchgebiets. Gegner ignorieren und wegfahren geht."], en: ["The Crawler is the white jeep in the middle of the search area. You can ignore the enemies and drive off."] },
  "Slam Dunk": { start: { de: "Dunks Trailer, Port Gellhorn", en: "Dunk's trailer, Port Gellhorn" }, lohn: { de: "1.700 $, Dunk als Hehler, ca. 1.000 $ bei Bill", en: "$1,700, Dunk as fence, about $1,000 on Bill" },
    de: ["Am Flugfeld in Deckung bleiben, auch in den Gebäuden aufräumen. Mit Zombix heilen.", "Bills Leiche durchsuchen: ca. 1.000 $ extra."], en: ["Stay in cover at the airstrip and clear the buildings too. Heal with Zombix.", "Loot Bill's body: about $1,000 extra."] },
  "Coffee Break": { de: ["Danach erscheinen die Meditationsplätze 2–9 auf der Karte (für beide Figuren)."], en: ["Afterwards meditation spots 2–9 appear on the map (for both characters)."] },
  "Prepare for Vice City": { start: { de: "Kaffeeraum im Starlet Motel", en: "Coffee room at the Starlet Motel" }, v: true,
    de: ["15.000 $ verdienen – am einfachsten Autos an Moses verkaufen und „Afternoon Delight“ (10.000 $).", "Vorher die zwei Sammelkarten im Starlet Motel holen (Küche, Büro-Bad) – nach Kapitel 2 unzugänglich.", "„Veteran Hunted“ geht nur als Jason."],
    en: ["Earn $15,000 – easiest via car sales to Moses and “Afternoon Delight” ($10,000).", "Grab the two collectible cards in the Starlet Motel first (kitchen, office bathroom) – inaccessible after chapter 2.", "“Veteran Hunted” is Jason only."] },
  "Afternoon Delight": { start: { de: "Delights, Port Gellhorn – nach „Coffee Break“", en: "Delights, Port Gellhorn – after “Coffee Break”" }, lohn: { de: "10.000 $ per BuckMe am nächsten Tag", en: "$10,000 via BuckMe the next day" },
    codes: [["Tresor", "2008"]],
    de: ["Allein als Jason über den Zaun hinter dem Club, sobald die Türsteher weggehen.", "Tanzen ablehnen ist schneller (spart Kleidungskauf und Fahrt)."], en: ["Solo as Jason, climb the fence behind the club once the bouncers walk away.", "Refusing to dance is quicker (skips buying clothes and a drive)."] },
  "Veteran Hunted": { lohn: { de: "500 $ und Killtelligence SM-69", en: "$500 and Killtelligence SM-69" }, de: ["Nur als Jason. Schaltet die Jagd frei (Geld durch Tiere)."], en: ["Jason only. Unlocks hunting (money from animals)."] },
  "Dealer's Choice": { start: { de: "Jack of Hearts, Crosstown – Treppe hoch ins Studio", en: "Jack of Hearts, Crosstown – upstairs into the studio" }, lohn: { de: "1.500 $", en: "$1,500" },
    de: ["„Pure“ nehmen – damit gibt es keine Probleme beim Deal.", "Deal gewaltfrei lösen = Profi-Bonus. Der Typ mit der Tasche greift trotzdem an: per Nahkampf ausknocken.", "Schaltet die Hit-'N-Run-Straßenrennen frei."],
    en: ["Take the “Pure” product – no trouble with the deal.", "Resolve it without violence for a professional bonus. The bag man attacks anyway: knock him out in melee.", "Unlocks the Hit 'N Run street races."] },
  "Yasmani's Jewelry Jobs": { start: { de: "Nach „Boobie Time“ (Kapitel 3)", en: "After “Boobie Time” (chapter 3)" }, lohn: { de: "Snap Gun, 20.000 $ + Beute", en: "Snap Gun, $20,000 + loot" },
    codes: [["Casa de Empeño", "1680"], ["Richardson Jewelry", "6815"], ["Donovan Banks & Co.", "0104"]],
    de: ["Mit Casa de Empeño anfangen (klein, keine Hintertür) – dafür gibt es die Snap Gun.", "Bei Richardson und Donovan die Hintertür mit der Snap Gun öffnen, Alarm am Panel abschalten und Aufnahmen löschen.", "Vitrinen vorne zerschlagen bringt mehr, ist aber laut. Alles an Yasmani verkaufen."],
    en: ["Start with Casa de Empeño (small, no back door) – it earns you the Snap Gun.", "At Richardson and Donovan open the back door with the Snap Gun, disarm security at the panel and wipe the footage.", "Smashing the front cases pays more but is loud. Sell everything to Yasmani."] },
  "Credit Check": { de: ["Danach sind kleine Bank-Jobs möglich (5.000–45.000 $)."], en: ["Small bank jobs unlock afterwards ($5,000–45,000)."] },
  "Clonin' Keys, Makin' GS": { start: { de: "Hathaway Apartments, Ocean Beach – nach „Crosstown Traffic“", en: "Hathaway Apartments, Ocean Beach – after “Crosstown Traffic”" }, lohn: { de: "21.250 $ + 10.000 $ bei gutem Zustand, Key Cloner", en: "$21,250 + $10,000 in good condition, Key Cloner" },
    de: ["Key Cloner: zweimal mit der Tür interagieren, rechten Stick in die gezeigte Richtung halten, wenn der Balken pink wird.", "Tempo halten, damit der Tracker-Balken nicht volläuft. Nahe Randys Showroom wird er grau.", "Schaltet Randys Wunschliste frei (30.000 $+ pro Auto)."],
    en: ["Key Cloner: interact with the door twice, hold the right stick in the shown direction when the bar turns pink.", "Keep your speed up so the tracker bar doesn't fill. It turns grey near Randy's showroom.", "Unlocks Randy's Wish List ($30,000+ per car)."] },
  "Race Against Yago": { v: true, de: ["Zeitkritisch und verpassbar – sobald verfügbar erledigen. Zählt für „Strangers & Freaks“."], en: ["Time-sensitive and missable – do it as soon as it appears. Counts for “Strangers & Freaks”."] },
  "Safe Word": { start: { de: "Raul's Gelände, Stockyard – Nicole nach „Company Property“", en: "Raul's compound, Stockyard – Nicole after “Company Property”" }, lohn: { de: "Gil's Kalinga .50 und 1.500 $", en: "Gil's Kalinga .50 and $1,500" },
    de: ["Mit dem Tresor keine Radfahrer und Grabsteine treffen (sonst „Psycho“-Ruf).", "Bei Rodney nicht mitmachen, um Lucia nicht zu verärgern. Tresorknacken beliebig oft üben."],
    en: ["Don't hit cyclists or gravestones with the safe (avoids a “psycho” rating).", "Decline Rodney to avoid upsetting Lucia. Practise safecracking as often as you like."] },
  "The Cartel Heist": { start: { de: "Stockyard – nach „Hidden Charges“ und allen anderen Kapitel-3-Missionen", en: "Stockyard – after “Hidden Charges” and all other chapter 3 missions" }, lohn: { de: "120.000 $ und Trophäe „Break the Bank“", en: "$120,000 and trophy “Break the Bank”" },
    de: ["Waffen aus den Händen schießen statt töten = Profi-Bewertung.", "Im Tresor zuerst die Geldbündel – die sind am meisten wert.", "Alle 3 Funkmasten zerstören: knapp 11 Minuten in der Bank. Den Granatwerfer (unendlich Munition) gegen Verfolger nutzen."],
    en: ["Shoot weapons out of enemies' hands instead of killing for a professional rating.", "Grab the bill stacks in the vault first – they are worth the most.", "Destroy all 3 cell towers for just under 11 minutes in the bank. Use the grenade launcher (unlimited ammo) on pursuers."] },
  "This is a Free Call From…": { v: true, de: ["Zeitkritisch und verpassbar (nur Lucia)."], en: ["Time-sensitive and missable (Lucia only)."] },
  "VCIA Takedown": { de: ["Trophäe „Hi-Jacked“. Für „Catch Me If You Can“ später ein Flugzeug am VCIA stehlen und starten."], en: ["Trophy “Hi-Jacked”. For “Catch Me If You Can” steal a plane at VCIA and take off later."] },
  "That's Where The Money Is…": { v: true, lohn: { de: "Banktresore (bis 205.000 $)", en: "Bank vaults (up to $205,000)" },
    de: ["Schaltet die Banktresor-Überfälle frei – laut PowerPyx praktisch der Point of No Return vor dem Finale. Vorher speichern.", "Geldtransporter zu einer Bank folgen und rein, solange der Tresor offen ist. Sofort 4 Sterne – schnelles Motorrad, danach Fahrzeug wechseln.", "Yasmani verkauft Transporter-Tipps für 10.000 $ (vorher 2 Payday Loans ausrauben)."],
    en: ["Unlocks bank vault robberies – per PowerPyx effectively the point of no return before the finale. Save first.", "Follow a security van to a bank and go in while the vault is open. Instant 4 stars – use a fast bike, then switch vehicles.", "Yasmani sells van tips for $10,000 (rob 2 Payday Loans first)."] },
  "Operation Savage Glory": { de: ["Trophäe „Snow Storm“. Danach gibt es zwei Story-Garagen (NE 15th Street, Pegassi Residences)."], en: ["Trophy “Snow Storm”. Unlocks two story garages (NE 15th Street, Pegassi Residences)."] },
  "Company Cars": { de: ["Danach gehört dir die Thompson Court Garage (2 Stellplätze)."], en: ["Unlocks the Thompson Court garage (2 spaces)."] }
};
LH.MISSION_QUELLEN = ["pp", "gmm", "ol"];

/* Strangers & Freaks [Kapitel, Person, Missionen, Belohnung/Trophäe, Hinweis] */
LH.STRANGERS = [
  [1, "Shirley", "Get Shirley's Rum · Steal the Scooter", "Papagei-Geld (ca. 1.300 $)", "verpassbar, zählt nicht für Strangers & Freaks"],
  [1, "Kirk", "Search for the Skunk Ape · Search for Tree Effigies · Help Kirk Find Mr. Mangrove", "zählt für Strangers & Freaks", ""],
  [2, "Kyle", "Check Out McKittrick Farm · Collect Chemicals for Kyle · Buddy?", "zählt für Strangers & Freaks", ""],
  [2, "Moses", "Autos für Moses stehlen (laufend)", "Scooter-Bros-App", ""],
  [2, "Bret Vogel", "Veteran Hunted · Bret's Target Decks (15)", "Killtelligence SM-69, Trophäe „Fair Game“", "nur als Jason"],
  [2, "Kenton", "7 Schatz-Sets", "Trophäe „This Was No Boat Accident“", "5 von 7 für 100 %"],
  [3, "Yago", "Join a Street Race · Bumper to Bumper · Race Against Yago · Brother to Brother", "zählt für Strangers & Freaks", "„Race Against Yago“ verpassbar"],
  [3, "Andy", "Climbing the Cellerichain (1–3) · Pay the Cellerica Fee · Peach! · Read the Label · Puff Puff Pass", "Trophäe „Road to Rehabilitation“", "zeitkritisch"],
  [3, "Yasmani", "Jewelry Jobs · ATM Jobs · Payday Loans · Tail Security Van", "Snap Gun, Banktipps", ""],
  [3, "Randy", "Randys Wunschliste", "Trophäe „Supply & Demand“", ""],
  [3, "Tyrone", "Take Out Kitty Litter · Spin On This", "Trophäe „Spin On This!“", ""],
  [3, "Dunk", "Dunk's Robbery Tips", "–", ""],
  [3, "Billy", "Thrillbillies · Twist Wrist Smash Grab · Mall Rats · The Impaler · Hometown Heroes", "Trophäe „The Lone Rider“", ""],
  [4, "Pilot Pete", "The Last Mile: Passing the Torch · Backseat Pilot · Pete's Deliveries", "zählt für Strangers & Freaks", ""],
  [4, "Eddie Acosta", "Attend Eddie Acosta's Party", "–", "zählt nicht für Strangers & Freaks"]
];
LH.STRANGERS_INFO = "Trophäe „Strangers & Freaks“: 8 Stränge abschließen. Sicher zählen Kirk, Kyle, Yago und Pilot Pete, die übrigen 4 nennt die Quelle nicht.";

/* ---------------------------------------------------------- 100 % */
/* [id, Bereich, Gruppe, nötig, gesamt, Einheit/Hinweis] */
LH.HUNDERT = [
  ["h01", "Story-Kapitel abgeschlossen", "Story & Aufgaben", 5, 5, "alle Pflichtmissionen"],
  ["h02", "Optionale Aufgaben", "Story & Aufgaben", 100, 200, "Nebenaufgaben, Zufallsereignisse (200+)"],
  ["h03", "Gang-Operationen", "Story & Aufgaben", 39, 39, "alle nötig"],
  ["h04", "Bank-Jobs", "Story & Aufgaben", 22, 22, "alle nötig"],
  ["h05", "Payday-Loan-Jobs", "Story & Aufgaben", 7, 7, "alle nötig"],
  ["h06", "Banktresore", "Story & Aufgaben", 8, 8, "nur große Banken"],
  ["h07", "Smash 'n' Grabs", "Story & Aufgaben", 34, 35, "Pfandhäuser, Juweliere"],
  ["h08", "Stick-Ups (Ladenüberfälle)", "Story & Aufgaben", 50, 91, ""],
  ["h09", "Drogen verkauft ($)", "Story & Aufgaben", 100000, 0, "$"],
  ["h10", "Schmuck verkauft ($)", "Story & Aufgaben", 100000, 0, "$"],
  ["h11", "Markierte Scheine verkauft ($)", "Story & Aufgaben", 250000, 0, "$"],
  ["h12", "Fahrzeuge verkauft ($)", "Story & Aufgaben", 200000, 0, "$"],
  ["h13", "Sammelkarten-Sets", "Erkunden & Aktivitäten", 15, 18, "480 Karten"],
  ["h14", "Kokain-Flamingos", "Erkunden & Aktivitäten", 100, 125, ""],
  ["h15", "WAiNK-Orte", "Erkunden & Aktivitäten", 100, 112, ""],
  ["h16", "Unterwasser-Entdeckungen", "Erkunden & Aktivitäten", 33, 33, "alle nötig"],
  ["h17", "Magazine, Bücher, Comics", "Erkunden & Aktivitäten", 30, 34, "27 Magazine + 7 Buchtausch"],
  ["h18", "Entdeckte Styles", "Erkunden & Aktivitäten", 70, 79, "Tattoos, Sammler-Uhren"],
  ["h19", "Einzigartige Playlists", "Erkunden & Aktivitäten", 2, 2, "5 Sammelobjekte"],
  ["h20", "Rennen gewonnen", "Erkunden & Aktivitäten", 30, 40, ""],
  ["h21", "Renn-Herausforderungen Gold", "Erkunden & Aktivitäten", 10, 13, ""],
  ["h22", "Schießstand Gold", "Erkunden & Aktivitäten", 42, 42, "alle nötig"],
  ["h23", "Videospiele", "Erkunden & Aktivitäten", 4, 4, "alle nötig"],
  ["h24", "Billard-Gegner", "Erkunden & Aktivitäten", 5, 7, ""],
  ["h25", "Minigolf-Plätze", "Erkunden & Aktivitäten", 2, 3, ""],
  ["h26", "Basketballkörbe", "Erkunden & Aktivitäten", 90, 100, ""],
  ["h27", "Kenton-Sets", "Erkunden & Aktivitäten", 5, 7, ""],
  ["h28", "Meditationen", "Erkunden & Aktivitäten", 15, 18, "10 Plätze – Plätze 2–9 je einmal mit Jason und mit Lucia"],
  ["h29", "Drohnen-Zeitrennen", "Erkunden & Aktivitäten", 42, 42, "alle nötig"],
  ["h30", "Stunts", "Erkunden & Aktivitäten", 300, 397, "Sprünge, unter Brücken, Messerflüge, BASE"],
  ["h31", "Herausforderungen", "Erkunden & Aktivitäten", 70, 80, ""],
  ["h32", "Brets Zielscheiben-Decks", "Erkunden & Aktivitäten", 15, 15, "alle nötig"],
  ["h33", "Fahrzeuge gescannt (WAiNK)", "Entdecken", 200, 277, ""],
  ["h34", "Waffen gefunden", "Entdecken", 50, 66, "53 Schusswaffen, 9 Nahkampf, 4 Sprengstoff"],
  ["h35", "Tiere beobachtet (Fernglas)", "Entdecken", 100, 255, ""]
];
LH.HUNDERT_INFO = "35 Punkte laut GameTrek (die Seite selbst nennt 31). Zahlen trägst du selbst ein, die App rechnet den Fortschritt.";
LH.ROADMAP = [
  ["1 · Story und was nebenbei anfällt (60–80 Std.)", "Alle Story-Missionen. Unterwegs Fahrzeuge scannen, Tiere beobachten, optionale Aufgaben, Ladenüberfälle. In Kapitel 1 nach „Down to Earth“ Lucias Meditations-Einladung annehmen."],
  ["2 · 100-%-Liste und Herausforderungen (ca. 100 Std.)", "Zuerst die Pflicht-Kategorien: 39 Gang-Operationen, 22 Bank-Jobs + 8 Tresore, 42 Schießstand-Gold, 42 Drohnenrennen, 15 Zielscheiben-Decks, 7 Payday Loans. Dann Sammelobjekte und Aktivitäten. Nach der Story ist für 100 % nichts mehr verpassbar."],
  ["3 · Aufräumen (ca. 10 Std.)", "Catch Me If You Can, Challenging Tank, Gunslinger, Personal Best, Little Boxes, On the Spot, Actions Speak Louder und restliche Story-Trophäen."]
];

/* ---------------------------------------------------------- BUGS */
/* [Problem, Schwere, Plattform, Lösung] */
LH.BUGS = [
  ["Spiel startet nicht ohne aktuelle PS5-Systemsoftware", "kritisch", "PS5, PS5 Pro", "Systemsoftware 26.07-14.23.00 installieren (Einstellungen → System → Systemsoftware), dann Spiel-Update. Laut Nerdism behoben."],
  ["Konsole stürzt ab / schaltet ab", "kritisch", "PS5, PS5 Pro", "HDR aus, Datenbank neu aufbauen, Cache leeren"],
  ["Neustart während der Intro-Zwischensequenz", "kritisch", "Xbox Series X|S", "Offline starten, lokale Daten von GTA 6 löschen"],
  ["Absturz-Schleife im Prolog", "kritisch", "PS5 Pro, Xbox", "HDR aus, Datenbank neu aufbauen bzw. lokale Daten löschen, Speicher reparieren"],
  ["Autosave greift nicht, Fortschritt weg", "kritisch", "PS5 u. a.", "Oft manuell speichern (Bett im Safehouse), Rockstar-Konto verknüpft lassen. Noch kein Fix."],
  ["„Temporärer Netzwerkfehler“ beim Start", "mittel", "Xbox Series X|S", "Bei der Abfrage „Offline“ wählen"],
  ["Controller reagiert im ersten Bildschirm nicht", "mittel", "PS5, Xbox", "Neu koppeln, neu starten, Kabel oder anderen USB-Port testen"],
  ["Abgehackter Ton und Dauer-Vibration", "mittel", "Xbox Series X|S", "Vibration aus, Audioausgang prüfen, lokale Daten löschen"],
  ["Starke Ruckler und Mikroruckler", "mittel", "PS5, Xbox", "HDCP und Bewegungsunschärfe ausschalten"],
  ["Unscharfes Bild", "gering", "PS5, Xbox", "TV-Bildmodus, Ausgabeauflösung und Schärfe prüfen"],
  ["Schwebende Gegenstände nach Figurenwechsel, Pop-ins, NPCs laufen gegen Wände", "gering", "alle", "Nichts einzustellen"]
];


/* =====================================================================
   KEY LENTO – Detail (20.11.2026 nachmittags)
   Punkte mit g: 2 sitzen auf dem gtadb-Ort, die übrigen sind nach der
   Routenbeschreibung der Guides gesetzt (Gegend stimmt, Haus nicht genau).
   ===================================================================== */
LH.ORTE.push(
  /* Läden & Dienste */
  { id: "kl-rusty", k: "dienst", typ: "Bar & Club", n: "The Rusty Anchor (Bar)", r: "Key Lento, Nordwesten", p: [-2272, -5257], g: 2, c: 1, q: "m", src: ["psq", "gm", "gtadb"],
    t: "Kneipe an der Küste. Hier spielt die Mission „Coming Home“.",
    s: ["Billard-Gegner im Hauptraum links (zählt für 100 %)", "Arcade-Automat „Bang For Your Buck“ gegenüber der Bar (Trophäe „Stick Fiddler“)", "Sammelkarte „Aimie“ (NINE1NINE Dancers) in der Toilettenkabine im Captain's Log Room"] },
  { id: "kl-marbles", k: "dienst", typ: "Fast Food", n: "Marbles (Burgerladen)", r: "Key Lento", p: [-2009, -5342], g: 2, q: "m", src: ["gtadb", "gtg"], t: "Überfallbar. Startpunkt des gemeldeten Laden-Reset-Glitches (siehe Tipps)." },
  { id: "kl-247", k: "dienst", typ: "Supermarkt", n: "24/7 Supermarkt", r: "Key Lento", p: [-1979, -5335], g: 2, q: "m", src: ["gtadb", "pp"], t: "Magazin „RX Men“ im Zeitschriftenständer (Sammelobjekt)." },
  { id: "kl-arrow", k: "dienst", typ: "Tankstelle", n: "Arrow-Tankstelle", r: "Key Lento, Route 1", p: [-2134, -5220], g: 2, q: "e", src: ["gtadb"], t: "Tankstelle mit Laden – überfallbar." },
  { id: "kl-community", k: "dienst", typ: "Sonstiges", n: "Key Lento Community Center", r: "Key Lento", p: [-2102, -5360], g: 2, q: "m", src: ["li", "gtadb"], t: "Hier leistet Lucia ihre Sozialstunden." },
  { id: "kl-chips", k: "dienst", typ: "Tuning", n: "Chip's Body Shop (Werkstatt)", r: "Key Lento, Süden", p: [-2976, -6461], g: 2, q: "e", src: ["gm", "gtadb"], t: "Reparatur und Tuning. GameTrek empfiehlt, hier das erste Auto zu registrieren." },
  { id: "kl-whale", k: "dienst", typ: "Kleidung", n: "The Wonder Whale (Laden + Walskulptur)", r: "Key Lento, Surfside Dr / Sunbelt Hwy", p: [-2936, -6420], g: 2, q: "m", src: ["psq", "rbu", "sag", "gtadb"],
    t: "Souvenir- und Bademodeladen mit großer Walfigur davor.",
    s: ["WAiNK-Skulptur: den Wal scannen", "Sammelkarte „Wokester“ (blau) auf der Bank an der Nordostseite des Ladens", "Ultimate Edition: „Goodtime Gear“ hier kaufen (Kapitel 1)"] },
  { id: "kl-fleeca", k: "dienst", typ: "Sonstiges", n: "Fleeca Key Lento (Bank)", r: "Key Lento", q: "e", src: ["li"], t: "Hier eröffnest du das Konto. Einzahlen geht an jedem Geldautomaten." },
  { id: "kl-donnie", k: "dienst", typ: "Hehler", n: "Donnies Trailer („Casa de Donnie“)", r: "Key Lento", q: "m", src: ["li", "olg"], t: "Hehler für Donnies eigene Pakete (zahlt mehr als Brian), nur wenn er da ist." },
  { id: "kl-laeden", k: "dienst", typ: "Sonstiges", n: "Weitere Läden in Key Lento", r: "Key Lento – im Spiel auf der Karte markiert", q: "e", src: ["li"],
    t: "Ohne genaue Lage in den Quellen:",
    s: ["Key Lento Mini-Mart (mit Geldautomat)", "One Stop Liquor und Three Sheets Liquor (Schnapsläden)", "Billie's Key Lento Gift Shop, Leroy's, Key Lento Kahuna (Souvenirs, Sommerkleidung)", "The Siren's Chest (Juwelier – Smash 'n' Grab)", "Barnacle Beauties (Friseur), The Inked Mermaid (Tattoo)", "Crastenburg Hotel mit Poolbar (Surfside Dr), The Vault"] },

  /* Sammelobjekte */
  { id: "kl-jason-lesen", k: "samm", n: "5 Lesesachen in Jasons Haus", r: "Jasons Haus, Peach Palm Dr", p: [-2365, -5520], g: 2, c: 1, v: true, q: "m", src: ["psq", "mfm"],
    t: "Nach Kapitel 1 kommst du nicht mehr ins Haus.",
    s: ["„Orca“ – oben auf dem Tisch unter dem Fenster hinter der Küche", "„Lethal by Design: A Liberty City Memoir“ – runder Tisch, gleicher Bereich", "„Body Copy“ – Balkon beim Fitnessbereich", "„Ashes of Glory“ – Schrank neben dem Bett im Schlafzimmer", "„Off the Hook“ – Werkstatt unter dem Haus", "Basketballkorb neben dem Parkplatz"] },
  { id: "kl-karte-lopez", k: "samm", n: "Karte „Santiago Lopez“ (Los Santos Panic)", r: "Trailer direkt westlich von Jasons Haus", p: [-2400, -5528], g: 1, q: "m", src: ["sag", "tbl"] },
  { id: "kl-karte-bernard", k: "samm", n: "Karte „Marquise Bernard“ (Los Santos Panic)", r: "Fass am Eingang von Kentons Laden (Dolphin Dr)", at: "kenton", q: "m", src: ["sag", "tbl"] },
  { id: "kl-karten-rusty", k: "samm", n: "Karten rund um The Rusty Anchor", r: "Key Lento, Nordwesten", p: [-2245, -5290], g: 0, q: "e", src: ["tbl", "psq"],
    s: ["„Lupin de Juarez“ (Vice City Club de Fútbol) – Trailer östlich der Bar", "„D'Angelou Miles“ (Liberty City Penetrators) – rechteckiges Gebäude direkt südlich der Bar, in einer Kiste", "„Aimie“ – siehe The Rusty Anchor"] },
  { id: "kl-partyhaus", k: "samm", n: "Partyhaus: Uhr, Magazin, Karte, Hund, Garagencode", r: "Dolphin Dr (Push Square: Norden) – The Big Lead: Südostecke", p: [-1960, -5420], g: 0, q: "u", src: ["psq", "tbl"],
    t: "Oben über den Eingang ins Haus.",
    s: ["Luxusuhr „Novak Laurent Alcazar“ – erstes Schlafzimmer links, Tisch am Fenster", "Magazin „Pêche“ – gleiches Schlafzimmer", "Karte „Lionel Taber“ (Los Santos Pounders) – Toilette", "Einzigartiger Hund „Cartoon Labrador“", "Garage mit Code 092319: einzigartiger Invetero Spiderweb Coquette"],
    codes: [["Garage", "092319"]] },
  { id: "kl-dolphin", k: "samm", n: "Dolphin Dr: Buchtausch, Körbe, WAiNK-Auto", r: "Key Lento, Dolphin Dr bis Sunbelt Hwy", p: [-2010, -5520], g: 0, q: "e", src: ["psq"],
    s: ["Buchtausch „Killer Prom“ – Schildkrötenregal an der Straße, zwei Häuser nach dem Haus mit Schwertfisch-Deko", "3 Basketballkörbe (Garten des nordöstlichsten Hauses, Siedlung, über einer Garage)", "WAiNK-Fahrzeug „Bravado Tropic Dawn Youga“ in der Halle New Wave Custom & Repairs (Ecke Sunbelt Hwy) – nur mit Snap Gun"] },
  { id: "kl-badger", k: "samm", n: "Badger R&D Tower (WAiNK) + Karte „Thelma“", r: "Sunset Dr, Mitte von Key Lento", p: [-2560, -5990], g: 0, q: "m", src: ["psq", "tbl"],
    s: ["Turm mit WAiNK scannen", "Karte „Thelma“ (Delights Dancers) ganz oben im Turm (laut The Big Lead im Kontrollraum ein Stock darunter)", "Karte „Georgia“ (NINE1NINE Dancers) gegenüber an der Sunbelt Hwy bei Steven Stachan Construction, von hinten rein, neben grüner Kiste"] },
  { id: "kl-xmas", k: "samm", n: "Weihnachtshaus (WAiNK) + Pudel + Auto", r: "Ecke Sunset Dr / Laguna Dr", p: [-2640, -6040], g: 0, q: "m", src: ["psq", "tbl"],
    s: ["Haus mit WAiNK scannen (Kuriosität)", "WAiNK-Fahrzeug „Nagasaki Rudolph Tao“ davor – Deko nur nachts beleuchtet", "Einzigartiger Hund „Festive Poodle“ im Garten"] },
  { id: "kl-sunset", k: "samm", n: "Sunset Dr / Pacific Dr: Buch, WAiNK", r: "Key Lento, Süd-Mitte", p: [-2700, -6110], g: 0, q: "e", src: ["psq"],
    s: ["Buch „Trigger Happy“ – Strandhaus am Sunset Dr, Treppe hoch, Esstisch (The Big Lead nennt ein Haus im Norden)", "WAiNK-Fahrzeug „Vapid Shrimp & Save Shifter“ vor dem Shrimp & Save", "WAiNK-Kuriosität „Plunge Masters Deep Sea Chalet“ hinten am Tauchcenter (Pacific Dr)", "Basketballkorb im nördlichsten Haus am Sunset Dr"] },
  { id: "kl-surfside", k: "samm", n: "Surfside Dr: Körbe, WAiNK-Auto", r: "Key Lento, Süden", p: [-2880, -6370], g: 0, q: "e", src: ["psq"],
    s: ["Basketballkorb westlich der Poolbar des Crastenburg Hotels (eingezäunt)", "WAiNK-Fahrzeug „Declasse Cousin Carlo's Akane“ vor Cousin Carlo's", "Basketballkorb hinter The Red Lotus neben Barnacle Beauties"] },
  { id: "kl-plaque", k: "samm", n: "Fatal Incursion Plaque (WAiNK)", r: "Südwestspitze von Key Lento, am Wasser", p: [-3060, -6560], g: 0, q: "m", src: ["psq", "tbl"] },
  { id: "kl-mitte", k: "samm", n: "Mitte von Key Lento: Karte, Flamingo", r: "Key Lento, Mitte", p: [-2320, -5700], g: 0, q: "e", src: ["tbl"],
    s: ["Karte „Juan Carlos Garcia“ (Liberty City Swingers) – Kiste in einer Garage", "Kokain-Flamingo im Garten des schrägen Hauses", "Karte „Dartanyon Pearson“ + „Trigger Happy“ Ausgabe 99 – Einbruch in ein Haus im Norden der Mitte, am Kamin"] },
  { id: "kl-sunsetblush", k: "samm", n: "Make-up-Style „Sunset Blush“", r: "Haus an der Nordküste von Key Lento", p: [-2150, -5240], g: 0, q: "e", src: ["tbl"], t: "Einbrechen und das Magazin im Schlafzimmer mit WAiNK scannen." },
  { id: "kl-drake", k: "samm", n: "Karte „Drake“ (Silber)", r: "Kleine Insel östlich des Pay 'n' Spray, bei Zelt und Liegestuhl", q: "e", src: ["tbl"] },
  { id: "kl-stunt", k: "samm", n: "Stuntsprung", r: "Untere Brücke zwischen Abismo Key und Key Lento", q: "e", src: ["tbl"] },
  { id: "kl-sms1", k: "waffe", n: "Gun Nut SMS 1 (Scharfschützengewehr)", r: "Haus im Süden von Key Lento (Einbruch)", p: [-2800, -6300], g: 0, q: "e", src: ["tbl"] },

  /* Kentons Wracks (das Spiel zeigt sie als lila Suchkreise) */
  { id: "wrack-ocio", k: "geld", typ: "Wrack", n: "Wrack „Nuestra Señora del Ocio“", r: "Östlich von Key Lento, nordöstlich von Kentons Laden, hinter einer kleinen Insel", p: [-1840, -5420], g: 0, q: "e", src: ["gbt"], t: "Das Wrack aus der Mission „Island Dreams“. 10 Golddublonen." },
  { id: "wrack-noche", k: "geld", typ: "Wrack", n: "Wrack „Nuestra Señora de la Noche“", r: "Südöstlich der Spitze von Key Lento – den Kreis näher an der Insel nehmen", q: "e", src: ["gbt"], t: "7 Schätze: Antiker Kerzenleuchter, Drachenpfeife, Elfenbein-Heiliger, Zinn-Panzerhandschuh, Lila Edelstein, Schlangenstatue, Fleckige Dublone." },
  { id: "wrack-etica", k: "geld", typ: "Wrack", n: "Wrack „Nuestra Señora de la Ética Laxa“", r: "Weiter südlich als La Noche, vor Abismo Key", q: "e", src: ["gbt"], t: "5 Schätze: Alte Schnupftabakdose, Ramponierte Dublone, Zeremonienlöffel, Goldener Kelch, Goldanhänger." },
  { id: "wrack-cinco", k: "geld", typ: "Wrack", n: "Wrack „Urca de Cinco Torres“", r: "Vor dem Südosten von Key Lento, östlich der kleinen hakenförmigen Insel", q: "e", src: ["gbt"], t: "6 Schätze: Zeremonienmaske, Zeremonienteller, Goldhandschuh, Jadeaugen-Becher, Rostige Dublone, Heilige Halskette." },
  { id: "wrack-lujuriosa", k: "geld", typ: "Wrack", n: "Wrack „Nuestra Señora Lujuriosa“", r: "Gleiche Inselkette, südwestlich der Hakeninsel", q: "e", src: ["gbt"], t: "6 Schätze: Zeremonienschale, Zeremonienmesser, Goldenes Lama, Goldstatuette, Jade-Krug, Glänzende Dublone." },
  { id: "wrack-sierra", k: "geld", typ: "Wrack", n: "Wrack „Urca de Santa Sierra“", r: "Weiter draußen, östlich der zwei Wracks bei der Inselkette", q: "e", src: ["gbt"], t: "6 Schätze: Messing-Fernrohr, Stechzirkel, Verzierte Taschenuhr, Santa-Sierra-Glocke, Silberner Flachmann, Abgenutzte Dublone." }
);
LH.TAUCH_ANLEITUNG = ["Boot an Kentons Steg nehmen, am Heck „Tauchausrüstung“ wählen (gibt Metalldetektor und Harpune Arras Bullhead)", "Wrack auf der Karte markieren, in die Mitte des Suchkreises fahren, R1/RB zum Abtauchen", "Metalldetektor ausrüsten, Boden absuchen, goldener Markierung folgen, Dreieck/Y", "Verkauf: im Laden Kenton mit L2/LT fokussieren → „Treasures“"];

/* ---------------------------------------------- EINFACHSTE GELDMETHODE JE KAPITEL */
LH.GELD_KAPITEL = [
  { kap: { de: "Kapitel 1", en: "Chapter 1" }, titel: { de: "Story spielen, Kenton-Tauchgänge in die Family Savings", en: "Play the story, put Kenton dive money into Family Savings" },
    betrag: { de: "ca. 13.000 $ Lagerhalle · 1.400–4.000 $ pro Wrack", en: "about $13,000 warehouse · $1,400–4,000 per wreck" }, at: "red-barn",
    text: { de: "Bargeld aus Kapitel 1 ist am Ende weg. Einfach und ohne Polizei: die Drogendeal-Lagerhalle bei Apollo Aggregates (ca. 13.000 $, alle schon tot), nach „Island Dreams“ Kentons Wracks, dazu die verlorenen Drogen für Donnie (ca. 3.400 $). Mindestens 5.000 $ in die Family Savings legen – das bleibt und gibt Rabatte. Kleine Extras: Exotic Animals Front (ca. 2.300 $), Lucky Dog (ca. 1.200 $).",
            en: "Chapter 1 cash is lost at the end. Easy and police-free: the drug-deal warehouse at Apollo Aggregates (about $13,000, everyone is already dead), Kenton's wrecks after “Island Dreams”, plus the lost drugs for Donnie (about $3,400). Put at least $5,000 into Family Savings – it carries over and gives discounts. Small extras: Exotic Animals Front (about $2,300), Lucky Dog (about $1,200)." },
    src: ["pp", "olg", "mf", "vp"] },
  { kap: { de: "Kapitel 2", en: "Chapter 2" }, titel: { de: "Autos ohne Tracker an Moses verkaufen", en: "Sell untracked cars to Moses" },
    betrag: { de: "ca. 1.000–2.000 $ pro Auto, alle ~2 Min.", en: "about $1,000–2,000 per car, every ~2 min" }, at: "moses",
    text: { de: "Nach der Mission „Moses“. Auto mit WAiNK auf Tracker prüfen, auf der Hauptstraße in Port Gellhorn klauen, abliefern. Für die 15.000 $ in „Prepare for Vice City“ zusätzlich „Afternoon Delight“ (10.000 $) mitnehmen.",
            en: "After the mission “Moses”. Check the car for a tracker with WAiNK, steal it on Port Gellhorn's main road, deliver. For the $15,000 in “Prepare for Vice City” also do “Afternoon Delight” ($10,000)." },
    src: ["pp", "mf"] },
  { kap: { de: "Kapitel 3", en: "Chapter 3" }, titel: { de: "Getrackte Autos beim Pay 'n' Spray, dann Juweliere", en: "Tracked cars at Pay 'n' Spray, then jewelry stores" },
    betrag: { de: "ca. 4.000 $ pro Auto · 10.000–25.000 $ pro Juwelier", en: "about $4,000 per car · $10,000–25,000 per jeweler" }, at: "paynspray-laperle",
    text: { de: "Am einfachsten: Autos mit Standard-Tracker an jedem Pay 'n' Spray verkaufen (kein Kampf). Mehr Geld: nach „Yasmani's Jewelry Jobs“ Juweliere mit Snap Gun durch die Hintertür. Randys Wunschliste zahlt 30.000 $+ pro Auto, die Autos tauchen aber zufällig auf. Am Kapitelende kommen 120.000 $ automatisch.",
            en: "Easiest: sell cars with a standard tracker at any Pay 'n' Spray (no combat). More money: after “Yasmani's Jewelry Jobs” hit jewelers through the back door with the Snap Gun. Randy's Wish List pays $30,000+ per car but the cars spawn randomly. $120,000 arrives automatically at the end of the chapter." },
    src: ["pp", "mf"] },
  { kap: { de: "Kapitel 4", en: "Chapter 4" }, titel: { de: "Banktresore (am Ende des Kapitels)", en: "Bank vaults (end of the chapter)" },
    betrag: { de: "bis 205.000 $ in ca. 5 Minuten", en: "up to $205,000 in about 5 minutes" },
    text: { de: "Optionale Mission „That's Where The Money Is…“. Geldtransporter folgen, Tresor leeren, mit schnellem Motorrad fliehen und Fahrzeug wechseln (sofort 4 Sterne). Achtung: laut PowerPyx praktisch der Point of No Return vor dem Finale – vorher speichern. Bis dahin: Juweliere, Payday Loans, kleine Banken.",
            en: "Optional mission “That's Where The Money Is…”. Follow a security van, empty the vault, escape on a fast bike and switch vehicles (instant 4 stars). Note: per PowerPyx effectively the point of no return before the finale – save first. Until then: jewelers, Payday Loans, small banks." },
    src: ["pp", "mf"] },
  { kap: { de: "Kapitel 5", en: "Chapter 5" }, titel: { de: "Story spielen", en: "Play the story" },
    betrag: { de: "Story-Zahlungen", en: "story payouts" },
    text: { de: "Kurzes Finale (10 Missionen). Die Quellen nennen hier keine eigene neue Geldquelle – Tresore und Juweliere aus Kapitel 3/4 laufen weiter.",
            en: "Short finale (10 missions). Sources list no new money source here – vaults and jewelers from chapters 3/4 still work." },
    src: ["pp", "gmm"] },
  { kap: { de: "Nach der Story", en: "After the story" }, titel: { de: "Banktresor-Schleife", en: "Bank vault loop" },
    betrag: { de: "ca. 100.000–200.000 $ alle 5 Minuten", en: "about $100,000–200,000 every 5 minutes" },
    text: { de: "Transporter folgen, an einer Bank warten oder Tipps bei Yasmani kaufen. Geld bei Yasmani oder in einer Garage abgeben. Der 250.000-$-Cheat bringt nichts – mit aktivem Cheat kann man nicht speichern.",
            en: "Follow vans, wait at a bank or buy tips from Yasmani. Drop the cash at Yasmani or a garage. The $250,000 cheat is useless – you can't save with a cheat active." },
    src: ["pp", "rb"] }
];
