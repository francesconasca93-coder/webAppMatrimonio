# Invito digitale matrimonio

## Personalizzazione
- `index.html`: nomi, data, luoghi, orari, programma, dress code
- `style.css` → `:root`: colori del tema
- `script.js` → `WEDDING_DATE`: data/ora esatta della cerimonia (countdown)
- L'hero mostra un'icona a tema Puglia (trulli) invece di una foto — se in futuro volete sostituirla con una vostra foto, basta dirmelo
- **Da sostituire prima di pubblicare** (sono tutti dati fake, in `index.html`): IBAN nella sezione "Un pensiero per noi", numeri di telefono e email nella sezione "Contatti"
- Meteo: widget live (Open-Meteo, gratis, nessuna chiave richiesta) sulle coordinate del Santuario — mostra le condizioni attuali; la previsione esatta del 22/05/2027 sarà visibile automaticamente quando ci si avvicinerà alla data (le previsioni sono disponibili di norma fino a ~16 giorni prima)
### RSVP → Google Sheet (gratis, via Apps Script)
1. Crea un nuovo Google Sheet, rinominalo (es. "RSVP Matrimonio")
2. Estensioni → Apps Script
3. Cancella il codice di default, incolla il contenuto di `google-apps-script.gs`
4. Salva il progetto (Ctrl+S, dagli un nome)
5. Deploy → Nuovo deployment → tipo "Applicazione web"
6. "Esegui come": Me — "Chi può accedere": Chiunque
7. Deploy → autorizza i permessi (se compare "Google non ha verificato l'app" → Impostazioni avanzate → prosegui)
8. Copia l'URL generato (tipo `https://script.google.com/macros/s/XXXX/exec`)
9. Sostituisci `YOUR_APPS_SCRIPT_WEB_APP_URL` nell'`action` del form in `index.html` con quell'URL

Ogni submission crea automaticamente il foglio "RSVP" con una riga per risposta (timestamp, nome, presenza, accompagnatori, note). Se modifichi lo script dopo il primo deploy, serve un nuovo deployment (Deploy → Gestisci deployment → Modifica → Nuova versione) perché l'URL resti aggiornato.

### Totali automatici nel Google Sheet
In una cella libera (es. colonna G), nel foglio "RSVP":
- Totale confermati: `=CONTA.SE(C:C,"si")`
- Totale persone (confermati + accompagnatori): `=SOMMA(D:D)+CONTA.SE(C:C,"si")`

## Pubblicazione (gratis)

### Opzione consigliata: Netlify
1. Vai su [netlify.com](https://app.netlify.com), crea un account
2. "Add new site" → "Deploy manually" → trascina la cartella `invito-matrimonio`
3. Ottieni un URL tipo `nome-random.netlify.app`
4. In "Site settings" → "Change site name" per personalizzarlo, es. `marco-e-giulia.netlify.app`
5. Volendo, collega un dominio tuo (es. `marcoegiulia.it`) da "Domain settings"

### Alternativa: GitHub Pages
1. Crea una repo pubblica su GitHub, carica questi file
2. Settings → Pages → Source: branch `main`, cartella `/`
3. URL risultante: `https://tuo-username.github.io/nome-repo`

## Distribuzione agli invitati

- **QR code**: genera un QR sull'URL pubblicato (es. su [qr-code-generator.com](https://www.qr-code-generator.com), gratis) e stampalo sulle partecipazioni cartacee — chi lo scansiona apre direttamente il sito
- **WhatsApp**: manda il link diretto nei gruppi famiglia/amici, o crea un messaggio broadcast
- **Link breve**: se l'URL è lungo, usa [bit.ly](https://bitly.com) per un link corto e memorizzabile da dettare a voce
- **Partecipazione cartacea tradizionale + QR**: la soluzione più elegante — partecipazione fisica classica con il QR code stampato come "invito digitale" per dettagli, RSVP e aggiornamenti last-minute
