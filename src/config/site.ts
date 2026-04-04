export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Progetti",
      href: "/project",
    },

    {
      label: "Contatti",
      href: "/contact",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Sport e Passioni",
      href: "/sports",
    }
  ],
  navMenuItems: [
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Progetti",
      href: "/project",
    },

    {
      label: "Contatti",
      href: "/contact",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Sport e Passioni",
      href: "/sports",
    }
  ],
  links: {
    github: "https://github.com/AlessandroGuelpa",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
