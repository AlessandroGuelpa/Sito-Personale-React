//import { Button } from "@heroui/button";
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
//import { link as linkStyles } from "@heroui/theme";
//import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo2, SearchIcon } from "@/components/icons";
import CustomLink from '@/components/customlink';
//import { color } from "framer-motion";

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
            <Logo2 />
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <CustomLink
              className = "text-zinc-800 dark:text-zinc-100"
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
                className = "text-zinc-800 dark:text-zinc-100"
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
