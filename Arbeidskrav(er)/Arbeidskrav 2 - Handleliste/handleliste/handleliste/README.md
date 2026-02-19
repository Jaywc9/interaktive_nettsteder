# Handleliste App

En enkel handleliste-applikasjon bygget med React for Arbeidskrav 2.

## Installasjon og kjøring

1. Pakk ut zip-filen
2. Åpne terminalen i prosjektmappen
3. Kjør følgende kommandoer:

```bash
npm install
npm run dev
```

4. Åpne nettleseren på http://localhost:5173

## Funksjonalitet

- Legge til varer med navn og antall
- Validering av input-felt med feilmeldinger
- Vise liste over varer
- Huke av varer som kjøpt
- Endre antall direkte i listen
- Nye varer legges til øverst
- Forhåndsdefinerte varer ved oppstart

## Komponentstruktur

```
src/
├── App.jsx              - Hovedkomponent med state
├── components/
│   ├── AddForm.jsx      - Skjema for å legge til varer
│   ├── ShoppingList.jsx - Viser listen over varer
│   └── ShoppingItem.jsx - Representerer én enkelt vare
```

## Bruk av AI

Dette prosjektet ble utviklet med assistanse fra Claude AI (Anthropic).

**Chatlogg:** [Legg inn lenke til chatloggen her]

**Hva AI hjalp med:**
- Generering av grunnleggende prosjektstruktur (Vite + React)
- Implementering av alle komponenter (App.jsx, AddForm.jsx, ShoppingList.jsx, ShoppingItem.jsx)
- CSS-styling basert på oppgavens krav og referansebilde
- Validering av input-felt
- State-håndtering med useState
- Props-passing mellom komponenter
- Semantisk HTML-struktur uten div-elementer

**Egne tilpasninger:**
- [Legg til eventuelle endringer du gjorde selv]

**Teknologier:**
- React 18
- Vite
- JavaScript (JSX)
- CSS3

## Krav oppfylt

✅ Legge til varer med validering  
✅ Vise handleliste  
✅ Avkryssing av varer  
✅ Endre antall (min 1)  
✅ Nye varer øverst  
✅ Forhåndsdefinerte varer ved oppstart  
✅ Tre komponenter + App.jsx  
✅ State og props  
✅ Semantisk HTML uten div-elementer  
✅ Ingen eksterne UI-biblioteker  
✅ Kjører med `npm run dev`
