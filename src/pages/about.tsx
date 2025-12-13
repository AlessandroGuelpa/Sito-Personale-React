//import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { FaDownload } from "react-icons/fa";
import { Helmet } from 'react-helmet';

export default function DocsPage() {
      const pageUrl = "https://alessandroguelpa.it/about";
  return (
    <DefaultLayout>
              <Helmet>
        <title>About me | Alessandro Guelpa</title>
        <meta name="description" content="Scopri chi è Alessandro Guelpa: sviluppatore, creativo e appassionato di tecnologia. Esplora il mio percorso, le mie competenze e la visione dietro ai miei progetti." />
       <link rel="canonical" href={pageUrl} />

        {/* Tag Open Graph (per i social) */}
        <meta property="og:title" content="About me | Alessandro Guelpa" />
        <meta property="og:description" content="Scopri chi è Alessandro Guelpa: sviluppatore, creativo e appassionato di tecnologia. Esplora il mio percorso, le mie competenze e la visione dietro ai miei progetti." />
        <meta property="og:url" content={pageUrl} />
      </Helmet>
      
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
           <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
           <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-8 pb-20 md:pt-12 md:pb-32">
        <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight drop-shadow-sm mb-6">
                Chi <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">Sono</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Una breve introduzione su di me, il mio percorso e le mie passioni.
            </p>
        </div>

        <div className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 shadow-xl mb-20">
            <div className="text-lg md:text-xl leading-relaxed space-y-6 text-zinc-700 dark:text-zinc-300">
                <p>
                Mi chiamo <span className="font-bold text-violet-600 dark:text-violet-400">Alessandro</span> e sono uno sviluppatore front-end specializzato in Shopify.
                </p>
                <p>
                Attualmente lavoro su progetti e-commerce in Shopify ma sto ampliando le mie competenze verso il <span className="font-bold text-fuchsia-600 dark:text-fuchsia-400">full-stack</span> e sperimento con tecnologie moderne come React e Ruby on Rails.
                </p>
                <p>
                Nel tempo libero pratico Jujitsu, mi appassionano le auto e adoro
                sperimentare con nuove idee e tecnologie.
                </p>
            </div>
        </div>

        <div className="text-center mb-12">
             <h2 className="text-4xl md:text-5xl font-black mb-8">Il mio CV</h2>
             <button
                onClick={() => window.open("/AlessandroGuelpa_CV.pdf", "_blank")}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-violet-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-600 hover:bg-violet-700 hover:shadow-lg hover:-translate-y-1 hover:shadow-violet-500/50"
             >
                Scarica il PDF
                <FaDownload className="ml-3 w-5 h-5 group-hover:animate-bounce" />
             </button>
        </div>

        <div className="bg-zinc-900 dark:bg-zinc-800 rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 transform transition-all hover:scale-[1.01] duration-500">
            <iframe
            src="/AlessandroGuelpa_CV.pdf"
            title="CV Alessandro"
            className="w-full h-[600px] md:h-[800px]"
            style={{ border: "none" }}
            />
        </div>
      </div>
    </DefaultLayout>
  );
}
