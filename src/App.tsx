import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/scroll-progress";

// Lazy import delle pagine
const IndexPage = lazy(() => import("@/pages/index"));
const AboutPage = lazy(() => import("@/pages/about"));
const ProjPage = lazy(() => import("@/pages/proj"));
const ContactPage = lazy(() => import("@/pages/contact"));
const SportPage = lazy(() => import("@/pages/sports"));
const CompilerPage = lazy(() => import("@/pages/compiler"));

function App() {
  const location = useLocation();

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500" />
          </div>
        }
      >
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route element={<IndexPage />} path="/" />
            <Route element={<ProjPage />} path="/project" />
            <Route element={<ContactPage />} path="/contact" />
            <Route element={<AboutPage />} path="/about" />
            <Route element={<SportPage />} path="/sports" />
            <Route element={<CompilerPage />} path="/javascript-compiler" />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}

export default App;
