import { FaDownload } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

import DefaultLayout from "@/layouts/default";
import { SkillBento } from "@/components/skill-bento";

export default function DocsPage() {
  const pageUrl = "https://alessandroguelpa.it/about";

  return (
    <DefaultLayout>
      <Helmet>
        <title>About me | Alessandro Guelpa</title>
        <meta
          content="Scopri chi è Alessandro Guelpa: sviluppatore, creativo e appassionato di tecnologia. Esplora il mio percorso, le mie competenze e la visione dietro ai miei progetti."
          name="description"
        />
        <link href={pageUrl} rel="canonical" />

        {/* Tag Open Graph (per i social) */}
        <meta content="About me | Alessandro Guelpa" property="og:title" />
        <meta
          content="Scopri chi è Alessandro Guelpa: sviluppatore, creativo e appassionato di tecnologia. Esplora il mio percorso, le mie competenze e la visione dietro ai miei progetti."
          property="og:description"
        />
        <meta content={pageUrl} property="og:url" />
      </Helmet>

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-8 pb-20 md:pt-12 md:pb-32">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight drop-shadow-sm mb-6">
            Chi{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">
              Sono
            </span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Una breve introduzione su di me, il mio percorso e le mie passioni.
          </p>
        </div>

        <div className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 shadow-xl mb-20">
          <div className="text-lg md:text-xl leading-relaxed space-y-6 text-zinc-700 dark:text-zinc-300">
            <p>
              Mi chiamo{" "}
              <span className="font-bold text-violet-600 dark:text-violet-400">
                Alessandro
              </span>{" "}
              e sono uno sviluppatore front-end specializzato in Shopify.
            </p>
            <p>
              Attualmente lavoro su progetti e-commerce in Shopify ma sto
              ampliando le mie competenze verso il{" "}
              <span className="font-bold text-fuchsia-600 dark:text-fuchsia-400">
                full-stack
              </span>{" "}
              e sperimento con tecnologie moderne come React e Ruby on Rails.
            </p>
            <p>
              Nel tempo libero pratico Jujitsu, mi appassionano le auto e adoro
              sperimentare con nuove idee e tecnologie.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* CV Column */}
          <div className="flex flex-col">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                Il mio CV
              </h2>
              <button
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-violet-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-600 hover:bg-violet-700 hover:shadow-lg hover:-translate-y-1 hover:shadow-violet-500/50"
                onClick={() =>
                  window.open("/AlessandroGuelpa_CV.pdf", "_blank")
                }
              >
                Scarica il PDF
                <FaDownload className="ml-3 w-5 h-5 group-hover:animate-bounce" />
              </button>
            </div>

            <div className="bg-zinc-900 dark:bg-zinc-800 rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 transform transition-all hover:scale-[1.01] duration-500">
              <iframe
                className="w-full h-[600px]"
                src="/AlessandroGuelpa_CV.pdf"
                style={{ border: "none" }}
                title="CV Alessandro"
              />
            </div>
          </div>

          {/* Skills Column */}
          <div className="flex flex-col h-full justify-center">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Le Mie Skills
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Un approccio moderno e scalabile allo sviluppo Front-end.
              </p>
            </div>

            <SkillBento />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
