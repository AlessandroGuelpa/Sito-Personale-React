import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy import delle pagine
const IndexPage = lazy(() => import("@/pages/index"));
const AboutPage = lazy(() => import("@/pages/about"));
const ProjPage = lazy(() => import("@/pages/proj"));
const ContactPage = lazy(() => import("@/pages/contact"));
const SportPage = lazy(() => import("@/pages/sports"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-black">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500" />
        </div>
      }
    >
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<ProjPage />} path="/project" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<SportPage />} path="/sports" />
      </Routes>
    </Suspense>
  );
}

export default App;
