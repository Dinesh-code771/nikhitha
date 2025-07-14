import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/nikhitha/", // <-- same as your repo name, with slashes
  plugins: [react()],
});
