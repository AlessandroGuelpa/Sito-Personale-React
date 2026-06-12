import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link as RouterLink } from "react-router-dom";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import CustomLink from "@/components/customlink";

export const Navbar = () => {
  return (
    <HeroUINavbar
      className="backdrop-blur-xl bg-white/60 dark:bg-black/50 border-b border-zinc-200/60 dark:border-white/10 py-1"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            aria-label="Alessandro Guelpa — torna alla home"
            className="flex justify-start items-center text-zinc-900 dark:text-white"
            color="foreground"
            href="/"
          >
            {/* Lockup completo da tablet in su, solo dev mark su mobile */}
            <Logo className="hidden sm:block" height={38} />
            <Logo className="sm:hidden" height={34} markOnly />
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-6 justify-start ml-4">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <CustomLink
                className="text-sm font-semibold text-zinc-700 dark:text-zinc-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                href={item.href}
              >
                {item.label}
              </CustomLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex items-center gap-3">
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-zinc-700 dark:text-zinc-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors" />
          </Link>
          <ThemeSwitch />
          <RouterLink
            className="btn-shine hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 hover:-translate-y-0.5 transition-all duration-300"
            to="/contact"
          >
            Contattami
          </RouterLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-zinc-800 dark:text-zinc-100 hover:text-violet-600 transition-colors" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle className="text-zinc-800 dark:text-zinc-100 hover:text-violet-600 transition-colors" />
      </NavbarContent>

      <NavbarMenu className="backdrop-blur-xl bg-white/80 dark:bg-black/80 pt-8">
        <div className="mx-4 flex flex-col gap-5">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.href}-${index}`}>
              <CustomLink
                className="text-lg font-semibold text-zinc-800 dark:text-zinc-100"
                href={item.href}
              >
                {item.label}
              </CustomLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
