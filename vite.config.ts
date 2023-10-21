import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_BASE_URL_LN": JSON.stringify(
      process.env.VITE_BASE_URL_LN
    ),
  },
});
