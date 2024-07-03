import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shared",
      filename: "remoteEntry.js",
      exposes: {
        "./Theme": "./src/app/theme/index.ts",
        "./Store": "./src/app/store/index.ts",
        "./StoreActions": "./src/app/store/actions/index.ts",
        "./StoreSelectors": "./src/app/store/selectors/index.ts",
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
        "src/app/store/index.ts",
        "src/main.tsx",
        "src/App.tsx",
        "src/app/theme/**",
      ],
    },
  },
});
