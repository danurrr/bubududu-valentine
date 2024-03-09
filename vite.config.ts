import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'ayangkucintakumaniskumybubu.anu.biz.id',
    port: 8080
},
  plugins: [react()],
});
