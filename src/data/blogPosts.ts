import type { ReactNode } from "react";
import type { BlogCategoryId } from "../config/blog";

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  updatedAt?: string;
  category: BlogCategoryId;
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
    icon: "🔩",
    excerpt: "La stessa staffa può affrontare 15.000 o 150.000 cicli all’anno. Come passare dal conto degli azionamenti a una prova di fatica.",
    tags: ["Fatica dei materiali", "Carichi ciclici", "Progettazione meccanica"],
    content: `
Una staffa metallica sostiene la leva di una macchina. A ogni azionamento si flette appena e torna nella posizione di partenza. Alla prima prova sembra tutto a posto. Dopo mesi di lavoro, vicino a un foro di fissaggio può comparire una cricca.

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
    icon: "🌧️",
    excerpt: "Quindici millimetri di pioggia su un tetto da 80 metri quadrati fanno 1.200 litri. Un giardino della pioggia può trattenerne una parte e darle tempo di infiltrarsi.",
    tags: ["Acque meteoriche", "Drenaggio urbano", "Suolo"],
    content: `
Durante un acquazzone, la grondaia convoglia nel pluviale la pioggia che cade sul tetto. Se il pluviale sbocca su un cortile asfaltato, l’acqua continua a scorrere in superficie. Quando molti tetti e piazzali scaricano in fretta nella stessa rete, la portata può salire rapidamente. Un giardino della pioggia interviene lungo questo percorso.

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
    icon: "🌡️",
    excerpt: "Nel vuoto manca l’aria a cui cedere calore. Il controllo termico di Orion collega apparecchiature, circuiti fluidi e radiatori: un bilancio da chiudere anche quando cambia l’esposizione al Sole.",
    tags: ["Spazio", "Artemis", "Orion", "Controllo termico"],
    content: `
Una ventola raffredda un computer facendo passare aria sui dissipatori. Portare lo stesso schema all'esterno di una navicella non funziona: nel vuoto manca l'aria che trasporta via il calore. Anche lontano dalla Terra, però, elettronica e altri sistemi continuano a produrlo.

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
    icon: "📦",
    excerpt: "Una vendita arriva mentre il gestionale aggiorna le scorte. Il confronto sulla quantità attesa evita di sovrascrivere la disponibilità con un dato vecchio.",
    tags: ["Shopify", "Inventario", "Concorrenza"],
    content: `
Un job legge 10 pezzi disponibili su Shopify. Il gestionale ha appena registrato una rettifica e vuole portare il totale a 12. Tra la lettura e la scrittura arriva però un ordine, che fa scendere la disponibilità a 9. Se il job scrive comunque 12, quella vendita sparisce dal conteggio delle disponibilità.

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
    category: "ingegneria",
    icon: "🔭",
    excerpt: "Una metrica segnala un cambiamento, un log descrive un evento, una traccia collega i passaggi. La correlazione rende utile il dettaglio.",
    tags: ["Ingegneria", "Monitoraggio", "Backend"],
    content: `
Un ordine impiega troppo tempo ad arrivare al gestionale. La dashboard mostra un aumento della latenza, ma non spiega quale passaggio stia rallentando. Cercando nei log troviamo tanti messaggi corretti, senza un legame evidente fra loro.

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
    category: "ambiente",
    icon: "📱",
    excerpt: "Riuso e raccolta dei RAEE mantengono percorsi distinti. Il recupero dei materiali comincia da una destinazione appropriata.",
    tags: ["Ambiente", "Elettronica", "Risorse"],
    content: `
Un vecchio telefono nel cassetto non è più in uso, ma non è nemmeno entrato in una filiera di recupero. Resta lì insieme a caricabatterie e dispositivi di cui magari non ricordiamo più il difetto.

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
    category: "spazio",
    icon: "⚖️",
    excerpt: "Peso e inerzia dipendono da grandezze diverse. Un carico più leggero resta difficile da accelerare e fermare.",
    tags: ["Spazio", "Fisica", "Luna"],
    content: `
Un oggetto che sulla Terra è pesante diventa molto più facile da sostenere sulla Luna. È tentante concludere che sia anche facile da spostare, accelerare o fermare in qualunque situazione. Ma stiamo mettendo insieme due effetti differenti.

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
    category: "sviluppo-software",
    icon: "🔗",
    excerpt: "L’evento accelera l’aggiornamento, la riconciliazione cerca le differenze. Insieme rendono recuperabile una sincronizzazione.",
    tags: ["Coding", "Shopify", "Integrazioni"],
    content: `
Un webhook avvisa che qualcosa è cambiato. È veloce e permette di evitare molte interrogazioni inutili. Ma cosa succede se il destinatario è indisponibile, un handler fallisce o un evento viene gestito male?

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
    category: "ingegneria",
    icon: "🛡️",
    excerpt: "La ridondanza protegge rispetto a un insieme di guasti. Le dipendenze condivise possono far fallire entrambe le copie.",
    tags: ["Ingegneria", "Affidabilità", "Architettura"],
    content: `
Due istanze dell'applicazione sembrano più affidabili di una. Poi si scopre che usano lo stesso database, la stessa zona e la stessa configurazione sbagliata. Abbiamo duplicato il processo, ma non tutte le condizioni che gli permettono di funzionare.

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
    category: "ambiente",
    icon: "🐝",
    excerpt: "L’impollinazione coinvolge specie e habitat differenti. Proteggere una funzione richiede guardare la rete che la sostiene.",
    tags: ["Ambiente", "Biodiversità", "Ecosistemi"],
    content: `
Quando si parla di impollinazione, il simbolo è quasi sempre un'ape. È comprensibile, ma può far sparire dal ragionamento gli altri impollinatori e le condizioni che permettono loro di vivere.

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
    category: "spazio",
    icon: "🧭",
    excerpt: "Star tracker, misure radio e immagini contribuiscono a stime differenti. La navigazione combina osservazioni e modelli.",
    tags: ["Spazio", "Navigazione", "Sensori"],
    content: `
Immagina di conoscere perfettamente il punto in cui ti trovi, ma di non sapere in quale direzione sia orientata la tua camera. Oppure il contrario: sai dove punti, ma non quanto sei lontano dalla destinazione.

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
    category: "sviluppo-software",
    icon: "📄",
    excerpt: "Il prerender consegna contenuto e metadati prima del JavaScript. Redirect, canonical e vere risposte 404 restano parte del lavoro.",
    tags: ["Coding", "React", "SEO"],
    content: `
Un sito React può funzionare bene dopo la navigazione dalla home e comportarsi diversamente quando qualcuno apre direttamente il link di un articolo. Se il server restituisce sempre la stessa pagina vuota, contenuto e metadati dipendono dall'esecuzione del JavaScript.

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
    category: "ingegneria",
    icon: "📝",
    excerpt: "Un ADR conserva contesto, scelta e conseguenze. Aiuta a rivedere una decisione senza ricominciare da zero.",
    tags: ["Ingegneria", "Architettura", "Documentazione"],
    content: `
Apri un progetto e trovi una scelta che sembra complicata: una coda, un formato intermedio o una dipendenza insolita. La prima reazione è eliminarla. Poi scopri che serviva a gestire un vincolo che il codice, da solo, non racconta più.

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
    category: "ambiente",
    icon: "🔋",
    excerpt: "Accumulo, reti e domanda flessibile rispondono a vincoli diversi. La quantità di energia non basta a descrivere un sistema.",
    tags: ["Ambiente", "Energia", "Infrastrutture"],
    content: `
Produrre abbastanza energia nell'arco di un anno non dimostra che un sistema elettrico possa soddisfare la domanda in ogni momento e in ogni luogo. La disponibilità nel tempo e la capacità di trasporto fanno parte del problema.

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
    category: "spazio",
    icon: "📡",
    excerpt: "Il Deep Space Network trasporta dati e contribuisce alla navigazione. Essere nello spazio non elimina i vincoli del collegamento.",
    tags: ["Spazio", "Comunicazioni", "Infrastrutture"],
    content: `
Nelle immagini di una missione vediamo il veicolo, i pannelli e gli strumenti. Una parte essenziale del sistema resta però sulla Terra: antenne, pianificazione dei collegamenti e persone che gestiscono il flusso dei dati.

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
    category: "sviluppo-software",
    icon: "🛍️",
    excerpt: "Costo della query e capacità disponibile guidano il ritmo di un’integrazione. I worker dello stesso negozio condividono il problema.",
    tags: ["Coding", "Shopify", "API"],
    content: `
Un'integrazione può usare poche richieste e consumare comunque molto budget, se ogni query chiede una grande quantità di dati collegati. Contare soltanto le chiamate non basta per comprendere i limiti della GraphQL Admin API di Shopify.

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
    category: "ingegneria",
    icon: "🧱",
    excerpt: "Il progressive enhancement parte da una funzione utilizzabile e aggiunge capacità. È una scelta sui requisiti del servizio.",
    tags: ["Ingegneria", "Web", "Accessibilità"],
    content: `
Una pagina può caricare la struttura e restare comunque inutilizzabile: il pulsante aspetta il bundle, il menu non si apre, il collegamento esiste soltanto dentro un gestore di click. Il problema non è sempre un errore permanente. A volte basta una connessione lenta o uno script esterno che non arriva.

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
    category: "ambiente",
    icon: "🔄",
    excerpt: "Una valutazione del ciclo di vita deve dichiarare funzione, fasi incluse e ipotesi. La sola CO₂ non descrive ogni impatto.",
    tags: ["Ambiente", "Ciclo di vita", "Misure"],
    content: `
Due prodotti vengono confrontati usando un solo numero ambientale. Uno sembra migliore, ma il primo dato comprende produzione, trasporto e fine vita; il secondo soltanto l'uso. Il confronto ha una forma numerica e una base incoerente.

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
    category: "spazio",
    icon: "🕒",
    excerpt: "Terra, Luna e veicolo si muovono. Una finestra di lancio nasce dall’intersezione di vincoli, non dal solo conto alla rovescia.",
    tags: ["Spazio", "Artemis", "Orbite"],
    content: `
Il razzo è pronto sulla rampa. Perché aspettare un'ora precisa, invece di lanciare appena tutto è in ordine? Perché la destinazione si muove, la Terra ruota e la traiettoria deve rispettare più condizioni contemporaneamente.

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
    category: "sviluppo-software",
    icon: "⚛️",
    excerpt: "Memorizzare dati già ricavabili crea sincronizzazioni inutili. Un valore derivato può essere calcolato durante il render.",
    tags: ["Coding", "React", "Frontend"],
    content: `
Un componente conserva le righe del carrello e anche il totale. Ogni modifica alle righe deve aggiornare entrambi. Poi arriva uno sconto, un cambio quantità o una rimozione e uno dei percorsi dimentica il secondo aggiornamento.

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
    category: "ingegneria",
    icon: "📊",
    excerpt: "p50, p95 e p99 mostrano parti diverse della distribuzione. Per leggere la latenza servono anche volume ed errori.",
    tags: ["Ingegneria", "Prestazioni", "Monitoraggio"],
    content: `
Un servizio ha un tempo medio di risposta accettabile, ma alcune persone segnalano attese molto lunghe. Le due cose possono essere vere contemporaneamente. Una media riassume la distribuzione senza mostrarne la coda.

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
    category: "ambiente",
    icon: "🌳",
    excerpt: "Ombra ed evapotraspirazione influenzano il microclima. Il beneficio dipende anche da spazio, acqua e manutenzione.",
    tags: ["Ambiente", "Città", "Clima"],
    content: `
In estate bastano pochi metri per passare da un marciapiede esposto a uno spazio molto più vivibile sotto una chioma. Non è soltanto una sensazione estetica: l'albero modifica le condizioni di esposizione e il bilancio energetico dell'ambiente vicino.

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
    category: "spazio",
    icon: "🪂",
    excerpt: "L’esosfera lunare non offre una frenata aerodinamica utile. La discesa deve gestire velocità, propellente e terreno.",
    tags: ["Spazio", "Luna", "Propulsione"],
    content: `
Un paracadute funziona interagendo con un fluido. Aumenta la superficie che offre resistenza al moto nell'aria, trasformando una caduta rapida in una discesa più lenta nelle condizioni previste dal progetto.

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
    category: "sviluppo-software",
    icon: "📦",
    excerpt: "find_each limita i record istanziati per volta. Per importazioni robuste vanno progettati anche ripartenza e concorrenza.",
    tags: ["Coding", "Rails", "Prestazioni"],
    content: `
Un ciclo che funziona con cento prodotti può diventare un problema quando il catalogo cresce. Il punto non è soltanto quanto tempo impiega: se istanzia tutti i record insieme, può consumare molta memoria prima ancora di completare il primo lavoro utile.

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
    category: "ingegneria",
    icon: "🧩",
    excerpt: "Le tolleranze si combinano. Un esempio di catena dimensionale mostra perché controllare ogni pezzo separatamente non basta.",
    tags: ["Ingegneria", "Misure", "Progettazione"],
    content: `
Tre distanziali devono occupare insieme uno spazio di 30 millimetri. Ciascuno è indicato come 10 ± 0,2 mm. Il fornitore consegna pezzi conformi al disegno, eppure il montaggio può non comportarsi come suggeriscono i valori nominali.

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
    category: "ambiente",
    icon: "♻️",
    excerpt: "Raccolta, selezione e impiego del materiale recuperato sono passaggi diversi. La qualità in ingresso cambia il risultato.",
    tags: ["Ambiente", "Materiali", "Riciclo"],
    content: `
Un imballaggio finisce nella raccolta differenziata e sparisce dalla nostra vista. È facile pensare che il suo percorso sia concluso. In realtà è appena entrato in una catena che deve selezionarlo, trattarlo e trovare un impiego per il materiale recuperato.

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
    category: "spazio",
    icon: "🛰️",
    excerpt: "I punti di Lagrange dipendono da una coppia di corpi. Intorno a L1 e L2 servono orbite e correzioni.",
    tags: ["Spazio", "Orbite"],
    content: `
Quando si sente parlare di un telescopio «a L2», viene naturale immaginare un oggetto fermo in un punto speciale. L'immagine è comoda, ma nasconde sia il movimento del sistema sia il lavoro necessario a mantenere la missione nella regione prevista.

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
    category: "sviluppo-software",
    icon: "🏷️",
    excerpt: "La rivalidazione HTTP permette di riusare una risposta. no-cache e no-store hanno significati diversi.",
    tags: ["Coding", "HTTP", "Prestazioni"],
    content: `
Un browser possiede già una risorsa, ma non sa se la copia sia ancora utilizzabile. Deve scaricarla tutta ogni volta? Non necessariamente. Può chiedere al server se la rappresentazione che conosce è cambiata.

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
    category: "ingegneria",
    icon: "〰️",
    excerpt: "Il campionamento può confondere frequenze differenti. Frequenza di acquisizione e filtraggio vanno progettati insieme.",
    tags: ["Ingegneria", "Segnali", "Audio"],
    content: `
Nei video una ruota può sembrare ferma o girare al contrario. Non è cambiata la meccanica: stiamo osservando il movimento attraverso una sequenza di immagini discrete. Fra un fotogramma e il successivo perdiamo informazioni.

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
    category: "ambiente",
    icon: "💧",
    excerpt: "Origine dell’acqua, luogo e periodo cambiano il significato dell’impronta idrica. Una classifica senza contesto può ingannare.",
    tags: ["Ambiente", "Acqua", "Risorse"],
    content: `
Un prodotto può richiedere acqua molto prima di arrivare nelle nostre mani: coltivazione delle materie prime, trasformazione e altri passaggi della filiera. Il concetto di acqua virtuale aiuta a rendere visibile questa parte del consumo.

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
    category: "spazio",
    icon: "☀️",
    excerpt: "Ambiente, durata e schermatura vanno valutati insieme. Trasportare più materiale ha un costo per tutto il sistema.",
    tags: ["Spazio", "Luna", "Ingegneria"],
    content: `
Sulla Terra l'atmosfera e il campo magnetico contribuiscono alla protezione dall'ambiente spaziale. Quando ragioniamo su missioni oltre l'orbita bassa, non possiamo assumere che quelle condizioni ci seguano.

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
    category: "sviluppo-software",
    icon: "📤",
    excerpt: "Una transazione locale non include automaticamente il servizio remoto. L’outbox conserva l’intenzione di inviare.",
    tags: ["Coding", "Database", "Integrazioni"],
    content: `
Salvo un ordine nel database e poi mando un messaggio al gestionale. Se il processo si arresta fra le due operazioni, l'ordine esiste ma il destinatario non lo sa. Invertire la sequenza sposta il problema: il messaggio potrebbe partire anche se il salvataggio fallisce.

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
    category: "ingegneria",
    icon: "🚦",
    excerpt: "La legge di Little collega lavoro in corso, throughput e tempo medio. Aggiungere processi non elimina ogni collo di bottiglia.",
    tags: ["Ingegneria", "Prestazioni"],
    content: `
Una coda contiene molti job e la tentazione è aumentare subito i worker. Prima mi farei una domanda più semplice: quanto lavoro entra, quanto ne esce e quanto tempo rimane nel sistema?

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
    category: "ambiente",
    icon: "🥕",
    excerpt: "Una piccola registrazione distingue quantità comprate, avanzi e scarti. Misurare aiuta a scegliere un intervento concreto.",
    tags: ["Ambiente", "Risorse", "Misure"],
    content: `
«Bisogna sprecare meno cibo» è un obiettivo facile da condividere. Il problema operativo comincia dopo: stiamo comprando troppo, cucinando porzioni grandi o dimenticando prodotti che avevamo già?

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
    category: "spazio",
    icon: "🌑",
    excerpt: "Abrasione e adesione della regolite coinvolgono guarnizioni, tessuti e pannelli. La manutenzione parte dal progetto.",
    tags: ["Spazio", "Luna", "Materiali"],
    content: `
Una superficie grigia coperta di polvere può sembrare un ambiente semplice. Nessuna pioggia, nessun fango, nessuna vegetazione. Poi provi a immaginare una guarnizione, un giunto o un tessuto che devono funzionare dopo ogni uscita.

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
    category: "sviluppo-software",
    icon: "⏳",
    excerpt: "Timeout, limite dei tentativi e attesa casuale evitano che un errore temporaneo diventi una raffica di richieste.",
    tags: ["Coding", "API", "Integrazioni"],
    content: `
Un servizio risponde lentamente. Cento client vanno in timeout e riprovano nello stesso istante. Il servizio, già in difficoltà, riceve un'altra ondata di lavoro. Ogni singolo client sta cercando di recuperare; tutti insieme peggiorano il guasto.

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
    category: "ingegneria",
    icon: "🌡️",
    excerpt: "Misurare, agire e aspettare l’effetto: il feedback perde efficacia quando ignori inerzia e ritardo.",
    tags: ["Ingegneria", "Controllo"],
    content: `
La stanza sembra fredda, quindi alzi molto il riscaldamento. Dopo poco non percepisci ancora il cambiamento e lo alzi di nuovo. Quando il calore arriva, la temperatura supera quella desiderata. Allora spegni tutto e ricominci il ciclo.

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
    category: "ambiente",
    icon: "🌍",
    excerpt: "Consumo e intensità delle emissioni sono indicatori distinti. Per confrontarli servono confini e dati coerenti.",
    tags: ["Ambiente", "Energia", "Misure"],
    content: `
Due elaborazioni consumano la stessa energia elettrica. Possiamo concludere che abbiano anche le stesse emissioni associate? Non senza sapere con quali dati stiamo facendo il conto.

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
    category: "spazio",
    icon: "🧊",
    excerpt: "Dall’osservazione dell’acqua alla sua estrazione ci sono misure, energia e condizioni operative da dimostrare.",
    tags: ["Spazio", "Luna", "Risorse"],
    content: `
«Sulla Luna c'è acqua» è una notizia affascinante. Il passaggio successivo, però, non è automaticamente «allora possiamo rifornirci lì». Fra riconoscere una risorsa e trasformarla in un servizio affidabile c'è un intero problema ingegneristico.

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
    category: "sviluppo-software",
    icon: "🔐",
    excerpt: "La validazione migliora il messaggio all’utente. Il vincolo univoco nel database protegge il dato sotto concorrenza.",
    tags: ["Coding", "Rails", "Database"],
    content: `
Due processi cercano lo stesso codice esterno. Nessuno dei due lo trova, quindi entrambi provano a creare il record. Se la protezione è soltanto una ricerca prima del salvataggio, tutti e due possono aver ragione nello stesso momento.

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
    category: "ingegneria",
    icon: "📐",
    excerpt: "Memoria, potenza e tempi hanno limiti. Un budget esplicito rende visibili le riserve prima che arrivino gli imprevisti.",
    tags: ["Ingegneria", "Progettazione"],
    content: `
Un sistema ha un limite di memoria di 1 GB. Durante una prova ne usa 990 MB e qualcuno conclude: «Ci stiamo dentro». Formalmente è vero in quella prova. Progettualmente, però, restano dieci megabyte per tutto ciò che non abbiamo ancora osservato.

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
    category: "ambiente",
    icon: "⚡",
    excerpt: "La potenza descrive il ritmo del consumo, l’energia il totale. Un esempio numerico aiuta a non confonderle.",
    tags: ["Ambiente", "Energia"],
    content: `
«Questo apparecchio consuma 800 watt all'ora». È una frase che si sente spesso, ma mescola grandezze diverse. Per capire un consumo non basta leggere una potenza: serve sapere anche per quanto tempo viene assorbita.

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
    category: "spazio",
    icon: "📡",
    excerpt: "La latenza di propagazione impone un limite fisico. Velocità del collegamento e tempo di risposta non sono sinonimi.",
    tags: ["Spazio", "Comunicazioni"],
    content: `
Quando una videochiamata risponde in ritardo pensiamo subito alla connessione. Ma fra Terra e Luna una parte dell'attesa esiste anche immaginando apparati perfetti. Il segnale deve attraversare lo spazio, e non può farlo istantaneamente.

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
    category: "sviluppo-software",
    icon: "⏹️",
    excerpt: "AbortController aiuta a cancellare fetch superate. Un controllo della richiesta corrente protegge anche la UI.",
    tags: ["Coding", "JavaScript", "Browser"],
    content: `
Scrivi «Roma», poi correggi subito in «Romania». La seconda ricerca termina prima della prima. Per un istante vedi il risultato giusto, poi la risposta più lenta lo sovrascrive. Il server non ha necessariamente sbagliato: il frontend ha confuso l'ordine di arrivo con l'intenzione più recente.

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
    category: "ingegneria",
    icon: "📏",
    excerpt: "Risoluzione, ripetibilità e incertezza sono cose diverse. Anche i benchmark hanno bisogno di un contesto.",
    tags: ["Ingegneria", "Misure"],
    content: `
Una dashboard mostra 23,1472 millisecondi. Il numero sembra serio: quattro decimali danno immediatamente l'impressione di una misura precisa. Ma come è stato ottenuto? Quante volte è stata ripetuta la prova? E quanto cambia il risultato se la macchina sta facendo altro?

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
    category: "ambiente",
    icon: "🪛",
    excerpt: "Viti, ricambi e documentazione cambiano la vita utile di un prodotto. Progettare la manutenzione evita sostituzioni premature.",
    tags: ["Ambiente", "Progettazione", "Riparabilità"],
    content: `
Un dispositivo può funzionare bene per anni e diventare improvvisamente inutilizzabile per un componente economico. La domanda interessante non è soltanto quanto duri la batteria o il connettore. È cosa succede quando quel pezzo smette di funzionare.

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
    category: "spazio",
    icon: "🚀",
    excerpt: "Tornare dalla Luna significa gestire molta energia. Scudo termico e traiettoria fanno parte dello stesso problema.",
    tags: ["Spazio", "Artemis", "Ingegneria"],
    content: `
Guardando una missione lunare è facile concentrarsi sul lancio. Il razzo sale, le telecamere seguono la scia e sembra che la parte difficile sia tutta lì. A me interessa anche il problema opposto: riportare una capsula verso terra senza trasformare la sua energia di movimento in un disastro.

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
    category: "sviluppo-software",
    icon: "🔁",
    excerpt: "La consegna di un evento può ripetersi. Deduplicazione e idempotenza proteggono il risultato, anche sotto concorrenza.",
    tags: ["Coding", "Integrazioni", "Shopify"],
    content: `
Un ordine arriva dal negozio, l'integrazione lo salva e inoltra la conferma. La risposta si perde. Il mittente riprova: il server riceve di nuovo una richiesta che sembra perfettamente valida. Se ogni consegna crea un ordine nuovo, il problema è già nel database.

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
    category: "ingegneria",
    icon: "🔎",
    excerpt: "Verifica e validazione rispondono a due domande diverse. Un export corretto può essere comunque inutilizzabile.",
    tags: ["Ingegneria", "Requisiti"],
    content: `
Un esportatore genera il CSV senza errori. Le colonne sono quelle richieste, il file si apre e tutti i test passano. Poi chi deve usarlo scopre che gli identificativi non coincidono con quelli del gestionale. Il software è conforme alla specifica, ma il lavoro resta manuale.

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
    category: "sviluppo-software",
    icon: "🐳",
    excerpt: "Come funzionano i container Docker, cosa isolano davvero e come creare un'immagine riproducibile senza confonderla con una macchina virtuale.",
    tags: ["Docker","Container","DevOps","Node.js"],
    content: `
Un progetto funziona sul computer di sviluppo e fallisce quando passa su un'altra macchina. Spesso la differenza è nell'ambiente: versione del runtime, dipendenze, variabili di configurazione o librerie di sistema. Docker permette di distribuire un'applicazione insieme a una parte definita di questo ambiente.

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
    category: "sviluppo-software",
    icon: "🛹",
    excerpt: "Etichette chiare, campi essenziali, messaggi di errore e accessibilità: come migliorare un form senza affidarsi a trucchi visivi.",
    tags: ["UX","Form","Accessibilità","Conversione"],
    content: `
Ogni campo aggiuntivo chiede tempo, attenzione e informazioni. In un modulo di contatto o durante il checkout, la complessità può aumentare gli errori e scoraggiare la compilazione. Non basta però ridurre il numero dei campi: occorre chiedere le informazioni corrette, nel momento opportuno.

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
    category: "sviluppo-software",
    icon: "🍏",
    excerpt: "Strategia per modificare codice legacy con test di caratterizzazione, piccoli cambiamenti e osservabilità, senza riscrivere tutto.",
    tags: ["Legacy code","Refactoring","Testing","Manutenzione software"],
    content: `
Il codice legacy non è necessariamente vecchio o scritto male: è soprattutto codice che oggi è difficile modificare con sicurezza. Può contenere regole di business che nessuno ha documentato o dipendenze che emergono soltanto quando si cambia un comportamento.

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
    category: "sviluppo-software",
    icon: "⏳",
    excerpt: "Interfacce ottimistiche: aggiornare lo stato prima della risposta server, gestire gli errori e riconciliare i dati senza mostrare successi falsi.",
    tags: ["React","Optimistic UI","Latenza","Frontend"],
    content: `
Un'interfaccia può sembrare lenta anche quando il server impiega soltanto qualche centinaio di millisecondi. Un aggiornamento ottimistico mostra subito il risultato previsto di un'azione mentre la richiesta di rete è ancora in corso.

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
    category: "sviluppo-software",
    icon: "📡",
    excerpt: "Come usare log strutturati, livelli, correlation ID e monitoraggio degli errori senza esporre dati personali o riempire la console.",
    tags: ["JavaScript","Logging","Debugging","Osservabilità"],
    content: `
I log possono chiarire un guasto, ma una quantità indiscriminata di messaggi rende più difficile individuare il problema. La console del browser è utile in sviluppo; in produzione servono segnali intenzionali e una politica di raccolta.

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
    category: "sviluppo-software",
    icon: "🔗",
    excerpt: "Quando usare stato locale, Context e store condivisi in React, distinguendo dati derivati, server state e aggiornamenti concorrenti.",
    tags: ["React","State management","Context","Architettura frontend"],
    content: `
Quando molti componenti dipendono dallo stesso stato, una modifica può produrre effetti inattesi. Il problema non è la condivisione in sé, ma la proprietà poco chiara dei dati e l'accoppiamento fra componenti che non dovrebbero conoscersi.

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
    category: "sviluppo-software",
    icon: "⚡",
    excerpt: "Come CDN, caching e distribuzione geografica riducono i tempi di trasferimento, senza eliminare il costo delle richieste dinamiche.",
    tags: ["CDN","Latenza","Caching","Web Performance"],
    content: `
Una richiesta HTTP attraversa una rete fatta di tratte, apparati e server. La velocità di propagazione impone un limite fisico, ma la latenza reale comprende anche instradamento, code, negoziazione della connessione e tempo di elaborazione.

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
    category: "sviluppo-software",
    icon: "🐈",
    excerpt: "Come controllare le risposte degli assistenti AI nel coding con test, documentazione, review e verifiche di sicurezza.",
    tags: ["AI coding","Testing","Code review","Sicurezza"],
    content: `
Un assistente AI può accelerare la scrittura di bozze, test o spiegazioni, ma non conosce automaticamente i vincoli reali del progetto. Un suggerimento plausibile può contenere API inesistenti, errori di compatibilità o assunzioni sbagliate sui dati.

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
    category: "sviluppo-software",
    icon: "💸",
    excerpt: "Aggiungere campi personalizzati nel form prodotto Shopify con line item properties, distinguendoli dagli attributi del carrello.",
    tags: ["Shopify","Liquid","Line item properties","Product form"],
    content: `
Un prodotto può richiedere un testo da incidere, una dedica o un'informazione specifica per la singola riga d'ordine. Prima di installare un'app aggiuntiva, verifica se le **line item properties** native di Shopify risolvono il requisito.

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
    category: "sviluppo-software",
    icon: "🔀",
    excerpt: "Che cosa causa un merge conflict in Git, come risolverlo e come evitare force push pericolosi sui branch condivisi.",
    tags: ["Git","Merge conflict","Branch","Code review"],
    content: `
Un conflitto di merge non significa che due sviluppatori hanno modificato lo stesso file nello stesso momento. Si verifica quando Git non riesce a combinare automaticamente modifiche concorrenti, per esempio sulle stesse righe o dopo una modifica strutturale.

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
    category: "sviluppo-software",
    icon: "💧",
    excerpt: "Come riconoscere risorse non liberate nei componenti React e correggerle con cleanup, AbortController e verifiche nel browser.",
    tags: ["React","Memory leak","useEffect","Performance"],
    content: `
Un componente React può registrare listener, avviare timer o aprire una connessione. Se queste risorse restano attive quando non servono più, aumentano il lavoro del browser e talvolta il consumo di memoria.

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
    category: "sviluppo-software",
    icon: "🕰️",
    excerpt: "Differenza fra istanti UTC, orari locali e zone IANA; come evitare bug con data e ora legale tra database, API e browser.",
    tags: ["Database","Timezone","UTC","JavaScript"],
    content: `
Le date sono una fonte frequente di bug: un evento alle 09:00 può apparire a un'ora diversa quando passa fra browser, API e database. Serve distinguere un istante preciso da un orario civile locale.

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
    category: "sviluppo-software",
    icon: "🦋",
    excerpt: "Come evitare effetti collaterali dei CSS globali usando selettori mirati, cascade layers e test visuali.",
    tags: ["CSS","Cascade","Specificità","Frontend"],
    content: `
Una modifica a un selettore CSS può cambiare componenti lontani dalla pagina su cui stai lavorando. Non è caos matematico, ma il comportamento prevedibile della cascade quando le regole sono troppo ampie.

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
    category: "sviluppo-software",
    icon: "🪐",
    excerpt: "Individuare le dipendenze e introdurre confini testabili per ridurre la complessità del codice legacy.",
    tags: ["Legacy code","Coupling","Refactoring","Architettura"],
    content: `
Quando una modifica richiede interventi su molti moduli non correlati, il costo della manutenzione cresce. La metafora della gravità descrive la sensazione di essere trascinati nel sistema, ma il problema ingegneristico è l'accoppiamento.

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
    category: "sviluppo-software",
    icon: "🚀",
    excerpt: "Come stimare un progetto software considerando dipendenze, incertezza, test e ambito senza nascondere il rischio.",
    tags: ["Stime software","Project management","Testing","Rischi"],
    content: `
Una scadenza può essere negoziabile, ma il lavoro necessario a garantire un risultato affidabile dipende da vincoli reali: integrazioni, test, revisioni e distribuzione. Promettere una data senza valutarli non rende il lavoro più breve.

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
    category: "sviluppo-software",
    icon: "🔑",
    excerpt: "Misurare e ridurre la complessità del codice con test, refactoring, responsabilità chiare e piccoli interventi.",
    tags: ["Technical debt","Refactoring","Manutenibilità","Testing"],
    content: `
Il software non si deteriora fisicamente come un componente meccanico. Aumentano però le dipendenze, cambiano le librerie e diventano più difficili da ricostruire le decisioni precedenti. «Entropia del codice» è una metafora, non una legge tecnica.

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
    category: "sviluppo-software",
    icon: "🧮",
    excerpt: "Come ottimizzare il bundle JavaScript con code splitting, import dinamici e misurazioni di rete e CPU.",
    tags: ["JavaScript","Bundle size","Code splitting","Web Performance"],
    content: `
Un bundle grande può aumentare download, parsing ed esecuzione, soprattutto su dispositivi mobili meno potenti. Il peso trasferito non è l'unico costo: uno script compresso richiede comunque lavoro sul dispositivo.

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
    category: "sviluppo-software",
    icon: "⚛",
    excerpt: "Formulare ipotesi, isolare variabili e verificare la correzione attraverso test e strumenti di debug.",
    tags: ["Debugging","Testing","Logging","Software engineering"],
    content: `
Durante il debugging un log può cambiare il timing, e un breakpoint può nascondere una race condition. Non serve invocare la fisica quantistica: stai modificando il sistema mentre lo osservi.

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
    excerpt: "Usare la spiegazione ad alta voce per individuare passaggi impliciti e trasformare ipotesi vaghe in test riproducibili.",
    tags: ["Debugging","Problem solving","Rubber duck debugging","Testing"],
    date: "2026-04-03",
    category: "sviluppo-software",
    content: 
`
Quando un bug resiste a molti tentativi, descriverlo ad alta voce può aiutare a individuare assunzioni nascoste. Nel rubber duck debugging la paperella è un ascoltatore simbolico, non uno strumento tecnico.

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
    category: "sviluppo-software",
    content: `
Un'applicazione può funzionare in locale e fallire dopo il deploy senza cambiamenti al codice. Possibili cause includono configurazioni diverse, versioni dei servizi, permessi e dati non rappresentativi.

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
    title: "Sonic Pi: il tuo primo suono in due righe",
    date: "2026-04-22",
    category: "musica-audio",
    icon: "🎛️",
    excerpt: "Con play e sleep bastano due righe per far suonare il computer. Ecco da dove inizia il live coding.",
    tags: ["Sonic Pi", "Live Coding", "Musica"],
    content: `
Sonic Pi trasforma il computer in uno strumento che si suona scrivendo codice. Tutto parte da due comandi: \`play\`, che emette una nota, e \`sleep\`, che scandisce il tempo.

\`\`\`ruby
play 60      # Do centrale (numero MIDI)
sleep 0.5    # aspetta mezzo secondo
play 64      # Mi
sleep 0.5
play 67      # Sol
\`\`\`

\`play\` accetta i numeri MIDI oppure i nomi delle note come \`:c4\`, \`:e4\`, \`:g4\`. \`sleep\` non è una pausa "morta": è il metronomo del programma. Togli i \`sleep\` e le tre note suoneranno tutte insieme, come un accordo.

Premi Run: hai appena fatto musica con tre righe di codice. Da qui in poi è tutto un gioco di stratificazione.
`,
  },
  {
    id: "ruby-tutto-e-un-oggetto",
    title: "Ruby: perché davvero tutto è un oggetto",
    date: "2026-04-23",
    category: "sviluppo-software",
    icon: "💎",
    excerpt: "In Ruby anche i numeri e nil rispondono a metodi. Capirlo cambia il modo in cui scrivi codice.",
    tags: ["Ruby", "Programmazione", "OOP"],
    content: `
La prima cosa che spiazza chi arriva a Ruby da JavaScript è che *tutto* è un oggetto. Non "quasi tutto": proprio tutto, numeri e \`nil\` compresi.

\`\`\`ruby
42.class          # => Integer
42.even?          # => true
(-5).abs          # => 5
"ciao".upcase     # => "CIAO"
nil.to_a          # => []
3.times { print "yo " }   # => yo yo yo
\`\`\`

Non esistono "funzioni globali" appiccicate ai tipi primitivi: chiami sempre un metodo su un oggetto. Anche \`3.times\` è un metodo dell'oggetto \`3\`.

Il bello è la coerenza: una volta capito il modello, esplori qualsiasi valore con \`.methods\` e scopri cosa sa fare. Ruby premia la curiosità.
`,
  },
  {
    id: "rails-mvc-in-tre-minuti",
    title: "Rails: capire l'MVC in tre minuti",
    date: "2026-04-24",
    category: "sviluppo-software",
    icon: "🛤️",
    excerpt: "Model, View, Controller: chi fa cosa in Rails e perché tenerli separati ti salva il progetto.",
    tags: ["Ruby on Rails", "Architettura", "MVC"],
    content: `
Rails è costruito attorno al pattern **MVC**. Tre responsabilità separate, ognuna con un compito solo.

- **Model**: parla col database e contiene le regole di business (\`app/models\`).
- **View**: mostra i dati all'utente (\`app/views\`).
- **Controller**: riceve la richiesta, chiede i dati al Model e sceglie la View (\`app/controllers\`).

\`\`\`ruby
class LaunchesController < ApplicationController
  def index
    @launches = Launch.upcoming.limit(10)  # Model
  end                                      # la view mostra @launches
end
\`\`\`

La regola d'oro: **fat model, skinny controller**. La logica vive nel Model, il Controller coordina soltanto. Se un controller inizia a gonfiarsi di \`if\`, è il segnale che quella logica deve traslocare altrove.
`,
  },
  {
    id: "javascript-closure-spiegate-bene",
    title: "JavaScript: le closure spiegate senza magia",
    date: "2026-04-25",
    category: "sviluppo-software",
    icon: "🟨",
    excerpt: "Una funzione che 'ricorda' le variabili in cui è nata. Ecco cosa sono davvero le closure.",
    tags: ["JavaScript", "Fondamentali"],
    content: `
Una **closure** è semplicemente una funzione che continua ad avere accesso alle variabili del contesto in cui è stata creata, anche dopo che quel contesto è terminato.

\`\`\`javascript
function contatore() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const next = contatore();
next(); // 1
next(); // 2  <- 'count' sopravvive tra le chiamate
\`\`\`

La funzione interna "chiude" sopra la variabile \`count\`: non è globale, non si azzera, resta privata. È il meccanismo alla base di stato incapsulato, moduli e hook di React.

Se ti sei mai chiesto perché \`useState\` funziona, la risposta breve è: closure.
`,
  },
  {
    id: "web-audio-primo-oscillatore-audiocontext",
    title: "Web Audio: il primo suono nel browser",
    date: "2026-04-26",
    category: "musica-audio",
    icon: "🔊",
    excerpt: "AudioContext e OscillatorNode: fare musica in JavaScript senza librerie, solo con il browser.",
    tags: ["Web Audio", "JavaScript", "Musica"],
    content: `
Il browser ha un sintetizzatore integrato: la **Web Audio API**. Il punto di partenza è l'\`AudioContext\`, il motore che genera e connette i suoni.

\`\`\`javascript
const ctx = new AudioContext();
const osc = ctx.createOscillator();
osc.type = "sine";          // onda sinusoidale
osc.frequency.value = 440;  // La (A4)
osc.connect(ctx.destination);
osc.start();
osc.stop(ctx.currentTime + 1); // spegni dopo 1 secondo
\`\`\`

Crei nodi e li connetti in un grafo: un oscillatore produce un'onda, la colleghi a \`destination\` (le casse) e parte. Per sicurezza l'\`AudioContext\` va avviato dopo un gesto dell'utente (un click), altrimenti il browser lo tiene sospeso.

È lo stesso concetto di Sonic Pi, ma dentro una pagina web.
`,
  },
  {
    id: "sonic-pi-live-loop-cuore-del-live-coding",
    title: "Sonic Pi: live_loop, il cuore del live coding",
    date: "2026-04-27",
    category: "musica-audio",
    icon: "🔁",
    excerpt: "I live_loop girano in parallelo e li modifichi mentre suonano. È qui che nasce l'improvvisazione.",
    tags: ["Sonic Pi", "Live Coding"],
    content: `
Se \`play\` e \`sleep\` sono le note, il \`live_loop\` è ciò che rende Sonic Pi uno strumento *dal vivo*. È un ciclo infinito che puoi riscrivere mentre la musica suona: premi Run e il loop si aggiorna al giro successivo, senza fermarsi.

\`\`\`ruby
live_loop :beat do
  sample :bd_haus
  sleep 0.5
end

live_loop :hats do
  sample :drum_cymbal_closed, amp: 0.6
  sleep 0.25
end
\`\`\`

Due \`live_loop\` girano in parallelo, ognuno col suo tempo. Cambia un valore, premi Run, ascolti la differenza all'istante. Questa immediatezza è ciò che negli algorave chiamano "suonare il codice": aggiungi un layer, ne togli un altro, tutto dal vivo.
`,
  },
  {
    id: "ruby-blocchi-proc-lambda",
    title: "Ruby: blocchi, Proc e lambda senza confusione",
    date: "2026-04-28",
    category: "sviluppo-software",
    icon: "💎",
    excerpt: "do...end, Proc e lambda sembrano uguali ma non lo sono. Le differenze che contano davvero.",
    tags: ["Ruby", "Fondamentali"],
    content: `
I **blocchi** sono ovunque in Ruby: quel \`do...end\` (o le graffe) che passi a un metodo.

\`\`\`ruby
[1, 2, 3].each { |n| puts n }

quadrato = ->(x) { x * x }   # lambda
quadrato.call(5)             # => 25

somma = Proc.new { |a, b| a + b }
somma.call(2, 3)             # => 5
\`\`\`

Blocco, \`Proc\` e \`lambda\` sono tutti "pezzi di codice trasportabili", ma con due differenze chiave: la \`lambda\` controlla il numero di argomenti (errore se sbagli), la \`Proc\` no; e un \`return\` dentro una \`lambda\` esce dalla lambda, dentro una \`Proc\` esce dal metodo che la contiene.

Regola pratica: usa la \`lambda\` quando vuoi qualcosa che si comporta come una funzione vera.
`,
  },
  {
    id: "rails-activerecord-le-basi",
    title: "Rails: ActiveRecord, il database senza SQL",
    date: "2026-04-29",
    category: "sviluppo-software",
    icon: "🛤️",
    excerpt: "Una classe Ruby diventa una tabella. ActiveRecord traduce i tuoi metodi in query SQL.",
    tags: ["Ruby on Rails", "ActiveRecord", "Database"],
    content: `
ActiveRecord è l'ORM di Rails: mappa una classe Ruby su una tabella del database e ti fa lavorare con oggetti invece che con stringhe SQL.

\`\`\`ruby
class Launch < ApplicationRecord
end

Launch.create(name: "Falcon 9", provider: "SpaceX")
Launch.where(provider: "SpaceX").order(:date)
Launch.find(1)

launch = Launch.first
launch.update(status: "success")
\`\`\`

Ogni metodo genera SQL sotto il cofano, ma tu ragioni in Ruby. \`where\`, \`order\`, \`limit\` restituiscono relazioni concatenabili e "lazy": la query parte solo quando i dati servono davvero.

Il rischio? Dimenticarsi che c'è un database sotto e sparare mille query senza accorgersene. Ma quello è un discorso per un altro giorno.
`,
  },
  {
    id: "javascript-promise-async-await",
    title: "JavaScript: Promise e async/await, finalmente chiari",
    date: "2026-04-30",
    category: "sviluppo-software",
    icon: "🟨",
    excerpt: "Dal callback hell alle Promise, fino ad async/await: gestire l'asincronia con eleganza.",
    tags: ["JavaScript", "Async"],
    content: `
Una **Promise** rappresenta un valore che arriverà in futuro: una risposta di rete, un file, un timer. Ha tre stati: pending, fulfilled, rejected.

\`\`\`javascript
async function caricaUtente(id) {
  try {
    const res = await fetch("/api/users/" + id);
    const user = await res.json();
    return user;
  } catch (err) {
    console.error("Richiesta fallita", err);
  }
}
\`\`\`

\`async/await\` è solo zucchero sintattico sulle Promise: \`await\` mette in pausa la funzione finché la Promise non si risolve, senza bloccare il resto della pagina. Il codice si legge dall'alto in basso come se fosse sincrono.

Ricorda: \`await\` funziona solo dentro una funzione \`async\`, e avvolgere tutto in \`try/catch\` è ciò che ti salva quando la rete fa i capricci.
`,
  },
  {
    id: "web-audio-oscillatore-forme-onda",
    title: "Web Audio: le quattro forme d'onda base",
    date: "2026-05-01",
    category: "musica-audio",
    icon: "〰️",
    excerpt: "sine, square, sawtooth, triangle: come cambia il timbro e perché il suono grezzo è più ricco.",
    tags: ["Web Audio", "Sintesi", "Musica"],
    content: `
Un \`OscillatorNode\` produce quattro forme d'onda predefinite, e ognuna ha un carattere sonoro diverso.

\`\`\`javascript
osc.type = "sine";     // pulito, dolce (flauto)
osc.type = "square";   // cavo, retro (chiptune 8-bit)
osc.type = "sawtooth"; // ricco, tagliente (bassi e lead)
osc.type = "triangle"; // morbido ma corposo
\`\`\`

Il motivo è nella fisica: la sinusoide è una frequenza pura, mentre \`square\` e \`sawtooth\` contengono molte armoniche sovrapposte. Più armoniche significa timbro più ricco da scolpire poi con i filtri.

Vuoi un basso acido? Parti da \`sawtooth\` e togli le alte con un filtro passa-basso. Vuoi un suono da Game Boy? \`square\` e sei a casa. La sintesi sottrattiva è tutta qui: parti da un'onda ricca e togli ciò che non serve.
`,
  },
  {
    id: "sonic-pi-sample-libreria-integrata",
    title: "Sonic Pi: campioni pronti all'uso con sample",
    date: "2026-05-02",
    category: "musica-audio",
    icon: "🥁",
    excerpt: "Sonic Pi ha decine di campioni integrati. Con sample inneschi drum e texture in una riga.",
    tags: ["Sonic Pi", "Campioni", "Ritmo"],
    content: `
Oltre a sintetizzare note, Sonic Pi include una libreria di **campioni** pronti: batterie, texture, effetti. Li richiami con \`sample\` seguito da un simbolo.

\`\`\`ruby
sample :bd_haus                  # cassa
sample :sn_dolf                  # rullante
sample :loop_amen                # break storico
sample :ambi_choir, rate: 0.5    # più lento e più grave
sample :bd_haus, amp: 2, rpan: -1 # più forte, a sinistra
\`\`\`

I parametri sono la parte divertente: \`rate\` cambia velocità e intonazione, \`amp\` il volume, \`pan\` la posizione stereo, \`start\` e \`finish\` tagliano il campione (da 0 a 1).

Scrivi \`sample\` e usa l'autocompletamento per esplorare le famiglie: \`:drum_\`, \`:ambi_\`, \`:loop_\`, \`:elec_\`. È una miniera per costruire ritmi in pochi secondi.
`,
  },
  {
    id: "ruby-enumerable-map-select-reduce",
    title: "Ruby: map, select e reduce, il tridente di Enumerable",
    date: "2026-05-03",
    category: "sviluppo-software",
    icon: "💎",
    excerpt: "Trasformare, filtrare, aggregare. Tre metodi che sostituiscono la maggior parte dei tuoi cicli.",
    tags: ["Ruby", "Enumerable"],
    content: `
In Ruby raramente scrivi un ciclo \`for\`. Il modulo \`Enumerable\` ti dà metodi espressivi che dicono *cosa* vuoi, non *come* ottenerlo.

\`\`\`ruby
numeri = [1, 2, 3, 4, 5, 6]

numeri.map { |n| n * 2 }               # => [2, 4, 6, 8, 10, 12]
numeri.select { |n| n.even? }          # => [2, 4, 6]
numeri.reduce(0) { |sum, n| sum + n }  # => 21
numeri.sum                             # => 21 (scorciatoia)
\`\`\`

\`map\` trasforma, \`select\` filtra, \`reduce\` aggrega. Si concatenano: \`numeri.select(&:even?).map { |n| n ** 2 }\`.

Quel \`&:even?\` è la forma compatta di \`{ |n| n.even? }\`. Una volta presa la mano, i cicli manuali ti sembreranno rumore inutile.
`,
  },
  {
    id: "rails-migrazioni-versionare-il-database",
    title: "Rails: le migrazioni, il git del database",
    date: "2026-05-04",
    category: "sviluppo-software",
    icon: "🛤️",
    excerpt: "Le migrazioni descrivono lo schema in Ruby e lo versionano nel tempo. Niente più ALTER TABLE a mano.",
    tags: ["Ruby on Rails", "Database", "Migrazioni"],
    content: `
Una **migrazione** è un file Ruby che descrive una modifica allo schema del database. È versionata, reversibile e condivisa col team: il "git" della struttura dati.

\`\`\`ruby
class CreateLaunches < ActiveRecord::Migration[7.1]
  def change
    create_table :launches do |t|
      t.string :name, null: false
      t.string :provider
      t.datetime :net       # No Earlier Than
      t.timestamps
    end
    add_index :launches, :provider
  end
end
\`\`\`

Lanci \`rails db:migrate\` e la tabella nasce; \`rails db:rollback\` la annulla. Il metodo \`change\` è abbastanza intelligente da sapere come invertire la maggior parte delle operazioni.

La regola: mai modificare una migrazione già eseguita in produzione. Ne crei una nuova. Lo storico deve restare fedele a ciò che è successo davvero.
`,
  },
  {
    id: "javascript-event-loop-come-funziona",
    title: "JavaScript: l'event loop, perché non si blocca mai",
    date: "2026-05-05",
    category: "sviluppo-software",
    icon: "🟨",
    excerpt: "Un solo thread ma tutto sembra parallelo. Come JavaScript gestisce l'asincronia con la coda degli eventi.",
    tags: ["JavaScript", "Runtime", "Async"],
    content: `
JavaScript ha **un solo thread**: esegue una cosa alla volta. Allora come fa a gestire timer, click e richieste di rete senza congelarsi? Grazie all'**event loop**.

\`\`\`javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
// Output: 1, 4, 3, 2
\`\`\`

Il codice sincrono gira per primo (1, 4). Poi l'event loop svuota la **microtask queue** (le Promise, quindi 3) e solo dopo la **macrotask queue** (i timer, quindi 2).

Ecco perché un \`setTimeout(fn, 0)\` non è davvero immediato: si mette in coda. E perché un ciclo pesante e sincrono blocca l'intera pagina: finché non finisce, l'event loop non gira. Spezza i lavori lunghi, o passali a un Web Worker.
`,
  },
  {
    id: "web-audio-gainnode-volume-envelope",
    title: "Web Audio: GainNode e l'arte dell'inviluppo",
    date: "2026-05-06",
    category: "musica-audio",
    icon: "🎚️",
    excerpt: "Il volume non è un numero fisso: con il GainNode disegni attacco e rilascio per suoni naturali.",
    tags: ["Web Audio", "Sintesi"],
    content: `
Se colleghi un oscillatore direttamente alle casse, senti un "click" fastidioso all'accensione e allo spegnimento. Serve un **GainNode** per controllare il volume nel tempo: l'inviluppo.

\`\`\`javascript
const gain = ctx.createGain();
osc.connect(gain);
gain.connect(ctx.destination);

const now = ctx.currentTime;
gain.gain.setValueAtTime(0, now);
gain.gain.linearRampToValueAtTime(1, now + 0.02); // attacco
gain.gain.linearRampToValueAtTime(0, now + 0.5);  // rilascio
osc.start(now);
\`\`\`

Invece di accendere e spegnere di colpo, fai salire e scendere il volume con delle rampe: è l'inviluppo di ampiezza (il classico ADSR: Attack, Decay, Sustain, Release).

È la differenza tra un beep da sveglia e una nota di pianoforte. Il timbro non sta solo nell'onda: sta anche in *come* il suono nasce e muore.
`,
  },
  {
    id: "sonic-pi-use-synth-scegliere-sintetizzatori",
    title: "Sonic Pi: cambiare voce con use_synth",
    date: "2026-05-07",
    category: "musica-audio",
    icon: "🎹",
    excerpt: "Da :prophet a :tb303: con use_synth scegli il sintetizzatore e trasformi completamente il suono.",
    tags: ["Sonic Pi", "Sintesi"],
    content: `
La stessa nota cambia completamente a seconda del sintetizzatore che la produce. In Sonic Pi lo scegli con \`use_synth\`.

\`\`\`ruby
use_synth :prophet
play :e3, release: 2

use_synth :tb303      # il synth acid per eccellenza
play :e2, release: 0.3, cutoff: 90

use_synth :dsaw       # detuned saw, grasso
play :e3, release: 1
\`\`\`

Ogni synth ha i suoi parametri: \`cutoff\` (quanto è aperto il filtro), \`release\` (quanto dura la coda), \`sustain\`, \`attack\`. Il \`:tb303\` con un \`cutoff\` che si muove è la firma della musica acid.

Prova a suonare la stessa sequenza cambiando solo \`use_synth\`: è il modo più veloce per capire quanto il timbro conti più delle note.
`,
  },
  {
    id: "ruby-symbol-vs-string",
    title: "Ruby: symbol o string? Quando usare :cosa",
    date: "2026-05-08",
    category: "sviluppo-software",
    icon: "💎",
    excerpt: "I simboli non sono stringhe carine: sono immutabili e unici. Ecco quando sceglierli.",
    tags: ["Ruby", "Fondamentali"],
    content: `
In Ruby vedi ovunque cose come \`:name\` e ti chiedi perché non una stringa \`"name"\`. La differenza è concreta.

\`\`\`ruby
"ciao".object_id   # => cambia ogni volta (nuovo oggetto)
"ciao".object_id
:ciao.object_id    # => sempre lo stesso
:ciao.object_id
\`\`\`

Un **symbol** è immutabile e unico in memoria: esiste una sola istanza di \`:ciao\` in tutto il programma. Una **string** è mutabile e ogni letterale crea un nuovo oggetto.

Per questo i simboli sono perfetti come chiavi di hash e nomi/identificatori (\`user[:email]\`, \`validates :name\`), mentre le stringhe servono per il testo che manipoli o mostri all'utente. Regola spannometrica: se è un'etichetta, usa un simbolo; se è contenuto, usa una stringa.
`,
  },
  {
    id: "rails-associazioni-has-many-belongs-to",
    title: "Rails: le associazioni tra i modelli",
    date: "2026-05-09",
    category: "sviluppo-software",
    icon: "🛤️",
    excerpt: "has_many e belongs_to collegano le tabelle e ti regalano metodi comodi per navigarle.",
    tags: ["Ruby on Rails", "ActiveRecord", "Database"],
    content: `
Le **associazioni** dicono a Rails come i modelli sono collegati, e in cambio ti danno metodi per muoverti tra i dati senza scrivere join a mano.

\`\`\`ruby
class Provider < ApplicationRecord
  has_many :launches, dependent: :destroy
end

class Launch < ApplicationRecord
  belongs_to :provider
end

spacex = Provider.find_by(name: "SpaceX")
spacex.launches.count          # tutti i lanci del provider
launch.provider.name           # dal lancio al provider
spacex.launches.create(name: "Starship")
\`\`\`

\`belongs_to\` vuole la colonna \`provider_id\` sulla tabella dei lanci (la crei in migrazione con \`t.references :provider\`). Da lì Rails costruisce le query giuste.

Aggiungi \`dependent: :destroy\` e cancellando un provider elimini anche i suoi lanci: comodo, ma usalo con la testa.
`,
  },
  {
    id: "javascript-metodi-array-essenziali",
    title: "JavaScript: i metodi degli array che usi ogni giorno",
    date: "2026-05-10",
    category: "sviluppo-software",
    icon: "🟨",
    excerpt: "map, filter, reduce, find, some: il coltellino svizzero per lavorare con le liste senza cicli.",
    tags: ["JavaScript", "Array"],
    content: `
Come in Ruby, anche in JavaScript i cicli \`for\` sono quasi sempre sostituibili da metodi più espressivi.

\`\`\`javascript
const nums = [1, 2, 3, 4, 5];

nums.map((n) => n * 2);        // [2, 4, 6, 8, 10]
nums.filter((n) => n % 2 === 0); // [2, 4]
nums.reduce((acc, n) => acc + n, 0); // 15
nums.find((n) => n > 3);       // 4
nums.some((n) => n > 4);       // true
nums.every((n) => n > 0);      // true
\`\`\`

Sono tutti **immutabili** (tranne pochi come \`sort\` e \`reverse\`): non modificano l'array originale, ne restituiscono uno nuovo. Questo li rende perfetti in React, dove mutare lo stato è vietato.

Si concatenano leggendosi come una frase: \`utenti.filter(attivo).map(nome)\`. Il codice diventa una pipeline di trasformazioni, non un labirinto di indici.
`,
  },
  {
    id: "web-audio-grafo-nodi-connect",
    title: "Web Audio: pensare a nodi, come una pedaliera",
    date: "2026-05-11",
    category: "musica-audio",
    icon: "🕸️",
    excerpt: "Sorgenti, effetti, destinazione: l'audio nel browser è un grafo di nodi che colleghi con connect.",
    tags: ["Web Audio", "Architettura"],
    content: `
La Web Audio API ragiona come una pedaliera per chitarra: hai delle **sorgenti**, dei nodi di **elaborazione** e una **destinazione**, e li colleghi con \`connect\`.

\`\`\`javascript
// sorgente -> filtro -> volume -> casse
osc.connect(filter);
filter.connect(gain);
gain.connect(ctx.destination);
\`\`\`

Il segnale scorre da sinistra a destra lungo le connessioni. Un nodo può alimentarne più di uno (splitti il segnale) e più nodi possono confluire nello stesso (li mixi).

Questo modello dichiarativo è potente: costruisci una catena una volta, poi ti limiti a cambiare i parametri (frequenza del filtro, volume) nel tempo. Capito il grafo, tutto il resto della Web Audio API sono solo nodi diversi da incastrare.
`,
  },
  {
    id: "sonic-pi-with-fx-effetti",
    title: "Sonic Pi: dare spazio al suono con with_fx",
    date: "2026-05-12",
    category: "musica-audio",
    icon: "🌫️",
    excerpt: "Riverbero, echo, distorsione: with_fx avvolge un blocco di codice in un effetto. Anche annidati.",
    tags: ["Sonic Pi", "Effetti"],
    content: `
Gli effetti in Sonic Pi si applicano con \`with_fx\`, che avvolge un blocco di codice: tutto ciò che suoni al suo interno passa attraverso l'effetto.

\`\`\`ruby
with_fx :reverb, mix: 0.6 do
  play :e3
  sleep 0.5
  play :g3
end

with_fx :echo, phase: 0.25, decay: 4 do
  with_fx :distortion, distort: 0.4 do
    play :e2, release: 0.2
  end
end
\`\`\`

Puoi **annidarli**: nel secondo esempio la nota passa prima nella distorsione, poi nell'echo. I parametri (\`mix\`, \`phase\`, \`decay\`, \`room\`) plasmano l'effetto.

Il riverbero dà profondità, l'echo crea il ritmo, la distorsione aggiunge grinta. Con \`with_fx\` lo spazio sonoro diventa un altro strumento da programmare.
`,
  },
  {
    id: "ruby-hash-metodi-utili",
    title: "Ruby: l'hash e i suoi metodi più comodi",
    date: "2026-05-13",
    category: "sviluppo-software",
    icon: "💎",
    excerpt: "fetch, dig, each_with_object, transform_values: l'hash di Ruby è molto più di un dizionario.",
    tags: ["Ruby", "Collezioni"],
    content: `
L'hash è la struttura dati che userai di più in Ruby. Oltre a \`[]\`, ha metodi che risolvono problemi ricorrenti.

\`\`\`ruby
config = { host: "localhost", port: 3000 }

config.fetch(:port)             # 3000
config.fetch(:timeout, 30)      # 30 (default se manca)
config.dig(:db, :name)          # nil, senza esplodere su chiavi annidate

prezzi = { pane: 2, latte: 1 }
prezzi.transform_values { |v| v * 1.1 }  # aumento del 10%
prezzi.sum { |_, v| v }         # 3
\`\`\`

\`fetch\` con un default evita i \`nil\` a sorpresa; \`dig\` naviga strutture annidate senza mille controlli; \`transform_values\` e \`each_with_object\` costruiscono nuovi hash in modo pulito.

Conoscere questi metodi significa scrivere meno \`if key\`, e lasciare che sia l'hash a gestire i casi limite.
`,
  },
  {
    id: "rails-validazioni-dati-puliti",
    title: "Rails: validazioni, la prima linea di difesa",
    date: "2026-05-14",
    category: "sviluppo-software",
    icon: "🛤️",
    excerpt: "presence, uniqueness, format: le validazioni tengono fuori dal database i dati sbagliati.",
    tags: ["Ruby on Rails", "ActiveRecord"],
    content: `
Le **validazioni** vivono nel Model e bloccano il salvataggio se i dati non rispettano le regole. Sono la garanzia che nel database non finisca spazzatura.

\`\`\`ruby
class Launch < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true
  validates :provider, presence: true
  validates :status, inclusion: { in: %w[scheduled success failure] }
end

launch = Launch.new
launch.save          # => false
launch.errors.full_messages # => ["Name can't be blank", ...]
launch.save!         # solleva un'eccezione invece di restituire false
\`\`\`

\`save\` restituisce \`false\` se una validazione fallisce; \`save!\` solleva un'eccezione. In \`errors\` trovi i messaggi da mostrare all'utente.

Attenzione: le validazioni proteggono a livello applicativo. Per garanzie ferree (unicità sotto concorrenza) aggiungi anche un indice unico nel database.
`,
  },
  {
    id: "javascript-destructuring",
    title: "JavaScript: destructuring, meno righe più chiarezza",
    date: "2026-05-15",
    category: "sviluppo-software",
    icon: "🟨",
    excerpt: "Estrarre valori da oggetti e array in una riga, con default e rinomina. Un piccolo superpotere.",
    tags: ["JavaScript", "Sintassi"],
    content: `
Il **destructuring** estrae valori da oggetti e array assegnandoli a variabili in una sola riga.

\`\`\`javascript
const user = { name: "Ale", role: "dev", city: "Torino" };
const { name, role } = user;

const { theme = "light" } = {}; // default se manca
const { name: nome } = user;    // rinomina

const [first, second, ...rest] = [10, 20, 30, 40];
// first=10, second=20, rest=[30, 40]

function saluta({ name }) {     // direttamente nei parametri
  return "Ciao " + name;
}
\`\`\`

Funziona con default, rinominazione e rest. È onnipresente in React (\`const { data } = useQuery()\`) e negli import.

Meno \`const x = obj.x\` ripetuti, più codice che dice subito quali dati ti servono. Piccola sintassi, grande pulizia.
`,
  },
  {
    id: "web-audio-biquadfilter",
    title: "Web Audio: scolpire il suono con i filtri",
    date: "2026-05-16",
    category: "musica-audio",
    icon: "🎛️",
    excerpt: "Il BiquadFilterNode taglia o esalta le frequenze. È il cuore della sintesi sottrattiva.",
    tags: ["Web Audio", "Sintesi"],
    content: `
Il **BiquadFilterNode** è il filtro della Web Audio API: decide quali frequenze passano e quali no. È lo stesso \`cutoff\` che in Sonic Pi rende acido un basso.

\`\`\`javascript
const filter = ctx.createBiquadFilter();
filter.type = "lowpass";     // lascia passare i bassi
filter.frequency.value = 800; // taglia sopra 800 Hz
filter.Q.value = 12;          // risonanza: enfatizza attorno al taglio

osc.connect(filter);
filter.connect(ctx.destination);

// movimento del filtro nel tempo = suono "vivo"
filter.frequency.linearRampToValueAtTime(3000, ctx.currentTime + 1);
\`\`\`

I tipi principali: \`lowpass\`, \`highpass\`, \`bandpass\`. \`frequency\` è il punto di taglio, \`Q\` la risonanza (troppo alta e "fischia").

Automatizzare \`frequency\` nel tempo è ciò che dà vita ai suoni: un filtro che si apre e si chiude trasforma un'onda statica in qualcosa che respira.
`,
  },
  {
    id: "sonic-pi-scale-accordi",
    title: "Sonic Pi: scale e accordi senza sapere la teoria",
    date: "2026-05-17",
    category: "musica-audio",
    icon: "🎼",
    excerpt: "scale e chord generano le note giuste al posto tuo. La teoria musicale diventa una funzione.",
    tags: ["Sonic Pi", "Teoria musicale"],
    content: `
Non serve conoscere la teoria musicale a memoria: Sonic Pi ha \`scale\` e \`chord\` che restituiscono le note giuste come una lista.

\`\`\`ruby
scale(:e3, :minor_pentatonic)
# => (ring 52, 55, 57, 59, 62, 64)

chord(:e3, :minor)
# => (ring 52, 55, 59)

# arpeggio: suona le note della scala una a una
scale(:e3, :minor_pentatonic).each do |n|
  play n
  sleep 0.2
end

play chord(:a3, :major7)  # accordo suonato insieme
\`\`\`

\`scale\` prende una tonica e un tipo (\`:minor\`, \`:major\`, \`:minor_pentatonic\`, \`:dorian\`...) e ti dà le note; \`chord\` fa lo stesso per gli accordi.

Combinali con \`.choose\` per melodie casuali sempre "in chiave", o con \`.tick\` per scorrerle in ordine. La teoria musicale diventa un'API.
`,
  },
  {
    id: "ruby-metaprogrammazione-basi",
    title: "Ruby: metaprogrammazione, codice che scrive codice",
    date: "2026-05-18",
    category: "sviluppo-software",
    icon: "💎",
    excerpt: "define_method e method_missing: come Rails genera metodi al volo. Potente, da maneggiare con cura.",
    tags: ["Ruby", "Metaprogrammazione"],
    content: `
La **metaprogrammazione** è la capacità di Ruby di definire metodi a runtime. È la magia dietro tante comodità di Rails.

\`\`\`ruby
class Configurazione
  [:host, :port, :user].each do |campo|
    define_method(campo) { instance_variable_get("@#{campo}") }
    define_method("#{campo}=") { |v| instance_variable_set("@#{campo}", v) }
  end
end

c = Configurazione.new
c.host = "localhost"
c.host            # => "localhost"
\`\`\`

Con \`define_method\` crei metodi in un ciclo invece di scriverli a mano uno per uno. Con \`method_missing\` intercetti chiamate a metodi che non esistono e reagisci al volo.

È potentissima, ma va dosata: codice generato dinamicamente è più difficile da leggere e da debuggare. Usala quando elimina ripetizione reale, non per fare colpo.
`,
  },
  {
    id: "rails-api-only-mode",
    title: "Rails come API pura: la modalità api-only",
    date: "2026-05-19",
    category: "sviluppo-software",
    icon: "🛤️",
    excerpt: "rails new --api crea un backend snello che parla JSON. Niente view, solo endpoint.",
    tags: ["Ruby on Rails", "API"],
    content: `
Quando il frontend è separato (React, un'app mobile), non ti serve tutto lo strato delle view. Rails offre la modalità **API-only**.

\`\`\`bash
rails new launch-tracker-api --api
\`\`\`

Il controller risponde in JSON invece di renderizzare HTML:

\`\`\`ruby
class LaunchesController < ApplicationController
  def index
    launches = Launch.upcoming.limit(20)
    render json: launches
  end

  def show
    render json: Launch.find(params[:id])
  end
end
\`\`\`

Rispetto a un'app classica, la modalità \`--api\` rimuove middleware inutili (cookie, sessioni, view) e alleggerisce lo stack. Ottieni un backend snello che espone dati, perfetto da consumare con \`fetch\` da un frontend separato.

È esattamente l'architettura dietro un progetto come Launch Tracker: Rails serve i dati, il frontend li disegna.
`,
  },
  {
    id: "javascript-moduli-es-import-export",
    title: "JavaScript: moduli ES, import ed export",
    date: "2026-05-20",
    category: "sviluppo-software",
    icon: "🟨",
    excerpt: "Dividere il codice in file con import/export. named vs default, e perché conta per il bundle.",
    tags: ["JavaScript", "Moduli"],
    content: `
I **moduli ES** dividono il codice in file, ognuno con la sua interfaccia pubblica dichiarata con \`export\` e \`import\`.

\`\`\`javascript
// math.js
export const PI = 3.14159;
export function area(r) { return PI * r * r; }
export default function saluta() { return "hi"; }

// app.js
import saluta, { PI, area } from "./math.js";
\`\`\`

C'è una differenza importante: gli **export nominati** (\`{ PI, area }\`) hanno un nome fisso e si possono importare selettivamente; l'**export default** è uno solo per file e lo rinomini come vuoi in import.

Preferire i named export aiuta il **tree-shaking**: il bundler può scartare le funzioni che non importi, alleggerendo il file finale. Un dettaglio che, moltiplicato per decine di librerie, fa la differenza sul peso della pagina.
`,
  },
  {
    id: "web-audio-convolver-riverbero",
    title: "Web Audio: riverbero realistico con ConvolverNode",
    date: "2026-05-21",
    category: "musica-audio",
    icon: "🏛️",
    excerpt: "Il ConvolverNode usa la 'impronta' acustica di un luogo reale per far suonare il tuo audio lì dentro.",
    tags: ["Web Audio", "Effetti"],
    content: `
Il riverbero più realistico nel browser si ottiene con il **ConvolverNode**, che applica al suono l'impronta acustica di un luogo reale: una chiesa, una stanza, un garage.

\`\`\`javascript
const convolver = ctx.createConvolver();

// carica una "impulse response": la firma acustica di un ambiente
const res = await fetch("/ir/hall.wav");
const buf = await res.arrayBuffer();
convolver.buffer = await ctx.decodeAudioData(buf);

osc.connect(convolver);
convolver.connect(ctx.destination);
\`\`\`

Il trucco è la **impulse response**: un breve file audio che cattura come un ambiente risponde a un impulso secco. Il convolver "moltiplica" il tuo suono per quella firma, e improvvisamente sembra registrato in quella cattedrale.

È più pesante di un riverbero algoritmico, ma il realismo non ha paragoni. Trovi impulse response gratuite online per ambienti di ogni tipo.
`,
  },
  {
    id: "sonic-pi-drum-machine",
    title: "Sonic Pi: costruire una drum machine",
    date: "2026-05-22",
    category: "musica-audio",
    icon: "🥁",
    excerpt: "Cassa, rullante e charleston in tre live_loop: le fondamenta ritmiche di qualsiasi brano.",
    tags: ["Sonic Pi", "Ritmo"],
    content: `
Il groove nasce da pochi elementi ben incastrati. Con tre \`live_loop\` costruisci una drum machine completa.

\`\`\`ruby
use_bpm 120

live_loop :kick do
  sample :bd_haus, amp: 2
  sleep 1
end

live_loop :snare do
  sleep 1               # sfasa di un tempo
  sample :sn_dolf
  sleep 1
end

live_loop :hats do
  sample :drum_cymbal_closed, amp: 0.5
  sleep 0.25
end
\`\`\`

La cassa sul battere, il rullante in levare, il charleston a scandire i sedicesimi: è lo schema di mezza musica elettronica. Cambia i \`sleep\` e cambi il groove.

Per irrobustire, aggiungi variazione: \`sample :sn_dolf if one_in(4)\` fa scattare il rullante solo a volte, e il ritmo smette di suonare meccanico.
`,
  },
  {
    id: "ruby-pattern-matching",
    title: "Ruby 3: il pattern matching con case/in",
    date: "2026-05-23",
    category: "sviluppo-software",
    icon: "💎",
    excerpt: "Destrutturare e far match su struttura dei dati con case/in. Elegante per JSON e API.",
    tags: ["Ruby", "Ruby 3"],
    content: `
Ruby 3 ha portato il **pattern matching**: con \`case/in\` fai match sulla *struttura* dei dati, non solo sul valore.

\`\`\`ruby
response = { status: "ok", data: { name: "Falcon 9", provider: "SpaceX" } }

case response
in { status: "ok", data: { name:, provider: } }
  puts "#{name} di #{provider}"
in { status: "error", message: }
  puts "Errore: #{message}"
else
  puts "Formato sconosciuto"
end
\`\`\`

Nota la potenza: \`name:\` e \`provider:\` non solo verificano che le chiavi esistano, ma **estraggono** i valori in variabili locali. Puoi fare match su array, tipi (\`in Integer\`), condizioni (\`in n if n > 0\`).

È perfetto per gestire risposte di API con forme diverse: descrivi la forma che ti aspetti e Ruby ti dà i dati già spacchettati.
`,
  },
  {
    id: "rails-consumare-api-esterne",
    title: "Rails: consumare un'API esterna e arricchirla",
    date: "2026-05-24",
    category: "sviluppo-software",
    icon: "🛤️",
    excerpt: "Come un backend Rails interroga un'API pubblica (Launch Library 2), la elabora e la ripubblica migliore.",
    tags: ["Ruby on Rails", "API", "Faraday"],
    content: `
Un pattern classico: il tuo backend interroga un'API pubblica, salva e arricchisce i dati, e li ri-espone in un formato migliore. È il cuore di un progetto come Launch Tracker.

\`\`\`ruby
require "faraday"
require "json"

class LaunchLibrary
  BASE = "https://ll.thespacedevs.com/2.2.0"

  def self.upcoming
    res = Faraday.get("#{BASE}/launch/upcoming/", { limit: 20 })
    JSON.parse(res.body)["results"].map do |l|
      { name: l["name"], provider: l.dig("launch_service_provider", "name"),
        net: l["net"] }
    end
  end
end
\`\`\`

Interroghi la fonte con \`Faraday\`, ne estrai solo i campi che ti servono con \`dig\` (che non esplode sulle chiavi mancanti), e li normalizzi.

In produzione: fai girare questa chiamata in un **job in background** e salva i risultati in tabella, così i tuoi utenti leggono dal tuo database veloce, non dall'API lenta di qualcun altro.
`,
  },
  {
    id: "javascript-fetch-api",
    title: "JavaScript: fetch, parlare col mondo",
    date: "2026-05-25",
    category: "sviluppo-software",
    icon: "🟨",
    excerpt: "GET, POST, header e gestione errori: tutto quello che serve per chiamare un'API con fetch.",
    tags: ["JavaScript", "Networking"],
    content: `
\`fetch\` è il modo nativo per fare richieste HTTP dal browser. Restituisce una Promise che si risolve in un oggetto \`Response\`.

\`\`\`javascript
// GET
const res = await fetch("/api/launches");
if (!res.ok) throw new Error("HTTP " + res.status);
const data = await res.json();

// POST
await fetch("/api/launches", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Starship" }),
});
\`\`\`

L'insidia numero uno: \`fetch\` **non** rifiuta la Promise sugli errori HTTP (404, 500). Rifiuta solo se la rete cade. Per questo controlli sempre \`res.ok\` prima di leggere il corpo.

Ricorda anche che \`res.json()\` è a sua volta asincrono (va awaitato). Due \`await\` per una risposta: uno per la risposta, uno per il parsing del corpo.
`,
  },
  {
    id: "web-audio-metronomo-preciso",
    title: "Web Audio: un metronomo che non va fuori tempo",
    date: "2026-05-26",
    category: "musica-audio",
    icon: "⏱️",
    excerpt: "setInterval sbanda. Il trucco è schedulare in anticipo sull'orologio audio, preciso al campione.",
    tags: ["Web Audio", "Timing"],
    content: `
Fare un metronomo con \`setInterval\` è la strada per la frustrazione: l'event loop non è puntuale e il click sbanda. La soluzione è schedulare i suoni **in anticipo** usando l'orologio dell'\`AudioContext\`, che è preciso al campione.

\`\`\`javascript
let nextNote = ctx.currentTime;
const interval = 0.5; // 120 BPM

function scheduler() {
  // guarda 100 ms nel futuro e prenota i click
  while (nextNote < ctx.currentTime + 0.1) {
    const osc = ctx.createOscillator();
    osc.frequency.value = 1000;
    osc.connect(ctx.destination);
    osc.start(nextNote);
    osc.stop(nextNote + 0.03);
    nextNote += interval;
  }
  setTimeout(scheduler, 25);
}
scheduler();
\`\`\`

L'idea: un \`setTimeout\` impreciso fa da "sveglia" ogni 25 ms, ma i suoni vengono prenotati con \`osc.start(tempoPreciso)\` sull'orologio audio. Il timing lo decide la scheda audio, non JavaScript.

È il pattern "lookahead scheduler", la base di ogni sequencer serio nel browser.
`,
  },
  {
    id: "sonic-pi-randomizzazione-controllata",
    title: "Sonic Pi: casualità che si ripete con use_random_seed",
    date: "2026-05-27",
    category: "musica-audio",
    icon: "🎲",
    excerpt: "rrand e choose danno varietà; use_random_seed rende la casualità riproducibile. Il paradosso del caso controllato.",
    tags: ["Sonic Pi", "Generative"],
    content: `
La casualità rende la musica viva, ma in Sonic Pi è **deterministica**: con lo stesso seme, la stessa sequenza "casuale". Un paradosso utilissimo.

\`\`\`ruby
use_random_seed 42

live_loop :melodia do
  play choose([:e3, :g3, :a3, :b3]), release: 0.3
  sleep [0.25, 0.5].choose
  play scale(:e3, :minor_pentatonic).choose if one_in(2)
  sleep 0.25
end
\`\`\`

\`choose\` pesca da una lista, \`rrand(1, 5)\` dà un numero casuale, \`one_in(4)\` è vero una volta su quattro. Ma \`use_random_seed 42\` "riavvolge" il generatore: ogni giro del loop riparte dalla stessa sequenza, così il tuo pattern casuale suona sempre uguale.

Cambia il seme e ottieni una variazione completamente diversa, ma altrettanto ripetibile. È il modo per improvvisare e poi "salvare" il caso che ti piaceva.
`,
  },
  {
    id: "ruby-duck-typing",
    title: "Ruby: duck typing, non chiedere il tipo",
    date: "2026-05-28",
    category: "sviluppo-software",
    icon: "💎",
    excerpt: "Se cammina come un'anatra... In Ruby conta cosa un oggetto sa fare, non a quale classe appartiene.",
    tags: ["Ruby", "Design"],
    content: `
In Ruby non chiedi "di che tipo sei?", chiedi "sai fare questo?". È il **duck typing**: se un oggetto risponde ai metodi che ti servono, va bene, indipendentemente dalla sua classe.

\`\`\`ruby
def stampa_tutto(collezione)
  collezione.each { |x| puts x }   # basta che risponda a each
end

stampa_tutto([1, 2, 3])
stampa_tutto({ a: 1 })
stampa_tutto(1..3)
\`\`\`

Nessuno di questi è "un Array", ma tutti rispondono a \`each\`, quindi funzionano. Invece di \`if x.is_a?(Array)\`, ti fidi dell'interfaccia.

Se proprio devi controllare, usa \`respond_to?(:each)\` invece della classe: verifichi il comportamento, non l'etichetta. Questo rende il codice flessibile e facile da estendere: aggiungi una nuova classe che risponde a \`each\` e tutto continua a funzionare.
`,
  },
  {
    id: "rails-background-job-active-job",
    title: "Rails: i job in background, per non far aspettare l'utente",
    date: "2026-05-29",
    category: "sviluppo-software",
    icon: "🛤️",
    excerpt: "Inviare email o chiamare API esterne durante una request è lento. ActiveJob sposta il lavoro fuori.",
    tags: ["Ruby on Rails", "Background Jobs"],
    content: `
Se durante una request fai qualcosa di lento (mandare una mail, chiamare un'API esterna, elaborare dati), l'utente aspetta. La soluzione è spostare quel lavoro in un **job in background**.

\`\`\`ruby
class SyncLaunchesJob < ApplicationJob
  queue_as :default

  def perform
    LaunchLibrary.upcoming.each do |data|
      Launch.upsert(data, unique_by: :name)
    end
  end
end

# nel controller: rispondi subito, lavora dopo
SyncLaunchesJob.perform_later
\`\`\`

\`perform_later\` mette il job in coda e restituisce il controllo immediatamente; un worker separato (Sidekiq, Solid Queue) lo esegue in background.

Così la sincronizzazione dei lanci da un'API lenta non blocca nessuno: la request torna in millisecondi, il lavoro pesante avviene fuori scena. È il modo giusto per tenere l'app reattiva.
`,
  },
  {
    id: "javascript-this-binding",
    title: "JavaScript: capire this una volta per tutte",
    date: "2026-05-30",
    category: "sviluppo-software",
    icon: "🟨",
    excerpt: "Il valore di this dipende da come chiami la funzione, non da dove la scrivi. call, bind e arrow function.",
    tags: ["JavaScript", "Fondamentali"],
    content: `
La confusione su \`this\` nasce da un equivoco: il suo valore dipende da **come** chiami la funzione, non da dove è scritta.

\`\`\`javascript
const user = {
  name: "Ale",
  saluta() { return "Ciao " + this.name; },
};

user.saluta();            // "Ciao Ale"  -> this = user
const f = user.saluta;
f();                      // "Ciao undefined" -> this perso

f.call(user);             // "Ciao Ale" -> this forzato
const legato = user.saluta.bind(user);
legato();                 // "Ciao Ale" -> this legato per sempre
\`\`\`

Chiamata come metodo (\`user.saluta()\`): \`this\` è l'oggetto. Chiamata "sciolta" (\`f()\`): \`this\` si perde. Con \`call\`/\`apply\`/\`bind\` lo imposti tu.

Le **arrow function** sono l'eccezione salvavita: non hanno un proprio \`this\`, ereditano quello del contesto in cui sono definite. Per questo nei callback (\`setTimeout(() => this.x)\`) risolvono metà dei problemi.
`,
  },
  {
    id: "web-audio-drum-machine-browser",
    title: "Web Audio: una drum machine nel browser",
    date: "2026-05-31",
    category: "musica-audio",
    icon: "🥁",
    excerpt: "Sintetizzare cassa e charleston senza campioni: solo oscillatori, rumore e inviluppi.",
    tags: ["Web Audio", "Ritmo", "Sintesi"],
    content: `
Non servono file audio per fare una batteria: la sintetizzi con oscillatori e rumore. Una **cassa** è un'onda che scende di frequenza e volume in fretta.

\`\`\`javascript
function kick(time) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain).connect(ctx.destination);

  osc.frequency.setValueAtTime(150, time);
  osc.frequency.exponentialRampToValueAtTime(50, time + 0.1);
  gain.gain.setValueAtTime(1, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);

  osc.start(time);
  osc.stop(time + 0.15);
}
\`\`\`

Il segreto della cassa è la **pitch envelope**: la frequenza crolla da 150 a 50 Hz in un lampo, e l'orecchio la legge come un "tonf". Un charleston, invece, è rumore bianco filtrato passa-alto con un inviluppo cortissimo.

Sintetizzare la batteria dà controllo totale sul timbro, e pesa zero byte in download.
`,
  },
  {
    id: "sonic-pi-sync-cue",
    title: "Sonic Pi: tenere i loop insieme con sync e cue",
    date: "2026-06-01",
    category: "musica-audio",
    icon: "🔗",
    excerpt: "Loop con tempi diversi tendono a sfasarsi. cue lancia un segnale, sync lo aspetta: ritmo bloccato.",
    tags: ["Sonic Pi", "Live Coding"],
    content: `
Più \`live_loop\` con durate diverse tendono a sfasarsi nel tempo. Per tenerli agganciati usi la coppia \`cue\` (manda un segnale) e \`sync\` (lo aspetta).

\`\`\`ruby
live_loop :metronomo do
  cue :tick            # a ogni giro manda un segnale
  sleep 1
end

live_loop :basso do
  sync :tick           # aspetta il segnale prima di partire
  use_synth :tb303
  play :e2, release: 0.4
end
\`\`\`

Il loop \`:metronomo\` fa da direttore d'orchestra: a ogni battuta emette \`cue :tick\`. Gli altri loop iniziano il giro solo quando ricevono quel segnale con \`sync :tick\`, restando perfettamente allineati.

È il modo giusto per costruire un brano a più strati che non "scivola": un loop guida, tutti gli altri lo seguono. Il groove resta bloccato anche dopo minuti.
`,
  },
  {
    id: "ruby-moduli-mixin",
    title: "Ruby: moduli e mixin, ereditarietà senza catene",
    date: "2026-06-02",
    category: "sviluppo-software",
    icon: "💎",
    excerpt: "include ed extend aggiungono comportamenti condivisi a classi diverse, senza gerarchie rigide.",
    tags: ["Ruby", "Design"],
    content: `
Ruby ha ereditarietà singola: una classe ha un solo genitore. I **moduli** aggirano il limite condividendo comportamenti tra classi diverse tramite \`include\`.

\`\`\`ruby
module Tracciabile
  def log(evento)
    puts "[#{Time.now}] #{self.class}: #{evento}"
  end
end

class Launch
  include Tracciabile
end

class Payload
  include Tracciabile
end

Launch.new.log("creato")   # entrambe hanno .log
\`\`\`

Con \`include\` i metodi del modulo diventano metodi di istanza; con \`extend\` diventano metodi di classe. È il pattern dei **mixin**: componi comportamenti come mattoncini invece di ereditare da una super-classe gigante.

Rails ne è pieno (\`Comparable\`, \`Enumerable\`, i \`Concern\`). Un modulo per responsabilità, incluso dove serve: codice condiviso senza gerarchie fragili.
`,
  },
  {
    id: "rails-hotwire-turbo",
    title: "Rails: Hotwire e Turbo, SPA senza scrivere JS",
    date: "2026-06-03",
    category: "sviluppo-software",
    icon: "🛤️",
    excerpt: "Turbo aggiorna porzioni di pagina inviando HTML dal server. Interattività moderna, quasi zero JavaScript.",
    tags: ["Ruby on Rails", "Hotwire"],
    content: `
**Hotwire** è la scommessa di Rails: interfacce reattive inviando HTML invece di JSON, con pochissimo JavaScript. Il pezzo centrale è **Turbo**.

\`\`\`erb
<%# la lista si aggiorna da sola quando cambia %>
<turbo-frame id="launches">
  <%= render @launches %>
</turbo-frame>
\`\`\`

\`\`\`ruby
# il controller trasmette un aggiornamento a chi guarda
def create
  @launch = Launch.create!(launch_params)
  render turbo_stream: turbo_stream.prepend("launches", @launch)
end
\`\`\`

I **Turbo Frame** isolano porzioni di pagina che si aggiornano da sole; i **Turbo Stream** spingono frammenti di HTML dal server (anche via WebSocket) e il DOM si aggiorna senza reload.

Il vantaggio: ottieni gran parte della reattività di una SPA restando in Rails, scrivendo view invece di componenti. Per molte app CRUD è più che sufficiente, e ti risparmi un intero frontend separato.
`,
  },
  {
    id: "javascript-prototipi-ereditarieta",
    title: "JavaScript: i prototipi dietro le classi",
    date: "2026-06-04",
    category: "sviluppo-software",
    icon: "🟨",
    excerpt: "Le class sono zucchero: sotto c'è la catena dei prototipi. Capirla spiega perché tutto funziona.",
    tags: ["JavaScript", "Fondamentali"],
    content: `
Le \`class\` in JavaScript sono zucchero sintattico: sotto, l'ereditarietà è basata su **prototipi**. Ogni oggetto ha un collegamento a un altro oggetto (il suo prototipo) da cui eredita metodi.

\`\`\`javascript
const animale = {
  parla() { return "..."; },
};

const cane = Object.create(animale);
cane.parla = function () { return "Bau"; };

cane.parla();          // "Bau" (proprio)
cane.hasOwnProperty("parla"); // true
Object.getPrototypeOf(cane) === animale; // true
\`\`\`

Quando chiami un metodo, JavaScript lo cerca sull'oggetto; se non c'è, risale la **catena dei prototipi** finché lo trova (o arriva a \`null\`). È così che \`[].map\` funziona: \`map\` vive su \`Array.prototype\`.

Capire la catena spiega tanti misteri: perché \`class extends\` funziona, perché aggiungere a \`Array.prototype\` è pericoloso, e perché \`Object.create\` è ereditarietà allo stato puro.
`,
  },
  {
    id: "web-audio-sequencer-step",
    title: "Web Audio: un sequencer a step in JavaScript",
    date: "2026-06-05",
    category: "musica-audio",
    icon: "🎚️",
    excerpt: "Un array di 0 e 1 diventa un pattern ritmico. La logica dietro ogni drum machine software.",
    tags: ["Web Audio", "Ritmo"],
    content: `
Un sequencer a step è, in fondo, un array di booleani letto in loop: a ogni passo, se è acceso, suoni.

\`\`\`javascript
const pattern = [1, 0, 0, 1, 0, 0, 1, 0]; // 8 step
let step = 0;
let nextTime = ctx.currentTime;
const stepDur = 0.15;

function scheduler() {
  while (nextTime < ctx.currentTime + 0.1) {
    if (pattern[step]) kick(nextTime); // suona se lo step e' acceso
    step = (step + 1) % pattern.length;
    nextTime += stepDur;
  }
  setTimeout(scheduler, 25);
}
scheduler();
\`\`\`

Unisci due idee viste prima: il **lookahead scheduler** per il timing preciso e la funzione \`kick\` che sintetizza il suono. Il \`pattern\` è lo spartito.

Da qui a una drum machine completa il passo è breve: più array (uno per strumento), una UI di caselle cliccabili che accendono e spengono gli step, e hai ricostruito una Roland TR nel browser.
`,
  },
  {
    id: "sonic-pi-bassline-tb303",
    title: "Sonic Pi: una bassline acid con il TB-303",
    date: "2026-06-06",
    category: "musica-audio",
    icon: "🎚️",
    excerpt: "Il cutoff che si muove è la firma dell'acid. Ricostruiamo quel basso ipnotico in poche righe.",
    tags: ["Sonic Pi", "Sintesi"],
    content: `
Il suono "acid" nasce da un sintetizzatore leggendario, il Roland TB-303, e dal suo filtro che si apre e chiude di continuo. In Sonic Pi lo ricrei con \`:tb303\` e un \`cutoff\` che si muove.

\`\`\`ruby
use_bpm 128

live_loop :acid, sync: :drums do
  use_synth :tb303
  notes = (ring :e1, :e2, :g1, :a1)
  play notes.tick,
    release: 0.2,
    cutoff: rrand(60, 120),   # il filtro balla a ogni nota
    res: 0.85                 # risonanza alta = miele acido
  sleep 0.25
end
\`\`\`

Le chiavi: \`cutoff\` casuale a ogni nota fa "cantare" il filtro, \`res\` alta enfatizza la frequenza di taglio, \`.tick\` scorre le note in ordine. Cambia il \`ring\` di note e cambi la linea di basso.

Aggiungi un \`with_fx :distortion\` attorno e ottieni quel ringhio sporco tipico dell'acid techno.
`,
  },
  {
    id: "ruby-gestione-errori",
    title: "Ruby: gestire gli errori con begin/rescue/ensure",
    date: "2026-06-07",
    category: "sviluppo-software",
    icon: "💎",
    excerpt: "Sollevare, catturare e ripulire. E perché rescue senza classe è quasi sempre un errore.",
    tags: ["Ruby", "Errori"],
    content: `
In Ruby gli errori sono oggetti (\`Exception\`) che si sollevano con \`raise\` e si catturano con \`rescue\`.

\`\`\`ruby
def leggi_config(path)
  File.read(path)
rescue Errno::ENOENT
  puts "File non trovato, uso i default"
  "{}"
rescue JSON::ParserError => e
  raise "Config non valida: #{e.message}"
ensure
  puts "Tentativo di lettura completato"
end
\`\`\`

Cattura **classi specifiche**, non tutto: un \`rescue\` nudo (senza classe) prende anche errori che non ti aspetti e nasconde bug veri. \`ensure\` gira sempre, con o senza errore: perfetto per chiudere file e connessioni.

Puoi anche usare \`retry\` dentro un \`rescue\` per ritentare (utile con le reti instabili). Ma metti un contatore, o rischi un loop infinito. La regola: cattura solo ciò che sai gestire, lascia esplodere il resto.
`,
  },
  {
    id: "rails-stimulus-js-leggero",
    title: "Rails: Stimulus, JavaScript giusto quel che basta",
    date: "2026-06-08",
    category: "sviluppo-software",
    icon: "🛤️",
    excerpt: "Stimulus collega comportamenti JS all'HTML tramite data-attribute. Niente framework pesanti per piccole interazioni.",
    tags: ["Ruby on Rails", "JavaScript", "Hotwire"],
    content: `
Per le piccole interazioni (un menu, un contatore, un toggle) non serve React. **Stimulus**, parte di Hotwire, collega comportamenti JavaScript all'HTML tramite \`data-attribute\`.

\`\`\`html
<div data-controller="clipboard">
  <input data-clipboard-target="source" value="ciao">
  <button data-action="click->clipboard#copy">Copia</button>
</div>
\`\`\`

\`\`\`javascript
// clipboard_controller.js
import { Controller } from "@hotwired/stimulus";
export default class extends Controller {
  static targets = ["source"];
  copy() {
    navigator.clipboard.writeText(this.sourceTarget.value);
  }
}
\`\`\`

L'HTML dichiara *cosa* fa (il controller, i target, le action); il JavaScript dice *come*. Stimulus non genera l'HTML, si aggancia a quello che c'è già, anche a quello arrivato via Turbo.

Filosofia opposta a React: l'HTML resta il protagonista, il JavaScript è un condimento leggero. Per un'app Rails, spesso è tutto ciò che serve.
`,
  },
  {
    id: "javascript-debounce-throttle",
    title: "JavaScript: debounce e throttle, domare gli eventi",
    date: "2026-06-09",
    category: "sviluppo-software",
    icon: "🟨",
    excerpt: "Ricerca live, scroll, resize: eventi che sparano centinaia di volte. Debounce e throttle li tengono a bada.",
    tags: ["JavaScript", "Performance"],
    content: `
Eventi come \`input\`, \`scroll\` e \`resize\` scattano decine di volte al secondo. Chiamare un'API o un calcolo pesante a ogni scatto è uno spreco. Due tecniche lo risolvono.

\`\`\`javascript
function debounce(fn, ms) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

// esegue solo 300ms DOPO l'ultimo carattere digitato
input.addEventListener("input", debounce(cerca, 300));
\`\`\`

Il **debounce** aspetta che l'utente smetta (ideale per la ricerca live: chiami l'API una volta, non a ogni tasto). Il **throttle**, invece, esegue al massimo una volta ogni X ms a prescindere (ideale per lo scroll: aggiorni la UI a ritmo costante).

Debounce = "aspetta la pausa". Throttle = "a intervalli regolari". Sceglierne uno giusto trasforma una UI che arranca in una fluida.
`,
  },
  {
    id: "web-audio-web-midi-api",
    title: "Web MIDI: suonare il browser con una tastiera vera",
    date: "2026-06-10",
    category: "musica-audio",
    icon: "🎹",
    excerpt: "La Web MIDI API collega controller hardware alla pagina. Ogni tasto premuto diventa un evento JS.",
    tags: ["Web Audio", "MIDI"],
    content: `
La **Web MIDI API** collega un controller hardware (una tastiera MIDI, dei pad) direttamente al browser. Ogni tasto premuto arriva come un evento JavaScript.

\`\`\`javascript
const access = await navigator.requestMIDIAccess();

for (const input of access.inputs.values()) {
  input.onmidimessage = (msg) => {
    const [status, note, velocity] = msg.data;
    if (status === 144 && velocity > 0) {
      suonaNota(note);   // 144 = "note on"
    }
  };
}
\`\`\`

Il messaggio MIDI sono tre byte: il tipo di evento (144 = note on, 128 = note off), il numero di nota e la velocity (quanto forte). Da lì converti la nota MIDI in frequenza e la passi a un \`OscillatorNode\`.

In poche righe hai un synth suonabile con hardware vero, dentro una pagina web. È lo stesso protocollo MIDI che collega Sonic Pi a una tastiera: linguaggio universale della musica digitale.
`,
  },
  {
    id: "sonic-pi-slicing-campioni",
    title: "Sonic Pi: affettare i campioni con slice e stretch",
    date: "2026-06-11",
    category: "musica-audio",
    icon: "✂️",
    excerpt: "start, finish e beat_stretch trasformano un break in materiale nuovo. Il cuore del campionamento.",
    tags: ["Sonic Pi", "Campioni"],
    content: `
Un singolo campione può diventare infinito materiale se lo **affetti**. Con \`start\` e \`finish\` suoni solo una porzione, con \`beat_stretch\` lo sincronizzi al tempo.

\`\`\`ruby
use_bpm 120

live_loop :chop do
  fetta = (line 0, 1, steps: 8).tick   # 8 fette
  sample :loop_amen,
    start: fetta,
    finish: fetta + 0.125,
    beat_stretch: 2
  sleep 0.25
end
\`\`\`

\`start\` e \`finish\` vanno da 0 a 1 (inizio e fine del campione): qui prendo una fetta da 1/8 per volta. \`.tick\` avanza a ogni giro, così scorro tutto il break un pezzo alla volta. \`beat_stretch\` allunga o comprime il campione per farlo stare in un numero di battute.

Rimescola l'ordine delle fette (con \`choose\` invece di \`tick\`) e lo stesso break Amen diventa un ritmo completamente nuovo. È l'arte del chopping, in una manciata di righe.
`,
  },
  {
    id: "ruby-creare-una-gem",
    title: "Ruby: creare e pubblicare la tua prima gem",
    date: "2026-06-12",
    category: "sviluppo-software",
    icon: "💎",
    excerpt: "bundle gem impalca tutto. Struttura, versione e push su RubyGems: condividere codice è facile.",
    tags: ["Ruby", "Gem", "Open Source"],
    content: `
Una **gem** è un pacchetto Ruby riutilizzabile. Crearne una è sorprendentemente semplice: Bundler impalca tutto per te.

\`\`\`bash
bundle gem saluti
\`\`\`

Ti genera struttura, test, licenza e il file \`.gemspec\`. Il codice va in \`lib/\`:

\`\`\`ruby
# lib/saluti.rb
module Saluti
  def self.ciao(nome)
    "Ciao, #{nome}!"
  end
end
\`\`\`

Poi costruisci e pubblichi:

\`\`\`bash
gem build saluti.gemspec
gem push saluti-0.1.0.gem   # su rubygems.org
\`\`\`

I punti chiave: versiona con cura (segui il semantic versioning nel file \`version.rb\`), scrivi un README chiaro e aggiungi qualche test. Da quel momento chiunque installa il tuo codice con \`gem install saluti\`.

È il modo con cui l'ecosistema Ruby cresce: piccoli mattoni condivisi. La tua prima gem può essere anche solo un'utility che usi in più progetti.
`,
  },
  {
    id: "rails-caching-basi",
    title: "Rails: il caching, ricordare invece di ricalcolare",
    date: "2026-06-13",
    category: "sviluppo-software",
    icon: "🛤️",
    excerpt: "Rails.cache.fetch memorizza risultati costosi. La regola: se è lento e cambia poco, mettilo in cache.",
    tags: ["Ruby on Rails", "Performance", "Cache"],
    content: `
Il modo più semplice per rendere un'app Rails veloce è **non rifare** il lavoro costoso. \`Rails.cache.fetch\` calcola una volta e ricorda.

\`\`\`ruby
def statistiche_lanci
  Rails.cache.fetch("stats/launches", expires_in: 1.hour) do
    {
      totale: Launch.count,
      per_anno: Launch.group_by_year(:net).count,
      successi: Launch.success.count,
    }
  end
end
\`\`\`

La prima chiamata esegue il blocco (le query pesanti) e salva il risultato; le successive, per un'ora, restituiscono il valore memorizzato in millisecondi. Alla scadenza si ricalcola.

La domanda giusta è: "questo dato è costoso da produrre e cambia di rado?". Se sì, è un candidato perfetto per la cache. Statistiche, classifiche, risposte di API esterne.

Attento a due cose: scegliere una **chiave** che identifichi bene il dato, e invalidare la cache quando i dati cambiano davvero. Il caching è potente, ma dati vecchi mostrati come nuovi sono un bug.
`,
  },
  {
    id: "javascript-generatori",
    title: "JavaScript: i generatori, funzioni che si mettono in pausa",
    date: "2026-06-14",
    category: "sviluppo-software",
    icon: "🟨",
    excerpt: "function* e yield producono valori uno alla volta, anche infiniti. Sequenze pigre e su richiesta.",
    tags: ["JavaScript", "Avanzato"],
    content: `
Un **generatore** è una funzione che può mettersi in pausa e riprendere, producendo valori uno alla volta con \`yield\`.

\`\`\`javascript
function* contatore() {
  let n = 1;
  while (true) {
    yield n++;   // produce un valore e si ferma qui
  }
}

const gen = contatore();
gen.next().value; // 1
gen.next().value; // 2

// sequenza infinita, ma calcolata su richiesta
function* primiN(n) {
  for (let i = 0; i < n; i++) yield i * i;
}
[...primiN(4)]; // [0, 1, 4, 9]
\`\`\`

Ogni \`next()\` esegue fino al prossimo \`yield\` e si ferma, ricordando lo stato. Questo permette sequenze **infinite** ma **pigre**: calcoli un valore solo quando lo chiedi.

Sono la base degli iteratori personalizzati e delle librerie di streaming di dati. Un concetto di nicchia, ma quando serve (dati infiniti, pipeline lazy) non ha rivali per eleganza.
`,
  },
  {
    id: "web-audio-analyser-visualizzare",
    title: "Web Audio: visualizzare il suono con l'AnalyserNode",
    date: "2026-06-15",
    category: "musica-audio",
    icon: "📊",
    excerpt: "L'AnalyserNode estrae forma d'onda e spettro in tempo reale. Da lì a un visualizer su canvas è un attimo.",
    tags: ["Web Audio", "Visualizzazione"],
    content: `
L'**AnalyserNode** ti dà i dati grezzi del suono in tempo reale: la forma d'onda e lo spettro delle frequenze. È il ponte tra audio e grafica.

\`\`\`javascript
const analyser = ctx.createAnalyser();
analyser.fftSize = 2048;
source.connect(analyser);
analyser.connect(ctx.destination);

const dati = new Uint8Array(analyser.frequencyBinCount);

function disegna() {
  requestAnimationFrame(disegna);
  analyser.getByteFrequencyData(dati); // riempi con lo spettro attuale
  // ...disegna 'dati' su un <canvas> come barre
}
disegna();
\`\`\`

\`getByteFrequencyData\` riempie un array con l'intensità di ogni banda di frequenza; \`getByteTimeDomainData\` ti dà invece la forma d'onda. Leggi questi valori dentro un loop di \`requestAnimationFrame\` e li disegni su un canvas.

Bassi a sinistra, alti a destra: ecco lo spettro che pulsa a ritmo. È il classico visualizer, e sono meno di venti righe. L'audio smette di essere invisibile.
`,
  },
  {
    id: "sonic-pi-generative-ring-tick",
    title: "Sonic Pi: musica generativa con ring, tick e look",
    date: "2026-06-16",
    category: "musica-audio",
    icon: "🌱",
    excerpt: "Un ring è una lista circolare; tick la scorre all'infinito. La base per pattern che si evolvono da soli.",
    tags: ["Sonic Pi", "Generative"],
    content: `
La musica generativa è codice che compone al posto tuo. In Sonic Pi il mattone è il \`ring\`: una lista circolare che scorri con \`.tick\`.

\`\`\`ruby
notes = (ring :c4, :e4, :g4, :b4, :a4)

live_loop :arp do
  play notes.tick, release: 0.2   # avanza a ogni giro, poi ricomincia
  sleep 0.25
end

# due ring di lunghezza diversa creano pattern che si spostano
durate = (ring 0.25, 0.25, 0.5)
live_loop :ritmo do
  sample :bd_haus
  sleep durate.tick
end
\`\`\`

\`.tick\` avanza di uno a ogni chiamata e torna all'inizio quando finisce; \`.look\` guarda il valore corrente senza avanzare. La magia nasce quando combini \`ring\` di lunghezze diverse: le note e le durate si sfasano, generando pattern che si evolvono per decine di battute prima di ripetersi.

Poca scrittura, tanta musica: è il fascino del generativo.
`,
  },
  {
    id: "ruby-rspec-testare",
    title: "Ruby: testare con RSpec, la rete di sicurezza",
    date: "2026-06-17",
    category: "sviluppo-software",
    icon: "💎",
    excerpt: "describe, it, expect: RSpec rende i test leggibili come frasi. Scrivere test è progettare meglio.",
    tags: ["Ruby", "Testing", "RSpec"],
    content: `
**RSpec** è il framework di test più amato in Ruby. La sua forza è la leggibilità: un test si legge quasi come una frase in inglese.

\`\`\`ruby
RSpec.describe Launch do
  describe "#successful?" do
    it "e' true quando lo status e' success" do
      launch = Launch.new(status: "success")
      expect(launch.successful?).to be true
    end

    it "e' false altrimenti" do
      expect(Launch.new(status: "failure").successful?).to be false
    end
  end
end
\`\`\`

\`describe\` raggruppa, \`it\` descrive un comportamento, \`expect(...).to ...\` fa l'asserzione. Lanci \`rspec\` e hai la conferma (o la smentita) che il codice fa ciò che dici.

Il valore vero non è "trovare bug": è **progettare meglio**. Se un metodo è difficile da testare, di solito è mal disegnato. Scrivere il test prima ti costringe a pensare all'interfaccia. E quando rifattorizzi, i test ti dicono se hai rotto qualcosa.
`,
  },
  {
    id: "rails-service-objects",
    title: "Rails: i service object, dove mettere la logica complessa",
    date: "2026-06-18",
    category: "sviluppo-software",
    icon: "🛤️",
    excerpt: "Quando un'azione non è di nessun model in particolare, un service object la incapsula pulita e testabile.",
    tags: ["Ruby on Rails", "Architettura"],
    content: `
Con la crescita dell'app, certe operazioni non appartengono a nessun model in particolare: coinvolgono più oggetti, chiamate esterne, passaggi. Metterle nel controller lo gonfia; metterle in un model lo snatura. La risposta è un **service object**.

\`\`\`ruby
class SyncLaunches
  def initialize(source: LaunchLibrary)
    @source = source
  end

  def call
    @source.upcoming.map do |data|
      Launch.upsert(data, unique_by: :name)
    end
  end
end

# nel controller, una riga:
SyncLaunches.new.call
\`\`\`

Un service object è una semplice classe Ruby con un metodo pubblico (di solito \`call\`) che fa **una** cosa. Riceve le dipendenze nel costruttore (comodo per i test), incapsula il flusso, restituisce un risultato.

Vantaggi: controller magri, logica testabile in isolamento, nomi che raccontano cosa fa l'app (\`SyncLaunches\`, \`RegisterUser\`, \`ChargeOrder\`). Non è magia di Rails: è solo buon design a oggetti applicato con disciplina.
`,
  },
  {
    id: "javascript-proxy-reflect",
    title: "JavaScript: Proxy, intercettare ogni accesso a un oggetto",
    date: "2026-06-19",
    category: "sviluppo-software",
    icon: "🟨",
    excerpt: "Un Proxy avvolge un oggetto e intercetta letture e scritture. La magia dietro la reattività di Vue.",
    tags: ["JavaScript", "Avanzato"],
    content: `
Un **Proxy** avvolge un oggetto e intercetta le operazioni su di esso: letture, scritture, cancellazioni. È come mettere un guardiano davanti a ogni proprietà.

\`\`\`javascript
const target = { nome: "Ale", eta: 30 };

const p = new Proxy(target, {
  get(obj, prop) {
    console.log("Letto:", prop);
    return obj[prop];
  },
  set(obj, prop, val) {
    if (prop === "eta" && val < 0) throw new Error("età non valida");
    obj[prop] = val;
    return true;
  },
});

p.nome;        // logga "Letto: nome" -> "Ale"
p.eta = -5;    // Error: età non valida
\`\`\`

Le "trap" (\`get\`, \`set\`, \`has\`, \`deleteProperty\`) ti fanno agganciare logica a ogni operazione: validazione, logging, valori calcolati, proprietà virtuali.

È il meccanismo dietro la reattività di Vue 3 e di molte librerie di stato: quando leggi una proprietà, il Proxy registra la dipendenza; quando la scrivi, notifica chi la osserva. Potente, ma con un piccolo costo in performance: usalo dove serve davvero.
`,
  },
  {
    id: "web-audio-audioworklet",
    title: "Web Audio: DSP su misura con AudioWorklet",
    date: "2026-06-20",
    category: "musica-audio",
    icon: "⚙️",
    excerpt: "Quando i nodi predefiniti non bastano, l'AudioWorklet ti fa scrivere l'elaborazione campione per campione.",
    tags: ["Web Audio", "Avanzato", "DSP"],
    content: `
I nodi predefiniti coprono molto, ma se vuoi un tuo effetto o sintetizzatore campione-per-campione ti serve l'**AudioWorklet**: codice che gira nel thread audio, ad alta priorità.

\`\`\`javascript
// noise-processor.js (gira nel thread audio)
class Noise extends AudioWorkletProcessor {
  process(inputs, outputs) {
    const out = outputs[0];
    for (const channel of out) {
      for (let i = 0; i < channel.length; i++) {
        channel[i] = Math.random() * 2 - 1; // rumore bianco
      }
    }
    return true; // continua a girare
  }
}
registerProcessor("noise", Noise);
\`\`\`

\`\`\`javascript
// nel thread principale
await ctx.audioWorklet.addModule("noise-processor.js");
const noise = new AudioWorkletNode(ctx, "noise");
noise.connect(ctx.destination);
\`\`\`

Il metodo \`process\` riceve i buffer di input e output e li riempie campione per campione. Girando in un thread dedicato, non soffre dei blocchi dell'event loop: niente glitch audio.

È il livello più basso della Web Audio API, quello dove scrivi vero DSP. Sintetizzatori custom, distorsioni particolari, algoritmi tuoi: qui non hai limiti.
`,
  },
  {
    id: "sonic-pi-midi-controllo",
    title: "Sonic Pi: controllare tutto con una tastiera MIDI",
    date: "2026-06-21",
    category: "musica-audio",
    icon: "🎛️",
    excerpt: "sync con eventi MIDI e get/set per le manopole: trasforma un controller in un'interfaccia dal vivo.",
    tags: ["Sonic Pi", "MIDI", "Live Coding"],
    content: `
Sonic Pi riceve MIDI da qualsiasi controller collegato. Puoi suonare le note con una tastiera o mappare le manopole ai parametri del codice, dal vivo.

\`\`\`ruby
# suona quando premi un tasto della tastiera MIDI
live_loop :tastiera do
  note, velocity = sync "/midi:*/note_on"
  synth :piano, note: note, amp: velocity / 127.0
end

# usa una manopola per pilotare il cutoff
live_loop :basso do
  cutoff = (get(:knob) || 70)
  synth :tb303, note: :e2, cutoff: cutoff, release: 0.3
  sleep 0.25
end
\`\`\`

Ogni evento MIDI diventa un messaggio che intercetti con \`sync "/midi:.../note_on"\`. I valori delle manopole li leggi con \`get\`/\`set\`, aggiornandoli mentre suoni.

Il risultato: un'esibizione dove la tastiera controlla le note e le manopole plasmano il suono, mentre il codice resta il motore. Hardware ed editing dal vivo che si fondono: l'essenza di un set di live coding.
`,
  },
  {
    id: "ruby-ractor-concorrenza",
    title: "Ruby 3: i Ractor e la concorrenza vera",
    date: "2026-06-22",
    category: "sviluppo-software",
    icon: "💎",
    excerpt: "I Ractor eseguono codice Ruby in parallelo davvero, senza condividere stato mutabile. Addio GIL, con regole.",
    tags: ["Ruby", "Ruby 3", "Concorrenza"],
    content: `
Storicamente il GIL di Ruby impediva l'esecuzione parallela di thread. Ruby 3 ha introdotto i **Ractor**, che eseguono codice davvero in parallelo isolando lo stato.

\`\`\`ruby
lavoratori = 4.times.map do |i|
  Ractor.new(i) do |n|
    # calcolo pesante, in parallelo su piu' core
    (1..1_000_000).sum { |x| x * n }
  end
end

risultati = lavoratori.map(&:take)  # raccogli gli esiti
\`\`\`

La regola d'oro: i Ractor **non condividono** stato mutabile. Comunicano solo passando messaggi (\`send\`/\`take\`), e gli oggetti condivisi devono essere immutabili (\`freeze\`). Questo elimina alla radice le race condition.

È un modello alla "actor" (come Erlang): isolamento invece di lock. In cambio dell'assenza di stato condiviso, ottieni parallelismo reale per lavori CPU-bound.

Ancora sperimentale in alcuni aspetti, ma è la direzione di Ruby per sfruttare i core moderni senza il caos dei thread condivisi.
`,
  },
  {
    id: "rails-problema-n-piu-1",
    title: "Rails: il problema N+1 e come ucciderlo con includes",
    date: "2026-06-23",
    category: "sviluppo-software",
    icon: "🛤️",
    excerpt: "Una lista che fa una query per riga: il killer silenzioso delle performance. includes lo risolve.",
    tags: ["Ruby on Rails", "Performance", "ActiveRecord"],
    content: `
Il bug di performance più comune in Rails è il **problema N+1**: una query per prendere la lista, più una query per ogni elemento. Con 100 lanci, 101 query.

\`\`\`ruby
# MALE: 1 query per i lanci + N query per i provider
Launch.limit(100).each do |launch|
  puts launch.provider.name   # <- una query a ogni giro!
end

# BENE: 2 query in totale
Launch.includes(:provider).limit(100).each do |launch|
  puts launch.provider.name   # provider gia' caricato
end
\`\`\`

\`includes\` dice a Rails di caricare in anticipo le associazioni (eager loading): fa una query per i lanci e una sola per tutti i provider, invece di N.

Il problema è insidioso perché in sviluppo, con pochi dati, non lo noti; in produzione, con migliaia di righe, la pagina crolla. Strumenti come il gem \`bullet\` te lo segnalano in tempo reale.

Regola: ogni volta che in un ciclo accedi a un'associazione, chiediti se serve un \`includes\`. Due query battono sempre centouno.
`,
  },
  {
    id: "javascript-intl-formattazione",
    title: "JavaScript: Intl, date e valute nella lingua giusta",
    date: "2026-06-24",
    category: "sviluppo-software",
    icon: "🟨",
    excerpt: "Niente librerie per formattare date, numeri e valute: Intl è nativo e conosce ogni lingua.",
    tags: ["JavaScript", "i18n"],
    content: `
Per formattare date, numeri e valute non serve una libreria: il browser ha l'oggetto nativo **Intl**, che conosce le convenzioni di ogni lingua.

\`\`\`javascript
new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
}).format(1234.5); // "1.234,50 €"

new Intl.DateTimeFormat("it-IT", {
  dateStyle: "long",
}).format(new Date()); // "24 giugno 2026"

new Intl.RelativeTimeFormat("it").format(-2, "day"); // "2 giorni fa"
\`\`\`

Cambi la stringa della lingua (\`"en-US"\`, \`"de-DE"\`) e la formattazione si adatta da sola: separatore delle migliaia, posizione del simbolo di valuta, nome del mese. Nessun \`if lingua === ...\`.

C'è anche \`Intl.Collator\` per ordinare le stringhe rispettando gli accenti, e \`Intl.PluralRules\` per i plurali. È uno degli angoli più sottovalutati della piattaforma: risolve gratis problemi che intere librerie affrontano a fatica.
`,
  },
  {
    id: "web-audio-tone-js",
    title: "Tone.js: la Web Audio API con le batterie incluse",
    date: "2026-06-25",
    category: "musica-audio",
    icon: "🎵",
    excerpt: "Synth, sequencer e trasporto pronti all'uso. Tone.js ti fa comporre invece di gestire i nodi a mano.",
    tags: ["Web Audio", "Tone.js", "Musica"],
    content: `
La Web Audio API è potente ma verbosa. **Tone.js** ci costruisce sopra un livello musicale: sintetizzatori, effetti e un "trasporto" con un tempo, pronti all'uso.

\`\`\`javascript
import * as Tone from "tone";

const synth = new Tone.PolySynth().toDestination();

// una sequenza sincronizzata al tempo globale
const seq = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, "8n", time);
}, ["C4", "E4", "G4", "B4"], "4n");

Tone.Transport.bpm.value = 120;
Tone.Transport.start();
seq.start(0);
\`\`\`

\`Tone.Transport\` è un orologio musicale globale al quale agganci tutto; le durate le scrivi in notazione musicale (\`"8n"\` = un ottavo). Il timing preciso al campione, che con la Web Audio nuda dovresti gestire a mano, qui è automatico.

Se la Web Audio API è l'assembly del suono nel browser, Tone.js è il linguaggio ad alto livello. Perfetto quando vuoi comporre, non reimplementare uno scheduler.
`,
  },
  {
    id: "sonic-pi-use-bpm-tempo",
    title: "Sonic Pi: il tempo con use_bpm e le durate musicali",
    date: "2026-06-26",
    category: "musica-audio",
    icon: "🕰️",
    excerpt: "use_bpm cambia il significato di sleep. Pensare in battute invece che in secondi cambia tutto.",
    tags: ["Sonic Pi", "Timing"],
    content: `
Di default in Sonic Pi \`sleep 1\` dura un secondo. Ma con \`use_bpm\` cambi l'unità di misura: \`sleep 1\` diventa "un beat", e la velocità del brano la decidi in battiti al minuto.

\`\`\`ruby
use_bpm 128   # da qui, sleep conta in beat, non in secondi

live_loop :beat do
  sample :bd_haus
  sleep 1       # un movimento
end

live_loop :hats do
  sample :drum_cymbal_closed
  sleep 0.25    # un sedicesimo
end
\`\`\`

A 128 BPM, \`sleep 1\` dura circa 0,47 secondi. Il vantaggio è enorme: ragioni in **termini musicali** (movimenti, sedicesimi) invece che in secondi. Cambia il \`use_bpm\` e tutto il brano accelera o rallenta restando in sync.

Puoi anche usare \`use_bpm_mul 2\` per raddoppiare localmente il tempo di un loop. Pensare in beat invece che in secondi è il passaggio mentale che ti fa smettere di calcolare e iniziare a comporre.
`,
  },
  {
    id: "ruby-ampersand-symbol-shorthand",
    title: "Ruby: il misterioso &:metodo spiegato",
    date: "2026-06-27",
    category: "sviluppo-software",
    icon: "💎",
    excerpt: "map(&:upcase) sembra magia. In realtà è una conversione elegante da simbolo a blocco. Ecco come.",
    tags: ["Ruby", "Fondamentali"],
    content: `
Prima o poi in Ruby incontri \`map(&:upcase)\` e ti chiedi cosa diavolo sia quel \`&:\`. È una delle sintassi più eleganti del linguaggio.

\`\`\`ruby
%w[ciao mondo].map(&:upcase)   # => ["CIAO", "MONDO"]

# è esattamente equivalente a:
%w[ciao mondo].map { |s| s.upcase }
\`\`\`

Il meccanismo: \`&\` converte l'oggetto che segue in un blocco. Quando lo applichi a un simbolo, Ruby chiama \`Symbol#to_proc\`, che genera un blocco del tipo \`{ |x| x.upcase }\`. In pratica, "chiama questo metodo su ogni elemento".

Funziona con qualsiasi metodo senza argomenti: \`.map(&:to_i)\`, \`.select(&:even?)\`, \`.reject(&:nil?)\`, \`.each(&:save)\`.

Puoi usare \`&\` anche per passare un blocco già pronto: \`def stampa(&blocco); blocco.call; end\`. Ma il caso d'uso quotidiano è quello: trasformare "chiama questo metodo su tutti" in tre caratteri. Idiomatico, conciso, ovunque nel codice Ruby.
`,
  },
  {
    id: "rails-strong-parameters",
    title: "Rails: strong parameters, il buttafuori dei form",
    date: "2026-06-28",
    category: "sviluppo-software",
    icon: "🛤️",
    excerpt: "params.require.permit decide quali campi accetti. Senza, un utente furbo potrebbe scriversi admin: true.",
    tags: ["Ruby on Rails", "Sicurezza"],
    content: `
Quando salvi i dati di un form, non ti puoi fidare di ciò che arriva. Gli **strong parameters** impongono una whitelist: solo i campi che permetti esplicitamente passano.

\`\`\`ruby
class LaunchesController < ApplicationController
  def create
    @launch = Launch.create!(launch_params)
    redirect_to @launch
  end

  private

  def launch_params
    params.require(:launch).permit(:name, :provider, :net)
  end
end
\`\`\`

\`require(:launch)\` pretende che ci sia la chiave giusta; \`permit(...)\` lascia passare solo i campi elencati. Tutto il resto viene scartato silenziosamente.

Perché è vitale: senza questa barriera, un utente malintenzionato potrebbe inviare nel form un campo non previsto, per esempio \`admin: true\` o \`role: "superadmin"\`, e ritrovarsi privilegi che non doveva avere. È il famoso "mass assignment", una vulnerabilità classica.

La regola: permetti solo ciò che l'utente deve davvero poter impostare. Il buttafuori all'ingresso decide chi entra, non chi bussa.
`,
  },
  {
    id: "javascript-web-workers",
    title: "JavaScript: i Web Worker, calcoli senza bloccare la UI",
    date: "2026-06-29",
    category: "sviluppo-software",
    icon: "🟨",
    excerpt: "Un thread separato per il lavoro pesante. La pagina resta fluida mentre il worker macina i numeri.",
    tags: ["JavaScript", "Performance"],
    content: `
JavaScript ha un solo thread, quindi un calcolo pesante congela l'interfaccia. I **Web Worker** eseguono codice in un thread separato: la UI resta fluida.

\`\`\`javascript
// main.js
const worker = new Worker("worker.js");
worker.postMessage({ numeri: grandeArray });
worker.onmessage = (e) => console.log("Risultato:", e.data);

// worker.js
onmessage = (e) => {
  const somma = e.data.numeri.reduce((a, b) => a + b, 0);
  postMessage(somma); // rimanda il risultato al thread principale
};
\`\`\`

I due mondi non condividono memoria: comunicano solo con messaggi (\`postMessage\`) e li ricevono con \`onmessage\`. Il worker non può toccare il DOM, ma può fare qualsiasi calcolo, chiamare \`fetch\`, elaborare dati.

Quando usarli: parsing di file enormi, elaborazione di immagini, crittografia, qualsiasi cosa impieghi più di qualche decina di millisecondi. Sposti il carico fuori dal thread principale e l'utente continua a scrollare e cliccare senza scatti. La reattività ringrazia.
`,
  },
  {
    id: "web-audio-audiobuffersource-campioni",
    title: "Web Audio: riprodurre e manipolare campioni",
    date: "2026-06-30",
    category: "musica-audio",
    icon: "🎙️",
    excerpt: "Carica un file, decodificalo e suonalo con AudioBufferSourceNode: velocità e loop inclusi.",
    tags: ["Web Audio", "Campioni"],
    content: `
Per suonare un file audio nel browser lo carichi, lo decodifichi in un buffer e lo riproduci con un **AudioBufferSourceNode**.

\`\`\`javascript
const res = await fetch("/samples/break.wav");
const buffer = await ctx.decodeAudioData(await res.arrayBuffer());

function suona(rate = 1) {
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  src.playbackRate.value = rate; // 2 = doppia velocità e ottava sopra
  src.loop = true;
  src.connect(ctx.destination);
  src.start();
  return src; // per fermarlo poi con src.stop()
}
\`\`\`

Nota una peculiarità: un \`AudioBufferSourceNode\` è **usa e getta**: dopo \`start()\` non si può riavviare, ne crei uno nuovo ogni volta. In cambio è leggerissimo.

\`playbackRate\` cambia velocità e intonazione insieme (come in Sonic Pi con \`rate\`), \`loop\` fa ripetere il campione, \`start(time)\` lo schedula preciso. Da qui costruisci sampler, loop station e drum machine basate su file veri.
`,
  },
  {
    id: "sonic-pi-registrare-esportare",
    title: "Sonic Pi: dalla jam alla traccia registrata",
    date: "2026-07-01",
    category: "musica-audio",
    icon: "💾",
    excerpt: "Strutturare il codice per un take completo e usare il registratore integrato per esportare un WAV.",
    tags: ["Sonic Pi", "Produzione"],
    content: `
Improvvisare è bello, ma prima o poi vuoi **salvare** un brano. Sonic Pi ha un registratore integrato (il tasto Rec): premi Rec, fai partire i loop, premi di nuovo e ottieni un file WAV.

Il segreto è strutturare il codice perché parta pulito e cresca in modo controllato:

\`\`\`ruby
use_bpm 124

live_loop :drums do
  sample :bd_haus if (tick % 4) == 0
  sample :drum_cymbal_closed, amp: 0.4
  sleep 0.25
end

live_loop :bass, sync: :drums do
  use_synth :tb303
  play (ring :e1, :e2, :g1).look, release: 0.2, cutoff: rrand(70, 110)
  sleep 0.5
end
\`\`\`

Per un take ordinato: avvia con pochi elementi, poi introduci i layer uno alla volta (commenta e scommenta i loop mentre registri). Usa \`sync\` per tenere tutto agganciato, così il file esportato non ha loop che scivolano.

Il WAV che ottieni lo porti in qualsiasi editor per il mastering. Il codice diventa lo spartito, la registrazione il disco.
`,
  },
  {
    id: "ruby-comparable-enumerable-custom",
    title: "Ruby: rendere ordinabili i tuoi oggetti con Comparable",
    date: "2026-07-02",
    category: "sviluppo-software",
    icon: "💎",
    excerpt: "Definisci l'operatore <=> e includi Comparable: i tuoi oggetti sanno ordinarsi, confrontarsi e trovare il massimo.",
    tags: ["Ruby", "Design"],
    content: `
Vuoi che i tuoi oggetti si ordinino e si confrontino come i numeri? Basta definire l'operatore "astronave" \`<=>\` e includere il modulo **Comparable**.

\`\`\`ruby
class Launch
  include Comparable
  attr_reader :net

  def initialize(net) = @net = net

  # <=> restituisce -1, 0 o 1
  def <=>(other)
    net <=> other.net
  end
end

lanci = [Launch.new(3), Launch.new(1), Launch.new(2)]
lanci.sort          # ordinati per data!
lanci.min           # il piu' imminente
lanci.max
Launch.new(1) < Launch.new(2)  # true
\`\`\`

Definendo un solo metodo (\`<=>\`), \`Comparable\` te ne regala una decina: \`<\`, \`>\`, \`==\`, \`between?\`, \`clamp\`. Allo stesso modo, includere \`Enumerable\` e definire \`each\` ti dà gratis \`map\`, \`select\`, \`sort\`, \`min\`, \`max\` su una tua classe collezione.

È il potere dei mixin: implementi il metodo minimo (\`<=>\` o \`each\`) e Ruby costruisce tutto il resto. I tuoi oggetti si comportano come quelli nativi.
`,
  },
  {
    id: "rails-routing-restful",
    title: "Rails: il routing RESTful con resources",
    date: "2026-07-03",
    category: "sviluppo-software",
    icon: "🛤️",
    excerpt: "Una riga, resources :launches, genera sette rotte convenzionali. Convenzione sopra configurazione al suo meglio.",
    tags: ["Ruby on Rails", "Routing", "REST"],
    content: `
Il routing di Rails abbraccia le convenzioni REST: una risorsa, sette azioni standard. E una riga le genera tutte.

\`\`\`ruby
# config/routes.rb
resources :launches
\`\`\`

Questo crea sette rotte con i verbi HTTP giusti:

\`\`\`text
GET    /launches          index    (lista)
GET    /launches/new      new      (form nuovo)
POST   /launches          create   (salva)
GET    /launches/:id      show     (dettaglio)
GET    /launches/:id/edit edit     (form modifica)
PATCH  /launches/:id      update   (aggiorna)
DELETE /launches/:id      destroy  (elimina)
\`\`\`

Verbo + URL mappano su un'azione del controller in modo prevedibile. Puoi limitare (\`only: [:index, :show]\`), annidare (\`resources :providers do resources :launches end\`) o aggiungere rotte custom con \`member\` e \`collection\`.

Il valore è la **prevedibilità**: chiunque conosca Rails sa già come sono fatte le tue rotte, senza leggere il file. Lanci \`rails routes\` e vedi la mappa completa. Convenzione sopra configurazione: meno decisioni, meno sorprese.
`,
  },
  {
    id: "javascript-optional-chaining-nullish",
    title: "JavaScript: optional chaining e nullish, addio a mille if",
    date: "2026-07-04",
    category: "sviluppo-software",
    icon: "🟨",
    excerpt: "?. evita i crash su proprietà mancanti, ?? dà default solo su null e undefined. Due operatori, meno bug.",
    tags: ["JavaScript", "Sintassi"],
    content: `
Due operatori moderni eliminano intere righe di controlli difensivi.

\`\`\`javascript
const user = { profilo: { social: null } };

// optional chaining: si ferma a undefined invece di crashare
user?.profilo?.social?.twitter;   // undefined (niente errore)

// nullish coalescing: default SOLO se null o undefined
const conteggio = user.visite ?? 0;   // 0 se null/undefined
const nome = user.nome ?? "Anonimo";
\`\`\`

\`?.\` (optional chaining) interrompe la catena appena trova \`null\`/\`undefined\`, restituendo \`undefined\` invece di lanciare "Cannot read properties of null". Perfetto per dati annidati e incerti (risposte di API, oggetti opzionali).

\`??\` (nullish coalescing) somiglia a \`||\`, ma con una differenza cruciale: \`||\` scatta anche su \`0\`, \`""\` e \`false\`, mentre \`??\` scatta **solo** su \`null\`/\`undefined\`. Quindi \`0 ?? 5\` è \`0\`, mentre \`0 || 5\` è \`5\`.

Insieme risolvono una montagna di \`if (x && x.y && x.y.z)\`. Codice più corto e, soprattutto, meno crash a runtime.
`,
  },
  {
    id: "web-audio-chrome-music-lab-lezioni",
    title: "Chrome Music Lab: cosa insegna a chi programma audio",
    date: "2026-07-05",
    category: "musica-audio",
    icon: "🌈",
    excerpt: "Esperimenti giocosi costruiti con Web Audio: la lezione è rendere visibile e tangibile ciò che è astratto.",
    tags: ["Web Audio", "Design", "Musica"],
    content: `
**Chrome Music Lab** è una raccolta di esperimenti musicali nel browser, pensati per la didattica. Sono tutti costruiti con la Web Audio API, e per chi programma audio sono una miniera di lezioni.

La più importante: **rendere visibile l'invisibile**. In "Spectrogram" vedi le frequenze dipingersi, in "Oscillators" trascini il mouse e senti l'onda cambiare, in "Sound Waves" le particelle mostrano la pressione dell'aria. Concetti astratti (frequenza, armoniche, timbro) diventano tangibili.

La seconda: **feedback immediato**. Ogni interazione produce suono all'istante. Nessun pulsante "genera", nessuna attesa. È lo stesso principio del live coding in Sonic Pi: il ciclo tra azione e risultato deve essere cortissimo.

La terza: **poche regole, tanto spazio di gioco**. "Song Maker" è una griglia di caselle, eppure ci componi melodie vere.

La lezione per noi sviluppatori: quando costruisci uno strumento musicale sul web, non pensare all'API. Pensa a quanto è breve la distanza tra un gesto dell'utente e il suono. Lì sta la magia.
`,
  },
  {
    id: "sonic-pi-ambient-pad-riverbero",
    title: "Sonic Pi: paesaggi ambient con pad e riverbero",
    date: "2026-07-06",
    category: "musica-audio",
    icon: "🌌",
    excerpt: "Attacchi lenti, riverberi lunghi e campioni allungati creano texture immersive. La musica come atmosfera.",
    tags: ["Sonic Pi", "Ambient"],
    content: `
Non tutta la musica è ritmo. L'ambient vive di **texture** e spazio: note lunghe, attacchi morbidi, riverberi profondi. Sonic Pi lo fa benissimo.

\`\`\`ruby
use_bpm 60

with_fx :reverb, room: 1, mix: 0.8 do
  live_loop :pad do
    use_synth :hollow
    notes = chord(:e3, :minor7)
    play notes.choose, attack: 4, release: 8, amp: 0.6
    sleep 4
  end

  live_loop :texture do
    sample :ambi_lunar_land, rate: 0.4, amp: 0.5
    sleep 8
  end
end
\`\`\`

Le chiavi dell'ambient: \`attack\` lungo (il suono entra piano, niente percussione), \`release\` lungo (le note si sovrappongono e sfumano), \`room: 1\` per un riverbero enorme, e campioni allungati con \`rate\` basso.

Niente \`sample :bd_haus\`, niente sedicesimi: qui il tempo si dilata. Aggiungi un secondo pad su un accordo diverso e ottieni armonie che si incrociano lentamente. La musica smette di scandire il tempo e inizia a creare uno spazio.
`,
  },
  {
    id: "ruby-stringhe-gsub-regex",
    title: "Ruby: manipolare stringhe con gsub e le regex",
    date: "2026-07-07",
    category: "sviluppo-software",
    icon: "💎",
    excerpt: "gsub, scan, match: Ruby tratta le espressioni regolari come cittadini di prima classe. Testo domato.",
    tags: ["Ruby", "Stringhe", "Regex"],
    content: `
Ruby ha un rapporto splendido con le stringhe e le espressioni regolari: sono integrate nel linguaggio, non una libreria a parte.

\`\`\`ruby
testo = "Contattami: ale@mail.it oppure info@site.com"

# estrarre tutte le email
testo.scan(/[\\w.]+@[\\w.]+/)
# => ["ale@mail.it", "info@site.com"]

# sostituire con un blocco
"prezzo: 100 euro".gsub(/\\d+/) { |n| (n.to_i * 1.1).round.to_s }
# => "prezzo: 110 euro"

# slug da un titolo
"Il Mio Post!".downcase.gsub(/[^a-z0-9]+/, "-").chomp("-")
# => "il-mio-post"
\`\`\`

\`gsub\` sostituisce tutte le occorrenze e accetta un blocco per trasformazioni dinamiche; \`scan\` raccoglie tutti i match in un array; \`match\` e \`=~\` verificano la presenza di un pattern.

I gruppi di cattura tornano comodi: \`"2026-07-07".match(/(\\d+)-(\\d+)-(\\d+)/)\` ti dà anno, mese e giorno separati. Con una manciata di metodi domini qualsiasi elaborazione di testo: parsing, pulizia, validazione, generazione di slug.
`,
  },
  {
    id: "rails-active-storage-allegati",
    title: "Rails: allegare file con Active Storage",
    date: "2026-07-08",
    category: "sviluppo-software",
    icon: "🛤️",
    excerpt: "Un metodo, has_one_attached, e il tuo model gestisce upload, storage e varianti immagine. Cloud incluso.",
    tags: ["Ruby on Rails", "File"],
    content: `
Gestire upload di file (avatar, allegati, immagini) a mano è tedioso. **Active Storage** lo fa per te con una riga nel model.

\`\`\`ruby
class Provider < ApplicationRecord
  has_one_attached :logo
end

# nel controller
provider.logo.attach(params[:logo])

# nella view
<%= image_tag provider.logo.variant(resize_to_limit: [200, 200]) %>
\`\`\`

\`has_one_attached\` (o \`has_many_attached\`) collega i file al model. Active Storage salva i metadati nel database e il file vero dove vuoi: disco in sviluppo, poi S3, Google Cloud o Azure in produzione, cambiando solo la configurazione.

La chicca sono le **varianti**: \`variant(resize_to_limit: [200, 200])\` genera al volo una versione ridimensionata dell'immagine (serve la libreria di image processing), e la memorizza per le volte successive.

Niente più codice di upload custom, niente gestione manuale dei percorsi. Ti concentri sul dominio, Active Storage si occupa dei bit. Dallo sviluppo locale al cloud, senza cambiare una riga del model.
`,
  },
  {
    id: "javascript-set-e-map",
    title: "JavaScript: Set e Map, oltre l'oggetto e l'array",
    date: "2026-07-09",
    category: "sviluppo-software",
    icon: "🟨",
    excerpt: "Set elimina i duplicati in una riga, Map è un dizionario con chiavi di qualsiasi tipo. Struttura giusta, codice pulito.",
    tags: ["JavaScript", "Strutture dati"],
    content: `
Oggetti e array coprono molto, ma **Set** e **Map** risolvono in modo pulito problemi ricorrenti.

\`\`\`javascript
// Set: valori unici
const tag = new Set(["react", "js", "react", "css"]);
tag.size;             // 3 (duplicati rimossi)
[...new Set([1, 1, 2, 3])]; // [1, 2, 3] -> dedupe in una riga

// Map: dizionario con chiavi di qualsiasi tipo
const cache = new Map();
cache.set("utente", { id: 1 });
cache.set(domElement, "dati"); // anche un oggetto come chiave!
cache.get("utente");
cache.has("utente");           // true
\`\`\`

Un **Set** contiene solo valori unici: perfetto per deduplicare o verificare l'appartenenza (\`.has()\` è più veloce di \`array.includes\` su grandi liste). Un **Map** è come un oggetto, ma con due vantaggi: le chiavi possono essere di **qualsiasi** tipo (non solo stringhe) e mantiene l'ordine di inserimento, oltre a offrire \`.size\` e l'iterabilità diretta.

Regola pratica: se ti serve un insieme di valori unici, \`Set\`; se ti serve una mappa chiave-valore con chiavi non-stringa o iterazione ordinata, \`Map\`. La struttura dati giusta rende il codice più chiaro e spesso più veloce.
`,
  },
  {
    id: "web-audio-generative-browser",
    title: "Web Audio: musica generativa che non finisce mai",
    date: "2026-07-10",
    category: "musica-audio",
    icon: "🌀",
    excerpt: "Poche regole e un pizzico di casualità: il browser compone all'infinito. Come in Sonic Pi, ma in JavaScript.",
    tags: ["Web Audio", "Generative", "Musica"],
    content: `
La stessa idea generativa di Sonic Pi vive anche nella Web Audio API: poche regole più casualità uguale musica infinita.

\`\`\`javascript
const scala = [220, 261.6, 293.7, 329.6, 392]; // La minore pentatonica

function nota(time) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "triangle";
  osc.frequency.value = scala[Math.floor(Math.random() * scala.length)];
  gain.gain.setValueAtTime(0.3, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 1.5);
  osc.connect(gain).connect(ctx.destination);
  osc.start(time);
  osc.stop(time + 1.5);
}

let t = ctx.currentTime;
setInterval(() => {
  if (Math.random() > 0.3) nota(t); // a volte silenzio
  t += 0.5;
}, 400);
\`\`\`

L'ingrediente segreto è vincolare il caso: pescando solo da una **scala** pentatonica, ogni nota casuale suona comunque "giusta". Il silenzio occasionale (\`Math.random() > 0.3\`) dà respiro e rende il flusso meno meccanico.

Aggiungi un secondo strato più lento per i bassi, un riverbero, e hai un generatore ambient che non si ripete mai. Zero file, musica perpetua.
`,
  },
  {
    id: "sonic-pi-brano-techno-passo-passo",
    title: "Sonic Pi: un brano techno costruito da zero",
    date: "2026-07-11",
    category: "musica-audio",
    icon: "🎚️",
    excerpt: "Cassa dritta, hi-hat, bassline e stab: assembliamo una traccia techno completa, un layer alla volta.",
    tags: ["Sonic Pi", "Techno", "Produzione"],
    content: `
Mettiamo insieme tutto in una traccia techno completa. Il segreto è stratificare: ogni \`live_loop\` è un elemento, e tutti restano agganciati con \`sync\`.

\`\`\`ruby
use_bpm 130

live_loop :kick do
  sample :bd_tek, amp: 2.5
  sleep 1                     # cassa dritta, "four on the floor"
end

live_loop :hats, sync: :kick do
  sleep 0.5
  sample :drum_cymbal_closed, amp: 0.6
  sleep 0.5
end

live_loop :bass, sync: :kick do
  use_synth :tb303
  play (ring :e1, :e1, :g1, :e1).tick, release: 0.3, cutoff: rrand(70, 110)
  sleep 0.5
end

live_loop :stab, sync: :kick do
  use_synth :prophet
  play chord(:e3, :minor7), release: 0.2, amp: 0.5 if one_in(4)
  sleep 1
end
\`\`\`

La ricetta: la cassa detta il tempo, l'hi-hat riempie gli off-beat, il basso acido dà il movimento ipnotico, lo stab di accordo (solo \`one_in(4)\`) aggiunge tensione a sorpresa.

Registra partendo dalla sola cassa e aggiungi i loro uno a uno commentando/scommentando: è così che si costruisce un arrangiamento dal vivo.
`,
  },
  {
    id: "ruby-benchmark-misurare",
    title: "Ruby: misurare prima di ottimizzare con Benchmark",
    date: "2026-07-12",
    category: "sviluppo-software",
    icon: "💎",
    excerpt: "Le intuizioni sulle performance ingannano. Benchmark ti dà i numeri veri prima di riscrivere il codice.",
    tags: ["Ruby", "Performance"],
    content: `
La regola d'oro dell'ottimizzazione: **misura, non indovinare**. Ruby ha il modulo \`Benchmark\` integrato per confrontare approcci diversi con dati reali.

\`\`\`ruby
require "benchmark"

array = (1..100_000).to_a

Benchmark.bm(10) do |x|
  x.report("each+push") do
    r = []
    array.each { |n| r << n * 2 }
  end
  x.report("map") do
    array.map { |n| n * 2 }
  end
end
\`\`\`

\`Benchmark.bm\` esegue ogni blocco e stampa il tempo impiegato, così vedi nero su bianco quale strada è più veloce. Per confronti più rigorosi (con riscaldamento e statistica) c'è la gem \`benchmark-ips\`, che misura le iterazioni al secondo.

Perché conta: le intuizioni sulle performance sbagliano di continuo. Quella che "sembra" più veloce spesso non lo è, e l'ottimizzazione prematura complica il codice senza guadagni. Prima misuri, poi ottimizzi solo ciò che i numeri indicano come lento davvero. Il resto lascialo leggibile.
`,
  },
  {
    id: "rails-full-text-search-postgres",
    title: "Rails: ricerca full-text con PostgreSQL",
    date: "2026-07-13",
    category: "sviluppo-software",
    icon: "🛤️",
    excerpt: "PostgreSQL sa cercare nel testo con ranking e pesi. Rails lo espone senza servizi esterni come Elasticsearch.",
    tags: ["Ruby on Rails", "PostgreSQL", "Search"],
    content: `
Per una ricerca testuale seria non serve subito Elasticsearch: **PostgreSQL** ha il full-text search integrato, con ranking e gestione delle lingue. Rails lo espone con eleganza.

\`\`\`ruby
class Launch < ApplicationRecord
  # con la gem pg_search
  include PgSearch::Model
  pg_search_scope :search,
    against: { name: "A", description: "B" }, # pesi diversi
    using: { tsearch: { prefix: true } }
end

Launch.search("falcon")   # ordinati per rilevanza
\`\`\`

Sotto il cofano, Postgres trasforma il testo in \`tsvector\` (parole normalizzate) e la query in \`tsquery\`, poi le confronta. I **pesi** (\`name\` conta più di \`description\`) governano il ranking, e \`prefix: true\` fa trovare "fal" dentro "falcon".

Il vantaggio: nessun servizio esterno da mantenere, i dati restano nel tuo database, e per la maggior parte delle app la qualità è più che sufficiente. Aggiungi un indice GIN sulla colonna \`tsvector\` e resta veloce anche su tabelle grandi.

Elasticsearch è potente, ma spesso è un cannone per uccidere una mosca. Parti da Postgres: la ricerca del tuo Launch Tracker probabilmente non chiede di più.
`,
  },
  {
    id: "javascript-immutabilita-structuredclone",
    title: "JavaScript: copie e immutabilità senza sorprese",
    date: "2026-07-14",
    category: "sviluppo-software",
    icon: "🟨",
    excerpt: "Lo spread copia in superficie, structuredClone copia in profondità. Sapere la differenza evita bug subdoli.",
    tags: ["JavaScript", "Fondamentali"],
    content: `
In JavaScript gli oggetti si passano per riferimento: assegnarli non li copia. Modificarne uno "condiviso" causa bug subdoli, specie in React dove lo stato va trattato come immutabile.

\`\`\`javascript
const stato = { user: { nome: "Ale" }, tag: ["a", "b"] };

// copia SUPERFICIALE: il primo livello è nuovo, l'interno è condiviso
const copia = { ...stato };
copia.user.nome = "Bob";
stato.user.nome; // "Bob" <- ops, mutato anche l'originale!

// copia PROFONDA: tutto duplicato davvero
const clone = structuredClone(stato);
clone.user.nome = "Bob";
stato.user.nome; // "Ale" <- l'originale è salvo
\`\`\`

Lo **spread** (\`{ ...obj }\`) e \`Object.assign\` copiano solo il primo livello: gli oggetti annidati restano condivisi. Per una copia profonda affidabile c'è \`structuredClone\`, ora nativo, che duplica anche strutture annidate, array, Map e Set.

La regola: se aggiorni uno stato annidato in modo immutabile, ricorda che lo spread è superficiale. Per casi semplici copi livello per livello (\`{ ...stato, user: { ...stato.user, nome } }\`); per casi profondi, \`structuredClone\`. Conoscere la differenza ti risparmia ore di caccia al bug.
`,
  },
  {
    id: "web-audio-synth-polifonico",
    title: "Web Audio: un synth polifonico, più note insieme",
    date: "2026-07-15",
    category: "musica-audio",
    icon: "🎹",
    excerpt: "Ogni nota è una voce con oscillatore e inviluppo propri. Gestire le voci è tutto il segreto della polifonia.",
    tags: ["Web Audio", "Sintesi"],
    content: `
Un synth monofonico suona una nota per volta. Per suonare **accordi** serve la polifonia: ogni nota è una "voce" indipendente, con il suo oscillatore e il suo inviluppo.

\`\`\`javascript
const voci = new Map();

function noteOn(midi) {
  const freq = 440 * Math.pow(2, (midi - 69) / 12); // MIDI -> Hz
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.02);
  osc.connect(gain).connect(ctx.destination);
  osc.start();
  voci.set(midi, { osc, gain }); // ricorda la voce per spegnerla
}

function noteOff(midi) {
  const v = voci.get(midi);
  if (!v) return;
  v.gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.1);
  v.osc.stop(ctx.currentTime + 0.1);
  voci.delete(midi);
}
\`\`\`

Il cuore è la **gestione delle voci**: una \`Map\` che associa ogni nota premuta alla sua coppia oscillatore/gain, così a \`noteOff\` sai quale spegnere. La formula \`440 * 2^((midi-69)/12)\` converte il numero di nota MIDI in frequenza.

Collega tutto alla Web MIDI API e hai un synth polifonico suonabile con una tastiera vera. Da qui aggiungi filtri, detune, più oscillatori per voce: la strada verso un vero strumento software.
`,
  },
  {
    id: "sonic-pi-didattica-codice-e-musica",
    title: "Sonic Pi: perché insegna a programmare così bene",
    date: "2026-07-16",
    category: "musica-audio",
    icon: "🎓",
    excerpt: "Nato per la scuola, Sonic Pi rende il feedback immediato e musicale. Un bug si sente, e questo cambia tutto.",
    tags: ["Sonic Pi", "Didattica"],
    content: `
Sonic Pi è nato all'Università di Cambridge come strumento **didattico**, e non è un caso: fa toccare concetti di programmazione in un modo che pochi ambienti eguagliano.

Il primo motivo è il **feedback immediato e musicale**. Un bug non è un messaggio d'errore astratto: è una nota stonata, un ritmo che zoppica. Sbagli un \`sleep\` e lo *senti*. Questo ciclo cortissimo tra codice e risultato è esattamente ciò che tiene motivati i principianti.

Il secondo: i concetti diventano **tangibili**. Un ciclo? Un ritmo che si ripete. Una variabile? Il tempo del brano. La casualità? Una melodia diversa a ogni giro. L'astratto diventa concreto perché produce qualcosa che vuoi ascoltare.

\`\`\`ruby
4.times do          # un ciclo che senti
  play :e4
  sleep 0.25
end
\`\`\`

Il terzo: il **basso costo dell'errore**. Non rompi niente, non c'è compilazione, premi Run e riprovi. Sperimentare è gratis, e sperimentare è il modo in cui si impara davvero.

La lezione va oltre la musica: qualsiasi strumento didattico dovrebbe puntare a un feedback rapido, concreto e a un basso costo dell'errore. Sonic Pi lo fa suonando.
`,
  },
  {
    id: "ruby-programmazione-funzionale",
    title: "Ruby: il lato funzionale con then e curry",
    date: "2026-07-17",
    category: "sviluppo-software",
    icon: "💎",
    excerpt: "then concatena trasformazioni, curry fissa gli argomenti a poco a poco. Ruby non è solo a oggetti.",
    tags: ["Ruby", "Funzionale"],
    content: `
Ruby è a oggetti fino al midollo, ma ha strumenti funzionali eleganti per comporre trasformazioni in modo leggibile.

\`\`\`ruby
# then (o yield_self): incanala un valore in una pipeline
risultato = "  ale@Mail.IT "
  .then(&:strip)
  .then(&:downcase)
  .then { |s| s.split("@").first }
# => "ale"

# curry: fissa gli argomenti uno alla volta
somma = ->(a, b, c) { a + b + c }.curry
somma[1][2][3]        # => 6
aggiungi10 = somma[10]
aggiungi10[5][5]      # => 20
\`\`\`

\`then\` (alias \`yield_self\`) passa l'oggetto a un blocco e ne restituisce il risultato: incatena trasformazioni senza variabili intermedie, leggendosi come una pipeline. \`curry\` trasforma una funzione a più argomenti in una serie di funzioni a un argomento, così puoi "pre-caricare" alcuni valori e riusare il resto.

Non trasformano Ruby in Haskell, ma per pulire una stringa o costruire funzioni specializzate sono comodissimi. La programmazione funzionale non è un dogma: sono strumenti da tenere nella cassetta, da tirare fuori quando rendono il codice più chiaro.
`,
  },
  {
    id: "rails-request-specs-testare-api",
    title: "Rails: testare un'API con i request spec",
    date: "2026-07-18",
    category: "sviluppo-software",
    icon: "🛤️",
    excerpt: "I request spec colpiscono gli endpoint veri e controllano status e JSON. La rete di sicurezza di un backend.",
    tags: ["Ruby on Rails", "Testing", "API"],
    content: `
Per un backend API, i test più utili sono i **request spec**: fanno una vera richiesta HTTP a un endpoint e verificano la risposta, dallo status code al corpo JSON.

\`\`\`ruby
RSpec.describe "Launches API", type: :request do
  describe "GET /launches" do
    before { create_list(:launch, 3) }

    it "restituisce 200 e la lista in JSON" do
      get "/launches"

      expect(response).to have_http_status(:ok)
      json = JSON.parse(response.body)
      expect(json.size).to eq(3)
      expect(json.first).to include("name", "provider")
    end
  end

  describe "POST /launches" do
    it "rifiuta dati non validi con 422" do
      post "/launches", params: { launch: { name: "" } }
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end
end
\`\`\`

Un request spec esercita l'intero stack (routing, controller, model, serializzazione) come farebbe un client reale. Verifichi lo status (\`:ok\`, \`:unprocessable_entity\`), la struttura del JSON e i casi d'errore.

Sono la rete di sicurezza ideale per un'API: se rompi un endpoint durante un refactor, il test te lo dice subito. Testi il **contratto** che offri al frontend, non i dettagli interni. E un contratto testato è un contratto di cui ti puoi fidare.
`,
  },
  {
    id: "javascript-localstorage-persistenza",
    title: "JavaScript: salvare dati nel browser con localStorage",
    date: "2026-07-19",
    category: "sviluppo-software",
    icon: "🟨",
    excerpt: "Preferenze e bozze che sopravvivono al refresh, senza backend. Con le sue insidie: solo stringhe e niente segreti.",
    tags: ["JavaScript", "Browser"],
    content: `
\`localStorage\` salva dati nel browser che sopravvivono a refresh e riavvii, senza alcun backend. Perfetto per preferenze, temi, bozze, carrelli.

\`\`\`javascript
// salva (solo stringhe!)
localStorage.setItem("tema", "dark");
localStorage.setItem("utente", JSON.stringify({ id: 1, nome: "Ale" }));

// leggi
const tema = localStorage.getItem("tema") ?? "light";
const utente = JSON.parse(localStorage.getItem("utente") || "null");

localStorage.removeItem("tema");
\`\`\`

Due insidie da ricordare. Primo: memorizza **solo stringhe**, quindi per oggetti e array passi da \`JSON.stringify\` in scrittura e \`JSON.parse\` in lettura. Secondo: è **sincrono** e limitato (circa 5 MB), quindi non ci metti dati enormi.

E soprattutto: **niente segreti**. Token di sessione, password, dati sensibili non vanno in \`localStorage\`: è leggibile da qualsiasi script sulla pagina, e una vulnerabilità XSS li esporrebbe. Per quelli servono i cookie con flag \`HttpOnly\`.

Per il resto è oro: un tema che resta scelto, un form che non perde i dati al refresh, una preferenza ricordata. Piccola API, grande comodità.
`,
  },
  {
    id: "web-audio-delay-feedback",
    title: "Web Audio: eco e delay con il feedback",
    date: "2026-07-20",
    category: "musica-audio",
    icon: "🔊",
    excerpt: "Un DelayNode più un anello di gain crea echi che si ripetono e svaniscono. Attento a non far esplodere il segnale.",
    tags: ["Web Audio", "Effetti"],
    content: `
Un'eco nasce da un'idea semplice: ritardare il suono e rimandarne una parte all'ingresso. In Web Audio è un **DelayNode** con un anello di **feedback**.

\`\`\`javascript
const delay = ctx.createDelay();
delay.delayTime.value = 0.3;      // 300 ms di ritardo

const feedback = ctx.createGain();
feedback.gain.value = 0.4;        // quanto rimandare indietro

// l'anello: uscita del delay -> feedback -> di nuovo nel delay
source.connect(delay);
delay.connect(feedback);
feedback.connect(delay);          // <- il loop che crea gli echi
delay.connect(ctx.destination);
source.connect(ctx.destination);  // segnale diretto
\`\`\`

Il cuore è l'anello: l'uscita del delay torna al suo ingresso attraverso un gain. Ogni giro il suono si ripete più debole (perché il gain è < 1), creando echi che svaniscono.

Attenzione al valore del feedback: sotto 1 gli echi decadono, ma a **1 o più** l'anello si auto-alimenta all'infinito e il volume esplode. Tienilo tra 0.3 e 0.6 per un'eco musicale.

Cambia \`delayTime\` a ritmo di beat e l'eco diventa parte del groove: è l'effetto che dà spazio e movimento a un synth altrimenti secco.
`,
  },
  {
    id: "sonic-pi-e-web-audio-stessa-idea",
    title: "Sonic Pi e Web Audio: due strumenti, la stessa idea",
    date: "2026-07-21",
    category: "musica-audio",
    icon: "🎧",
    excerpt: "Codice che diventa suono. Che sia Ruby in Sonic Pi o JavaScript nel browser, il pensiero è identico. E qui si chiude il cerchio.",
    tags: ["Sonic Pi", "Web Audio", "Musica"],
    content: `
Dopo tre mesi tra Sonic Pi, Ruby, Rails, JavaScript e Web Audio, chiudo il cerchio con l'idea che li lega tutti: **il codice può diventare suono**.

Sonic Pi lo fa in Ruby, con \`play\`, \`sample\`, \`live_loop\`. La Web Audio API lo fa in JavaScript, con oscillatori, gain e grafi di nodi. Linguaggi e ambienti diversi, ma lo stesso pensiero: descrivi la musica come istruzioni, e la macchina la esegue.

\`\`\`ruby
# Sonic Pi (Ruby)
use_synth :saw
play :e3, cutoff: 90, release: 0.3
\`\`\`

\`\`\`javascript
// Web Audio (JavaScript) - la stessa nota
const osc = ctx.createOscillator();
osc.type = "sawtooth";
osc.frequency.value = 164.81; // E3
// ...gain e filtro, come abbiamo visto
\`\`\`

Cambiano la sintassi e le API, ma i concetti sono gli stessi: forme d'onda, filtri, inviluppi, tempo, ripetizione, casualità controllata. Impararli in un ambiente li rende trasferibili nell'altro.

È esattamente lo spirito del mio progetto **Dj_QBIT**: fare musica scrivendo codice, e trattare la programmazione come uno strumento creativo, non solo come lavoro. Da sviluppatore, è la cosa più naturale del mondo — e la più divertente.

Grazie per aver seguito questi tre mesi di articoli quotidiani. Ci si sente in cuffia.
`,
  }
];
