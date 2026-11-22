/* =====================================================================
   LEONIDA HELPER – Interaktive Karte v11 (22.11.2026)
   Aufbau nach dem Vorbild großer Spielkarten-Seiten:
   - Seitenleiste links (PC/iPad quer fest, iPad hoch/iPhone als Schublade):
     Legenden-Gruppen wie im Spiel mit Zeilen, Zähler gefunden/gesamt,
     Zeile antippen = ein/aus, „›“ = Liste aller Einträge der Zeile.
     „Alle aus/ein“, „Gefundene ausblenden“, „Ungefähre Lagen zeigen“, Gruppen-Leiste zum Springen.
   - Farbige Kartenpins mit Piktogramm (eigene Zeichnungen), Zahl-Cluster nur beim Herauszoomen
     (Leaflet.markercluster, ab Zoom 3 aufgelöst).
   - Popup direkt am Pin: Titel, Zeile, Lage, Beschreibung, „Gefunden“, „Details“.
   - Ungefähre Lage (g=0): gestrichelter Pin – liegt im richtigen Gebiet auf Land, Beschreibung beachten.
   Lädt NACH legende.js (nutzt LH_LEGENDE.zeile/svg/GRUPPEN).
   ===================================================================== */
"use strict";
(function () {
  const EN = window.LANG === "en";
  const T = (de, en) => EN ? en : de;
  const LG = window.LH_LEGENDE; if (!LG || !window.L || !L.markerClusterGroup) return;
  const { zeile, svg, GRUPPEN } = LG;
  const GI = Object.fromEntries(GRUPPEN.map(g => [g.id, g]));
  const zName = z => EN ? z[2] : z[1];
  const zKey = z => z[0] + "|" + z[1];

  /* ---------- Farben je Zeile (angelehnt an die Kartenfarben im Spiel) ---------- */
  const FARBE = {
    "Unterschlupf": "#20b7a8", "Wichtige Orte": "#3aa7e0", "Eigene Punkte": "#ffffff",
    "Fremde & Freaks": "#9575cd", "Nebenmissionen": "#f4a640", "Beziehungen": "#e0607e", "Zufallsereignisse": "#7e8cd8",
    "Illegale Operationen": "#e3b81f", "Raubüberfälle": "#4caf50", "Übergabeorte – Waren": "#1f9e8f", "Übergabeorte – Fahrzeuge": "#1f9e8f", "Tresore & Codes": "#8d939c",
    "Rennstrecken": "#2196f3", "Drohnenrennen": "#26b8cc", "Schießstände": "#6c8796", "Jagd & Angeln": "#8a63c9", "Nachtleben": "#b04fc4",
    "Freizeit": "#f06a3a", "Kitty-Litter-Labore": "#a5b51f", "Herausforderungen": "#f39c26", "Meditation": "#e55a96",
    "Stuntsprünge": "#e04848", "Stunts: Unter Brücken": "#d84343", "Stunts: Messerflüge": "#c63c3c", "Stunts: BASE-Sprünge": "#b83636",
    "Kokain-Flamingos": "#ee4d8d", "Sammelkarten": "#5466c9", "Meteoriten": "#8a3fc4", "Magazine & Bücher": "#8a6a52", "Playlist-Poster": "#19b3c9",
    "No-Flusher-Tags": "#86b83d", "WAiNK": "#0798b5", "Sammler": "#e3ab17", "Basketballkörbe": "#ee6a37", "Unterwasserentdeckung": "#1e7fd6",
    "Geheimnisse & Easter Eggs": "#7b52c9", "Geld & Verstecke": "#33a047", "Waffenfunde": "#d83a3a",
    "Tuningwerkstätten": "#0f8f80", "Pay 'n' Sprays": "#16a191", "Tankstellen": "#5d7180", "Garagen": "#13a6bd", "Bahnhöfe": "#3d4fb8", "Seltene Fahrzeuge": "#eaa400",
    "Ammu-Nation": "#5f7887", "Kleidung": "#e2457f", "Haar & Kosmetik": "#d96fa3", "Tattoos": "#a3245a",
    "Minimärkte": "#3d9a46", "Fastfood": "#ee8414", "Spirituosenläden": "#8b6b55", "Sonstige Läden": "#6f7d88"
  };
  const farbe = z => FARBE[z[1]] || (GI[z[0]] || GI.eigen).farbe;

  /* ---------- Einstellungen ---------- */
  const E = S.einst;
  E.ausLeg = E.ausLeg || {}; E.ausZeile = E.ausZeile || {};
  if (E.ungefaehr === undefined) E.ungefaehr = true;
  const K2 = { cluster: null, marker: {}, liste: null, seiteAuf: undefined };
  const breit = () => window.innerWidth >= 1000;

  /* ---------- CSS ---------- */
  const css = document.createElement("style");
  css.textContent = `
#kx-seite{position:absolute;z-index:620;left:0;top:0;bottom:0;width:340px;max-width:88vw;background:#12151c;border-right:1px solid var(--line);display:flex;flex-direction:column;transform:translateX(-102%);transition:transform .22s ease;box-shadow:6px 0 24px rgba(0,0,0,.45)}
#kx-seite.auf{transform:none}
#v-karte.kx-fest #kx-seite{box-shadow:none}
#v-karte.kx-fest.kx-auf #karte{left:340px}
#v-karte.kx-fest.kx-auf .oben{left:calc(350px + var(--sal))}
#kx-kopf{display:flex;align-items:center;gap:10px;padding:calc(12px + var(--sat)) 12px 8px 14px}
#kx-kopf h2{flex:1;margin:0;font-size:16px;font-weight:800;letter-spacing:.04em;text-transform:uppercase}
#kx-kopf h2 small{display:block;font-size:11px;font-weight:500;letter-spacing:0;text-transform:none;color:var(--mut)}
.kx-zu{width:38px;height:38px;border-radius:10px;border:1px solid var(--line);background:var(--bg2);color:var(--txt);font-size:18px}
#kx-knoepfe{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:4px 12px 8px}
#kx-knoepfe button{min-height:42px;border-radius:10px;border:1px solid var(--line);background:var(--bg2);color:var(--txt);font-weight:700;font-size:12px;letter-spacing:.03em;text-transform:uppercase}
#kx-knoepfe button.on{border-color:var(--pink);color:var(--pink)}
#kx-schalter{padding:0 12px 6px}
#kx-schalter label{display:flex;align-items:center;gap:10px;min-height:40px;font-size:13.5px}
#kx-schalter label span{flex:1}
#kx-koerper{flex:1;display:flex;min-height:0;border-top:1px solid var(--line)}
#kx-leiste{flex:0 0 44px;display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px 0;border-right:1px solid var(--line);overflow-y:auto}
#kx-leiste button{width:36px;height:36px;border-radius:9px;border:0;background:none;color:var(--txt);display:grid;place-items:center}
#kx-leiste button svg{width:20px;height:20px}
#kx-leiste button:active,#kx-leiste button.on{background:var(--bg3)}
#kx-inhalt{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:4px 8px 16px}
.kx-gr{margin:4px 0 10px}
.kx-grk{display:flex;align-items:center;gap:8px;min-height:44px;padding:0 4px;cursor:pointer}
.kx-grk b{flex:1;font-size:14px;letter-spacing:.05em;text-transform:uppercase}
.kx-grk .kx-pf{opacity:.7;width:14px;text-align:center}
.kx-box{width:26px;height:26px;border-radius:6px;border:2px solid #dfe3ea;display:grid;place-items:center;color:#12151c;font-weight:900;font-size:16px;line-height:1;background:transparent;padding:0}
.kx-box.voll{background:#f3f5f8}.kx-box.teil{background:#f3f5f8}
.kx-z{display:flex;align-items:center;gap:10px;min-height:42px;padding:2px 4px 2px 6px;border-bottom:1px solid rgba(255,255,255,.05);cursor:pointer;border-radius:8px}
.kx-z:active{background:var(--bg3)}
.kx-z .kx-n{flex:1;font-size:14px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.kx-z .kx-c{font-size:12.5px;color:var(--mut);font-variant-numeric:tabular-nums}
.kx-z.aus .kx-n,.kx-z.aus .kx-c,.kx-z.aus .kx-ic{opacity:.35;text-decoration:line-through}
.kx-mehr{width:34px;height:34px;border:0;background:none;color:var(--mut);font-size:20px;border-radius:8px}
.kx-ic{flex:0 0 26px;width:26px;height:26px;border-radius:7px;display:grid;place-items:center;color:#fff;box-shadow:inset 0 0 0 1.5px rgba(0,0,0,.35)}
.kx-ic svg{width:16px;height:16px;filter:drop-shadow(0 1px 0 rgba(0,0,0,.35))}
.kx-ic.hell{color:#151a22}
#kx-fuss{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:10px 12px calc(10px + var(--sab));border-top:1px solid var(--line)}
#kx-fuss button{min-height:42px;border-radius:10px;border:1px solid var(--line);background:var(--bg2);color:var(--txt);font-weight:700;font-size:12px;text-transform:uppercase}
#kx-fuss select{min-height:42px;border-radius:10px;border:1px solid var(--line);background:var(--bg2);color:var(--txt);font-size:13px;padding:0 8px}
.kx-lk{display:flex;align-items:center;gap:8px;padding:8px 4px 10px;position:sticky;top:-4px;background:#12151c;z-index:2}
.kx-lk b{flex:1;font-size:15px}
.kx-it{display:flex;align-items:center;gap:10px;min-height:48px;padding:4px 4px;border-bottom:1px solid rgba(255,255,255,.06);cursor:pointer}
.kx-it .kx-n{flex:1;min-width:0}
.kx-it .kx-n small{display:block;color:var(--mut);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.kx-it.fertig .kx-n{opacity:.5;text-decoration:line-through}
.kx-chk{width:30px;height:30px;border-radius:8px;border:2px solid #5b6274;background:none;color:var(--gruen);font-size:18px;font-weight:900;display:grid;place-items:center;padding:0}
.kx-chk.on{border-color:var(--gruen);background:rgba(61,220,132,.12)}
/* Pins */
.kx-pin{position:relative;width:30px;height:30px;border-radius:8px;display:grid;place-items:center;color:#fff;border:2px solid #0b0e13;box-shadow:0 2px 6px rgba(0,0,0,.55)}
.kx-pin::after{content:"";position:absolute;left:50%;bottom:-8px;transform:translateX(-50%);border:6px solid transparent;border-top:7px solid #0b0e13;border-bottom:0}
.kx-pin svg{width:18px;height:18px;filter:drop-shadow(0 1px 0 rgba(0,0,0,.4))}
.kx-pin.hell{color:#151a22}
.kx-pin.ung{border-style:dashed;border-color:#fff;box-shadow:0 0 0 1px #0b0e13,0 2px 6px rgba(0,0,0,.55)}
.kx-pin.ung::after{border-top-color:#fff}
.kx-pin.fertig{filter:grayscale(.85) brightness(.75);opacity:.8}
.kx-pin.fertig::before{content:"✓";position:absolute;right:-7px;top:-7px;width:16px;height:16px;border-radius:50%;background:var(--gruen);color:#0b0e13;font:900 11px/16px system-ui;text-align:center}
.kx-pin.fokus{outline:3px solid #fff;outline-offset:2px}
.marker-cluster-small,.marker-cluster-medium,.marker-cluster-large{background:rgba(20,22,28,.55)}
.marker-cluster-small div,.marker-cluster-medium div,.marker-cluster-large div{background:#1b1f29;color:#fff;border:2px solid #e9edf3;font:700 13px/26px system-ui,sans-serif}
.marker-cluster div{width:30px;height:30px;margin-left:5px;margin-top:5px;border-radius:50%;text-align:center}
.marker-cluster{border-radius:50%}
/* Popup */
.kx-pop .leaflet-popup-content-wrapper{background:#161a22;color:var(--txt);border:1px solid var(--line);border-radius:14px;box-shadow:0 8px 28px rgba(0,0,0,.55)}
.kx-pop .leaflet-popup-tip{background:#161a22;border:1px solid var(--line)}
.kx-pop .leaflet-popup-content{margin:12px 14px;width:280px!important;max-width:72vw}
.kx-pop a.leaflet-popup-close-button{color:var(--mut);font-size:22px;width:30px;height:30px;top:4px;right:4px}
.kx-p-kopf{display:flex;gap:10px;align-items:center;margin-right:18px}
.kx-p-kopf h3{margin:0;font-size:15px;line-height:1.25}
.kx-p-kopf small{display:block;color:var(--mut);font-size:12px;margin-top:2px}
.kx-p-lage{margin:8px 0 4px;font-size:12px;color:var(--mut)}
.kx-p-lage b{color:var(--txt);font-weight:600}
.kx-p-lage.ung b{color:var(--gelb)}
.kx-p-t{margin:6px 0;font-size:13.5px;line-height:1.4;max-height:140px;overflow:auto}
.kx-p-akt{display:flex;gap:8px;margin-top:10px}
.kx-p-akt button{flex:1;min-height:40px;border-radius:10px;border:1px solid var(--line);background:var(--bg2);color:var(--txt);font-weight:700;font-size:13px}
.kx-p-akt button.prim{background:var(--pink);border-color:var(--pink);color:#fff}
.kx-p-akt button.ok{background:rgba(61,220,132,.15);border-color:var(--gruen);color:var(--gruen)}
#kx-auf{display:none}
#v-karte:not(.kx-fest) #kx-auf{display:grid}
#v-karte.kx-fest:not(.kx-auf) #kx-auf{display:grid}
#k-filter{display:none!important}
#k-panel{display:none!important}
`;
  document.head.appendChild(css);

  /* ---------- Pin ---------- */
  const HELL = c => { const n = parseInt(c.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255; return (r * 299 + g * 587 + b * 114) / 1000 > 180; };
  function icon(o) {
    const z = zeile(o), c = farbe(z);
    const cls = ["kx-pin", HELL(c) ? "hell" : "", o.g === 0 ? "ung" : "", istDone("o:" + o.id) ? "fertig" : "", K2.fokus === o.id ? "fokus" : ""].join(" ");
    return L.divIcon({ className: "", html: `<div class="${cls}" style="background:${c}">${svg(z[3])}</div>`, iconSize: [30, 30], iconAnchor: [15, 38], popupAnchor: [0, -36] });
  }
  window.pinIcon = icon;

  /* ---------- Sichtbarkeit ---------- */
  function sichtbarOrt(o) {
    if (!o.p) return false;
    if (o.id === K2.fokus) return true;
    const z = zeile(o);
    if (E.ausLeg[z[0]] || E.ausZeile[zKey(z)]) return false;
    if (E.stadt && o.stadt !== E.stadt) return false;
    if (E.nurOffen && istDone("o:" + o.id)) return false;
    if (!E.ungefaehr && o.g === 0) return false;
    return true;
  }
  window.passtFilter = o => { const z = zeile(o); return !(E.ausLeg[z[0]] || E.ausZeile[zKey(z)]) && (!E.stadt || o.stadt === E.stadt); };

  function markerFuer(o) {
    let m = K2.marker[o.id];
    if (!m) {
      m = L.marker(ll(o.p[0], o.p[1]), { icon: icon(o), title: o.n, riseOnHover: true, keyboard: false });
      m.bindPopup(() => popupHtml(o), { className: "kx-pop", maxWidth: 320, autoPanPaddingTopLeft: L.point(breit() && K2.seiteAuf ? 350 : 10, 70), autoPanPaddingBottomRight: L.point(10, 20) });
      m.on("popupopen", ev => popupBinden(o, ev.popup));
      K2.marker[o.id] = m;
    }
    return m;
  }
  window.markerAktualisieren = function () {
    const map = KARTE.map; if (!map) return;
    if (!K2.cluster) {
      K2.cluster = L.markerClusterGroup({ disableClusteringAtZoom: 6, maxClusterRadius: z => z < 3 ? 46 : 24, showCoverageOnHover: false, spiderfyOnMaxZoom: false, chunkedLoading: true, removeOutsideVisibleBounds: true,
        iconCreateFunction: cl => L.divIcon({ html: `<div><span>${cl.getChildCount()}</span></div>`, className: "marker-cluster marker-cluster-small", iconSize: L.point(40, 40) }) });
      map.addLayer(K2.cluster);
    }
    const neu = [], ids = [];
    alleOrte().forEach(o => { if (sichtbarOrt(o)) { neu.push(o); ids.push(o.id + (istDone("o:" + o.id) ? "+" : "")); } });
    const sig = ids.join(",") + "|" + K2.fokus;
    if (sig !== K2.sig) {
      K2.sig = sig;
      const ms = neu.map(o => { const m = markerFuer(o); m.setIcon(icon(o)); return m; });
      K2.cluster.clearLayers(); K2.cluster.addLayers(ms);
    }
    seiteZaehlen();
  };

  /* ---------- Popup ---------- */
  function lageText(o) {
    if (o.g === 2) return `<div class="kx-p-lage">${T("Lage geprüft", "Verified location")}: <b>${esc(o.anker || "gtadb")}</b></div>`;
    if (o.g === 1) return `<div class="kx-p-lage">${T("In der Nähe von", "Near")}: <b>${esc(o.anker || "")}</b></div>`;
    return `<div class="kx-p-lage ung"><b>${T("Ungefähre Lage", "Approximate location")}</b>${o.gebiet ? " – " + T("irgendwo in ", "somewhere in ") + esc(o.gebiet) : ""}. ${T("Genaue Stelle: Beschreibung beachten.", "Exact spot: see description.")}</div>`;
  }
  function popupHtml(o) {
    const z = zeile(o), c = farbe(z), fertig = istDone("o:" + o.id);
    const t = [o.r, o.t].filter(Boolean).join(" — ");
    return `<div class="kx-p-kopf"><span class="kx-ic ${HELL(c) ? "hell" : ""}" style="background:${c}">${svg(z[3])}</span><div><h3>${esc(o.n)}</h3><small>${esc((EN ? GI[z[0]].en : GI[z[0]].de) + " · " + zName(z) + (o.typ && o.typ !== z[1] && o.typ !== z[2] && o.k !== "gang" ? " · " + o.typ : ""))}</small></div></div>
      ${lageText(o)}${t ? `<div class="kx-p-t">${esc(t.length > 420 ? t.slice(0, 420) + " …" : t)}</div>` : ""}
      <div class="kx-p-akt"><button data-pa="done" class="${fertig ? "ok" : "prim"}">${fertig ? "✓ " + T("Gefunden", "Found") : T("Als gefunden markieren", "Mark as found")}</button><button data-pa="info">${T("Details", "Details")}</button></div>`;
  }
  function popupBinden(o, popup) {
    const el = popup.getElement(); if (!el) return;
    el.querySelectorAll("[data-pa]").forEach(b => b.onclick = ev => {
      L.DomEvent.stop(ev);
      if (b.dataset.pa === "done") { setDone("o:" + o.id, !istDone("o:" + o.id)); popup.setContent(popupHtml(o)); popupBinden(o, popup); const m = K2.marker[o.id]; if (m) m.setIcon(icon(o)); seiteZaehlen(); if (K2.liste) listeZeigen(K2.liste); }
      else { KARTE.map.closePopup(); detail(o.id); }
    });
  }

  /* ---------- Seitenleiste ---------- */
  function seiteBauen() {
    const v = $("#v-karte"); if ($("#kx-seite")) return;
    v.insertAdjacentHTML("beforeend", `<aside id="kx-seite" aria-label="${T("Kartenlegende", "Map legend")}">
      <div id="kx-kopf"><h2>${T("Leonida-Karte", "Leonida map")}<small id="kx-sum"></small></h2><button class="kx-zu" id="kx-zu" aria-label="${T("Seitenleiste schließen", "Close sidebar")}">‹</button></div>
      <div id="kx-knoepfe"><button id="kx-alle"></button><button id="kx-gef"></button></div>
      <div id="kx-schalter"><label><span>${T("Ungefähre Lagen zeigen (gestrichelt)", "Show approximate locations (dashed)")}</span><input type="checkbox" class="schalter" id="kx-ung"></label></div>
      <div id="kx-koerper"><nav id="kx-leiste"></nav><div id="kx-inhalt"></div></div>
      <div id="kx-fuss"><select id="kx-stadt" aria-label="${T("Stadt / Gebiet", "City / area")}"><option value="">${T("Ganz Leonida", "All of Leonida")}</option>${LH.STAEDTE.map(st => `<option>${esc(st)}</option>`).join("")}</select><button id="kx-eigen">+ ${T("Eigener Ort", "Own place")}</button></div>
    </aside>`);
    $(".oben").insertAdjacentHTML("afterbegin", `<button class="rund" id="kx-auf" title="${T("Legende", "Legend")}" aria-label="${T("Legende öffnen", "Open legend")}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button>`);
    $("#kx-auf").onclick = () => seiteAuf(true);
    $("#kx-zu").onclick = () => seiteAuf(false);
    $("#kx-alle").onclick = () => { const alleAus = GRUPPEN.every(g => E.ausLeg[g.id]); GRUPPEN.forEach(g => E.ausLeg[g.id] = !alleAus); if (alleAus) E.ausZeile = {}; speichern(); markerAktualisieren(); seiteInhalt(); };
    $("#kx-gef").onclick = () => { E.nurOffen = !E.nurOffen; speichern(); markerAktualisieren(); seiteInhalt(); };
    $("#kx-ung").checked = E.ungefaehr; $("#kx-ung").onchange = e => { E.ungefaehr = e.target.checked; speichern(); markerAktualisieren(); };
    $("#kx-stadt").value = E.stadt || ""; $("#kx-stadt").onchange = e => { E.stadt = e.target.value; speichern(); markerAktualisieren(); stadtZeigen(); seiteInhalt(); };
    $("#kx-eigen").onclick = () => { if (!breit()) seiteAuf(false); $("#k-plus").click(); };
    $("#kx-leiste").innerHTML = GRUPPEN.map(g => `<button data-sp="${g.id}" title="${esc(EN ? g.en : g.de)}" aria-label="${esc(EN ? g.en : g.de)}">${svg(g.sym)}</button>`).join("");
    $("#kx-leiste").onclick = e => { const b = e.target.closest("[data-sp]"); if (!b) return; K2.liste = null; K2.offen = K2.offen || {}; K2.offen[b.dataset.sp] = true; seiteInhalt(); const el = $(`#kx-g-${b.dataset.sp}`); if (el) el.scrollIntoView({ block: "start" }); };
    $("#kx-inhalt").onclick = klickInhalt;
    window.addEventListener("resize", layout);
    layout();
  }
  function layout() {
    const v = $("#v-karte"), fest = breit();
    v.classList.toggle("kx-fest", fest);
    if (fest && K2.seiteAuf === undefined) K2.seiteAuf = true;
    v.classList.toggle("kx-auf", !!K2.seiteAuf);
    $("#kx-seite").classList.toggle("auf", !!K2.seiteAuf);
    if (KARTE.map) setTimeout(() => KARTE.map.invalidateSize(), 240);
  }
  function seiteAuf(an) { K2.seiteAuf = an; try { localStorage.setItem("lh-seite", an ? "1" : "0"); } catch (e) {} layout(); if (an) seiteInhalt(); }

  function daten() {
    const D = {};
    alleOrte().forEach(o => {
      if (E.stadt && o.stadt !== E.stadt) return;
      const z = zeile(o), g = D[z[0]] = D[z[0]] || { n: 0, d: 0, z: {} };
      const r = g.z[z[1]] = g.z[z[1]] || { z, n: 0, d: 0, liste: [] };
      const d = istDone("o:" + o.id) ? 1 : 0; g.n++; g.d += d; r.n++; r.d += d; r.liste.push(o);
    });
    return D;
  }
  function seiteZaehlen() {
    if (!$("#kx-seite")) return;
    const alle = alleOrte(), karte = alle.filter(o => o.p).length, d = alle.filter(o => istDone("o:" + o.id)).length;
    $("#kx-sum").textContent = `${d}/${alle.length} ${T("gefunden", "found")} · ${karte} ${T("auf der Karte", "on the map")}`;
    $("#kx-alle").textContent = GRUPPEN.every(g => E.ausLeg[g.id]) ? T("Alle einblenden", "Show all") : T("Alle ausblenden", "Hide all");
    $("#kx-gef").textContent = T("Gefundene ausblenden", "Hide found"); $("#kx-gef").classList.toggle("on", !!E.nurOffen);
    if (K2.seiteAuf && !K2.liste) seiteInhalt(true);
  }
  function seiteInhalt(nurZahlen) {
    const box = $("#kx-inhalt"); if (!box) return;
    if (K2.liste) return listeZeigen(K2.liste);
    const D = daten(); K2.offen = K2.offen || Object.fromEntries(GRUPPEN.map(g => [g.id, true]));
    const st = box.scrollTop;
    box.innerHTML = GRUPPEN.map(g => {
      const dg = D[g.id]; if (!dg) return "";
      const zeilen = Object.values(dg.z).sort((a, b) => zName(a.z).localeCompare(zName(b.z)));
      const an = zeilen.filter(r => !E.ausLeg[g.id] && !E.ausZeile[zKey(r.z)]).length;
      const box = an === zeilen.length ? "voll" : an ? "teil" : "";
      return `<div class="kx-gr" id="kx-g-${g.id}"><div class="kx-grk" data-gk="${g.id}"><span class="kx-pf">${K2.offen[g.id] ? "▾" : "▸"}</span><b>${esc(EN ? g.en : g.de)}</b><span class="kx-c" style="color:var(--mut);font-size:12.5px">${dg.d}/${dg.n}</span><button class="kx-box ${box}" data-gb="${g.id}" aria-label="${esc(EN ? g.en : g.de)}">${box === "voll" ? "✓" : box === "teil" ? "–" : ""}</button></div>` +
        (K2.offen[g.id] ? zeilen.map(r => { const c = farbe(r.z), aus = E.ausLeg[g.id] || E.ausZeile[zKey(r.z)];
          return `<div class="kx-z ${aus ? "aus" : ""}" data-zk="${esc(zKey(r.z))}"><span class="kx-ic ${HELL(c) ? "hell" : ""}" style="background:${c}">${svg(r.z[3])}</span><span class="kx-n">${esc(zName(r.z))}</span><span class="kx-c">${r.d}/${r.n}</span><button class="kx-mehr" data-zl="${esc(zKey(r.z))}" aria-label="${T("Liste", "List")}">›</button></div>`; }).join("") : "") + `</div>`;
    }).join("");
    if (nurZahlen) box.scrollTop = st;
  }
  function klickInhalt(e) {
    const t = e.target;
    const zur = t.closest("[data-zur]"); if (zur) { K2.liste = null; seiteInhalt(); return; }
    const chk = t.closest("[data-chk]"); if (chk) { const id = chk.dataset.chk; setDone("o:" + id, !istDone("o:" + id)); const m = K2.marker[id], o = ortById(id); if (m && o) m.setIcon(icon(o)); listeZeigen(K2.liste); seiteZaehlen(); return; }
    const it = t.closest("[data-it]"); if (it) { hinZu(it.dataset.it); return; }
    const gb = t.closest("[data-gb]"); if (gb) { const g = gb.dataset.gb; const an = !(gb.classList.contains("voll")); E.ausLeg[g] = !an; if (an) Object.keys(E.ausZeile).forEach(k => { if (k.startsWith(g + "|")) delete E.ausZeile[k]; }); speichern(); markerAktualisieren(); seiteInhalt(true); return; }
    const zl = t.closest("[data-zl]"); if (zl) { K2.liste = zl.dataset.zl; listeZeigen(K2.liste); $("#kx-inhalt").scrollTop = 0; return; }
    const zk = t.closest("[data-zk]"); if (zk) { const k = zk.dataset.zk, g = k.split("|")[0]; if (E.ausLeg[g]) { E.ausLeg[g] = false; GRUPPEN.length; daten()[g] && Object.values(daten()[g].z).forEach(r => { if (zKey(r.z) !== k) E.ausZeile[zKey(r.z)] = 1; }); delete E.ausZeile[k]; } else if (E.ausZeile[k]) delete E.ausZeile[k]; else E.ausZeile[k] = 1; speichern(); markerAktualisieren(); seiteInhalt(true); return; }
    const gk = t.closest("[data-gk]"); if (gk) { K2.offen[gk.dataset.gk] = !K2.offen[gk.dataset.gk]; seiteInhalt(true); }
  }
  function listeZeigen(key) {
    const box = $("#kx-inhalt"); const [g] = key.split("|"); const D = daten();
    const r = D[g] && Object.values(D[g].z).find(x => zKey(x.z) === key);
    if (!r) { K2.liste = null; return seiteInhalt(); }
    const c = farbe(r.z), st = box.scrollTop;
    const liste = r.liste.slice().sort((a, b) => (a.p ? 0 : 1) - (b.p ? 0 : 1) || a.n.localeCompare(b.n, undefined, { numeric: true }));
    box.innerHTML = `<div class="kx-lk"><button class="kx-zu" data-zur="1" aria-label="${T("Zurück", "Back")}">‹</button><span class="kx-ic ${HELL(c) ? "hell" : ""}" style="background:${c}">${svg(r.z[3])}</span><b>${esc(zName(r.z))}</b><span class="kx-c" style="color:var(--mut)">${r.d}/${r.n}</span></div>` +
      liste.map(o => { const f = istDone("o:" + o.id);
        const lage = !o.p ? T("ohne Kartenpunkt", "no map point") : o.g === 0 ? T("ungefähr", "approx.") + (o.gebiet ? " · " + o.gebiet : "") : (o.anker || "");
        return `<div class="kx-it ${f ? "fertig" : ""}" data-it="${esc(o.id)}"><button class="kx-chk ${f ? "on" : ""}" data-chk="${esc(o.id)}" aria-label="${T("Gefunden", "Found")}">${f ? "✓" : ""}</button><span class="kx-n">${esc(o.n)}<small>${esc([lage, o.r].filter(Boolean).join(" · "))}</small></span></div>`; }).join("");
    box.scrollTop = st;
  }
  function hinZu(id) {
    const o = ortById(id); if (!o) return;
    if (!o.p) { detail(id); return; }
    K2.fokus = id; markerAktualisieren();
    if (!breit()) seiteAuf(false);
    const m = K2.marker[id]; if (!m) return;
    KARTE.map.setView(ll(o.p[0], o.p[1]), Math.max(KARTE.map.getZoom(), 4.5), { animate: false });
    setTimeout(() => K2.cluster.zoomToShowLayer(m, () => m.openPopup()), 60);
  }
  window.zeigeAufKarte = function (id) {
    const o = ortById(id); if (!o) return;
    const ziel = o.p ? o : (o.at ? ortById(o.at) : null);
    if (!KARTE.map || location.hash !== "#karte") { KARTE.offenNach = id; gehe("karte"); return; }
    if (ziel) { detailZu && detailZu(); hinZu(ziel.id); } else detail(id);
  };
  window.filterPanelBauen = function () { seiteInhalt(true); };
  const altDetailZu = window.detailZu;
  window.detailZu = function () { altDetailZu.apply(this, arguments); };

  /* ---------- Start ---------- */
  function start() {
    try { const s = localStorage.getItem("lh-seite"); if (s !== null) K2.seiteAuf = s === "1"; } catch (e) {}
    seiteBauen();
    /* alte Einzel-Marker (vor v11) entfernen */
    Object.values(KARTE.marker || {}).forEach(m => { if (KARTE.map.hasLayer(m)) KARTE.map.removeLayer(m); }); KARTE.marker = {};
    KARTE.map.on("click", () => { if (!breit() && K2.seiteAuf) seiteAuf(false); });
    markerAktualisieren(); seiteInhalt();
    if (KARTE.offenNach) { const id = KARTE.offenNach; KARTE.offenNach = null; setTimeout(() => window.zeigeAufKarte(id), 100); }
  }
  if (typeof KARTE !== "undefined" && KARTE.map) start();
  else { const alt = window.karteStart; window.karteStart = function () { const r = alt.apply(this, arguments); if (KARTE.map && !$("#kx-seite")) start(); return r; }; }
})();
