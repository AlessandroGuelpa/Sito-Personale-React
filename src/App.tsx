import { Suspense, lazy } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { ScrollProgress } from "@/components/scroll-progress";
import { DEFAULT_OG_IMAGE, SITE_URL, TWITTER_HANDLE } from "@/utils/seo";

// Lazy import delle pagine
const IndexPage = lazy(() => import("@/pages/index"));
const BlogPage = lazy(() => import("@/pages/blog/index"));
const BlogPostPage = lazy(() => import("@/pages/blog/[id]"));
const AboutPage = lazy(() => import("@/pages/about"));
const ProjPage = lazy(() => import("@/pages/proj"));
const ContactPage = lazy(() => import("@/pages/contact"));
const SportPage = lazy(() => import("@/pages/sports"));
const VehrtPage = lazy(() => import("@/pages/vehrt"));

function App() {
  const location = useLocation();
  const isMusicPage = ["/vehrt", "/dj-qbit"].includes(
    location.pathname.replace(/\/$/, "").toLowerCase(),
  );

  return (
    <>
      <Helmet>
        <html lang={isMusicPage ? "en" : "it"} />
        <title>
          Alessandro Guelpa — Front-end &amp; Shopify Developer | Portfolio
        </title>
        <meta
          content="Sviluppatore front-end specializzato in React, Tailwind e Shopify. Case study, articoli tecnici e contatti per collaborazioni e freelance."
          name="description"
        />
        <link href={SITE_URL} rel="canonical" />
        <link
          href={isMusicPage ? `${SITE_URL}/vehrt` : SITE_URL}
          hrefLang={isMusicPage ? "en" : "it"}
          rel="alternate"
        />
        <link
          href={isMusicPage ? `${SITE_URL}/vehrt` : SITE_URL}
          hrefLang="x-default"
          rel="alternate"
        />
        <meta content="website" property="og:type" />
        <meta content={SITE_URL} property="og:url" />
        <meta
          content="Alessandro Guelpa — Front-end & Shopify Developer | Portfolio"
          property="og:title"
        />
        <meta
          content="Portfolio, articoli tecnici e progetti in React, Tailwind e Shopify."
          property="og:description"
        />
        <meta content="it_IT" property="og:locale" />
        <meta content={DEFAULT_OG_IMAGE} property="og:image" />
        <meta content="1200" property="og:image:width" />
        <meta content="630" property="og:image:height" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={TWITTER_HANDLE} name="twitter:site" />
        <meta
          content="Alessandro Guelpa — Front-end & Shopify Developer | Portfolio"
          name="twitter:title"
        />
        <meta
          content="Portfolio, articoli tecnici e progetti in React, Tailwind e Shopify."
          name="twitter:description"
        />
        <meta content={DEFAULT_OG_IMAGE} name="twitter:image" />
      </Helmet>
      {!isMusicPage && <ScrollProgress />}
      <Suspense
        fallback={
          <div
            className={`flex items-center justify-center min-h-screen ${isMusicPage ? "bg-[#090909]" : ""}`}
          >
            <div
              className={`animate-spin rounded-full h-12 w-12 border-2 ${isMusicPage ? "border-[#A32937]/25 border-t-[#A32937]" : "border-violet-500/25 border-t-violet-600"}`}
            />
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
            <Route element={<VehrtPage />} path="/vehrt" />
            <Route
              element={
                <Navigate
                  replace
                  to={`/vehrt${location.search}${location.hash === "#ascolta" ? "#listen" : location.hash}`}
                />
              }
              path="/dj-qbit"
            />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
