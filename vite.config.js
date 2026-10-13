import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // The Vercel project was created with the CRA preset, which serves `build/`.
  // Inline nothing: the ~60 logo SVGs would otherwise land in the JS bundle as data URIs.
  build: { outDir: "build", assetsInlineLimit: 0 },
});
