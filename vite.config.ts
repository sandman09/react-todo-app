import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
// 1. Import defineConfig from 'vitest/config' to support the test block types
import { defineConfig } from "vitest/config";
import tailwindcss from "@tailwindcss/vite";
// 2. Use standard cross-platform path module
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    // 3. Made string quotes consistent
    environment: "jsdom",
    globals: false,
    setupFiles: "./src/test/setup.ts",
  },
});
