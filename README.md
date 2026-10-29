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
npx playwright install chromium
npm run check:browser
npm run preview
```

La build genera `dist` con HTML per le pagine del sito e ogni articolo del blog, più `404.html`. `dist-ssr` è un passaggio intermedio di build e non va pubblicato. L’anteprima statica usa le stesse impostazioni di clean URL e redirect del file `vercel.json`.

## Contenuti

- Articoli: `src/data/blogPosts.ts`. Si continua a scrivere nello stesso array. Il plugin in `vite.config.ts` genera le anteprime del blog, i tre articoli della home e un modulo separato per ogni testo, con al massimo tre letture correlate selezionate per tag e titolo. Se non ci sono affinità, propone altre letture recenti.
- Lettura: `src/utils/article-navigation.ts` genera gli ID dai titoli già interpretati dal parser Markdown, con gestione degli accenti e dei duplicati. L’indice compare negli articoli da almeno tre minuti con almeno tre sezioni. I blocchi di codice hanno un controllo di copia con messaggi di successo e di errore.
- Progetti: `src/data/projects.ts`. Contesto, stack e link sono riutilizzati in home e nella pagina Progetti.
- Navigazione: `src/components/navbar.tsx`; link social e descrizione nel file `src/config/site.ts`.
- Instagram VEHRT: `src/components/instagram-feed.tsx` incorpora il profilo pubblico `@vehrt_audio` tramite lo script ufficiale di Instagram. Lo script viene caricato quando la sezione si avvicina allo schermo; il collegamento diretto al profilo resta disponibile anche se l’embed è bloccato. Non occorrono token nel browser né copie locali dei post. Il profilo deve restare pubblico e consentire l’incorporamento nei siti web.
- La sezione Instagram usa una griglia più ampia e adatta al nero le bande dell’interfaccia tramite livelli grafici senza eventi del puntatore. Il documento incorporato, le copertine dei post e i suoi link rimangono intatti. Il calcolo delle bande segue l’anteprima nativa di sei immagini quadrate; un cambiamento del layout di Instagram potrebbe richiedere un aggiornamento di questa presentazione.
- Metadati: `PageSeo` per le pagine del portfolio; metadati dedicati per VEHRT. La sitemap viene generata nella build.
- Nuove pagine: aggiungere la rotta in `src/App.tsx`, nella lista del plugin di Vite e nella mappa di `scripts/prerender.mjs`.

## Controlli

`check:build` verifica le pagine prerenderizzate: titoli unici, un H1 e un canonical per pagina, metadati articolo, JSON-LD valido, risorse presenti, 404 noindex, paginazione e budget dei file della home. `check:routing` avvia un server temporaneo per controllare URL, redirect e risposte 404. La workflow `Site checks` esegue questi controlli per le pull request e per main.

Gli eventi Analytics descrivono aperture di progetti, download del CV e intenzioni di contatto. Non includono nome, email o messaggio del modulo. Il form usa l’integrazione Web3Forms esistente; successi ed errori restano leggibili, il testo viene conservato se l’invio fallisce e le richieste vengono interrotte dopo 15 secondi.

`check:browser` verifica la navigazione a dieci larghezze, da 320 a 1440 px, e la lettura degli articoli: indice e ancore, copia del codice, appunti non disponibili, letture correlate, focus dopo la navigazione e layout mobile/desktop. La workflow conserva schermate chiare e scure nell’artefatto `site-browser-checks`. `check:header` resta disponibile per eseguire soltanto i controlli della navigazione.

In CI i test usano Chrome già presente nel runner Ubuntu; in locale usano Chromium installato con il comando indicato sopra.

## Hosting

Pubblicare solo `dist`. La configurazione Vercel serve i file HTML con URL senza estensione e conserva i redirect delle vecchie pagine. Non aggiungere un rewrite globale alla home: impedirebbe di servire i metadati delle singole pagine e vere risposte 404.
