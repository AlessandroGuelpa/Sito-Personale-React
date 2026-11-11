export const BLOG_HUBS = [
  {
    slug: "shopify-integrazioni",
    title: "Shopify, API e integrazioni ERP",
    description: "Guide su Shopify, GraphQL Admin API, inventario, ordini, webhook e sincronizzazioni affidabili con gestionali.",
    intro: "Dati di catalogo, ordini e magazzino devono restare coerenti anche in presenza di ritardi, retry e richieste concorrenti. Qui raccolgo gli approfondimenti su Shopify, API e integrazioni ERP.",
  },
  {
    slug: "react-frontend",
    title: "React, JavaScript e Frontend",
    description: "Rendering, performance, accessibilità, interfacce e gestione dei dati con React, TypeScript e JavaScript.",
    intro: "Dal rendering SEO-friendly alle interfacce reattive: note pratiche su React, TypeScript, JavaScript, esperienza utente e prestazioni web.",
  },
  {
    slug: "rails-backend",
    title: "Ruby on Rails, backend e architetture",
    description: "Ruby, Rails, database, API, job periodici, affidabilità e progettazione dei servizi backend.",
    intro: "Un servizio backend è utile quando gestisce bene dati, concorrenza ed errori. Qui raccolgo esempi su Rails, API, database, code di lavoro e scelte architetturali.",
  },
  {
    slug: "scienza-passioni",
    title: "Scienza, ingegneria, spazio e passioni",
    description: "Articoli di ingegneria, esplorazione spaziale, ambiente, musica e sperimentazione.",
    intro: "Uno spazio per curiosità e approfondimenti oltre lo sviluppo software: ingegneria, Luna e spazio, sostenibilità, audio e musica generativa.",
  },
] as const;

export type BlogHubSlug = (typeof BLOG_HUBS)[number]["slug"];
export const BLOG_PAGE_SIZE = 12;

export function getBlogHub(slug: string | undefined) {
  return BLOG_HUBS.find((hub) => hub.slug === slug);
}

export function blogHubForPost(post: { hub?: BlogHubSlug; category: string }): BlogHubSlug {
  // Explicit editorial assignment is authoritative. Legacy fixtures use fallback.
  if (post.hub) return post.hub;
  return post.category === "sviluppo-software" ? "react-frontend" : "scienza-passioni";
}

export function blogHubPath(slug: BlogHubSlug) {
  return `/blog/temi/${slug}`;
}

export function blogArchivePath(page: number, slug?: BlogHubSlug) {
  const base = slug ? blogHubPath(slug) : "/blog";
  return page <= 1 ? base : `${base}/page/${page}`;
}

export const BLOG_HUB_GUIDES: Partial<Record<BlogHubSlug, {
  introduction: string;
  sections: { id: string; title: string; paragraphs: string[]; links: { id: string; label: string }[] }[];
  sources: { label: string; url: string }[];
}>> = {
  "shopify-integrazioni": {
    introduction: "Integrare Shopify con un gestionale significa coordinare sistemi che non condividono necessariamente lo stesso orologio né la stessa disponibilità. Il problema principale non è fare una richiesta API, ma sapere quale dato è autorevole, cosa succede se una chiamata si ripete e come individuare ciò che non è stato sincronizzato.",
    sections: [
      {
        id: "modello-dati",
        title: "Decidere chi è proprietario del dato",
        paragraphs: [
          "Prima del codice, descrivi il ciclo di vita di prodotto, variante, quantità, ordine e stato di evasione. Per ogni campo indica il sistema che può modificarlo, il verso della sincronizzazione e quale identificativo collega i record. Shopify e il gestionale possono rappresentare la stessa informazione con strutture differenti: il mapping deve esplicitare trasformazioni, valori mancanti e casi in cui il dato non può essere riconciliato.",
          "L'inventario è un caso delicato: un job che scrive una quantità letta in precedenza può sovrascrivere eventi più recenti. Occorre conoscere i meccanismi della piattaforma, stabilire un ordinamento delle modifiche e distinguere le rettifiche dagli aggiornamenti assoluti. Un processo di verifica deve poter segnalare divergenze senza intervenire alla cieca."
        ],
        links: [
          { id: "shopify-inventario-scritture-concorrenti", label: "Come evitare sovrascritture dell'inventario Shopify" },
          { id: "rails-find-each-batch-memoria", label: "Elaborare un catalogo Rails a batch" }
        ]
      },
      {
        id: "webhook-retry",
        title: "Webhook, idempotenza e riconciliazione",
        paragraphs: [
          "I webhook notificano eventi, ma non vanno trattati come una coda infallibile con una sola consegna garantita. Un evento può essere ripetuto, arrivare in ritardo o richiedere un recupero. Identifica l'operazione con una chiave idempotente, registra l'esito e costruisci retry limitati con backoff. L'obiettivo non è impedire tutte le duplicazioni della consegna, ma evitare che una duplicazione provochi due effetti di business.",
          "Un job programmato di riconciliazione confronta periodicamente lo stato effettivo dei sistemi e recupera le differenze che sfuggono al flusso in tempo reale. Progetta questa verifica in modo che non riscriva dati più recenti. Per i guasti servono metriche, log correlabili e una procedura manuale di ripristino dei casi irrisolti."
        ],
        links: [
          { id: "webhook-idempotenza-ordini", label: "Evitare la creazione duplicata di ordini" },
          { id: "webhook-riconciliazione-sincronizzazione", label: "Perché serve anche un controllo periodico" }
        ]
      },
      {
        id: "api-governance",
        title: "Limiti API, sicurezza e manutenzione",
        paragraphs: [
          "L'Admin API GraphQL richiede query selettive, paginazione controllata e una gestione dei limiti fondata sul costo delle operazioni. Riprovare immediatamente richieste che consumano troppe risorse può peggiorare un collo di bottiglia. Distingui errori di autenticazione, dati non validi e limiti temporanei; ciascuna categoria richiede una risposta diversa.",
          "Le credenziali devono essere limitate agli scope necessari e conservate fuori dal repository. Prima di considerare completa un'integrazione, verifica scenari con prodotti cancellati, varianti cambiate, errori parziali e deploy durante una sincronizzazione. Un sistema è manutenibile quando consente di capire quale record non è stato elaborato e di ripartire senza duplicare azioni."
        ],
        links: [
          { id: "shopify-graphql-budget-query", label: "Gestire il budget delle query GraphQL" },
          { id: "shopify-custom-fields-app-vs-codice-nativo", label: "Usare le line item properties native" }
        ]
      }
    ],
    sources: [
      { label: "Shopify — Webhooks", url: "https://shopify.dev/docs/apps/build/webhooks" },
      { label: "Shopify — GraphQL Admin API rate limits", url: "https://shopify.dev/docs/api/usage/limits" }
    ]
  },
  "react-frontend": {
    introduction: "Per progettare un frontend affidabile servono più cose di componenti ben organizzati: bisogna considerare la prima risposta HTML, il costo del JavaScript, il comportamento asincrono delle richieste e l'accessibilità. Queste parti incidono sia sull'esperienza delle persone sia sulla capacità dei crawler di comprendere le pagine.",
    sections: [
      {
        id: "rendering-scoperta",
        title: "Rendering, HTML e contenuti raggiungibili",
        paragraphs: [
          "Una Single Page Application può mostrare contenuto dopo l'esecuzione JavaScript, ma per le pagine informative è preferibile rendere disponibile il testo principale nell'HTML iniziale tramite SSR o prerendering. Questo riduce la dipendenza dal rendering successivo del crawler e permette al lettore di vedere prima le informazioni importanti. Il documento deve inoltre presentare un titolo significativo, un H1 coerente e un canonical corretto.",
          "Una sitemap non sostituisce la navigazione. Link HTML verso articoli, sezioni e pagine successive servono anche per costruire una gerarchia comprensibile. Filtri di ricerca e percorsi canonici vanno separati per evitare di generare molte varianti dello stesso contenuto."
        ],
        links: [
          { id: "equazione-del-razzo-e-il-problema-del-bundle-da-830kb", label: "Ridurre il peso del JavaScript iniziale" },
          { id: "teoria-del-caos-effetto-farfalla-e-css-globale", label: "Gestire le regressioni del CSS globale" }
        ]
      },
      {
        id: "stato-concorrenza",
        title: "Stato, richieste concorrenti e feedback",
        paragraphs: [
          "Lo stato locale è sufficiente quando una scelta riguarda un singolo componente. Lo stato condiviso diventa utile se più parti dell'interfaccia devono reagire allo stesso dato. Prima di introdurre uno store globale, individua il proprietario dell'informazione e distingui i dati derivabili da quelli realmente persistenti. La complessità nasce quando più copie della stessa informazione richiedono sincronizzazione.",
          "Le richieste HTTP possono completarsi in ordine diverso rispetto a quello in cui partono. In un campo di ricerca, una risposta vecchia può sovrascrivere quella relativa all'ultima digitazione. AbortController aiuta ad annullare lavori non più utili, ma il codice deve comunque associare ogni risposta all'intenzione corretta. Un aggiornamento ottimistico richiede sempre una politica di rollback."
        ],
        links: [
          { id: "fetch-abortcontroller-risposte-obsolete", label: "Gestire risultati asincroni fuori ordine" },
          { id: "dilatazione-temporale-interstellar-e-optimistic-ui", label: "Progettare l'optimistic UI con rollback" }
        ]
      },
      {
        id: "performance-accessibilita",
        title: "Performance misurabili e accessibilità",
        paragraphs: [
          "Il costo del frontend non è soltanto il peso compresso degli asset: parsing, esecuzione, rendering e risorse condivise possono rallentare l'interazione. Misura su dispositivi realistici e separa la latenza di rete dal lavoro sul main thread. Per la ricerca di regressioni, combina strumenti di laboratorio con misure raccolte dagli utenti, quando disponibili.",
          "Un modulo accessibile richiede etichette leggibili, messaggi di errore comprensibili, gestione della tastiera e stato visibile. Anche le interazioni che sembrano ovvie con il mouse devono essere verificabili senza puntatore. Gli obiettivi di qualità devono quindi comprendere sia Core Web Vitals sia controlli manuali della navigazione."
        ],
        links: [
          { id: "forza-di-attrito-e-la-ux-dei-form", label: "Ridurre errori e abbandono dei form" },
          { id: "conservazione-della-massa-e-memory-leaks-in-react", label: "Eliminare risorse React non liberate" }
        ]
      }
    ],
    sources: [
      { label: "React — Learn", url: "https://react.dev/learn" },
      { label: "Google Search Central — JavaScript SEO", url: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics" }
    ]
  },
  "rails-backend": {
    introduction: "Un backend affidabile è più della somma di controller e modelli. La qualità dipende dal modo in cui vengono gestite transazioni, concorrenza, integrazioni esterne e operazioni asincrone. Rails offre strumenti utili, ma la corretta configurazione richiede di comprendere anche il database e i comportamenti dell'infrastruttura.",
    sections: [
      {
        id: "database-concorrenza",
        title: "Modelli, query e vincoli di integrità",
        paragraphs: [
          "Active Record rende espressivi molti accessi al database, ma non elimina il costo delle query. Quando un elenco legge un'associazione per ciascun record, il numero di richieste può crescere con la dimensione dei risultati. include, preload ed eager_load offrono strategie diverse, da scegliere verificando query e memoria effettivamente usata.",
          "Le validazioni applicative migliorano la qualità degli errori mostrati all'utente, ma non sono sufficienti a garantire unicità sotto concorrenza. Un indice univoco sul database e una gestione esplicita delle violazioni completano il controllo. Per le operazioni che devono restare atomiche, chiarisci quali scritture appartengono alla stessa transazione."
        ],
        links: [
          { id: "rails-problema-n-piu-1", label: "Ridurre le query N+1 con Active Record" },
          { id: "rails-unicita-database-concorrenza", label: "Unicità e richieste contemporanee" }
        ]
      },
      {
        id: "job-sistemi",
        title: "Job asincroni e integrazioni esterne",
        paragraphs: [
          "Un job in background evita che la richiesta HTTP resti aperta per operazioni lente, ma introduce altri problemi: code congestionate, retry, esecuzioni duplicate e visibilità dell'errore. Le operazioni ripetibili dovrebbero essere idempotenti e avere un identificativo osservabile. Valuta il comportamento del worker durante deploy, interruzioni e timeout.",
          "Quando un'operazione modifica il database e deve notificare un sistema remoto, una semplice transazione locale non può garantire l'esito della chiamata esterna. Il pattern transactional outbox registra nello stesso commit l'intenzione di inviare, lasciando a un processo successivo il compito di consegnare il messaggio. Rimangono necessarie deduplicazione e riconciliazione."
        ],
        links: [
          { id: "rails-background-job-active-job", label: "Capire retry e idempotenza di Active Job" },
          { id: "transactional-outbox-invio-erp", label: "Il pattern outbox per le integrazioni ERP" }
        ]
      },
      {
        id: "manutenzione-test",
        title: "Test, manutenzione e confini architetturali",
        paragraphs: [
          "Prima di introdurre un'astrazione, definisci il comportamento che deve rimanere stabile. I service object possono separare flussi che coinvolgono più modelli, ma non sostituiscono la definizione del contratto né le verifiche degli effetti collaterali. Test unitari e request spec coprono responsabilità differenti: entrambi possono essere necessari quando l'API ha conseguenze sui dati.",
          "Il codice legacy diventa più gestibile quando le modifiche sono piccole, osservabili e reversibili. Documenta dipendenze e decisioni, controlla la compatibilità delle migrazioni con il codice distribuito e prevedi il ripristino. La qualità operativa si misura anche dalla capacità di identificare e correggere un guasto, non soltanto dal fatto che una suite di test sia verde."
        ],
        links: [
          { id: "rails-service-objects", label: "Come usare service object testabili" },
          { id: "rails-request-specs-testare-api", label: "Verificare il contratto HTTP con request spec" }
        ]
      }
    ],
    sources: [
      { label: "Rails Guides — Active Record Querying", url: "https://guides.rubyonrails.org/active_record_querying.html" },
      { label: "Rails Guides — Active Job Basics", url: "https://guides.rubyonrails.org/active_job_basics.html" }
    ]
  }
};
