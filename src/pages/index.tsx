import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
//import CustomLink from '@/components/customlink';
import { Link } from "react-router-dom";

// Placeholder data for featured projects
/*const featuredProjects = [
  {
    title: "Progetto E-commerce",
    description: "Una piattaforma e-commerce completa costruita con Shopify e React, ottimizzata per le performance e l'esperienza utente.",
    image: "/mma1.webp",
    link: "/proj"
  },
  {
    title: "Web App Gestionale",
    description: "Applicazione interna per la gestione di clienti e appuntamenti, sviluppata in Ruby on Rails con un frontend React.",
    image: "/mma2.webp",
    link: "/proj"
  },
  {
    title: "Sito Vetrina Interattivo",
    description: "Sito web per un'agenzia creativa, con animazioni e un design moderno realizzato con Vite e Tailwind CSS.",
    image: "/mma3.webp",
    link: "/proj"
  }
];*/

const techCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite"]
  },
  {
    title: "Backend & Database",
    skills: ["Ruby on Rails", "PostgreSQL", "Node.js", "MySQL"]
  },
  {
    title: "Tools & Altro",
    skills: ["Git", "GitHub", "Shopify", "Wordpress"]
  }
];

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between gap-12 pt-12 pb-24 py-5 md:pt-10 md:pb-40 overflow-hidden">
        
        {/* Crazy Background Elements */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
           <div className="absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-violet-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
           <div className="absolute top-0 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-fuchsia-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
           <div className="absolute -bottom-8 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-pink-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-2xl text-center md:text-left z-10">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6 drop-shadow-2xl">
            Trasformo idee in <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 animate-gradient-x">
              realtà digitali
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
            Ciao, sono Alessandro. <br className="hidden md:block" />
            Sviluppatore web specializzato in esperienze <span className="text-violet-600 dark:text-violet-400 font-bold">veloci</span>, <span className="text-fuchsia-600 dark:text-fuchsia-400 font-bold">intuitive</span> e <span className="text-orange-600 dark:text-orange-400 font-bold">moderne</span>.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/proj"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-violet-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-600 hover:bg-violet-700 hover:shadow-lg hover:-translate-y-1 hover:shadow-violet-500/50"
            >
              Scopri i miei lavori
            </Link>
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 transition-all duration-200 bg-transparent border-2 border-gray-900 dark:border-white dark:text-white font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 hover:-translate-y-1"
            >
              Contattami
            </Link>
          </div>
        </div>

        <div className="hidden md:block w-1/3 relative group perspective-1000">
           <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
           <div className="relative">
             <img 
                src="/io.jpeg" 
                alt="Alessandro Guelpa" 
                className="w-full h-auto rounded-2xl shadow-2xl object-cover transform transition-transform duration-500 hover:scale-[1.02] border-2 border-white/10 rotate-3 hover:rotate-0" 
             />
           </div>
        </div>
      </section>

      {/* Featured Projects Section
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-zinc-900/50 relative">
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-20"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-500">Casi di Studio Selezionati</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Una panoramica dei miei lavori più recenti, dove design e funzionalità si incontrano.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <CustomLink
                href={project.link}
                key={index}
                className="group relative block h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10"
              >
                <div className="aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
                   <div className="absolute inset-0 bg-violet-600/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  <div className="text-violet-600 dark:text-violet-400 font-bold inline-flex items-center group/link">
                    Scopri di più
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/link:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>
                </div>
              </CustomLink>
            ))}
          </div>
        </div>
      </section>
 */}
      {/* Technologies Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Il Mio Stack Tecnologico</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Gli strumenti che padroneggio per costruire il futuro.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {techCategories.map((category) => (
              <div key={category.title} className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm p-7 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-violet-500/30 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-violet-600 dark:text-violet-400">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((tech) => (
                    <div key={tech} className="bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm font-bold px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm hover:scale-105 transition-transform cursor-default">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 text-xl font-bold text-zinc-800 dark:text-zinc-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors bg-white dark:bg-zinc-900 px-8 py-4 rounded-full shadow-lg hover:shadow-xl border border-zinc-200 dark:border-zinc-800"
            >
              <GithubIcon size={24} />
              <span>Esplora il mio codice su GitHub</span>
              <svg className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
