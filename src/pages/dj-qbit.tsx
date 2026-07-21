import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FaSoundcloud,
  FaHeadphones,
  FaCompactDisc,
  FaBolt,
  FaCode,
} from "react-icons/fa";

import DefaultLayout from "@/layouts/default";
import CustomLink from "@/components/customlink";
import { SITE_URL, SITE_NAME } from "@/utils/seo";

/**
 * 👇 SOSTITUISCI con l'URL del tuo profilo (o playlist) SoundCloud.
 *    Da qui viene generato automaticamente il player embed qui sotto.
 *    Esempi validi:
 *      - Profilo:   https://soundcloud.com/tuo-nome
 *      - Playlist:  https://soundcloud.com/tuo-nome/sets/nome-playlist
 */
const SOUNDCLOUD_PROFILE_URL = "https://soundcloud.com/dj_qbit";

// Costruisce l'URL del player embed ufficiale di SoundCloud a partire dal profilo.
// Colore brand (viola #7c3aed) per restare in linea con il resto del sito.
const soundcloudPlayerSrc = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
  SOUNDCLOUD_PROFILE_URL,
)}&color=%237c3aed&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=false`;

const highlights = [
  {
    icon: <FaCompactDisc className="w-6 h-6" />,
    title: "DJ Set & Mix",
    description:
      "Selezioni elettroniche tra house, techno e ritmi più caldi: mix pensati per far muovere la pista dal primo all'ultimo drop.",
  },
  {
    icon: <FaBolt className="w-6 h-6" />,
    title: "Energia Live",
    description:
      "Ogni set è costruito sul momento, leggendo l'energia del pubblico e portandola sempre un passo più in là.",
  },
  {
    icon: <FaHeadphones className="w-6 h-6" />,
    title: "Sound Ricercato",
    description:
      "Ricerca continua di tracce e sonorità nuove, per un'identità musicale riconoscibile e in costante evoluzione.",
  },
];

// Comandi chiave di Sonic Pi mostrati come "chips" nella sezione dedicata.
const sonicPiConcepts = [
  { cmd: "play", label: "note & synth" },
  { cmd: "sample", label: "campioni & drum" },
  { cmd: "live_loop", label: "loop dal vivo" },
  { cmd: "with_fx", label: "effetti" },
  { cmd: "sync", label: "sincronia" },
];

// Esempio reale di brano in Sonic Pi: drum machine, bassline acid TB-303
// sincronizzata e una melodia pentatonica con riverbero.
const SONIC_PI_EXAMPLE = `use_bpm 120

live_loop :drums do
  sample :bd_haus, amp: 2
  sleep 0.5
end

live_loop :bass, sync: :drums do
  use_synth :tb303
  play chord(:e2, :minor).choose,
    release: 0.3, cutoff: rrand(70, 110)
  sleep 0.25
end

live_loop :melody do
  with_fx :reverb, mix: 0.4 do
    play scale(:e3, :minor_pentatonic).choose,
      release: 0.2
    sleep [0.25, 0.5].choose
  end
end`;

// Piccolo equalizzatore animato: dà subito il "mood" musicale alla hero.
const EqualizerBars = () => (
  <div aria-hidden="true" className="flex items-end gap-1 h-8">
    {[0, 1, 2, 3, 4].map((i) => (
      <motion.span
        key={i}
        animate={{ height: ["30%", "100%", "45%", "85%", "35%"] }}
        className="w-1.5 rounded-full bg-gradient-to-t from-violet-600 to-fuchsia-500"
        transition={{
          duration: 1.1 + i * 0.18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default function DjQbitPage() {
  const pageUrl = `${SITE_URL}/dj-qbit`;
  const pageTitle = `Dj_QBIT — Progetto Musicale | ${SITE_NAME}`;
  const pageDescription =
    "Dj_QBIT è il mio progetto musicale: DJ set ed elettronica tra house e techno. Ascolta i miei mix direttamente da SoundCloud.";

  return (
    <DefaultLayout>
      <Helmet>
        <title>{pageTitle}</title>
        <meta content={pageDescription} name="description" />
        <link href={pageUrl} rel="canonical" />
        <meta content="website" property="og:type" />
        <meta content={pageUrl} property="og:url" />
        <meta content={pageTitle} property="og:title" />
        <meta content={pageDescription} property="og:description" />
      </Helmet>

      <div className="relative z-10">
        {/* ===== HERO ===== */}
        <section className="flex flex-col items-center text-center pt-8 pb-16 md:pt-12 md:pb-20">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400 mb-8">
              <FaSoundcloud className="w-4 h-4" />
              Progetto musicale
            </span>
          </motion.div>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 animate-gradient-x">
              Dj_QBIT
            </span>
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-300 max-w-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Il mio lato in cuffia: mix e DJ set che intrecciano{" "}
            <span className="text-violet-600 dark:text-violet-400 font-bold">
              house
            </span>
            ,{" "}
            <span className="text-fuchsia-600 dark:text-fuchsia-400 font-bold">
              techno
            </span>{" "}
            e{" "}
            <span className="text-orange-600 dark:text-orange-400 font-bold">
              groove elettronici
            </span>
            . Premi play e alza il volume.
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a
              className="btn-shine group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-violet-600/25 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-600/40 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
              href="#ascolta"
            >
              <FaHeadphones className="w-5 h-5" />
              Ascolta ora
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-zinc-900 dark:border-white px-8 py-4 text-lg font-bold text-zinc-900 dark:text-white transition-all duration-300 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-white focus-visible:ring-offset-2"
              href={SOUNDCLOUD_PROFILE_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaSoundcloud className="w-5 h-5" />
              Profilo SoundCloud
            </a>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <EqualizerBars />
          </motion.div>
        </section>

        {/* ===== HIGHLIGHTS ===== */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="group flex flex-col h-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 hover:border-violet-500/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-100 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </section>

        {/* ===== SONIC PI ===== */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400 mb-3">
              Dietro le quinte
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight drop-shadow-sm">
              Il codice diventa musica:{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">
                Sonic Pi
              </span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Spiegazione */}
            <motion.div
              className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-80px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p>
                <span className="font-bold text-violet-600 dark:text-violet-400">
                  Sonic Pi
                </span>{" "}
                è un ambiente di <em>live coding</em> gratuito e open source
                creato da Sam Aaron all&apos;Università di Cambridge. Nato come
                strumento didattico per insegnare a programmare, è oggi un vero
                strumento musicale, usato anche sul palco negli{" "}
                <em>algorave</em>.
              </p>
              <p>
                L&apos;idea è tanto semplice quanto potente: invece di suonare
                le note, le si{" "}
                <span className="font-semibold text-zinc-900 dark:text-white">
                  scrive in codice
                </span>
                . Con una sintassi basata su Ruby dici al computer quali synth
                usare, quali campioni innescare, con che tempo e con quali
                effetti — e lo ascolti all&apos;istante.
              </p>
              <p>
                Il cuore di tutto sono i{" "}
                <code className="px-1.5 py-0.5 rounded bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 font-mono text-sm">
                  live_loop
                </code>
                : cicli che girano in parallelo e che puoi modificare{" "}
                <span className="font-semibold text-zinc-900 dark:text-white">
                  mentre la musica suona
                </span>
                . Premi Run e il brano si aggiorna senza fermarsi: è così che si
                improvvisa e si costruisce un set, un layer alla volta.
              </p>
              <p>
                Da sviluppatore è la cosa più naturale del mondo: ogni traccia è
                precisa, ripetibile e versionabile come qualsiasi altro pezzo di
                codice.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {sonicPiConcepts.map((concept) => (
                  <span
                    key={concept.cmd}
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 px-3 py-1.5 text-sm"
                  >
                    <code className="font-mono font-bold text-violet-600 dark:text-violet-400">
                      {concept.cmd}
                    </code>
                    <span className="text-zinc-500 dark:text-zinc-400">
                      {concept.label}
                    </span>
                  </span>
                ))}
              </div>

              <a
                className="inline-flex items-center gap-2 font-bold text-violet-600 dark:text-violet-400 hover:gap-3 transition-all"
                href="https://sonic-pi.net"
                rel="noopener noreferrer"
                target="_blank"
              >
                Scopri Sonic Pi
                <span aria-hidden="true">→</span>
              </a>
            </motion.div>

            {/* Blocco codice */}
            <motion.div
              className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-xl shadow-violet-900/10"
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/80">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <FaCode className="w-3.5 h-3.5" />
                  live_set.rb
                </span>
              </div>
              <pre className="overflow-x-auto p-5 text-sm leading-relaxed">
                <code className="font-mono text-zinc-100">
                  {SONIC_PI_EXAMPLE}
                </code>
              </pre>
            </motion.div>
          </div>
        </section>

        {/* ===== PLAYER SOUNDCLOUD ===== */}
        <section className="mb-20 scroll-mt-24" id="ascolta">
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400 mb-3">
              In cuffia
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight drop-shadow-sm">
              Ascolta su{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">
                SoundCloud
              </span>
            </h2>
          </div>

          <motion.div
            className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-3xl p-4 md:p-6 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-80px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <iframe
              allow="autoplay"
              className="rounded-2xl w-full"
              frameBorder="no"
              height="600"
              scrolling="no"
              src={soundcloudPlayerSrc}
              title="Brani di Dj_QBIT su SoundCloud"
              width="100%"
            />
          </motion.div>

          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-6">
            Non riesci a vedere il player?{" "}
            <a
              className="font-semibold text-violet-600 dark:text-violet-400 hover:underline"
              href={SOUNDCLOUD_PROFILE_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Apri Dj_QBIT su SoundCloud
            </a>
          </p>
        </section>

        {/* ===== CTA BOOKING ===== */}
        <section className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/10 via-fuchsia-500/10 to-transparent p-10 md:p-14 text-center mb-8">
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-fuchsia-500/20 blur-3xl"
          />
          <h2 className="relative text-3xl md:text-4xl font-black tracking-tight mb-4">
            Vuoi Dj_QBIT al tuo evento?
          </h2>
          <p className="relative text-lg text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto mb-8">
            Feste private, locali o serate a tema: scrivimi per disponibilità,
            info e collaborazioni.
          </p>
          <CustomLink
            className="btn-shine relative inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-violet-600/25 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-600/40 hover:-translate-y-1"
            href="/contact"
          >
            Contattami
          </CustomLink>
        </section>
      </div>
    </DefaultLayout>
  );
}
