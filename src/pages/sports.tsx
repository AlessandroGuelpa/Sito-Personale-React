import DefaultLayout from "@/layouts/default";
// @ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface SportCardProps {
  src: string;
  alt: string;
  className?: string;
  isLcp?: boolean;
}

const SportCard = ({
  src,
  alt,
  className = "",
  isLcp = false,
}: SportCardProps) => {
  return (
    <div
      className={`
        relative w-full h-full rounded-2xl overflow-hidden cursor-pointer
        bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md
        border border-zinc-200/50 dark:border-zinc-800/50
        transition-all duration-500 ease-out
        group-hover/photos:scale-90 group-hover/photos:opacity-50 group-hover/photos:blur-sm
        hover:!scale-105 hover:!opacity-100 hover:!blur-none hover:z-20 hover:shadow-2xl hover:shadow-violet-500/20
        ${className}
      `}
    >
      {isLcp ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : (
        <LazyLoadImage
          src={src}
          alt={alt}
          effect="blur"
          wrapperClassName="w-full h-full !block"
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <h3 className="text-white font-bold text-xl drop-shadow-md transform transition-transform duration-300 translate-y-4 hover:translate-y-0">{alt}</h3>
      </div>
    </div>
  );
};

export default function Sports() {
  return (
    <DefaultLayout>
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <section className="relative z-10 max-w-5xl mx-auto px-4 pt-8 pb-20 md:pt-12 md:pb-32 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-black text-center mb-8 tracking-tight drop-shadow-sm">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">
              Sport
            </span> e Passioni
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 text-center max-w-3xl mb-20 leading-relaxed">
          Da sempre appassionato di sport, amo mettermi alla prova attraverso
          discipline diverse. Il mio percorso è iniziato con il Karate,
          praticato per quattro anni, per poi evolversi nelle arti marziali
          miste (MMA).
          <br />
          Dopo anni di allenamento ed una lunga pausa, ho scelto di dedicarmi al Jujitsu, una disciplina che mi ha conquistato per tecnica e filosofia.
          <br />
          Oltre al tatami, mi alleno regolarmente in sala pesi, faccio lunghi
          trekking e pratico sport acquatici: modi diversi per mantenermi in
          forma, scaricare lo stress e spingere sempre un po’ più in là i miei
          limiti.
        </p>

        <div className="group/photos w-full space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="grid grid-rows-2 gap-6">
              <SportCard
                src="/mma5.webp"
                alt="Ishirioku Clan"
                className="h-72"
              />
              <SportCard
                src="/mma1.webp"
                alt="Cage Training"
                className="h-69"
              />
            </div>
            <div className="md:col-span-2">
              <SportCard
                src="/summer.webp"
                alt="Trinity Summer Camp"
                className="h-[36rem]"
                isLcp={true}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <SportCard src="/jujitsu.webp" alt="BJJ Training" className="h-80" />
            <SportCard src="/mma2.webp" alt="Cage Training" className="h-80" />
            <SportCard src="/mma4.webp" alt="Verginelli Camp" className="h-80" />
            <SportCard src="/mma3.webp" alt="Krav Maga" className="h-80" />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
