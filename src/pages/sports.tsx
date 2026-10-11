import DefaultLayout from "@/layouts/default";
import { PageSeo } from "@/components/page-seo";

const photos = [
  { src: "/mma5.webp", caption: "Ishirioku Clan" },
  { src: "/mma1.webp", caption: "Cage Training" },
  { src: "/summer.webp", caption: "Trinity Summer Camp" },
  { src: "/jujitsu.webp", caption: "BJJ Training" },
  { src: "/mma2.webp", caption: "Allenamento in gabbia" },
  { src: "/mma4.webp", caption: "Verginelli Camp" },
  { src: "/mma3.webp", caption: "Krav Maga" },
];

export default function Sports() {
  return (
    <DefaultLayout>
      <PageSeo
        description="Jujitsu, MMA, sala pesi e trekking: gli sport e le passioni che mi tengono in equilibrio fuori dal codice."
        path="/sports"
        title="Sport e passioni"
      />
      <header className="max-w-3xl">
        <p className="eyebrow">Fuori dal codice</p>
        <h1 className="page-title">Sport e passioni.</h1>
        <p className="page-intro">
          Da sempre amo mettermi alla prova attraverso discipline diverse. Ho
          iniziato con quattro anni di Karate, per poi passare alle arti
          marziali miste.
        </p>
      </header>
      <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
        <p>
          Dopo anni di allenamento e una lunga pausa, ho scelto il Jujitsu: una
          disciplina che mi ha conquistato per tecnica e filosofia.
        </p>
        <p>
          Oltre al tatami, mi alleno in sala pesi, faccio trekking e pratico
          sport acquatici. Sono modi diversi per scaricare lo stress e spingere
          un po’ più in là i miei limiti.
        </p>
      </div>
      <section aria-labelledby="photos-title" className="section-space">
        <h2 className="section-title" id="photos-title">
          Qualche momento sul campo
        </h2>
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
          Apri una foto per vederla a dimensione intera.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <figure key={photo.src} className="surface-card overflow-hidden">
              <a
                aria-label={`Apri la foto: ${photo.caption} (nuova scheda)`}
                className="block"
                href={photo.src}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt={photo.caption}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  decoding="async"
                  height={600}
                  loading="lazy"
                  src={photo.src}
                  width={800}
                />
              </a>
              <figcaption className="p-5 font-semibold">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
