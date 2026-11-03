# Pubblicazione del blog

## Responsabilità e calendario

Il blog di Alessandro Guelpa è pubblicato su <https://alessandroguelpa.it/blog>.
Il sorgente canonico è `AlessandroGuelpa/Sito-Personale-React`, branch `main`.
Il push su `main` avvia la distribuzione Vercel già configurata.

Dal 3 novembre 2026 la generazione è affidata all'attività programmata ChatGPT
**Blog sito personale**, con uscite lunedì, mercoledì e venerdì in mattinata,
fuso `Europe/Rome`. La prima uscita è prevista per il 4 novembre 2026.
Il precedente workflow giornaliero Claude e il relativo prompt sono ritirati.
L'utente ha autorizzato scrittura e pubblicazione automatica degli articoli.

## Fonti persistenti

- `src/data/blogPosts.ts`: contenuti e metadati effettivamente pubblicati.
- `blog-topics.md`: rotazione, prossimo tema e registro delle uscite.
- `src/config/blog.ts`: le cinque categorie principali del filtro.
- Questo documento: procedura di pubblicazione e verifiche.

Ogni esecuzione legge la versione corrente del repository. Un checkout locale
precedente non è una fonte aggiornata né un prerequisito del processo.

## Articolo

1. Leggere il prossimo tema e tutti i titoli; approfondire i testi affini per
   evitare ripetizioni. La rotazione è ingegneria, coding, spazio/Artemis,
   salvaguardia del pianeta, poi di nuovo ingegneria.
2. Controllare il registro per la data odierna in `Europe/Rome`: se esiste già
   una voce `programmata`, verificare il relativo articolo e terminare senza
   duplicare il contenuto o avanzare il prossimo tema.
3. Scrivere circa 250–450 parole in italiano, con un problema concreto, un
   esempio e una conseguenza pratica. Usare paragrafi brevi e sezioni leggibili.
   La prima persona può esprimere un ragionamento; non attribuire all'autore
   clienti, esperienze, risultati professionali o personali non documentati.
4. Verificare i fatti con fonti primarie ufficiali correnti. Inserire link alle
   fonti in fondo all'articolo. Non dedurre o inventare date di lanci e missioni.
   Dichiarare gli esempi ipotetici e le condizioni delle semplificazioni.
5. Inserire un solo oggetto in cima all'array, con `id` univoco kebab-case,
   `title`, data di pubblicazione reale `AAAA-MM-GG`, `category`, `icon`, `excerpt`,
   `tags` e `content` Markdown. Conservare tutti gli articoli precedenti.
   Nella template string eseguire l'escape di backslash, backtick e `${`.
   Scegliere una sola `category` fra `sviluppo-software`, `ingegneria`, `spazio`,
   `ambiente`, `musica-audio`, in base all'argomento principale. Non creare
   categorie nuove per tecnologie o singoli temi: Rails, JavaScript, Artemis,
   materiali ed effetti audio restano tag specifici. Il filtro mostra soltanto
   le cinque categorie; i tag sono cercabili e i loro link continuano a filtrare
   l'archivio tramite `?tag=`.
6. Nella stessa modifica avanzare il prossimo tema e aggiungere una riga al
   registro con data locale, tema, slug, titolo e origine `programmata`.
   Per i 45 articoli del recupero conservare le date editoriali distribuite
   dal 22 luglio al 2 novembre 2026, su lunedì/mercoledì/venerdì, come richiesto
   dall’autore. Non riportarli alla data del 3 novembre o alla data di esecuzione.
   Questa scelta riguarda il recupero; i nuovi articoli usano la data odierna.

## Verifica e pubblicazione

Usare Node.js 22 e le dipendenze del lockfile. Se mancano: `npm ci`.
Eseguire sul contenuto finale:

```sh
npm run typecheck
npm run build
npm run check:build
npm run check:routing
```

La build deve includere HTML, metadati e sitemap del nuovo articolo. Verificare
slug univoco, correttezza degli esempi, link alle fonti e conservazione dei post
esistenti. Per soli contenuti non occorre modificare componenti o configurazioni
di hosting. Correggere gli errori introdotti prima di pubblicare.

Creare un commit atomico dei soli `src/data/blogPosts.ts` e `blog-topics.md`.
Con Git preparare esplicitamente quei due percorsi; non usare `git add .`.
Con il plugin GitHub si possono creare blob, tree e commit sullo stesso head,
poi spostare `main` con `expected_sha` e senza forzare la storia.
Se il branch avanza, rileggere, ricontrollare l'idempotenza e integrare prima di
ritentare. Non sovrascrivere modifiche concorrenti.

Confermare l'esito della scrittura, poi leggere lo stato Vercel del commit e,
quando accessibile, il link diretto dell'articolo. Distinguere fra commit
inviato, deploy in corso, deploy riuscito e pubblicazione verificata.
Un testo generato o una build locale riuscita non provano che sia online.
In caso di blocco conservare la bozza in modo persistente e riferire il motivo
concreto, senza inventare un esito positivo.
