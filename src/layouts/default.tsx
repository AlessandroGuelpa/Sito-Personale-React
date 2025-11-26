import { Link } from "@heroui/link";
import { Analytics } from "@vercel/analytics/next"

import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        <motion.section
          className="max-w-5xl mx-auto px-6 py-10 items-center gap-12 motion"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.section>
      </main>

      <footer className="w-full flex items-center justify-center py-3">
        <Link className="flex items-center gap-1 text-current" href="/">
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">Alessandro Guelpa</p>
        </Link>
      </footer>
    </div>
  );
}
