import { useState } from "react";
import { MdEmail, MdSend, MdCheckCircle } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";

import DefaultLayout from "@/layouts/default";

export default function Contact() {
  const pageUrl = "https://alessandroguelpa.it/contact";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "shopify",
    message: "",
  });

  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      const formPayload = new FormData();

      formPayload.append("access_key", "3786622f-2ea9-406a-ad57-12f364248a79");
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("Type of Service", formData.service);
      formPayload.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        // Reset form dopo 3 secondi
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: "", email: "", service: "shopify", message: "" });
        }, 3000);
      } else {
        setIsError(true);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DefaultLayout>
      <Helmet>
        <title>Contatti | Alessandro Guelpa</title>
        <meta
          content="Hai un'idea o un progetto da propormi? Contattami per richieste o semplicemente per scambiare due chiacchiere su tecnologia e sviluppo."
          name="description"
        />
        <link href={pageUrl} rel="canonical" />

        {/* Tag Open Graph (per i social) */}
        <meta content="Contatti | Alessandro Guelpa" property="og:title" />
        <meta
          content="Hai un'idea o un progetto da propormi? Contattami per richieste o semplicemente per scambiare due chiacchiere su tecnologia e sviluppo."
          property="og:description"
        />
        <meta content={pageUrl} property="og:url" />
      </Helmet>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <section className="relative z-10 max-w-4xl mx-auto px-4 pt-8 pb-20 md:pt-12 md:pb-32 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-black text-center mb-8 tracking-tight drop-shadow-sm">
          Parliamo di <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">
            Nuove Idee?
          </span>
        </h1>

        <p className="text-xl text-zinc-600 dark:text-zinc-400 text-center max-w-2xl mb-16 leading-relaxed">
          Hai un progetto in mente o vuoi semplicemente salutare?{" "}
          <br className="hidden md:block" />
          Sono sempre alla ricerca di nuove sfide e collaborazioni.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 w-full mt-8">
          {/* Colonna Sinistra: Social e Contatti Diretti */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h2 className="text-2xl font-bold mb-2">Contatti Diretti</h2>
            <p className="text-zinc-500 dark:text-zinc-400 mb-4 text-sm">
              Più comodo con i social o la cara vecchia email? Nessun problema.
            </p>

            <a
              className="group relative flex items-center gap-6 p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1"
              href="mailto:alessandroguelpa@icloud.com"
            >
              <div className="p-4 bg-violet-100 dark:bg-violet-900/30 rounded-xl text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform duration-300">
                <MdEmail size={32} />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  Email
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  alessandroguelpa@icloud.com
                </p>
              </div>
            </a>

            <a
              className="group relative flex items-center gap-6 p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
              href="https://www.linkedin.com/in/alessandro-guelpa-6434551b4"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <FaLinkedin size={32} />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  LinkedIn
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  Connettiamoci
                </p>
              </div>
            </a>

            <a
              className="group relative flex items-center gap-6 p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-1"
              href="https://www.instagram.com/ale.guelpa/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="p-4 bg-pink-100 dark:bg-pink-900/30 rounded-xl text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform duration-300">
                <FaInstagram size={32} />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  Instagram
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  Seguimi
                </p>
              </div>
            </a>
          </div>

          {/* Colonna Destra: Modulo Interattivo */}
          <div className="lg:col-span-3">
            <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 z-20 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-3xl flex flex-col items-center justify-center text-center p-8"
                    exit={{ opacity: 0, y: -20 }}
                    initial={{ opacity: 0, y: 20 }}
                  >
                    <motion.div
                      animate={{ scale: 1 }}
                      initial={{ scale: 0 }}
                      transition={{ type: "spring", damping: 12 }}
                    >
                      <MdCheckCircle className="w-24 h-24 text-emerald-500 mb-6" />
                    </motion.div>
                    <h3 className="text-3xl font-black mb-2 text-zinc-900 dark:text-white">
                      Messaggio Inviato!
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      Ti risponderò il prima possibile all&apos;indirizzo che mi
                      hai fornito.
                    </p>
                  </motion.div>
                )}
                {isError && (
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 z-20 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-3xl flex flex-col items-center justify-center text-center p-8"
                    exit={{ opacity: 0, y: -20 }}
                    initial={{ opacity: 0, y: 20 }}
                  >
                    <h3 className="text-3xl font-black mb-2 text-red-500">
                      Ops, c&apos;è stato un errore!
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 mb-6">
                      Non è stato possibile inviare il messaggio. Riprova più
                      tardi o usa i link diretti.
                    </p>
                    <button
                      className="px-6 py-3 bg-zinc-200 dark:bg-zinc-800 rounded-xl font-bold hover:bg-zinc-300 dark:hover:bg-zinc-700 transition"
                      type="button"
                      onClick={() => setIsError(false)}
                    >
                      Riprova
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <h2 className="text-2xl font-bold mb-8">Invia una richiesta</h2>

              <form
                className="flex flex-col gap-6 relative z-10"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label
                      className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-2"
                      htmlFor="user-name"
                    >
                      Nome
                    </label>
                    <input
                      required
                      className="w-full bg-zinc-100/50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      id="user-name"
                      placeholder="Mario Rossi"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-2"
                      htmlFor="user-email"
                    >
                      Email
                    </label>
                    <input
                      required
                      className="w-full bg-zinc-100/50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      id="user-email"
                      placeholder="mario@example.com"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-2"
                    htmlFor="service-type"
                  >
                    Di cosa hai bisogno?
                  </label>
                  <select
                    className="w-full bg-zinc-100/50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                    id="service-type"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                  >
                    <option value="shopify">E-Commerce / Shopify Theme</option>
                    <option value="react">Applicazione Web React</option>
                    <option value="fullstack">
                      Sviluppo Backend (Rails/Node)
                    </option>
                    <option value="other">Altro / Consulenza</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label
                    className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-2"
                    htmlFor="user-message"
                  >
                    Messaggio
                  </label>
                  <textarea
                    required
                    className="w-full bg-zinc-100/50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none"
                    id="user-message"
                    placeholder="Raccontami la tua idea..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  className={`relative w-full overflow-hidden flex items-center justify-center gap-2 py-4 rounded-xl text-white font-bold transition-all duration-300 ${
                    isSubmitting
                      ? "bg-zinc-400 cursor-not-allowed"
                      : "bg-violet-600 hover:bg-violet-700 hover:shadow-lg hover:-translate-y-1"
                  }`}
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Invia Messaggio</span>
                      <MdSend className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
