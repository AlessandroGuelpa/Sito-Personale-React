import DefaultLayout from "@/layouts/default";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {Helmet} from "react-helmet";

export default function Contact() {
      const pageUrl = "https://alessandroguelpa.it/contact";
  return (
    <DefaultLayout>
                    <Helmet>
        <title>Contatti | Alessandro Guelpa</title>
        <meta name="description" content="Hai un'idea o un progetto da propormi? Contattami per richieste o semplicemente per scambiare due chiacchiere su tecnologia e sviluppo." />
           <link rel="canonical" href={pageUrl} />

        {/* Tag Open Graph (per i social) */}
        <meta property="og:title" content="Contatti | Alessandro Guelpa" />
        <meta property="og:description" content="Hai un'idea o un progetto da propormi? Contattami per richieste o semplicemente per scambiare due chiacchiere su tecnologia e sviluppo." />
        <meta property="og:url" content={pageUrl} />
      </Helmet>
      
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <section className="relative z-10 max-w-4xl mx-auto px-4 pt-8 pb-20 md:pt-12 md:pb-32 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-black text-center mb-8 tracking-tight drop-shadow-sm">
            Parliamo di <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">
              Nuove Idee?
            </span>
        </h1>
        
        <p className="text-xl text-zinc-600 dark:text-zinc-400 text-center max-w-2xl mb-16 leading-relaxed">
          Hai un progetto in mente o vuoi semplicemente salutare? <br className="hidden md:block"/>
          Sono sempre alla ricerca di nuove sfide e collaborazioni.
        </p>

        <div className="grid gap-6 w-full max-w-lg">
          <a
            href="mailto:alessandroguelpa@icloud.com"
            className="group relative flex items-center gap-6 p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1"
          >
            <div className="p-4 bg-violet-100 dark:bg-violet-900/30 rounded-xl text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform duration-300">
               <MdEmail size={32} />
            </div>
            <div className="text-left">
               <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Email</h3>
               <p className="text-zinc-500 dark:text-zinc-400 text-sm">alessandroguelpa@icloud.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/alessandro-guelpa-6434551b4"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-6 p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
          >
            <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
               <FaLinkedin size={32} />
            </div>
            <div className="text-left">
               <h3 className="text-lg font-bold text-zinc-900 dark:text-white">LinkedIn</h3>
               <p className="text-zinc-500 dark:text-zinc-400 text-sm">Connettiamoci professionalmente</p>
            </div>
          </a>
          <a
            href="https://www.instagram.com/ale.guelpa/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-6 p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-1"
          >
            <div className="p-4 bg-pink-100 dark:bg-pink-900/30 rounded-xl text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform duration-300">
               <FaInstagram size={32} />
            </div>
            <div className="text-left">
               <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Instagram</h3>
               <p className="text-zinc-500 dark:text-zinc-400 text-sm">Segui le mie avventure</p>
            </div>
          </a>
          
        </div>
      </section>
    </DefaultLayout>
  );
}
