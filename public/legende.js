/* =====================================================================
   LEONIDA HELPER – Kartenlegende wie im Spiel (v10, 22.11.2026)
   - Filter in denselben 9 Gruppen wie die Legende im Spiel (Pausenmenü → Karte):
     Persönlich · Story · Überfälle · Aktivitäten · Erkundung · Fahrzeuge ·
     Ammu-Nations · Stil · Essen & Trinken  (+ Eigene Markierungen).
     Jede Gruppe hat Zeilen wie im Spiel (z. B. Fahrzeuge → Tuningwerkstätten,
     Pay 'n' Spray, Tankstellen …). Gruppe und Zeile lassen sich einzeln abschalten.
   - Kartenpunkte im Stil der Spiel-Legende: weißes, abgerundetes Kästchen mit
     dunklem Piktogramm. Eigene Zeichnungen (keine Grafiken aus dem Spiel).
   - Punkte ohne geprüfte Lage stehen nicht mehr als Einzelpunkt auf der Karte,
     sondern gesammelt als „Gebietsmarker“ (Zahl im Kreis) in ihrem Gebiet.
   Lädt NACH symbole.js. Neue Untertypen: unten in ZEILE eintragen.
   ===================================================================== */
"use strict";
(function () {
  const EN = window.LANG === "en";
  const T = (de, en) => EN ? en : de;
  const SY = window.LH_SYMBOL || { S: {} };
  /* ---------- zusätzliche Piktogramme (viewBox 0 0 24 24) ---------- */
  Object.assign(SY.S, {
    pfeil:     '<path d="M12 2l8 19-8-4.5L4 21z"/>',
    lupe:      '<path fill-rule="evenodd" d="M10 2.5a7.5 7.5 0 0 1 6.1 11.9l5.4 5.4-2.1 2.1-5.4-5.4A7.5 7.5 0 1 1 10 2.5zm0 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"/>',
    besteck:   '<path d="M5 2h1.6v6h1.2V2h1.6v6h1.2V2h1.6v7.5c0 1.6-1.1 2.8-2.6 3.2V22H7.4v-9.3C5.9 12.3 4.8 11.1 4.8 9.5V2z"/><path d="M15.5 2c2.6 0 4 2.6 4 6.5 0 2.4-.9 4-2.5 4.6V22h-2.8V2.3c.4-.2.8-.3 1.3-.3z"/>',
    haus:      '<path fill-rule="evenodd" d="M12 2.5l10 8.6-1.6 1.8L19 11.7V21h-5.5v-6h-3v6H5v-9.3L3.6 12.9 2 11.1z"/>',
    atm:       '<path fill-rule="evenodd" d="M3 3h18v11h-2.5v7.5h-13V14H3zm2.2 2.2v6.6h1.3V8h11v3.8h1.3V5.2zM8.6 10v9.3h6.8V10zm2.1 1.6h2.6v1.5h-2.6z"/>',
    bus:       '<path fill-rule="evenodd" d="M6 2h12c1.7 0 3 1.3 3 3v13c0 .9-.5 1.6-1.2 2v2h-2.6v-1.5H6.8V22H4.2v-2c-.7-.4-1.2-1.1-1.2-2V5c0-1.7 1.3-3 3-3zM5.6 6v5.5h12.8V6zm1.6 8.3a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8zm9.6 0a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>',
    welle:     '<path d="M2 15c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2v2.6c-2.5 0-2.5-2-5-2s-2.5 2-5 2-2.5-2-5-2-2.5 2-5 2z"/><path d="M12 3.5l4.5 6.8H7.5z"/>',
    tuer:      '<path fill-rule="evenodd" d="M4 2h12.5v19H20v1.5H1.5V21H4zm9 9a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/>',
    bekl_frei: '<path d="M8.6 3l-6.1 3.6 2.3 4.4 2.2-1.2V21h10V9.8l2.2 1.2 2.3-4.4L15.4 3c-.5 1.6-1.8 2.6-3.4 2.6S9.1 4.6 8.6 3z"/>'
  });
  const svg = n => `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">${SY.S[n] || SY.S.funke || ""}</svg>`;

  /* ---------- Gruppen in der Reihenfolge der Spiel-Legende ---------- */
  const GRUPPEN = [
    { id: "pers", de: "Persönlich", en: "Personal", sym: "pfeil", farbe: "#5ab0ff" },
    { id: "story", de: "Story", en: "Story", sym: "buch", farbe: "#ff8a80" },
    { id: "ueber", de: "Überfälle", en: "Robberies", sym: "sack", farbe: "#ffd54f" },
    { id: "akt", de: "Aktivitäten", en: "Activities", sym: "hantel", farbe: "#ffab40" },
    { id: "erk", de: "Erkundung", en: "Exploration", sym: "lupe", farbe: "#b9f6ca" },
    { id: "fz", de: "Fahrzeuge", en: "Vehicles", sym: "auto", farbe: "#80deea" },
    { id: "ammu", de: "Ammu-Nations", en: "Ammu-Nations", sym: "pistole", farbe: "#cfd8dc" },
    { id: "stil", de: "Stil", en: "Style", sym: "shirt", farbe: "#f48fb1" },
    { id: "essen", de: "Essen & Trinken", en: "Food & Drink", sym: "besteck", farbe: "#ffcc80" },
    { id: "eigen", de: "Eigene Markierungen", en: "Own markers", sym: "plus", farbe: "#ffffff" }
  ];
  const GI = Object.fromEntries(GRUPPEN.map(g => [g.id, g]));

  /* ---------- Untertyp → [Gruppe, Zeile (DE), Zeile (EN), Piktogramm] ---------- */
  const Z = (g, de, en, sym) => [g, de, en, sym];
  const ZEILE = {
    /* Persönlich */
    "Unterschlupf": Z("pers", "Unterschlupf", "Safehouses", "haus"), "Story & Basis": Z("pers", "Wichtige Orte", "Key locations", "haus"),
    /* Story */
    "Strangers & Freaks": Z("story", "Fremde & Freaks", "Strangers & Freaks", "frage"), "Nebenmission": Z("story", "Nebenmissionen", "Side missions", "koffer"),
    "Nebenauftrag": Z("story", "Nebenmissionen", "Side missions", "koffer"), "Nebenjob": Z("story", "Nebenmissionen", "Side missions", "koffer"),
    "Beziehung": Z("story", "Beziehungen", "Relationships", "herz"), "Zufallsereignis": Z("story", "Zufallsereignisse", "Random events", "ausruf"),
    /* Überfälle */
    "Illegale Operation": Z("ueber", "Illegale Operationen", "Illegal operations", "maske"), "Illegal Operation": Z("ueber", "Illegale Operationen", "Illegal operations", "maske"),
    "Bank": Z("ueber", "Raubüberfälle", "Robberies", "bank"), "Banktresor": Z("ueber", "Raubüberfälle", "Robberies", "tresor"), "Payday Loan": Z("ueber", "Raubüberfälle", "Robberies", "prozent"),
    "Juwelier": Z("ueber", "Raubüberfälle", "Robberies", "diamant"), "Pfandhaus": Z("ueber", "Raubüberfälle", "Robberies", "kugeln"),
    "Hehler": Z("ueber", "Übergabeorte – Waren", "Drop-offs – goods", "sack"), "Code": Z("ueber", "Tresore & Codes", "Safes & codes", "tresor"),
    /* Aktivitäten */
    "Rennen": Z("akt", "Rennstrecken", "Race tracks", "flagge"), "Race Challenge": Z("akt", "Rennstrecken", "Race tracks", "flagge"), "Rennen-Herausforderung": Z("akt", "Rennstrecken", "Race tracks", "flagge"),
    "Drohnenrennen": Z("akt", "Drohnenrennen", "Drone races", "drohne"),
    "Schießstand": Z("akt", "Schießstände", "Shooting ranges", "zielscheibe"), "Schießstand-Challenge": Z("akt", "Schießstände", "Shooting ranges", "zielscheibe"),
    "Schießstand-Herausforderung": Z("akt", "Schießstände", "Shooting ranges", "zielscheibe"), "Schießstand-Info": Z("akt", "Schießstände", "Shooting ranges", "zielscheibe"),
    "Jagd": Z("akt", "Jagd & Angeln", "Hunting & fishing", "pfote"), "Brets Deck": Z("akt", "Jagd & Angeln", "Hunting & fishing", "pfote"),
    "Angelplatz": Z("akt", "Jagd & Angeln", "Hunting & fishing", "fisch"), "Angel-Herausforderung": Z("akt", "Jagd & Angeln", "Hunting & fishing", "fisch"),
    "Bar & Club": Z("akt", "Nachtleben", "Nightlife", "glas"),
    "Golf": Z("akt", "Freizeit", "Leisure", "golf"), "Billard": Z("akt", "Freizeit", "Leisure", "billard"), "Billardtisch": Z("akt", "Freizeit", "Leisure", "billard"),
    "Bowling": Z("akt", "Freizeit", "Leisure", "kegel"), "Arcade": Z("akt", "Freizeit", "Leisure", "pad"), "Videospiel": Z("akt", "Freizeit", "Leisure", "pad"),
    "Workout": Z("akt", "Freizeit", "Leisure", "hantel"), "Training": Z("akt", "Freizeit", "Leisure", "hantel"),
    "Kitty-Litter-Labor": Z("akt", "Kitty-Litter-Labore", "Kitty Litter labs", "kolben"), "Herausforderung": Z("akt", "Herausforderungen", "Challenges", "medaille"),
    "Trophäen-Ort": Z("akt", "Herausforderungen", "Challenges", "pokal"), "Aktivität": Z("akt", "Herausforderungen", "Challenges", "medaille"),
    "Meditation": Z("akt", "Meditation", "Meditation", "lotus"),
    /* Erkundung */
    "Stuntsprung": Z("erk", "Stuntsprünge", "Stunt jumps", "rampe"), "Unter-Brücke": Z("erk", "Stunts: Unter Brücken", "Stunts: under bridges", "rampe"),
    "Messerflug": Z("erk", "Stunts: Messerflüge", "Stunts: knife flights", "rampe"), "BASE-Sprung": Z("erk", "Stunts: BASE-Sprünge", "Stunts: BASE jumps", "rampe"),
    "Kokain-Flamingo": Z("erk", "Kokain-Flamingos", "Cocaine flamingos", "vogel"), "Sammelkarte": Z("erk", "Sammelkarten", "Collectible cards", "karte"),
    "Meteorit": Z("erk", "Meteoriten", "Meteorites", "stern"), "Magazin & Buch": Z("erk", "Magazine & Bücher", "Magazines & books", "buch"), "Buchtausch": Z("erk", "Magazine & Bücher", "Magazines & books", "buch"),
    "Playlist-Poster": Z("erk", "Playlist-Poster", "Playlist posters", "note"), "Peewees-Plakat": Z("erk", "Peewees-Plakate", "Peewees posters", "note"), "No-Flusher-Tag": Z("erk", "No-Flusher-Tags", "No-Flusher tags", "tag"),
    "WAiNK-Wahrzeichen": Z("erk", "WAiNK", "WAiNK", "kamera"), "WAiNK-Kuriosität": Z("erk", "WAiNK", "WAiNK", "auge"), "WAiNK-Skulptur": Z("erk", "WAiNK", "WAiNK", "statue"),
    "Luxusuhr": Z("erk", "Sammler", "Collector", "uhr"), "Sammelobjekt": Z("erk", "Sammler", "Collector", "funke"),
    "Basketballkorb": Z("erk", "Basketballkörbe", "Basketball hoops", "korb"), "Wrack": Z("erk", "Unterwasserentdeckung", "Underwater discovery", "welle"), "Unterwasser-Entdeckung": Z("erk", "Unterwasserentdeckung", "Underwater discovery", "welle"),
    "Easter Egg": Z("erk", "Geheimnisse & Easter Eggs", "Secrets & Easter eggs", "frage"), "Mysterium": Z("erk", "Geheimnisse & Easter Eggs", "Secrets & Easter eggs", "frage"),
    "Okkultes Ritual": Z("erk", "Geheimnisse & Easter Eggs", "Secrets & Easter eggs", "kerze"),
    "Geldversteck": Z("erk", "Geld & Verstecke", "Money & stashes", "schein"), "Geldquelle": Z("erk", "Geld & Verstecke", "Money & stashes", "schein"),
    "Verlorene Drogen": Z("erk", "Geld & Verstecke", "Money & stashes", "paket"),
    /* Fahrzeuge */
    "Tuning": Z("fz", "Tuningwerkstätten", "Mod shops", "schluessel"), "Pay 'n' Spray": Z("fz", "Pay 'n' Sprays", "Pay 'n' Sprays", "spray"),
    "Tankstelle": Z("fz", "Tankstellen", "Gas stations", "zapfsaeule"), "Garage": Z("fz", "Garagen", "Garages", "garage"),
    "Bahnhof": Z("fz", "Bahnhöfe", "Train stations", "zug"), "Seltenes Auto": Z("fz", "Seltene Fahrzeuge", "Rare vehicles", "auto"),
    "Wymans Klassiker": Z("fz", "Seltene Fahrzeuge", "Rare vehicles", "auto"), "Randys Wunschliste": Z("fz", "Seltene Fahrzeuge", "Rare vehicles", "auto"),
    /* Ammu-Nations */
    "Ammu-Nation": Z("ammu", "Ammu-Nation", "Ammu-Nation", "pistole"),
    /* Stil */
    "Kleidung": Z("stil", "Kleidung", "Clothing", "shirt"), "Friseur": Z("stil", "Haar & Kosmetik", "Hair & cosmetics", "schere"), "Tattoo": Z("stil", "Tattoos", "Tattoos", "tropfen"),
    /* Essen & Trinken */
    "Supermarkt": Z("essen", "Minimärkte", "Convenience stores", "wagen"), "Fast Food": Z("essen", "Fastfood", "Fast food", "burger"),
    "Schnapsladen": Z("essen", "Spirituosenläden", "Liquor stores", "flasche"),
    "Eigener Punkt": Z("eigen", "Eigene Punkte", "Own points", "plus")
  };
  /* Kategorie-Rückfall, wenn der Untertyp unbekannt ist */
  const KAT_ZEILE = {
    basis: Z("pers", "Wichtige Orte", "Key locations", "haus"), waffe: Z("erk", "Waffenfunde", "Weapon pickups", "pistole"),
    laden: Z("ammu", "Ammu-Nation", "Ammu-Nation", "pistole"), gang: Z("ueber", "Illegale Operationen", "Illegal operations", "maske"),
    raub: Z("ueber", "Raubüberfälle", "Robberies", "bank"), geld: Z("erk", "Geld & Verstecke", "Money & stashes", "schein"),
    dienst: Z("essen", "Sonstige Läden", "Other shops", "funke"), samm: Z("erk", "Sammler", "Collector", "funke"),
    code: Z("ueber", "Tresore & Codes", "Safes & codes", "tresor"), geheim: Z("erk", "Geheimnisse & Easter Eggs", "Secrets & Easter eggs", "frage"),
    medi: Z("akt", "Meditation", "Meditation", "lotus"), aktiv: Z("akt", "Herausforderungen", "Challenges", "medaille"), eigen: Z("eigen", "Eigene Punkte", "Own points", "plus")
  };
  /* EN-Typnamen auf dieselben Zeilen legen */
  if (EN && typeof window.trS === "function") Object.keys(ZEILE).forEach(k => { const e = window.trS(k); if (e && !ZEILE[e]) ZEILE[e] = ZEILE[k]; });
  const SYMBOL_WAFFE = { "Pistole": "pistole", "Revolver": "revolver", "MP": "mp", "Sturmgewehr": "gewehr", "Scharfschützengewehr": "sniper", "Jagdgewehr": "sniper",
    "Schrotflinte": "schrot", "Nahkampf": "messer", "Schwere Waffe": "schwer" };

  function zeile(o) {
    if (o.eigen || o.k === "eigen") return ZEILE["Eigener Punkt"];
    if (o.k === "gang") return KAT_ZEILE.gang;
    if (o.k === "waffe") { const s = SYMBOL_WAFFE[o.typ] || (SY.symbolName ? SY.symbolName(o) : "pistole"); return Z("erk", "Waffenfunde", "Weapon pickups", s); }
    if (o.typ && ZEILE[o.typ]) {
      const z = ZEILE[o.typ];
      /* Hehler für Fahrzeuge (Moses) unter Fahrzeug-Übergabe */
      if (o.typ === "Hehler" && /moses|fahrzeug|vehicle|auto/i.test(o.n + " " + (o.t || ""))) return Z("ueber", "Übergabeorte – Fahrzeuge", "Drop-offs – vehicles", "auto");
      return z;
    }
    return KAT_ZEILE[o.k] || KAT_ZEILE.samm;
  }
  const zName = z => EN ? z[2] : z[1];
  const zKey = z => z[0] + "|" + z[1];
  window.LH_LEGENDE = { GRUPPEN, zeile, svg };

  /* ---------- Darstellung ---------- */
  const css = document.createElement("style");
  css.textContent = `
.pin.leg{width:26px;height:26px;border-radius:7px;background:#f5f6f8;color:#151a22;border:1.5px solid #0b0e13;box-shadow:0 0 0 2px var(--c),0 2px 6px rgba(0,0,0,.55);display:grid;place-items:center;padding:0}
.pin.leg svg{width:17px;height:17px;display:block}
.pin.leg.erledigt{background:#9aa3ad;opacity:.75}
.pin.leg.erledigt svg{opacity:.55}
.pin.leg.nahe{box-shadow:0 0 0 2px var(--c),0 0 0 4px rgba(255,255,255,.55),0 2px 6px rgba(0,0,0,.55)}
.pin.leg.aktiv{box-shadow:0 0 0 3px #fff,0 0 0 5px var(--c)}
.pin.leg::after{display:none}
.gb-marker{width:34px;height:34px;border-radius:50%;background:rgba(17,21,29,.88);border:2px dashed #e8ecf2;color:#fff;display:grid;place-items:center;font:700 13px/1 system-ui,sans-serif;box-shadow:0 2px 6px rgba(0,0,0,.5)}
.gb-pop{max-height:260px;overflow:auto;min-width:220px}
.gb-pop button{display:flex;gap:8px;align-items:center;width:100%;text-align:left;background:none;border:0;border-bottom:1px solid rgba(0,0,0,.12);padding:6px 2px;font:inherit;cursor:pointer;color:inherit}
.gb-pop .ic{flex:0 0 20px;width:20px;height:20px;border-radius:5px;background:#f5f6f8;color:#151a22;border:1px solid #0b0e13;display:grid;place-items:center}
.gb-pop .ic svg{width:14px;height:14px}
.gb-pop small{display:block;opacity:.7}
.leg-gruppe{margin:0 0 6px;border-radius:12px;background:rgba(255,255,255,.04)}
.leg-kopf{display:flex;align-items:center;gap:10px;padding:8px 8px;cursor:pointer;min-height:44px}
.leg-kopf .ic,.leg-z .ic{flex:0 0 26px;width:26px;height:26px;border-radius:7px;background:#f5f6f8;color:#151a22;display:grid;place-items:center;border:1.5px solid #0b0e13}
.leg-kopf .ic svg{width:17px;height:17px}.leg-z .ic{flex-basis:22px;width:22px;height:22px;border-radius:6px}.leg-z .ic svg{width:14px;height:14px}
.leg-kopf .name{flex:1;font-weight:700;letter-spacing:.02em;text-transform:uppercase;font-size:13px}
.leg-kopf .zahl,.leg-z .zahl{font-size:12px;opacity:.7;font-variant-numeric:tabular-nums}
.leg-z{display:flex;align-items:center;gap:10px;padding:5px 8px 5px 18px;min-height:40px;border-top:1px solid rgba(255,255,255,.06)}
.leg-z .name{flex:1;font-size:14px}
.leg-gruppe.aus .leg-kopf,.leg-z.aus{opacity:.45}
.leg-pfeil{opacity:.7;font-size:12px;width:12px}`;
  document.head.appendChild(css);

  /* ---------- Kartenpunkt ---------- */
  window.pinIcon = function (o) {
    const z = zeile(o), g = GI[z[0]] || GI.eigen;
    const fertig = istDone("o:" + o.id);
    const cls = ["pin", "leg", fertig ? "erledigt" : "", (o.g ?? 2) === 1 ? "nahe" : ""].join(" ");
    const titel = zName(z) + (o.typ && o.typ !== z[1] ? " · " + o.typ : "");
    return L.divIcon({ className: "", html: `<div class="${cls}" style="--c:${g.farbe}" title="${esc(titel)}">${svg(z[3])}</div>`, iconSize: [26, 26], iconAnchor: [13, 13] });
  };

  /* ---------- Filter ---------- */
  S.einst.ausLeg = S.einst.ausLeg || {};
  S.einst.ausZeile = S.einst.ausZeile || {};
  const altPasst = window.passtFilter;
  window.passtFilter = function (o) {
    const z = zeile(o);
    if (S.einst.ausLeg[z[0]] || S.einst.ausZeile[zKey(z)]) return false;
    if (S.einst.stadt && o.stadt !== S.einst.stadt) return false;
    return true;
  };
  const offen = {};
  window.filterPanelBauen = function () {
    const pnl = $("#k-panel");
    const orte = alleOrte().filter(o => !S.einst.stadt || o.stadt === S.einst.stadt);
    const daten = {};
    orte.forEach(o => {
      const z = zeile(o); const g = daten[z[0]] = daten[z[0]] || { n: 0, d: 0, zeilen: {} };
      const r = g.zeilen[z[1]] = g.zeilen[z[1]] || { z, n: 0, d: 0, karte: 0 };
      const done = istDone("o:" + o.id) ? 1 : 0;
      g.n++; g.d += done; r.n++; r.d += done; if (o.p) r.karte++;
    });
    let h = `<h3>${T("Stadt / Gebiet", "City / area")}</h3>
      <select class="feld" id="f-stadt" style="margin:0 0 10px"><option value="">${T("Ganz Leonida", "All of Leonida")}</option>${LH.STAEDTE.map(st => `<option ${S.einst.stadt === st ? "selected" : ""}>${esc(st)}</option>`).join("")}</select>
      <h3>${T("Legende", "Legend")} <span style="text-transform:none;letter-spacing:0">– ${T("Gruppe antippen für Einträge", "tap a group for its rows")}</span></h3>`;
    GRUPPEN.forEach(g => {
      const dg = daten[g.id]; if (!dg) return;
      const aus = !!S.einst.ausLeg[g.id], auf = !!offen[g.id];
      h += `<div class="leg-gruppe ${aus ? "aus" : ""}"><div class="leg-kopf" data-g="${g.id}"><span class="leg-pfeil">${auf ? "▾" : "▸"}</span><span class="ic" style="box-shadow:0 0 0 2px ${g.farbe}">${svg(g.sym)}</span><span class="name">${esc(EN ? g.en : g.de)}</span><span class="zahl">${dg.d}/${dg.n}</span><input type="checkbox" class="schalter" data-lg="${g.id}" ${aus ? "" : "checked"} aria-label="${esc(EN ? g.en : g.de)}"></div>`;
      if (auf) Object.values(dg.zeilen).sort((a, b) => zName(a.z).localeCompare(zName(b.z))).forEach(r => {
        const zaus = !!S.einst.ausZeile[zKey(r.z)];
        h += `<div class="leg-z ${zaus ? "aus" : ""}"><span class="ic">${svg(r.z[3])}</span><span class="name">${esc(zName(r.z))}<br><small class="hilfe">${r.karte} ${T("auf der Karte", "on the map")}${r.n > r.karte ? " · " + (r.n - r.karte) + T(" nur Beschreibung", " description only") : ""}</small></span><span class="zahl">${r.d}/${r.n}</span><input type="checkbox" class="schalter" data-lz="${esc(zKey(r.z))}" ${zaus ? "" : "checked"} aria-label="${esc(zName(r.z))}"></div>`;
      });
      h += `</div>`;
    });
    h += `<div class="zeile" style="margin:6px 4px 10px;gap:8px"><button class="btn klein" data-alle="1">${T("Alle an", "All on")}</button><button class="btn klein" data-alle="0">${T("Alle aus", "All off")}</button></div>
     <h3>${T("Anzeige", "Display")}</h3>
     <label class="f-zeile"><span class="name">${T("Nur offene Punkte", "Open points only")}</span><input type="checkbox" class="schalter" data-e="nurOffen" ${S.einst.nurOffen ? "checked" : ""}></label>
     <label class="f-zeile"><span class="name">${T("Gebietsmarker (Einträge ohne genaue Lage)", "Area markers (entries without exact spot)")}</span><input type="checkbox" class="schalter" data-e="gebietMarker" ${S.einst.gebietMarker !== false ? "checked" : ""}></label>
     <label class="f-zeile"><span class="name">${T("Gebietsnamen", "Area names")}</span><input type="checkbox" class="schalter" data-e="gebiete" ${S.einst.gebiete ? "checked" : ""}></label>
     <label class="f-zeile"><span class="name">${T("gtadb-Orte (ab Zoom 3)", "gtadb places (from zoom 3)")}</span><input type="checkbox" class="schalter" data-e="gtadb" ${S.einst.gtadb ? "checked" : ""}></label>
     <p class="hilfe" style="margin:8px 6px">${T("Weißes Kästchen = Lage an einem geprüften Ort (gtadb). Mit hellem Außenring = in der Nähe dieses Ortes, Beschreibung lesen. Kreis mit Zahl = Einträge, deren genaue Stelle noch nicht belegt ist – antippen für die Liste mit Beschreibung. Läden & Dienste erscheinen ab Zoom 3.",
       "White tile = at a verified place (gtadb). With a light outer ring = near that place, read the description. Circle with number = entries whose exact spot is not confirmed yet – tap for the list with descriptions. Shops & services appear from zoom 3.")}</p>`;
    pnl.innerHTML = h;
    pnl.onchange = e => {
      const t = e.target;
      if (t.id === "f-stadt") { S.einst.stadt = t.value; speichern(); markerAktualisieren(); stadtZeigen(); window.filterPanelBauen(); return; }
      if (t.dataset.lg) S.einst.ausLeg[t.dataset.lg] = !t.checked;
      if (t.dataset.lz) { if (t.checked) delete S.einst.ausZeile[t.dataset.lz]; else S.einst.ausZeile[t.dataset.lz] = 1; }
      if (t.dataset.e) S.einst[t.dataset.e] = t.checked;
      speichern(); markerAktualisieren(); gebieteAktualisieren(); gtadbAktualisieren(); window.filterPanelBauen();
    };
    pnl.onclick = e => {
      if (e.target.closest("input")) return;
      const k = e.target.closest("[data-g]"); if (k) { offen[k.dataset.g] = !offen[k.dataset.g]; window.filterPanelBauen(); return; }
      const b = e.target.closest("[data-alle]"); if (!b) return;
      GRUPPEN.forEach(g => S.einst.ausLeg[g.id] = b.dataset.alle !== "1"); if (b.dataset.alle === "1") S.einst.ausZeile = {};
      speichern(); markerAktualisieren(); window.filterPanelBauen();
    };
  };

  /* ---------- Lage-Hinweise im Detailblatt ---------- */
  if (typeof GTXT === "object") { GTXT[2] = T("Lage geprüft (gtadb-Ort)", "Location verified (gtadb place)"); GTXT[1] = T("Lage: in der Nähe / im Gebiet", "Location: nearby / in area"); GTXT[0] = T("Lage ungefähr", "Approximate location"); }
  const altDetail = window.detail;
  window.detail = function (id) {
    altDetail.apply(this, arguments);
    const o = ortById(id); if (!o) return;
    const b = $("#blatt"); const zeileEl = b && b.querySelector(".zeile"); if (!zeileEl) return;
    const kz = b.querySelector(".kat-zeile"), z = zeile(o), g = GI[z[0]] || GI.eigen;
    if (kz) kz.innerHTML = `<span class="ic" style="display:inline-grid;place-items:center;width:22px;height:22px;border-radius:6px;background:#f5f6f8;color:#151a22;box-shadow:0 0 0 2px ${g.farbe};margin-right:8px;vertical-align:-5px">${svg(z[3])}</span>` +
      esc([EN ? g.en : g.de, zName(z), o.typ && o.typ !== z[1] && o.typ !== z[2] ? o.typ : "", o.r, o.stadt && !(o.r || "").includes(o.stadt) ? o.stadt : ""].filter(Boolean).join(" · "));
    if (o.anker) zeileEl.insertAdjacentHTML("afterend", `<p class="hilfe">${o.g === 2 ? T("Kartenpunkt: ", "Map point: ") : T("Kartenpunkt in der Nähe von: ", "Map point near: ")}${esc(o.anker)}</p>`);
    else if (o.p && o.g === 0) zeileEl.insertAdjacentHTML("afterend", `<p class="hilfe">${T("Ungefährer Kartenpunkt", "Approximate map point")}${o.gebiet ? " – " + T("irgendwo in ", "somewhere in ") + esc(o.gebiet) : ""}. ${T("Genaue Stelle laut Beschreibung.", "Exact spot per description.")}</p>`);
  };

  /* ---------- neu aufbauen, falls die Karte schon läuft ---------- */
  /* Karte, Filter und Pins übernimmt ab v11 karte2.js */
})();
