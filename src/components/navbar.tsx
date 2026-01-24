import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, SearchIcon } from "@/components/icons";
import CustomLink from '@/components/customlink';

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-zinc-200/50 dark:border-white/10 py-2">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
           {/* --- SOLUZIONE CSS/TAILWIND --- */}
            
            {/* --- LOGO RESPONSIVE (Piccolo su mobile, Grande su desktop) --- */}
            
            {/* 1. Logo per LIGHT MODE (Giorno) */}
            <img 
              src="/logo_white.webp" 
              alt="Alessandro Guelpa Logo" 
              // MODIFICHE:
              // - Rimosso 'rounded-full'
              // - w-12 h-12: Dimensione base per MOBILE (48px)
              // - sm:w-[120px] sm:h-[120px]: Dimensione per DESKTOP (120px) da breakpoint 'sm' in su
              className="w-18 h-18 sm:w-[100px] sm:h-[100px] object-contain block dark:hidden" 
            />

            {/* 2. Logo per DARK MODE (Notte) */}
            <img 
              src="/logo_black.webp" 
              alt="Alessandro Guelpa Logo" 
              // Stesse modifiche qui
              className="w-18 h-18 sm:w-[100px] sm:h-[100px] object-contain hidden dark:block" 
            />
            
            {/* --------------------------------------------- */}
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <CustomLink
                className="text-zinc-800 dark:text-zinc-100"
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
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-zinc-800 dark:text-zinc-100 hover:text-violet-600 transition-colors" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-zinc-800 dark:text-zinc-100 hover:text-violet-600 transition-colors" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle className="text-zinc-800 dark:text-zinc-100 hover:text-violet-600 transition-colors" />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <CustomLink
                href={item.href}
                className="text-zinc-800 dark:text-zinc-100"
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