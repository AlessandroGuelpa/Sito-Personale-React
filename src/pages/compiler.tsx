import DefaultLayout from "@/layouts/default";
import { useState } from "react";
import { Helmet } from 'react-helmet';
import { FaPlay } from "react-icons/fa";

export default function DocsPage() {
  const [code, setCode] = useState('// esempio: console.log("ciao mondo");\n');
  const [output, setOutput] = useState("");

  const runCode = () => {
    setOutput("");
    const logger: unknown[] = [];
    const originalLog = console.log;

    console.log = function (...args) {
      args.forEach((arg) => {
        logger.push(arg + " ");
      });
      logger.push("\n");
      originalLog.apply(console, args);
    };

    try {
      new Function(code)();
      setOutput(logger.length > 0 ? logger.join("") : "Eseguito senza output");
    } catch (e) {
  if (e instanceof Error) {
    setOutput("Errore: " + e.message);
  } else {
    setOutput("Errore sconosciuto: " + String(e));
  }
}

    console.log = originalLog;
  };
    const pageUrl = "https://alessandroguelpa.it/javascript-compiler";
  return (
    <DefaultLayout>
      <Helmet>
        <title>Javascript Compiler | Alessandro Guelpa</title>
        <meta name="description" content="Prova il compilatore JavaScript online: scrivi, esegui e testa il tuo codice JS direttamente nel browser. Ideale per snippet rapidi, debug e apprendimento | Alessandro Guelpa" />
            <link rel="canonical" href={pageUrl} />

        {/* Tag Open Graph (per i social) */}
        <meta property="og:title" content="Javascript Compiler | Alessandro Guelpa" />
        <meta property="og:description" content="Prova il compilatore JavaScript online: scrivi, esegui e testa il tuo codice JS direttamente nel browser. Ideale per snippet rapidi, debug e apprendimento | Alessandro Guelpa" />
        <meta property="og:url" content={pageUrl} />
      </Helmet>
      
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <section className="relative z-10 max-w-5xl mx-auto px-4 pt-8 pb-20 md:pt-12 md:pb-32 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-black text-center mb-8 tracking-tight drop-shadow-sm">
            Javascript <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">Compiler</span>
        </h1>
        
        <p className="text-xl text-zinc-600 dark:text-zinc-400 text-center max-w-2xl mb-12">
          Scrivi, esegui e testa il tuo codice JavaScript direttamente nel browser.
        </p>

        <div className="w-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-xl">
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <textarea
                rows={12}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="relative block w-full font-mono text-sm p-6 bg-zinc-900 text-zinc-100 rounded-xl border-none focus:ring-2 focus:ring-violet-500 resize-y shadow-inner placeholder-zinc-500"
                spellCheck="false"
                placeholder="// Scrivi il tuo codice qui..."
                />
            </div>

            <div className="flex justify-end mt-6">
                <button 
                    onClick={runCode} 
                    className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-violet-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-600 hover:bg-violet-700 hover:shadow-lg hover:-translate-y-1 hover:shadow-violet-500/50"
                >
                <FaPlay className="mr-2" /> Esegui Codice
                </button>
            </div>

            {output && (
                <div className="mt-8 animate-fade-in-up">
                    <h3 className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">Output</h3>
                    <pre className="p-6 bg-zinc-100 dark:bg-black/50 rounded-xl border border-zinc-200 dark:border-zinc-800 font-mono text-sm whitespace-pre-wrap text-zinc-800 dark:text-zinc-200 shadow-inner">
                        {output}
                    </pre>
                </div>
            )}
        </div>
      </section>
    </DefaultLayout>
  );
}
