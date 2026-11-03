# Feed Instagram VEHRT

La galleria legge `src/data/instagram-feed.json` e copertine JPEG locali in `public/vehrt/instagram/`. Mostra gli ultimi sei contenuti effettivamente pubblicati, dal più recente. Le dimensioni vengono lette dai JPEG, senza assumere che tutti i verticali abbiano lo stesso rapporto. I link aprono reel e caroselli completi su Instagram.

## Fonte e programmazione

Il collegamento Metricool già autorizzato di Alessandro espone il profilo `vehrt_audio`, brand `7588668`. Una programmazione ChatGPT esegue la procedura ogni mattina alle 10:00, fuso `Europe/Rome`. Il sito non dispone di credenziali Metricool o Instagram e non interroga queste API dai browser dei visitatori.

L’aggiornamento dipende dalla disponibilità dei contenuti nelle analytics Metricool, che si sincronizzano anche quotidianamente. Il controllo del sito non rende la fonte istantanea. Il job giornaliero necessita dei collegamenti Metricool e GitHub attivi e dei relativi permessi; in caso di errore conserva l’ultima versione pubblicata.

## Procedura del job

1. Leggere il brand con Metricool e verificare che `7588668` corrisponda ancora a `vehrt_audio`. Non copiare email, hash o dati privati nel repository.
2. Richiedere le analytics degli ultimi 120 giorni fino alla data corrente, fuso `Europe/Rome`, con questo ordine di metriche già verificato: `IGPO02, IGPO03, IGPO04, IGPO05, IGPO06, IGPO07, IGRE02, IGRE03, IGRE04, IGRE05, IGRE06`. La risposta include righe reel con `[timestamp, caption, id, imageUrl, permalink]` e righe post con lo stesso ordine seguito da `type`. Non usare post solo programmati né contenuti generati ma non pubblicati.
3. Aprire un checkout aggiornato di `AlessandroGuelpa/Sito-Personale-React`, branch `main`. Salvare la risposta solo in un file temporaneo esterno al repository con forma `{"username":"vehrt_audio","rows":[...]}`.
4. Eseguire `node scripts/sync-instagram-feed.mjs /percorso/assoluto/metricool.json`. Lo script verifica URL, date e JPEG, scarica le nuove copertine e ottimizza quelle più grandi a un massimo di 640 px di larghezza, mantenendo il rapporto originale. Legge le dimensioni effettive dai file ottimizzati e aggiorna il JSON solo dopo che tutti i download sono riusciti. Non salva URL CDN temporanei. Se `changed` è `false`, terminare senza commit o notifica.
5. Se ci sono cambiamenti, eseguire `node --test scripts/sync-instagram-feed.test.mjs`, `npm run typecheck`, `npm run build`, `npm run check:build` e `npm run check:routing`. Pubblicare una sola modifica atomica contenente il JSON e le nuove immagini; usare i blob GitHub in base64 per i JPEG se il push CLI non è disponibile. Non inviare solo il JSON prima delle immagini.
6. Aprire una PR limitata a `src/data/instagram-feed.json` e `public/vehrt/instagram/`, attendere `Site checks`, quindi unirla con controllo dell’head atteso. Se `main` cambia durante il lavoro, ripartire dal nuovo head e riapplicare soltanto questi file. Non sovrascrivere modifiche ad articoli o altre pagine.
7. Verificare il deploy Vercel del commit e la presenza del nuovo feed su `https://alessandroguelpa.it/vehrt`. Non dichiarare l’aggiornamento completato in caso di errori di CI o deploy. Segnalare solo modifiche pubblicate o problemi che richiedono intervento.

Le risposte vuote, incomplete, precedenti al feed corrente o provenienti da un altro account interrompono la sincronizzazione. I file esistenti restano disponibili anche se le connessioni o il job smettono di funzionare. Una copertina non caricabile sul sito mantiene un collegamento leggibile al post originale.

## Controlli

`node --test scripts/sync-instagram-feed.test.mjs` verifica normalizzazione, mancata regressione, idempotenza e conservazione dei file dopo un download fallito. I test browser verificano immagini reali, proporzioni, link, scorrimento mobile e ripiego dopo un errore immagine. Python 3 con Pillow è richiesto esclusivamente dalla sincronizzazione per ottimizzare le copertine; è già disponibile nel runtime delle programmate e viene installato esplicitamente in CI. Non occorre un SDK Instagram né un token nel bundle pubblico.
