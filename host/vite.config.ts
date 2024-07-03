import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host_app",
      filename: "remoteEntry.js",
      remotes: {
        menu: "http://localhost:5001/assets/remoteEntry.js",
        main: "http://localhost:5002/assets/remoteEntry.js",
        footer: "http://localhost:5003/assets/remoteEntry.js",
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
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
