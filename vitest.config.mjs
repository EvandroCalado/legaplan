import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test-setup.ts",
    coverage: {
      reporter: ["text", "html"],
      exclude: [
        "src/**/*.stories.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
        "src/**/index.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
        "src/app/layout.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
        "src/app/page.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
        "next.config.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
        "vitest.config.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
        "next-env.d.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
        ".next",
        ".storybook",
        "html",
      ],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
