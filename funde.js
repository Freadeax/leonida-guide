/* =====================================================================
   LEONIDA HELPER – Ergänzung v7 (21.11.2026): verlorene Drogen, Geldverstecke,
   WAiNK-Scans, Sammelkarten, Magazine, Playlists, Golf, Billard, Basketball,
   Arcade, Kenton-Sets 6/7, Brets Decks, Stuntsprünge.
   Jeder Eintrag trägt seine englische Fassung in `en`.
   g: 2 = gtadb-Punkt, 1 = im genannten Gebiet, 0 = Lage ungefähr (gestrichelt).
   ===================================================================== */
"use strict";
Object.assign(LH.QUELLEN, {
  gtb:  { name: "GTABase (Find the Lost Drugs)", url: "https://www.gtabase.com/gta-6/missions/find-the-lost-drugs" },
  rt:   { name: "Rare Thief (Lost Drugs)", url: "https://rarethief.com/gta-vi-find-the-lost-drugs-walkthrough/" },
  old:  { name: "OutputLag (Donnies Pakete)", url: "https://outputlag.com/guides/gta-6-donnie-packages-drug-money/" },
  mfd:  { name: "MetaForge (Lost Drugs)", url: "https://metaforge.app/gta-6/gta-6-find-the-lost-drugs-locations" },
  eg:   { name: "Eurogamer.de (Donnies Pakete)", url: "https://www.eurogamer.de/gta-6-verwische-donnies-spuren-fundorte" },
  ppdl: { name: "PowerPyx (Donnie's Lost Drugs)", url: "https://www.powerpyx.com/?p=369748" },
  vp:   { name: "VicePulse (Geldverstecke)", url: "https://vicepulse.org/gta-6/money/hidden-cash" },
  olm:  { name: "OutputLag (Geldverstecke)", url: "https://outputlag.com/guides/gta-6-money-stash-locations/" },
  ozc:  { name: "Of Zen and Computing (Geld)", url: "https://www.ofzenandcomputing.com/best-early-money-spots-in-gta-6/" },
  psw:  { name: "Push Square (WAiNK)", url: "https://www.pushsquare.com/guides/gta-6-waink-landmark-locations" },
  psk:  { name: "Push Square (Sammelkarten)", url: "https://www.pushsquare.com/guides/gta-6-collectible-card-locations" },
  psm:  { name: "Push Square (Magazine)", url: "https://www.pushsquare.com/guides/gta-6-magazines-books-and-comics-locations" },
  psu:  { name: "Push Square (Unterwasser)", url: "https://www.pushsquare.com/guides/gta-6-underwater-discoveries-locations-and-kentons-treasures" },
  psh:  { name: "Push Square (Basketball)", url: "https://www.pushsquare.com/guides/gta-6-basketball-hoop-locations" },
  psb:  { name: "Push Square (Brets Decks)", url: "https://www.pushsquare.com/guides/gta-6-brets-hunting-target-deck-locations" },
  ppl:  { name: "PowerPyx (Playlists)", url: "https://www.powerpyx.com/?p=373924" },
  ppgo: { name: "PowerPyx (Golf)", url: "https://www.powerpyx.com/?p=374021" },
  ppb:  { name: "PowerPyx (Billard)", url: "https://www.powerpyx.com/?p=373986" },
  ppa:  { name: "PowerPyx (Videospiele)", url: "https://www.powerpyx.com/?p=373260" },
  ppsj: { name: "PowerPyx (Stuntsprünge)", url: "https://www.powerpyx.com/gta-6-all-stunt-jump-locations/" },
  ppk:  { name: "PowerPyx (Sammelkarten)", url: "https://www.powerpyx.com/?p=372976" }
});
Object.assign(LH.TYP_ZEICHEN, { "Billard": "8", "Golf": "G", "Basketballkorb": "O", "Arcade": "A", "Jagd": "J", "Stuntsprung": "X" });

(function () {
const N = [
  /* ================================================= VERLORENE DROGEN (Donnie) */
  { id: "ld-cleanup", k: "geld", typ: "Verlorene Drogen", n: "Clean Up After Donnie – erstes Paket", r: "Grassrivers, Angelsteg und Hütte flussabwärts", p: [-2950, -3900], g: 0, c: 1, q: "m", src: ["old", "pp"],
    t: "Story-Mission (Kartenmarker „Donnie's Drop“). Mit dem Angler am Steg reden, mit dem Boot zur Hütte flussabwärts, bewaffnete Crew ausschalten, Kokain über die Gambit Bay zu Donnies Trailer bringen. Schaltet Donnie als Hehler frei.",
    en: { n: "Clean Up After Donnie – first package", r: "Grassrivers, fishing dock and shack downriver",
      t: "Story mission (map marker “Donnie's Drop”). Talk to the fisherman on the dock, take the boat to the shack downriver, deal with the armed crew, bring the cocaine across Gambit Bay to Donnie's trailer. Unlocks Donnie as a fence." } },
  { id: "ld-1", k: "geld", typ: "Verlorene Drogen", n: "Verlorene Drogen 1 · Recreation Area (2 Pakete)", r: "Grassrivers, südlichste Suchzone", p: [-3020, -4980], g: 0, c: 1, q: "m", src: ["gtb", "rt", "mfd", "pp"],
    t: "Mission „Find the Lost Drugs“ (startet per Anruf nach „Down to Earth“, nur Jason). Pakete piepen und blinken gelb – Focus (L3+R3) hilft.",
    s: ["Paket 1: hängt im Baum am Strand, wo 3 Gegner stehen – Gegner ausschalten, Paket herunterschießen (oder Truck vorfahren und auf die Motorhaube klettern)", "Paket 2: ganz am Ende des Stegs im Süden der Zone im Wasser, links neben dem Boot"],
    en: { n: "Lost drugs 1 · Recreation Area (2 packages)", r: "Grassrivers, southernmost search zone",
      t: "Mission “Find the Lost Drugs” (starts with a call after “Down to Earth”, Jason only). Packages beep and flash yellow – Focus (L3+R3) helps.",
      s: ["Package 1: stuck in a tree on the beach where 3 enemies stand – take them out, shoot the package down (or drive the truck under it and climb onto the hood)", "Package 2: at the very end of the dock in the south of the zone, in the water left of the boat"] } },
  { id: "ld-2", k: "geld", typ: "Verlorene Drogen", n: "Verlorene Drogen 2 · Burned Houses (3 Pakete)", r: "Abgebrannte Häuser am Westufer des Cottonmouth Lake (2. Zone von Süden)", p: [-3700, -4720], g: 0, c: 1, q: "m", src: ["gtb", "rt", "old", "eg"],
    codes: [["Tresor im Wohnmobil", "44017"]],
    s: ["Paket 1: am Südufer vor bzw. hinter dem zweiten abgebrannten Haus (von Osten gezählt)", "Paket 2: im einzelnen abgebrannten Haus am Nordufer – rüberschwimmen, Nordseite der Ruine", "Paket 3: im blauen Kinderplanschbecken mit Wasserrutsche am kleinen Campingplatz im Südwesten, links vom Wohnmobil", "Bonus: Tresor im Wohnmobil unter der Mikrowelle – Code 44017 (Ziffern stehen weiß auf den Postkarten/Fotos an der Wand)"],
    en: { n: "Lost drugs 2 · Burned Houses (3 packages)", r: "Burned-out houses on the west shore of Cottonmouth Lake (2nd zone from the south)",
      c: ["Safe in the RV"],
      s: ["Package 1: on the south shore in front of/behind the second burned house (counting from the east)", "Package 2: inside the lone burned house on the north shore – swim over, north side of the ruins", "Package 3: in the blue kiddie pool with the slip-and-slide at the small campsite in the southwest, left of the RV", "Bonus: safe in the RV under the microwave – code 44017 (digits written in white on the postcards/photos on the wall)"] } },
  { id: "ld-3", k: "geld", typ: "Verlorene Drogen", n: "Verlorene Drogen 3 · Pelican Valley (2 Pakete)", r: "Pelican Valley, Alligator-Insel im Nordwesten des Suchkreises", p: [-3800, -3230], g: 0, c: 1, q: "m", src: ["gtb", "rt", "eg"],
    t: "Beide Pakete liegen nah beieinander neben einer Kühlbox bzw. einem Müllhaufen, bewacht von Alligatoren. Von Süden anfahren und nach Norden schauen, Alligatoren mit Schüssen verscheuchen. Nicht mit dem Motorrad – Boot nehmen.",
    en: { n: "Lost drugs 3 · Pelican Valley (2 packages)", r: "Pelican Valley, alligator island in the northwest of the search circle",
      t: "Both packages lie close together next to an ice chest/trash pile, guarded by alligators. Approach from the south looking north, scare the gators off with gunshots. Don't take a motorbike – use a boat." } },
  { id: "ld-4", k: "geld", typ: "Verlorene Drogen", n: "Verlorene Drogen 4 · Thorpe Adventures (1–2 Pakete)", r: "Freizeitpark Thorpe Adventures bei Pelican Valley (nördliche Zone)", p: [-3560, -2980], g: 0, c: 1, q: "m", src: ["gtb", "rt", "eg"],
    t: "Das Paket wurde schon geplündert – leeres Paket vor dem Schuppen links vom Monstertruck/Eingang. Tür eintreten, die 2 Männer drinnen ausschalten, „Half Brick of Cocaine“ von der Theke nehmen. Beim Rausgehen kommen weitere Gegner.",
    s: ["Danach alles zu Donnies Trailer (Key Lento) bringen – nur wenn seine Flagge oben ist", "Bezahlung: einen Tag später als Bargeld in Jasons Briefkasten (schlafen geht am schnellsten)", "Erlös laut GTABase/Rare Thief: ca. 3.400 $ bei Donnie, ca. 2.720 $ bei Brian", "Vor „Swamped“ abliefern und kassieren – danach sind Donnies Jobs und offene Zahlungen weg"],
    en: { n: "Lost drugs 4 · Thorpe Adventures (1–2 packages)", r: "Thorpe Adventures theme park near Pelican Valley (northern zone)",
      t: "The package has already been looted – the empty package lies outside the shed left of the monster truck/entrance. Kick the door in, take out the 2 men inside, grab the “Half Brick of Cocaine” from the counter. More enemies arrive as you leave.",
      s: ["Then take everything to Donnie's trailer (Key Lento) – only when his flag is up", "Payment: one day later as cash in Jason's mailbox (sleeping is fastest)", "Payout per GTABase/Rare Thief: about $3,400 from Donnie, about $2,720 from Brian", "Deliver and collect before “Swamped” – afterwards Donnie's jobs and unpaid money are gone"] } },
  { id: "ld-corsair", k: "geld", typ: "Verlorene Drogen", n: "Donnie's Lost Drugs – gesunkenes Boot (1.200 $)", r: "Unter Wasser vor Corsair Key, Nordküste von Key Lento", p: [-1180, -4470], g: 1, c: 1, q: "m", src: ["ppdl", "old"],
    t: "Pflichtmission nach „Don Gone“. Boot nehmen, zum Wrack tauchen, das Fach hinten am Boot öffnen und die Tasche nehmen. Bei Brians Lockup (7700) gibt es 1.200 $.",
    en: { n: "Donnie's Lost Drugs – sunken boat ($1,200)", r: "Underwater off Corsair Key, north coast of Key Lento",
      t: "Required mission after “Don Gone”. Take a boat, dive to the wreck, open the compartment at the back of the boat and take the bag. Brian's lockup (7700) pays $1,200." } },

  /* ================================================= GELDVERSTECKE */
  { id: "st-stilt", k: "geld", typ: "Geldversteck", n: "Stelzenhaus der Kingfishers (Bodenversteck)", r: "Vor der Küste von Corsair Key", p: [-1320, -4410], g: 0, c: 1, q: "m", src: ["vp", "ozc"],
    t: "Keine Gegner. Mit Focus (L3+R3) über den Boden gehen und die lose Diele finden: Kokain-Tasche, Bargeld und eine Sammelkarte. Boot oder Jetski nötig.",
    en: { n: "Kingfishers stilt house (floorboard stash)", r: "Off the coast of Corsair Key",
      t: "No enemies. Walk the floor in Focus (L3+R3) to find the loose plank: cocaine bag, cash and a collectible card. Boat or jet ski needed." } },
  { id: "st-trailer-nw", k: "geld", typ: "Geldversteck", n: "Wohnwagen-Tresor nordwestlich von Key Lento (ca. 200 $ + Karte)", r: "Mariana County, Wohnwagen nordwestlich von Key Lento", p: [-2750, -5450], g: 0, c: 1, q: "e", src: ["vp"],
    t: "Der Code steht an einer Wand im Wohnwagen. Tresor an der Theke öffnen: ca. 202 $ und eine Sammelkarte.",
    en: { n: "Trailer safe northwest of Key Lento (about $200 + card)", r: "Mariana County, trailer northwest of Key Lento",
      t: "The code is written on a wall inside the trailer. Open the counter safe: about $202 and a collectible card." } },
  { id: "st-boot", k: "geld", typ: "Geldversteck", n: "Gestrandetes Schmugglerboot (ca. 1.280 $)", r: "Schlammbank in den Grassrivers", p: [-3250, -4450], g: 0, c: 1, q: "e", src: ["vp"],
    t: "An Bord klettern und die Decksluke öffnen: ca. 1.280 $ und Kokainpakete.",
    en: { n: "Stranded smuggler boat (about $1,280)", r: "Mudbank in the Grassrivers", t: "Climb aboard and open the deck hatch: about $1,280 and cocaine packages." } },
  { id: "st-riquezas", k: "geld", typ: "Geldversteck", n: "Lagerhalle B-207 (Riquezas Keys)", r: "Riquezas Keys, Hinterraum mit Kerzen", p: [-8080, -5420], g: 1, c: 1, q: "e", src: ["vp"],
    t: "Auf dem Tisch im Hinterraum: ein halber Kokainziegel und Bargeld.",
    en: { n: "Warehouse B-207 (Riquezas Keys)", r: "Riquezas Keys, candle-lit back room", t: "On the table in the back room: half a brick of cocaine and cash." } },
  { id: "st-bluepearl", k: "geld", typ: "Geldversteck", n: "Fischerhütte „Blue Pearl's Rest“", r: "Outlet Marsh (genaue Lage offen)", c: 1, q: "e", src: ["vp"],
    t: "Tür aufbrechen: Säure (Acid) und Bargeld.",
    en: { n: "Fishing shack “Blue Pearl's Rest”", r: "Outlet Marsh (exact location open)", t: "Break the door open: acid and cash." } },
  { id: "st-funfair", k: "geld", typ: "Geldversteck", n: "Gellhorn Fun Fair – Autoscooter-Halle (nachts)", r: "Shore Dr, Port Gellhorn, nördlich des Oyster Point Gas Stop", p: [-6620, 3660], g: 0, c: 2, q: "e", src: ["vp", "psw"],
    t: "Nachts den Schutt in der Autoscooter-Halle durchsuchen: Crystal und ca. 220 $. Das alte Riesenrad ist außerdem ein WAiNK-Wahrzeichen.",
    en: { n: "Gellhorn Fun Fair – bumper car pavilion (night)", r: "Shore Dr, Port Gellhorn, north of the Oyster Point Gas Stop",
      t: "At night search the debris in the bumper car pavilion: crystal and about $220. The old Ferris wheel is also a WAiNK landmark." } },
  { id: "st-industrie", k: "geld", typ: "Geldversteck", n: "Lagergebäude südlich von Hamlet (Hobo-Schrotflinte)", r: "Südlich von Hamlet am Highway – kein Kartensymbol, man hört Schreie", p: [-2620, -3620], g: 0, c: 1, q: "m", src: ["ozc", "vp"],
    t: "Bargeld auf dem Tisch, weitere Bündel im gelben Werkzeugkasten in der Ecke, im Waffenkoffer die Marabunta Grande Hobo (Schrotflinte). Drinnen wird jemand festgehalten.",
    en: { n: "Storage building south of Hamlet (Hobo shotgun)", r: "South of Hamlet by the highway – no map icon, you hear screaming",
      t: "Cash on the table, more bundles in the yellow toolbox in the corner, the Marabunta Grande Hobo (shotgun) in the weapon case. Someone is being held captive inside." } },
  { id: "st-belville-dock", k: "geld", typ: "Geldversteck", n: "Drogentasche am Steg (Lake Leonida, ca. 2.560 $)", r: "Steg am Lake Leonida bei Belville", p: [-1800, 3450], g: 0, c: 1, q: "e", src: ["vp"],
    t: "Den Mann mit der Tasche zur Rede stellen – er wirft sie ins Wasser. Hinausschwimmen und holen: Drogentasche im Wert von ca. 2.560 $.",
    en: { n: "Drug bag at the dock (Lake Leonida, about $2,560)", r: "Dock on Lake Leonida near Belville",
      t: "Confront the man holding the bag – he drops it into the water. Swim out and grab it: narcotics bag worth about $2,560." } },
  { id: "st-brian-garage", k: "geld", typ: "Geldversteck", n: "Brian's Garage – Hinterbüro (150 $)", r: "Hamlet", at: "dienst-brian-s-garage-hamlet", c: 1, q: "e", src: ["vp"],
    t: "Durch die blauen Hintertüren, linken Wandschrank öffnen: ca. 150 $ auf dem Schreibtisch, Adrenalin und Zombix.",
    en: { n: "Brian's Garage – back office ($150)", r: "Hamlet", t: "Through the blue back doors, open the left wall cabinet: about $150 on the desk, adrenaline and Zombix." } },

  /* ================================================= KENTON-SETS 6 + 7 */
  { id: "wrack-belpoint", k: "geld", typ: "Wrack", n: "Kenton-Set „Belpoint Strait“", r: "Direkt vor der Südspitze von Belpoint, westlich von Bobcat Bight", p: [-7880, -620], g: 0, q: "m", src: ["psu"],
    t: "Kein Schiffswrack. 5 Schätze: Ancient Bracelet, Ancient Ingot, Avian Plate, Golden Fish, Lover's Grail. Zählt nicht als Unterwasser-Entdeckung.",
    en: { n: "Kenton set “Belpoint Strait”", r: "Just off the southern tip of Belpoint, west of Bobcat Bight",
      t: "No shipwreck. 5 treasures: Ancient Bracelet, Ancient Ingot, Avian Plate, Golden Fish, Lover's Grail. Doesn't count as an underwater discovery." } },
  { id: "wrack-bobcat", k: "geld", typ: "Wrack", n: "Kenton-Set „Bobcat Dive Site“", r: "Westlich von Bobcat Key", p: [-6760, -1560], g: 0, q: "m", src: ["psu"],
    t: "Kein Schiffswrack. 6 Schätze: Astrolabe, Captain's Whistle, Ceramic Pirate, Ivory Sundial, Naval Hourglass, Pirate's Buckle. Zählt nicht als Unterwasser-Entdeckung.",
    en: { n: "Kenton set “Bobcat Dive Site”", r: "West of Bobcat Key",
      t: "No shipwreck. 6 treasures: Astrolabe, Captain's Whistle, Ceramic Pirate, Ivory Sundial, Naval Hourglass, Pirate's Buckle. Doesn't count as an underwater discovery." } },

  /* ================================================= WAiNK */
  ...[
    ["w-l4", "WAiNK-Wahrzeichen", "Bobcat Key Experimental Home", "Direkt vor der Westküste von Bobcat Key", "Just off the west coast of Bobcat Key", [-6620, -1520], 0],
    ["w-l5", "WAiNK-Wahrzeichen", "Lawton Co. Paper Mill", "Moreau, nördlich der West-Kalaga-247-Tankstelle am Adler Creek", "Moreau, north of the West Kalaga 247 Gas station by Adler Creek", [-3900, 7700], 0],
    ["w-l6", "WAiNK-Wahrzeichen", "Farmer Scrumpy's Apple Orchard", "Manifest Canyon, nördlich der Rodgers Ranch & Shooting Range – Hauptgebäude scannen", "Manifest Canyon, north of Rodgers Ranch & Shooting Range – scan the main building", [-5000, 5320], 0],
    ["w-l9", "WAiNK-Wahrzeichen", "Thicc Herbie (Blimp)", "Blimp auf Maroon Key – vom Nordwest-Aussichtspunkt auf Abismo Key übers Wasser scannen", "Blimp on Maroon Key – scan across the water from Abismo Key's northwest viewpoint", [-4433, -6827], 2],
    ["w-l11", "WAiNK-Wahrzeichen", "Gellhorn Fun Fair", "Altes Riesenrad, Shore Dr, Port Gellhorn", "Old Ferris wheel, Shore Dr, Port Gellhorn", [-6640, 3700], 0],
    ["w-l12", "WAiNK-Wahrzeichen", "Downtown Periscope", "Nahe Catalan Blvd, Downtown, Vice City", "Near Catalan Blvd, Downtown, Vice City", [-600, -120], 1],
    ["w-l14", "WAiNK-Wahrzeichen", "Sky Ride", "Emerald Springs, östlich des Emerald River – teils von Bäumen verdeckt", "Emerald Springs, east of the Emerald River – partly hidden by trees", [-4200, 2420], 0],
    ["w-l17", "WAiNK-Wahrzeichen", "Belpoint Lighthouse", "Südspitze von Belpoint, westlich von Capri – anlegen und zur Siedlung im Süden", "Southern tip of Belpoint, west of Capri – dock and walk to the settlement in the south", [-7900, -540], 0],
    ["w-l18", "WAiNK-Wahrzeichen", "Kalaga Lookout", "Aussichtspunkt im Mount Kalaga National Park mit Astronauten-Wandbild", "Viewpoint in Mount Kalaga National Park with an astronaut mural", [-3350, 6250], 0],
    ["w-l20", "WAiNK-Wahrzeichen", "Hoffman Observatory", "Hügel im Westen von North Kelly County (dort auch Karte „Braelynn“)", "Hill in western North Kelly County (also card “Braelynn”)", [-4600, 4650], 0],
    ["w-l21", "WAiNK-Wahrzeichen", "Dock Ring", "Riesenrad am Catalan Blvd, Shoreline/Downtown", "Giant Ferris wheel on Catalan Blvd, Shoreline/Downtown", [33, 137], 2],
    ["w-l22", "WAiNK-Wahrzeichen", "Grayson Assembly", "Kirche direkt südlich der Ledford Motorcycle Workshop an der SR-45, Grayson", "Church directly south of Ledford Motorcycle Workshop on SR-45, Grayson", null, 0],
    ["w-l24", "WAiNK-Wahrzeichen", "Howe Dairy Farm's Big Udder", "Kuh-Silo südlich der CR 62, Emerald Springs – vom Highway sichtbar", "Cow-painted silo south of CR 62, Emerald Springs – visible from the highway", [-4350, 2240], 0],
    ["w-l27", "WAiNK-Wahrzeichen", "Tucker's Citrus Farms Water Tower", "Tucker's Citrus Farms, Emerald Springs, östlich von Port Gellhorn", "Tucker's Citrus Farms, Emerald Springs, east of Port Gellhorn", [-4033, 3062], 2],
    ["w-c4", "WAiNK-Kuriosität", "Derelict Spy Vessel", "Permit Keys, Strand an der Südspitze der südöstlichsten Insel einer Inselkette", "Permit Keys, beach at the southern tip of the southeasternmost island of a chain", [-5580, -6520], 0],
    ["w-c8", "WAiNK-Kuriosität", "Beach Party Site", "Permit Keys, mittlere Insel – Holzhütte mit orangem Fizzazz-Schild", "Permit Keys, central island – wooden hut with an orange Fizzazz sign", [-5770, -6360], 1],
    ["w-c23", "WAiNK-Kuriosität", "Abismo Key Carcass", "Südufer von Abismo Key, Tierkadaver am Strand", "South shore of Abismo Key, animal carcass on the beach", [-5100, -7420], 0],
    ["w-c29", "WAiNK-Kuriosität", "Big Entrance", "Dalton Island, bei der großen goldenen Skulptur die Treppe runter – Schrift an der Wand", "Dalton Island, down the stairs by the big golden sculpture – message on the wall", [1717, -1368], 1],
    ["w-c30", "WAiNK-Kuriosität", "Fingerpost", "Sandiger Nordteil der größten Permit-Keys-Insel, östlich von Barrage Gun Supply (Southwind)", "Sandy north part of the largest Permit Keys island, east of Barrage Gun Supply (Southwind)", [-6100, -6250], 0],
    ["w-s1", "WAiNK-Skulptur", "Gimme All Your Oil", "Catalan Blvd, Decor District – südöstlich von Blanc & Giroux", "Catalan Blvd, Decor District – southeast of Blanc & Giroux", [-200, 2160], 1],
    ["w-s2", "WAiNK-Skulptur", "Junkyard T-Rex", "Sassafrass Rd nördlich des Kalaga Reservoir, östlich von Brets Jagdhütte", "Sassafrass Rd north of Kalaga Reservoir, east of Bret's hunting cabin", [-2850, 6950], 0],
    ["w-s4", "WAiNK-Skulptur", "Triangler Sculpture", "Fisch-Monument vor der Küste von Corsair Key", "Fish monument off the coast of Corsair Key", [-1160, -4600], 0],
    ["w-s5", "WAiNK-Skulptur", "Large Lure", "Park an der Thompson Ave, Ocean Beach – direkt südlich von Lucciano's", "Park on Thompson Ave, Ocean Beach – directly south of Lucciano's", [1720, 760], 1],
    ["w-s6", "WAiNK-Skulptur", "Pixel Fountain", "Catalan Blvd, westlich von Tequesta Retreat", "Catalan Blvd, west of Tequesta Retreat", [-470, -1060], 0],
    ["w-s7", "WAiNK-Skulptur", "Neptune Rises", "Dominoe St, Washington Beach – unter der südlichen Brücke nach Flamingo Island", "Dominoe St, Washington Beach – under the southern bridge to Flamingo Island", [1700, 2020], 0],
    ["w-s8", "WAiNK-Skulptur", "Vice Museum of Art Sculpture", "Stapel aus Smileys, von der Atlantic Ave im Süden von Washington Beach sichtbar", "Stack of smiley faces, visible from Atlantic Ave in southern Washington Beach", [1792, 1474], 2],
    ["w-s10", "WAiNK-Skulptur", "Princess Robot Bubblegum Statue", "Rechts vom Haupteingang des Y Hotel, Washington Beach", "Right of the Y Hotel main entrance, Washington Beach", [1860, 2140], 1],
    ["w-s11", "WAiNK-Skulptur", "Monument of Leonidan Supremacy", "SR-73 im Norden von Manifest Canyon, westlich der Hauptstraße, nördlich von Port Gellhorn", "Off SR-73 in northern Manifest Canyon, west of the main road, north of Port Gellhorn", [-5861, 5542], 2],
    ["w-nf1", "No-Flusher-Tag", "No Flusher Tag 1", "Shore Dr, Ocean Beach – am Boden gegenüber „The Buckingham“", "Shore Dr, Ocean Beach – on the ground opposite “The Buckingham”", [1925, 620], 1],
    ["w-nf2", "No-Flusher-Tag", "No Flusher Tag 2", "Shore Dr, Ocean Beach – vor der Bar „The Banana Hole“", "Shore Dr, Ocean Beach – outside “The Banana Hole” bar", [1925, 700], 1]
  ].map(([id, typ, n, r, ren, p, g]) => ({ id, k: "samm", typ, n, r, p: p || undefined, g, q: "e", src: ["psw"], t: "Mit der WAiNK-App scannen (Steuerkreuz hoch → R1/RB). 100 von 112 Scans für 100 % und Trophäe „You WAiNKer!“.",
    en: { n, r: ren, t: "Scan with the WAiNK app (D-pad up → R1/RB). 100 of 112 scans for 100% and trophy “You WAiNKer!”." } })),

  /* ================================================= SAMMELKARTEN (nicht Key Lento) */
  ...[
    ["k-ichiro", "Ichiro Yamada (Liberty City Swingers)", "Port VC Terminal, Gulf St, Port Vice City – Lagerraum „Storage“, großer Holztisch", "Port VC Terminal, Gulf St, Port Vice City – “Storage” room, big wooden table", [600, -480], 1, 5, "In Kapitel 5 während „Doggie Bag“: durchs offene Rolltor, an der Wache vorbei, links durch die Türen „Storage“.", "In chapter 5 during “Doggie Bag”: through the open shutter, past the guard, left through the “Storage” doors.", ["psk"]],
    ["k-jd", "J.D. Wild Card (Backyard Wrestling)", "Kleine Siedlung an der Aminita Road, Grassrivers, kurz südlich von Hamlet", "Small settlement off Aminita Road, Grassrivers, just south of Hamlet", [-2760, -3620], 0, 0, "Neben einem geköpften Krokodil.", "Next to a decapitated crocodile.", ["psk"]],
    ["k-tracy", "Tracy (Delights Dancers)", "Vice-Dale Water Dept, Westbrook Dr, Salton", "Vice-Dale Water Dept, Westbrook Dr, Salton", [-1416, -556], 1, 4, "Während „Power Play“: Leiter aufs Dach des östlichen Gebäudes am Fluss, Wand hoch, durch die offene Tür – im ersten Raum neben einem Klappstuhl.", "During “Power Play”: ladder to the roof of the eastern building by the river, climb the wall, through the open door – first room next to a folding chair.", ["psk"]],
    ["k-malena", "Malena (Jack of Hearts Dancers)", "Aussichtsturm nördlich von Rusty Willis Jr. Hunting Supplies, Forest Mill Rd, Mount Kalaga", "Lookout tower north of Rusty Willis Jr. Hunting Supplies, Forest Mill Rd, Mount Kalaga", [-3080, 7020], 0, 0, "Treppe hoch, im Turm links neben der Tür.", "Climb the stairs, inside the tower left of the door.", ["psk"]],
    ["k-rightwing", "Right Wing (Right Wing: America's Hero)", "Pinnwand zwischen Rusty Willis Jr. Hunting Supplies und Redshaw's General Store, nordwestlich des Kalaga Reservoir", "Pinboard between Rusty Willis Jr. Hunting Supplies and Redshaw's General Store, northwest of Kalaga Reservoir", [-3100, 6900], 0, 0, "", "", ["psk"]],
    ["k-braelynn", "Braelynn (NINE1NINE Dancers)", "Hoffman Observatory, Westen von North Kelly County", "Hoffman Observatory, western North Kelly County", [-4600, 4650], 0, 0, "Außen über die Autoteile auf die Plattform, ums Metallgerüst, ins Gebäude klettern – auf der Holzplattform neben alten Magazinen.", "Climb the car scraps outside onto the platform, walk around the metal frame, climb into the building – on the wooden platform next to old magazines.", ["psk"]],
    ["k-ratster", "The Ratster (The Legends of Ratface)", "Großer Aussichtsturm im Buckskin Swamp", "Large lookout tower in Buckskin Swamp", [-4150, 960], 0, 0, "Oben am Geländer direkt hinter dem Alligator-Maskottchen.", "At the top on the railing right behind the alligator mascot.", ["psk"]],
    ["k-kyle", "Kyle Lewicki (Vice City Narcos)", "Dynamix Fitness, Bayside – hinterer Flur auf einer Bank", "Dynamix Fitness, Bayside – back hallway on a bench", [-320, 980], 1, 0, "", "", ["ppk"]],
    ["k-rightred", "Right Wing, rot (Right Wing: America's Hero)", "Bayside Apartments, Lobby im Erdgeschoss – Tischchen im Raum mit den Poolspielsachen", "Bayside Apartments, ground-floor lobby – small table in the room with the pool toys", [-350, 1020], 1, 0, "", "", ["ppk"]]
  ].map(([id, n, r, ren, p, g, c, t, ten, src]) => ({ id, k: "samm", typ: "Sammelkarte", n, r, p, g, c: c || undefined, q: "e", src, t: t || undefined,
    en: { n: n.replace("Right Wing, rot", "Right Wing, red"), r: ren, t: ten || undefined } })),

  /* ================================================= MAGAZINE, BÜCHER, COMICS */
  ...[
    ["m-helpme", "„Help Me, Help You, Help Me“ (Magazin)", "Starlet Motel, Rezeption – links neben der Tür beim Computer", "Starlet Motel reception – left of the door next to the computer", null, 0, 2, "starlet", true],
    ["m-wizard", "„Children of Wizard Wang“ (Comic)", "Starlet Motel, Küche – Theke am Fenster neben dem Radio", "Starlet Motel kitchen – counter by the window next to the radio", null, 0, 2, "starlet", true],
    ["m-twopricks", "„Two Pricks in the Bush“", "Bayside Apartments (201) – Tisch vor dem Fernseher", "Bayside Apartments (201) – table in front of the TV", [-345, 1030], 1, 3],
    ["m-passion", "„Passion B.C.“", "Bayside Apartments (201) – Tischchen rechts vom Whirlpool", "Bayside Apartments (201) – small table right of the hot tub", [-345, 1030], 1, 3],
    ["m-highroller", "„High Roller Magazine“", "Jack of Hearts, oben am Ende des Studioflurs – Tisch neben dem Keyboard", "Jack of Hearts, upstairs at the end of the studio corridor – table next to the keyboard", null, 0, 3, "dienst-jack-of-hearts-club-crosstown"],
    ["m-remote", "„Remote Strike: A Modern Military Memoir“", "Ajax Gym, Trauma Floor – auf dem Billardtisch bei den Spinden (während „Blood Sweat and Gear“)", "Ajax Gym, Trauma Floor – on the pool table by the lockers (during “Blood Sweat and Gear”)", [1420, 1766], 2, 4],
    ["m-1159", "„11:59 Survivalist Culture“", "Wald östlich des Kalaga Reservoir bei Dawson Dam – Leiter zum Aussichtspunkt hoch", "Woods east of Kalaga Reservoir near Dawson Dam – climb the ladder to the lookout", [-2840, 6800], 0, 0],
    ["m-cowboy", "„The Cowboy's Prayer Is to Die Young“", "Grayson Motel, Rockledge Rd, Moreau – rechts in der Rezeption auf dem Tisch", "Grayson Motel, Rockledge Rd, Moreau – table on the right inside the reception", null, 0, 0]
  ].map(([id, n, r, ren, p, g, c, at, v]) => ({ id, k: "samm", typ: "Magazin & Buch", n, r, p: p || undefined, g, at: at || undefined, c: c || undefined, v: v || undefined, q: "e", src: ["psm"],
    t: v ? "Verpassbar: Küche und Büro des Starlet Motel sind nach Kapitel 2 zu." : undefined,
    en: { n: n.replace(/„([^“]+)“/, "“$1”").replace("(Magazin)", "(magazine)").replace("(Comic)", "(comic)"), r: ren, t: v ? "Missable: the Starlet Motel kitchen and office close after chapter 2." : undefined } })),

  /* ================================================= PLAYLISTS */
  ...[
    ["pl-1", "Poster 1/4 „The Sniper of La Perle“", "Aunt Zola's Soul Food, La Perle – bei der Kasse", "Aunt Zola's Soul Food, La Perle – by the cashier", [-990, 1460], 1],
    ["pl-2", "Poster 2/4 „The Sniper of La Perle“", "TWA Ponya Tattoo, La Perle – Tisch neben dem Eingang", "TWA Ponya Tattoo, La Perle – table next to the entrance", [-940, 1510], 1],
    ["pl-3", "Poster 3/4 „The Sniper of La Perle“", "Drip Drops (Kleidung), La Perle – Theke neben dem Verkäufer", "Drip Drops (clothing), La Perle – counter next to the clerk", [-960, 1530], 1],
    ["pl-4", "Poster 4/4 „The Sniper of La Perle“", "Jack of Hearts, 2. Stock – östliche Aufnahmekabine, auf einer Kiste", "Jack of Hearts, 2nd floor – eastern recording booth, on a crate", [-686, 1195], 2],
    ["pl-5", "Poster „The Vault Radio“", "The Vault (Nachtclub), Downtown – rotes Poster im Eingang", "The Vault (nightclub), Downtown – red poster in the entrance", [-774, 462], 2]
  ].map(([id, n, r, ren, p, g]) => ({ id, k: "samm", typ: "Playlist-Poster", n, r, p, g, q: "e", src: ["ppl"],
    t: "Mit WAiNK scannen. 4 Poster schalten die Playlist „The Sniper of La Perle“ frei (On Demand), 1 Poster den Sender „The Vault“. Beide nötig für 100 %.",
    en: { n: n.replace(/„([^“]+)“/, "“$1”"), r: ren, t: "Scan with WAiNK. 4 posters unlock the playlist “The Sniper of La Perle” (On Demand), 1 poster the station “The Vault”. Both needed for 100%." } })),

  /* ================================================= GOLF, BILLARD, BASKETBALL, ARCADE */
  ...[
    ["golf-1", "Golf", "King Gator Adventure Golf (Minigolf)", "Buckskin Swamp", "Buckskin Swamp", [-4100, 880], 1],
    ["golf-2", "Golf", "Frontier Adventure Golf (Minigolf)", "Waning Sands", "Waning Sands", [80, 4000], 1],
    ["golf-3", "Golf", "Dino Golf Challenge (Minigolf)", "Frogswater, Kelly County (SR-32)", "Frogswater, Kelly County (SR-32)", null, 0],
    ["golf-4", "Golf", "Leaf Links Golf Challenge", "Leaf Links Golf Club, Vice Beach", "Leaf Links Golf Club, Vice Beach", [578, 2487], 2],
    ["golf-5", "Golf", "Mount Hailes Golf Challenge", "Mount Hailes Club, Waning Sands", "Mount Hailes Club, Waning Sands", [160, 4140], 1],
    ["pool-1", "Billard", "Billard-Gegner: Skeeter's", "Bar am Südrand von Hamlet – Tisch auf der Südseite", "Bar on Hamlet's south edge – table on the south side", [-2690, -3420], 0],
    ["pool-2", "Billard", "Billard-Gegner: Zotico's", "Bar am Westrand von Balsero – Tisch auf der Ostseite", "Bar on Balsero's west edge – table on the east side", [-1920, 620], 0],
    ["pool-3", "Billard", "Billard-Gegner: The Thirsty Wolf", "Bar am Nordwestrand von Belville – Tisch auf der Nordseite", "Bar on Belville's northwest edge – table on the north side", [-1680, 3140], 0],
    ["pool-4", "Billard", "Billard-Gegner: Jacob's Tavern", "Millport, Ostseite neben dem Pay 'n' Spray – Tisch auf der Nordseite", "Millport, east side next to the Pay 'n' Spray – table on the north side", [-1059, 6490], 2],
    ["pool-5", "Billard", "Billard-Gegner: Delights Cabaret", "Port Gellhorn – Tisch in der Mitte. Nicht geschafft bis Ende Kapitel 2? Später wieder offen.", "Port Gellhorn – table in the middle. Missed it by the end of chapter 2? It reopens later.", [-6524, 3889], 1],
    ["pool-6", "Billard", "Billard-Gegner: Kowaachobee Cafe & Bar", "Buckskin Swamp, direkt am Highway – Tisch auf der Westseite", "Buckskin Swamp, right off the highway – table on the west side", [-4060, 840], 0],
    ["hoop-pg", "Basketballkorb", "Basketballkorb: Trailerpark Port Gellhorn", "Kurz nördlich von Sarena's Bargain Store", "Just north of Sarena's Bargain Store", [-6560, 3820], 0],
    ["hoop-avery", "Basketballkorb", "Basketballkorb: Avery Allen & Co. Aviation", "Vor den großen Fenstern des Hauptgebäudes, North Kelly County, östlich von Manifest Canyon", "In front of the main building's large windows, North Kelly County, east of Manifest Canyon", [-4700, 5000], 0],
    ["hoop-peacock", "Basketballkorb", "Basketballkorb: Villa in Peacock Estates", "Palladia Ln, Peacock Bay – hinter dem Haus", "Palladia Ln, Peacock Bay – behind the house", [-1150, -1960], 0],
    ["arcade-1", "Arcade", "Arcade-Automat vor Bargain World", "Port Gellhorn – vor dem Kleidungsladen", "Port Gellhorn – outside the clothing store", [-6470, 3760], 1]
  ].map(([id, typ, n, r, ren, p, g]) => ({ id, k: "aktiv", typ, n, r, p: p || undefined, g, q: "e",
    src: [typ === "Golf" ? "ppgo" : typ === "Billard" ? "ppb" : typ === "Arcade" ? "ppa" : "psh"],
    t: { Golf: "Für 100 %: 2 der 3 Minigolfplätze spielen.", Billard: "7 Gegner auf 17 Tischen, 5 schlagen für 100 %. Der 7. Gegner ist noch unbekannt.", Basketballkorb: "90 von 100 Körben für 100 %.", Arcade: "Für 100 % alle 4 Videospiele einmal starten – 3 davon an der Konsole zu Hause, das 4. nur an Automaten. Ein Spiel komplett durchspielen = Trophäe „Stick Fiddler“." }[typ],
    en: { n: n.replace("(Minigolf)", "(mini golf)").replace("Billard-Gegner", "Pool opponent").replace("Basketballkorb", "Basketball hoop").replace("Villa in Peacock Estates", "Peacock Estates mansion").replace("Trailerpark", "Trailer park").replace("Arcade-Automat vor Bargain World", "Arcade machine outside Bargain World"), r: ren,
      t: { Golf: "For 100%: play 2 of the 3 mini golf courses.", Billard: "7 opponents on 17 tables, beat 5 for 100%. The 7th opponent is still unknown.", Basketballkorb: "90 of 100 hoops for 100%.", Arcade: "For 100% start all 4 video games once – 3 on the console at home, the 4th only at arcade machines. Beating one game completely = trophy “Stick Fiddler”." }[typ] } })),

  /* ================================================= JAGD + STUNTS (Übersichten) */
  { id: "bret-decks", k: "aktiv", typ: "Jagd", n: "Brets Ziel-Decks 1–3 (von 15)", r: "Brets Jagdhütte, Lummox County", at: "killtelligence", c: 2, q: "e", src: ["psb"],
    t: "Bret nimmt nur Tiere in Zustand „Pristine“ oder „Good“. Alle 15 Decks für 100 %.",
    s: ["Deck 1 „Adrenal Glands and Venison“: Weißwedelhirsch (Bock + Ricke) – Mount Kalaga National Park, verlassenes Betonwerk", "Deck 2 „Hog Endocrine Glands“: weißer Leonida-Truthahn, Fleckenskunk (nachts ab ca. 20 Uhr), Wildschwein – Adler Creek, Bonanza, Mount Kalaga", "Deck 3 „Cane Toad Venom Glands“: Aga-Kröte, Nutria, Nilwaran – West- und Ost-Buckskin-Swamp, Pelican Valley"],
    en: { n: "Bret's target decks 1–3 (of 15)", r: "Bret's hunting cabin, Lummox County", t: "Bret only accepts animals in “Pristine” or “Good” condition. All 15 decks for 100%.",
      s: ["Deck 1 “Adrenal Glands and Venison”: whitetail buck + doe – Mount Kalaga National Park, abandoned concrete plant", "Deck 2 “Hog Endocrine Glands”: white Leonida turkey, eastern spotted skunk (at night from about 8 pm), wild boar – Adler Creek, Bonanza, Mount Kalaga", "Deck 3 “Cane Toad Venom Glands”: cane toad, nutria, Nile monitor – west and east Buckskin Swamp, Pelican Valley"] } },
  { id: "stunts", k: "aktiv", typ: "Stuntsprung", n: "Stuntsprünge – bekannte Namen (24 von 130)", r: "ganz Leonida – im Spiel unter Kartenfilter „Erkundung“", q: "e", src: ["ppsj"],
    t: "397 Stunts (130 Sprünge, 202 unter Brücken, 40 Messerflüge, 25 BASE). 300 für 100 %, 250 für „Cunning Stunts“, 50 Sprünge für den Nitro-Cheat. Für 100 % reicht der Sprung, die Zusatzaufgabe nicht nötig.",
    s: ["Mariana: Mile Zero Air Station Southeast, Saltrock Bridge West/East, Key Lento Bridge West/East, Longneck Trail, Nehrling River", "Vice-Dale: Hamlet Backyard, VCIA Storage Facility, SW 4th Avenue Construction, Blackwell Sandrock, Apollo Aggregates South, West Vice-Dale County Broken Bridge, Nolan Center Parking", "Leonard: Lake Bonner Construction East, Lake Leonida Lock South, Richard Barebone Overpass South", "Kelly: Gellhorn International Raceway, Prairie Court, Starlet Motel Construction, Howe Dairy, Saputka River, South Ambrosia Broken Bridge", "Lummox: North Moreau Broken Bridge"],
    en: { n: "Stunt jumps – known names (24 of 130)", r: "all of Leonida – in game under map filter “Exploration”",
      t: "397 stunts (130 jumps, 202 under bridges, 40 knife flights, 25 BASE). 300 for 100%, 250 for “Cunning Stunts”, 50 jumps for the nitrous cheat. For 100% the jump alone counts, the bonus task isn't needed.",
      s: ["Mariana: Mile Zero Air Station Southeast, Saltrock Bridge West/East, Key Lento Bridge West/East, Longneck Trail, Nehrling River", "Vice-Dale: Hamlet Backyard, VCIA Storage Facility, SW 4th Avenue Construction, Blackwell Sandrock, Apollo Aggregates South, West Vice-Dale County Broken Bridge, Nolan Center Parking", "Leonard: Lake Bonner Construction East, Lake Leonida Lock South, Richard Barebone Overpass South", "Kelly: Gellhorn International Raceway, Prairie Court, Starlet Motel Construction, Howe Dairy, Saputka River, South Ambrosia Broken Bridge", "Lummox: North Moreau Broken Bridge"] } }
];
/* leere Felder entfernen */
N.forEach(o => Object.keys(o).forEach(k => o[k] === undefined && delete o[k]));
N.forEach(o => o.en && Object.keys(o.en).forEach(k => o.en[k] === undefined && delete o.en[k]));
LH.ORTE.push(...N);

/* ================================================= Korrekturen an bestehenden Einträgen */
const PATCH = {
  "red-barn": { p: [-1837, -2876], g: 2, q: "m", src: ["gr", "vp", "olm", "ozc"],
    n: "Drogendeal-Lagerhalle bei Apollo Aggregates (ca. 13.000 $)", r: "Peregrine Bay, Süd-Vice-Dale – rote Halle östlich von Hamlet, Van mit Teddybären davor",
    t: "Bestes frühes Geld: Alle drinnen sind schon tot. Kokainziegel im Van draußen (je ca. 400 $), Geldtasche mit ca. 5.000–6.000 $ markierten Scheinen, Type 9 (MP), Duke 556 und Kalinga .50, im Bürotresor die Karte „Leroy Rook“ (bringt im Pfandhaus ca. 6.000 $). Laut Game Rant kommt die Ware nach Speichern und Laden wieder.",
    s: ["Tür eintreten, ins Büro mit den Teddybären, Tresor im Nebenraum knacken", "Hinten das Rolltor öffnen: zweiter Van mit Kokain", "Gelber Werkzeugkasten draußen: ca. 141 $ oder Sonnenbrille", "Geldtasche über Brians Lockup (7700) waschen", "Schleife: alles in den Kofferraum, speichern, laden – Ware liegt wieder da (laut Game Rant ca. 8.000 $ pro 5 Minuten)", "Bargeld aus Kapitel 1 geht am Kapitelende verloren – in die Family Savings legen"],
    en: { n: "Drug-deal warehouse at Apollo Aggregates (about $13,000)", r: "Peregrine Bay, South Vice-Dale – red warehouse east of Hamlet, van painted with teddy bears outside",
      t: "Best early money: everyone inside is already dead. Cocaine bricks in the van outside (about $400 each), a bag with about $5,000–6,000 in marked bills, Type 9 (SMG), Duke 556 and Kalinga .50, and the “Leroy Rook” card in the office safe (about $6,000 at a pawn shop). According to Game Rant the goods respawn after saving and loading.",
      s: ["Kick the door in, go to the office with the teddy bears, crack the safe in the next room", "Open the shutter at the back: second van with cocaine", "Yellow toolbox outside: about $141 or sunglasses", "Launder the bag through Brian's lockup (7700)", "Loop: everything into the trunk, save, load – the goods are back (per Game Rant about $8,000 per 5 minutes)", "Chapter 1 cash is lost at the end of the chapter – put it into Family Savings"] } },
  "papagei": { n: "Exotic Animals Front: Papagei, Lüftung und Tresor (ca. 2.300 $)", q: "m", src: ["olg", "gz", "vp", "olm", "ozc"],
    s: ["Ca. 1.300 $ im Wandgitter beim gelben Generator", "Tresor im Hinterraum: ca. 900–1.300 $ (knacken)", "Kasse: ca. 100 $", "Nicht auffallen – kommt die Polizei, räumt sie das Versteck aus"],
    en: { n: "Exotic Animals Front: parrot, vent and safe (about $2,300)",
      s: ["About $1,300 in the wall vent by the yellow generator", "Safe in the back room: about $900–1,300 (crack it)", "Register: about $100", "Stay unnoticed – if the police come, they clear the stash"] } },
  "crabshack": { s: ["Stromkasten am Hauptgebäude einschalten", "Am PC mit Passwort CLEAVES anmelden (steht auf den Dielen) und die Riesenkrabbe besiegen", "Tresor mit 0072 öffnen – ca. 1.035 $ und Zettel mit dem Türcode", "Im ersten Schuppen 0212 am Tastenfeld eingeben", "Dazu eine Tasche markierter Scheine (nach dem Waschen ca. 8.000–10.000 $)"],
    en: { s: ["Switch on the electrical box at the main building", "Log into the PC with password CLEAVES (written on the floorboards) and beat the giant crab", "Open the safe with 0072 – about $1,035 and a note with the door code", "Enter 0212 at the keypad in the first shack", "Plus a bag of marked bills (about $8,000–10,000 once laundered)"] } },
  "waffe-marabunta-grande-hobo": { at: "st-industrie", t: "Fundort: Waffenkoffer im Lagergebäude südlich von Hamlet am Highway (man hört Schreie)",
    en: { t: "Found: weapon case in the storage building south of Hamlet by the highway (you hear screaming)" } },
  "gang-12": { codes: [["Küchen-Tresor", "1819"]], s: ["Code 1819 steht am PC im Büro oben", "Küchen-Tresor: ca. 3.000–4.000 $ und eine Luxusuhr"],
    en: { c: ["Kitchen safe"], s: ["Code 1819 is on the PC in the upstairs office", "Kitchen safe: about $3,000–4,000 and a luxury watch"] }, src: ["ppg", "vp"] },
  "gang-11": { codes: [["Tresor oben", "1886"]], s: ["Code 1886 steht am PC – Tresor im Obergeschoss: ca. 3.700 $, Wertsachen, Luxusuhr", "Lagerhalle nebenan: Kokain für ca. 2.000 $ auf den Tischen"],
    en: { c: ["Upstairs safe"], s: ["Code 1886 is on the PC – upstairs safe: about $3,700, valuables, luxury watch", "Warehouse next door: about $2,000 of cocaine on the tables"] }, src: ["ppg", "vp"] },
  "gang-1": { s: ["Wetman Bay – per Boot anfahren, Wachen am Steg", "Im Gebäude am Wasser: Schreibtisch mit Kokain, Bargeld und Kingfishers W-22"],
    en: { s: ["Wetman Bay – approach by boat, guards on the dock", "In the building by the water: desk with cocaine, cash and the Kingfishers W-22"] }, at: "kingfisher-op" },
  "gang-3": { at: "laird-tiger", s: ["Ein Tiger greift drinnen einen Mann an – erst ausschalten (Schrotflinte steht hinter dem Gebäude)", "Tresor mit über 1.000 $, Kokain für ca. 640 $, Kingfishers Laird 350 im Waffenkoffer, Sammelkarte"],
    en: { s: ["A tiger is attacking a man inside – deal with it first (there's a shotgun behind the building)", "Safe with over $1,000, about $640 of cocaine, Kingfishers Laird 350 in the weapon case, a collectible card"] } },
  "gang-4": { codes: [["Bürotresor (unbestätigt)", "0300"]], en: { c: ["Office safe (unconfirmed)"] } },
  "gang-9": { codes: [["Tresor (Nova Auto Junkyard)", "7777"]], s: ["Code steht an der Wand gegenüber dem Tresor", "In einer Garage steht ein Cabrio"],
    en: { c: ["Safe (Nova Auto Junkyard)"], s: ["The code is on the wall you face at the safe", "A convertible sits in one of the garages"] } },
  "kl-badger": { s: ["Turm mit WAiNK scannen", "Karte „Thelma“ (Delights Dancers) ganz oben im Kontrollraum, Tisch neben dem Fernseher mit „No Signal“", "Oben auf dem Balkon: ca. 175 $ in der Telefonbox", "Karte „Georgia“ (NINE1NINE Dancers) gegenüber an der Sunbelt Hwy bei Steven Strachan Construction, hinten neben grüner Kiste"],
    en: { s: ["Scan the tower with WAiNK", "Card “Thelma” (Delights Dancers) at the top in the control room, table next to the TV showing “No Signal”", "Top balcony: about $175 in the phone box", "Card “Georgia” (NINE1NINE Dancers) across Sunbelt Hwy at Steven Strachan Construction, at the back next to a green container"] } }
};
const ORT_I = Object.fromEntries(LH.ORTE.map(o => [o.id, o]));
Object.entries(PATCH).forEach(([id, p]) => {
  const o = ORT_I[id]; if (!o) return;
  const { en, ...de } = p;
  Object.assign(o, de);
  if (en) o.en = Object.assign(o.en || {}, en);
  if (de.n && !(en && en.n)) delete (o.en || {}).n;
});
})();

/* =====================================================================
   v7.1 (21.11.2026): Community-Funde aus Reddit, YouTube und X
   (über Berichte von GamingBible, Dexerto, Kotaku, Vice, Beebom u. a.)
   ===================================================================== */
Object.assign(LH.QUELLEN, {
  rdgb: { name: "Reddit via GamingBible (9 Easter Eggs)", url: "https://www.gamingbible.com/news/gta-6-easter-eggs-778903-20261120" },
  dxh:  { name: "Dexerto (Verschwörungshaus)", url: "https://www.dexerto.com/gta/gta-6-screenshot-hidden-in-san-andreas-back-in-2021-was-real-and-the-house-has-a-dark-secret-3429837/" },
  kot:  { name: "Kotaku (31 Tipps)", url: "https://kotaku.com/32-spoiler-free-tips-as-you-hop-into-grand-theft-auto-6-2000758016" },
  kfp:  { name: "Kotaku/YouTube (Ego-Perspektive)", url: "https://kotaku.com/someone-discovered-how-to-glitch-into-first-person-mode-in-gta-6-2000758931" },
  psl:  { name: "PlayStation LifeStyle (Ego-Glitch)", url: "https://www.playstationlifestyle.net/2026/11/20/rockstar-games-gta-6-first-person-mode-glitch" },
  sgc:  { name: "ShowGamer (seltene Autos)", url: "https://showgamer.com/en/guides/8036-samye-redkie-mashiny-v-gta-6-gde-nayti-i-kak-poluchit-unikalnye-avto" },
  gtx:  { name: "GTA Xtreme (seltene Autos)", url: "https://www.gta-xtreme.com/gta-6/locations/hidden-cars" },
  vicp: { name: "Vice (Paul-Walker-Auto)", url: "https://www.vice.com/en/article/gta-6-paul-walker-mitsubishi-eclipse-location/" },
  vicr: { name: "Vice (Kodak-Black-Sender)", url: "https://www.vice.com/en/article/gta-6-players-discover-secret-radio-station-hosted-by-florida-rap-star-kodak-black/" },
  unl:  { name: "Unilad (Mandy)", url: "https://www.unilad.com/technology/gta-6-mandy-subplot-explained-400001-20261119" }
});
LH.TYP_ZEICHEN["Seltenes Auto"] = "C";
Object.assign(LH.TYP_ZEICHEN, { "Strangers & Freaks": "F", "Zufallsereignis": "!", "Randys Wunschliste": "R", "Wymans Klassiker": "W", "Nebenauftrag": "N", "Beziehung": "♥" });

(function () {
const AUTO_T = { de: "Mit dem Key Cloner (Kapitel 3) entsperren. Behalten: Fahndung abschütteln, Tracker ggf. entfernen, in einer Garage registrieren. Sichtungen aus der Community – das Auto steht nicht immer da.",
  en: "Unlock with the Key Cloner (chapter 3). To keep it: lose the wanted level, remove the tracker if needed, register it at a garage. Community sightings – the car isn't always there." };
const N = [
  /* -------- Geheimnisse aus Reddit/X */
  { id: "g-chiliad", k: "geheim", n: "Mount-Chiliad-Anspielung (GTA V)", r: "Früher Auftrag mit Donnie und Brian – zwei NPCs vor einer Bar", q: "e", src: ["rdgb"], c: 1,
    t: "Laut Reddit-Nutzer Tr1angleChoke unterhalten sich zwei NPCs vor einer Bar über das Mount-Chiliad-Rätsel aus GTA V. Einfach zuhören.",
    en: { n: "Mount Chiliad reference (GTA V)", r: "Early job with Donnie and Brian – two NPCs outside a bar", t: "According to Reddit user Tr1angleChoke, two NPCs outside a bar talk about GTA V's Mount Chiliad mystery. Just listen in." } },
  { id: "g-mandy", k: "geheim", n: "Mandys dunkles Geheimnis", r: "Mandys Haus, Key Lento (Mission „Pipework“)", q: "m", src: ["unl"], c: 1,
    t: "In „Pipework“ findet Jason im Abfluss etwas, das Mandy ihm sofort wegnimmt – Spieler haben erkannt, dass es ein menschlicher Finger ist. Vor dem Haus stehen Säurekanister und Sägen neben einem frisch ausgehobenen Grab.",
    en: { n: "Mandy's dark secret", r: "Mandy's house, Key Lento (mission “Pipework”)", t: "In “Pipework” Jason finds something in the drain that Mandy snatches away – players spotted that it's a human finger. Outside the house there are acid containers and saws next to a freshly dug grave." } },
  /* -------- Seltene Autos (Community-Sichtungen) */
  ...[
    ["car-infernus", "Pegassi Infernus", "Crosstown, Polizei-Parkhaus 7. Etage (NE/NW 9th St, östlich vom Rockridge Hospital)", "Crosstown, police parking garage level 7 (NE/NW 9th St, east of Rockridge Hospital)", [-600, 1150], 0, "Warten, bis die Polizei das Parkhaus verlässt, mit Key Cloner öffnen, über die Stuntrampe raus.", "Wait for the police to leave the garage, open it with the Key Cloner, escape via the stunt ramp.", 3],
    ["car-vitello", "Pegassi Vitello", "Villa-Garage am Flamingo Parkway, Waning Sands (östlich von Belville)", "Villa garage on Flamingo Parkway, Waning Sands (east of Belville)", [120, 3980], 0, "Über den Zaun, Garagentor öffnen, mit Key Cloner entsperren. Blockiert das Tor, mit Sprengstoff öffnen.", "Climb the fence, open the garage door, unlock with the Key Cloner. If the gate blocks you, blow it open.", 3],
    ["car-hellfire", "Bravado Gauntlet Hellfire", "M7-Schrottplatz an der Galerina St, östlich vom Boone Speedway (Hamlet)", "M7 junkyard off Galerina St, east of Boone Speedway (Hamlet)", [-2560, -3180], 0, "Erst die Einfahrtstore öffnen, nach hinten schleichen, entsperren und durch die offenen Tore raus.", "Open the entrance gates first, sneak to the back, unlock it and leave through the open gates.", 3],
    ["car-tempesta", "Pegassi Tempesta", "NE 3rd St, Downtown (Verkehr) · Hütte am Lake Tallaloko · Abschleppwagen-Ereignis", "NE 3rd St, Downtown (traffic) · cabin at Lake Tallaloko · tow-truck event", [-600, -60], 1, "Taucht im Verkehr, in einer Hütten-Einfahrt oder beim Abschleppwagen-Zufallsereignis auf (Auto befreien).", "Shows up in traffic, in a cabin driveway or in the tow-truck random event (free the car).", 3],
    ["car-cheetah", "'95 Grotti Cheetah (Ultimate Edition)", "Tiefgarage Pegassi Residences, Tequesta Retreat", "Underground garage, Pegassi Residences, Tequesta Retreat", [48, -1081], 2, "Erst nach „Honest Abe“ (Kapitel 5).", "Only after “Honest Abe” (chapter 5).", 5],
    ["car-buggy", "'67 Vapid Dominator Buggy (Ultimate Edition)", "Garage in den Grassrivers", "Garage in the Grassrivers", null, 0, "Erst nach „Thrillbillies“ (Kapitel 2).", "Only after “Thrillbillies” (chapter 2).", 2],
    ["car-furia", "Piccia Furia", "Villen-Garage, Palladia Ln, Peacock Estates", "Mansion garage, Palladia Ln, Peacock Estates", [-1140, -1950], 0, "", "", 3],
    ["car-banshee", "Bravado Banshee", "Sweetbay Inn, East Buckley Dr, Capri (spät nachts)", "Sweetbay Inn, East Buckley Dr, Capri (late at night)", [-6880, 300], 1, "", "", 0],
    ["car-paragon", "Ascot Paragon", "Vor der Banana-Hole-Bar, Shore Dr, Ocean Beach (abends)", "Outside The Banana Hole bar, Shore Dr, Ocean Beach (evenings)", [1935, 705], 1, "", "", 0],
    ["car-toros", "Pegassi Toros", "Vor den Pegassi Residences, Bayside Dr, Tequesta (abends)", "Outside Pegassi Residences, Bayside Dr, Tequesta (evenings)", [0, -956], 1, "", "", 0],
    ["car-growler", "Pfister Growler", "Parkhaus an der Fig St, Ocean Beach (nachmittags)", "Parking structure on Fig St, Ocean Beach (afternoons)", [1700, 800], 0, "", "", 0]
  ].map(([id, n, r, ren, p, g, t, ten, c]) => ({ id, k: "geheim", typ: "Seltenes Auto", n, r, p: p || undefined, g, c: c || undefined, q: "e", src: ["sgc", "gtx"],
    t: (t ? t + " " : "") + AUTO_T.de, en: { r: ren, t: (ten ? ten + " " : "") + AUTO_T.en } })),
  { id: "car-sultan", k: "geheim", typ: "Seltenes Auto", n: "Moses' Emperor Sultan (Belohnung)", r: "Moses' Werkstatt, Port Gellhorn", at: "moses", c: 2, q: "e", src: ["sgc"],
    t: "Belohnung nach 7 bestimmten Lieferungen an Moses: '82 Canis Crawler, '77 BF Bandito, Declasse Yosemite 1500, '95 Annis Hellion, Western Nightblade, '85 Karin Futo, '74 Declasse Vamos. Die meisten stehen um Port Gellhorn, Bandito und Nightblade bei Ambrosia. Registrieren kostet 1.600 $.",
    en: { n: "Moses' Emperor Sultan (reward)", r: "Moses' garage, Port Gellhorn", t: "Reward after 7 specific deliveries to Moses: '82 Canis Crawler, '77 BF Bandito, Declasse Yosemite 1500, '95 Annis Hellion, Western Nightblade, '85 Karin Futo, '74 Declasse Vamos. Most are around Port Gellhorn, the Bandito and Nightblade near Ambrosia. Registering costs $1,600." } }
];
N.forEach(o => Object.keys(o).forEach(k => o[k] === undefined && delete o[k]));
LH.ORTE.push(...N);

const ORT_I = Object.fromEntries(LH.ORTE.map(o => [o.id, o]));
const P = (id, de, en) => { const o = ORT_I[id]; if (!o) return; Object.assign(o, de); if (en) o.en = Object.assign(o.en || {}, en); };
P("ufo-haus", { n: "Verschwörungs-Garage (Haus aus San Andreas DE)", q: "m", src: ["wg", "dxh"],
  t: "Das Haus vom Foto aus der Lil' Probe'Inn-Bar in GTA San Andreas DE (2021). In der Garage haust ein Verschwörungstheoretiker, der glaubt, in einem Videospiel zu leben: Notizen über gleich aussehende NPCs, Nachbarn, die nicht in ihre Häuser können, Leute, die durch Wände clippen, und zwei Personen „J“ und „L“, für die die Regeln nicht gelten. Dazu Schlange im Kofferraum und ein Meteorit, den man online verkaufen kann.",
  s: ["Gefunden von Jared aus der GTA-VI-Mapping-Community am Release-Tag", "Er will per Boot aus Leonida fliehen – kein Flugticket nach Los Santos"] },
  { n: "Conspiracy garage (house from San Andreas DE)", t: "The house from the photo in GTA San Andreas DE's Lil' Probe'Inn bar (2021). A conspiracy theorist who believes he lives in a video game hides out in the garage: notes about identical-looking NPCs, neighbours who can't enter their homes, people clipping through walls, and two people “J” and “L” the rules don't apply to. Plus a snake in the car trunk and a meteorite you can sell online.",
    s: ["Found by Jared from the GTA VI mapping community on release day", "He plans to flee Leonida by boat – no plane ticket to Los Santos"] });
P("eclipse", { n: "Paul Walkers Eclipse (Maibatsu '97 Penumbra FF)", q: "m", src: ["gz", "vicp"], p: [2350, 950], g: 0,
  t: "Brian O'Conners grüner Eclipse aus „The Fast and the Furious“. Villa-Garage eines weißen Hauses mitten auf Vespucci Island (Rialto Islands, westlich von Vice Beach). In die Garage einbrechen, kurzschließen und in einer Garage registrieren – früh im Spiel möglich." },
  { n: "Paul Walker's Eclipse (Maibatsu '97 Penumbra FF)", t: "Brian O'Conner's green Eclipse from “The Fast and the Furious”. Villa garage of a white house in the middle of Vespucci Island (Rialto Islands, west of Vice Beach). Break into the garage, hotwire it and register it at a garage – possible early on." });
P("w-s11", { t: "WAiNK-Skulptur. Laut Reddit (akspree): vier Pferde mit seltsamen Symbolen, eins trägt einen Leitkegel. In der Nähe vibriert der Controller und es piepst – mögliches neues Rätsel.", src: ["psw", "rdgb"] },
  { t: "WAiNK sculpture. According to Reddit (akspree): four horses with strange symbols, one wearing a traffic cone. Nearby the controller vibrates and you hear beeping – possibly a new mystery." });
["pl-1", "pl-2", "pl-3", "pl-4"].forEach(id => P(id, { src: ["ppl", "vicr"], t: "Mit WAiNK scannen. Alle 4 Poster schalten die versteckte Playlist „The Sniper of La Perle“ frei, moderiert von Kodak Black (On Demand). Für 100 % nötig." },
  { t: "Scan with WAiNK. All 4 posters unlock the hidden playlist “The Sniper of La Perle”, hosted by Kodak Black (On Demand). Needed for 100%." }));

/* -------- Korrekturen aus der Helfer-Recherche (v8) */
P("forschung-2314", { n: "Verlassener Forschungsaußenposten (Riesenkrabbe)", r: "Gullet Marsh, Mariana County", p: [-3680, -3600], g: 0, q: "u", src: ["rdgb"],
  t: "Mehrere Berichte: abgelegener Außenposten im Gullet Marsh – Strom am Sicherungskasten draußen einschalten, Journal am Computer lesen, beim Weggehen greift eine riesige Mutantenkrabbe an. Möglicherweise derselbe Ort wie die Crabshack-Forschungsstation (Pelican Valley)." },
  { n: "Abandoned research outpost (giant crab)", r: "Gullet Marsh, Mariana County", t: "Several reports: remote outpost in Gullet Marsh – switch on the power at the breaker box outside, read the journal on the computer, a giant mutant crab attacks as you leave. Possibly the same place as the Crabshack research station (Pelican Valley)." });
P("k-jd", { q: "u", s: ["PowerPyx: Haus direkt nördlich vom Pay 'n' Spray in Grayson – gelbe Box auf der hinteren Terrasse", "Alternativ: Grassrivers nordöstlich des Manatee Motel im Maul eines Alligatorkopfs", "Eventuell mehrere Fundorte – im Spiel prüfen"] },
  { s: ["PowerPyx: house directly north of the Pay 'n' Spray in Grayson – yellow box on the back porch", "Alternative: Grassrivers northeast of the Manatee Motel, in the mouth of an alligator head", "Possibly several spawn points – check in game"] });
P("medi-2", { r: "Nördlichste Sandbank oben an Belpoint, westlich von Capri – Steinmuster im Sand" }, { r: "Northernmost sandbar at the top of Belpoint, west of Capri – stone pattern in the sand" });
P("medi-6", { r: "Gegenüber der Lawton Co. Paper Mill, südlich der MacAlister Gold Mine (Moreau)" }, { r: "Opposite Lawton Co. Paper Mill, south of MacAlister Gold Mine (Moreau)" });
P("medi-8", { r: "Südlich der Bahngleise, etwa östlich von Killtelligence Provisions" }, { r: "South of the railway tracks, roughly east of Killtelligence Provisions" });
P("kl-sms1", { n: "Gun Nut SMS-01 (Scharfschützengewehr)" }, { n: "Gun Nut SMS-01 (sniper rifle)" });/* -------- Tipps aus Community und Kotaku */
/*<v9k>*/
/* v9-Korrekturen (21.11.2026) */
P("kl-mitte", {"t": "Kokain-Flamingo im Garten des exzentrisch dekorierten Hauses in der Mitte von Key Lento", "src": ["tbl", "r93ec487"]}, {"t": "Cocaine flamingo in the garden of the eccentric house in the middle of Key Lento"});
P("aktiv-ambrosia-raceway-demolition-2-rennen-amb", {"t": "Demolition-Rennen nördlich von Ambrosia 3.800–6.300 $ pro Sieg, wiederholbar; Oval über 3.000 $, ca. doppelt so viel wie die Acht.", "src": ["pp", "r9e66778"]}, {"t": "$3,800–6,300 per win, repeatable; oval over $3,000, about double the figure-eight."});
P("raub-payday-loans-little-cuba-little-cuba", {"t": "15–25 Tsd. $. Alle 7 für 100 %. Tipps über Yasmani. Bis 25.000 $ (andere Payday Loans 5.000–15.000 $).", "src": ["pp", "r92ba1b3"]}, {"t": "Up to $25,000 (other Payday Loans $5k–15k)."});
P("waffe-assassin-nipper-38", {"r": "Kleine Bodenluke in einem Schiffswrack am Südostrand der Permit Keys, östlich der Mile Zero Air Station – Teil des Spionageboot-Rätsels.", "src": ["det", "r99d935d"]}, {"r": "Small floor hatch in a shipwrecked boat on the southeastern edge of Permit Keys, east of Mile Zero Air Station – part of the spy boat puzzle."});
P("waffe-smuggler-gorse-425", {"r": "Gestrandetes Schmugglerboot auf einer kleinen Insel östlich der Mile Zero Air Station (Permit Keys).", "src": ["det", "r960eff1"]}, {"r": "Abandoned smuggler's boat washed up on a small island east of Mile Zero Air Station, Permit Keys."});
P("waffe-zodiac-nipper-38", {"r": "Beute der Illegal Operation „Ocean Beach Lab“ (Ocean Beach).", "src": ["det", "r93aadff"]}, {"r": "Looted during the Ocean Beach Lab Illegal Operation (Ocean Beach)."});
P("waffe-quarter-mile-es9", {"r": "Beute der Illegal Operation „Chatfield Storage & Logistics“ auf Waxman Island, östlich von Downtown.", "src": ["det", "r904e75e"]}, {"r": "Looted during the Chatfield Storage & Logistics Illegal Operation on Waxman Island, east of Downtown."});
P("waffe-sand-storm-es9", {"r": "Kaufbar für 1.470 $ bei Big Shots (Ammu-Nation), Ostseite von Hamlet.", "src": ["det", "r9cce331"]}, {"r": "Sold for $1,470 at Big Shots Ammu-Nation, east side of Hamlet."});
P("waffe-the-patriarch-drx", {"r": "Unter Wasser neben einem versunkenen Auto im Südwesten des Kalaga Reservoir – am Ufer verstreutes Gepäck markiert die Stelle, hinter den Algen tauchen.", "src": ["det", "r9f4b3ff"]}, {"r": "Underwater next to a sunken car in the southwest of Kalaga Reservoir – luggage scattered on the bank marks the spot; dive past the algae."});
P("waffe-rogue-alpha-drx", {"r": "Kaufbar für 4.410 $ bei Quickscope (Ammu-Nation) gegenüber dem Kensinger Tower, Downtown Vice City.", "src": ["det", "r92e0b33"]}, {"r": "Sold for $4,410 at Quickscope Ammu-Nation, across from Kensinger Tower, Downtown Vice City."});
P("waffe-kingfishers-akulus", {"r": "Beute der Illegal Operation „Sunrise RV Park“ nördlich des Cottonmouth Lake.", "src": ["det", "r95ad3ce"]}, {"r": "Looted during the Sunrise RV Park Illegal Operation, north of Cottonmouth Lake."});
P("waffe-neon-sunset-type-9", {"r": "Kaufbar für 2.310 $ bei Vice City Firearms in Salton.", "src": ["det", "r925422e"]}, {"r": "Sold for $2,310 at Vice City Firearms in Salton."});
P("waffe-kolt-associates-556", {"r": "Beute der Illegal Operation „Stash House“ im Norden von Port Gellhorn, etwas östlich von Brooks Boatworks.", "src": ["det", "r93af026"]}, {"r": "Looted during the Stash House Illegal Operation in north Port Gellhorn, a little east of Brooks Boatworks."});
P("waffe-little-cuba-hind", {"r": "Nur bei Martez Empeños (Little Cuba) erhältlich.", "src": ["det", "r92c224e"]}, {"r": "Sold only at Martez Empeños (Little Cuba)."});
P("waffe-shark-knife", {"r": "Meeresboden nördlich der Saint Attaway Islands, in einer Unterwasserschlucht neben einem Haikäfig im Boden steckend.", "src": ["det", "r9c36c9a"]}, {"r": "On the seabed north of the Saint Attaway Islands, stuck in an underwater ravine next to a shark cage."});
P("waffe-kingpin-heathen", {"r": "Beute der Illegal Operation „Vespucci Mansion“ auf Vespucci Island (Rialto Islands).", "src": ["det", "r9cc389a"]}, {"r": "Looted during the Vespucci Mansion Illegal Operation on Vespucci Island (Rialto Islands)."});
P("waffe-mercenary-lmg-6", {"r": "Gelber Scoop-Container im Norden des Frachtbereichs von Port Vice City. Tipp: vom Wasser kommen, Leiter hoch, vom blauen auf den beigen Container springen.", "src": ["det", "r9788a53"]}, {"r": "Yellow Scoop shipping container in the northern Port Vice City cargo area. Tip: approach from the water, climb the ladder, jump from the blue to the beige container."});
P("waffe-explorer-s-knife", {"r": "Unterirdischer Teil des Emerald River: durch Selkie Hole, Tauchausrüstung und Taschenlampe nehmen, dann dem gelben Führungsseil nach Norden am Warnschild vorbei folgen.", "src": ["det", "r9b68e27"]}, {"r": "Underground section of Emerald River: go through Selkie Hole, take the scuba gear and flashlight, follow the yellow guide rope north past the warning sign."});
P("waffe-tallaloko-knife", {"r": "Hinter verschlossener Tür im 1. OG der Evergreen-Hütte am Westufer des Lake Tallaloko (Ost-Lummox). Die Kassette enthält zusätzlich Schmuck für über 7.000 $.", "src": ["det", "r929019e"]}, {"r": "Behind the locked door on the upper floor of the Evergreen cabin, west side of Lake Tallaloko (East Lummox). The lockbox also holds over $7,000 in jewelry."});
P("waffe-soldier-s-combat-knife", {"r": "In der Luke eines halb versunkenen Panzers am Westufer zwischen Bobcat Bight und Bobcat Key.", "src": ["det", "r9ac0bd3"]}, {"r": "Inside the hatch of a partly sunken tank on the west shore between Bobcat Bight and Bobcat Key."});
P("waffe-star-spangled-556", {"r": "Kaufbar für 3.050 $ bei Phil's Ammu-Nation, Southside.", "src": ["det", "r97a9a9f"]}, {"r": "Sold for $3,050 at Phil's Ammu-Nation, Southside."});
P("waffe-firebreak-sm-69", {"r": "Kaufbar für 3.890 $ bei R. Willis Jr. Supplies (Lummox County, nordwestlich des Kalaga Reservoir).", "src": ["det", "r957c32c"]}, {"r": "Sold for $3,890 at R. Willis Jr. Supplies, Lummox County, northwest of Kalaga Reservoir."});
P("waffe-twin-s-laird-350", {"r": "Am Boden neben einem kleinen Jägerhochsitz im Wald östlich des Kalaga Reservoir (Lummox County).", "src": ["det", "r904ffb3"]}, {"r": "On the ground near a small hunting platform in the woods east of Kalaga Reservoir, Lummox County."});
P("waffe-fincredible-laird-350", {"r": "Kaufbar für 2.000 $ bei Guns Aplenty! in Watson Bay.", "src": ["det", "r952daea"]}, {"r": "Sold for $2,000 at Guns Aplenty! in Watson Bay."});
P("waffe-redneck-w-22", {"r": "Hinten in einem verlassenen gelben Eisenbahnwagen am Nordufer eines Flusses in Moreau (von Süden betreten).", "src": ["det", "r9e238ed"]}, {"r": "At the back of an abandoned yellow train car on the north bank of a river in Moreau (enter from the south)."});
P("waffe-mossy-mediator", {"r": "Kaufbar für 1.890 $ bei Barrage Gun Supply in Southwind, nahe Mile Zero Air Station.", "src": ["det", "r9a0f881"]}, {"r": "Sold for $1,890 at Barrage Gun Supply in Southwind, near Mile Zero Air Station."});
P("waffe-internal-affairs-ff-sr", {"r": "Nordwestrand des Dachs des höchsten Gebäudes an der Northside Ave, Washington Beach (das mit Hubschrauberlandeplatz).", "src": ["det", "r9dac74c"]}, {"r": "Northwest edge of the roof of the tallest building on Northside Ave, Washington Beach (the one with the helipad)."});
P("waffe-guardia-brothers-fra", {"r": "Beute der Illegal Operation „Casa Guardia“, Nordost-Little-Cuba.", "src": ["det", "r9879371"]}, {"r": "Looted during the Casa Guardia Illegal Operation, northeast Little Cuba."});
P("waffe-san4san-kz-59", {"r": "Beute der Illegal Operation „Janjak's Garage“, Süd-La-Perle.", "src": ["det", "r98c31a6"]}, {"r": "Looted during the Janjak's Garage Illegal Operation, south La Perle."});
P("waffe-nite-raptor-k17", {"r": "Kaufbar für 2.050 $ bei Black Eagle (Ammu-Nation), Balsero.", "src": ["det", "r9b9f6ca"]}, {"r": "Sold for $2,050 at Black Eagle Ammu-Nation, Balsero."});
P("waffe-deadringer-1992", {"r": "Auf dem Boden eines Wohnwagens am Südufer des Moreau River (Ost-Lummox County).", "src": ["det", "r9385d13"]}, {"r": "On the floor of a mobile home on the south bank of the Moreau River, East Lummox County."});
P("waffe-money-bag-1992", {"r": "Auf der Couch eines Wohnwagens am Südufer des Moreau River (Ost-Lummox County) – gleicher Ort wie Deadringer 1992.", "src": ["det", "r97ff422"]}, {"r": "On the couch of a mobile home on the south bank of the Moreau River, East Lummox County – same spot as the Deadringer 1992."});
P("waffe-iron-oak-wcr-1", {"r": "Kaufbar für 1.260 $ bei Iron & Oak in Stockyard (Nordende von Vice City).", "src": ["det", "r9551bd4"]}, {"r": "Sold for $1,260 at Iron & Oak in Stockyard, northern Vice City."});
P("waffe-honky-tonk-mustang-357", {"r": "Kaufbar für 3.780 $ bei Phil's Ammu-Nation, Southside.", "src": ["det", "r94aa91a"]}, {"r": "Sold for $3,780 at Phil's Ammu-Nation, Southside."});
P("waffe-couch-potato-mustang-357", {"r": "In einer Couch, die vor einem Wohnwagen am Tanglewood Ln. (Port Gellhorn) im Baum hängt: Seile abschießen, dann auf die Couch setzen.", "src": ["det", "r9d71699"]}, {"r": "In a couch hanging from a tree outside a mobile home off Tanglewood Ln., Port Gellhorn: shoot the ropes, then sit on the couch."});
P("waffe-little-friend-w-10", {"r": "Direkt hinter einer blutverschmierten Tür im 1. OG des Sunlite Motel an der Shore Drive, Ocean Beach (Treppe unter roter Markise).", "src": ["det", "r9794662"]}, {"r": "Just inside a blood-stained doorway on the upper floor of the Sunlite Motel off Shore Drive, Ocean Beach (stairs under a red awning)."});
P("waffe-woodhatch-longshot", {"r": "Kaufbar für 2.990 $ bei Woodhatch (Ammu-Nation), Capri.", "src": ["det", "r9b1445d"]}, {"r": "Sold for $2,990 at Woodhatch Ammu-Nation, Capri."});
P("waffe-backdoor-hobo", {"r": "Kaufbar für 2.502 $ bei Zenon's Pawn Shop, La Perle.", "src": ["det", "r9116fc1"]}, {"r": "Sold for $2,502 at Zenon's Pawn Shop, La Perle."});
P("waffe-hellspawn-comshot-12", {"r": "Belohnung einer Herausforderung an einem Bergcamp an einer Nebenstraße im Westen von North Kelly County: die Opfergabe auf dem geschnitzten Holzthron essen und überleben (dazu ein „Circles of Hell“-Shirt).", "src": ["det", "r9b75ec9"]}, {"r": "Reward for a challenge at a mountain campsite off a side road in western North Kelly County: eat the offering on the carved wooden throne and survive (plus a Circles of Hell tee)."});
P("waffe-unpacked-comshot-12", {"r": "Haus an der Nordwestküste von Key Lento: Außentreppe ins Obergeschoss, hinteres Schlafzimmer – lehnt hinter der Tür des Badezimmers an der Wand.", "src": ["det", "r9977b36"]}, {"r": "House on the northwest coast of Key Lento: exterior stairs to the upper floor, rear bedroom – leaning behind the en-suite bathroom door."});
P("waffe-nitepower-az1200", {"r": "Kaufbar für 4.830 $ bei Black Eagle (Ammu-Nation) neben der Griffin Shooting Range, Nord-Balsero.", "src": ["det", "r9b0c7b3"]}, {"r": "Sold for $4,830 at Black Eagle Ammu-Nation next to Griffin Shooting Range, north Balsero."});
P("waffe-final-chapter-shortstraw", {"r": "Beute der Illegal Operation „Hog Stars Garage“ in Ambrosia, nahe dem Pay 'n' Spray.", "src": ["det", "r9d4db28"]}, {"r": "Looted during the Hog Stars Garage Illegal Operation in Ambrosia, near the Pay 'n' Spray."});
P("waffe-hostile-super400", {"r": "Beute der Illegal Operation „Mill Station Radar Base“ in den Grassrivers, nördlich von Watson Bay.", "src": ["det", "r914d0b8"]}, {"r": "Looted during the Mill Station Radar Base Illegal Operation in Grassrivers, north of Watson Bay."});
P("waffe-bruiser-super400", {"r": "Kaufbar für 5.930 $ bei Vice City Gun & Pawn, Südseite von Rockridge.", "src": ["det", "r9f5b2dc"]}, {"r": "Sold for $5,930 at Vice City Gun & Pawn, south side of Rockridge."});
P("waffe-watcher-pro-moreland-850", {"r": "Kaufbar für 1.470 $ bei Tactical Outlet Guns, äußerster Westen von Belville.", "src": ["det", "r9db633f"]}, {"r": "Sold for $1,470 at Tactical Outlet Guns, far west Belville."});
P("waffe-spangled-vatra", {"r": "Kaufbar für 2.520 $ bei Jackson Firearms, Südostecke von Balsero.", "src": ["det", "r9c0723e"]}, {"r": "Sold for $2,520 at Jackson Firearms, southeast corner of Balsero."});
P("waffe-stoner-k17-mcd", {"r": "Auf dem Nachttisch rechts vom Bett in Zimmer 115 des Big Day Motel an der US-35, nördlich von Ambrosia.", "src": ["det", "r908d6ca"]}, {"r": "On the nightstand right of the bed in room 115 of the Big Day Motel off US-35, just north of Ambrosia."});
P("waffe-black-eagle-import-kalinga", {"r": "Tresor im Büro in der vorderen Ecke der Black-Eagle-Lagerhalle neben dem Black-Eagle-Laden (Balsero). Büro mit Keypad; der Tresorcode steht auf dem Login-Bildschirm des Bürocomputers.", "src": ["det", "r966f92c"]}, {"r": "Safe in the office in the front corner of the Black Eagle warehouse next to the Black Eagle store, Balsero. Keypad office; safe code is on the office computer's login screen."});
P("waffe-chromium-w-10", {"r": "Beute der Illegal Operation „La Perle Trap House“.", "src": ["det", "r9ef2a0c"]}, {"r": "Looted during the La Perle Trap House Illegal Operation."});
P("waffe-chronic-vatra", {"r": "Beute der Illegal Operation „Industrial Weed Grow“ im Norden von Mariana County (nördlich von Tola Bay und Big Pine).", "src": ["det", "r9da4950"]}, {"r": "Looted during the Industrial Weed Grow Illegal Operation, North Mariana County (north of Tola Bay and Big Pine)."});
P("waffe-double-cross-vatra", {"r": "Meeresboden des Gulf Leonida westlich von Bobcat Key (Mariana County); drei an der Oberfläche treibende Leichen markieren die Stelle.", "src": ["det", "r94dc254"]}, {"r": "Seabed of Gulf Leonida west of Bobcat Key, Mariana County; three bodies floating at the surface mark the spot."});
P("waffe-basher-gorse-425", {"r": "Kaufbar im Pawn & Gun (Ammu-Nation) auf der Südseite von Port Gellhorn.", "src": ["det", "r944964a"]}, {"r": "Sold at the Pawn & Gun Ammu-Nation on the south side of Port Gellhorn."});
P("waffe-final-chapter-kvga-12", {"r": "Beute der Illegal Operation „Irons Building Supply“ in Ambrosia, südwestlich des Lake Leonida.", "src": ["det", "r9853a14"]}, {"r": "Looted during the Irons Building Supply Illegal Operation in Ambrosia, southwest of Lake Leonida."});
P("waffe-marabunta-grande-hobo", {"r": "Waffenkiste in einem Industrie-Lagergebäude südlich von Hamlet (South Vice-Dale County) an der Straße zum Highway – den Schreien folgen und die Räume durchsuchen.", "src": ["det", "r905102c"]}, {"r": "Weapon case in an industrial storage building south of Hamlet (South Vice-Dale County), on the road to the highway – follow the screams and search the rooms."});
P("waffe-gutterball-moreland-850", {"r": "Beute der Illegal Operation „Kingpin Bowling“ (Süden von Port Gellhorn).", "src": ["det", "r966baab"]}, {"r": "Obtained from the Kingpin Bowling job (Illegal Operation, south Port Gellhorn)."});
P("dienst-mitchell-auto-center-port-gellhorn", {"t": "4.000 $, 1 Stellplatz. Alle kaufbaren = Trophäe „Little Boxes“. Historic Route 628, Kelly County (Mitte von Kelly County, östlich von Port Gellhorn). 4.000 $, 1 Stellplatz, Kauf per Vice City Real Estate App.", "src": ["pp", "r961f462"]}, {"t": "Historic Route 628, Kelly County (east of Port Gellhorn). $4,000, 1 spot, bought via the Vice City Real Estate app."});
P("dienst-persistence-road-garage", {"r": "Westliches Belville, Leonard County. 1 Stellplatz. Preis laut GTABase 7.600 $, laut XboxPlay 9.500 $.", "src": ["pp", "r961f462"]}, {"r": "Western Belville, Leonard County. 1 spot. Price $7,600 per GTABase, $9,500 per XboxPlay."});
P("dienst-7th-avenue-garage", {"r": "Salton, Vice City (östlich des Flughafens VCIA an der Hauptstraße, nordwestlich von Tequesta). 12.000 $, 1 Stellplatz.", "src": ["pp", "r961f462"]}, {"r": "Salton, Vice City (east of VCIA on the main road, northwest of Tequesta). $12,000, 1 spot."});
P("dienst-store-n-bolt", {"r": "Nord-Ambrosia, Kelly County (nordwestlich von Wyatt Motors, links vom großen Monument). 16.800 $, 1 Stellplatz.", "src": ["pp", "r961f462"]}, {"r": "Northern Ambrosia, Kelly County (northwest of Wyatt Motors, left of the large monument). $16,800, 1 spot."});
P("dienst-wyatt-motors", {"r": "Allied Crystal, Zentrum von Ambrosia, neben einem Pay 'n' Spray. 21.600 $, 1 Stellplatz.", "src": ["pp", "r961f462"]}, {"r": "Allied Crystal, central Ambrosia, next to a Pay 'n' Spray. $21,600, 1 spot."});
P("dienst-vela-rota-drive-garage", {"r": "Mitte von Capri, Mariana County. 1 Stellplatz. Preis laut GTABase 24.000 $, laut XboxPlay 30.000 $.", "src": ["pp", "r961f462"]}, {"r": "Central Capri, Mariana County. 1 spot. Price $24,000 per GTABase, $30,000 per XboxPlay."});
P("dienst-bonita-court-garage", {"r": "Mitte von Washington Island, nördlich von Washington Beach (Vice Beach). 34.000 $, 1 Stellplatz.", "src": ["pp", "r924f5ae"]}, {"r": "Middle of Washington Island, north of Washington Beach (Vice Beach). $34,000, 1 spot."});
P("dienst-atlantic-court-garage", {"r": "Ocean Beach, südlich des Y Hotel, südwestlich des VYB Club. 40.000 $, 1 Stellplatz.", "src": ["pp", "r924f5ae"]}, {"r": "Ocean Beach, south of the Y Hotel, southwest of VYB Club. $40,000, 1 spot."});
P("dienst-thompson-court-garage", {"r": "Ocean Beach, Vice Beach. Kostenlos nach der Mission „Company Cars“ (Kap. 4), 2 Stellplätze.", "src": ["pp", "r961f462"]}, {"r": "Ocean Beach, Vice Beach. Free after the Chapter 4 mission Company Cars, 2 spots."});
P("dienst-ne-15th-street-garage", {"r": "Stockyard, Vice City. Kostenlos nach „Operation Savage Glory“ (Kap. 5), 2 Stellplätze.", "src": ["pp", "r961f462"]}, {"r": "Stockyard, Vice City. Free after Operation Savage Glory (Chapter 5), 2 spots."});
P("dienst-pegassi-residences-garage-tequesta", {"t": "Story: nach „Operation Savage Glory“ (Kap. 5), 3 Stellplätze. Alle kaufbaren = Trophäe „Little Boxes“. Tequesta Retreat. Kostenlos nach „Operation Savage Glory“ (Kap. 5), 3 Stellplätze.", "src": ["pp", "r961f462"]}, {"t": "Tequesta Retreat. Free after Operation Savage Glory (Chapter 5), 3 spots."});
P("dienst-port-gellhorn-station-garage-port-gellho", {"t": "Story: nach „Daily Driver“ (Kap. 2), 1 Stellplatz. Alle kaufbaren = Trophäe „Little Boxes“. Nördlich von Moses' Werkstatt, westlich des Delights Strip Club. Kostenlos nach der Kap.-2-Mission „Daily Driver“ (schaltet auch die Vice City Real Estate App frei).", "src": ["pp", "r924f5ae"]}, {"t": "North of Moses' auto shop, west of Delights Strip Club. Free after Chapter 2 mission Daily Driver (also unlocks the Vice City Real Estate app)."});
/*</v9k>*/
const T = (kat, de, katEn, en) => { const a = [kat, de]; a.en = [katEn, en]; return a; };
LH.TIPPS.push(
  T("Fahndung", "Bei 1 Stern mit Focus einen Polizisten ansprechen – das Gespräch kann die Fahndung auflösen.", "Wanted", "At 1 star talk to a cop using Focus – the conversation can clear the wanted level."),
  T("Fahrzeug", "Reparieren an der Zapfsäule ist billiger als über Scooter Bros.", "Vehicle", "Repairing at a gas pump is cheaper than via Scooter Bros."),
  T("Fahrzeug", "RydeMe als Schnellreise: im Auto 100 $ zahlen und die Fahrt überspringen.", "Vehicle", "RydeMe as fast travel: pay $100 inside the car and skip the drive."),
  T("Fahrzeug", "Autos mit rotem (Advanced) Tracker früh meiden – die Polizei findet dich darüber.", "Vehicle", "Avoid cars with a red (advanced) tracker early – the police can find you through it."),
  T("Welt", "Steuerkreuz halten verlangsamt die Zeit und setzt GPS-Punkte auf Orte in der Nähe.", "World", "Holding the D-pad slows time and lets you set GPS waypoints to nearby places."),
  T("Welt", "Vibriert der Controller zu Fuß, gibt es meist etwas mit WAiNK zu scannen.", "World", "If the controller vibrates on foot, there's usually something to scan with WAiNK."),
  T("Welt", "Focus zeigt alarmgesicherte Türen – so löst du den Alarm nicht aus.", "World", "Focus highlights alarmed doors so you don't trigger them."),
  T("Welt", "Müll richtig wegwerfen bringt Focus und Verhaltenspunkte, auf den Boden werfen kostet.", "World", "Throwing trash in a bin earns Focus and behaviour points; littering costs you."),
  T("Kampf", "Essen und Trinken vor dem Losgehen – stärkt Gesundheit, Ausdauer und Focus; geht auch beim Fahren und Schießen.", "Combat", "Eat and drink before heading out – boosts health, stamina and Focus; works while driving and shooting too."),
  T("Kampf", "Zombix (Heilung) bekommst du im Laden, wenn du den Verkäufer ansprichst.", "Combat", "You get Zombix (healing) in convenience stores by talking to the clerk."),
  T("Beziehung", "Hunde und Katzen streicheln bringt Focus und Verhaltenspunkte; Kleidung als Paar kaufen bringt Beziehungspunkte.", "Relationship", "Petting dogs and cats earns Focus and behaviour points; shopping for clothes as a couple earns relationship points."),
  T("Welt", "Erinnerungen im Handy prüfen – sie führen oft zu neuen Story-Momenten.", "World", "Check the phone's reminders – they often lead to new story moments.")
);
LH.TIPPS.slice(-12).forEach(t => t.src = ["kot"]);

/* -------- Glitch: Ego-Perspektive (YouTube: oneboyler & OrangeGuy) */
LH.GLITCHES.push({ n: "Ego-Perspektive (inoffiziell)", q: "m", src: ["kfp", "psl"],
  t: "Von den YouTubern oneboyler und OrangeGuy: Einstellungen → Controller → Touchpad (PS5) bzw. Ansicht-Taste (Xbox) von „Karte“ auf „Kamera“ stellen. Im Auto das Handy öffnen und beim Schließen mehrmals schnell die Kamera-Taste drücken. Zurück in die Third-Person nur durch Neuladen des Spielstands.",
  en: { n: "First-person view (unofficial)", t: "From YouTubers oneboyler and OrangeGuy: Settings → Controller → set Touch Pad (PS5) or View button (Xbox) from “Map” to “Camera”. In a car open the phone and spam the camera button while closing it. You only get back to third person by reloading your save." } });
})();

/* v8: Ratgeber-Punkte aus dem Cloudflare-Thread (PowerPyx, MetaForge, Insider Gaming, NoobFeed, allthings.how) */
(function () {
const T = (kat, de, katEn, en, src) => { const a = [kat, de]; a.en = [katEn, en]; a.src = src; return a; };
Object.assign(LH.QUELLEN, {
  ppf: { name: "PowerPyx (Hehler)", url: "https://www.powerpyx.com/?p=370548" },
  ppst: { name: "PowerPyx (Werte)", url: "https://www.powerpyx.com/?p=370566" },
  ppam: { name: "PowerPyx (Ammu-Nation)", url: "https://www.powerpyx.com/?p=371141" },
  igp: { name: "Insider Gaming (Profile)", url: "https://insider-gaming.com/all-criminal-profiles-explained-gta-6/" },
  nfb: { name: "NoobFeed (Beziehung)", url: "https://noobfeed.com/articles/gta-6-improve-jason-lucias-romantic-relationship" },
  mfb: { name: "MetaForge (Einsteiger)", url: "https://metaforge.app/gta-6/gta-6-beginner-tips-things-to-do-first" }
});
LH.TIPPS.push(
  T("Welt", "Missionen lassen sich nicht wiederholen – oft manuell speichern (15 Speicherplätze).", "World", "Missions can't be replayed – save manually often (15 save slots).", ["mfb"]),
  T("Fahndung", "Im Kofferraum lassen sich bis zu 5 Outfits lagern – ideal zum schnellen Umziehen nach Überfällen.", "Wanted", "The trunk holds up to 5 outfits – ideal for a quick change after robberies.", ["mfb"]),
  T("Geld", "Ab Yasmani kann man Ware an jeder eigenen Garage abgeben; der Partner kann „Ware verkaufen“ übernehmen.", "Money", "From Yasmani on you can drop goods at any of your garages; your partner can take over “sell goods”.", ["ppf"]),
  T("Geld", "Hehler-Stufen: Brian sehr niedrig, Donnie niedrig (Kap. 1), Dunk (Port Gellhorn), Tyrone hoch für Drogen, Yasmani hoch für Schmuck und markierte Scheine, Moses für Autos ohne Tracker, Randy für Autos mit Advanced Tracker.", "Money", "Fence tiers: Brian very low, Donnie low (ch. 1), Dunk (Port Gellhorn), Tyrone high for narcotics, Yasmani high for jewelry and marked bills, Moses for cars without a tracker, Randy for cars with an advanced tracker.", ["ppf"]),
  T("Kampf", "Kriminelles Profil: Professional → Hardened → Violent → Psycho → Irredeemable. „Irredeemable“ ist endgültig und wirkt sich aufs Ende aus. Anzeige: Steuerkreuz rechts halten.", "Combat", "Criminal profile: Professional → Hardened → Violent → Psycho → Irredeemable. “Irredeemable” is permanent and affects the ending. View it by holding D-pad right.", ["igp"]),
  T("Kampf", "Training: Stärke = mehr Gesundheit, Cardio = mehr Ausdauer. Focus steigt am schnellsten auf der Rodgers Ranch (5-$-Pass, „Market Range Beginner“ neu starten). Nach dem Training Protein.", "Combat", "Training: strength = more health, cardio = more stamina. Focus rises fastest at Rodgers Ranch ($5 pass, restart “Market Range Beginner”). Have protein after training.", ["ppst"]),
  T("Kampf", "24 Ammu-Nations (15 Standard, 6 Expanded, 2 Hunting, 1 Limited). Nur Expanded-Läden haben LMG, Scharfschützengewehr, Granat- und Raketenwerfer. Weste und Fallschirm teilen sich einen Platz.", "Combat", "24 Ammu-Nations (15 standard, 6 expanded, 2 hunting, 1 limited). Only expanded stores sell LMGs, sniper rifles, grenade and rocket launchers. Body armor and parachute share one slot.", ["ppam"]),
  T("Beziehung", "4 Beziehungsstufen: Running on Empty → Partners in Crime → Crazy in Love → Hot Together. Zeit zusammen, Händchenhalten und gemeinsames Einkaufen helfen; Stripclubs allein schaden.", "Relationship", "4 relationship tiers: Running on Empty → Partners in Crime → Crazy in Love → Hot Together. Time together, holding hands and shopping together help; strip clubs alone hurt.", ["nfb"]),
  T("Fahrzeug", "WAiNK-Scan eines Autos zeigt Schloss, Tracker und Wert. Advanced Tracker melden das Auto, wenn du langsam fährst.", "Vehicle", "A WAiNK scan of a car shows its lock, tracker and value. Advanced trackers report the car when you drive slowly.", ["mfb"])
);
})();
