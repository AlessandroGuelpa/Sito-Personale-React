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
        relative w-full rounded-xl overflow-visible cursor-pointer bg-gray-200 dark:bg-zinc-800
        transition-all duration-300 ease-out
        
        /* ORA ASCOLTIAMO 'group/photos' INVECE DI 'group/grid' */
        group-hover/photos:scale-95 group-hover/photos:opacity-60 group-hover/photos:blur-sm
        
        hover:!scale-105 hover:!opacity-100 hover:!blur-none hover:!z-10 hover:shadow-2xl hover:-rotate-1
        
        ${className}
      `}
    >
      {isLcp ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      ) : (
        <LazyLoadImage
          src={src}
          alt={alt}
          effect="blur"
          wrapperClassName="w-full h-full !block"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      )}
    </div>
  );
};

export default function Sports() {
  return (
    <DefaultLayout>
      <section className="max-w-3xl mx-auto text-center px-4 py-0 space-y-6">
        <h1 className="font-sans text-4xl text-violet-600 dark:text-violet-500 font-bold">
          Sport e Passioni
        </h1>
        <p className="font-sans text-zinc-600 dark:text-zinc-400">
          Da sempre appassionato di sport, amo mettermi alla prova attraverso
          discipline diverse. Il mio percorso è iniziato con il Karate,
          praticato per quattro anni, per poi evolversi nelle arti marziali
          miste (MMA).
          <br />
          Dopo anni di allenamento ed una lunga pausa, ho scelto di dedicarmi al
          Jujitsu, una disciplina che mi ha conquistato per tecnica e filosofia.
          <br />
          Oltre al tatami, mi alleno regolarmente in sala pesi, faccio lunghi
          trekking e pratico sport acquatici: modi diversi per mantenermi in
          forma, scaricare lo stress e spingere sempre un po’ più in là i miei
          limiti.
        </p>

        <div className="group/photos mt-10 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="grid grid-rows-2 gap-6">
              <SportCard
                src="/mma5.webp"
                alt="Ishirioku Clan"
                className="h-69"
              />
              <SportCard
                src="/mma1.webp"
                alt="Trinity Jujitsu"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SportCard src="/jujitsu.webp" alt="Jujitsu" className="h-64" />
            <SportCard src="/mma2.webp" alt="MMA" className="h-64" />
            <SportCard src="/mma4.webp" alt="Allenamento" className="h-64" />
            <SportCard src="/mma3.webp" alt="Krav Maga" className="h-64" />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
