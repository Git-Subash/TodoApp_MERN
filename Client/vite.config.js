import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vercel from "vite-plugin-vercel";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: process.env.BACKEND_URL,
  },
  plugins: [react(), vercel()],
});
