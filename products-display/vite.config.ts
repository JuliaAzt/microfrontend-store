import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

import { fileURLToPath } from "node:url";
import { loadEnv } from "vite";

export default defineConfig((config) => {
  const env = loadEnv(config.mode, process.cwd(), "REACT_APP_");

  return {
    define: { "process.env": `${JSON.stringify(env)}` },
    server: {
      port: 5002,
    },
    plugins: [
      react(),
      federation({
        name: "product-display",
        filename: "remoteEntry.js",
        exposes: {
          "./ProductDisplay": "./src/App.tsx",
        },
        remotes: {
          shared: "http://localhost:3000/assets/remoteEntry.js",
        },
        shared: {
          react: {
            requiredVersion: "^18.0.0",
          },
          "react-dom": {
            requiredVersion: "^18.0.0",
          },
          "react-redux": {
            requiredVersion: "^9.1.2",
          },
          "@reduxjs/toolkit": {
            requiredVersion: "^2.2.6",
          },
        },
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },

    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["vitest.setup.ts"],
      coverage: {
        reporter: ["cobertura", "lcovonly", "text", "text-summary", "html"],
        thresholds: {
          branches: 90,
          functions: 90,
          lines: 90,
          statements: 90,
        },
        include: ["src/**/*"],
        exclude: [
          "**/__mocks__/**/*",
          "**/*.types.ts",
          "**/*.d.ts",
          "src/main.tsx",
          "src/App.tsx",
          "src/modules/**",
          "src/app/**",
        ],
      },
    },
  };
});
