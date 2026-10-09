import { Suspense, lazy, useEffect, useRef } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { ScrollProgress } from "@/components/scroll-progress";

const IndexPage = lazy(() => import("@/pages/index"));
const BlogPage = lazy(() => import("@/pages/blog/index"));
const BlogPostPage = lazy(() => import("@/pages/blog/[id]"));
const AboutPage = lazy(() => import("@/pages/about"));
const ProjectPage = lazy(() => import("@/pages/proj"));
const ContactPage = lazy(() => import("@/pages/contact"));
const SportPage = lazy(() => import("@/pages/sports"));
const VehrtPage = lazy(() => import("@/pages/vehrt"));
const NotFoundPage = lazy(() => import("@/pages/not-found"));

export default function App() {
  const location = useLocation();
  const music = ["/vehrt", "/dj-qbit"].includes(
    location.pathname.replace(/\/$/, ""),
  );

  return (
    <>
      {!music && <ScrollProgress />}
      <Suspense
        fallback={
          <div
            className="flex min-h-screen items-center justify-center"
            role="status"
          >
            Caricamento…
          </div>
        }
      >
        <Routes>
          <Route element={<IndexPage />} path="/" />
          <Route element={<BlogPage />} path="/blog" />
          <Route element={<BlogPostPage />} path="/blog/:id" />
          <Route element={<ProjectPage />} path="/project" />
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
          <Route
            element={<Navigate replace to="/project" />}
            path="/projects"
          />
          <Route element={<NotFoundPage />} path="*" />
        </Routes>
        <RouteEffects />
      </Suspense>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

// Inside Suspense so scrolling and focus happen after the new page has mounted.
function RouteEffects() {
  const location = useLocation();
  const previousPath = useRef(location.pathname);

  useEffect(() => {
    if (previousPath.current === location.pathname) return;
    previousPath.current = location.pathname;
    if (location.hash) return;
    window.scrollTo({ top: 0, behavior: "instant" });
    document.getElementById("main-content")?.focus({ preventScroll: true });
  }, [location.pathname, location.hash]);

  return null;
}
