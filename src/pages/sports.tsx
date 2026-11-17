import DefaultLayout from "@/layouts/default";
import { PageSeo } from "@/components/page-seo";
import { portfolioRoutes, type SiteLanguage } from "@/config/locales";

const sportsCopy = {
  it: {
    title: "Sport e passioni",
    description:
      "Jujitsu, MMA, sala pesi e trekking: gli sport e le passioni che mi tengono in equilibrio fuori dal codice.",
    eyebrow: "Fuori dal codice",
    heading: "Sport e passioni.",
    introduction:
      "Da sempre amo mettermi alla prova attraverso discipline diverse. Ho iniziato con quattro anni di Karate, per poi passare alle arti marziali miste.",
    jujitsu:
      "Dopo anni di allenamento e una lunga pausa, ho scelto il Jujitsu: una disciplina che mi ha conquistato per tecnica e filosofia.",
    activities:
      "Oltre al tatami, mi alleno in sala pesi, faccio trekking e pratico sport acquatici. Sono modi diversi per scaricare lo stress e spingere un po’ più in là i miei limiti.",
    photos: "Qualche momento sul campo",
    photoHint: "Apri una foto per vederla a dimensione intera.",
    photoLabel: (caption: string) => `Apri la foto: ${caption} (nuova scheda)`,
  },
  en: {
    title: "Sports, Martial Arts and Outdoor Activities",
    description:
      "Meet Alessandro Guelpa outside of software development, from karate, MMA and jujitsu to strength training, hiking and water sports.",
    eyebrow: "Away from the keyboard",
    heading: "Sports and interests.",
    introduction:
      "I’ve always enjoyed challenging myself through different sports. I trained in karate for four years before moving into mixed martial arts.",
    jujitsu:
      "After years of training and a long break, I took up jujitsu. Its technique and philosophy drew me in.",
    activities:
      "Away from the mat, I lift weights, hike and spend time on the water. Each gives me a different way to clear my head and push my limits a little further.",
    photos: "Training photos",
    photoHint: "Open a photo to see it at full size.",
    photoLabel: (caption: string) =>
      `Open photo of ${caption} (opens in a new tab)`,
  },
};

const photos = [
  { src: "/mma5.webp", caption: "Ishirioku Clan" },
  { src: "/mma1.webp", caption: "Cage Training" },
  { src: "/summer.webp", caption: "Trinity Summer Camp" },
  { src: "/jujitsu.webp", caption: "BJJ Training" },
  {
    src: "/mma2.webp",
    caption: "Allenamento in gabbia",
    englishCaption: "MMA cage training",
  },
  { src: "/mma4.webp", caption: "Verginelli Camp" },
  { src: "/mma3.webp", caption: "Krav Maga" },
];

export default function Sports({ language }: { language: SiteLanguage }) {
  const copy = sportsCopy[language];

  return (
    <DefaultLayout language={language}>
      <PageSeo
        description={copy.description}
        language={language}
        path={portfolioRoutes.sports[language]}
        title={copy.title}
      />
      <header className="max-w-3xl">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1 className="page-title">{copy.heading}</h1>
        <p className="page-intro">{copy.introduction}</p>
      </header>
      <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
        <p>{copy.jujitsu}</p>
        <p>{copy.activities}</p>
      </div>
      <section aria-labelledby="photos-title" className="section-space">
        <h2 className="section-title" id="photos-title">
          {copy.photos}
        </h2>
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
          {copy.photoHint}
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => {
            const caption =
              language === "en"
                ? (photo.englishCaption ?? photo.caption)
                : photo.caption;

            return (
              <figure key={photo.src} className="min-w-0">
                <a
                  aria-label={copy.photoLabel(caption)}
                  className="block"
                  href={photo.src}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt={caption}
                    className="aspect-[4/3] w-full rounded-xl object-cover"
                    decoding="async"
                    height={600}
                    loading="lazy"
                    src={photo.src}
                    width={800}
                  />
                </a>
                <figcaption className="pt-4 font-semibold">
                  {caption}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>
    </DefaultLayout>
  );
}
