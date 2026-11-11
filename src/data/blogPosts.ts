import type { ReactNode } from "react";
import type { BlogCategoryId } from "../config/blog";
import type { BlogHubSlug } from "../config/blog-hubs";

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  updatedAt?: string;
  firstPublishedAt?: string;
  category: BlogCategoryId;
  hub: BlogHubSlug;
  content: string;
  icon?: ReactNode | string;
  excerpt?: string;
  tags?: string[];
  coverImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "fatica-metalli-carichi-ciclici",
    title: "Perché una staffa può cedere dopo migliaia di cicli",
    date: "2026-11-11",
    category: "ingegneria",
    hub: "scienza-passioni",
    icon: "🔩",
    excerpt: "La stessa staffa può affrontare 15.000 o 150.000 cicli all’anno. Come passare dal conto degli azionamenti a una prova di fatica.",
    tags: ["Fatica dei materiali", "Carichi ciclici", "Progettazione meccanica"],
    content: `
Una staffa metallica sostiene la leva di una macchina. A ogni azionamento si flette appena e torna nella posizione di partenza. Alla prima prova sembra tutto a posto. Dopo mesi di lavoro, vicino a un foro di fissaggio può comparire una cricca.

Per esplorare un caso vicino e capire le differenze, consulta [Fra sei mesi ricorderai perché hai scelto quella soluzione?](/blog/adr-decisioni-architetturali) e [Log, metriche e tracce: tre domande sullo stesso guasto](/blog/osservabilita-log-metriche-tracce). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Dove può partire una cricca

Si parla di **fatica** quando il danno si accumula sotto sollecitazioni ripetute. Può succedere anche se la tensione nominale resta sotto il limite di snervamento, oltre il quale il metallo comincia a deformarsi in modo permanente. La tensione nominale è calcolata senza includere i picchi locali. Al bordo di un foro o in un cambio brusco di sezione, la tensione effettiva può essere più alta.

Una cricca può partire in uno di quei punti e crescere con i cicli successivi. Quando raggiunge una dimensione critica, che dipende dal carico, dal materiale e dalla geometria, può propagarsi rapidamente fino alla rottura.

## Una staffa, due ritmi di lavoro

Immaginiamo un ciclo completo di carico e scarico per azionamento, per 250 giorni di lavoro all’anno. A 60 azionamenti al giorno la staffa affronta **15.000 cicli all’anno**. A 600 ne affronta **150.000**, a parità di carico per ciclo.

Una prova da 75.000 cicli rappresenterebbe cinque anni nel primo scenario e circa sei mesi nel secondo, assumendo che la macchina mantenga lo stesso ritmo di lavoro.

## Che cosa dice una curva S–N

Le **curve S–N** mettono in relazione l’ampiezza della tensione ciclica con il numero di cicli a rottura misurato sui provini in condizioni definite. L’ampiezza è metà della differenza fra la tensione massima e quella minima.

Un ciclo da 0 a 60 MPa e uno da 30 a 90 MPa hanno entrambi un’ampiezza di 30 MPa. Le tensioni medie sono rispettivamente 30 e 60 MPa. Per stimare la vita a fatica servono dati che tengano conto anche di quella differenza.

Conta anche come è stato realizzato il pezzo. In una serie di prove su lamiera di alluminio 2024-T3, un rapporto tecnico NASA ha documentato durate a fatica diverse per provini con fori lavorati in modi diversi.

## Come imposterei la prova

Sul banco monterei la staffa con i fissaggi previsti e riprodurrei il carico minimo e massimo per il numero di cicli richiesto. Stabilirei prima quando ispezionare il bordo dei fori e come registrare le cricche rilevabili.

Per confrontare due geometrie, per esempio due raggi di raccordo in un cambio di sezione, terrei uguali materiale, lavorazione, montaggio e ciclo di carico. A ogni ispezione annoterei il numero di cicli e il punto in cui è comparsa un’eventuale cricca.

**Fonti**

- [MIT OpenCourseWare — fatica dei materiali e curve S–N](https://ocw.mit.edu/courses/3-11-mechanics-of-materials-fall-1999/f678e01017186c53d45845ad93c07938_MIT3_11F99_fatigue.pdf)
- [NASA Engineering and Safety Center — fatica dei metalli](https://nescacademy.nasa.gov/video/eb24e80551684a74838ab675cf9fd6be1d)
- [NASA Technical Reports Server — effetto della lavorazione dei fori sulla fatica](https://ntrs.nasa.gov/citations/20040110776)
`,
  },
  {
    id: "giardini-pioggia-deflusso-tetti",
    title: "Dove va la pioggia del tetto? Un giardino può rallentarla",
    date: "2026-11-09",
    category: "ambiente",
    hub: "scienza-passioni",
    icon: "🌧️",
    excerpt: "Quindici millimetri di pioggia su un tetto da 80 metri quadrati fanno 1.200 litri. Un giardino della pioggia può trattenerne una parte e darle tempo di infiltrarsi.",
    tags: ["Acque meteoriche", "Drenaggio urbano", "Suolo"],
    content: `
Durante un acquazzone, la grondaia convoglia nel pluviale la pioggia che cade sul tetto. Se il pluviale sbocca su un cortile asfaltato, l’acqua continua a scorrere in superficie. Quando molti tetti e piazzali scaricano in fretta nella stessa rete, la portata può salire rapidamente. Un giardino della pioggia interviene lungo questo percorso.

Questo ragionamento si collega anche ai contenuti su [Il cassetto dei vecchi dispositivi è una filiera interrotta](/blog/raee-elettronica-fine-vita) e [La biodiversità non si riassume contando soltanto le api](/blog/biodiversita-impollinatori-reti). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Un’aiuola che riceve acqua

Un giardino della pioggia è una depressione poco profonda, piantumata, verso cui si convoglia il deflusso. La conca trattiene l’acqua e le dà tempo di infiltrarsi. Quanta ne passa nel terreno dipende dalle caratteristiche del suolo e da quanto è già bagnato. Alcune soluzioni prevedono anche un drenaggio sotto lo strato filtrante.

Conta anche il percorso d’ingresso. Se la pendenza del cortile porta l’acqua verso la strada, un’aiuola a fianco può restare quasi asciutta mentre la caditoia riceve tutto.

## Gli stessi 1.200 litri, in due tempi diversi

Immaginiamo un tetto con una superficie di 80 m² vista dall’alto. Un millimetro di pioggia su un metro quadrato equivale a un litro, quindi 15 mm su quel tetto fanno 1.200 litri.

Se tutta l’acqua raggiungesse il pluviale nello stesso intervallo in cui cade, in un’ora arriverebbero in media 20 litri al minuto. In dieci minuti ne arriverebbero 120 al minuto. Il volume è identico, ma nel secondo caso l’acqua può riempire la conca molto più in fretta. Sono portate medie di un esempio semplificato. Per dimensionare l’intervento servono anche le caratteristiche della pioggia locale e la capacità di infiltrazione del terreno.

## Seguire l’acqua fino all’uscita

Partirei da una mappa del cortile. Segnerei dove scarica il pluviale, in che direzione scorre l’acqua e dove potrebbe andare quando la conca è piena. In un progetto serve un troppo pieno che convogli l’eccesso verso un recapito previsto, lontano da ingressi e fondazioni. Dopo una pioggia controllerei che l’imbocco sia libero da foglie e annoterei quanto impiega la conca a svuotarsi. Se l’acqua le passa accanto, ricontrollerei imbocco e pendenza prima di allargarla.

**Fonti**

- [USGS — deflusso superficiale e ciclo dell’acqua](https://www.usgs.gov/water-science-school/science/surface-runoff-and-water-cycle)
- [US EPA — infrastrutture verdi e giardini della pioggia](https://www.epa.gov/green-infrastructure/types-green-infrastructure)
- [US EPA — collocazione e manutenzione dei giardini della pioggia](https://www.epa.gov/system/files/documents/2022-04/green-infrastructure-toolbox_raingardens.pdf)
- [Città metropolitana di Torino e Politecnico di Torino — scheda H.02 sui giardini della pioggia](https://www.cittametropolitana.torino.it/cms/risorse/ambiente/dwd/riqualificazioni-ambientali/pdf/abaco_compensazioni_CMTO_DIST_web.pdf)
`,
  },
  {
    id: "orion-controllo-termico-radiatori-vuoto",
    title: "Orion: nel vuoto il calore non se ne va con una ventola",
    date: "2026-11-06",
    category: "spazio",
    hub: "scienza-passioni",
    icon: "🌡️",
    excerpt: "Nel vuoto manca l’aria a cui cedere calore. Il controllo termico di Orion collega apparecchiature, circuiti fluidi e radiatori: un bilancio da chiudere anche quando cambia l’esposizione al Sole.",
    tags: ["Spazio", "Artemis", "Orion", "Controllo termico"],
    content: `
Una ventola raffredda un computer facendo passare aria sui dissipatori. Portare lo stesso schema all'esterno di una navicella non funziona: nel vuoto manca l'aria che trasporta via il calore. Anche lontano dalla Terra, però, elettronica e altri sistemi continuano a produrlo.

Questo ragionamento si collega anche ai contenuti su [Orion: il viaggio non finisce quando rivedi la Terra](/blog/orion-rientro-scudo-termico) e [Perché un lancio verso la Luna non può partire quando vuole](/blog/finestre-lancio-luna-orbite). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Orion, la capsula del programma Artemis, permette di vedere come si affronta questo vincolo senza confondere raffreddamento interno e scambio con l'ambiente esterno.

## Dal componente al radiatore

Dentro una cabina pressurizzata l'aria può circolare. Verso il vuoto esterno, invece, il veicolo cede calore per irraggiamento: le superfici emettono energia sotto forma di radiazione elettromagnetica.

Il modulo di servizio europeo di Orion raccoglie il calore attraverso piastre di raffreddamento e scambiatori. Un fluido lo trasporta ai radiatori esterni. ESA descrive due circuiti indipendenti, entrambi in funzione, e sei pannelli radianti. Il fluido resta nei circuiti: non viene scaricato nello spazio per raffreddare la capsula.

La pompa sposta il calore fra parti del veicolo; sono i radiatori a permetterne la cessione verso l'esterno. Aumentare soltanto la circolazione non garantisce che la superficie disponibile riesca a smaltire tutto.

## Un bilancio con numeri ipotetici

Immaginiamo un apparato che produca 600 W di calore e un radiatore che, nelle condizioni considerate, ne smaltisca 450. Trascuriamo Sole e altri scambi: restano 150 W che si accumulano nel sistema.

Se quello squilibrio restasse costante per dieci minuti, l'energia accumulata sarebbe 150 × 600 = 90.000 joule, cioè 90 kJ. Per ricavarne l'aumento di temperatura servirebbero anche capacità termica e distribuzione del calore. Questi numeri illustrano un bilancio semplificato; non sono prestazioni dichiarate di Orion.

## Il controllo deve funzionare anche al freddo

Un radiatore assorbe anche energia dall'ambiente. Esposizione al Sole, orientamento e proprietà delle superfici cambiano il bilancio. Nelle condizioni opposte può servire trattenere calore o aggiungerlo: Orion usa anche isolamento multistrato e riscaldatori elettrici.

Per valutare un sistema spaziale chiederei quindi dove nasce il calore, quale percorso segue e quanto può uscire nelle condizioni peggiori. Poi ripeterei il controllo sul caso freddo. La potenza elettrica disponibile dice cosa possiamo accendere; il bilancio termico aiuta a stabilire per quanto tempo e in quali condizioni possiamo tenerlo acceso.

**Fonti**

- [ESA — controllo della temperatura del modulo di servizio europeo](https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Orion/European_Service_Module_Temperature_control)
- [NASA — modulo di servizio europeo, controllo termico](https://www.nasa.gov/reference/european-service-module/)
- [NASA — principi e tecnologie del controllo termico](https://www.nasa.gov/smallsat-institute/sst-soa/thermal-control/)
`,
  },
  {
    id: "shopify-inventario-scritture-concorrenti",
    title: "Shopify, scorte e ordini: come evitare di sovrascrivere una vendita",
    date: "2026-11-04",
    category: "sviluppo-software",
    hub: "shopify-integrazioni",
    icon: "📦",
    excerpt: "Una vendita arriva mentre il gestionale aggiorna le scorte. Il confronto sulla quantità attesa evita di sovrascrivere la disponibilità con un dato vecchio.",
    tags: ["Shopify", "Inventario", "Concorrenza"],
    content: `
Un job legge 10 pezzi disponibili su Shopify. Il gestionale ha appena registrato una rettifica e vuole portare il totale a 12. Tra la lettura e la scrittura arriva però un ordine, che fa scendere la disponibilità a 9. Se il job scrive comunque 12, quella vendita sparisce dal conteggio delle disponibilità.

La stessa decisione può incidere sulla sincronizzazione dei dati: leggi [Shopify GraphQL: il limite è un budget, non un invito a insistere](/blog/shopify-graphql-budget-query) e [Shopify line item properties: campi personalizzati](/blog/shopify-custom-fields-app-vs-codice-nativo). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Scrivere solo se il valore di partenza coincide

Nella GraphQL Admin API di Shopify 2026-10, la mutazione \`inventorySetQuantities\` imposta un valore assoluto. Con \`changeFromQuantity\` si indica anche il valore atteso per lo stesso articolo, nella stessa sede e per lo stesso stato di inventario.

Nell'esempio ipotetico il job chiede di impostare la disponibilità a 12 a condizione che sia ancora 10. Shopify trova 9 e restituisce \`CHANGE_FROM_QUANTITY_STALE\`. Il confronto avviene al momento della scrittura. Una lettura separata, anche fatta subito prima, lascerebbe comunque un intervallo in cui può entrare un ordine.

## Gestire il conflitto senza cancellare la vendita

Al rifiuto rileggerei lo stato e cercherei di capire se l'ordine è già stato recepito dal gestionale. Se il 12 rappresentava una rettifica di due pezzi su una base di 10 e l'ordine da un pezzo deve ancora essere contabilizzato, il totale coerente è 11. Se il gestionale ha già recepito l'ordine, sottrarlo di nuovo sarebbe un secondo errore.

Shopify riserva l'impostazione assoluta ai sistemi che fanno da fonte autorevole per le quantità. Se l'integrazione deve registrare una variazione relativa, la mutazione da valutare è \`inventoryAdjustQuantities\`. Per \`inventorySetQuantities\` la versione 2026-10 richiede anche una chiave tramite \`@idempotent\`. Riutilizzerei la chiave se ripeto la stessa richiesta dopo un timeout, mentre un aggiornamento ricalcolato dopo un conflitto richiede una nuova chiave.

## Una prova prima del rilascio

In un negozio di test fermerei il job subito dopo la lettura, cambierei la disponibilità e lascerei ripartire la scrittura. Verificherei che il primo tentativo venga rifiutato, che la quantità intermedia resti intatta e che il job ricalcoli il totale solo dopo aver riconciliato i movimenti.

**Fonti**

- [Shopify — inventorySetQuantities, API 2026-10](https://shopify.dev/docs/api/admin-graphql/2026-10/mutations/inventorySetQuantities)
- [Shopify — richieste idempotenti](https://shopify.dev/docs/api/usage/idempotent-requests)
`,
  },
  {
    id: "osservabilita-log-metriche-tracce",
    title: "Log, metriche e tracce: tre domande sullo stesso guasto",
    date: "2026-11-02",
    firstPublishedAt: "2026-11-03",
    category: "ingegneria",
    hub: "scienza-passioni",
    icon: "🔭",
    excerpt: "Un ordine impiega troppo tempo ad arrivare al gestionale. La dashboard mostra un aumento della latenza, ma non spiega quale passaggio stia rallentando. Cercando nei log…",
    tags: ["Ingegneria", "Monitoraggio", "Backend"],
    content: `
Un ordine impiega troppo tempo ad arrivare al gestionale. La dashboard mostra un aumento della latenza, ma non spiega quale passaggio stia rallentando. Cercando nei log troviamo tanti messaggi corretti, senza un legame evidente fra loro.

Questo ragionamento si collega anche ai contenuti su [La media dice che va bene. Quel cinque per cento aspetta ancora](/blog/latenza-percentili-media-p99) e [Due server non bastano se dipendono dallo stesso interruttore](/blog/ridondanza-guasti-correlati). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Raccogliere più dati non risolve automaticamente questa difficoltà. Serve sapere quale domanda può affrontare ciascun segnale.

## La metrica mostra il cambiamento

Contatori, distribuzioni e altre misure aiutano a osservare volume, errori e tempi nel corso del servizio. Nell'esempio, la distribuzione della durata degli invii può mostrare quando il comportamento peggiora.

Non metterei però un identificativo di ordine come etichetta di ogni serie: una cardinalità elevata può rendere la raccolta costosa e poco gestibile. Il dettaglio della singola operazione richiede strumenti coerenti con quel livello.

## Il log descrive un evento

Un evento strutturato può registrare esito, fase e identificativo di correlazione. Campi stabili permettono di cercare e confrontare senza dover interpretare messaggi sempre diversi.

Registrare tutto il payload commerciale non è necessario per ogni diagnosi. Preferisco scegliere i dati utili, considerando anche accesso e conservazione, invece di copiare indiscriminatamente contenuti nei log.

## La traccia collega il percorso

Una traccia distribuita rappresenta l'operazione attraverso span, con relazioni e tempi. Può aiutare a distinguere attesa in coda, lavoro applicativo e chiamata esterna, quando la propagazione del contesto è implementata correttamente.

OpenTelemetry definisce questi segnali e strumenti per raccoglierli ed esportarli. Non è però il sistema che, da solo, decide la causa del guasto o risolve il problema.

Per l'ordine lento vorrei quindi partire dal cambiamento aggregato, raggiungere la singola operazione e ricostruirne i passaggi. Se gli identificativi non collegano quei livelli, tre strumenti separati possono lasciarmi con lo stesso dubbio iniziale. L'osservabilità utile è quella che accorcia una domanda concreta, non quella che riempie più schermate.

## Fonti

- [OpenTelemetry — segnali](https://opentelemetry.io/docs/concepts/signals/)
- [OpenTelemetry — metriche e cardinalità](https://opentelemetry.io/docs/concepts/signals/metrics/)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "raee-elettronica-fine-vita",
    title: "Il cassetto dei vecchi dispositivi è una filiera interrotta",
    date: "2026-10-30",
    firstPublishedAt: "2026-11-03",
    category: "ambiente",
    hub: "scienza-passioni",
    icon: "📱",
    excerpt: "Un vecchio telefono nel cassetto non è più in uso, ma non è nemmeno entrato in una filiera di recupero. Resta lì insieme a caricabatterie e dispositivi di cui magari non…",
    tags: ["Ambiente", "Elettronica", "Risorse"],
    content: `
Un vecchio telefono nel cassetto non è più in uso, ma non è nemmeno entrato in una filiera di recupero. Resta lì insieme a caricabatterie e dispositivi di cui magari non ricordiamo più il difetto.

Questo ragionamento si collega anche ai contenuti su [Acqua virtuale: il numero di litri non racconta tutta la storia](/blog/impronta-idrica-contesto) e [Spreco alimentare: prima del consiglio, guarda cosa finisce nel cestino](/blog/spreco-alimentare-misurare-prima). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

L'elettronica mette nello stesso oggetto materiali di valore, componenti complessi e informazioni personali. Decidere il suo percorso richiede di distinguere questi aspetti.

## Prima capire se ha ancora una funzione

Un dispositivo funzionante può avere possibilità di riuso o ricondizionamento, a seconda di condizioni, supporto software e bisogno reale. Se non è più utilizzabile, la raccolta appropriata dei rifiuti di apparecchiature elettriche ed elettroniche permette un trattamento specifico.

La Commissione europea evidenzia sia le risorse recuperabili sia le sostanze che rendono importante la gestione corretta dei RAEE. Non sono semplicemente oggetti di plastica con qualche vite.

## Non tutto il recupero è equivalente

Mantenere in uso un prodotto e recuperare alcuni dei suoi materiali sono operazioni diverse. Nel primo caso resta disponibile una funzione; nel secondo servono processi per separare e trattare ciò che compone l'oggetto.

La possibilità di riciclare non rende irrilevanti durata e riparabilità. Ogni nuovo ciclo produttivo continua ad avere fabbisogni e perdite.

## Chiudere anche il percorso dei dati

Prima di cedere un apparecchio considererei backup, disassociazione degli account e procedura di cancellazione prevista dal produttore per quel modello. Non improvviserei una sequenza universale: memoria, cifratura e gestione aziendale possono cambiare il percorso necessario.

Per la consegna come rifiuto seguirei il canale ufficiale locale e le istruzioni relative al dispositivo, senza smontaggi casuali.

La scelta utile è rendere esplicito lo stato: ancora usabile, riparabile oppure da conferire correttamente. Lasciare tutto nel cassetto evita una decisione oggi, ma non conserva automaticamente né la funzione del prodotto né il valore dei materiali per un impiego futuro.

## Fonti

- [Commissione europea — RAEE](https://environment.ec.europa.eu/topics/waste-and-recycling/waste-electrical-and-electronic-equipment-weee_en)
- [EEA — durata dell’elettronica](https://www.eea.europa.eu/en/analysis/publications/europes-consumption-in-a-circular-economy-the-benefits-of-longer-lasting-electronics)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "luna-massa-peso-inerzia",
    title: "Sulla Luna pesi meno. La tua massa non è diventata più piccola",
    date: "2026-10-28",
    firstPublishedAt: "2026-11-03",
    category: "spazio",
    hub: "scienza-passioni",
    icon: "⚖️",
    excerpt: "Un oggetto che sulla Terra è pesante diventa molto più facile da sostenere sulla Luna. È tentante concludere che sia anche facile da spostare, accelerare o fermare in…",
    tags: ["Spazio", "Fisica", "Luna"],
    content: `
Un oggetto che sulla Terra è pesante diventa molto più facile da sostenere sulla Luna. È tentante concludere che sia anche facile da spostare, accelerare o fermare in qualunque situazione. Ma stiamo mettendo insieme due effetti differenti.

Questo ragionamento si collega anche ai contenuti su [Radiazioni sulla Luna: la protezione entra nel bilancio di massa](/blog/radiazioni-luna-protezione-massa) e [Perché sulla Luna il paracadute non ti aiuta](/blog/allunaggio-paracadute-propulsione). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

La massa resta la stessa. Il peso cambia con il campo gravitazionale locale.

## La forza con cui vieni attirato

Nel modello elementare vicino alla superficie, il peso vale P = mg. La gravità lunare è circa un sesto di quella terrestre, quindi a parità di massa diminuisce la forza peso.

Un oggetto ipotetico da 12 kg mantiene una massa di 12 kg. Con una gravità di circa 1,62 m/s², il suo peso è circa 19,4 N, mentre usando 9,81 m/s² sulla Terra è circa 117,7 N. Il newton misura una forza; il chilogrammo una massa.

## Fermare il movimento è un'altra domanda

Per ottenere la stessa accelerazione di quella massa, nel modello F = ma serve la stessa forza risultante. Se il carico è già in movimento, la sua quantità di moto non scompare perché il peso è diminuito.

Questo non significa che ogni manovra sia identica nei due ambienti. Contatto con il suolo, attrito disponibile e interazione con attrezzature cambiano anch'essi. È proprio il motivo per cui il solo peso non descrive tutta l'operazione.

## Un esempio da leggere con le condizioni

Immagina un carrello: sostenerne il carico e arrestarne il moto sono requisiti diversi. La gravità ridotta può favorire il primo senza garantire automaticamente il secondo.

Non è un dimensionamento di un mezzo lunare, ma una distinzione utile prima di farlo. Quando leggiamo «sei volte più leggero», dobbiamo sapere quale grandezza è stata confrontata.

Separare massa, peso e condizioni di contatto evita una scorciatoia intuitiva che funziona nella conversazione e smette di funzionare appena dobbiamo progettare un movimento controllato.

## Fonti

- [NASA Glenn — gravità lunare](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/moon/)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "webhook-riconciliazione-sincronizzazione",
    title: "Webhook e job periodici: l’integrazione ha bisogno anche di un controllo",
    date: "2026-10-26",
    firstPublishedAt: "2026-11-03",
    category: "sviluppo-software",
    hub: "shopify-integrazioni",
    icon: "🔗",
    excerpt: "Un webhook avvisa che qualcosa è cambiato. È veloce e permette di evitare molte interrogazioni inutili. Ma cosa succede se il destinatario è indisponibile, un handler…",
    tags: ["Coding", "Shopify", "Integrazioni"],
    content: `
Un webhook avvisa che qualcosa è cambiato. È veloce e permette di evitare molte interrogazioni inutili. Ma cosa succede se il destinatario è indisponibile, un handler fallisce o un evento viene gestito male?

Le condizioni descritte qui sono collegate anche a [Lo stesso webhook due volte: come evitare due ordini](/blog/webhook-idempotenza-ordini) e [Shopify GraphQL: il limite è un budget, non un invito a insistere](/blog/shopify-graphql-budget-query). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Una sincronizzazione affidabile deve poter scoprire una differenza anche quando il percorso dell'evento non l'ha risolta.

## Due ruoli distinti

Shopify raccomanda di non dipendere esclusivamente dalla ricezione dei webhook e di predisporre job di riconciliazione. L'evento aiuta ad aggiornare rapidamente; il controllo periodico confronta lo stato e recupera ciò che manca.

Non considererei quindi «webhook oppure polling» una scelta assoluta. Prima definirei il ruolo di ciascun percorso e il ritardo che il servizio può accettare.

## Il cursore deve rappresentare lavoro completato

In uno schema ipotetico salvo un punto di avanzamento e interrogo gli oggetti aggiornati dalla scansione precedente. Se aggiorno il cursore prima di completare tutte le pagine, un arresto può lasciare dati saltati.

Una finestra di sovrapposizione può aiutare a rileggere il bordo temporale, purché l'elaborazione sia idempotente. Cancellazioni e risorse non più visibili possono richiedere strategie aggiuntive: non ogni differenza emerge da un filtro updated_at.

## Stabilire chi decide il valore

Se negozio ed ERP possono modificare lo stesso campo, «sincronizzare» non basta come specifica. Serve sapere quale sistema prevale, come si riconosce un aggiornamento più recente e come viene esposto un conflitto.

Gestirei anche eventi fuori ordine, evitando di applicare ciecamente una versione vecchia sopra una nuova. L'identificativo della consegna protegge dai duplicati, ma non definisce da solo l'ordine commerciale degli stati.

La verifica pratica è interrompere il percorso rapido, lasciare una modifica non allineata e controllare che la riconciliazione la ritrovi. Il risultato atteso è uno stato coerente e spiegabile, non soltanto una lista di chiamate terminate con successo.

## Fonti

- [Shopify — ordinamento e riconciliazione dei webhook](https://shopify.dev/docs/apps/build/webhooks)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "ridondanza-guasti-correlati",
    title: "Due server non bastano se dipendono dallo stesso interruttore",
    date: "2026-10-23",
    firstPublishedAt: "2026-11-03",
    category: "ingegneria",
    hub: "scienza-passioni",
    icon: "🛡️",
    excerpt: "Due istanze dell'applicazione sembrano più affidabili di una. Poi si scopre che usano lo stesso database, la stessa zona e la stessa configurazione sbagliata. Abbiamo…",
    tags: ["Ingegneria", "Affidabilità", "Architettura"],
    content: `
Due istanze dell'applicazione sembrano più affidabili di una. Poi si scopre che usano lo stesso database, la stessa zona e la stessa configurazione sbagliata. Abbiamo duplicato il processo, ma non tutte le condizioni che gli permettono di funzionare.

Questo ragionamento si collega anche ai contenuti su [Fra sei mesi ricorderai perché hai scelto quella soluzione?](/blog/adr-decisioni-architetturali) e [Log, metriche e tracce: tre domande sullo stesso guasto](/blog/osservabilita-log-metriche-tracce). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

La ridondanza ha senso rispetto ai guasti che vogliamo tollerare. Senza definire quel perimetro, «abbiamo due copie» è un'informazione incompleta.

## L'indipendenza è un'ipotesi forte

In un modello didattico, due componenti con probabilità di guasto dell'1% nello stesso intervallo avrebbero una probabilità di guasto simultaneo dello 0,01% se gli eventi fossero indipendenti.

Quel prodotto non è valido quando condividono una causa capace di fermarli entrambi. Un'interruzione comune o un aggiornamento difettoso possono rendere poco significativa l'ipotesi di indipendenza.

## Disegnare i domini di guasto

Le indicazioni Google Cloud distinguono risorse, zone e regioni come livelli utili a ragionare sui domini di guasto. La distribuzione delle copie va scelta in funzione dei requisiti e dei costi, non per ottenere il diagramma con più scatole.

Anche identità, DNS, segreti e procedure di rilascio possono essere dipendenze condivise. Non sono automaticamente risolte spostando una macchina.

## Provare il passaggio, non soltanto la copia

In un ambiente di prova controllato interromperei una delle istanze e osserverei se le richieste raggiungono davvero l'altra, quanto dura il recupero e cosa accade alle operazioni in corso.

Poi verificherei il componente comune che resta più critico. Un failover mai esercitato è una capacità ipotizzata, non una prestazione dimostrata.

Non sceglierei la massima ridondanza per qualunque sito. Definirei prima cosa può fermarsi, per quanto tempo e con quale perdita accettabile di dati. Solo dopo deciderei dove una seconda copia compra un beneficio reale e dove sta semplicemente replicando la stessa fragilità.

## Fonti

- [Google Cloud — ridondanza e disponibilità](https://docs.cloud.google.com/architecture/framework/reliability/build-highly-available-systems?hl=en)
- [Google Cloud — domini di guasto](https://docs.cloud.google.com/architecture/infra-reliability-guide/building-blocks)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "biodiversita-impollinatori-reti",
    title: "La biodiversità non si riassume contando soltanto le api",
    date: "2026-10-21",
    firstPublishedAt: "2026-11-03",
    category: "ambiente",
    hub: "scienza-passioni",
    icon: "🐝",
    excerpt: "Quando si parla di impollinazione, il simbolo è quasi sempre un'ape. È comprensibile, ma può far sparire dal ragionamento gli altri impollinatori e le condizioni che…",
    tags: ["Ambiente", "Biodiversità", "Ecosistemi"],
    content: `
Quando si parla di impollinazione, il simbolo è quasi sempre un'ape. È comprensibile, ma può far sparire dal ragionamento gli altri impollinatori e le condizioni che permettono loro di vivere.

Per esplorare un caso vicino e capire le differenze, consulta [Il cassetto dei vecchi dispositivi è una filiera interrotta](/blog/raee-elettronica-fine-vita) e [La rete elettrica deve funzionare anche quando il sole cambia](/blog/rete-elettrica-flessibilita-domanda). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Proteggere una funzione ecologica richiede di guardare anche la rete di relazioni che la rende possibile.

## Una funzione distribuita

L'impollinazione animale coinvolge gruppi diversi e contribuisce alla riproduzione di molte piante spontanee e coltivate. Le specie non svolgono tutte lo stesso ruolo nello stesso luogo e nello stesso periodo.

L'EEA richiama l'importanza degli impollinatori selvatici, oltre a quelli gestiti, e i rischi associati alla loro perdita. Ridurre la questione al numero di alveari può quindi trascurare una parte sostanziale del sistema.

## Il fiore è solo una delle risorse

Per sostenere una popolazione non basta che ci siano fiori durante un singolo evento di piantumazione. Contano continuità delle risorse, siti adatti alle diverse fasi di vita e qualità degli habitat.

Un'area verde va quindi letta anche nel tempo e in relazione alle zone circostanti. Una fotografia esteticamente riuscita non dimostra da sola che sostenga una comunità biologica diversificata.

## Osservare senza inventare una scorciatoia

In un progetto locale chiederei quali specie si vogliono favorire, quali condizioni mancano e come valutare il risultato. Scelta delle piante e gestione dovrebbero essere coerenti con il contesto ecologico, evitando ricette universali.

L'analogia ingegneristica che trovo utile è quella delle dipendenze: vedere la funzione in uscita non significa conoscere tutto ciò che la sostiene. Però un ecosistema non è una macchina con componenti liberamente sostituibili; l'analogia non deve cancellarne la complessità.

Per parlare seriamente di biodiversità servono quindi più domande e meno simboli isolati. Quali organismi ci sono? Quali relazioni possono mantenere? Quali pressioni li stanno riducendo? È da quelle risposte che può partire una tutela concreta.

## Fonti

- [EEA — impollinatori selvatici e habitat](https://www.eea.europa.eu/en/analysis/publications/protecting-and-restoring-europes-wild-pollinators-and-their-habitats)
- [FAO — impollinazione e biodiversità](https://www.fao.org/agriculture/crops/core-themes/theme/biodiversity/pollination/en/)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "navigazione-spaziale-posizione-orientamento",
    title: "Sapere dove sei e sapere dove punti sono due problemi diversi",
    date: "2026-10-19",
    firstPublishedAt: "2026-11-03",
    category: "spazio",
    hub: "scienza-passioni",
    icon: "🧭",
    excerpt: "Immagina di conoscere perfettamente il punto in cui ti trovi, ma di non sapere in quale direzione sia orientata la tua camera. Oppure il contrario: sai dove punti, ma non…",
    tags: ["Spazio", "Navigazione", "Sensori"],
    content: `
Immagina di conoscere perfettamente il punto in cui ti trovi, ma di non sapere in quale direzione sia orientata la tua camera. Oppure il contrario: sai dove punti, ma non quanto sei lontano dalla destinazione.

Un approfondimento dello stesso percorso si trova in [Lagrange L2: un buon posto dove stare non è un parcheggio immobile](/blog/punti-lagrange-equilibrio-instabile) e [Sulla Luna pesi meno. La tua massa non è diventata più piccola](/blog/luna-massa-peso-inerzia). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Nella navigazione spaziale posizione e orientamento sono informazioni collegate, ma non intercambiabili.

## Le stelle come riferimento di orientamento

Uno star tracker confronta le stelle osservate con un catalogo e contribuisce a determinare l'assetto del veicolo. La documentazione di Orion descrive questo ruolo insieme a quello di altri sensori.

Riconoscere una configurazione di stelle non significa ottenere automaticamente tutte le coordinate e la velocità della capsula. Una misura deve essere letta per ciò che osserva realmente.

## Combinare strumenti diversi

Le misure radio effettuate attraverso i collegamenti con Terra contribuiscono alla stima del moto. La navigazione ottica usa immagini di corpi come Terra e Luna, insieme alla geometria prevista e ai modelli.

Queste informazioni hanno incertezze e condizioni di disponibilità. Un sistema di navigazione le combina nel tempo, invece di trattare un singolo sensore come una risposta perfetta a tutte le domande.

## Un'immagine non contiene tutta la distanza

Da una fotografia posso ricavare direzioni e caratteristiche apparenti, ma il significato geometrico dipende dal modello e da ciò che conosco già. Una superficie osservata più grande nell'immagine può suggerire un avvicinamento; per quantificarlo servono calibrazione e ipotesi coerenti.

È un esempio concettuale, non un algoritmo di navigazione utilizzabile per una missione.

La lezione che porto nei sistemi informatici è chiedere sempre quale variabile sia effettivamente osservata. Un indicatore di connessione non dimostra che il dato sia aggiornato; una misura valida non dimostra da sola che l'intero stato sia noto.

Prima di aggiungere sensori o dashboard, bisogna quindi distinguere ciò che misuriamo, ciò che stimiamo e ciò che stiamo soltanto assumendo.

## Fonti

- [NASA — avionica e software di Orion](https://www.nasa.gov/reference/avionics-and-software/)
- [NASA — strumenti di navigazione di Orion](https://www.nasa.gov/missions/lasers-stars-and-sensors-will-guide-nasas-orion-spacecraft/)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "react-prerender-html-metadati",
    title: "React e HTML già pronto: cosa cambia quando apri un link diretto",
    date: "2026-10-16",
    firstPublishedAt: "2026-11-03",
    category: "sviluppo-software",
    hub: "react-frontend",
    icon: "📄",
    excerpt: "Un sito React può funzionare bene dopo la navigazione dalla home e comportarsi diversamente quando qualcuno apre direttamente il link di un articolo. Se il server…",
    tags: ["Coding", "React", "SEO"],
    content: `
Un sito React può funzionare bene dopo la navigazione dalla home e comportarsi diversamente quando qualcuno apre direttamente il link di un articolo. Se il server restituisce sempre la stessa pagina vuota, contenuto e metadati dipendono dall'esecuzione del JavaScript.

Nel frontend lo stesso problema si collega a [React: il totale del carrello deve davvero stare nello state?](/blog/react-stato-derivato-carrello) e [React state: evitare dipendenze globali inutili](/blog/entanglement-quantistico-e-i-disastri-del-global-state). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Per pagine editoriali note al momento della build, il prerender è una possibilità concreta: produrre prima l'HTML di ogni rotta.

## Separare contenuto e interazione

Il testo dell'articolo, il titolo e i metadati possono essere già presenti nella risposta iniziale. Il codice client aggiunge poi navigazione e interazioni previste dall'applicazione.

Non significa che il sito smetta di essere React. Cambia il momento in cui viene prodotto il contenuto iniziale e ciò che il server può consegnare senza attendere il browser.

## Una rotta deve avere una risposta coerente

Nel caso di questo portfolio, la build genera pagine HTML per le rotte e per i singoli articoli. Verificare che il file esista è soltanto un passaggio: il servizio di hosting deve associare l'URL corretto a quel contenuto.

Un rewrite globale alla home può nascondere gli errori e servire una pagina apparentemente valida per indirizzi inesistenti. Per un contenuto mancante voglio una risposta 404 reale e una pagina comprensibile, non soltanto un messaggio disegnato dentro una risposta 200.

## Leggere l'HTML che arriva

Controllerei un link diretto senza navigazione precedente, il titolo, il canonical e i dati strutturati pertinenti. Per una pagina inesistente controllerei anche lo status della risposta.

Google documenta le possibilità e i limiti del trattamento dei siti JavaScript. Il prerender non garantisce un posizionamento: riduce una dipendenza nella consegna del contenuto e permette controlli più espliciti.

La prova utile è fuori dal percorso più comodo dello sviluppatore: aprire una rotta da zero e osservare cosa riceve davvero chi arriva da un link condiviso.

## Fonti

- [Google Search Central — siti JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Sorgente del sito — build e prerender](https://github.com/AlessandroGuelpa/Sito-Personale-React/blob/main/scripts/prerender.mjs)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "adr-decisioni-architetturali",
    title: "Fra sei mesi ricorderai perché hai scelto quella soluzione?",
    date: "2026-10-14",
    firstPublishedAt: "2026-11-03",
    category: "ingegneria",
    hub: "scienza-passioni",
    icon: "📝",
    excerpt: "Apri un progetto e trovi una scelta che sembra complicata: una coda, un formato intermedio o una dipendenza insolita. La prima reazione è eliminarla. Poi scopri che serviva…",
    tags: ["Ingegneria", "Architettura", "Documentazione"],
    content: `
Apri un progetto e trovi una scelta che sembra complicata: una coda, un formato intermedio o una dipendenza insolita. La prima reazione è eliminarla. Poi scopri che serviva a gestire un vincolo che il codice, da solo, non racconta più.

Per esplorare un caso vicino e capire le differenze, consulta [Due server non bastano se dipendono dallo stesso interruttore](/blog/ridondanza-guasti-correlati) e [Se il JavaScript arriva tardi, la pagina sa ancora cosa fare?](/blog/progressive-enhancement-funzione-base). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

La documentazione utile non descrive soltanto cosa esiste. Conserva anche il motivo delle decisioni che sarebbe costoso dover ricostruire.

## Un documento per una scelta

Un Architecture Decision Record registra una decisione significativa e il suo contesto. Non deve diventare un saggio né duplicare tutta la documentazione del sistema.

Per una scelta ipotetica fra chiamata sincrona e job asincrono annoterei il tempo massimo accettabile per l'utente, le caratteristiche del servizio esterno, le alternative considerate e la decisione presa. Poi scriverei le conseguenze, comprese quelle scomode: stato di avanzamento, retry e operazioni di recupero.

## Le condizioni fanno parte della motivazione

«Abbiamo scelto la coda perché scala» dice poco. «La chiamata può durare oltre il tempo di attesa previsto e possiamo mostrare uno stato pendente» permette invece di valutare se il ragionamento sia ancora valido.

Non serve prevedere ogni cambiamento futuro. Serve distinguere le proprietà osservate dalle ipotesi su cui stiamo costruendo.

## Aggiornare senza cancellare il percorso

Se una nuova decisione sostituisce la precedente, conserverei il collegamento e uno stato esplicito. Le indicazioni AWS sugli ADR suggeriscono proprio di mantenere la storia delle decisioni superate.

Questo non rende intoccabile una scelta vecchia. Al contrario, permette di discuterla su basi più precise: è cambiato il requisito, il costo operativo o il comportamento del servizio?

Io scriverei un ADR quando il prossimo manutentore potrebbe altrimenti scambiare una soluzione intenzionale per un errore casuale. Poche righe, vicine al codice e legate a una decisione reale, possono evitare discussioni ripetute e modifiche che reintroducono un problema già risolto.

## Fonti

- [AWS — decisioni architetturali](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/)
- [AWS — gestione degli ADR superati](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/best-practices.html)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "rete-elettrica-flessibilita-domanda",
    title: "La rete elettrica deve funzionare anche quando il sole cambia",
    date: "2026-10-12",
    firstPublishedAt: "2026-11-03",
    category: "ambiente",
    hub: "scienza-passioni",
    icon: "🔋",
    excerpt: "Produrre abbastanza energia nell'arco di un anno non dimostra che un sistema elettrico possa soddisfare la domanda in ogni momento e in ogni luogo. La disponibilità nel…",
    tags: ["Ambiente", "Energia", "Infrastrutture"],
    content: `
Produrre abbastanza energia nell'arco di un anno non dimostra che un sistema elettrico possa soddisfare la domanda in ogni momento e in ogni luogo. La disponibilità nel tempo e la capacità di trasporto fanno parte del problema.

Per esplorare un caso vicino e capire le differenze, consulta [kW e kWh: la differenza che cambia i conti](/blog/kw-kwh-potenza-energia) e [Un kWh è sempre un kWh. Le emissioni associate cambiano](/blog/elettricita-intensita-carbonica). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

È per questo che, parlando di transizione energetica, mi interessa anche la flessibilità del sistema.

## Il totale nasconde il profilo

Due impianti con la stessa produzione annuale possono avere profili temporali molto diversi. Allo stesso modo, due consumi annuali uguali possono concentrarsi in ore differenti e creare esigenze diverse sulla rete.

Il rapporto Electricity 2026 dell'IEA mette la flessibilità fra gli elementi necessari per integrare un mix di generazione e domanda in evoluzione. Non esiste un unico intervento che sostituisca automaticamente tutti gli altri.

## L'accumulo ha almeno due dimensioni

Per una batteria contano sia la potenza, espressa per esempio in MW, sia l'energia immagazzinabile, in MWh. Un sistema ipotetico da 1 MW e 4 MWh può sostenere quella potenza per circa quattro ore nel modello ideale, prima di considerare perdite e limiti operativi.

Raddoppiare la potenza non equivale a raddoppiare l'energia disponibile. Sono dimensionamenti che rispondono a esigenze differenti.

## Anche la domanda può adattarsi

Alcune attività possono essere spostate o modulate in risposta alle condizioni del sistema. Questo non significa chiedere indiscriminatamente alle persone di rinunciare a servizi necessari: significa distinguere carichi e vincoli, e usare flessibilità dove esiste.

Reti, accumulo, generazione e gestione della domanda contribuiscono su scale temporali diverse. Valutarli richiede di specificare il problema: picco breve, congestione locale o squilibrio prolungato.

Quando vedo una proposta energetica cerco quindi il profilo, non soltanto il totale. «Quanta energia?» è la prima domanda. «Quando arriva, dove serve e per quanto tempo?» rende il confronto finalmente operativo.

## Fonti

- [IEA — flessibilità nel sistema elettrico](https://www.iea.org/reports/electricity-2026/flexibility)
- [IEA — glossario di potenza ed energia](https://www.iea.org/glossary)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "deep-space-network-collegamento",
    title: "Le antenne a Terra fanno parte della missione spaziale",
    date: "2026-10-09",
    firstPublishedAt: "2026-11-03",
    category: "spazio",
    hub: "scienza-passioni",
    icon: "📡",
    excerpt: "Nelle immagini di una missione vediamo il veicolo, i pannelli e gli strumenti. Una parte essenziale del sistema resta però sulla Terra: antenne, pianificazione dei…",
    tags: ["Spazio", "Comunicazioni", "Infrastrutture"],
    content: `
Nelle immagini di una missione vediamo il veicolo, i pannelli e gli strumenti. Una parte essenziale del sistema resta però sulla Terra: antenne, pianificazione dei collegamenti e persone che gestiscono il flusso dei dati.

Questo ragionamento si collega anche ai contenuti su [Parlare con la Luna: quel secondo che il software non può togliere](/blog/luna-latenza-comunicazioni) e [Orion: il viaggio non finisce quando rivedi la Terra](/blog/orion-rientro-scudo-termico). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Il Deep Space Network della NASA è un esempio di infrastruttura che rende possibile lavorare con mezzi molto lontani.

## Il collegamento è un sistema completo

Il DSN comprende grandi antenne in complessi distribuiti sulla Terra. Questa distribuzione aiuta a seguire le missioni mentre il pianeta ruota. Le capacità disponibili vanno comunque organizzate fra veicoli, attività e opportunità di contatto.

Non basta che un trasmettitore sia acceso. Geometria, potenza del segnale, caratteristiche delle antenne e condizioni del collegamento influenzano ciò che può essere ricevuto.

## Dati scientifici e misure di navigazione

La rete non serve soltanto a consegnare fotografie. Le misure dei segnali radio contribuiscono a stimare moto e posizione del veicolo, insieme agli altri strumenti e ai modelli usati dalla missione.

È importante distinguere una misura da una posizione esatta conosciuta senza incertezza. La navigazione combina osservazioni e calcolo, aggiornando la stima quando arrivano nuove informazioni.

## Una risorsa da pianificare

Immaginiamo uno strumento che produce più dati di quanti il collegamento riesca a trasferire durante una sessione. Servono memoria a bordo, priorità e una strategia di invio. Aumentare la produzione scientifica non aumenta automaticamente la capacità di scaricarla.

Questo esempio è un ragionamento sui vincoli, non una descrizione di una particolare pianificazione del DSN.

Quando valuto un'architettura, cerco anche le risorse lontane dall'oggetto principale. Un veicolo eccellente può dipendere da servizi condivisi che nelle illustrazioni occupano appena una linea tratteggiata. Quella linea, nella realtà, ha capacità, tempi e condizioni d'uso che devono entrare nel progetto fin dall'inizio.

## Fonti

- [NASA — Deep Space Network](https://www.nasa.gov/communicating-with-missions/dsn/)
- [NASA — navigazione spaziale](https://science.nasa.gov/learn/basics-of-space-flight/chapter13-1/)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "shopify-graphql-budget-query",
    title: "Shopify GraphQL: il limite è un budget, non un invito a insistere",
    date: "2026-10-07",
    firstPublishedAt: "2026-11-03",
    category: "sviluppo-software",
    hub: "shopify-integrazioni",
    icon: "🛍️",
    excerpt: "Un'integrazione può usare poche richieste e consumare comunque molto budget, se ogni query chiede una grande quantità di dati collegati. Contare soltanto le chiamate non…",
    tags: ["Coding", "Shopify", "API"],
    content: `
Un'integrazione può usare poche richieste e consumare comunque molto budget, se ogni query chiede una grande quantità di dati collegati. Contare soltanto le chiamate non basta per comprendere i limiti della GraphQL Admin API di Shopify.

Per verificare le conseguenze di questa scelta su un'integrazione, puoi confrontare [Shopify, scorte e ordini: come evitare di sovrascrivere una vendita](/blog/shopify-inventario-scritture-concorrenti) e [Shopify line item properties: campi personalizzati](/blog/shopify-custom-fields-app-vs-codice-nativo). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Il modello considera il costo delle query e la combinazione di applicazione e negozio. Anche due worker indipendenti possono quindi competere per la stessa disponibilità.

## Leggere il costo nella risposta

Le risposte possono includere informazioni sotto extensions.cost, fra cui costo richiesto, costo effettivo e throttleStatus. Campi come currentlyAvailable e restoreRate aiutano a capire la capacità residua e il suo recupero.

Non fisserei nel codice un valore universale copiato da un esempio: limiti e condizioni dipendono dal contesto e possono cambiare. Il client deve usare la documentazione della versione adottata e gestire le risposte reali.

## Ridurre il lavoro richiesto

Prima di aumentare i tentativi guarderei i campi selezionati, le connessioni annidate e le dimensioni delle pagine. Se sto esportando soltanto SKU e identificativi, chiedere anche dati che non userò peggiora il lavoro senza migliorare il risultato.

Per grandi esportazioni valuterei le funzionalità bulk disponibili per l'operazione, leggendo i loro limiti specifici. Non sono un sostituto automatico di qualunque query interattiva.

## Coordinare chi chiama

Un esempio ipotetico: due processi vedono una capacità residua sufficiente e partono insieme. Le loro decisioni locali non rappresentano più il carico complessivo. Una coda per negozio o un controllo condiviso della concorrenza può rendere il ritmo più prevedibile.

Gestirei inoltre gli errori GraphQL nel corpo della risposta, senza considerare il solo status HTTP come prova di successo.

Una sincronizzazione ben progettata usa il budget per portare avanti lavoro utile e lascia uno stato recuperabile quando deve attendere. Aggiungere altri retry, da solo, non aumenta la capacità concessa dall'API.

## Fonti

- [Shopify — limiti GraphQL Admin API](https://shopify.dev/docs/apps/build/apis/graphql-admin/rate-limits)
- [Shopify — riferimento GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql/latest)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "progressive-enhancement-funzione-base",
    title: "Se il JavaScript arriva tardi, la pagina sa ancora cosa fare?",
    date: "2026-10-05",
    firstPublishedAt: "2026-11-03",
    category: "ingegneria",
    hub: "scienza-passioni",
    icon: "🧱",
    excerpt: "Una pagina può caricare la struttura e restare comunque inutilizzabile: il pulsante aspetta il bundle, il menu non si apre, il collegamento esiste soltanto dentro un gestore…",
    tags: ["Ingegneria", "Web", "Accessibilità"],
    content: `
Una pagina può caricare la struttura e restare comunque inutilizzabile: il pulsante aspetta il bundle, il menu non si apre, il collegamento esiste soltanto dentro un gestore di click. Il problema non è sempre un errore permanente. A volte basta una connessione lenta o uno script esterno che non arriva.

Un approfondimento dello stesso percorso si trova in [La media dice che va bene. Quel cinque per cento aspetta ancora](/blog/latenza-percentili-media-p99) e [Fra sei mesi ricorderai perché hai scelto quella soluzione?](/blog/adr-decisioni-architetturali). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Il progressive enhancement propone di costruire una funzione di base e aggiungere miglioramenti quando le capacità necessarie sono disponibili.

## Partire dal comportamento

Un collegamento a un documento può essere un normale elemento a con un href reale. JavaScript può poi aggiungere anteprima, misure o transizioni, ma la destinazione non deve essere inventata soltanto dopo un click.

È un esempio piccolo, e proprio per questo utile. La semantica HTML offre già comportamenti come apertura in una nuova scheda e navigazione da tastiera, senza doverli ricostruire uno per uno.

## La funzione di base va progettata

Non significa promettere che qualunque applicazione complessa funzioni integralmente senza JavaScript. Significa decidere quali funzioni debbano restare disponibili quando un miglioramento non può partire.

Per una ricerca potrebbe essere un form con un endpoint server realmente implementato. Per un contenuto informativo, HTML già leggibile. Scrivere solo l'attributo action senza predisporre il servizio non crea un'alternativa funzionante.

## Provare una dipendenza in meno

Durante la verifica rallenterei il caricamento del bundle e bloccherei un'integrazione non essenziale. Guarderei quali attività restano possibili e quali messaggi spiegano i limiti.

La distinzione che mi interessa è fra funzione necessaria e arricchimento. Se un widget social manca, il collegamento al profilo può ancora servire lo scopo; se manca l'unico percorso per inviare un modulo, il servizio è interrotto.

Progettare questa base rende più chiaro anche il sistema completo. Prima di aggiungere interazioni, costringe a rispondere a una domanda concreta: cosa deve riuscire a fare la persona che arriva qui?

## Fonti

- [MDN — progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "lca-confini-unita-funzionale",
    title: "«Più sostenibile» rispetto a cosa? Il confine cambia il confronto",
    date: "2026-10-02",
    firstPublishedAt: "2026-11-03",
    category: "ambiente",
    hub: "scienza-passioni",
    icon: "🔄",
    excerpt: "Due prodotti vengono confrontati usando un solo numero ambientale. Uno sembra migliore, ma il primo dato comprende produzione, trasporto e fine vita; il secondo soltanto…",
    tags: ["Ambiente", "Ciclo di vita", "Misure"],
    content: `
Due prodotti vengono confrontati usando un solo numero ambientale. Uno sembra migliore, ma il primo dato comprende produzione, trasporto e fine vita; il secondo soltanto l'uso. Il confronto ha una forma numerica e una base incoerente.

Per esplorare un caso vicino e capire le differenze, consulta [Spreco alimentare: prima del consiglio, guarda cosa finisce nel cestino](/blog/spreco-alimentare-misurare-prima) e [Un kWh è sempre un kWh. Le emissioni associate cambiano](/blog/elettricita-intensita-carbonica). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Una valutazione del ciclo di vita comincia prima del calcolo: dalla definizione di ciò che stiamo confrontando.

## La funzione prima dell'oggetto

Confrontare un contenitore usa e getta con uno riutilizzabile richiede di scegliere una funzione comune, per esempio un certo numero di utilizzi con prestazioni definite. Il singolo oggetto non è sempre un'unità di confronto sufficiente.

Numero di riusi, lavaggio, trasporti e rotture diventano ipotesi del modello. Non esiste un punto di pareggio universale ricavabile dal solo materiale.

## Disegnare il perimetro

Il confine del sistema stabilisce quali processi entrano nello studio. Estrazione delle materie prime, produzione, distribuzione, uso e fine vita possono essere inclusi con livelli diversi di dettaglio secondo l'obiettivo e il metodo adottato.

Il Joint Research Centre sviluppa metodi per la valutazione dell'impronta ambientale lungo il ciclo di vita. Il valore di questo approccio è rendere visibili effetti che una lettura limitata a una sola fase potrebbe spostare altrove.

## Non fermarsi all'indicatore preferito

Il cambiamento climatico è un impatto importante, ma non l'unico. Uso di risorse, acqua e altre categorie possono raccontare conseguenze differenti. Ridurre un indicatore non dimostra automaticamente un miglioramento su tutti gli altri.

In un esempio didattico farei variare almeno l'ipotesi più incerta, come il numero effettivo di riusi. Se la conclusione cambia facilmente, lo scriverei insieme al risultato.

Quando leggo «più sostenibile», cerco quindi funzione, confine e condizioni. Senza queste informazioni posso apprezzare l'intenzione, ma non verificare il confronto. Un numero ambientale diventa utile quando permette di capire anche cosa non sta contando.

## Fonti

- [JRC — Environmental Footprint](https://eplca.jrc.ec.europa.eu/EnvironmentalFootprint.html)
- [Commissione europea — confine del sistema](https://knowledge-for-policy.ec.europa.eu/node/9373_lv)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "finestre-lancio-luna-orbite",
    title: "Perché un lancio verso la Luna non può partire quando vuole",
    date: "2026-09-30",
    firstPublishedAt: "2026-11-03",
    category: "spazio",
    hub: "scienza-passioni",
    icon: "🕒",
    excerpt: "Terra, Luna e veicolo si muovono. Una finestra di lancio nasce dall’intersezione di vincoli, non dal solo conto alla rovescia.",
    tags: ["Spazio", "Artemis", "Orbite"],
    content: `
Il razzo è pronto sulla rampa. Perché aspettare un'ora precisa, invece di lanciare appena tutto è in ordine? Perché la destinazione si muove, la Terra ruota e la traiettoria deve rispettare più condizioni contemporaneamente.

Un approfondimento dello stesso percorso si trova in [Perché sulla Luna il paracadute non ti aiuta](/blog/allunaggio-paracadute-propulsione) e [Lagrange L2: un buon posto dove stare non è un parcheggio immobile](/blog/punti-lagrange-equilibrio-instabile). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Il conto alla rovescia organizza le operazioni. La finestra di lancio descrive quando una certa missione può soddisfare i suoi vincoli.

## Mirare a dove sarà la destinazione

Un trasferimento non punta semplicemente alla posizione che la Luna occupa al momento della partenza. Il moto del veicolo deve essere compatibile con quello futuro del sistema.

Nella spiegazione delle opportunità di lancio di Artemis II, l'Agenzia spaziale canadese richiama l'allineamento necessario fra Terra, Luna e Orion e la sequenza delle manovre previste. Qui uso quel caso per spiegare il concetto, senza attribuirgli una nuova data di missione.

## Una finestra contiene più vincoli

Geometria orbitale, capacità del lanciatore, illuminazione e condizioni richieste per il ritorno possono contribuire alla selezione dei periodi utilizzabili. Quali fattori siano decisivi dipende dalla missione specifica.

Anche dentro una giornata adatta può esserci soltanto un intervallo limitato. Se un problema impedisce la partenza in quell'intervallo, non è detto che basti spostare di qualche minuto tutto il programma.

## Ritardare non significa rifare la stessa prova

Il sistema continua a muoversi mentre aspettiamo. Una nuova opportunità può richiedere parametri diversi o una diversa sequenza operativa, secondo il progetto.

È un punto che mi piace ricordare quando una diretta presenta il rinvio come un semplice contrattempo logistico. Le operazioni si svolgono dentro un problema dinamico: il tempo è una variabile della soluzione.

Per capire un annuncio guarderei quindi cosa identifica quella finestra e a quali condizioni si riferisce. La disponibilità del razzo è necessaria, ma non rende automaticamente disponibile anche la traiettoria.

## Fonti

- [Agenzia spaziale canadese — come funzionano le finestre lunari](https://www.asc-csa.gc.ca/eng/news/articles/2026/2026-01-09-artemis-ii-launch-opportunities-announced.asp)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "react-stato-derivato-carrello",
    title: "React: il totale del carrello deve davvero stare nello state?",
    date: "2026-09-28",
    firstPublishedAt: "2026-11-03",
    category: "sviluppo-software",
    hub: "react-frontend",
    icon: "⚛️",
    excerpt: "Un componente conserva le righe del carrello e anche il totale. Ogni modifica alle righe deve aggiornare entrambi. Poi arriva uno sconto, un cambio quantità o una rimozione…",
    tags: ["Coding", "React", "Frontend"],
    content: `
Un componente conserva le righe del carrello e anche il totale. Ogni modifica alle righe deve aggiornare entrambi. Poi arriva uno sconto, un cambio quantità o una rimozione e uno dei percorsi dimentica il secondo aggiornamento.

Nel frontend lo stesso problema si collega a [React e HTML già pronto: cosa cambia quando apri un link diretto](/blog/react-prerender-html-metadati) e [Optimistic UI: gestire latenza e rollback](/blog/dilatazione-temporale-interstellar-e-optimistic-ui). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Abbiamo creato due rappresentazioni della stessa informazione e adesso dobbiamo mantenerle d'accordo.

## Una fonte di verità sufficiente

Se il totale dipende soltanto dai dati già disponibili, posso ricavarlo durante il render. Esempio dimostrativo, con prezzi rappresentati in centesimi interi:

\`\`\`javascript
function CartTotal({ items }) {
  const totalCents = items.reduce(
    (sum, item) => sum + item.priceCents * item.quantity,
    0
  );

  const formatted = new Intl.NumberFormat('it-IT', {
    style: 'currency', currency: 'EUR'
  }).format(totalCents / 100);

  return <output>{formatted}</output>;
}
\`\`\`

Qui ipotizziamo quantità intere, prezzi validati e una sola valuta. Non è un motore completo per imposte, arrotondamenti e sconti.

## Un Effect aggiungerebbe un passaggio

Calcolare il totale in un Effect e salvarlo in un altro state può introdurre un render con il valore precedente seguito da un aggiornamento. La documentazione React consiglia di evitare Effects per trasformazioni dei dati che possono avvenire durante il render.

Se il calcolo fosse davvero costoso, valuterei una memoizzazione dopo averlo misurato. useMemo rimane un'ottimizzazione: la correttezza non dovrebbe dipendere dal fatto che il calcolo venga eseguito una sola volta.

## Il confine commerciale resta sul server

Il totale visualizzato è utile per l'interfaccia. Non autorizza il browser a decidere l'importo di un pagamento: il sistema che conclude l'ordine deve verificare prezzi e regole applicabili.

La domanda che mi faccio quando aggiungo state è quindi: sto memorizzando una scelta indipendente oppure una copia di qualcosa che posso già derivare? Eliminare la copia riduce i percorsi che possono divergere e rende il componente più semplice da ragionare.

## Fonti

- [React — quando un Effect non serve](https://react.dev/learn/you-might-not-need-an-effect)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "latenza-percentili-media-p99",
    title: "La media dice che va bene. Quel cinque per cento aspetta ancora",
    date: "2026-09-25",
    firstPublishedAt: "2026-11-03",
    category: "ingegneria",
    hub: "scienza-passioni",
    icon: "📊",
    excerpt: "Un servizio ha un tempo medio di risposta accettabile, ma alcune persone segnalano attese molto lunghe. Le due cose possono essere vere contemporaneamente. Una media…",
    tags: ["Ingegneria", "Prestazioni", "Monitoraggio"],
    content: `
Un servizio ha un tempo medio di risposta accettabile, ma alcune persone segnalano attese molto lunghe. Le due cose possono essere vere contemporaneamente. Una media riassume la distribuzione senza mostrarne la coda.

Questo ragionamento si collega anche ai contenuti su [La coda cresce? Conta anche il tempo che il lavoro passa dentro](/blog/legge-little-code-tempi-attesa) e [Log, metriche e tracce: tre domande sullo stesso guasto](/blog/osservabilita-log-metriche-tracce). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Per capire l'esperienza reale guarderei anche percentili, numero di richieste ed errori.

## Cosa dice un percentile

Il cinquantesimo percentile, o mediana, separa la metà inferiore da quella superiore dei valori osservati. Il p95 indica una soglia sotto cui ricade circa il 95% delle osservazioni, secondo il metodo di stima utilizzato.

Il restante 5% non è necessariamente trascurabile. Su un volume ipotetico di centomila richieste, corrisponde a circa cinquemila esperienze nella coda superiore. Il percentile da solo non dice quanto siano lente quelle richieste.

## Il numero richiede un perimetro

Un p99 calcolato su pochissime richieste può essere instabile o poco informativo. Cambia inoltre il significato se mescolo endpoint veloci e lenti, successi ed errori, o periodi di traffico differenti.

Non farei la media dei p95 di più server aspettandomi di ottenere il p95 complessivo. Per aggregare correttamente servono dati o distribuzioni compatibili, non un'operazione aritmetica su riassunti già calcolati.

## Dalla dashboard a una domanda

Separerei le rotte principali e chiederei: quali richieste finiscono nella coda? Dipendono da input grandi, cache fredde o servizi esterni? Gli errori rapidi stanno abbassando una media che sembra migliorare?

Il materiale SRE di Google insiste proprio sul valore delle distribuzioni e dei segnali legati all'esperienza del servizio.

Non sceglierei un percentile soltanto perché suona professionale. Lo collegherei a una decisione: quale comportamento stiamo cercando di garantire e quale parte degli utenti stiamo osservando? Una metrica diventa utile quando permette di individuare il problema che la media stava nascondendo.

## Fonti

- [Google SRE — obiettivi del servizio e distribuzioni](https://sre.google/sre-book/service-level-objectives/)
- [Google SRE — monitoraggio](https://sre.google/workbook/monitoring/)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "alberi-citta-calore-progetto",
    title: "Un albero in città è anche un’infrastruttura termica",
    date: "2026-09-23",
    firstPublishedAt: "2026-11-03",
    category: "ambiente",
    hub: "scienza-passioni",
    icon: "🌳",
    excerpt: "Ombra ed evapotraspirazione influenzano il microclima. Il beneficio dipende anche da spazio, acqua e manutenzione.",
    tags: ["Ambiente", "Città", "Clima"],
    content: `
In estate bastano pochi metri per passare da un marciapiede esposto a uno spazio molto più vivibile sotto una chioma. Non è soltanto una sensazione estetica: l'albero modifica le condizioni di esposizione e il bilancio energetico dell'ambiente vicino.

Un approfondimento dello stesso percorso si trova in [La rete elettrica deve funzionare anche quando il sole cambia](/blog/rete-elettrica-flessibilita-domanda) e [«Più sostenibile» rispetto a cosa? Il confine cambia il confronto](/blog/lca-confini-unita-funzionale). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Per questo considero il verde urbano una parte del progetto della città, non il riempitivo da aggiungere dove avanza spazio.

## L'ombra agisce prima del condizionatore

Una chioma può intercettare parte della radiazione solare che raggiungerebbe persone e superfici. L'evapotraspirazione contribuisce inoltre agli scambi di energia e acqua. Sono meccanismi diversi, con effetti che dipendono da specie, dimensioni e condizioni locali.

La temperatura dell'aria, quella delle superfici e l'esposizione radiativa delle persone non sono intercambiabili. Un solo numero misurato in un punto può non descrivere bene il comfort di chi cammina.

## Piantare è soltanto un passaggio

Per ottenere un beneficio nel tempo servono condizioni perché l'albero cresca: volume di suolo, disponibilità idrica, spazio per le radici e manutenzione coerente. Un progetto che conta soltanto quante piante vengono installate rischia di perdere la funzione che dovrebbe ottenere.

Guarderei anche la distribuzione. Ombreggiare un percorso pedonale usato ogni giorno può rispondere a un bisogno diverso rispetto a concentrare tutto il verde in un'area lontana dalle persone esposte.

## Misurare la funzione

In un confronto ipotetico annoterei orario, condizioni meteo e posizione delle misure, distinguendo aree ombreggiate ed esposte. Valuterei inoltre chi può accedere a quegli spazi e quando.

L'EEA include verde e soluzioni basate sulla natura fra gli strumenti per affrontare il raffrescamento urbano insieme alle caratteristiche degli edifici.

La domanda progettuale è quindi più concreta di «quanti alberi?»: quale ombra, per quali persone, in quali ore e con quali risorse per mantenerla? È così che un intervento decorativo può diventare un servizio durevole.

## Fonti

- [EEA — raffrescamento sostenibile degli edifici e contesto urbano](https://www.eea.europa.eu/en/analysis/publications/cooling-buildings-sustainably-in-europe-exploring-the-links-between-climate-change-mitigation-and-adaptation-and-their-social-impacts)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "allunaggio-paracadute-propulsione",
    title: "Perché sulla Luna il paracadute non ti aiuta",
    date: "2026-09-21",
    firstPublishedAt: "2026-11-03",
    category: "spazio",
    hub: "scienza-passioni",
    icon: "🪂",
    excerpt: "Un paracadute funziona interagendo con un fluido. Aumenta la superficie che offre resistenza al moto nell'aria, trasformando una caduta rapida in una discesa più lenta nelle…",
    tags: ["Spazio", "Luna", "Propulsione"],
    content: `
Un paracadute funziona interagendo con un fluido. Aumenta la superficie che offre resistenza al moto nell'aria, trasformando una caduta rapida in una discesa più lenta nelle condizioni previste dal progetto.

Un approfondimento dello stesso percorso si trova in [Radiazioni sulla Luna: la protezione entra nel bilancio di massa](/blog/radiazioni-luna-protezione-massa) e [Sulla Luna pesi meno. La tua massa non è diventata più piccola](/blog/luna-massa-peso-inerzia). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Sulla Luna manca un'atmosfera abbastanza densa da svolgere questo lavoro. È uno di quei dettagli ambientali che cambiano completamente l'architettura di una missione.

## Un'esosfera non è un cuscino d'aria

La Luna possiede un'esosfera estremamente tenue. Questa precisazione è importante scientificamente, ma non rende praticabile una normale frenata con ali o paracadute come sulla Terra.

ESA descrive quindi la propulsione come uno strumento necessario per frenare la discesa lunare. Il veicolo deve modificare attivamente la propria velocità, invece di affidare il rallentamento a un'atmosfera densa.

## Non si parte da una caduta verticale

Un mezzo in orbita ha anche una grande componente di velocità orizzontale. Per raggiungere il suolo in modo controllato occorre gestire il moto complessivo, non soltanto diminuire la distanza dalla superficie.

La scelta della traiettoria influenza il propellente necessario, il tempo disponibile e le condizioni con cui il lander osserva il terreno. Il punto di contatto finale arriva al termine di questa sequenza, non al posto della sequenza.

## L'ambiente entra nelle prove

In un progetto concettuale chiederei come si verificano navigazione, controllo della spinta e riconoscimento degli ostacoli. Poi guarderei cosa succede se una misura arriva in ritardo o il terreno differisce da quello previsto.

Non sono istruzioni per dimensionare un lander: sono domande sui requisiti da dimostrare. La soluzione reale dipende da massa, sensori, motori e profilo della missione.

È il motivo per cui copiare una soluzione terrestre può fallire anche quando il principio sembra semplice. Prima di scegliere il componente, bisogna verificare se nell'ambiente di destinazione esiste ancora il meccanismo fisico che lo fa funzionare.

## Fonti

- [ESA — discesa e risalita lunari](https://lunarexploration.esa.int/explore/technology/226?ia=291)
- [NASA — esosfera lunare](https://science.nasa.gov/moon/lunar-atmosphere/)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "rails-find-each-batch-memoria",
    title: "Rails: elaborare un catalogo senza caricarlo tutto in memoria",
    date: "2026-09-18",
    firstPublishedAt: "2026-11-03",
    category: "sviluppo-software",
    hub: "rails-backend",
    icon: "📦",
    excerpt: "Un ciclo che funziona con cento prodotti può diventare un problema quando il catalogo cresce. Il punto non è soltanto quanto tempo impiega: se istanzia tutti i record…",
    tags: ["Coding", "Rails", "Prestazioni"],
    content: `
Un ciclo che funziona con cento prodotti può diventare un problema quando il catalogo cresce. Il punto non è soltanto quanto tempo impiega: se istanzia tutti i record insieme, può consumare molta memoria prima ancora di completare il primo lavoro utile.

Per valutare l'effetto di questa scelta sul backend, considera anche [Rails: validates uniqueness non ferma due richieste contemporanee](/blog/rails-unicita-database-concorrenza) e [Rails MVC: Model, View e Controller](/blog/rails-mvc-in-tre-minuti). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Active Record mette a disposizione metodi di elaborazione a lotti proprio per evitare questo caricamento indiscriminato.

## Un lotto alla volta

Con find_each Rails recupera gruppi di record e li consegna al blocco uno per volta. Nell'esempio seguente Product e CatalogExporter sono componenti dimostrativi:

\`\`\`ruby
Product.where(active: true).find_each(batch_size: 500) do |product|
  CatalogExporter.call(product)
end
\`\`\`

Il valore 500 non è una raccomandazione universale. Va scelto osservando dimensione dei record, memoria, query e costo dell'elaborazione. Ridurre il lotto non risolve automaticamente un exporter che conserva tutti gli oggetti in un array.

## Attenzione a ordine e modifiche

La scansione a lotti usa un cursore e ha regole specifiche sull'ordinamento, che dipendono anche dalla versione di Rails. Non darei per scontato che un order applicato alla relation venga seguito come in una normale each.

Se altri processi modificano i dati durante la scansione, serve inoltre definire cosa debba rappresentare l'esportazione. Non è automaticamente una fotografia immutabile dell'intero catalogo.

## Memoria e recuperabilità sono problemi diversi

Se il processo si interrompe all'ultimo lotto, voglio sapere cosa accade al riavvio. Un identificativo di avanzamento, un filtro temporale coerente o un'operazione idempotente possono essere necessari secondo il flusso.

Misurerei anche record completati, errori e durata per lotto, evitando di registrare contenuti sensibili senza motivo.

find_each risolve un problema preciso: non istanziare tutto il risultato in una volta. Un'importazione affidabile nasce quando a quel meccanismo aggiungiamo confini chiari, gestione degli errori e una strategia di ripartenza verificata.

## Fonti

- [Rails — elaborazione a lotti](https://api.rubyonrails.org/classes/ActiveRecord/Batches.html)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "tolleranze-catena-dimensionale",
    title: "Tre pezzi corretti possono non entrare nello spazio previsto",
    date: "2026-09-16",
    firstPublishedAt: "2026-11-03",
    category: "ingegneria",
    hub: "scienza-passioni",
    icon: "🧩",
    excerpt: "Tre distanziali devono occupare insieme uno spazio di 30 millimetri. Ciascuno è indicato come 10 ± 0,2 mm. Il fornitore consegna pezzi conformi al disegno, eppure il…",
    tags: ["Ingegneria", "Misure", "Progettazione"],
    content: `
Tre distanziali devono occupare insieme uno spazio di 30 millimetri. Ciascuno è indicato come 10 ± 0,2 mm. Il fornitore consegna pezzi conformi al disegno, eppure il montaggio può non comportarsi come suggeriscono i valori nominali.

Per esplorare un caso vicino e capire le differenze, consulta [Se il progetto usa già il 100%, il margine è finito](/blog/margine-progetto-budget-capacita) e [Quattro decimali non rendono una misura più affidabile](/blog/misure-incertezza-cifre-decimali). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Il motivo è che il sistema vede la combinazione delle dimensioni, non tre controlli di conformità separati.

## Fare il conto ai limiti

Nel nostro esempio, se tutti e tre i pezzi sono al limite superiore, la somma è 30,6 mm. Se sono al limite inferiore, è 29,4 mm. Il valore nominale di 30 mm è soltanto il centro dell'intervallo ottenuto con questa combinazione peggiore.

Il calcolo è intenzionalmente semplice: una catena lineare di tre lunghezze. Un assieme reale può includere giochi, deformazioni, geometrie e condizioni termiche che richiedono un modello più completo.

## Non sommare concetti diversi

Una tolleranza definisce un intervallo ammesso per una caratteristica. L'incertezza di misura riguarda invece ciò che possiamo attribuire al risultato di una misurazione. Non sono la stessa quantità, anche se entrambe influenzano come giudichiamo il pezzo.

Anche un approccio statistico richiede ipotesi dichiarate: distribuzioni, indipendenza ed eventuali correlazioni. Non sostituirei il caso peggiore con una formula più favorevole soltanto perché produce un numero piccolo.

## Progettare il collegamento

Prima di stringere tutte le tolleranze, chiederei quale dimensione funzionale deve essere garantita. Potrebbe essere più sensato introdurre una regolazione, cambiare il riferimento o ridurre il numero di elementi della catena.

Nelle integrazioni software ritrovo un principio simile: componenti singolarmente corretti possono essere incompatibili quando si incontrano. L'analogia riguarda l'interfaccia, non il metodo di calcolo.

Il controllo utile si fa quindi anche sull'assieme. Il fatto che ogni parte rispetti la propria specifica è necessario, ma non dimostra da solo che il risultato finale soddisfi il requisito.

## Fonti

- [NIST — incertezza e terminologia delle misure](https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-appendix-d1-terminology)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "riciclo-raccolta-qualita-materiale",
    title: "Metterlo nel contenitore giusto è l’inizio del riciclo",
    date: "2026-09-14",
    firstPublishedAt: "2026-11-03",
    category: "ambiente",
    hub: "scienza-passioni",
    icon: "♻️",
    excerpt: "Un imballaggio finisce nella raccolta differenziata e sparisce dalla nostra vista. È facile pensare che il suo percorso sia concluso. In realtà è appena entrato in una…",
    tags: ["Ambiente", "Materiali", "Riciclo"],
    content: `
Un imballaggio finisce nella raccolta differenziata e sparisce dalla nostra vista. È facile pensare che il suo percorso sia concluso. In realtà è appena entrato in una catena che deve selezionarlo, trattarlo e trovare un impiego per il materiale recuperato.

Questo ragionamento si collega anche ai contenuti su [Un albero in città è anche un’infrastruttura termica](/blog/alberi-citta-calore-progetto) e [Acqua virtuale: il numero di litri non racconta tutta la storia](/blog/impronta-idrica-contesto). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Separare questi passaggi aiuta a capire perché «raccolto» e «riciclato» non siano la stessa cosa.

## Un processo con requisiti in ingresso

Un impianto riceve materiali con proprietà diverse. Oggetti estranei, combinazioni difficili da separare e contaminazioni possono ostacolare la selezione o ridurre la qualità dell'uscita.

È un problema che riconosco nelle integrazioni software: se due sistemi interpretano diversamente lo stesso campo, il fatto che il file sia arrivato non prova che il dato sia utilizzabile. L'analogia riguarda la qualità dell'ingresso, non l'equivalenza dei processi.

## Il simbolo non decide tutto

La riciclabilità di un materiale in certe condizioni non garantisce che ogni servizio locale accetti ogni oggetto fatto con quel materiale. Forma, composizione e filiera disponibile contano.

Per la pratica quotidiana userei le indicazioni aggiornate del gestore locale, senza dedurre la destinazione dal solo aspetto. Le regole operative di un territorio non si ricavano automaticamente da una guida generale internazionale.

## Guardare anche ciò che viene dopo

Per valutare un sistema mi interessano quantità raccolte, scarti di selezione e materiale effettivamente recuperato. Aggiungerei la qualità e la possibilità di sostituire materie prime in un nuovo utilizzo.

Il riciclo rimane utile, ma non cancella automaticamente le risorse impiegate per produrre l'oggetto. Prevenzione dei rifiuti, riuso e durata dei prodotti intervengono in punti diversi della catena.

Il contenitore giusto è una nostra responsabilità concreta. Per giudicare il risultato ambientale, però, dobbiamo seguire il materiale anche oltre il momento in cui il camion lo porta via.

## Fonti

- [EPA — fasi e benefici del riciclo](https://www.epa.gov/recycle/recycling-basics-and-benefits)
- [EEA — economia circolare](https://www.eea.europa.eu/en/topics/in-depth/circular-economy)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "punti-lagrange-equilibrio-instabile",
    title: "Lagrange L2: un buon posto dove stare non è un parcheggio immobile",
    date: "2026-09-11",
    firstPublishedAt: "2026-11-03",
    category: "spazio",
    hub: "scienza-passioni",
    icon: "🛰️",
    excerpt: "I punti di Lagrange dipendono da una coppia di corpi. Intorno a L1 e L2 servono orbite e correzioni.",
    tags: ["Spazio", "Orbite"],
    content: `
Quando si sente parlare di un telescopio «a L2», viene naturale immaginare un oggetto fermo in un punto speciale. L'immagine è comoda, ma nasconde sia il movimento del sistema sia il lavoro necessario a mantenere la missione nella regione prevista.

Un approfondimento dello stesso percorso si trova in [Perché un lancio verso la Luna non può partire quando vuole](/blog/finestre-lancio-luna-orbite) e [Sapere dove sei e sapere dove punti sono due problemi diversi](/blog/navigazione-spaziale-posizione-orientamento). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Prima domanda: L2 di quale coppia di corpi?

## Il riferimento conta

Nel modello del problema ristretto dei tre corpi, due masse principali orbitano e un terzo corpo molto meno massiccio non ne modifica significativamente il moto. I punti di Lagrange sono posizioni di equilibrio nel riferimento che ruota con le due masse.

Il sistema Sole–Terra e quello Terra–Luna hanno quindi punti distinti. Dire soltanto «L2» senza specificare il contesto può creare un equivoco enorme sulle distanze.

## Equilibrio non significa stabilità

L1, L2 e L3 sono instabili nel modello: una piccola perturbazione può far crescere lo scostamento. Le missioni nelle loro vicinanze impiegano correzioni di mantenimento e possono seguire orbite attorno alla regione del punto, anziché occupare una posizione immobile.

L4 e L5 hanno caratteristiche di stabilità differenti, sotto condizioni legate anche al rapporto fra le masse principali. Non estenderei quindi la stessa descrizione a tutti e cinque i punti.

## Perché scegliere quella regione

Webb opera vicino al punto L2 del sistema Sole–Terra. La geometria aiuta a mantenere Sole e Terra dalla stessa parte dello scudo termico e a organizzare le osservazioni, ma non elimina controllo e vincoli operativi.

La conseguenza che trovo interessante è questa: in ingegneria un ambiente favorevole non equivale a un ambiente che si gestisce da solo. Una regione orbitale può ridurre alcuni costi e contemporaneamente imporre attività di mantenimento.

Quando vedo un disegno con un satellite appoggiato su un puntino, lo leggo quindi come una mappa concettuale. Per capire il funzionamento reale servono riferimento, traiettoria e modalità di controllo.

## Fonti

- [NASA — punti di Lagrange](https://science.nasa.gov/solar-system/resources/faq/what-are-lagrange-points/)
- [NASA — orbita di Webb](https://science.nasa.gov/mission/webb/orbit/)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "http-etag-cache-rivalidazione",
    title: "ETag: chiedere se è cambiato prima di scaricarlo di nuovo",
    date: "2026-09-09",
    firstPublishedAt: "2026-11-03",
    category: "sviluppo-software",
    hub: "react-frontend",
    icon: "🏷️",
    excerpt: "Un browser possiede già una risorsa, ma non sa se la copia sia ancora utilizzabile. Deve scaricarla tutta ogni volta? Non necessariamente. Può chiedere al server se la…",
    tags: ["Coding", "HTTP", "Prestazioni"],
    content: `
Un browser possiede già una risorsa, ma non sa se la copia sia ancora utilizzabile. Deve scaricarla tutta ogni volta? Non necessariamente. Può chiedere al server se la rappresentazione che conosce è cambiata.

Un confronto utile per questa soluzione è quello con [React: il totale del carrello deve davvero stare nello state?](/blog/react-stato-derivato-carrello) e [React e HTML già pronto: cosa cambia quando apri un link diretto](/blog/react-prerender-html-metadati). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

ETag è uno dei meccanismi che rendono possibile questo dialogo.

## Una versione da confrontare

Il server associa alla rappresentazione un identificativo e lo invia nell'header ETag. Quando serve rivalidare, il client può restituirlo con If-None-Match.

\`\`\`http
GET /catalogo.json HTTP/1.1
Host: example.com
If-None-Match: "catalogo-v7"
\`\`\`

Se la rappresentazione coincide e le condizioni della richiesta sono soddisfatte, il server può rispondere 304 Not Modified, senza ritrasmettere il corpo. Il client usa allora la copia memorizzata secondo le regole della cache.

## no-cache non vuol dire non conservare

Cache-Control: no-cache permette la memorizzazione ma richiede una rivalidazione prima del riuso nei casi disciplinati dalla cache HTTP. no-store indica invece di non memorizzare la risposta.

La differenza è pratica. Un documento che deve essere controllato prima del riuso può beneficiare di un 304; vietarne la memorizzazione elimina quella possibilità. La navigazione nella cronologia e la back/forward cache hanno però regole proprie, quindi non tratterei questi header come un controllo universale dello stato del browser.

## Scegliere in base alla risorsa

Per un asset statico con nome contenente un hash del contenuto, una durata lunga può essere appropriata: quando cambia il file cambia anche l'URL. Per HTML aggiornabile mantenendo lo stesso indirizzo serve una politica diversa.

Nelle risposte personalizzate bisogna valutare inoltre chi può conservarle e quali varianti esistono. Copiare un header da un tutorial senza guardare autenticazione e cache condivise può creare problemi.

Il vantaggio di ETag è preciso: evitare di ritrasmettere un corpo invariato quando una rivalidazione è sufficiente. Non serve promettergli il compito di risolvere ogni problema di freschezza.

## Fonti

- [MDN — ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/ETag)
- [MDN — cache HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "campionamento-aliasing-segnali",
    title: "Un campione al secondo può farti vedere un segnale che non esiste",
    date: "2026-09-07",
    firstPublishedAt: "2026-11-03",
    category: "ingegneria",
    hub: "scienza-passioni",
    icon: "〰️",
    excerpt: "Nei video una ruota può sembrare ferma o girare al contrario. Non è cambiata la meccanica: stiamo osservando il movimento attraverso una sequenza di immagini discrete. Fra…",
    tags: ["Ingegneria", "Segnali", "Audio"],
    content: `
Nei video una ruota può sembrare ferma o girare al contrario. Non è cambiata la meccanica: stiamo osservando il movimento attraverso una sequenza di immagini discrete. Fra un fotogramma e il successivo perdiamo informazioni.

Un approfondimento dello stesso percorso si trova in [Tre pezzi corretti possono non entrare nello spazio previsto](/blog/tolleranze-catena-dimensionale) e [La coda cresce? Conta anche il tempo che il lavoro passa dentro](/blog/legge-little-code-tempi-attesa). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

È un modo intuitivo per avvicinarsi all'aliasing, un problema che riguarda audio, immagini e acquisizione di segnali.

## Punti identici, storie differenti

Se misuro una sinusoide soltanto in certi istanti, frequenze diverse possono produrre gli stessi campioni. Una volta raccolti quei punti, non posso scegliere la storia corretta senza ipotesi aggiuntive sul segnale.

Il teorema del campionamento dice che un segnale limitato in banda può essere ricostruito idealmente campionando a una frequenza superiore al doppio della sua frequenza massima. Le condizioni «limitato in banda» e «idealmente» fanno parte dell'enunciato.

## Il filtro viene prima della perdita

Nell'acquisizione reale serve gestire le componenti oltre la banda utile prima del campionamento, con un filtraggio anti-alias appropriato. Tentare di separarle dopo che si sono sovrapposte in frequenza non recupera automaticamente l'informazione originale.

È uno dei motivi per cui non basta scegliere una frequenza di campionamento sulla base del solo numero più alto che vogliamo mostrare a schermo.

## Un esempio per chi misura software

Immaginiamo un processo che alterna brevi picchi di attività e pause. Una lettura molto rada della CPU può cadere sempre nelle pause e suggerire un carico basso. Non sto applicando senza condizioni il teorema a una dashboard: il punto comune è che il metodo di osservazione limita ciò che possiamo concludere.

Prima di fidarmi di un grafico cerco quindi frequenza di acquisizione, aggregazione e filtri. La linea può essere pulita anche quando l'osservazione è insufficiente. Un dato ben disegnato non diventa, per questo, una rappresentazione completa del fenomeno.

## Fonti

- [MIT — campionamento e aliasing](https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/resources/lecture-16-sampling/)
- [MIT — ricostruzione e aliasing](https://visionbook.mit.edu/sampling_and_aliasing.html)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "impronta-idrica-contesto",
    title: "Acqua virtuale: il numero di litri non racconta tutta la storia",
    date: "2026-09-04",
    firstPublishedAt: "2026-11-03",
    category: "ambiente",
    hub: "scienza-passioni",
    icon: "💧",
    excerpt: "Origine dell’acqua, luogo e periodo cambiano il significato dell’impronta idrica. Una classifica senza contesto può ingannare.",
    tags: ["Ambiente", "Acqua", "Risorse"],
    content: `
Un prodotto può richiedere acqua molto prima di arrivare nelle nostre mani: coltivazione delle materie prime, trasformazione e altri passaggi della filiera. Il concetto di acqua virtuale aiuta a rendere visibile questa parte del consumo.

Per esplorare un caso vicino e capire le differenze, consulta [Spreco alimentare: prima del consiglio, guarda cosa finisce nel cestino](/blog/spreco-alimentare-misurare-prima) e [Il cassetto dei vecchi dispositivi è una filiera interrotta](/blog/raee-elettronica-fine-vita). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Ma appena compare una classifica in litri mi viene da chiedere: quale acqua, dove e in quale periodo?

## Dietro il totale ci sono componenti diverse

Nella metodologia dell'impronta idrica si distinguono comunemente acqua verde, blu e grigia. La verde riguarda l'acqua piovana utilizzata nel processo produttivo; la blu le risorse superficiali e sotterranee consumate. La componente grigia è un indicatore del volume teorico necessario ad assimilare un carico inquinante entro criteri definiti.

Quest'ultima non va letta come una quantità fisicamente prelevata e versata nel prodotto. Le definizioni contano prima ancora del confronto numerico.

## Un litro non ha sempre lo stesso contesto

Un consumo in un bacino con disponibilità abbondante e uno durante una fase di scarsità non hanno necessariamente la stessa conseguenza ambientale. Provenienza e stagionalità aggiungono informazioni che il totale aggregato può nascondere.

Per questo non userei due numeri raccolti con metodi diversi per proclamare un vincitore assoluto fra prodotti. Controllerei unità, confini della filiera e luogo cui si riferiscono i dati.

## Rendere utile la misura

In un confronto ipotetico fra forniture dello stesso materiale, chiederei almeno la ripartizione delle componenti, il bacino interessato e l'anno dei dati. Poi valuterei la relazione con la disponibilità locale.

Il punto non è rendere impossibile ogni scelta. È evitare una semplificazione che perde proprio l'informazione necessaria per decidere.

L'impronta idrica è interessante quando ci porta a guardare oltre il rubinetto. Diventa molto meno utile se sostituisce una filiera complessa con un numero isolato da condividere senza leggerne la definizione.

## Fonti

- [Arpae — impronta idrica e sue componenti](https://www.arpae.it/it/temi-ambientali/sostenibilita/strumenti-di-sostenibilita/altri-strumenti/water-footprint)
- [USGS — scambi e impatti dell’acqua virtuale](https://www.usgs.gov/publications/trends-and-environmental-impacts-virtual-water-trade)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "radiazioni-luna-protezione-massa",
    title: "Radiazioni sulla Luna: la protezione entra nel bilancio di massa",
    date: "2026-09-02",
    firstPublishedAt: "2026-11-03",
    category: "spazio",
    hub: "scienza-passioni",
    icon: "☀️",
    excerpt: "Sulla Terra l'atmosfera e il campo magnetico contribuiscono alla protezione dall'ambiente spaziale. Quando ragioniamo su missioni oltre l'orbita bassa, non possiamo assumere…",
    tags: ["Spazio", "Luna", "Ingegneria"],
    content: `
Sulla Terra l'atmosfera e il campo magnetico contribuiscono alla protezione dall'ambiente spaziale. Quando ragioniamo su missioni oltre l'orbita bassa, non possiamo assumere che quelle condizioni ci seguano.

Per esplorare un caso vicino e capire le differenze, consulta [Sulla Luna pesi meno. La tua massa non è diventata più piccola](/blog/luna-massa-peso-inerzia) e [Perché sulla Luna il paracadute non ti aiuta](/blog/allunaggio-paracadute-propulsione). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Il tema delle radiazioni mostra bene quanto una scelta locale possa cambiare il progetto di un'intera missione.

## Non esiste un solo tipo di esposizione

Occorre distinguere fenomeni come gli eventi di particelle solari dal contributo dei raggi cosmici galattici. Cambiano caratteristiche, variabilità e strategie di mitigazione. Anche durata e profilo della missione influenzano la valutazione.

Per questo «quanto deve essere spesso lo scudo?» non ha una risposta universale ricavabile da una sola proprietà del materiale. Servono analisi specifiche dell'ambiente e della geometria del sistema.

## La massa fa parte del problema

NASA descrive, per Orion, strategie che sfruttano materiali già a bordo per aumentare la schermatura in una zona di riparo durante eventi solari. L'idea ingegneristica è usare una risorsa per più funzioni, invece di pensare soltanto ad aggiungere massa dedicata.

Ogni chilogrammo trasportato influenza infatti altre parti del progetto. Nel ragionamento complessivo bisogna tenere insieme protezione, struttura, propulsione e organizzazione degli spazi.

## Una mitigazione non è una garanzia assoluta

Da sviluppatore trovo familiare il principio: la protezione non coincide con un singolo componente acquistato alla fine. Dipende da architettura, misure, procedure e condizioni operative.

L'analogia si ferma qui; la dosimetria e la sicurezza di una missione richiedono competenze e modelli specifici. Non si possono dedurre prestazioni reali da un esempio divulgativo.

Quando leggo una proposta di permanenza lunare, cerco quindi il collegamento fra ambiente previsto e soluzione verificata. Un disegno con una parete spessa dice poco. Sapere quale esposizione considera, per quanto tempo e con quali limiti permette invece di iniziare una valutazione tecnica.

## Fonti

- [NASA — protezione dalle radiazioni alla Luna](https://science.nasa.gov/science-research/heliophysics/how-nasa-will-protect-astronauts-from-space-radiation-at-the-moon/)
- [NASA — tecnologie di Orion](https://www.nasa.gov/missions/artemis/orion/top-five-technologies-needed-for-a-spacecraft-to-survive-deep-space/)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "transactional-outbox-invio-erp",
    title: "Salvato nel database, perso nell’invio: a cosa serve l’outbox",
    date: "2026-08-31",
    firstPublishedAt: "2026-11-03",
    category: "sviluppo-software",
    hub: "shopify-integrazioni",
    icon: "📤",
    excerpt: "Salvo un ordine nel database e poi mando un messaggio al gestionale. Se il processo si arresta fra le due operazioni, l'ordine esiste ma il destinatario non lo sa. Invertire…",
    tags: ["Coding", "Database", "Integrazioni"],
    content: `
Salvo un ordine nel database e poi mando un messaggio al gestionale. Se il processo si arresta fra le due operazioni, l'ordine esiste ma il destinatario non lo sa. Invertire la sequenza sposta il problema: il messaggio potrebbe partire anche se il salvataggio fallisce.

Le condizioni descritte qui sono collegate anche a [Retry: riprovare subito può essere il problema](/blog/retry-backoff-jitter-integrazioni) e [Lo stesso webhook due volte: come evitare due ordini](/blog/webhook-idempotenza-ordini). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

È il problema della doppia scrittura su sistemi distinti. Una transazione del database locale non si estende magicamente alla rete.

## Conservare dato e intenzione insieme

Il transactional outbox propone di salvare la modifica commerciale e un evento da inviare nella stessa transazione locale. Un processo separato legge l'outbox e prova a consegnare l'evento.

Schema dimostrativo, con modelli ipotetici nello stesso database:

\`\`\`ruby
Order.transaction do
  order = Order.create!(order_attributes)
  OutboxEvent.create!(
    event_type: 'order.created',
    aggregate_id: order.id,
    payload: { order_id: order.id }
  )
end
\`\`\`

Se il commit riesce, rimangono entrambi. Se fallisce, nessuno dei due deve essere considerato completato. Il worker deve poi poter ritrovare gli eventi non consegnati.

## Non promette una consegna unica

Il processo può inviare il messaggio e arrestarsi prima di registrare la conferma. Al riavvio potrebbe inviarlo ancora. Il destinatario deve quindi gestire i duplicati, per esempio attraverso un identificativo stabile dell'evento e un'elaborazione idempotente.

Anche concorrenza fra worker, ordine degli eventi e pulizia della tabella richiedono una scelta esplicita. Il frammento illustra il punto di atomicità, non implementa da solo tutto il protocollo.

## Rendere visibile il ritardo

Misurerei numero ed età degli eventi pendenti, oltre ai tentativi falliti. Un database pieno di intenzioni mai consegnate non è una sincronizzazione riuscita.

Mi piace l'outbox perché rende persistente un passaggio che altrimenti vive fra due righe di codice. Non cancella i guasti: crea le condizioni per recuperarli senza dover indovinare cosa il processo stesse facendo prima di fermarsi.

## Fonti

- [AWS — transactional outbox](https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "legge-little-code-tempi-attesa",
    title: "La coda cresce? Conta anche il tempo che il lavoro passa dentro",
    date: "2026-08-28",
    firstPublishedAt: "2026-11-03",
    category: "ingegneria",
    hub: "scienza-passioni",
    icon: "🚦",
    excerpt: "La legge di Little collega lavoro in corso, throughput e tempo medio. Aggiungere processi non elimina ogni collo di bottiglia.",
    tags: ["Ingegneria", "Prestazioni"],
    content: `
Una coda contiene molti job e la tentazione è aumentare subito i worker. Prima mi farei una domanda più semplice: quanto lavoro entra, quanto ne esce e quanto tempo rimane nel sistema?

Per esplorare un caso vicino e capire le differenze, consulta [La media dice che va bene. Quel cinque per cento aspetta ancora](/blog/latenza-percentili-media-p99) e [Passa tutti i test. Ma risolve il problema giusto?](/blog/verifica-validazione-requisiti). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

La legge di Little collega proprio queste grandezze. In un sistema stabile, con confini e medie coerenti, il numero medio di elementi presenti è uguale al tasso medio di attraversamento moltiplicato per il tempo medio trascorso dentro: **L = λW**.

## Un conto con le unità

Immaginiamo un processo stabile che completa in media 12 job al minuto. Ogni job trascorre nel sistema, attesa compresa, una media di 5 minuti. Il lavoro medio in corso è 12 × 5 = 60 job.

Non significa che ogni fotografia della coda debba mostrare esattamente sessanta elementi. Stiamo collegando medie, non descrivendo tutti gli istanti del processo.

## Il confine cambia il significato

Se conto sia i job in attesa sia quelli in esecuzione, il tempo deve comprendere entrambi. Se misuro soltanto la fila prima del worker, devo usare il tempo di attesa in quella fila. Mischiare i due perimetri rende il conto fuorviante.

Anche l'ipotesi di stabilità conta. Una coda che cresce senza controllo perché gli arrivi superano stabilmente la capacità non si descrive assegnandole una media di equilibrio inventata.

## Dalla formula alla diagnosi

Se il tempo totale aumenta, distinguerei attesa, esecuzione e dipendenze esterne. Più worker possono ridurre l'attesa soltanto se la risorsa condivisa regge il carico aggiuntivo.

La relazione non sceglie la soluzione al posto nostro. Aiuta a controllare se numeri e ragionamento stanno insieme. Prima di discutere quanti processi avviare, preferisco avere una definizione leggibile di ciò che sto misurando: evita di ottimizzare una parte mentre il resto del lavoro continua ad accumularsi altrove.

## Fonti

- [MIT — modelli di coda e legge di Little](https://ocw.mit.edu/courses/15-763j-manufacturing-system-and-supply-chain-design-spring-2005/568c857501f6785e7b328a3cf3990705_reviw_of_que_mol.pdf)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "spreco-alimentare-misurare-prima",
    title: "Spreco alimentare: prima del consiglio, guarda cosa finisce nel cestino",
    date: "2026-08-26",
    firstPublishedAt: "2026-11-03",
    category: "ambiente",
    hub: "scienza-passioni",
    icon: "🥕",
    excerpt: "«Bisogna sprecare meno cibo» è un obiettivo facile da condividere. Il problema operativo comincia dopo: stiamo comprando troppo, cucinando porzioni grandi o dimenticando…",
    tags: ["Ambiente", "Risorse", "Misure"],
    content: `
«Bisogna sprecare meno cibo» è un obiettivo facile da condividere. Il problema operativo comincia dopo: stiamo comprando troppo, cucinando porzioni grandi o dimenticando prodotti che avevamo già?

Questo ragionamento si collega anche ai contenuti su [Acqua virtuale: il numero di litri non racconta tutta la storia](/blog/impronta-idrica-contesto) e [Un kWh è sempre un kWh. Le emissioni associate cambiano](/blog/elettricita-intensita-carbonica). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Sono cause diverse. Dare a tutte lo stesso consiglio significa rischiare di non correggerne nessuna.

## Trasformare un'impressione in un dato

Il Food Waste Index di UNEP distingue ambiti come famiglie, ristorazione e vendita al dettaglio e dedica attenzione alla misurazione. Io ne ricavo un principio applicabile anche in piccolo: prima definire cosa osserviamo, poi confrontare i risultati.

Un diario dimostrativo potrebbe annotare alimento, quantità, motivo dello scarto e se la parte fosse commestibile. Separare bucce o altri scarti inevitabili dal cibo ancora utilizzabile evita di attribuire lo stesso significato a tutto il peso del cestino.

## Collegare il problema all'azione

Se ricorrono prodotti dimenticati, proverei a rendere visibili quelli da usare prima e a controllare le scorte prima della spesa. Se ricorrono porzioni avanzate, rivedrei le quantità preparate.

Queste sono ipotesi operative, non risultati di un esperimento personale. Per capire se aiutano occorre osservare un altro periodo comparabile, tenendo conto anche del numero di pasti e delle persone presenti.

## Non farsi ingannare dal totale

Due settimane possono avere lo stesso peso di scarti e raccontare storie differenti. In una si cucina di più; nell'altra si buttano prodotti interi. Un unico numero perde queste informazioni.

Non serve registrare per sempre ogni grammo. Basta una misura sufficientemente chiara da suggerire una modifica e verificare se sta andando nella direzione desiderata.

Mi interessa questo passaggio perché sostituisce un generico senso di colpa con una decisione concreta. Un sistema migliore di acquisto, conservazione e preparazione può rendere la scelta utile anche quella più semplice da ripetere.

## Fonti

- [UNEP — Food Waste Index Report 2024](https://www.unep.org/resources/publication/food-waste-index-report-2024)
- [UNEP — definizioni e misurazione](https://sdgs.unep.org/article/2a5-food-waste-index)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "polvere-lunare-progettazione",
    title: "La polvere lunare non è un problema da risolvere con una spazzata",
    date: "2026-08-24",
    firstPublishedAt: "2026-11-03",
    category: "spazio",
    hub: "scienza-passioni",
    icon: "🌑",
    excerpt: "Una superficie grigia coperta di polvere può sembrare un ambiente semplice. Nessuna pioggia, nessun fango, nessuna vegetazione. Poi provi a immaginare una guarnizione, un…",
    tags: ["Spazio", "Luna", "Materiali"],
    content: `
Una superficie grigia coperta di polvere può sembrare un ambiente semplice. Nessuna pioggia, nessun fango, nessuna vegetazione. Poi provi a immaginare una guarnizione, un giunto o un tessuto che devono funzionare dopo ogni uscita.

Per esplorare un caso vicino e capire le differenze, consulta [Radiazioni sulla Luna: la protezione entra nel bilancio di massa](/blog/radiazioni-luna-protezione-massa) e [Ghiaccio sulla Luna: trovare una risorsa non significa poterla usare](/blog/ghiaccio-lunare-risorsa-utilizzabile). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

La regolite lunare rende molto meno banale l'idea di lavorare sulla Luna per periodi prolungati.

## Non è sabbia levigata dall'acqua

La NASA descrive la polvere lunare come abrasiva, con particelle che non hanno subito gli stessi processi di erosione tipici di molti ambienti terrestri. Le proprietà elettrostatiche contribuiscono inoltre alla sua adesione alle superfici.

Questo significa che la polvere può diventare parte del comportamento del sistema: usura, contaminazione delle superfici e difficoltà di pulizia entrano nelle condizioni operative da considerare.

## Proteggere l'interfaccia

Se dovessi impostare uno schema concettuale, separerei tre problemi: evitare l'ingresso, tollerare la presenza e rimuovere il materiale depositato. Sono strategie complementari, con costi e limiti differenti.

Una copertura può proteggere una connessione, ma deve potersi aprire e richiudere. Un sistema di pulizia può funzionare su un pannello senza essere adatto a tutte le geometrie. Non darei per scontata una soluzione universale.

## Anche la prova deve essere rappresentativa

NASA studia tecniche come l'Electrodynamic Dust Shield, che usa campi elettrici per spostare particelle. La sua esistenza non elimina la necessità di verificare materiali, superfici e condizioni d'uso del singolo sistema.

Per valutare una proposta chiederei quante esposizioni sopporta, quale polvere viene usata nelle prove e quali prestazioni conserva dopo la pulizia. «Ha rimosso la polvere una volta» è un'evidenza diversa da «mantiene la funzione durante la missione».

Il dettaglio apparentemente secondario può decidere la disponibilità dell'intero mezzo. È una ragione in più per progettare manutenzione e ambiente insieme all'hardware, fin dall'inizio.

## Fonti

- [NASA — protezione dalla polvere lunare](https://www.nasa.gov/centers-and-facilities/kennedy/nasa-technology-helps-guard-against-lunar-dust/)
- [NASA — dimostrazione dello scudo elettrodinamico](https://www.nasa.gov/image-article/nasas-dust-shield-successfully-repels-lunar-regolith-on-moon/)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "retry-backoff-jitter-integrazioni",
    title: "Retry: riprovare subito può essere il problema",
    date: "2026-08-21",
    firstPublishedAt: "2026-11-03",
    category: "sviluppo-software",
    hub: "shopify-integrazioni",
    icon: "⏳",
    excerpt: "Un servizio risponde lentamente. Cento client vanno in timeout e riprovano nello stesso istante. Il servizio, già in difficoltà, riceve un'altra ondata di lavoro. Ogni…",
    tags: ["Coding", "API", "Integrazioni"],
    content: `
Un servizio risponde lentamente. Cento client vanno in timeout e riprovano nello stesso istante. Il servizio, già in difficoltà, riceve un'altra ondata di lavoro. Ogni singolo client sta cercando di recuperare; tutti insieme peggiorano il guasto.

Le condizioni descritte qui sono collegate anche a [Salvato nel database, perso nell’invio: a cosa serve l’outbox](/blog/transactional-outbox-invio-erp) e [Lo stesso webhook due volte: come evitare due ordini](/blog/webhook-idempotenza-ordini). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Un retry è una nuova richiesta, con un costo reale. Non è una parentesi gratuita attorno all'errore.

## Prima decidere se riprovare

Un errore temporaneo può meritare un nuovo tentativo. Un payload non valido, invece, non diventa corretto aspettando. Prima distinguerei le categorie di errore previste dall'API e rispetterei le sue indicazioni, compreso Retry-After quando pertinente.

Per un'operazione con effetti esterni c'è un'altra domanda: il timeout significa davvero che non è stata eseguita? Potrebbe essere andata a buon fine mentre si perdeva soltanto la risposta. Senza idempotenza un retry può duplicare l'effetto.

## Distribuire i tentativi nel tempo

Il backoff aumenta l'attesa fra i tentativi. Il jitter aggiunge una componente casuale per evitare che tutti ripartano insieme. AWS descrive entrambi come strumenti per contenere le conseguenze dei guasti temporanei.

Un esempio di sola attesa, da usare dentro una politica con tentativi limitati:

\`\`\`javascript
const capMs = Math.min(30_000, 500 * 2 ** attempt);
const delayMs = Math.random() * capMs;
await new Promise(resolve => setTimeout(resolve, delayMs));
\`\`\`

Qui attempt è un intero non negativo. Il frammento non decide quali errori ritentare, non applica una scadenza complessiva e non rende idempotente l'operazione: quelle sono responsabilità separate.

## Il recupero deve avere una fine

Imposterei timeout della singola chiamata, numero massimo di tentativi e durata massima dell'intera operazione. Eviterei anche politiche indipendenti a ogni livello dello stack: i tentativi possono moltiplicarsi.

Quando esaurisco il budget, salvo uno stato recuperabile e rendo visibile il problema. Un'integrazione affidabile sa riprovare, ma sa anche quando smettere di martellare il sistema da cui dipende.

## Fonti

- [AWS Builders’ Library — timeout, retry e jitter](https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "feedback-controllo-ritardi-oscillazioni",
    title: "Il termostato e il deploy: correggere troppo può far oscillare il sistema",
    date: "2026-08-19",
    firstPublishedAt: "2026-11-03",
    category: "ingegneria",
    hub: "scienza-passioni",
    icon: "🌡️",
    excerpt: "La stanza sembra fredda, quindi alzi molto il riscaldamento. Dopo poco non percepisci ancora il cambiamento e lo alzi di nuovo. Quando il calore arriva, la temperatura…",
    tags: ["Ingegneria", "Controllo"],
    content: `
La stanza sembra fredda, quindi alzi molto il riscaldamento. Dopo poco non percepisci ancora il cambiamento e lo alzi di nuovo. Quando il calore arriva, la temperatura supera quella desiderata. Allora spegni tutto e ricominci il ciclo.

Questo ragionamento si collega anche ai contenuti su [La coda cresce? Conta anche il tempo che il lavoro passa dentro](/blog/legge-little-code-tempi-attesa) e [Se il progetto usa già il 100%, il margine è finito](/blog/margine-progetto-budget-capacita). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

È un esempio intuitivo del perché un controllo basato sul feedback deve considerare anche i tempi del sistema.

## Il valore misurato racconta il passato

In un controllo ad anello chiuso confrontiamo una misura con un obiettivo e usiamo la differenza per scegliere un'azione. Ma misura, attuatore e processo possono introdurre ritardi e inerzia.

Correggere energicamente uno scostamento che sta già scomparendo può produrre una sovracorrezione. Le dispense sul controllo della temperatura dell'Università di Exeter mostrano anche come un termine integrale possa accumularsi e contribuire al superamento dell'obiettivo.

## Un'analogia operativa, con i suoi limiti

Penso a una coda di job che cresce. Aumentare i worker sembra sensato, ma se il vincolo è il database, più processi possono aumentare la contesa. Quando la nuova configurazione produce effetti, abbiamo magari già effettuato altre tre modifiche.

Non sto dicendo che una coda e un impianto termico abbiano la stessa dinamica. L'analogia utile è più circoscritta: prima di un'altra correzione devo sapere quale risposta aspettarmi e con quale ritardo.

## Osservare una modifica alla volta

In un esperimento controllato annoterei istante dell'intervento, variabile modificata e segnali da seguire. Aspetterei una finestra coerente con il processo, senza scambiarla per un tempo universale.

Se cambio insieme concorrenza, query e limiti di memoria, un miglioramento finale mi dice poco su cosa abbia funzionato. Il feedback richiede una relazione leggibile fra azione e risposta.

Correggere rapidamente è utile quando la rapidità è compatibile con ciò che stiamo controllando. Altrimenti rischia di diventare soltanto un modo più veloce di inseguire le oscillazioni.

## Fonti

- [Università di Exeter — feedback e controllo della temperatura](https://newton.ex.ac.uk/teaching/CDHW/Feedback/PracticalMatters.html)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "elettricita-intensita-carbonica",
    title: "Un kWh è sempre un kWh. Le emissioni associate cambiano",
    date: "2026-08-17",
    firstPublishedAt: "2026-11-03",
    category: "ambiente",
    hub: "scienza-passioni",
    icon: "🌍",
    excerpt: "Consumo e intensità delle emissioni sono indicatori distinti. Per confrontarli servono confini e dati coerenti.",
    tags: ["Ambiente", "Energia", "Misure"],
    content: `
Due elaborazioni consumano la stessa energia elettrica. Possiamo concludere che abbiano anche le stesse emissioni associate? Non senza sapere con quali dati stiamo facendo il conto.

Un approfondimento dello stesso percorso si trova in [Spreco alimentare: prima del consiglio, guarda cosa finisce nel cestino](/blog/spreco-alimentare-misurare-prima) e [kW e kWh: la differenza che cambia i conti](/blog/kw-kwh-potenza-energia). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Il consumo in kWh descrive una quantità di energia. L'intensità delle emissioni associa a ogni unità di elettricità una quantità di gas serra, espressa per esempio in grammi di CO₂ equivalente per kWh.

## Il prodotto è semplice, il dato meno

In un esempio puramente didattico, 10 kWh moltiplicati per 100 g CO₂e/kWh danno 1 kg CO₂e. Con un fattore di 400 g, il risultato è 4 kg. Non sono valori attribuiti a un paese o a un fornitore: servono a mostrare il ruolo del fattore.

L'Agenzia europea dell'ambiente pubblica un indicatore sull'intensità delle emissioni della generazione elettrica. Per usarlo occorre leggere anche metodologia, periodo e perimetro.

## Una media non descrive ogni ora

Un dato annuale è utile per alcuni confronti, ma non permette da solo di dichiarare quale fosse il valore di una specifica ora. Anche generazione nazionale e consumo elettrico hanno confini differenti quando entrano in gioco gli scambi fra paesi.

E una stima delle emissioni operative non coincide automaticamente con una valutazione dell'intero ciclo di vita di impianti e apparecchiature. Cambiare confine senza dirlo può rendere incomparabili due risultati apparentemente identici.

## Come leggere un numero ambientale

Quando incontro una stima controllo energia misurata, origine del fattore e anno di riferimento. Poi cerco le esclusioni: cosa è stato contato e cosa è rimasto fuori?

Non serve trasformare ogni attività quotidiana in un modello complesso. Serve evitare che una cifra molto precisa nasconda ipotesi vaghe. Il conto diventa utile quando posso ripeterlo con gli stessi dati e capire quali condizioni lo farebbero cambiare.

## Fonti

- [EEA — intensità delle emissioni della generazione elettrica](https://www.eea.europa.eu/en/analysis/indicators/greenhouse-gas-emission-intensity-of-1)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "ghiaccio-lunare-risorsa-utilizzabile",
    title: "Ghiaccio sulla Luna: trovare una risorsa non significa poterla usare",
    date: "2026-08-14",
    firstPublishedAt: "2026-11-03",
    category: "spazio",
    hub: "scienza-passioni",
    icon: "🧊",
    excerpt: "«Sulla Luna c'è acqua» è una notizia affascinante. Il passaggio successivo, però, non è automaticamente «allora possiamo rifornirci lì». Fra riconoscere una risorsa e…",
    tags: ["Spazio", "Luna", "Risorse"],
    content: `
«Sulla Luna c'è acqua» è una notizia affascinante. Il passaggio successivo, però, non è automaticamente «allora possiamo rifornirci lì». Fra riconoscere una risorsa e trasformarla in un servizio affidabile c'è un intero problema ingegneristico.

Un approfondimento dello stesso percorso si trova in [Radiazioni sulla Luna: la protezione entra nel bilancio di massa](/blog/radiazioni-luna-protezione-massa) e [Perché sulla Luna il paracadute non ti aiuta](/blog/allunaggio-paracadute-propulsione). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

È la parte che trovo più interessante quando si parla di esplorazione e permanenza lunare.

## Prima capire dove e in quale forma

Le osservazioni hanno mostrato acqua e ghiaccio lunari in condizioni differenti. Alcune regioni polari permanentemente in ombra offrono temperature molto basse, favorevoli alla conservazione del ghiaccio. Questo non equivale a immaginare un lago sotterraneo facile da raggiungere.

Contano distribuzione, concentrazione, profondità e proprietà del materiale che contiene l'acqua. Una rilevazione scientifica e una mappa utile a un impianto di estrazione rispondono a domande diverse.

## L'ombra è anche un vincolo

Un luogo freddo e buio può conservare una risorsa e, contemporaneamente, rendere complicate alimentazione, comunicazioni e operazioni dei mezzi. L'ambiente favorevole al deposito non è necessariamente favorevole all'attrezzatura.

In uno schema ipotetico distinguerei ricerca del deposito, raccolta del materiale, separazione dell'acqua, trattamento e stoccaggio. Ogni passaggio richiede energia e introduce perdite o manutenzione. Non basta dimostrare che il primo sia possibile per considerare risolta l'intera catena.

## La domanda è quanta ne ottieni davvero

Per valutare un processo vorrei conoscere la quantità recuperata per unità di materiale trattato e per energia utilizzata, oltre alla continuità operativa. Senza questi dati è difficile confrontare alternative.

Non sto attribuendo prestazioni a un impianto esistente: è il tipo di verifica che chiederei a qualunque proposta di utilizzo della risorsa.

La scoperta apre una possibilità. Il progetto deve poi mostrare come mantenerla disponibile nel tempo. È lì che una risorsa naturale comincia a diventare un'infrastruttura.

## Fonti

- [NASA — fatti e acqua lunare](https://science.nasa.gov/moon/facts/)
- [NASA — ambiente termico della Luna](https://science.nasa.gov/moon/weather-on-the-moon/)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "rails-unicita-database-concorrenza",
    title: "Rails: validates uniqueness non ferma due richieste contemporanee",
    date: "2026-08-12",
    firstPublishedAt: "2026-11-03",
    category: "sviluppo-software",
    hub: "rails-backend",
    icon: "🔐",
    excerpt: "Due processi cercano lo stesso codice esterno. Nessuno dei due lo trova, quindi entrambi provano a creare il record. Se la protezione è soltanto una ricerca prima del…",
    tags: ["Coding", "Rails", "Database"],
    content: `
Due processi cercano lo stesso codice esterno. Nessuno dei due lo trova, quindi entrambi provano a creare il record. Se la protezione è soltanto una ricerca prima del salvataggio, tutti e due possono aver ragione nello stesso momento.

Per valutare l'effetto di questa scelta sul backend, considera anche [Rails: elaborare un catalogo senza caricarlo tutto in memoria](/blog/rails-find-each-batch-memoria) e [Rails Active Record: modelli, query e SQL](/blog/rails-activerecord-le-basi). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

È il limite della validazione di unicità a livello applicativo: il controllo e la scrittura non diventano automaticamente un'unica operazione indivisibile.

## Il vincolo vive nel database

In Rails terrei la validazione per dare un errore leggibile, ma aggiungerei anche un indice univoco coerente con l'identità del dato. In una tabella ipotetica di ordini importati, il codice può essere unico dentro un negozio senza esserlo globalmente.

\`\`\`ruby
# Nel modello ImportedOrder
validates :external_id, presence: true,
  uniqueness: { scope: :shop_id }

# Dentro la migrazione
add_index :imported_orders,
  [:shop_id, :external_id],
  unique: true
\`\`\`

Prima di applicare la migrazione controllerei duplicati esistenti e valori nulli. L'indice non decide da solo quali campi siano obbligatori: i vincoli NOT NULL vanno progettati separatamente quando necessari.

## Gestire la collisione prevista

Sotto concorrenza il database può rifiutare l'inserimento e Rails può sollevare ActiveRecord::RecordNotUnique. Non trasformerei automaticamente questa eccezione in un errore generico né la ignorerei.

Il comportamento dipende dall'operazione. Per un'importazione idempotente potrei recuperare il record già presente e verificare che corrisponda all'oggetto atteso. Per una creazione interattiva potrebbe essere giusto chiedere un valore diverso. Se c'è una transazione, il recupero deve rispettarne lo stato e le regole dell'adapter.

## Provare il caso difficile

Un test sequenziale con due create controlla solo una parte della storia. Il caso interessante sono due connessioni che tentano contemporaneamente lo stesso inserimento.

L'obiettivo è che l'invariante resti vero: una sola identità commerciale, anche quando il codice viene eseguito da più worker. Il messaggio applicativo aiuta le persone; il vincolo protegge il sistema.

## Fonti

- [Rails — validazioni e unicità](https://api.rubyonrails.org/classes/ActiveRecord/Validations/ClassMethods.html)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "margine-progetto-budget-capacita",
    title: "Se il progetto usa già il 100%, il margine è finito",
    date: "2026-08-10",
    firstPublishedAt: "2026-11-03",
    category: "ingegneria",
    hub: "scienza-passioni",
    icon: "📐",
    excerpt: "Un sistema ha un limite di memoria di 1 GB. Durante una prova ne usa 990 MB e qualcuno conclude: «Ci stiamo dentro». Formalmente è vero in quella prova. Progettualmente…",
    tags: ["Ingegneria", "Progettazione"],
    content: `
Un sistema ha un limite di memoria di 1 GB. Durante una prova ne usa 990 MB e qualcuno conclude: «Ci stiamo dentro». Formalmente è vero in quella prova. Progettualmente, però, restano dieci megabyte per tutto ciò che non abbiamo ancora osservato.

Un approfondimento dello stesso percorso si trova in [Tre pezzi corretti possono non entrare nello spazio previsto](/blog/tolleranze-catena-dimensionale) e [Il termostato e il deploy: correggere troppo può far oscillare il sistema](/blog/feedback-controllo-ritardi-oscillazioni). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Per questo mi interessa il margine: la distanza dichiarata fra una risorsa disponibile e quella prevista o misurata nelle condizioni considerate.

## Scrivere anche il denominatore

Nel nostro esempio semplificato restano 10 MB, cioè l'1% del limite. Se un altro team esprime il margine rispetto al consumo anziché alla capacità disponibile, ottiene una percentuale diversa. Senza definire il calcolo, persino due numeri corretti possono creare confusione.

Il Systems Engineering Handbook della NASA descrive i margini come riserve rispetto a incertezze e rischi in parametri quali massa, potenza e memoria. Non sono una risorsa immaginaria da aggiungere quando qualcosa va storto.

## Il budget deve avere condizioni

Per un processo software distinguerei almeno avvio, funzionamento ordinario e picco rappresentativo. Un file grande, più richieste concorrenti o una cache in riempimento possono cambiare il fabbisogno.

Annoterei limite, scenario, misura e riserva residua. Poi stabilirei cosa fare quando il margine si riduce: ottimizzare, limitare la concorrenza, cambiare una configurazione o rivedere un requisito.

## Nessuna percentuale magica

Non esiste un valore universale valido per ogni progetto. La riserva necessaria dipende da variabilità, conseguenze del superamento e possibilità di recupero. Un esempio numerico non sostituisce un dimensionamento reale.

La domanda utile non è «abbiamo ancora spazio?», ma «quanto spazio resta nelle condizioni che dobbiamo sostenere, e quanto sono attendibili le stime?». Un progetto che risponde a questa domanda permette decisioni; uno che si limita a non superare il limite vive di speranza.

## Fonti

- [NASA — definizione di margine](https://www.nasa.gov/reference/system-engineering-handbook-appendix/)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "kw-kwh-potenza-energia",
    title: "kW e kWh: la differenza che cambia i conti",
    date: "2026-08-07",
    firstPublishedAt: "2026-11-03",
    category: "ambiente",
    hub: "scienza-passioni",
    icon: "⚡",
    excerpt: "«Questo apparecchio consuma 800 watt all'ora». È una frase che si sente spesso, ma mescola grandezze diverse. Per capire un consumo non basta leggere una potenza: serve…",
    tags: ["Ambiente", "Energia"],
    content: `
«Questo apparecchio consuma 800 watt all'ora». È una frase che si sente spesso, ma mescola grandezze diverse. Per capire un consumo non basta leggere una potenza: serve sapere anche per quanto tempo viene assorbita.

Questo ragionamento si collega anche ai contenuti su [La rete elettrica deve funzionare anche quando il sole cambia](/blog/rete-elettrica-flessibilita-domanda) e [Un kWh è sempre un kWh. Le emissioni associate cambiano](/blog/elettricita-intensita-carbonica). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Separare kW e kWh permette di ragionare meglio su elettrodomestici, computer e batterie.

## Il ritmo e il totale

Il watt è un'unità di potenza, cioè di energia trasferita nell'unità di tempo. Un kilowatt vale mille watt. Il kilowattora misura invece energia: è quella associata a una potenza costante di un kilowatt mantenuta per un'ora.

Prendiamo un carico ipotetico costante da 800 W acceso per tre ore. Il conto è 0,8 kW × 3 h = 2,4 kWh. Qui «costante» è una condizione del problema, non un dettaglio da saltare.

## La targa non è una registrazione

Un apparecchio può modulare, alternare fasi attive e pause oppure assorbire una potenza diversa in base all'uso. Il valore nominale non descrive automaticamente tutto il suo funzionamento.

Per un dispositivo con assorbimento variabile, l'energia totale si ottiene accumulando la potenza nel tempo. Un misuratore adatto può fornire quel totale; un singolo valore istantaneo racconta soltanto un momento.

## Confrontare la stessa attività

Se due computer hanno potenze diverse, non deduco il consumo di un'elaborazione guardando soltanto i watt. Mi interessa anche quanto tempo impiegano a completarla e in quali condizioni sono stati misurati.

Lo stesso vale per una batteria: la capacità energetica in Wh e la potenza erogabile rispondono a domande diverse. Una indica quanta energia può fornire nelle condizioni specificate, l'altra quanto rapidamente.

Prima di fare qualunque confronto controllo quindi tre cose: unità, durata e lavoro svolto. È meno spettacolare di uno slogan sul risparmio, ma rende il numero finalmente utilizzabile.

## Fonti

- [EIA — misurare l’elettricità](https://www.eia.gov/energyexplained/electricity/measuring-electricity.php)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "luna-latenza-comunicazioni",
    title: "Parlare con la Luna: quel secondo che il software non può togliere",
    date: "2026-08-05",
    firstPublishedAt: "2026-11-03",
    category: "spazio",
    hub: "scienza-passioni",
    icon: "📡",
    excerpt: "Quando una videochiamata risponde in ritardo pensiamo subito alla connessione. Ma fra Terra e Luna una parte dell'attesa esiste anche immaginando apparati perfetti. Il…",
    tags: ["Spazio", "Comunicazioni"],
    content: `
Quando una videochiamata risponde in ritardo pensiamo subito alla connessione. Ma fra Terra e Luna una parte dell'attesa esiste anche immaginando apparati perfetti. Il segnale deve attraversare lo spazio, e non può farlo istantaneamente.

Un approfondimento dello stesso percorso si trova in [Le antenne a Terra fanno parte della missione spaziale](/blog/deep-space-network-collegamento) e [Ghiaccio sulla Luna: trovare una risorsa non significa poterla usare](/blog/ghiaccio-lunare-risorsa-utilizzabile). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

La latenza è un buon punto d'incontro fra fisica e progettazione del software.

## Andata e ritorno sono due viaggi

Alla distanza media Terra–Luna la propagazione della luce richiede circa 1,3 secondi in una direzione. Il valore cambia con la distanza. Una domanda seguita da una risposta richiede quindi circa 2,6 secondi di sola propagazione, prima di aggiungere elaborazione, trasmissione e altri ritardi.

È una stima fisica, non la promessa di un tempo di risposta operativo. Una rete reale deve gestire anche visibilità delle antenne, disponibilità del collegamento e protocolli.

## Più banda non significa meno distanza

Immagino il trasferimento di una fotografia. Aumentare il bitrate riduce il tempo necessario a immettere tutti i suoi bit sul collegamento. Non elimina il tempo che il primo bit impiega ad attraversare lo spazio.

Questo distingue la capacità del canale dalla latenza. Sono entrambe importanti, ma risolvono problemi diversi: una strada con più corsie non accorcia automaticamente il percorso.

## Progettare intorno all'attesa

In uno scenario ipotetico di controllo remoto eviterei un'interfaccia che richiede una conferma terrestre per ogni microazione. Preferirei comandi di livello più alto, stato chiaramente datato e procedure locali per gestire gli eventi previsti.

È una conseguenza progettuale del ritardo, non una descrizione delle procedure di una missione specifica. Per capire quelle servono i documenti del relativo sistema.

Il limite fisico resta. Il buon progetto decide cosa fare durante l'attesa, quali informazioni rendere visibili e quali operazioni possono procedere senza un dialogo continuo con chi è dall'altra parte.

## Fonti

- [ESA — comunicazione oltre l’orbita bassa](https://nebula.esa.int/4000136202)
- [NASA — tempo di viaggio della luce](https://science.nasa.gov/mission/webb/science-overview/science-explainers/how-does-webb-see-back-in-time/)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "fetch-abortcontroller-risposte-obsolete",
    title: "La ricerca mostra il risultato vecchio? Guarda l’ordine delle risposte",
    date: "2026-08-03",
    firstPublishedAt: "2026-11-03",
    category: "sviluppo-software",
    hub: "react-frontend",
    icon: "⏹️",
    excerpt: "Scrivi «Roma», poi correggi subito in «Romania». La seconda ricerca termina prima della prima. Per un istante vedi il risultato giusto, poi la risposta più lenta lo…",
    tags: ["Coding", "JavaScript", "Browser"],
    content: `
Scrivi «Roma», poi correggi subito in «Romania». La seconda ricerca termina prima della prima. Per un istante vedi il risultato giusto, poi la risposta più lenta lo sovrascrive. Il server non ha necessariamente sbagliato: il frontend ha confuso l'ordine di arrivo con l'intenzione più recente.

Per considerare anche gli effetti sull'interfaccia, approfondisci [localStorage: persistenza e sicurezza nel browser](/blog/javascript-localstorage-persistenza) e [Logging JavaScript: cosa registrare e cosa evitare](/blog/radiazione-di-fondo-e-il-cimitero-dei-console-log). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Questo è uno dei casi in cui aggiungere un caricamento animato non risolve niente.

## Due protezioni complementari

AbortController permette di interrompere una fetch attraverso il suo signal. Un identificativo progressivo permette invece di ignorare una risposta che non appartiene più alla ricerca corrente.

Ecco una funzione dimostrativa: restituisce i dati soltanto se la richiesta è ancora attuale. Chi la chiama deve gestire gli errori reali e ignorare il risultato undefined.

\`\`\`javascript
let controller;
let latest = 0;

async function search(query) {
  const request = ++latest;
  controller?.abort();
  const current = new AbortController();
  controller = current;

  try {
    const response = await fetch(
      '/api/search?q=' + encodeURIComponent(query),
      { signal: current.signal }
    );
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const data = await response.json();
    if (request === latest) return data;
  } catch (error) {
    if (request === latest && !current.signal.aborted) throw error;
  }
}
\`\`\`

## Cancellare non annulla il passato

Interrompere la richiesta dal browser non garantisce che il server abbia fermato un'operazione già ricevuta. Per una ricerca è soprattutto una gestione del lavoro e delle risposte; per pagamenti o scritture servono garanzie applicative diverse.

Anche lo stato di caricamento deve seguire l'identificativo corrente. Altrimenti il finally di una richiesta superata può spegnere lo spinner mentre quella nuova è ancora attiva.

## Il test utile

Simula due risposte con ritardi invertiti e verifica che resti visibile quella associata all'ultimo input. Prova anche un errore della richiesta vecchia: non deve cancellare il risultato nuovo né mostrare un allarme fuori contesto.

La regola è piccola ma decisiva: la UI deve rappresentare l'intenzione corrente, non l'ultimo pacchetto arrivato.

## Fonti

- [MDN — AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "misure-incertezza-cifre-decimali",
    title: "Quattro decimali non rendono una misura più affidabile",
    date: "2026-07-31",
    firstPublishedAt: "2026-11-03",
    category: "ingegneria",
    hub: "scienza-passioni",
    icon: "📏",
    excerpt: "Una dashboard mostra 23,1472 millisecondi. Il numero sembra serio: quattro decimali danno immediatamente l'impressione di una misura precisa. Ma come è stato ottenuto?…",
    tags: ["Ingegneria", "Misure"],
    content: `
Una dashboard mostra 23,1472 millisecondi. Il numero sembra serio: quattro decimali danno immediatamente l'impressione di una misura precisa. Ma come è stato ottenuto? Quante volte è stata ripetuta la prova? E quanto cambia il risultato se la macchina sta facendo altro?

Un approfondimento dello stesso percorso si trova in [Tre pezzi corretti possono non entrare nello spazio previsto](/blog/tolleranze-catena-dimensionale) e [Se il progetto usa già il 100%, il margine è finito](/blog/margine-progetto-budget-capacita). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Prima di confrontare numeri, preferisco capire cosa permettono davvero di affermare.

## Visualizzare non significa conoscere

La risoluzione descrive la più piccola variazione distinguibile da uno strumento o dalla sua rappresentazione. La ripetibilità riguarda quanto concordano misure ripetute in condizioni specificate. L'incertezza caratterizza la dispersione dei valori ragionevolmente attribuibili alla grandezza misurata.

Queste idee non sono intercambiabili. Un sensore può restituire molte cifre e avere uno scostamento sistematico; un cronometro software può essere finissimo mentre l'ambiente introduce variazioni molto maggiori.

## Un confronto onesto

Prendiamo due funzioni ipotetiche. Una esecuzione dura 20 ms, l'altra 19 ms. Se nelle ripetizioni entrambe oscillano fra 15 e 30 ms, il singolo millisecondo non dimostra da solo un miglioramento stabile.

Fisserei prima carico, dimensione degli input e condizioni della macchina. Ripeterei le misure e osserverei la distribuzione, distinguendo le prove a freddo da quelle a caldo. Solo dopo sceglierei come riassumerle.

## Scrivere anche le condizioni

Il NIST dedica indicazioni specifiche alla valutazione e alla comunicazione dell'incertezza. Il messaggio operativo che ricavo è questo: un risultato numerico ha bisogno delle sue condizioni e dei suoi limiti.

In un report preferisco leggere «tempo mediano su cento esecuzioni, con questi dati» piuttosto che un numero pieno di decimali senza metodo. Non perché la seconda misura sia necessariamente sbagliata, ma perché non ho abbastanza informazioni per giudicarla.

Arrotondare non è nascondere dettagli: quando è coerente con la misura, evita di fingere una conoscenza che non abbiamo.

## Fonti

- [NIST — terminologia delle misure](https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-appendix-d1-terminology)
- [NIST — incertezza](https://www.nist.gov/itl/sed/topic-areas/measurement-uncertainty)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "riparabilita-progetto-prodotti",
    title: "La riparabilità si decide prima del primo guasto",
    date: "2026-07-29",
    firstPublishedAt: "2026-11-03",
    category: "ambiente",
    hub: "scienza-passioni",
    icon: "🪛",
    excerpt: "Un dispositivo può funzionare bene per anni e diventare improvvisamente inutilizzabile per un componente economico. La domanda interessante non è soltanto quanto duri la…",
    tags: ["Ambiente", "Progettazione", "Riparabilità"],
    content: `
Un dispositivo può funzionare bene per anni e diventare improvvisamente inutilizzabile per un componente economico. La domanda interessante non è soltanto quanto duri la batteria o il connettore. È cosa succede quando quel pezzo smette di funzionare.

Per esplorare un caso vicino e capire le differenze, consulta [Spreco alimentare: prima del consiglio, guarda cosa finisce nel cestino](/blog/spreco-alimentare-misurare-prima) e [kW e kWh: la differenza che cambia i conti](/blog/kw-kwh-potenza-energia). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

La riparabilità è una caratteristica del progetto, non un favore da chiedere a prodotto rotto.

## Il guasto piccolo che diventa grande

Immaginiamo due apparecchi con lo stesso difetto al connettore di alimentazione. Nel primo il componente è accessibile e sostituibile. Nel secondo è inglobato in un gruppo costoso, difficile da aprire senza danneggiare altro.

Il problema elettrico può essere identico, mentre cambiano tempi, costi e probabilità che qualcuno tenti la riparazione. Anche la disponibilità di ricambi e istruzioni influenza il risultato: poter smontare qualcosa non significa poterlo ripristinare.

## Guardare il sistema di manutenzione

Il Joint Research Centre europeo collega la riparabilità a scelte concrete di progettazione e supporto. Quando valuto questa qualità guardo la sequenza necessaria per raggiungere le parti soggette a usura, gli attrezzi richiesti e la possibilità di richiudere correttamente il prodotto.

Poi considero il software. Un componente sostituibile perde utilità se il dispositivo smette di ricevere il supporto necessario alle sue funzioni. Durata fisica e durata del servizio vanno lette insieme.

## Una domanda prima dell'acquisto

Non trasformerei tutto in «riparare conviene sempre». Un confronto serio considera il difetto, la vita residua, l'efficienza e l'impatto della sostituzione. Però partire direttamente dal nuovo elimina un'opzione prima ancora di valutarla.

La domanda che mi interessa è semplice: se si rompe il pezzo più prevedibile, devo buttare anche quelli che funzionano? Se la risposta è sì, il prezzo sullo scaffale racconta soltanto una parte del costo del prodotto.

## Fonti

- [JRC — perché conta la riparabilità](https://joint-research-centre.ec.europa.eu/jrc-explains/why-repairability-matters-future-tech-products_en)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "orion-rientro-scudo-termico",
    title: "Orion: il viaggio non finisce quando rivedi la Terra",
    date: "2026-07-27",
    firstPublishedAt: "2026-11-03",
    category: "spazio",
    hub: "scienza-passioni",
    icon: "🚀",
    excerpt: "Guardando una missione lunare è facile concentrarsi sul lancio. Il razzo sale, le telecamere seguono la scia e sembra che la parte difficile sia tutta lì. A me interessa…",
    tags: ["Spazio", "Artemis", "Ingegneria"],
    content: `
Guardando una missione lunare è facile concentrarsi sul lancio. Il razzo sale, le telecamere seguono la scia e sembra che la parte difficile sia tutta lì. A me interessa anche il problema opposto: riportare una capsula verso terra senza trasformare la sua energia di movimento in un disastro.

Questo ragionamento si collega anche ai contenuti su [Orion: nel vuoto il calore non se ne va con una ventola](/blog/orion-controllo-termico-radiatori-vuoto) e [Radiazioni sulla Luna: la protezione entra nel bilancio di massa](/blog/radiazioni-luna-protezione-massa). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Orion è un buon esempio per ragionare sul rientro, senza confondere i principi fisici con il calendario delle missioni Artemis.

## L'energia cresce con il quadrato

L'energia cinetica è proporzionale alla massa e al quadrato della velocità: E = ½mv². In un confronto ideale, a parità di massa, raddoppiare la velocità significa quadruplicare l'energia da gestire.

Il ritorno da una traiettoria lunare impone condizioni più impegnative di un rientro dall'orbita terrestre bassa. La NASA ha incluso la dimostrazione dello scudo termico fra gli obiettivi centrali di Artemis I.

## Non basta un materiale resistente

Davanti alla capsula l'aria viene fortemente compressa e riscaldata. La protezione termica deve limitare il calore che raggiunge la struttura; la traiettoria determina come la decelerazione e il riscaldamento si distribuiscono nel tempo.

Lo scudo ablativo di Orion sfrutta una trasformazione controllata del materiale. Non è una coperta da conservare intatta: una parte della protezione viene consumata nel processo previsto dal progetto.

## Un sistema, non un singolo pezzo

Per capire il rientro tengo insieme tre elementi: l'energia iniziale, la forma del veicolo e il percorso nell'atmosfera. Valutare soltanto la temperatura massima lascia fuori una parte importante della storia, compresa la durata dell'esposizione.

È una lezione che porto anche nei problemi più piccoli: un componente eccellente non compensa automaticamente condizioni d'uso sbagliate. La missione riesce quando materiali, controllo e profilo operativo sono progettati insieme.

## Fonti

- [NASA — Artemis I, obiettivi e rientro](https://www.nasa.gov/specials/artemis-i-press-kit/)
- [NASA — Orion](https://www.nasa.gov/missions/meet-nasas-orion-spacecraft/)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "webhook-idempotenza-ordini",
    title: "Lo stesso webhook due volte: come evitare due ordini",
    date: "2026-07-24",
    firstPublishedAt: "2026-11-03",
    category: "sviluppo-software",
    hub: "shopify-integrazioni",
    icon: "🔁",
    excerpt: "Un ordine arriva dal negozio, l'integrazione lo salva e inoltra la conferma. La risposta si perde. Il mittente riprova: il server riceve di nuovo una richiesta che sembra…",
    tags: ["Coding", "Integrazioni", "Shopify"],
    content: `
Un ordine arriva dal negozio, l'integrazione lo salva e inoltra la conferma. La risposta si perde. Il mittente riprova: il server riceve di nuovo una richiesta che sembra perfettamente valida. Se ogni consegna crea un ordine nuovo, il problema è già nel database.

Per verificare le conseguenze di questa scelta su un'integrazione, puoi confrontare [Webhook e job periodici: l’integrazione ha bisogno anche di un controllo](/blog/webhook-riconciliazione-sincronizzazione) e [Retry: riprovare subito può essere il problema](/blog/retry-backoff-jitter-integrazioni). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

I webhook possono essere duplicati. Shopify lo documenta e fornisce identificativi delle consegne. Io parto da qui: **ricevere due volte non deve significare eseguire due volte lo stesso effetto**.

## L'identificativo non basta da solo

Memorizzare l'ID della consegna permette di riconoscere un duplicato, ma il controllo deve reggere due richieste contemporanee. Un semplice «cerco, non trovo, inserisco» lascia una finestra di gara.

Serve un vincolo univoco nel database e una gestione coerente della transazione. Inoltre distinguerei l'identità della consegna da quella dell'operazione commerciale: due eventi diversi possono riguardare lo stesso ordine. Per quest'ultimo può servire una chiave composta da negozio e ID esterno.

## Il punto delicato è il confine

Se l'effetto è una scrittura nello stesso database, registrare ricezione e modifica nella stessa transazione rende più semplice il recupero. Se bisogna chiamare un ERP, il commit locale non rende atomica anche quella chiamata.

In quel caso occorre un protocollo aggiuntivo: per esempio una chiave idempotente accettata dal destinatario, oppure uno stato persistente da riconciliare. Segnare «completato» prima dell'invio può perdere il lavoro; farlo dopo senza protezioni può duplicarlo.

## Una prova concreta

Invia la stessa consegna due volte, poi inviala contemporaneamente da due processi. Interrompi anche il flusso dopo il salvataggio e prima della risposta.

Il risultato atteso resta un solo ordine commerciale, con una traccia comprensibile dei tentativi. L'affidabilità si vede proprio quando la rete smette di collaborare.

## Fonti

- [Shopify — verifica delle consegne](https://shopify.dev/docs/apps/build/webhooks/verify-deliveries)
- [Rails — unicità e concorrenza](https://api.rubyonrails.org/classes/ActiveRecord/Validations/ClassMethods.html)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  {
    id: "verifica-validazione-requisiti",
    title: "Passa tutti i test. Ma risolve il problema giusto?",
    date: "2026-07-22",
    firstPublishedAt: "2026-11-03",
    category: "ingegneria",
    hub: "scienza-passioni",
    icon: "🔎",
    excerpt: "Un esportatore genera il CSV senza errori. Le colonne sono quelle richieste, il file si apre e tutti i test passano. Poi chi deve usarlo scopre che gli identificativi non…",
    tags: ["Ingegneria", "Requisiti"],
    content: `
Un esportatore genera il CSV senza errori. Le colonne sono quelle richieste, il file si apre e tutti i test passano. Poi chi deve usarlo scopre che gli identificativi non coincidono con quelli del gestionale. Il software è conforme alla specifica, ma il lavoro resta manuale.

Un approfondimento dello stesso percorso si trova in [La coda cresce? Conta anche il tempo che il lavoro passa dentro](/blog/legge-little-code-tempi-attesa) e [Quattro decimali non rendono una misura più affidabile](/blog/misure-incertezza-cifre-decimali). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

Questo esempio ipotetico spiega una distinzione dell'ingegneria dei sistemi che trovo utile anche nello sviluppo web: **verifica** e **validazione**.

## Due domande da tenere separate

Verificare significa raccogliere evidenze che il prodotto rispetta i requisiti. Validare significa controllare che, nelle condizioni previste, soddisfi il bisogno per cui è stato costruito. La NASA distingue esplicitamente questi due passaggi nel suo Systems Engineering Handbook.

Un test sul separatore del CSV verifica un requisito. Fare completare l'importazione a un operatore, con dati rappresentativi e nel suo ambiente, aiuta a validare il flusso. Entrambe le attività servono: una non sostituisce automaticamente l'altra.

## Partire dal risultato osservabile

Per l'esportatore scriverei due criteri distinti. Il primo: il file contiene tutte le righe e i campi concordati. Il secondo: l'operatore importa gli ordini senza ricopiare identificativi o modificare colonne a mano.

Così emergono prima domande che il solo codice non può risolvere. Quale sistema assegna il codice cliente? Come vengono rappresentati gli ordini annullati? Chi interviene quando un record viene rifiutato?

## La prova che conta

Non serve organizzare una simulazione enorme per ogni modifica. Serve scegliere un caso realistico, definire cosa dovrebbe accadere e guardare se accade davvero.

Quando dico «funziona», voglio sapere quale delle due cose ho dimostrato: che ho costruito ciò che era scritto, oppure che qualcuno riesce a raggiungere il proprio obiettivo. Per consegnare bene, mi servono entrambe.

## Fonti

- [NASA — verifica e validazione](https://www.nasa.gov/reference/2-4-distinctions-between-product-verification-and-product-validation/)

*Recupero editoriale luglio–novembre 2026.*
`,
  },
  /*
  {
    id: "overshoot-day-trogloditi",
    title: "Earth Overshoot Day: Trogloditi al volante e debiti incolmabili",
    date: "2026-04-22",
    icon: "🤬",
    content: `
Oggi sono incazzato nero. Non c'è spazio per le solite riflessioni sull'ingegneria del software o per le digressioni affascinanti sull'astrofisica. Oggi c'è solo spazio per il disgusto.

Stavo guidando e ascoltavo un episodio del podcast di Geopop sull'Earth Overshoot Day. Per chi vivesse sotto un sasso, è il giorno in cui l'umanità esaurisce ufficialmente tutte le risorse naturali che la Terra è in grado di rigenerare in un anno. In Italia cade circa il 3 maggio. Significa che dal 4 maggio in poi stiamo letteralmente rubando risorse al futuro. Stiamo raschiando il fondo del barile.

E proprio mentre ascolto dati allarmanti su come stiamo prosciugando il pianeta, si materializza davanti ai miei occhi l'apoteosi dell'ignoranza: l'energumeno nell'auto davanti a me abbassa il finestrino e lancia un mozzicone di sigaretta acceso in terra.

Vi giuro, mi è salito il sangue al cervello.

Siamo una specie di parassiti con la presunzione di essere padroni di casa. Ci facciamo venire gli attacchi di panico per l'inflazione, lo spread, le rate del mutuo, e sudiamo freddo se il bancomat ci rifiuta un prelievo da venti euro. Ma quando si tratta del nostro "conto corrente" biologico e planetario, agiamo come dei perfetti decerebrati.

> *"Tanto è solo una sigaretta, mica sto appiccando un incendio."*

Questa è la mentalità del troglodita medio. Quello che mi fa salire il veleno è la totale disconnessione tra il macro-disastro che stiamo vivendo e i micro-gesti da imbecille del signor Nessuno. Il tizio del finestrino non è un'eccezione, è il sintomo. È la personificazione di una società che non capisce il concetto di "limite". 

Se non riesci a concepire che accumulare questo ritardo ecologico anno dopo anno significa inevitabilmente schiantarsi a 200 all'ora contro un muro, non sei solo parte del problema: sei il muro stesso.

Oggi è così. L'unico "drop" che vorrei fare è prendere queste persone e buttarle direttamente nel cestino dell'umido. E probabilmente non andrebbero bene neanche come compost.
`
},*/
  {
    id: "principio-di-archimede-e-i-container-docker",
    title: "Docker: container, immagini e dipendenze isolate",
    date: "2026-03-31",
    updatedAt: "2026-11-11",
    category: "sviluppo-software",
    hub: "rails-backend",
    icon: "🐳",
    excerpt: "Come funzionano i container Docker, cosa isolano davvero e come creare un'immagine riproducibile senza confonderla con una macchina virtuale.",
    tags: ["Docker","Container","DevOps","Node.js"],
    content: `
Un progetto funziona sul computer di sviluppo e fallisce quando passa su un'altra macchina. Spesso la differenza è nell'ambiente: versione del runtime, dipendenze, variabili di configurazione o librerie di sistema. Docker permette di distribuire un'applicazione insieme a una parte definita di questo ambiente.

L'analisi si completa confrontando questa parte con [Variabili d'ambiente: evitare errori in produzione](/blog/quando-luniverso-ti-cambia-le-variabili-in-produzione) e [Ruby gem: packaging, dipendenze e versioni](/blog/ruby-creare-una-gem). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Container e macchine virtuali non sono la stessa cosa

Un container esegue processi isolati condividendo il kernel dell'host, dove l'architettura lo consente. Una macchina virtuale esegue invece un proprio sistema operativo guest. L'isolamento dei container non è assoluto: permessi, rete, file montati e gestione dei segreti richiedono configurazione. La metafora della nave che galleggia è utile solo fino a un certo punto: il container non elimina tutte le differenze tra ambienti.

## Come rendere riproducibile una build

Un Dockerfile definisce l'immagine a partire da un'immagine base, copia i file necessari e installa le dipendenze. Per Node.js è utile fissare una versione di runtime supportata, mantenere un lockfile e preferire un'installazione deterministica con **npm ci**. Un file .dockerignore evita di copiare node_modules, credenziali e artefatti locali.

L'immagine andrebbe costruita nella CI e testata prima del rilascio. In produzione, i segreti vanno forniti dall'ambiente di esecuzione, non inseriti nell'immagine. I volumi servono quando i dati devono sopravvivere al ciclo di vita del container.

## Quando ha senso usarlo

Docker è utile per uniformare sviluppo, test e deploy, ma introduce un livello di configurazione da mantenere. Un semplice progetto statico può non averne bisogno. Prima di adottarlo, verifica cosa devi riprodurre: dipendenze, servizi collegati, versione del database o strumenti di build.

**Fonti**

- [Docker Docs — panoramica dei container](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/)
- [Docker Docs — best practice per Dockerfile](https://docs.docker.com/build/building/best-practices/)
`
  },
  {
    id: "forza-di-attrito-e-la-ux-dei-form",
    title: "Form UX: ridurre l'abbandono e gli errori",
    date: "2026-04-15",
    updatedAt: "2026-11-11",
    category: "sviluppo-software",
    hub: "react-frontend",
    icon: "🛹",
    excerpt: "Etichette chiare, campi essenziali, messaggi di errore e accessibilità: come migliorare un form senza affidarsi a trucchi visivi.",
    tags: ["UX","Form","Accessibilità","Conversione"],
    content: `
Ogni campo aggiuntivo chiede tempo, attenzione e informazioni. In un modulo di contatto o durante il checkout, la complessità può aumentare gli errori e scoraggiare la compilazione. Non basta però ridurre il numero dei campi: occorre chiedere le informazioni corrette, nel momento opportuno.

Un confronto utile per questa soluzione è quello con [Bundle JavaScript: ridurre il peso iniziale](/blog/equazione-del-razzo-e-il-problema-del-bundle-da-830kb) e [Fetch API: errori HTTP, timeout e abort](/blog/javascript-fetch-api). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Prima il compito dell'utente

Identifica lo scopo del form. Per un primo contatto possono bastare un recapito e una descrizione della richiesta; per una spedizione sono indispensabili altri dati. Evita i campi obbligatori che non servono al completamento del compito e spiega chiaramente quali informazioni sono necessarie.

Un placeholder non sostituisce un'etichetta visibile. Usa label associate ai controlli, suggerimenti persistenti quando la compilazione è complessa e tipi di input appropriati. Il comportamento deve funzionare anche da tastiera e con tecnologie assistive.

## Errori che aiutano a correggere

Un messaggio generico come «Dati non validi» costringe a indovinare. Meglio indicare il campo interessato e il vincolo violato, conservando quanto già inserito. La validazione nel browser migliora l'esperienza, ma non sostituisce la validazione lato server.

## Come misurare il risultato

Definisci un evento di avvio, uno di invio e uno di errore. Confronta completamenti ed errori prima e dopo la modifica, tenendo conto di dispositivo, traffico e intenzione dell'utente. Una modifica esteticamente gradevole non è automaticamente un miglioramento: servono osservazioni e test.

**Fonti**

- [W3C WAI — istruzioni per i form](https://www.w3.org/WAI/tutorials/forms/instructions/)
- [W3C WAI — identificazione degli errori](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)
`
  },
  {
    id: "principio-di-inerzia-e-la-sindrome-del-non-toccare",
    title: "Legacy code: come intervenire senza regressioni",
    date: "2026-04-17",
    updatedAt: "2026-11-11",
    category: "sviluppo-software",
    hub: "react-frontend",
    icon: "🍏",
    excerpt: "Strategia per modificare codice legacy con test di caratterizzazione, piccoli cambiamenti e osservabilità, senza riscrivere tutto.",
    tags: ["Legacy code","Refactoring","Testing","Manutenzione software"],
    content: `
Il codice legacy non è necessariamente vecchio o scritto male: è soprattutto codice che oggi è difficile modificare con sicurezza. Può contenere regole di business che nessuno ha documentato o dipendenze che emergono soltanto quando si cambia un comportamento.

Per considerare anche gli effetti sull'interfaccia, approfondisci [Rubber duck debugging: capire i bug spiegandoli](/blog/la-paperella-di-gomma-e-larte-di-sentirsi-stupidi) e [CSS globale: specificità e regressioni](/blog/teoria-del-caos-effetto-farfalla-e-css-globale). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Prima di modificare, capire

Parti dal flusso visibile all'utente o dal processo che devi correggere. Individua ingressi, uscite, effetti collaterali e sistemi esterni. Se non hai test, introduci piccoli test di caratterizzazione: descrivono il comportamento attuale, anche quando non è quello ideale. Servono come rete di sicurezza per una modifica mirata.

## Ridurre la superficie del cambiamento

Preferisci interventi piccoli e verificabili a una riscrittura totale. Isola le dipendenze complesse dietro interfacce esplicite, conserva un percorso di rollback e misura gli effetti. Una nuova architettura che replica gli stessi bug senza monitoraggio non ha risolto il problema.

Le revisioni del codice dovrebbero distinguere refactoring e cambiamento funzionale. Quando vengono mescolati, è più difficile capire cosa ha causato una regressione.

## Quando riscrivere

Una riscrittura può essere giustificata se costi di manutenzione, rischi o vincoli tecnologici sono documentati. Prima, considera una migrazione graduale: sostituisci un comportamento alla volta e confronta gli output. L'obiettivo non è avere codice «nuovo», ma un sistema che si possa evolvere e verificare.

**Fonti**

- [Martin Fowler — Strangler Fig Application](https://martinfowler.com/bliki/StranglerFigApplication.html)
- [GitHub Docs — code review](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests)
`
  },
  {
    id: "dilatazione-temporale-interstellar-e-optimistic-ui",
    title: "Optimistic UI: gestire latenza e rollback",
    date: "2026-04-18",
    updatedAt: "2026-11-11",
    category: "sviluppo-software",
    hub: "react-frontend",
    icon: "⏳",
    excerpt: "Interfacce ottimistiche: aggiornare lo stato prima della risposta server, gestire gli errori e riconciliare i dati senza mostrare successi falsi.",
    tags: ["React","Optimistic UI","Latenza","Frontend"],
    content: `
Un'interfaccia può sembrare lenta anche quando il server impiega soltanto qualche centinaio di millisecondi. Un aggiornamento ottimistico mostra subito il risultato previsto di un'azione mentre la richiesta di rete è ancora in corso.

Per considerare anche gli effetti sull'interfaccia, approfondisci [React: il totale del carrello deve davvero stare nello state?](/blog/react-stato-derivato-carrello) e [CDN e latenza: perché la distanza conta](/blog/velocita-della-luce-ping-e-content-delivery-network). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## La differenza fra intenzione e conferma

Quando un utente mette «Mi piace», l'interfaccia può aggiornarsi immediatamente. Ma il dato sul server non è ancora stato confermato. Devi quindi distinguere uno stato provvisorio da uno definitivo. Se l'operazione fallisce, ripristina il valore precedente e spiega il problema senza perdere il contesto.

L'aggiornamento ottimistico non è adatto a ogni azione. Pagamenti, eliminazioni irreversibili e operazioni con effetti importanti richiedono conferme esplicite.

## Concorrenza e richieste fuori ordine

Immagina due modifiche successive allo stesso elemento. La seconda richiesta può terminare prima della prima: applicare semplicemente ogni risposta può riportare l'interfaccia a uno stato precedente. Associa ogni risposta all'operazione che l'ha prodotta, gestisci le versioni e definisci una politica di riconciliazione.

## Verificare l'esperienza

Simula una rete lenta, errori HTTP e richieste contemporanee. Controlla il comportamento con tastiera e screen reader, le indicazioni di caricamento e l'eventuale rollback. La percezione di rapidità è utile soltanto se non compromette la fiducia nell'interfaccia.

**Fonti**

- [React — useOptimistic](https://react.dev/reference/react/useOptimistic)
- [MDN — Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
`
  },
  {
    id: "radiazione-di-fondo-e-il-cimitero-dei-console-log",
    title: "Logging JavaScript: cosa registrare e cosa evitare",
    date: "2026-04-19",
    updatedAt: "2026-11-11",
    category: "sviluppo-software",
    hub: "react-frontend",
    icon: "📡",
    excerpt: "I log possono chiarire un guasto, ma una quantità indiscriminata di messaggi rende più difficile individuare il problema. La console del browser è utile in sviluppo; in…",
    tags: ["JavaScript","Logging","Debugging","Osservabilità"],
    content: `
I log possono chiarire un guasto, ma una quantità indiscriminata di messaggi rende più difficile individuare il problema. La console del browser è utile in sviluppo; in produzione servono segnali intenzionali e una politica di raccolta.

Nel frontend lo stesso problema si collega a [Bundle JavaScript: ridurre il peso iniziale](/blog/equazione-del-razzo-e-il-problema-del-bundle-da-830kb) e [JavaScript closure: scope e variabili catturate](/blog/javascript-closure-spiegate-bene). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Un log deve rispondere a una domanda

Registra l'evento, il contesto minimo necessario e l'esito. Per esempio, un errore nella sincronizzazione di un ordine dovrebbe identificare l'operazione e la tipologia di errore, non riportare l'intero payload con dati personali o segreti.

Distingui i livelli: debug per l'indagine locale, info per eventi significativi, warn per condizioni anomale ma recuperabili, error per guasti che richiedono attenzione. Evita che una procedura periodica produca migliaia di messaggi identici.

## Correlare senza esporre dati

Un identificativo di richiesta permette di seguire un'operazione tra frontend, backend e servizio esterno. Non usare token, cookie o credenziali come identificatori. Per i messaggi destinati a sistemi di raccolta, preferisci campi strutturati rispetto a stringhe create concatenando oggetti.

## Dal log al monitoraggio

Una metrica aggregata può segnalare un aumento degli errori; i log servono per analizzare casi specifici. Definisci soglie e periodi di conservazione. Quando aggiungi un nuovo evento, verifica anche quanto può costare raccoglierlo e se davvero aiuta durante un incidente.

**Fonti**

- [OpenTelemetry — log e correlazione](https://opentelemetry.io/docs/concepts/signals/logs/)
- [OWASP — Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)
`
  },
  {
    id: "entanglement-quantistico-e-i-disastri-del-global-state",
    title: "React state: evitare dipendenze globali inutili",
    date: "2026-04-20",
    updatedAt: "2026-11-11",
    category: "sviluppo-software",
    hub: "react-frontend",
    icon: "🔗",
    excerpt: "Quando usare stato locale, Context e store condivisi in React, distinguendo dati derivati, server state e aggiornamenti concorrenti.",
    tags: ["React","State management","Context","Architettura frontend"],
    content: `
Quando molti componenti dipendono dallo stesso stato, una modifica può produrre effetti inattesi. Il problema non è la condivisione in sé, ma la proprietà poco chiara dei dati e l'accoppiamento fra componenti che non dovrebbero conoscersi.

Un confronto utile per questa soluzione è quello con [React: il totale del carrello deve davvero stare nello state?](/blog/react-stato-derivato-carrello) e [React memory leak: cleanup di effetti e listener](/blog/conservazione-della-massa-e-memory-leaks-in-react). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Conserva lo stato vicino a chi lo usa

Una selezione temporanea o l'apertura di una finestra possono restare nello stato locale. Sposta lo stato verso un antenato comune quando più componenti devono sincronizzarsi. Context distribuisce un valore nella gerarchia, ma non è automaticamente un database né sostituisce una strategia per gli aggiornamenti.

Evita di salvare valori che puoi calcolare dai dati già disponibili: il totale di un carrello è spesso derivabile dalle righe e dalle quantità. Duplicare le informazioni obbliga a mantenerle coerenti.

## Distinguere stato client e server

Dati provenienti da API possono diventare obsoleti, fallire o arrivare fuori ordine. Definisci invalidazione, gestione degli errori e riconciliazione. Non copiare indiscriminatamente ogni risposta di rete in uno store globale.

## Come decidere

Scrivi chi modifica ciascun dato, chi lo legge e quanto deve vivere. Se più aggiornamenti concorrenti sono possibili, scegli un modello di transizione prevedibile. Le librerie aggiuntive possono aiutare, ma una gerarchia di stato chiara vale più dell'aggiunta precoce di un nuovo strumento.

**Fonti**

- [React — Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure)
- [React — Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
`
  },
  {
    id: "velocita-della-luce-ping-e-content-delivery-network",
    title: "CDN e latenza: perché la distanza conta",
    date: "2026-04-21",
    updatedAt: "2026-11-11",
    category: "sviluppo-software",
    hub: "react-frontend",
    icon: "⚡",
    excerpt: "Una richiesta HTTP attraversa una rete fatta di tratte, apparati e server. La velocità di propagazione impone un limite fisico, ma la latenza reale comprende anche…",
    tags: ["CDN","Latenza","Caching","Web Performance"],
    content: `
Una richiesta HTTP attraversa una rete fatta di tratte, apparati e server. La velocità di propagazione impone un limite fisico, ma la latenza reale comprende anche instradamento, code, negoziazione della connessione e tempo di elaborazione.

Nel frontend lo stesso problema si collega a [Optimistic UI: gestire latenza e rollback](/blog/dilatazione-temporale-interstellar-e-optimistic-ui) e [Bundle JavaScript: ridurre il peso iniziale](/blog/equazione-del-razzo-e-il-problema-del-bundle-da-830kb). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Cosa può fare una CDN

Una Content Delivery Network distribuisce copie di risorse cacheabili su nodi più vicini agli utenti. File statici, immagini e asset versionati sono candidati naturali. Una cache hit evita il percorso completo fino al server di origine; una cache miss continua invece a richiederlo.

La CDN non velocizza automaticamente tutte le API. Endpoint personalizzati, contenuti privati e pagine dinamiche hanno regole diverse e possono non essere cacheabili.

## Configurazione e rischi

Le intestazioni Cache-Control determinano per quanto tempo una risposta può essere riutilizzata. Un asset immutabile con nome versionato può avere una durata lunga; un documento HTML che cambia spesso richiede una politica differente.

Prima di aggiungere caching, chiarisci cosa deve succedere quando pubblichi una modifica. Una configurazione aggressiva senza invalidazione può distribuire informazioni obsolete.

## Misura l'effetto

Confronta TTFB, hit ratio e tempi osservati da regioni diverse. Distingui laboratorio e utenti reali. Se il tempo dominante è nel database o nell'elaborazione del backend, avvicinare i file statici non risolve quel collo di bottiglia.

**Fonti**

- [MDN — HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)
- [web.dev — Time to First Byte](https://web.dev/articles/ttfb)
`
  },
  {
    id: "gatto-di-schrodinger-e-allucinazioni-ia",
    title: "AI coding assistant: verificare codice e suggerimenti",
    date: "2026-04-16",
    updatedAt: "2026-11-11",
    category: "sviluppo-software",
    hub: "rails-backend",
    icon: "🐈",
    excerpt: "Come controllare le risposte degli assistenti AI nel coding con test, documentazione, review e verifiche di sicurezza.",
    tags: ["AI coding","Testing","Code review","Sicurezza"],
    content: `
Un assistente AI può accelerare la scrittura di bozze, test o spiegazioni, ma non conosce automaticamente i vincoli reali del progetto. Un suggerimento plausibile può contenere API inesistenti, errori di compatibilità o assunzioni sbagliate sui dati.

Un caso correlato, utile per definire i confini della soluzione, è [Git merge conflict: come risolverlo senza perdere codice](/blog/principio-di-esclusione-di-pauli-e-i-conflitti-git) e [Stime software: scadenze, rischi e compromessi](/blog/non-puoi-negoziare-con-la-gravita-space-force-e-le-scadenze-assurde). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Trattare l'output come una proposta

Prima di integrare codice generato, verifica che le librerie esistano nella versione in uso e che i metodi citati siano documentati. Controlla gli input limite, i percorsi di errore e le operazioni che modificano dati. Una risposta formulata con sicurezza non è una prova.

## Un processo minimo di validazione

Prepara un test che riproduca il requisito. Esegui typecheck, test unitari e integrazioni pertinenti. Confronta l'implementazione con le guide ufficiali e fai code review delle modifiche, soprattutto quando coinvolgono autorizzazioni, query, accesso a file o chiamate esterne.

I test sono necessari ma non sufficienti: una suite incompleta può confermare una soluzione che implementa il requisito sbagliato.

## Dati e responsabilità

Non inviare credenziali, dati personali o codice riservato a strumenti senza una valutazione delle regole di utilizzo. Mantieni tracciabili le decisioni tecniche e attribuisci agli sviluppatori la verifica finale.

**Fonti**

- [GitHub Docs — responsible use of Copilot](https://docs.github.com/en/copilot/responsible-use)
- [OWASP — Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/)
`
},
  {
    id: "shopify-custom-fields-app-vs-codice-nativo",
    title: "Shopify line item properties: campi personalizzati",
    date: "2026-04-14",
    updatedAt: "2026-11-11",
    category: "sviluppo-software",
    hub: "shopify-integrazioni",
    icon: "💸",
    excerpt: "Aggiungere campi personalizzati nel form prodotto Shopify con line item properties, distinguendoli dagli attributi del carrello.",
    tags: ["Shopify","Liquid","Line item properties","Product form"],
    content: `
Un prodotto può richiedere un testo da incidere, una dedica o un'informazione specifica per la singola riga d'ordine. Prima di installare un'app aggiuntiva, verifica se le **line item properties** native di Shopify risolvono il requisito.

La stessa decisione può incidere sulla sincronizzazione dei dati: leggi [Shopify GraphQL: il limite è un budget, non un invito a insistere](/blog/shopify-graphql-budget-query) e [Shopify, scorte e ordini: come evitare di sovrascrivere una vendita](/blog/shopify-inventario-scritture-concorrenti). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Come acquisire una proprietà nel product form

Shopify riconosce i campi con un attributo name nel formato **properties[Nome proprietà]** quando sono inviati insieme al form prodotto. Ecco un esempio essenziale per un tema Liquid:

~~~liquid
{% form 'product', product %}
  <label for="engraving">Testo da incidere</label>
  <input
    id="engraving"
    type="text"
    name="properties[Incisione]"
    maxlength="20"
  >
  <button type="submit">Aggiungi al carrello</button>
{% endform %}
~~~

Questo snippet è illustrativo: in un tema reale il form deve anche gestire la variante selezionata e le altre funzioni previste dalla sezione prodotto. La proprietà riguarda la singola riga; gli **attributes** del carrello hanno uno scopo diverso.

## Quando basta la funzionalità nativa

Per un campo semplice, la soluzione nativa può evitare una dipendenza esterna. Non significa che ogni app sia superflua: regole complesse, anteprime, sovrapprezzi, validazioni avanzate o integrazioni con sistemi produttivi richiedono una valutazione tecnica.

## Verifiche prima di pubblicare

Prova più varianti, quantità, carrelli AJAX e passaggi di checkout. Verifica che il dato sia visibile nella riga dell'ordine e disponibile ai processi downstream che devono usarlo. Il limite HTML maxlength migliora la UX, ma i controlli importanti non devono affidarsi soltanto al browser.

**Fonti**

- [Shopify Developer — line item properties](https://shopify.dev/docs/api/liquid/objects/line_item)
- [Shopify Developer — product template e form](https://shopify.dev/docs/storefronts/themes/architecture/templates/product/overview)
`
},
  {
    id: "principio-di-esclusione-di-pauli-e-i-conflitti-git",
    title: "Git merge conflict: come risolverlo senza perdere codice",
    date: "2026-04-12",
    updatedAt: "2026-11-11",
    category: "sviluppo-software",
    hub: "rails-backend",
    icon: "🔀",
    excerpt: "Che cosa causa un merge conflict in Git, come risolverlo e come evitare force push pericolosi sui branch condivisi.",
    tags: ["Git","Merge conflict","Branch","Code review"],
    content: `
Un conflitto di merge non significa che due sviluppatori hanno modificato lo stesso file nello stesso momento. Si verifica quando Git non riesce a combinare automaticamente modifiche concorrenti, per esempio sulle stesse righe o dopo una modifica strutturale.

L'analisi si completa confrontando questa parte con [AI coding assistant: verificare codice e suggerimenti](/blog/gatto-di-schrodinger-e-allucinazioni-ia) e [Rails: chiamare API esterne senza perdere affidabilità](/blog/rails-consumare-api-esterne). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Che cosa mostra Git

Durante il merge, Git può inserire marcatori che separano le due versioni in conflitto. Non devi conservarli nel sorgente finale: confronta il comportamento desiderato, scegli o combina le modifiche e risolvi eventuali dipendenze fra file.

Prima di procedere, controlla **git status** e il diff. Dopo la risoluzione, esegui i test e verifica che la versione risultante mantenga entrambe le funzionalità necessarie.

## Branch e aggiornamenti

I feature branch isolano il lavoro fino alla review, ma non eliminano i conflitti. Integrare regolarmente il branch principale può ridurne la dimensione. Un rebase riscrive la cronologia del branch: evita di farlo senza coordinamento su branch condivisi.

## Perché non forzare main

Un force push su un branch condiviso può sovrascrivere riferimenti a commit su cui altre persone stanno lavorando. Usa protezioni, pull request e controlli automatici dove possibile. La strategia migliore non è «mai avere conflitti», ma saperli risolvere in modo verificabile e senza perdere lavoro.

**Fonti**

- [GitHub Docs — About merge conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)
- [Git — git-merge](https://git-scm.com/docs/git-merge)
`
  },
  {
    id: "conservazione-della-massa-e-memory-leaks-in-react",
    title: "React memory leak: cleanup di effetti e listener",
    date: "2026-04-11",
    updatedAt: "2026-11-11",
    category: "sviluppo-software",
    hub: "react-frontend",
    icon: "💧",
    excerpt: "Come riconoscere risorse non liberate nei componenti React e correggerle con cleanup, AbortController e verifiche nel browser.",
    tags: ["React","Memory leak","useEffect","Performance"],
    content: `
Un componente React può registrare listener, avviare timer o aprire una connessione. Se queste risorse restano attive quando non servono più, aumentano il lavoro del browser e talvolta il consumo di memoria.

Per considerare anche gli effetti sull'interfaccia, approfondisci [React state: evitare dipendenze globali inutili](/blog/entanglement-quantistico-e-i-disastri-del-global-state) e [React: il totale del carrello deve davvero stare nello state?](/blog/react-stato-derivato-carrello). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Che cosa significa memory leak

Non ogni aggiornamento dopo uno smontaggio è una perdita di memoria. Il problema nasce quando riferimenti ancora attivi trattengono oggetti o avviano lavoro non necessario. Un listener registrato su window e mai rimosso può causare callback duplicate.

## Il cleanup degli effetti

Un effetto che crea risorse esterne dovrebbe restituire una funzione di pulizia: rimuovere gli eventi, chiudere le connessioni e cancellare gli intervalli. Una richiesta fetch può essere annullata con AbortController quando la risposta non è più pertinente.

In sviluppo React Strict Mode può aggiungere un ciclo di setup e cleanup per evidenziare comportamenti errati. La soluzione non è nascondere l'avviso, ma rendere l'effetto sicuro quando viene riavviato.

## Verifica nel browser

Usa il pannello Memory, controlla listener duplicati e ripeti la navigazione fra pagine. Osserva se le risorse tornano a stabilizzarsi. Ridurre i componenti non corregge una connessione aperta senza cleanup.

**Fonti**

- [React — useEffect](https://react.dev/reference/react/useEffect)
- [MDN — Memory management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Memory_management)
`
  },
  {
    id: "relativita-del-tempo-e-timezone-nei-database",
    title: "Date e timezone nei database: UTC e ora locale",
    date: "2026-04-10",
    updatedAt: "2026-11-11",
    category: "sviluppo-software",
    hub: "rails-backend",
    icon: "🕰️",
    excerpt: "Differenza fra istanti UTC, orari locali e zone IANA; come evitare bug con data e ora legale tra database, API e browser.",
    tags: ["Database","Timezone","UTC","JavaScript"],
    content: `
Le date sono una fonte frequente di bug: un evento alle 09:00 può apparire a un'ora diversa quando passa fra browser, API e database. Serve distinguere un istante preciso da un orario civile locale.

Per valutare l'effetto di questa scelta sul backend, considera anche [Rails Active Record: modelli, query e SQL](/blog/rails-activerecord-le-basi) e [Rails: validates uniqueness non ferma due richieste contemporanee](/blog/rails-unicita-database-concorrenza). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Istanti e appuntamenti ricorrenti

Un timestamp di un evento passato identifica un istante. Un appuntamento «ogni lunedì alle 09:00 a Roma» richiede invece una zona geografica, perché l'offset UTC cambia con l'ora legale. Conserva la zona IANA, come Europe/Rome, quando l'intenzione dipende dall'orario locale.

## Due errori frequenti

Una stringa senza offset può essere interpretata diversamente da parser e ambienti. Aggiungere 24 ore a un istante non equivale sempre a passare al giorno successivo del calendario locale. Non confondere il formato visualizzato con il dato conservato.

## Test di confine

Verifica le transizioni dell'ora legale, gli utenti in zone differenti e i round-trip tra API e database. Nei log usa istanti non ambigui; nell'interfaccia formatta la data nella zona prevista dal requisito.

**Fonti**

- [MDN — Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [MDN — Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
`
  },
  {
    id: "teoria-del-caos-effetto-farfalla-e-css-globale",
    title: "CSS globale: specificità e regressioni",
    date: "2026-04-08",
    updatedAt: "2026-11-11",
    category: "sviluppo-software",
    hub: "react-frontend",
    icon: "🦋",
    excerpt: "Una modifica a un selettore CSS può cambiare componenti lontani dalla pagina su cui stai lavorando. Non è caos matematico, ma il comportamento prevedibile della cascade…",
    tags: ["CSS","Cascade","Specificità","Frontend"],
    content: `
Una modifica a un selettore CSS può cambiare componenti lontani dalla pagina su cui stai lavorando. Non è caos matematico, ma il comportamento prevedibile della cascade quando le regole sono troppo ampie.

Nel frontend lo stesso problema si collega a [Optimistic UI: gestire latenza e rollback](/blog/dilatazione-temporale-interstellar-e-optimistic-ui) e [React: il totale del carrello deve davvero stare nello state?](/blog/react-stato-derivato-carrello). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Perché una modifica si propaga

Regole come button o article agiscono su molti elementi. Specificità, ordine delle dichiarazioni, origine degli stili e cascade layers determinano quale proprietà prevale. Aggiungere selettori sempre più specifici può nascondere il problema anziché risolverlo.

## Isolare gli stili

Preferisci classi con responsabilità riconoscibili e componenti con convenzioni coerenti. CSS Modules e altre tecniche di isolamento possono ridurre le collisioni, ma non sostituiscono una buona organizzazione. Un reset globale va mantenuto solo quando è intenzionale.

## Verificare il risultato

Prova componenti riutilizzati in pagine differenti, inclusi pulsanti, campi e dialoghi. Screenshot comparison e test visuali aiutano a intercettare variazioni inattese; DevTools permette di capire quale regola ha prevalso.

**Fonti**

- [MDN — Cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Cascade)
- [MDN — Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity)
`
  },
  {
    id: "legge-di-gravitazione-universale-e-i-legacy-code",
    title: "Legacy code e accoppiamento tra moduli",
    date: "2026-04-13",
    updatedAt: "2026-11-11",
    category: "sviluppo-software",
    hub: "rails-backend",
    icon: "🪐",
    excerpt: "Individuare le dipendenze e introdurre confini testabili per ridurre la complessità del codice legacy.",
    tags: ["Legacy code","Coupling","Refactoring","Architettura"],
    content: `
Quando una modifica richiede interventi su molti moduli non correlati, il costo della manutenzione cresce. La metafora della gravità descrive la sensazione di essere trascinati nel sistema, ma il problema ingegneristico è l'accoppiamento.

Un caso correlato, utile per definire i confini della soluzione, è [Debito tecnico: come migliorare la manutenibilità](/blog/entropia-del-codice) e [Rails MVC: Model, View e Controller](/blog/rails-mvc-in-tre-minuti). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Individuare le dipendenze

Segui il percorso di una richiesta fino agli effetti sui dati. Elenca import, chiamate esterne, accessi al database e side effect. Distingui dipendenze necessarie da quelle introdotte per comodità.

## Introdurre confini

Un adapter può isolare una chiamata esterna; un test di integrazione verifica il contratto tra due moduli. Non creare astrazioni solo per ridurre il numero di import: verifica se consentono effettivamente di cambiare una parte senza romperne altre.

## Refactoring graduale

Prima di intervenire, proteggi il comportamento con un test. Scegli una modifica piccola e verificabile. Un monolite ben strutturato può essere più semplice di microservizi che introducono contratti e guasti distribuiti.

**Fonti**

- [Martin Fowler — Refactoring](https://martinfowler.com/books/refactoring.html)
- [GitHub Docs — code review](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests)
`
},
  {
    id: "non-puoi-negoziare-con-la-gravita-space-force-e-le-scadenze-assurde",
    title: "Stime software: scadenze, rischi e compromessi",
    date: "2026-04-09",
    updatedAt: "2026-11-11",
    category: "sviluppo-software",
    hub: "rails-backend",
    icon: "🚀",
    excerpt: "Come stimare un progetto software considerando dipendenze, incertezza, test e ambito senza nascondere il rischio.",
    tags: ["Stime software","Project management","Testing","Rischi"],
    content: `
Una scadenza può essere negoziabile, ma il lavoro necessario a garantire un risultato affidabile dipende da vincoli reali: integrazioni, test, revisioni e distribuzione. Promettere una data senza valutarli non rende il lavoro più breve.

Un caso correlato, utile per definire i confini della soluzione, è [Debito tecnico: come migliorare la manutenibilità](/blog/entropia-del-codice) e [Debugging: metodo per trovare bug riproducibili](/blog/effetto-osservatore-fisica-quantistica-e-l-arte-del-debugging). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Una stima ha assunzioni

Scomponi il risultato in attività verificabili. Separa lavoro noto da incognite come API poco documentate o dipendenze da fornitori. Comunica esplicitamente intervalli, vincoli e rischi invece di presentare una cifra come certezza.

## Ridurre l'ambito in sicurezza

Quando il tempo cambia, chiarisci quali funzioni sono indispensabili. Saltare test o controlli di deploy aumenta il rischio. Un MVP resta utile soltanto se soddisfa i requisiti minimi del suo scopo.

## Comunicare i cambiamenti

Rendi visibili gli impedimenti non appena emergono: ambienti non disponibili, requisiti incompleti, sistemi esterni in errore. Aggiorna le previsioni quando cambiano i fatti, anziché difendere la prima stima.

**Fonti**

- [Atlassian — Agile estimation](https://www.atlassian.com/agile/project-management/estimation)
- [Google SRE — Embracing Risk](https://sre.google/sre-book/embracing-risk/)
`
  },
  {
    id: "entropia-del-codice",
    title: "Debito tecnico: come migliorare la manutenibilità",
    date: "2026-04-06",
    updatedAt: "2026-11-11",
    category: "sviluppo-software",
    hub: "rails-backend",
    icon: "🔑",
    excerpt: "Il software non si deteriora fisicamente come un componente meccanico. Aumentano però le dipendenze, cambiano le librerie e diventano più difficili da ricostruire le…",
    tags: ["Technical debt","Refactoring","Manutenibilità","Testing"],
    content: `
Il software non si deteriora fisicamente come un componente meccanico. Aumentano però le dipendenze, cambiano le librerie e diventano più difficili da ricostruire le decisioni precedenti. «Entropia del codice» è una metafora, non una legge tecnica.

Un caso correlato, utile per definire i confini della soluzione, è [Stime software: scadenze, rischi e compromessi](/blog/non-puoi-negoziare-con-la-gravita-space-force-e-le-scadenze-assurde) e [Legacy code e accoppiamento tra moduli](/blog/legge-di-gravitazione-universale-e-i-legacy-code). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Come cresce il debito tecnico

Una scorciatoia può introdurre una seconda fonte di verità o un caso speciale. Se ogni modifica aggiunge un'eccezione, aumentano i percorsi da verificare. L'assenza di ownership rende più difficile decidere quali comportamenti conservare.

## Come intervenire

Proteggi con test i componenti che cambiano spesso, documenta le decisioni importanti e riduci le dipendenze inutili. Il refactoring deve mantenere il comportamento esterno mentre migliora la struttura interna.

## Indicatori utili

Tempi di risoluzione dei bug, frequenza delle regressioni e tempi di review possono aiutare a capire dove intervenire. Non trasformare il numero di righe in un obiettivo: meno codice non significa necessariamente meno complessità.

**Fonti**

- [Martin Fowler — Technical Debt Quadrant](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html)
- [Google Engineering Practices](https://google.github.io/eng-practices/review/)
`
  },
  {
    id: "equazione-del-razzo-e-il-problema-del-bundle-da-830kb",
    title: "Bundle JavaScript: ridurre il peso iniziale",
    date: "2026-04-05",
    updatedAt: "2026-11-11",
    category: "sviluppo-software",
    hub: "react-frontend",
    icon: "🧮",
    excerpt: "Come ottimizzare il bundle JavaScript con code splitting, import dinamici e misurazioni di rete e CPU.",
    tags: ["JavaScript","Bundle size","Code splitting","Web Performance"],
    content: `
Un bundle grande può aumentare download, parsing ed esecuzione, soprattutto su dispositivi mobili meno potenti. Il peso trasferito non è l'unico costo: uno script compresso richiede comunque lavoro sul dispositivo.

Nel frontend lo stesso problema si collega a [JavaScript ES modules: import, export e bundle](/blog/javascript-moduli-es-import-export) e [JavaScript closure: scope e variabili catturate](/blog/javascript-closure-spiegate-bene). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Misurare prima

Controlla risorse iniziali, dipendenze e tempi di esecuzione con DevTools e un bundle analyzer. Un rallentamento può dipendere dal JavaScript, ma anche dalla rete, dal server o dalle immagini.

## Caricare il codice quando serve

Route-based code splitting e import dinamici rimandano funzionalità non necessarie alla pagina corrente. Evita di includere nel bundle iniziale librerie utilizzate soltanto in sezioni secondarie. Verifica però che il lazy loading non peggiori il passaggio fra pagine.

## HTML e indicizzazione

Il prerendering rende disponibile il contenuto importante senza aspettare tutta l'esecuzione React. Per valutare l'intervento misura tempi di rendering, LCP e INP, non soltanto i kilobyte generati dalla build.

**Fonti**

- [web.dev — JavaScript performance](https://web.dev/learn/performance/optimize-javascript)
- [web.dev — code splitting](https://web.dev/articles/reduce-javascript-payloads-with-code-splitting)
`
  },
  {
    id: "effetto-osservatore-fisica-quantistica-e-l-arte-del-debugging",
    title: "Debugging: metodo per trovare bug riproducibili",
    date: "2026-04-07",
    updatedAt: "2026-11-11",
    category: "sviluppo-software",
    hub: "rails-backend",
    icon: "⚛",
    excerpt: "Durante il debugging un log può cambiare il timing, e un breakpoint può nascondere una race condition. Non serve invocare la fisica quantistica: stai modificando il sistema…",
    tags: ["Debugging","Testing","Logging","Software engineering"],
    content: `
Durante il debugging un log può cambiare il timing, e un breakpoint può nascondere una race condition. Non serve invocare la fisica quantistica: stai modificando il sistema mentre lo osservi.

Per valutare l'effetto di questa scelta sul backend, considera anche [Debito tecnico: come migliorare la manutenibilità](/blog/entropia-del-codice) e [Stime software: scadenze, rischi e compromessi](/blog/non-puoi-negoziare-con-la-gravita-space-force-e-le-scadenze-assurde). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Riprodurre il problema

Registra input, ambiente, versione e risultato atteso. Riduci il caso alla sequenza minima che provoca il difetto. Confronta permessi, dipendenze e dati se accade solo in produzione, senza esporre informazioni sensibili.

## Verificare un'ipotesi alla volta

Cambia una variabile per volta. Log, metriche e tracce possono aiutare a individuare un errore, ma il componente che lo segnala non è sempre quello che lo genera. Distinguere correlazione e causa evita correzioni casuali.

## Chiudere il ciclo

Inserisci un test di regressione, controlla scenari vicini e conserva le informazioni diagnostiche utili. Una patch non è completa se non sai dimostrare che il difetto è stato corretto.

**Fonti**

- [Chrome DevTools — Debug JavaScript](https://developer.chrome.com/docs/devtools/javascript/)
- [OpenTelemetry — traces](https://opentelemetry.io/docs/concepts/signals/traces/)
`
  },
  { 
    id: "la-sindrome-del-funzionava-sulla-mia-macchina", 
    title: "La Sindrome del \"Funzionava sulla mia macchina!\"", 
    icon: "🤖",
    date: "2026-04-04",
    category: "sviluppo-software",
    hub: "rails-backend",
    content: ` 
Vi è mai capitato di fare una simulazione d'esame seduti comodamente sul divano di casa, in pigiama, e sentirvi dei geni assoluti, per poi fare scena muta il giorno del test vero e proprio? 

A me è successo. Ed è in quel momento che ho capito che l'università e lo sviluppo software condividono una delle maledizioni più antiche del mondo informatico: la sindrome del *"Sul mio computer funzionava!"*.

## Localhost vs Produzione
Quando sviluppi un'applicazione web sul tuo computer, sei in un ambiente protetto che chiamiamo \`localhost\`. È il tuo divano. Hai tutte le librerie installate, il database ha esattamente i dati che ti aspetti, la connessione è istantanea e nessuno sta cercando di cliccare su dieci bottoni contemporaneamente.

Ma prima o poi, il tuo codice deve andare in "Produzione", ovvero sul server reale accessibile a tutti. La Produzione è l'aula d'esame. È un ambiente spietato, pieno di variabili impreviste, reti instabili e utenti imprevedibili.

## Il Fango delle Variabili d'Ambiente
Qualche tempo fa stavo lavorando al mio sito personale in React + Vite. In locale era una scheggia. Le animazioni erano fluide, il fetch dei dati perfetto. Mi sentivo invincibile. Faccio il push del codice e avvio il deploy su Vercel. 

Apro il link pubblico e... pagina bianca. Il network tab del browser era un cimitero di errori 404 (Not Found). 

Panico totale. *"Ma come? Sul mio computer funziona perfettamente!"*. Ho perso un'ora a rileggere componenti che non avevano alcun problema. Il vero colpevole? Mi ero dimenticato di impostare le variabili d'ambiente (le API keys) sul pannello di Vercel. Il mio codice in locale le leggeva da un file protetto che, giustamente, non viene inviato al server. In produzione, l'applicazione stava cercando di connettersi al nulla.

## Il Takeaway
Che tu stia preparando Analisi Matematica o configurando un server, non fidarti mai del tuo ambiente protetto. 

Fare gli esercizi con il libro aperto o il codice sorgente già configurato ti dà un falso senso di sicurezza. Devi sforzarti di testare le tue conoscenze (e il tuo software) nelle condizioni più vicine possibili alla realtà. Fai deploy frequenti fin dal primo giorno e prova a fare le simulazioni d'esame senza appunti. Il mondo reale non perdona, ma insegna tantissimo.
` 
  },
  { 
    id: "chi-ha-scritto-questa-roba", 
    title: "\"Chi ha scritto questa roba?\": Appunti e Debito Tecnico", 
    icon: "📝",
    date: "2026-03-30",
    category: "sviluppo-software",
    hub: "rails-backend",
    content: ` 
L'altro giorno ho ripreso in mano i miei appunti di Fisica per un ripasso veloce prima di un test. Ho fissato la pagina per buoni dieci minuti, cercando di decifrare una formula circondata da frecce caotiche e note a margine mezza cancellate. 

Ho pensato: *"Ma chi diavolo ha scritto questa roba? Sembra arabo."* Poi ho realizzato con orrore che la grafia era la mia.

Questo fenomeno di totale alienazione verso il lavoro del "Te Stesso" del passato è il fulcro di uno dei concetti più importanti dell'Ingegneria Informatica: il Debito Tecnico.

## Scrivere per l'Oggi vs Scrivere per il Domani
Quando siamo di fretta—magari a ridosso di una scadenza lavorativa o mentre il professore spiega troppo velocemente—il nostro unico obiettivo è portare a casa il risultato. Prendiamo appunti disordinati o scriviamo codice appena sufficiente a far funzionare le cose.

In programmazione, questo compromesso si chiama Debito Tecnico. Ottieni un vantaggio immediato (finisci il task oggi), ma contrai un "debito" con il futuro. Prima o poi, gli interessi andranno pagati, e si pagheranno in ore di frustrazione cercando di capire cosa stavi pensando in quel momento.

## Il Fango del Codice Illeggibile
Mesi fa, per un progetto freelance, dovevo integrare alcune API di Shopify in un backend Ruby on Rails. Il cliente aveva fretta. Ho creato un controller enorme, scritto tutto di getto, usando nomi di variabili orribili come \`data1\`, \`temp_val\` e \`x\`. Niente commenti. Ha funzionato al primo colpo. Mi sono dato una pacca sulla spalla e ho chiuso il file.

Settimana scorsa, mi chiedono una piccola modifica a quella logica. Apro il file e mi trovo davanti un muro di codice incomprensibile. Ho dovuto letteralmente fare *reverse engineering* del mio stesso software per capire cosa facesse la variabile \`x\`. Una modifica da venti minuti mi ha rubato mezza giornata. Gli interessi del debito tecnico avevano bussato alla porta.

## Il Takeaway
Il codice che scrivi oggi, o gli appunti che prendi a lezione, raramente servono per l'immediato. Servono per la manutenzione futura.

Usa nomi di variabili che abbiano senso (meglio \`user_cart_total\` che \`uct\`). Lascia un commento se una logica è complessa. Riscrivi quegli appunti in bella copia finché hai il concetto fresco in testa. Smettila di programmare o studiare solo per finire la giornata: inizia a fare un favore al Te Stesso di tra sei mesi. Ti ringrazierà.
` 
  },
  { 
    id: "i-messaggi-di-errore-non-ti-stanno-giudicando", 
    title: "I Messaggi di Errore Non Ti Stanno Giudicando", 
    icon: "⚠️",
    date: "2026-03-15",
    category: "sviluppo-software",
    hub: "rails-backend",
    content: ` 
Esiste un riflesso incondizionato che colpisce quasi tutti gli studenti e i programmatori junior: la reazione di panico davanti al rosso.

Può essere un esame universitario restituito dal professore pieno di correzioni a penna rossa, oppure il terminale che improvvisamente si riempie di uno *stack trace* chilometrico color cremisi scuro. L'istinto umano è sempre lo stesso: un tuffo al cuore, le mani che si staccano dalla tastiera e il pensiero martellante *"Ho rotto tutto, non sono capace, non passerò mai questo corso."*

Ci ho messo un bel po' a capirlo, ma la verità è molto più rassicurante: i messaggi di errore non ti stanno giudicando.

## Il Navigatore Satellitare, non una Sentenza
Quando ho iniziato a studiare seriamente la programmazione, vedevo gli errori in console come una bocciatura personale. Se il codice non compilava al primo colpo, mi sentivo un impostore.

Poi ho cambiato prospettiva. Il terminale è solo una macchina molto pedante che non capisce i sottintesi. Quando ti vomita addosso una schermata rossa, non ti sta dicendo "Sei stupido". Ti sta dicendo: *"Ehi, mi hai chiesto di andare a Roma, ma qui c'è un cantiere che mi blocca. Nello specifico, il cantiere è al chilometro 42 (riga 42 del file index.js), e riguarda un ponte crollato (ReferenceError: user is not defined)."*

Il messaggio di errore è la mappa del tesoro.

## Il Fango della Disattenzione
Ero immerso in un progetto frontend in React. Stavo passando delle *props* a un componente figlio e, all'improvviso, lo schermo diventa bianco. Apro la console: errore critico. 

Preso dalla fretta e dalla frustrazione, ignoro il testo dell'errore (che mi sembrava lunghissimo e complicato) e inizio a riscrivere la logica del componente alla cieca. Aggiungo \`console.log\` ovunque. Niente. Ci perdo un'ora e mezza, sudando freddo.

A un certo punto, mi fermo, faccio un bel respiro e leggo la primissima riga di quell'orribile muro di testo rosso: 
\`TypeError: Cannot read properties of undefined (reading 'map')\`.

Avevo semplicemente dimenticato di passare l'array al componente figlio, che stava cercando di mappare il nulla. Se avessi letto il navigatore invece di guidare bendato per la stanza, avrei risolto in tre secondi netti.

## Il Takeaway
Che si tratti della correzione di un professore a Ingegneria L-8 o di un errore del compilatore, smettila di prenderla sul personale. 

Respira profondo. Leggi la prima riga dell'errore. Cerca le parole chiave. Il sistema non ti sta rimproverando, ti sta letteralmente dando la soluzione per andare avanti. Imparare ad amare i messaggi di errore è il vero superpotere di chi non smette mai di crescere.
` 
  },
  {
    id: "la-paperella-di-gomma-e-larte-di-sentirsi-stupidi",
    title: "Rubber duck debugging: capire i bug spiegandoli",
    icon: "🦆",
    excerpt: "Quando un bug resiste a molti tentativi, descriverlo ad alta voce può aiutare a individuare assunzioni nascoste. Nel rubber duck debugging la paperella è un ascoltatore…",
    tags: ["Debugging","Problem solving","Rubber duck debugging","Testing"],
    date: "2026-04-03",
    updatedAt: "2026-11-11",
    category: "sviluppo-software",
    hub: "react-frontend",
    content: 
`
Quando un bug resiste a molti tentativi, descriverlo ad alta voce può aiutare a individuare assunzioni nascoste. Nel rubber duck debugging la paperella è un ascoltatore simbolico, non uno strumento tecnico.

Nel frontend lo stesso problema si collega a [Logging JavaScript: cosa registrare e cosa evitare](/blog/radiazione-di-fondo-e-il-cimitero-dei-console-log) e [Legacy code: come intervenire senza regressioni](/blog/principio-di-inerzia-e-la-sindrome-del-non-toccare). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Spiegare il comportamento

Quale input riceve il sistema? Quale output dovrebbe produrre? Che cosa accade invece? Esplicitare il flusso aiuta a vedere condizioni omesse o passaggi che sembravano ovvi.

## Un esempio

Una funzione calcola il prezzo finale del carrello. Spiegandone il flusso si nota che applica uno sconto prima di verificare la soglia minima, mentre il requisito prevede l'ordine opposto. Il codice è valido, ma implementa una regola differente.

## Dalla spiegazione al test

La tecnica aiuta a formulare ipotesi, non sostituisce log, test o profiler. Dopo aver individuato il passaggio sospetto, prepara un caso minimo che distingua comportamento corretto ed errato.

**Approfondimenti**

- [Chrome DevTools — debugging JavaScript](https://developer.chrome.com/docs/devtools/javascript/)
` 
  },
  {
    id: "quando-luniverso-ti-cambia-le-variabili-in-produzione",
    title: "Variabili d'ambiente: evitare errori in produzione",
    icon: "🚀",
    excerpt: "Come gestire configurazione, segreti e differenze di ambiente fra sviluppo, staging e produzione.",
    tags: ["DevOps","Environment variables","Deploy","Configuration"],
    date: "2026-04-02",
    updatedAt: "2026-11-11",
    category: "sviluppo-software",
    hub: "rails-backend",
    content: `
Un'applicazione può funzionare in locale e fallire dopo il deploy senza cambiamenti al codice. Possibili cause includono configurazioni diverse, versioni dei servizi, permessi e dati non rappresentativi.

L'analisi si completa confrontando questa parte con [Docker: container, immagini e dipendenze isolate](/blog/principio-di-archimede-e-i-container-docker) e [Ruby begin/rescue/ensure: gestione degli errori](/blog/ruby-gestione-errori). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

## Separare configurazione e codice

Endpoint, flag e credenziali devono essere espliciti. Non inserire segreti nel repository; valida la presenza e il formato delle variabili obbligatorie all'avvio.

## Riprodurre gli ambienti

Dichiara le versioni delle dipendenze e usa build riproducibili. La presenza di una chiave non garantisce che il suo valore sia corretto: credenziali di test non devono finire in produzione.

## Rilasciare con controllo

Esegui test, controlli delle route e verifiche di configurazione. Dopo il deploy monitora errori e latenze e prevedi un rollback. Una procedura ripetibile è più affidabile di modifiche manuali dell'ultimo minuto.

**Fonti**

- [The Twelve-Factor App — Config](https://12factor.net/config)
- [OWASP — Secrets Management](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
`,
  },
  { 
id: "il-caffe-luniversita-e-la-magia-del-codice-asincrono", 
title: "Il Caffè, l'Università e la Magia del Codice Asincrono", 
icon: "☕️",
date: "2026-04-01",
category: "sviluppo-software",
    hub: "react-frontend",
content: ` 
Essere uno studente di Ingegneria Informatica e lavorare come sviluppatore web significa una cosa sola: il tempo è la risorsa più scarsa dell'Universo. 

Ogni mattina cerco di incastrare lo studio con le task del lavoro. E ogni mattina, la mia giornata inizia con una lezione pratica di programmazione e termodinamica: preparare il caffè.

Sembra un'azione banale, ma nasconde uno dei concetti più importanti dello sviluppo software moderno.

## Sincrono vs Asincrono: Questione di Attese
Immaginate la scena. Vado in cucina, riempio la moka, accendo il fuoco e... resto immobile a fissarla. Non parlo, non preparo la colazione, non accendo il PC. Fisso la moka per 5 minuti finché il caffè non è pronto. 

Questo è il **codice sincrono**. Il programma esegue un'istruzione alla volta e, se un'operazione richiede tempo, tutto il resto si blocca. Se i nostri siti web funzionassero così, ogni volta che caricate una foto, l'intera pagina rimarrebbe freezata finché il download non è completato.

Fortunatamente, nella vita reale siamo esseri **asincroni**. Metto la moka sul fuoco (avvio il processo) e, mentre l'acqua si scalda, io accendo il PC, apro gli appunti dell'università e preparo l'editor di codice.

## Il Mio Primo "Fango" con le API
Ricordo il mio primo vero scontro con l'asincronia in JavaScript. Stavo imparando React e volevo creare un widget che chiamasse l'API pubblica della NASA per mostrare l'Astronomy Picture of the Day (APOD). 

Scrivo la mia funzione, faccio la \`fetch\`, salvo il risultato in una variabile e, alla riga esattamente successiva, cerco di passare l'URL dell'immagine al tag \`<img />\`. 

Risultato? Schermata bianca e un inesorabile \`Cannot read properties of undefined\` in console. L'interfaccia aveva provato a renderizzare il DOM prima ancora che i server della NASA avessero il tempo di far viaggiare la risposta fino al mio router. 

In pratica, stavo cercando di bere il caffè un millisecondo dopo aver acceso il fuoco sotto la moka. Tazza vuota e codice rotto.

## La Soluzione: Promesse e Attese
In JavaScript (e in molti altri linguaggi), risolviamo questo problema "promettendo" al sistema che il dato arriverà, ma permettendogli di fare altro nel frattempo. 

L'errore comune agli inizi è usare \`await\` bloccando subito il processo. Se vogliamo ottimizzare il tempo, avviamo la richiesta e la aspettiamo solo quando ci serve davvero:

\`\`\`javascript
async function iniziaGiornata() {
  console.log("1. Accendo il fuoco sotto la moka (Chiamata API alla NASA)...");
  
  // Lancio la richiesta, ma NON metto 'await' qui! Ottengo una Promise.
  const promessaFoto = fetch('https://api.nasa.gov/planetary/apod'); 
  
  console.log("2. Intanto apro gli appunti di Analisi 1...");
  // Il thread non è bloccato! Posso eseguire il rendering del resto della UI.
  
  // Ora che ho caricato il layout, mi fermo e aspetto i dati
  const response = await promessaFoto; 
  const datiSpaziali = await response.json();
  
  console.log("3. Dati arrivati! Mostro l'immagine di:", datiSpaziali.title);
}

await iniziaGiornata();
\`\`\`

Se eseguite mentalmente questo codice, l'ordine delle azioni nella console sarà 1, poi 2 (mentre i dati viaggiano in background), e infine 3. 

## Il Takeaway
Che voi stiate studiando per un esame difficile o progettando un'applicazione web, la regola d'oro è non bloccare mai il "thread principale". 

Avviare i compiti lunghi, non restare bloccati a fissare lo schermo aspettando che un processo termini da solo (come la latenza di rete) e continuare a fare progressi sulle altre piccole task. È il primo passo per mantenere fluida un'applicazione, e decisamente anche la nostra vita da studenti.
` 
},
  {
    id: "sonic-pi-primo-suono-play-sleep",
    title: "Sonic Pi: play e sleep per iniziare",
    date: "2026-04-22",
    updatedAt: "2026-11-11",
    category: "musica-audio",
    hub: "scienza-passioni",
    icon: "🎛️",
    excerpt: "Con play e sleep bastano due righe per far suonare il computer. Ecco da dove inizia il live coding.",
    tags: ["Sonic Pi", "Live Coding", "Musica"],
    content: `
Sonic Pi trasforma il computer in uno strumento che si suona scrivendo codice. Tutto parte da due comandi: \`play\`, che emette una nota, e \`sleep\`, che scandisce il tempo.

Per esplorare un caso vicino e capire le differenze, consulta [Sonic Pi live_loop: scrivere musica in tempo reale](/blog/sonic-pi-live-loop-cuore-del-live-coding) e [Sonic Pi sync e cue: sincronizzare i loop](/blog/sonic-pi-sync-cue). I casi sono diversi, ma evidenziano precondizioni e verifiche che conviene valutare insieme prima di applicare una modifica.

\`\`\`ruby
play 60      # Do centrale (numero MIDI)
sleep 0.5    # aspetta mezzo secondo
play 64      # Mi
sleep 0.5
play 67      # Sol
\`\`\`

\`play\` accetta i numeri MIDI oppure i nomi delle note come \`:c4\`, \`:e4\`, \`:g4\`. \`sleep\` non è una pausa "morta": è il metronomo del programma. Togli i \`sleep\` e le tre note suoneranno tutte insieme, come un accordo.

Premi Run: hai appena fatto musica con tre righe di codice. Da qui in poi è tutto un gioco di stratificazione.


## Da provare e verificare

Il comando play genera una nota usando il synth corrente; sleep controlla il tempo musicale prima dell'istruzione successiva. Non corrisponde a un'attesa bloccante dell'intera applicazione: Sonic Pi organizza gli eventi musicali nel proprio sistema temporale. Per iniziare prova due note a distanze diverse e confronta il risultato cambiando soltanto sleep, poi aggiungi un ciclo quando il pattern è stabile.


## Un esercizio con due note e un silenzio

Per iniziare, scrivi una nota, inserisci un tempo di attesa e suona una seconda nota. Cambia soltanto la durata di sleep e riascolta il risultato: è un modo immediato per distinguere la sequenza delle istruzioni dal ritmo percepito. Quando imposti use_bpm, le attese vengono interpretate nel contesto del tempo musicale, non come secondi arbitrari. Prova quindi lo stesso pattern a due BPM diversi e conta le pulsazioni. Se una nota continua a suonare dopo quella successiva, controlla il release del sintetizzatore: l'attesa non forza sempre la fine del suono. Prima di aggiungere nuovi strumenti, assicurati di saper riprodurre intenzionalmente la stessa sequenza. Il live coding diventa molto più comprensibile quando il risultato atteso è chiaro prima di premere Run.

**Documentazione ufficiale**

- [Sonic Pi — tutorial](https://sonic-pi.net/tutorial.html)`,
  },