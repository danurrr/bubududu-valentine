import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/bubududu-valentine",
  server: {
    host: 'ayangkucintakumaniskumybubu.anu.biz.id',
    port: 8080
},
  plugins: [react()],
});
