export interface Project {
  id: string;
  title: string;
  kind: string;
  description: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  categories: string[];
  cover: "launch" | "ballerini" | "portfolio" | "vehrt";
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
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
    stack: ["React", "TypeScript", "Ruby on Rails", "PostgreSQL"],
    categories: ["react", "fullstack"],
    cover: "launch",
    links: [
      {
        label: "Codice frontend",
        href: "https://github.com/AlessandroGuelpa/launch-tracker-frontend",
      },
      {
        label: "Codice API",
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
    stack: ["WordPress"],
    categories: ["web"],
    cover: "ballerini",
    links: [{ label: "Visita il sito", href: "https://balleriniesapori.com/" }],
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
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
    categories: ["react", "web"],
    cover: "portfolio",
    links: [
      {
        label: "Codice del sito",
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
    stack: ["Sonic Pi", "Ableton", "React"],
    categories: ["creative"],
    cover: "vehrt",
    links: [{ label: "Scopri VEHRT", href: "/vehrt" }],
  },
];
