# Alessandro Guelpa · Portfolio

Sito personale con progetti, blog, curriculum e contatti. React 18, TypeScript, Vite e Tailwind CSS. Il progetto musicale VEHRT mantiene una pagina e un’identità visiva dedicate.

## Sviluppo e verifica

Richiede Node.js 22 e npm. Il lockfile è incluso per installazioni riproducibili.

```bash
npm ci
npm run dev
npm run typecheck
npm run build
npm run check:build
npm run check:routing
npm run preview
```

La build genera `dist` con HTML per le pagine del sito e ogni articolo del blog, più `404.html`. `dist-ssr` è un passaggio intermedio di build e non va pubblicato. L’anteprima statica usa le stesse impostazioni di clean URL e redirect del file `vercel.json`.

## Contenuti

- Articoli: `src/data/blogPosts.ts`. Si continua a scrivere nello stesso array. Il plugin in `vite.config.ts` genera le anteprime del blog, i tre articoli della home e un modulo separato per ogni testo.
- Progetti: `src/data/projects.ts`. Contesto, stack e link sono riutilizzati in home e nella pagina Progetti.
- Navigazione: `src/components/navbar.tsx`; link social e descrizione nel file `src/config/site.ts`.
- Metadati: `PageSeo` per le pagine del portfolio; metadati dedicati per VEHRT. La sitemap viene generata nella build.
- Nuove pagine: aggiungere la rotta in `src/App.tsx`, nella lista del plugin di Vite e nella mappa di `scripts/prerender.mjs`.

## Controlli

`check:build` verifica le pagine prerenderizzate: titoli unici, un H1 e un canonical per pagina, metadati articolo, JSON-LD valido, risorse presenti, 404 noindex, paginazione e budget dei file della home. `check:routing` avvia un server temporaneo per controllare URL, redirect e risposte 404. La workflow `Site checks` esegue questi controlli per le pull request e per main.

Gli eventi Analytics descrivono aperture di progetti, download del CV e intenzioni di contatto. Non includono nome, email o messaggio del modulo. Il form usa l’integrazione Web3Forms esistente; successi ed errori restano leggibili, il testo viene conservato se l’invio fallisce e le richieste vengono interrotte dopo 15 secondi.

## Hosting

Pubblicare solo `dist`. La configurazione Vercel serve i file HTML con URL senza estensione e conserva i redirect delle vecchie pagine. Non aggiungere un rewrite globale alla home: impedirebbe di servire i metadati delle singole pagine e vere risposte 404.
