/* eslint-disable no-console */
import { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { FaPlay, FaTrash } from "react-icons/fa";
import Editor, { OnMount } from "@monaco-editor/react";
import { motion } from "framer-motion";

import DefaultLayout from "@/layouts/default";

export default function CompilerPage() {
  const [code, setCode] = useState(
    '// Scrivi il tuo codice JavaScript qui...\nconsole.log("Ciao mondo!");\n\n// Prova codice più complesso\nconst calcolaQuadrati = (arr) => arr.map(x => x * x);\nconsole.log(calcolaQuadrati([1, 2, 3, 4, 5]));\n',
  );
  const [output, setOutput] = useState("");

  const editorRef = useRef<any>(null);

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
  };

  const runCode = () => {
    setOutput("");
    const logger: string[] = [];
    const originalLog = console.log;
    const originalError = console.error;
    const originalInfo = console.info;
    const originalWarn = console.warn;

    const logToOutput = (...args: unknown[]) => {
      const formattedArgs = args.map((arg) => {
        if (typeof arg === "object") {
          try {
            return JSON.stringify(arg, null, 2);
          } catch {
            return String(arg);
          }
        }

        return String(arg);
      });

      logger.push(formattedArgs.join(" "));
    };

    console.log = (...args) => {
      logToOutput(...args);
      originalLog.apply(console, args);
    };
    console.error = (...args) => {
      logger.push("[Error]");
      logToOutput(...args);
      originalError.apply(console, args);
    };
    console.info = (...args) => {
      logger.push("[Info]");
      logToOutput(...args);
      originalInfo.apply(console, args);
    };
    console.warn = (...args) => {
      logger.push("[Warning]");
      logToOutput(...args);
      originalWarn.apply(console, args);
    };

    try {
      // Usa il valore live dall'editor se disponibile per evitare lag di stato
      const currentCode = editorRef.current
        ? editorRef.current.getValue()
        : code;

      const execute = new Function(currentCode);

      execute();

      setOutput(
        logger.length > 0 ? logger.join("\n") : "Eseguito senza output.",
      );
    } catch (e) {
      if (e instanceof Error) {
        setOutput("Errore di compilazione/esecuzione:\n" + e.message);
      } else {
        setOutput("Errore sconosciuto:\n" + String(e));
      }
    } finally {
      // Restore the console methods exactly as they were
      console.log = originalLog;
      console.error = originalError;
      console.info = originalInfo;
      console.warn = originalWarn;
    }
  };

  const clearOutput = () => {
    setOutput("");
  };

  const pageUrl = "https://alessandroguelpa.it/javascript-compiler";

  return (
    <DefaultLayout>
      <Helmet>
        <title>Javascript Compiler | Alessandro Guelpa</title>
        <meta
          content="Prova il compilatore JavaScript online: scrivi, esegui e testa il tuo codice JS direttamente nel browser."
          name="description"
        />
        <link href={pageUrl} rel="canonical" />
        <meta
          content="Javascript Compiler | Alessandro Guelpa"
          property="og:title"
        />
        <meta
          content="Prova il compilatore JavaScript online direttamente nel browser con l'editor Monaco integrato."
          property="og:description"
        />
        <meta content={pageUrl} property="og:url" />
      </Helmet>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-4 pt-8 pb-20 md:pt-12 md:pb-32 flex flex-col items-center">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-center mb-6 tracking-tight drop-shadow-sm">
            Javascript{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">
              Compiler
            </span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 text-center max-w-2xl mb-12 mx-auto">
            Scrivi, esegui e testa il tuo codice JavaScript direttamente nel
            browser, basato su Monaco Editor (VS Code).
          </p>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Editor Column */}
          <div className="flex flex-col bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-3xl p-4 md:p-6 shadow-xl h-[600px] hover:border-violet-500/50 transition-colors">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-violet-500" />
                Editor
              </h3>
              <button
                className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-violet-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-600 hover:bg-violet-700 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-violet-500/50"
                onClick={runCode}
              >
                <FaPlay className="mr-2" /> Esegui
              </button>
            </div>

            <div className="flex-grow rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-inner">
              <Editor
                defaultLanguage="javascript"
                defaultValue={code}
                height="100%"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  fontFamily:
                    "'JetBrains Mono', 'Fira Code', 'Inter', monospace",
                  formatOnPaste: true,
                  scrollBeyondLastLine: false,
                  smoothScrolling: true,
                  padding: { top: 16, bottom: 16 },
                }}
                theme="vs-dark"
                onChange={(val) => setCode(val || "")}
                onMount={handleEditorDidMount}
              />
            </div>
          </div>

          {/* Output Column */}
          <div className="flex flex-col bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-3xl p-4 md:p-6 shadow-xl h-[600px] hover:border-fuchsia-500/50 transition-colors">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-fuchsia-500" />
                Console Output
              </h3>
              <button
                className="group relative inline-flex items-center justify-center px-4 py-2.5 text-sm font-bold text-zinc-700 dark:text-zinc-300 transition-all duration-200 bg-zinc-200 dark:bg-zinc-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-600 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                disabled={!output}
                onClick={clearOutput}
              >
                <FaTrash className="mr-2" /> Pulisci
              </button>
            </div>

            <div className="flex-grow bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 overflow-y-auto shadow-inner relative">
              {output ? (
                <pre className="font-mono text-[14px] leading-relaxed whitespace-pre-wrap text-emerald-400">
                  {output}
                </pre>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-zinc-600 font-mono text-sm">
                  Nessun output. Premi &quot;Esegui&quot; per compilare.
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </section>
    </DefaultLayout>
  );
}
