import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Adjust if deploying under a subpath (e.g., '/subpath/')
  build: {
    outDir: "dist", // Output directory for build files
  },
});
