import { useEffect, useRef, useState, type FormEvent } from "react";

import DefaultLayout from "@/layouts/default";
import { PageSeo } from "@/components/page-seo";
import { portfolioRoutes, type SiteLanguage } from "@/config/locales";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/utils/analytics";

const initialForm = { name: "", email: "", service: "shopify", message: "" };
const services = [
  { value: "shopify", it: "E-commerce Shopify", en: "Shopify e-commerce" },
  {
    value: "integration",
    it: "API e integrazioni",
    en: "API and ERP integrations",
  },
  {
    value: "web",
    it: "Sito o applicazione web",
    en: "Website or web application",
  },
  {
    value: "work",
    it: "Opportunità di lavoro / collaborazione",
    en: "Role or collaboration",
  },
  { value: "other", it: "Altro", en: "Other" },
];

const contactCopy = {
  it: {
    title: "Contatti e collaborazioni",
    description:
      "Contatta Alessandro Guelpa per Shopify, sviluppo web, integrazioni API o opportunità di lavoro. Scrivi direttamente via email o usa il modulo.",
    label: "Contatti",
    heading: "Parliamo di cosa vuoi costruire.",
    intro:
      "Un e-commerce, un’integrazione o una collaborazione: raccontami l’obiettivo e da dove parti.",
    direct: "Preferisci scrivermi direttamente?",
    channels: "Usa l’email oppure trovi il mio percorso su LinkedIn.",
    newTab: " (nuova scheda)",
    context: "Cosa mi aiuta a capire il progetto",
    checklist: [
      "L’obiettivo e la piattaforma attuale",
      "Le funzionalità o le integrazioni necessarie",
      "Tempistiche e budget indicativi, se già definiti",
    ],
    form: "Mandami un messaggio",
    name: "Nome",
    required: "(obbligatorio)",
    emailRequired: "(obbligatoria)",
    topic: "Di cosa parliamo?",
    message: "Messaggio",
    example: "Obiettivo, piattaforma e cosa ti serve…",
    privacy:
      "Nome, email e messaggio vengono inviati tramite Web3Forms per consentirmi di rispondere alla tua richiesta. Puoi anche usare l’email diretta.",
    sending: "Invio in corso…",
    send: "Invia il messaggio",
    success:
      "Messaggio inviato. Grazie, ti risponderò all’indirizzo che hai indicato.",
    error:
      "L’invio non è riuscito. Il testo è ancora qui: puoi riprovare oppure",
    emailMe: "scrivermi via email",
  },
  en: {
    title: "Contact · Shopify & Web Development",
    description:
      "Contact Alessandro Guelpa about Shopify development, ERP and API integrations, or roles and collaborations. Use the form or email him directly.",
    label: "Contact",
    heading: "Let’s talk about what you’re building.",
    intro:
      "If you’re working on a store, an integration or a collaboration, tell me your goal and what you have so far.",
    direct: "Prefer to contact me directly?",
    channels: "Send me an email or find my work experience on LinkedIn.",
    newTab: " (opens in a new tab)",
    context: "What helps me understand your project",
    checklist: [
      "Your goal and current platform",
      "The features or integrations you need",
      "An approximate timeline and budget, if you have them",
    ],
    form: "Send me a message",
    name: "Name",
    required: "(required)",
    emailRequired: "(required)",
    topic: "What would you like to discuss?",
    message: "Message",
    example: "Your goal, current platform and what you need…",
    privacy:
      "Your name, email and message are sent through Web3Forms so I can respond. You can also email me directly.",
    sending: "Sending…",
    send: "Send message",
    success: "Thanks for your message. I’ll reply to the address you provided.",
    error: "Your message couldn’t be sent. You can try again or",
    emailMe: "email me directly",
  },
};

export default function Contact({ language }: { language: SiteLanguage }) {
  const copy = contactCopy[language];
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const controller = useRef<AbortController>();
  const submitting = useRef(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
      controller.current?.abort();
    };
  }, []);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const nativeForm = event.currentTarget;

    if ((nativeForm.elements.namedItem("botcheck") as HTMLInputElement).checked)
      return;
    submitting.current = true;
    setStatus("sending");
    controller.current = new AbortController();
    const timeout = setTimeout(() => controller.current?.abort(), 15000);

    try {
      const payload = new FormData();

      payload.append("access_key", "3786622f-2ea9-406a-ad57-12f364248a79");
      payload.append("name", form.name.trim());
      payload.append("email", form.email.trim());
      payload.append(
        "Type of Service",
        services.find((service) => service.value === form.service)?.it ??
          form.service,
      );
      payload.append("message", form.message.trim());
      payload.append("subject", "Nuovo messaggio dal portfolio");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
        signal: controller.current.signal,
      });
      const data = await response.json();

      if (!response.ok || data.success !== true)
        throw new Error("Contact submission failed");
      if (mounted.current) {
        setStatus("success");
        setForm(initialForm);
        trackEvent("contact_submit_success", { topic: form.service });
      }
    } catch {
      if (mounted.current) setStatus("error");
    } finally {
      clearTimeout(timeout);
      submitting.current = false;
    }
  }
  function update(key: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
    if (status === "success") setStatus("idle");
  }

  return (
    <DefaultLayout>
      <PageSeo
        description={copy.description}
        path={portfolioRoutes.contact[language]}
        title={copy.title}
      />
      <header className="max-w-3xl">
        <p className="eyebrow">{copy.label}</p>
        <h1 className="page-title">{copy.heading}</h1>
        <p className="page-intro">{copy.intro}</p>
      </header>
      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="min-w-0 py-2 lg:pr-6">
          <h2 className="text-2xl font-bold">{copy.direct}</h2>
          <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
            {copy.channels}
          </p>
          <a
            className="text-link mt-5 block min-h-11 break-all py-3"
            href={siteConfig.links.email}
            onClick={() => trackEvent("contact_intent", { channel: "email" })}
          >
            alessandroguelpa@icloud.com
          </a>
          <a
            className="text-link inline-flex min-h-11 items-center"
            href={siteConfig.links.linkedin}
            rel="noopener noreferrer"
            target="_blank"
            onClick={() =>
              trackEvent("contact_intent", { channel: "linkedin" })
            }
          >
            LinkedIn ↗<span className="sr-only">{copy.newTab}</span>
          </a>
          <div className="mt-7 border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <h3 className="font-bold">{copy.context}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {copy.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
        <form
          aria-busy={status === "sending"}
          className="surface-card min-w-0 p-6 sm:p-8"
          onSubmit={submit}
        >
          <h2 className="mb-6 text-2xl font-bold">{copy.form}</h2>
          <fieldset className="space-y-5" disabled={status === "sending"}>
            <div>
              <label className="field-label" htmlFor="contact-name">
                {copy.name}{" "}
                <span className="text-zinc-500">{copy.required}</span>
              </label>
              <input
                required
                autoComplete="name"
                className="form-field"
                id="contact-name"
                maxLength={120}
                name="name"
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
              />
            </div>
            <div>
              <label className="field-label" htmlFor="contact-email">
                Email{" "}
                <span className="text-zinc-500">{copy.emailRequired}</span>
              </label>
              <input
                required
                autoComplete="email"
                className="form-field"
                id="contact-email"
                maxLength={254}
                name="email"
                type="email"
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
              />
            </div>
            <div>
              <label className="field-label" htmlFor="contact-service">
                {copy.topic}
              </label>
              <select
                className="form-field"
                id="contact-service"
                name="service"
                value={form.service}
                onChange={(event) => update("service", event.target.value)}
              >
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service[language]}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="field-label" htmlFor="contact-message">
                {copy.message}{" "}
                <span className="text-zinc-500">{copy.required}</span>
              </label>
              <textarea
                required
                className="form-field min-h-40 resize-y"
                id="contact-message"
                maxLength={5000}
                minLength={10}
                name="message"
                placeholder={copy.example}
                rows={6}
                value={form.message}
                onChange={(event) => update("message", event.target.value)}
              />
            </div>
            <input
              aria-hidden="true"
              autoComplete="off"
              className="hidden"
              name="botcheck"
              tabIndex={-1}
              type="checkbox"
            />
            <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              {copy.privacy}
            </p>
            <button className="button-primary w-full" type="submit">
              {status === "sending" ? copy.sending : `${copy.send} →`}
            </button>
          </fieldset>
          <div
            aria-atomic="true"
            aria-live="polite"
            className="mt-5 text-sm leading-relaxed"
            role="status"
          >
            {status === "success" && (
              <p className="rounded-xl border border-emerald-600/30 bg-emerald-600/10 p-4 text-emerald-800 dark:text-emerald-300">
                {copy.success}
              </p>
            )}
            {status === "error" && (
              <p className="rounded-xl border border-red-600/30 bg-red-600/10 p-4 text-red-800 dark:text-red-300">
                {copy.error}{" "}
                <a className="underline" href={siteConfig.links.email}>
                  {copy.emailMe}
                </a>
                .
              </p>
            )}
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
}
