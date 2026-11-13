# IMC MP – spletna stran

Statična stran (Eleventy) gostovana na Cloudflare Pages (`imc-mp.pages.dev`). Vsebino urejaš na **/admin** (prijava z GitHub računom).

## Urejanje
- **Projekti** – oglasi, filmi, oddaje … (naslov, vrsta, skladba, leto, slika, povezava, vrstni red)
- **Nastavitve strani** – vsa besedila, povezave gumbov in kontakti

Vsako shranjevanje v /admin naredi commit na GitHub, Cloudflare Pages pa v ~1 minuti objavi novo verzijo.

## Cloudflare Pages
- Build command: `npm run build`
- Build output directory: `_site`
- Spremenljivka okolja: `NODE_VERSION = 22`
- Za /admin: `GITHUB_CLIENT_ID` in `GITHUB_CLIENT_SECRET` (skrivnost) iz GitHub OAuth aplikacije
  s callback URL `https://imc-mp.pages.dev/api/callback`

## Lokalno
```
npm install
npm start      # http://localhost:8080
```
