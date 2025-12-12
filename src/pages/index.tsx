//import { Link } from "@heroui/link";
//import { Snippet } from "@heroui/snippet";
//import { Code } from "@heroui/code";
//import { button as buttonStyles } from "@heroui/theme";
//import clsx from "clsx";
import { siteConfig } from "@/config/site";
//import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import CustomLink from '@/components/customlink';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className="text-5xl font-bold">
            Ciao, sono <span className="text-violet-500">Alessandro</span>
          </h1>
          <h2 className="text-3xl font-semibold mt-4">
           - Sviluppatore web <br /> creativo e curioso -
          </h2>
          <p className="text-gray-400 mt-4">Costruisco interfacce moderne con React, Shopify e Rails.</p>

        </div>

        <div className="flex gap-3">
          <CustomLink
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} className="inline align-sub" />
            GitHub
          </CustomLink>
        </div>
      </section>
    </DefaultLayout>
  );
}
