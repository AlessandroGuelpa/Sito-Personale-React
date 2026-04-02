import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths"; // se lo stai usando per l'alias "@/"

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      output: {
        // Dividiamo le librerie pesanti in file separati
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("three") || id.includes("@react-three")) {
              return "vendor-three";
            }
            if (id.includes("@monaco-editor")) {
              return "vendor-editor";
            }
            if (id.includes("framer-motion")) {
              return "vendor-framer-motion";
            }
            if (id.includes("@heroui") || id.includes("@react-aria")) {
              return "vendor-ui";
            }
            if (
              id.includes("react/") ||
              id.includes("react-dom/") ||
              id.includes("react-router-dom/")
            ) {
              return "vendor-react";
            }
            // Tutto il resto dei pacchetti NPM
            return "vendor";
          }
        },
      },
    },
  },
});
