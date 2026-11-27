interface ProjectCopy {
  kind: string;
  description: string;
  problem: string;
  approach: string;
  outcome: string;
}

export interface Project extends ProjectCopy {
  id: string;
  title: string;
  english: ProjectCopy & { title?: string };
  stack: string[];
  categories: string[];
  cover: "mapper" | "fenix" | "launch" | "ballerini" | "portfolio" | "vehrt" | "tenstepsdown";
  featured?: boolean;
  links: { label: string; englishLabel: string; href: string }[];
}

export const projects: Project[] = [
  {
    id: "shopify-mapper",
    title: "Shopify Mapper",
    kind: "Strumento gratuito · Shopify",
    description:
      "Prepara i dati dei prodotti, controllali e genera un CSV da importare su Shopify. Uno strumento nato da un’attività concreta del mio lavoro.",
    problem:
      "Preparare a mano un catalogo su un foglio di calcolo richiede tempo e rende facile sbagliare campi, handle o SKU.",
    approach:
      "Un’interfaccia guidata per compilare i prodotti, generare handle e SKU, rivedere la lista e scaricare il CSV. L’app è sviluppata con Next.js e TypeScript.",
    outcome:
      "Puoi provare gratuitamente l’app pubblicata e generare un CSV per prodotti semplici, con una sola variante per prodotto.",
    english: {
      kind: "Free Shopify tool",
      description:
        "Prepare and validate product data, then export a CSV to import into Shopify. I built it to simplify a task that came up in my work.",
      problem:
        "Building a catalogue in a spreadsheet takes time, and it’s easy to make mistakes in fields, handles or SKUs.",
      approach:
        "A guided interface for entering product data, generating handles and SKUs, reviewing the list and exporting the CSV. Built with Next.js and TypeScript.",
      outcome:
        "The free app currently exports CSV files for products with one variant per product.",
    },
    stack: ["Shopify", "Next.js", "TypeScript", "CSV"],
    categories: ["shopify", "react", "web"],
    cover: "mapper",
    featured: true,
    links: [
      {
        label: "Prova l’app",
        englishLabel: "Try the app",
        href: "https://shopifymapper.vercel.app/",
      },
    ],
  },
  {
    id: "fenix-x-concept",
    title: "fēnix X — Oltre la traccia",
    kind: "Concept indipendente · E-commerce",
    description:
      "Una pagina prodotto per un orologio GPS multisport immaginario, con configuratore, nove render e carrello laterale.",
    problem:
      "Far scegliere finitura e cinturino mostrando subito l’anteprima e il prezzo della combinazione selezionata.",
    approach:
      "HTML, CSS e JavaScript senza framework. Il configuratore aggiorna immagini e prezzo, mentre il carrello dimostrativo gestisce quantità, accessori e persistenza nel browser.",
    outcome:
      "La demo su Vercel permette di provare tre finiture, tre cinturini e il carrello. Il codice è pubblico su GitHub.",
    english: {
      title: "fēnix X — Beyond the Trail",
      kind: "Independent e-commerce concept",
      description:
        "A product page for a fictional multisport GPS watch, with a configurator, nine renders and a side cart.",
      problem:
        "Help shoppers choose a finish and strap by showing the preview and price of each combination immediately.",
      approach:
        "Built with vanilla HTML, CSS and JavaScript. The configurator updates the preview and price, and the demo cart handles quantities, accessories and browser storage.",
      outcome:
        "The Vercel demo lets you try three finishes, three straps and the cart. The source code is public on GitHub.",
    },
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
    categories: ["web"],
    cover: "fenix",
    links: [
      {
        label: "Prova la demo",
        englishLabel: "Try the demo",
        href: "https://fenix-x-concept.vercel.app/",
      },
      {
        label: "Codice sorgente",
        englishLabel: "Source code",
        href: "https://github.com/AlessandroGuelpa/fenix-x-concept",
      },
    ],
  },
  {
    id: "tenstepsdown",
    title: "TENSTEPSDOWN",
    kind: "Sito artistico · Creative development",
    description:
      "Un sito immersivo per un progetto di techno underground sperimentale, tra macchine Elektron, Ableton Live e ricerca sonora.",
    problem:
      "Tradurre l'identità visiva e sonora del progetto in un'esperienza web riconoscibile, lontana dai classici siti musicali.",
    approach:
      "HTML, CSS e JavaScript senza framework, con tunnel geometrico animato in Canvas, sfumature radiali, layout responsive e integrazione SoundCloud.",
    outcome:
      "Il sito è pubblicato su Vercel e raccoglie il manifesto, la musica e il processo creativo del progetto.",
    english: {
      kind: "Artist website · Creative development",
      description:
        "An immersive website for an experimental underground techno project exploring Elektron hardware, Ableton Live and sound design.",
      problem:
        "Translate the project's visual and sonic identity into a distinctive web experience rather than a conventional music website.",
      approach:
        "Vanilla HTML, CSS and JavaScript with an animated Canvas tunnel, radial gradients, responsive layout and SoundCloud integration.",
      outcome:
        "The website is hosted on Vercel and brings together the project's manifesto, music and creative process.",
    },
    stack: ["HTML", "CSS", "JavaScript", "Canvas", "Vercel"],
    categories: ["web", "creative"],
    cover: "tenstepsdown",
    links: [
      {
        label: "Visita il sito",
        englishLabel: "Visit the website",
        href: "https://tenstepsdown.vercel.app/",
      },
    ],
  },
  {
    id: "launch-tracker",
    title: "Launch Tracker",
    kind: "Progetto personale · Full stack",
    description:
      "Un’app per seguire i lanci orbitali: countdown, ricerca, filtri e statistiche. Un unico progetto, dal frontend alle API.",
    problem:
      "Riunire i dati dei lanci in un’interfaccia consultabile e arricchirli con ricerca e statistiche.",
    approach:
      "Frontend React e TypeScript collegato a una REST API Rails. L’API importa i dati da Launch Library 2 in PostgreSQL e li espone con filtri e job in background.",
    outcome:
      "Due repository pubblici mostrano il lavoro sull’interfaccia e sul servizio API. È il progetto con cui approfondisco React e Rails.",
    english: {
      kind: "Personal project · Full stack",
      description:
        "Track orbital launches with countdowns, search, filters and statistics. I built both the frontend and the API.",
      problem:
        "Bring launch data into one interface so it’s easy to browse, search and compare.",
      approach:
        "A React and TypeScript frontend backed by a Rails REST API. The API imports Launch Library 2 data into PostgreSQL through background jobs and exposes it with filters.",
      outcome:
        "Both repositories are public and show how I linked the interface to the data and API.",
    },
    stack: ["React", "TypeScript", "Ruby on Rails", "PostgreSQL"],
    categories: ["react", "fullstack"],
    cover: "launch",
    featured: true,
    links: [
      {
        label: "Codice frontend",
        englishLabel: "Frontend code",
        href: "https://github.com/AlessandroGuelpa/launch-tracker-frontend",
      },
      {
        label: "Codice API",
        englishLabel: "API code",
        href: "https://github.com/AlessandroGuelpa/launcher-tracker-api",
      },
    ],
  },
  {
    id: "ballerini-sapori",
    title: "Ballerini & Sapori",
    kind: "Sito vetrina · WordPress",
    description:
      "Un sito per presentare i servizi di catering per eventi aziendali, matrimoni e feste private.",
    problem:
      "Presentare l’offerta di catering e dare alle persone un punto di contatto per organizzare il proprio evento.",
    approach:
      "Un sito WordPress che raccoglie servizi, immagini e informazioni per il contatto.",
    outcome:
      "Il sito è consultabile online: puoi esplorare direttamente le pagine e il percorso verso la richiesta di informazioni.",
    english: {
      kind: "WordPress website",
      description:
        "A website for a catering business serving corporate events, weddings and private parties.",
      problem:
        "Show what the business offers and make it easy for people to enquire about their event.",
      approach:
        "A WordPress site that brings services, photography and contact information together.",
      outcome:
        "The site is live. You can browse the services and see how visitors can contact the business.",
    },
    stack: ["WordPress"],
    categories: ["web"],
    cover: "ballerini",
    featured: true,
    links: [
      {
        label: "Visita il sito",
        englishLabel: "Visit the website",
        href: "https://balleriniesapori.com/",
      },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio personale",
    kind: "Progetto personale · React",
    description:
      "Questo sito: progetti, articoli tecnici e contatti, con tema chiaro e scuro e pagine prerenderizzate.",
    problem:
      "Raccontare il mio lavoro e rendere navigabile un archivio di oltre cento articoli senza caricarli tutti in home.",
    approach:
      "React, TypeScript e Tailwind. Anteprime leggere, ricerca nel blog e HTML generato per ogni pagina, con metadati dedicati.",
    outcome:
      "Il codice è pubblico e documenta la struttura del sito, il processo di build e le scelte per prestazioni e accessibilità.",
    english: {
      title: "Personal portfolio",
      kind: "Personal project · React",
      description:
        "This website brings together my projects, technical articles and contact details, with light and dark themes and pre-rendered pages.",
      problem:
        "Showcase my work and make an archive of more than a hundred articles searchable without loading them all on the homepage.",
      approach:
        "React, TypeScript and Tailwind, with lightweight previews, blog search and HTML and metadata generated for each page.",
      outcome:
        "The source code documents the site structure, build process and choices around performance and accessibility.",
    },
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
    categories: ["react", "web"],
    cover: "portfolio",
    links: [
      {
        label: "Codice del sito",
        englishLabel: "Website code",
        href: "https://github.com/AlessandroGuelpa/Sito-Personale-React",
      },
    ],
  },
  {
    id: "vehrt",
    title: "VEHRT",
    kind: "Progetto personale · Musica",
    description:
      "Il mio progetto techno: live coding con Sonic Pi, produzione in Ableton e un catalogo su SoundCloud.",
    problem:
      "Unire la sperimentazione con il codice e la produzione musicale in uno spazio dedicato.",
    approach:
      "Un’identità visiva distinta e una pagina per ascoltare la musica e conoscere il processo creativo.",
    outcome:
      "La pagina raccoglie il catalogo SoundCloud e un esempio del lavoro con Sonic Pi.",
    english: {
      kind: "Personal project · Music",
      description:
        "My techno project, combining live coding in Sonic Pi, production in Ableton and a catalogue on SoundCloud.",
      problem: "Give the music and live coding experiments a dedicated place.",
      approach:
        "A distinct visual identity and a page for listening to the music and exploring how it’s made.",
      outcome:
        "The page collects the SoundCloud catalogue and shows an example of my work in Sonic Pi.",
    },
    stack: ["Sonic Pi", "Ableton", "React"],
    categories: ["creative"],
    cover: "vehrt",
    links: [
      { label: "Scopri VEHRT", englishLabel: "Explore VEHRT", href: "/vehrt" },
    ],
  },
];
