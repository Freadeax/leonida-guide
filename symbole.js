/* =====================================================================
   LEONIDA HELPER – Kartensymbole (eigenes Symbolset, v1)
   - Jeder Punkt bekommt ein Bildsymbol statt eines Buchstabens:
     dunkler runder Marker, Ring und Symbol in der Kategoriefarbe –
     so wie man es von Spielkarten kennt (Waffe, Auto, Geld, Laden …).
   - Eigene Zeichnungen, keine Grafiken aus dem Spiel.
   - Wird NACH dem Hauptskript in index.html geladen und ersetzt
     pinIcon() sowie die Farbpunkte im Filter. Untertyp hat Vorrang,
     sonst gilt das Symbol der Kategorie.
   - Neue Untertypen: unten in SYM_TYP eintragen (deutscher Name).
   ===================================================================== */
"use strict";
(function () {
  /* ---------- Symbole (viewBox 0 0 24 24, gefüllt = currentColor) ---------- */
  const S = {
    stern:    '<path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.3 1.3-6.5L2.5 9.3l6.6-.8z"/>',
    pistole:  '<path d="M2.5 7h17v3.2h-8.2l-.9 1.6h-1.8l-1.3 6.7H3.6L5 11.2 2.5 10z"/><rect x="18.3" y="5.6" width="1.6" height="1.6"/>',
    revolver: '<rect x="9" y="7.4" width="13" height="2.4" rx=".5"/><circle cx="10.2" cy="11" r="3.4"/><path d="M8 9.4H3.6c-.8 0-1.3.8-1.1 1.5l1.4 7.6h3.6l-.6-5.2 2.4-.6z"/>',
    mp:       '<path d="M1.5 8h19v3h-6.5v3.2h-2.6V11H9.6l-1.2 7H4.6l1.2-7H1.5z"/><rect x="11.6" y="14" width="2.2" height="5"/>',
    gewehr:   '<path d="M1 10.2l3-1.4h13.5l1-1.3h4.5v2.9h-6.2l-1.7 1.6v1.9l-2.6 3.8H9.8l1.4-4.3H7.4L4.6 15H1.6l1.5-3.3H1z"/>',
    sniper:   '<rect x="1" y="11" width="22" height="2" rx=".5"/><rect x="7" y="6.5" width="8" height="3" rx="1.2"/><rect x="9.8" y="9.4" width="1.6" height="1.8"/><path d="M3 13h5.5l-1.4 5H3.4z"/>',
    schrot:   '<rect x="1" y="8.3" width="21.5" height="2" rx=".6"/><rect x="5" y="10.6" width="11" height="1.6"/><path d="M1 12.4h7.4l-2 5.4H2.3z"/>',
    messer:   '<path d="M20.5 3.5c-3.6.6-7.8 3.4-11.1 7.1l3.1 3.1c3.6-3.3 7.4-7.3 8-10.2z"/><path d="M8.1 11.9l3.2 3.2-2 1.9-1.1-1.1-3.4 3.6a1.6 1.6 0 0 1-2.3-2.3l3.5-3.4-1-1.1z"/>',
    schwer:   '<path d="M2 9.4h14.3l5.7 2.6-5.7 2.6H2z"/><rect x="6" y="14.6" width="2.6" height="4.4"/><rect x="11" y="14.6" width="2.2" height="3"/>',
    fadenkreuz:'<path fill-rule="evenodd" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 2.6a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8z"/><rect x="11" y="1" width="2" height="7"/><rect x="11" y="16" width="2" height="7"/><rect x="1" y="11" width="7" height="2"/><rect x="16" y="11" width="7" height="2"/>',
    maske:    '<path fill-rule="evenodd" d="M12 3.5c-5 0-8.5 2.3-8.5 7 0 5.2 4 9.9 8.5 9.9s8.5-4.7 8.5-9.9c0-4.7-3.5-7-8.5-7zM6.4 10.2c.6-1 2.4-1.3 3.8-.4-.3 1.5-1.7 2.4-3.1 2.1-.6-.4-.9-1-.7-1.7zm11.2 0c-.6-1-2.4-1.3-3.8-.4.3 1.5 1.7 2.4 3.1 2.1.6-.4.9-1 .7-1.7zM9.5 16.4c1.6.9 3.4.9 5 0l-.3 1.3c-1.5.6-2.9.6-4.4 0z"/>',
    tresor:   '<path fill-rule="evenodd" d="M3 3.5h18v15.5h-2v2h-3v-2H8v2H5v-2H3zm9 3.8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2.4a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2z"/>',
    schein:   '<path fill-rule="evenodd" d="M1.5 6h21v12h-21zm3 2.4a2.6 2.6 0 0 1-1 1v5.2a2.6 2.6 0 0 1 1 1h15a2.6 2.6 0 0 1 1-1V9.4a2.6 2.6 0 0 1-1-1zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>',
    sack:     '<path d="M8.4 2.8h7.2l-1.8 3.4h-3.6z"/><path fill-rule="evenodd" d="M9.5 7.3h5c3.6 2 6.5 5.6 6.5 9.2 0 2.9-2.4 4.7-9 4.7s-9-1.8-9-4.7c0-3.6 2.9-7.2 6.5-9.2zm1.7 3.3v1.2c-1.3.3-2.1 1.1-2.1 2.2 0 2.4 4.1 1.8 4.1 3 0 .5-.6.8-1.3.8-.8 0-1.4-.3-1.8-.9l-1.3.9c.5.8 1.3 1.2 2.4 1.4v1.2h1.6v-1.2c1.4-.3 2.2-1.2 2.2-2.3 0-2.6-4.1-1.9-4.1-3 0-.4.5-.7 1.2-.7.6 0 1.1.2 1.5.7l1.2-1c-.5-.6-1.1-.9-1.9-1.1v-1.2z"/>',
    anker:    '<path fill-rule="evenodd" d="M12 1.8a2.6 2.6 0 0 1 1.2 4.9v1.9h3.3v2.2h-3.3v8.4c2.7-.4 4.6-2.2 5.1-4.6l-1.9.5 3-4.4 2.2 4.9-1.6-.5c-.7 4-4.2 7-8 7s-7.3-3-8-7l-1.6.5 2.2-4.9 3 4.4-1.9-.5c.5 2.4 2.4 4.2 5.1 4.6v-8.4H7.5V8.6h3.3V6.7A2.6 2.6 0 0 1 12 1.8zm0 1.7a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8z"/>',
    paket:    '<path d="M12 2.5l8.5 4.2L12 11 3.5 6.7z"/><path d="M3 8.2l8.2 4.1V21L3 16.9zM21 8.2l-8.2 4.1V21l8.2-4.1z"/>',
    ausruf:   '<rect x="10.2" y="3" width="3.6" height="12" rx="1.4"/><circle cx="12" cy="19" r="2"/>',
    frage:    '<path d="M8 8.3C8 5.6 9.8 3.5 12.2 3.5c2.5 0 4.3 1.8 4.3 4.1 0 2.2-1.3 3.2-2.5 4.1-.9.7-1.4 1.3-1.4 2.5v.9H9.8v-1.1c0-2 .9-3.1 2.2-4 .9-.7 1.4-1.1 1.4-2.2 0-.9-.6-1.6-1.4-1.6-.9 0-1.4.8-1.5 2.1z"/><circle cx="11.6" cy="19" r="2"/>',
    auto:     '<path fill-rule="evenodd" d="M5.3 6.5h13.4l2.3 5.3v7H18v-2H6v2H3v-7zm1.8 1.9l-1.4 3.4h12.6l-1.4-3.4zM6.6 13.2a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8zm10.8 0a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>',
    lotus:    '<circle cx="12" cy="4.6" r="2.3"/><path d="M12 7.8c-2.4 0-4 1.6-4.3 4.3l-.4 3.2H3.5v2.4h17v-2.4h-3.8l-.4-3.2c-.3-2.7-1.9-4.3-4.3-4.3z"/><rect x="2" y="19.2" width="20" height="1.8" rx=".9"/>',
    flagge:   '<rect x="4" y="2.5" width="2" height="19" rx=".8"/><path fill-rule="evenodd" d="M6 3.5h14v10H6zm0 0v3.3h3.5V3.5zm7 0v3.3h3.5V3.5zM9.5 6.8v3.4H13V6.8zm7 0v3.4H20V6.8zM6 10.2v3.3h3.5v-3.3zm7 0v3.3h3.5v-3.3z"/>',
    zielscheibe:'<path fill-rule="evenodd" d="M12 2.5a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19zm0 2.2a7.3 7.3 0 1 0 0 14.6 7.3 7.3 0 0 0 0-14.6zm0 2.3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6z"/>',
    pokal:    '<path fill-rule="evenodd" d="M6.5 3h11v2.1h3.5v2.4c0 2.6-1.9 4.5-4.4 4.8a5.6 5.6 0 0 1-3.4 2.6V17h3.3v2H7.5v-2h3.3v-2.1a5.6 5.6 0 0 1-3.4-2.6C4.9 12 3 10.1 3 7.5V5.1h3.5zM5 7.1v.4c0 1.3.7 2.3 1.8 2.7-.2-.8-.3-1.9-.3-3.1zm14 0h-1.5c0 1.2-.1 2.3-.3 3.1 1.1-.4 1.8-1.4 1.8-2.7z"/><rect x="6" y="20" width="12" height="2" rx=".6"/>',
    kegel:    '<path d="M10.4 2.2h3.2c.7 1.3.9 2.7.4 4.1-.3.8-.2 1.3.2 2.1 1.4 2.6 2.2 5.3 2 8.3-.2 2.5-1.1 4.3-2.3 5.1h-3.8c-1.2-.8-2.1-2.6-2.3-5.1-.2-3 .6-5.7 2-8.3.4-.8.5-1.3.2-2.1-.5-1.4-.3-2.8.4-4.1z"/>',
    spray:    '<path fill-rule="evenodd" d="M8.5 7.5h7c.8 0 1.5.7 1.5 1.5v11.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5V9c0-.8.7-1.5 1.5-1.5zm-.1 4.8v5h7.2v-5z"/><rect x="9.8" y="4" width="4.4" height="3"/><rect x="11" y="2" width="3.2" height="1.6"/><circle cx="18" cy="2.8" r=".9"/><circle cx="20.4" cy="4.4" r=".9"/><circle cx="18.4" cy="5.6" r=".9"/>',
    glas:     '<path d="M3 3.5h18l-7.7 8.6v6.2h4.4v2.2H6.3v-2.2h4.4v-6.2z"/><circle cx="17.5" cy="2.6" r="1.6"/>',
    burger:   '<path d="M3.5 10.2C3.8 6 7.4 3.5 12 3.5s8.2 2.5 8.5 6.7z"/><rect x="2.5" y="11.4" width="19" height="2.6" rx="1.3"/><path d="M3.5 15.3h17c0 2.9-2.2 5.2-5 5.2H8.5c-2.8 0-5-2.3-5-5.2z"/>',
    wagen:    '<path d="M1.5 3.5h3.3l.8 2.6h16.4l-2.3 8H7.4l.5 1.7h11.6v2H6.4L3.3 5.5H1.5z"/><circle cx="8.3" cy="20" r="1.7"/><circle cx="17.3" cy="20" r="1.7"/>',
    zapfsaeule:'<path fill-rule="evenodd" d="M4 3.5c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v16h1.2v2H2.8v-2H4zm2.2 1.4v5h5.6v-5z"/><path d="M14.6 6.2l1.4-1.4 3.6 3.6c.4.4.6.9.6 1.4v7.6c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5v-3.3h-.6v-2.1h1.7c.6 0 1.1.5 1.1 1.1v4.3a.4.4 0 0 0 .8 0v-6.6z"/>',
    schluessel:'<path d="M21.2 6.4l-3.1 3.1-2.7-.9-.9-2.7 3.1-3.1c-2.7-.9-5.8.2-7 2.8-.6 1.3-.6 2.8-.1 4.1L2.7 17.5a2.2 2.2 0 0 0 3.1 3.1l7.8-7.8c1.3.5 2.8.5 4.1-.1 2.6-1.2 3.7-4.3 2.8-7z"/>',
    garage:   '<path fill-rule="evenodd" d="M12 2.5l10 6v12.5h-3v-9H5v9H2V8.5zM6.5 13h11v1.6h-11zm0 2.8h11v1.6h-11zm0 2.8h11V21h-11z"/>',
    shirt:    '<path d="M8.6 3l-6.1 3.6 2.3 4.4 2.2-1.2V21h10V9.8l2.2 1.2 2.3-4.4L15.4 3c-.5 1.6-1.8 2.6-3.4 2.6S9.1 4.6 8.6 3z"/>',
    flasche:  '<path d="M10 1.8h4v2h-.3v3.6c2.1.9 3.3 2.8 3.3 5.1V21c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1v-8.5c0-2.3 1.2-4.2 3.3-5.1V3.8H10z"/>',
    schere:   '<path fill-rule="evenodd" d="M6 2.8a3.4 3.4 0 0 1 3.1 4.8L12 10.4l6.6-6.7a1.8 1.8 0 0 1 2.6 0L9.1 16.4A3.4 3.4 0 1 1 6.7 15l3.2-3.1-3.2-3.1A3.4 3.4 0 1 1 6 2.8zm0 1.8a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2zm0 11.6a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2zM14 14.2l1.9-1.9 5.3 5.3a1.8 1.8 0 0 1-2.6 0z"/>',
    tropfen:  '<path d="M12 2.5c3.4 4.6 6.5 8.6 6.5 12.2a6.5 6.5 0 0 1-13 0c0-3.6 3.1-7.6 6.5-12.2z"/>',
    zug:      '<path fill-rule="evenodd" d="M7 2.5h10c2 0 3.5 1.5 3.5 3.5v10c0 1.4-.8 2.5-2 3.1l1.9 2.4h-2.8L16 19.6H8l-1.6 1.9H3.6l1.9-2.4c-1.2-.6-2-1.7-2-3.1V6c0-2 1.5-3.5 3.5-3.5zM6 5.5v5.5h12V5.5zm1.8 8.2a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8zm8.4 0a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>',
    bank:     '<path d="M12 2l10 5v2.2H2V7z"/><rect x="4" y="10.4" width="2.6" height="7.4"/><rect x="8.5" y="10.4" width="2.6" height="7.4"/><rect x="12.9" y="10.4" width="2.6" height="7.4"/><rect x="17.4" y="10.4" width="2.6" height="7.4"/><rect x="2" y="19" width="20" height="2.6"/>',
    prozent:  '<circle cx="6.5" cy="6.5" r="3.2"/><circle cx="17.5" cy="17.5" r="3.2"/><path d="M18 3.3l2.7 2.7L6 20.7 3.3 18z"/>',
    kugeln:   '<rect x="11" y="1.5" width="2" height="5"/><rect x="4" y="5.5" width="16" height="2"/><circle cx="12" cy="17.5" r="3.6"/><circle cx="6.5" cy="11.5" r="3.4"/><circle cx="17.5" cy="11.5" r="3.4"/>',
    diamant:  '<path d="M6.3 3.5h11.4l4.3 5.6L12 21 2 9.1z"/>',
    drohne:   '<rect x="9" y="9.5" width="6" height="5" rx="1.4"/><path d="M9.6 10.3L6 6.8l1.1-1.1 3.6 3.5zM14.4 10.3L18 6.8l-1.1-1.1-3.6 3.5zM9.6 13.7L6 17.2l1.1 1.1 3.6-3.5zM14.4 13.7l3.6 3.5-1.1 1.1-3.6-3.5z"/><ellipse cx="5.5" cy="5.5" rx="4" ry="1.4"/><ellipse cx="18.5" cy="5.5" rx="4" ry="1.4"/><ellipse cx="5.5" cy="18.5" rx="4" ry="1.4"/><ellipse cx="18.5" cy="18.5" rx="4" ry="1.4"/>',
    kolben:   '<path d="M8.5 2h7v2h-1.1v5.1l5.8 9.6c.8 1.4-.2 3.3-1.8 3.3H5.6c-1.6 0-2.6-1.9-1.8-3.3l5.8-9.6V4H8.5z"/>',
    kamera:   '<path fill-rule="evenodd" d="M8.3 4h7.4l1.5 2.4H20c1.1 0 2 .9 2 2V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8.4c0-1.1.9-2 2-2h2.8zM12 8.4a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8zm0 2.1a2.3 2.3 0 1 1 0 4.6 2.3 2.3 0 0 1 0-4.6z"/>',
    auge:     '<path fill-rule="evenodd" d="M12 5c5 0 8.6 3.6 10.5 7-1.9 3.4-5.5 7-10.5 7S3.4 15.4 1.5 12C3.4 8.6 7 5 12 5zm0 2.8a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4zm0 2.2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>',
    statue:   '<circle cx="12" cy="4" r="2.2"/><path d="M9.3 7h5.4l1.3 6.6h-2.1l-.4 4h-3l-.4-4H8z"/><rect x="6" y="18.5" width="12" height="3" rx=".5"/>',
    karte:    '<path fill-rule="evenodd" d="M6.5 2h11c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2h-11c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zM12 7.6c-1.6 2.2-3.4 3.4-3.4 5.1 0 1.2.9 2 2 2 .4 0 .8-.1 1-.3l-.6 2.2h2l-.6-2.2c.2.2.6.3 1 .3 1.1 0 2-.8 2-2 0-1.7-1.8-2.9-3.4-5.1z"/>',
    buch:     '<path d="M2 4.5c3.3-.8 6.6-.4 9 1.4V21c-2.4-1.6-5.7-2-9-1.2zM22 4.5c-3.3-.8-6.6-.4-9 1.4V21c2.4-1.6 5.7-2 9-1.2z"/>',
    note:     '<path d="M9 3.3l12-2.3v14.2a3.3 3.3 0 1 1-2-3V6.1L11 7.6v10.1a3.3 3.3 0 1 1-2-3z"/>',
    vogel:    '<path d="M14.5 2.5c1.7 0 2.8 1.2 2.8 2.6 0 .6-.2 1.1-.5 1.5l3.2.9-3.6 1c-.6 1.6-.4 3 .7 4.4 1.4 1.9 1 4.4-1.2 5.6-1.6.9-3.6.8-5.5.2L9.2 21.5H7.6l1.9-3.4c-3.4-1.6-6.2-4.6-7-8.7 2.3 2.5 5.3 3.8 8.3 3.6-.3-1.4.2-2.8 1.1-4C13.5 7 12 6.1 12 4.8c0-1.3 1.1-2.3 2.5-2.3z"/>',
    uhr:      '<rect x="8.2" y="1.5" width="7.6" height="4" rx="1"/><rect x="8.2" y="18.5" width="7.6" height="4" rx="1"/><path fill-rule="evenodd" d="M12 4.6a7.4 7.4 0 1 1 0 14.8 7.4 7.4 0 0 1 0-14.8zm0 2a5.4 5.4 0 1 0 0 10.8 5.4 5.4 0 0 0 0-10.8zm-.9 1.3h1.8v3.7l2.4 1.6-1 1.5-3.2-2.2z"/>',
    golf:     '<rect x="7" y="2" width="2" height="16.5" rx=".8"/><path d="M9 2.5l9 3.6-9 3.6z"/><ellipse cx="11.5" cy="19.8" rx="9" ry="2.4"/>',
    billard:  '<path fill-rule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 4.2a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4zm0 1.2c.9 0 1.5.6 1.5 1.3 0 .4-.2.7-.4.9.4.3.7.7.7 1.2 0 .9-.8 1.6-1.8 1.6s-1.8-.7-1.8-1.6c0-.5.3-.9.7-1.2-.3-.2-.4-.5-.4-.9 0-.7.6-1.3 1.5-1.3z"/>',
    korb:     '<circle cx="12" cy="12" r="9.2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2.8v18.4M2.8 12h18.4M5.6 5.4c3 2.6 3 10.6 0 13.2M18.4 5.4c-3 2.6-3 10.6 0 13.2" fill="none" stroke="currentColor" stroke-width="1.7"/>',
    pad:      '<path fill-rule="evenodd" d="M7 6.5h10c3 0 5 3.3 5.5 8.3.3 2.8-1.9 4.5-3.9 3.1l-3-2.4H8.4l-3 2.4c-2 1.4-4.2-.3-3.9-3.1C2 9.8 4 6.5 7 6.5zm.2 2.6v1.6H5.6v1.8h1.6v1.6H9v-1.6h1.6v-1.8H9V9.1zm8.5 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm2 2.4a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/>',
    pfote:    '<ellipse cx="12" cy="16" rx="5" ry="4.5"/><ellipse cx="5.2" cy="10.6" rx="2" ry="2.6"/><ellipse cx="18.8" cy="10.6" rx="2" ry="2.6"/><ellipse cx="9" cy="6" rx="2" ry="2.8"/><ellipse cx="15" cy="6" rx="2" ry="2.8"/>',
    rampe:    '<path d="M1.5 20.5L17 9v11.5z"/><path d="M14 4.8c1.2-1.5 3.4-1.8 4.9-.6l-1.2 1.6 3.7.4-.2-3.7-1.2 1.1c-2.3-2-5.8-1.6-7.6.7z"/><rect x="1.5" y="20.5" width="21" height="1.5"/>',
    fisch:    '<path fill-rule="evenodd" d="M2 12c2.6-4 6.4-6 10.5-6 3 0 5.5 1.5 7.2 3.6L22.5 7v10l-2.8-2.6C18 16.5 15.5 18 12.5 18 8.4 18 4.6 16 2 12zm5.4-1.3a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6z"/>',
    hantel:   '<rect x="2" y="9" width="2.6" height="6" rx=".8"/><rect x="5" y="6" width="3" height="12" rx="1"/><rect x="8" y="10.9" width="8" height="2.2"/><rect x="16" y="6" width="3" height="12" rx="1"/><rect x="19.4" y="9" width="2.6" height="6" rx=".8"/>',
    medaille: '<path d="M6 1.5h4l2 4.5 2-4.5h4l-3.6 7.3A7 7 0 0 1 12 8a7 7 0 0 0-2.4.8z"/><path fill-rule="evenodd" d="M12 9.3a6.4 6.4 0 1 1 0 12.8 6.4 6.4 0 0 1 0-12.8zm0 2.4l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.2-2.4 1.2.5-2.6-1.9-1.8 2.6-.4z"/>',
    koffer:   '<path fill-rule="evenodd" d="M9 3h6c.8 0 1.5.7 1.5 1.5V6H21c.8 0 1.5.7 1.5 1.5V19c0 .8-.7 1.5-1.5 1.5H3c-.8 0-1.5-.7-1.5-1.5V7.5C1.5 6.7 2.2 6 3 6h4.5V4.5C7.5 3.7 8.2 3 9 3zm.3 1.8V6h5.4V4.8zM1.5 12.2v1.6h21v-1.6z"/>',
    herz:     '<path d="M12 21C6 16.6 2 13 2 8.5 2 5.4 4.4 3 7.3 3c1.9 0 3.6 1 4.7 2.6C13.1 4 14.8 3 16.7 3 19.6 3 22 5.4 22 8.5c0 4.5-4 8.1-10 12.5z"/>',
    kerze:    '<path d="M12 1.5c1.6 1.9 2.4 3.3 2.4 4.6a2.4 2.4 0 0 1-4.8 0c0-1.3.8-2.7 2.4-4.6z"/><rect x="9" y="9.5" width="6" height="11" rx="1"/><rect x="5" y="20" width="14" height="2" rx=".6"/>',
    totenkopf:'<path fill-rule="evenodd" d="M12 2c5 0 8.5 3.4 8.5 8 0 2.6-1.1 4.6-3 5.8V19c0 1.1-.9 2-2 2H8.5c-1.1 0-2-.9-2-2v-3.2c-1.9-1.2-3-3.2-3-5.8 0-4.6 3.5-8 8.5-8zM8.4 9.2a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4zm7.2 0a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4zM12 14l-1.4 2.6h2.8zM9.2 18.2V20h1.5v-1.8zm4.1 0V20h1.5v-1.8z"/>',
    plus:     '<rect x="10" y="3" width="4" height="18" rx="1.2"/><rect x="3" y="10" width="18" height="4" rx="1.2"/>',
    funke:    '<path d="M12 1.5l2.4 7.1 7.1 2.4-7.1 2.4L12 20.5l-2.4-7.1L2.5 11l7.1-2.4z"/><circle cx="19" cy="19" r="2"/>',
    tag:      '<path d="M3 4.5c4.6-2 9.6 2 7.4 5.6-1.3 2.2-5.2 1.3-4.5-1.3M10.4 10.1c2.6-3 8.3-3.3 10.1.4M5 15c4-1 9.2-.4 14 2" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><circle cx="19.5" cy="20.5" r="1.6"/>'
  };

  /* ---------- Untertyp → Symbol (deutsche Namen wie in den Daten) ---------- */
  const SYM_TYP = {
    /* Waffen */
    "Pistole": "pistole", "Revolver": "revolver", "MP": "mp", "Maschinenpistole": "mp", "Sturmgewehr": "gewehr",
    "Scharfschützengewehr": "sniper", "Jagdgewehr": "sniper", "Schrotflinte": "schrot", "Nahkampf": "messer",
    "Schwere Waffe": "schwer", "Sonstige Waffe": "pistole", "Ammu-Nation": "fadenkreuz",
    /* Basis */
    "Story & Basis": "stern", "Hehler": "sack", "Pay 'n' Spray": "spray",
    /* Geld */
    "Wrack": "anker", "Geldquelle": "schein", "Geldversteck": "schein", "Verlorene Drogen": "paket",
    "Zufallsereignis": "ausruf", "Illegale Operation": "maske", "Illegal Operation": "maske",
    /* Codes / Überfälle */
    "Code": "tresor", "Bank": "bank", "Banktresor": "tresor", "Payday Loan": "prozent", "Pfandhaus": "kugeln", "Juwelier": "diamant",
    /* Geheimnisse */
    "Easter Egg": "frage", "Seltenes Auto": "auto", "Okkultes Ritual": "kerze", "Mysterium": "frage", "Nebenmission": "koffer",
    "Wymans Klassiker": "auto", "Randys Wunschliste": "auto",
    /* Meditation */
    "Meditation": "lotus",
    /* Aktivitäten */
    "Rennen": "flagge", "Rennen-Herausforderung": "flagge", "Drohnenrennen": "drohne", "Schießstand": "zielscheibe",
    "Schießstand-Herausforderung": "zielscheibe", "Schießstand-Info": "zielscheibe", "Schießstand-Challenge": "zielscheibe", "Race Challenge": "flagge", "Bowling": "kegel", "Trophäen-Ort": "pokal",
    "Kitty-Litter-Labor": "kolben", "Golf": "golf", "Billard": "billard", "Billardtisch": "billard", "Basketballkorb": "korb",
    "Arcade": "pad", "Videospiel": "pad", "Jagd": "pfote", "Stuntsprung": "rampe", "Angel-Herausforderung": "fisch",
    "Angelplatz": "fisch", "Workout": "hantel", "Training": "hantel", "Herausforderung": "medaille",
    "Strangers & Freaks": "frage", "Nebenauftrag": "koffer", "Nebenjob": "koffer", "Beziehung": "herz", "Aktivität": "medaille",
    /* Läden & Dienste */
    "Bar & Club": "glas", "Fast Food": "burger", "Supermarkt": "wagen", "Tankstelle": "zapfsaeule", "Tuning": "schluessel",
    "Kleidung": "shirt", "Schnapsladen": "flasche", "Friseur": "schere", "Tattoo": "tropfen", "Bahnhof": "zug", "Garage": "garage",
    "Sonstiges": "funke",
    /* Sammelobjekte */
    "Sammelobjekt": "funke", "WAiNK-Wahrzeichen": "kamera", "WAiNK-Kuriosität": "auge", "WAiNK-Skulptur": "statue",
    "No-Flusher-Tag": "tag", "Sammelkarte": "karte", "Magazin & Buch": "buch", "Playlist-Poster": "note",
    "Kokain-Flamingo": "vogel", "Meteorit": "stern", "Buchtausch": "buch", "Luxusuhr": "uhr",
    /* v9 */ "Brets Deck": "pfote", "Unterschlupf": "stern", "Unter-Brücke": "rampe", "Messerflug": "rampe", "BASE-Sprung": "rampe",
    /* Eigene */
    "Eigener Punkt": "plus"
  };
  /* Kategorie → Symbol (wenn der Untertyp nicht bekannt ist) */
  const SYM_KAT = { basis: "stern", waffe: "pistole", laden: "fadenkreuz", gang: "totenkopf", raub: "bank", geld: "schein",
    dienst: "funke", samm: "funke", code: "tresor", geheim: "frage", medi: "lotus", aktiv: "medaille", eigen: "plus" };
  /* Schlüsselwörter als Rückfall, falls ein neuer Untertyp noch nicht eingetragen ist (DE + EN) */
  const SYM_WORT = [
    [/pistol/i, "pistole"], [/revolver/i, "revolver"], [/\bmp\b|smg|maschinenpistole/i, "mp"], [/scharfsch|sniper|jagdgewehr|hunting rifle/i, "sniper"],
    [/sturmgewehr|assault/i, "gewehr"], [/schrot|shotgun/i, "schrot"], [/nahkampf|melee|messer|knife/i, "messer"], [/schwer|heavy/i, "schwer"],
    [/illegal/i, "maske"], [/wrack|wreck/i, "anker"], [/drogen|drugs/i, "paket"], [/versteck|stash|geld|money|cash/i, "schein"], [/hehler|fence/i, "sack"],
    [/rennen|race/i, "flagge"], [/schieß|shooting/i, "zielscheibe"], [/angel|fish/i, "fisch"], [/billard|pool/i, "billard"],
    [/flamingo/i, "vogel"], [/karte|card/i, "karte"], [/buch|book|magazin/i, "buch"], [/poster|playlist/i, "note"], [/waink/i, "kamera"],
    [/auto|car|klassiker|classic|wunschliste|wish list/i, "auto"], [/zufall|random/i, "ausruf"], [/beziehung|relationship/i, "herz"],
    [/uhr|watch/i, "uhr"], [/tresor|vault|safe|code/i, "tresor"], [/bank/i, "bank"]
  ];

  /* Englische Typnamen auf dieselben Symbole legen */
  const TYP = Object.assign({}, SYM_TYP);
  if (window.LANG === "en" && typeof window.trS === "function") Object.entries(SYM_TYP).forEach(([k, v]) => { TYP[window.trS(k)] = v; });

  function symbolName(o) {
    const k = o.k || "eigen";
    if (k === "gang") return "totenkopf";           /* Gang-Einträge tragen teils eine Ortsbeschreibung im typ-Feld */
    if (o.typ && TYP[o.typ]) return TYP[o.typ];
    if (o.typ && k !== "eigen") for (const [re, s] of SYM_WORT) if (re.test(o.typ)) return s;
    return SYM_KAT[k] || "funke";
  }
  function svg(name) { return `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">${S[name] || S.funke}</svg>`; }

  /* ---------- Darstellung ---------- */
  const css = document.createElement("style");
  css.textContent = `
.pin.sym{width:30px;height:30px;background:#12151c;border:2px solid var(--c);color:var(--c);box-shadow:0 0 0 1.5px #0d0f14,0 1px 5px rgba(0,0,0,.6);display:grid;place-items:center;padding:0}
.pin.sym svg{width:18px;height:18px;display:block;filter:drop-shadow(0 0 1px rgba(0,0,0,.5))}
.pin.sym.erledigt svg{display:none}
.pin.sym.erledigt::after{color:var(--c)}
.pin.sym.aktiv{border-color:#fff;color:#fff}
.sym-punkt{width:22px;height:22px;flex:0 0 22px;border-radius:50%;background:#12151c;border:2px solid var(--c);color:var(--c);display:inline-grid;place-items:center}
.sym-punkt svg{width:13px;height:13px;display:block}
.chip .sym-mini{display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-right:4px;color:var(--c)}
.chip .sym-mini svg{width:14px;height:14px;display:block}`;
  document.head.appendChild(css);

  window.LH_SYMBOL = { svg, symbolName, S, SYM_TYP };

  /* Kartenpunkt */
  window.pinIcon = function (o) {
    const k = KAT[o.k] || KAT.eigen;
    const fertig = istDone("o:" + o.id);
    const cls = ["pin", "sym", fertig ? "erledigt" : "", (o.g ?? 2) === 0 ? "ungefaehr" : ""].join(" ");
    return L.divIcon({ className: "", html: `<div class="${cls}" style="--c:${k.farbe}" title="${esc(o.typ || k.name)}">${svg(symbolName(o))}</div>`, iconSize: [30, 30], iconAnchor: [15, 15] });
  };

  /* Filter: Farbpunkte → Kategoriesymbole, Untertyp-Chips mit kleinem Symbol */
  const altFilter = window.filterPanelBauen;
  if (typeof altFilter === "function") {
    window.filterPanelBauen = function () {
      altFilter.apply(this, arguments);
      const pnl = document.getElementById("k-panel"); if (!pnl) return;
      pnl.querySelectorAll(".f-zeile").forEach(z => {
        const p = z.querySelector(".punkt"), n = z.querySelector("[data-x]");
        if (!p || !n) return;
        const id = n.dataset.x, k = KAT[id]; if (!k) return;
        const s = document.createElement("span"); s.className = "sym-punkt"; s.style.setProperty("--c", k.farbe); s.innerHTML = svg(SYM_KAT[id]);
        p.replaceWith(s);
      });
      pnl.querySelectorAll(".chip[data-t]").forEach(c => {
        if (c.querySelector(".sym-mini")) return;
        const [kid, ...rest] = c.dataset.t.split("|"); const typ = rest.join("|"); const k = KAT[kid]; if (!k) return;
        const s = document.createElement("span"); s.className = "sym-mini"; s.style.setProperty("--c", k.farbe); s.innerHTML = svg(symbolName({ k: kid, typ }));
        c.prepend(s);
      });
    };
  }

  /* Bereits gezeichnete Punkte und Filter neu aufbauen */
  try {
    if (typeof KARTE !== "undefined" && KARTE.map) { markerAktualisieren(); }
    if (document.querySelector("#k-panel .f-zeile")) window.filterPanelBauen();
  } catch (e) { /* Karte noch nicht gestartet – dann greifen die neuen Funktionen beim Start */ }
})();
