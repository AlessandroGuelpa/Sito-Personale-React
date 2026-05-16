//import { Link } from "@heroui/link";

import { motion } from "framer-motion";

import { Navbar } from "@/components/navbar";
import CustomLink from "@/components/customlink";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-violet-600 focus:text-white focus:font-bold focus:shadow-lg"
        href="#main-content"
      >
        Salta al contenuto
      </a>
      <Navbar />
      <main
        className="container mx-auto max-w-7xl px-6 flex-grow "
        id="main-content"
      >
        <motion.section
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto px-6 py-10 items-center gap-12 motion"
          exit={{ opacity: 0, y: -20 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {children}
        </motion.section>
      </main>

      <footer className="w-full flex items-center justify-center py-3">
        <span className="text-default-600">Powered by &nbsp; </span>
        <CustomLink href="/">
          <span>Alessandro Guelpa</span>
        </CustomLink>
      </footer>
    </div>
  );
}
