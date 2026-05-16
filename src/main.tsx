import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { MotionConfig } from "framer-motion";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";
import "@/styles/custom.css";
import 'katex/dist/katex.min.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Provider>
          <MotionConfig reducedMotion="user">
            <App />
          </MotionConfig>
        </Provider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
