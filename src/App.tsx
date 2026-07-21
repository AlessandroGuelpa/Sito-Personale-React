import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

import { ScrollProgress } from "@/components/scroll-progress";

// Lazy import delle pagine
const IndexPage = lazy(() => import("@/pages/index"));
const BlogPage = lazy(() => import("@/pages/blog/index"));
const BlogPostPage = lazy(() => import("@/pages/blog/[id]"));
const AboutPage = lazy(() => import("@/pages/about"));
const ProjPage = lazy(() => import("@/pages/proj"));
const ContactPage = lazy(() => import("@/pages/contact"));
const SportPage = lazy(() => import("@/pages/sports"));
const DjQbitPage = lazy(() => import("@/pages/dj-qbit"));

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollProgress />
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-2 border-violet-500/25 border-t-violet-600" />
          </div>
        }
      >
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route element={<IndexPage />} path="/" />
            <Route element={<BlogPage />} path="/blog" />
            <Route element={<BlogPostPage />} path="/blog/:id" />
            <Route element={<ProjPage />} path="/project" />
            <Route element={<ContactPage />} path="/contact" />
            <Route element={<AboutPage />} path="/about" />
            <Route element={<SportPage />} path="/sports" />
            <Route element={<DjQbitPage />} path="/dj-qbit" />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Analytics />
      <SpeedInsights/>
    </>
  );
}

export default App;
