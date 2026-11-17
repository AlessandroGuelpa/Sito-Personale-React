export const siteLanguages = ["it", "en"] as const;
export type SiteLanguage = (typeof siteLanguages)[number];

export const portfolioRoutes = {
  home: { it: "/", en: "/en" },
  projects: { it: "/project", en: "/en/projects" },
  about: { it: "/about", en: "/en/about" },
  contact: { it: "/contact", en: "/en/contact" },
} as const;

export const blogRoots = { it: "/blog", en: "/en/blog" } as const;

const inventoryArticleId = "shopify-inventario-scritture-concorrenti";

export const translatedArticleSlugs = {
  [inventoryArticleId]: "shopify-erp-inventory-sync",
  "webhook-riconciliazione-sincronizzazione":
    "shopify-webhooks-inventory-reconciliation",
  "shopify-graphql-budget-query": "shopify-graphql-query-cost-rate-limits",
  "transactional-outbox-invio-erp": "rails-transactional-outbox-erp",
  "retry-backoff-jitter-integrazioni": "api-retry-backoff-jitter",
  "webhook-idempotenza-ordini": "shopify-webhook-idempotency-duplicate-orders",
  "shopify-custom-fields-app-vs-codice-nativo": "shopify-line-item-properties",
  "rails-find-each-batch-memoria": "rails-find-each-batch-processing",
  "rails-unicita-database-concorrenza":
    "rails-unique-index-concurrent-requests",
  "rails-problema-n-piu-1": "rails-n-plus-one-queries",
  "react-key-liste-indice-stato": "react-list-keys-state-array-index",
  "react-prerender-html-metadati": "react-prerendering-seo",
  "fetch-abortcontroller-risposte-obsolete":
    "fetch-abortcontroller-stale-responses",
  "osservabilita-log-metriche-tracce": "observability-logs-metrics-traces",
  "polo-sud-lunare-ombre-energia-solare":
    "lunar-south-pole-shadows-solar-power",
  "fatica-metalli-carichi-ciclici": "metal-fatigue-cyclic-loading",
  "giardini-pioggia-deflusso-tetti": "rain-gardens-roof-runoff",
  "javascript-localstorage-persistenza":
    "javascript-localstorage-browser-storage",
  "teoria-del-caos-effetto-farfalla-e-css-globale":
    "global-css-cascade-specificity-regressions",
  "luna-massa-peso-inerzia": "mass-weight-inertia-on-the-moon",
  "javascript-moduli-es-import-export": "javascript-es-modules-import-export",
  "javascript-intl-formattazione":
    "javascript-intl-format-dates-numbers-currency",
  "sonic-pi-live-loop-cuore-del-live-coding": "sonic-pi-live-loop-beat",
  "rails-request-specs-testare-api": "rails-rspec-request-specs-api-testing",
  "entanglement-quantistico-e-i-disastri-del-global-state":
    "react-local-shared-global-state",
  "web-audio-delay-feedback": "web-audio-delaynode-feedback",
  "javascript-set-e-map": "javascript-set-map-equality",
  "javascript-optional-chaining-nullish":
    "javascript-optional-chaining-nullish-coalescing",
  "javascript-closure-spiegate-bene": "javascript-closures-lexical-scope",
  "javascript-fetch-api": "javascript-fetch-api-http-errors-timeouts",
  "javascript-debounce-throttle": "javascript-debounce-vs-throttle",
  "react-stato-derivato-carrello": "react-derived-state-cart-total",
  "progressive-enhancement-funzione-base":
    "progressive-enhancement-without-javascript",
  "equazione-del-razzo-e-il-problema-del-bundle-da-830kb":
    "reduce-initial-javascript-bundle-size",
  "rails-activerecord-le-basi": "rails-active-record-models-queries",
  "rails-associazioni-has-many-belongs-to":
    "rails-associations-belongs-to-has-many",
  "rails-validazioni-dati-puliti":
    "rails-active-record-validations-database-constraints",
  "rails-caching-basi": "rails-cache-keys-invalidation",
  "rails-api-only-mode": "rails-api-only-json-endpoints",
  "latenza-percentili-media-p99": "latency-percentiles-p95-p99",
  "ghiaccio-lunare-risorsa-utilizzabile": "lunar-ice-extraction-and-use",
  "kw-kwh-potenza-energia": "kilowatt-vs-kilowatt-hour",
  "allunaggio-paracadute-propulsione": "lunar-landing-parachutes-propulsion",
  "sonic-pi-sync-cue": "sonic-pi-sync-cue-live-loops",
  "sonic-pi-primo-suono-play-sleep": "sonic-pi-play-sleep-first-notes",
  "web-audio-convolver-riverbero": "web-audio-convolvernode-impulse-response",
  "http-etag-cache-rivalidazione": "http-etag-cache-revalidation",
  "forza-di-attrito-e-la-ux-dei-form": "form-ux-reduce-errors-and-abandonment",
  "dilatazione-temporale-interstellar-e-optimistic-ui":
    "optimistic-ui-rollback-and-reconciliation",
  "conservazione-della-massa-e-memory-leaks-in-react":
    "react-memory-leaks-effect-cleanup",
  "relativita-del-tempo-e-timezone-nei-database":
    "database-timestamps-utc-local-time-zones",
  "il-caffe-luniversita-e-la-magia-del-codice-asincrono":
    "javascript-async-fetch-await-rendering",
  "web-audio-primo-oscillatore-audiocontext":
    "web-audio-api-audiocontext-first-oscillator",
  "javascript-promise-async-await": "javascript-promises-async-await-errors",
  "web-audio-oscillatore-forme-onda":
    "oscillatornode-waveforms-sine-square-sawtooth",
  "rails-migrazioni-versionare-il-database":
    "rails-database-migrations-safe-schema-changes",
  "javascript-event-loop-come-funziona":
    "javascript-event-loop-tasks-and-microtasks",
  "web-audio-gainnode-volume-envelope": "gainnode-adsr-amplitude-envelope",
  "web-audio-grafo-nodi-connect": "web-audio-graph-connect-signal-path",
  "web-audio-biquadfilter": "biquadfilternode-lowpass-highpass-cutoff",
  "rails-consumare-api-esterne": "rails-external-api-timeouts-background-sync",
  "web-audio-metronomo-preciso": "web-audio-metronome-lookahead-scheduling",
  "rails-background-job-active-job": "rails-active-job-background-jobs-retries",
  "javascript-this-binding": "javascript-this-call-bind-arrow-functions",
  "rails-hotwire-turbo": "rails-hotwire-turbo-frames-streams",
  "rails-strong-parameters": "rails-strong-parameters-mass-assignment",
  "velocita-della-luce-ping-e-content-delivery-network":
    "cdn-caching-and-network-latency",
  "javascript-metodi-array-essenziali":
    "javascript-array-map-filter-reduce-find",
  "javascript-destructuring":
    "javascript-destructuring-defaults-null-undefined",
  "javascript-prototipi-ereditarieta":
    "javascript-prototype-chain-and-inheritance",
  "javascript-generatori": "javascript-generators-yield-lazy-iteration",
  "javascript-proxy-reflect": "javascript-proxy-reflect-traps-invariants",
  "javascript-web-workers": "javascript-web-workers-background-computation",
  "javascript-immutabilita-structuredclone":
    "javascript-structuredclone-deep-copy-limits",
  "rails-mvc-in-tre-minuti": "rails-mvc-model-view-controller",
  "rails-stimulus-js-leggero": "rails-stimulus-controllers-targets-actions",
  "rails-service-objects": "rails-service-objects-contracts-and-testing",
  "rails-routing-restful": "rails-restful-routing-with-resources",
  "rails-active-storage-allegati": "rails-active-storage-uploads-and-variants",
  "rails-full-text-search-postgres": "postgresql-full-text-search-with-rails",
  "sonic-pi-sample-libreria-integrata":
    "sonic-pi-sample-library-rate-pan-stretch",
  "sonic-pi-use-synth-scegliere-sintetizzatori":
    "sonic-pi-use-synth-timbre-envelopes",
  "sonic-pi-with-fx-effetti": "sonic-pi-with-fx-reverb-echo-distortion",
  "sonic-pi-scale-accordi": "sonic-pi-scales-chords-and-arpeggios",
  "web-audio-drum-machine-browser":
    "web-audio-drum-machine-kick-samples-timing",
  "web-audio-sequencer-step": "javascript-web-audio-step-sequencer",
  "orion-controllo-termico-radiatori-vuoto":
    "orion-thermal-control-radiators-in-space",
  "raee-elettronica-fine-vita": "e-waste-electronics-reuse-and-recycling",
  "ridondanza-guasti-correlati": "redundancy-and-correlated-failures",
  "biodiversita-impollinatori-reti":
    "pollinator-diversity-and-habitat-networks",
  "navigazione-spaziale-posizione-orientamento":
    "spacecraft-navigation-position-attitude",
  "adr-decisioni-architetturali": "architecture-decision-records-adr-examples",
  "rete-elettrica-flessibilita-domanda":
    "electricity-grid-flexibility-storage-demand",
  "deep-space-network-collegamento": "nasa-deep-space-network-how-it-works",
  "lca-confini-unita-funzionale":
    "life-cycle-assessment-functional-unit-boundary",
  "finestre-lancio-luna-orbite": "lunar-launch-windows-and-orbital-geometry",
  "alberi-citta-calore-progetto": "urban-trees-shade-heat-and-cooling",
  "tolleranze-catena-dimensionale": "tolerance-stack-up-worst-case-assembly",
  "riciclo-raccolta-qualita-materiale":
    "recycling-collection-and-material-quality",
  "punti-lagrange-equilibrio-instabile": "lagrange-points-l2-and-webb-orbit",
  "campionamento-aliasing-segnali": "sampling-and-aliasing-in-signals",
  "impronta-idrica-contesto": "virtual-water-footprint-blue-green-grey",
  "radiazioni-luna-protezione-massa": "lunar-radiation-shielding-mass-budget",
  "legge-little-code-tempi-attesa": "littles-law-queue-length-and-wait-time",
  "spreco-alimentare-misurare-prima": "measuring-food-waste-at-home",
  "polvere-lunare-progettazione": "lunar-dust-regolith-and-equipment-design",
  "feedback-controllo-ritardi-oscillazioni":
    "feedback-control-delay-and-oscillation",
  "elettricita-intensita-carbonica": "electricity-carbon-intensity-per-kwh",
  "margine-progetto-budget-capacita":
    "engineering-design-margin-capacity-budget",
  "luna-latenza-comunicazioni": "earth-moon-communication-latency",
  "misure-incertezza-cifre-decimali":
    "measurement-uncertainty-and-decimal-places",
  "riparabilita-progetto-prodotti": "product-repairability-design-and-support",
  "orion-rientro-scudo-termico": "orion-reentry-ablative-heat-shield",
  "verifica-validazione-requisiti": "verification-and-validation-requirements",
  "principio-di-archimede-e-i-container-docker":
    "docker-containers-images-and-dependencies",
  "principio-di-inerzia-e-la-sindrome-del-non-toccare":
    "legacy-code-refactoring-without-regressions",
  "radiazione-di-fondo-e-il-cimitero-dei-console-log":
    "javascript-structured-logging-and-correlation",
  "gatto-di-schrodinger-e-allucinazioni-ia":
    "verify-ai-generated-code-and-suggestions",
  "principio-di-esclusione-di-pauli-e-i-conflitti-git":
    "git-merge-conflicts-preserve-both-changes",
  "legge-di-gravitazione-universale-e-i-legacy-code":
    "legacy-code-module-coupling",
  "non-puoi-negoziare-con-la-gravita-space-force-e-le-scadenze-assurde":
    "software-estimation-deadlines-scope-and-risk",
  "entropia-del-codice": "technical-debt-and-maintainability",
  "effetto-osservatore-fisica-quantistica-e-l-arte-del-debugging":
    "debugging-reproducible-bugs-and-race-conditions",
  "la-sindrome-del-funzionava-sulla-mia-macchina":
    "works-locally-fails-production-debug-deploy",
  "chi-ha-scritto-questa-roba": "documenting-code-to-reduce-technical-debt",
  "i-messaggi-di-errore-non-ti-stanno-giudicando":
    "reading-javascript-errors-stack-traces",
  "la-paperella-di-gomma-e-larte-di-sentirsi-stupidi":
    "rubber-duck-debugging-from-explanation-to-test",
  "quando-luniverso-ti-cambia-le-variabili-in-produzione":
    "environment-variables-build-runtime-production",
  "ruby-tutto-e-un-oggetto": "ruby-objects-methods-classes-and-identity",
  "ruby-blocchi-proc-lambda": "ruby-blocks-procs-and-lambdas",
  "ruby-enumerable-map-select-reduce": "ruby-enumerable-map-select-and-reduce",
  "ruby-symbol-vs-string": "ruby-symbol-vs-string-hash-keys",
  "ruby-hash-metodi-utili": "ruby-hash-fetch-dig-and-defaults",
  "ruby-metaprogrammazione-basi":
    "ruby-metaprogramming-define-method-method-missing",
  "ruby-pattern-matching": "ruby-pattern-matching-with-case-in",
  "ruby-duck-typing": "ruby-duck-typing-and-behavioural-contracts",
  "ruby-moduli-mixin": "ruby-modules-mixins-include-prepend-extend",
  "ruby-gestione-errori": "ruby-exception-handling-rescue-ensure",
  "ruby-creare-una-gem": "create-a-ruby-gem-packaging-and-versions",
  "ruby-rspec-testare": "ruby-rspec-tests-for-public-behaviour",
  "ruby-ractor-concorrenza": "ruby-ractors-parallelism-and-isolation",
  "ruby-ampersand-symbol-shorthand": "ruby-symbol-to-proc-ampersand-shorthand",
  "ruby-comparable-enumerable-custom": "ruby-comparable-spaceship-operator",
  "ruby-stringhe-gsub-regex": "ruby-string-gsub-regex-edge-cases",
  "ruby-benchmark-misurare": "ruby-benchmark-reproducible-measurements",
  "ruby-programmazione-funzionale": "ruby-then-curry-function-composition",
  "sonic-pi-drum-machine": "sonic-pi-drum-machine-kick-snare-hi-hat",
  "sonic-pi-randomizzazione-controllata":
    "sonic-pi-random-seed-reproducible-patterns",
  "sonic-pi-bassline-tb303": "sonic-pi-tb303-acid-bassline-cutoff",
  "web-audio-web-midi-api": "web-midi-api-note-messages-browser",
  "sonic-pi-slicing-campioni": "sonic-pi-sample-slicing-start-finish-stretch",
  "web-audio-analyser-visualizzare":
    "web-audio-analysernode-spectrum-and-waveform",
  "sonic-pi-generative-ring-tick": "sonic-pi-ring-tick-generative-sequences",
  "web-audio-audioworklet": "web-audio-audioworklet-custom-dsp",
  "sonic-pi-midi-controllo": "sonic-pi-midi-input-and-controller-mapping",
  "web-audio-tone-js": "tonejs-transport-and-sequence-scheduling",
  "sonic-pi-use-bpm-tempo": "sonic-pi-use-bpm-beats-and-subdivisions",
  "web-audio-audiobuffersource-campioni":
    "audiobuffersourcenode-decode-and-play-samples",
  "sonic-pi-registrare-esportare": "sonic-pi-record-and-export-wav",
  "web-audio-chrome-music-lab-lezioni":
    "chrome-music-lab-interactive-audio-design",
  "sonic-pi-ambient-pad-riverbero": "sonic-pi-ambient-pads-envelopes-reverb",
  "web-audio-generative-browser": "generative-music-with-web-audio",
  "sonic-pi-brano-techno-passo-passo": "sonic-pi-techno-track-arrangement",
  "web-audio-synth-polifonico": "web-audio-polyphonic-synth-voice-management",
  "sonic-pi-didattica-codice-e-musica": "learn-programming-with-sonic-pi",
  "sonic-pi-e-web-audio-stessa-idea":
    "sonic-pi-vs-web-audio-live-coding-browser",
} as const;

export const inventoryArticleRoutes = {
  it: `${blogRoots.it}/${inventoryArticleId}`,
  en: `${blogRoots.en}/${translatedArticleSlugs[inventoryArticleId]}`,
} as const;

const localizedRoutes = [
  ...Object.values(portfolioRoutes),
  blogRoots,
  ...Object.entries(translatedArticleSlugs).map(([it, en]) => ({
    it: `${blogRoots.it}/${it}`,
    en: `${blogRoots.en}/${en}`,
  })),
];
const alternatesByPath = new Map(
  localizedRoutes.flatMap((pair) =>
    siteLanguages.map((language) => [pair[language], pair] as const),
  ),
);

export function languageAlternates(path: string) {
  return alternatesByPath.get(path.replace(/\/+$/, "") || "/");
}

export function languageForPath(path: string): SiteLanguage {
  return languageAlternates(path) && (path === "/en" || path.startsWith("/en/"))
    ? "en"
    : "it";
}
