import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/srgroup-website/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "/src/index.js",
    },
  },
});
