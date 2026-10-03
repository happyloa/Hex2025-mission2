import tailwindcss from "@tailwindcss/vite";
import process from "node:process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: process.env.NODE_ENV === "development" },

  // 網站 meta 設定
  app: {
    head: {
      title: "體驗營最終任務 - 個人品牌網站",
      htmlAttrs: {
        lang: "zh-Hant",
      },
      script: [],
      link:
        process.env.NUXT_GOOGLE_FONTS_DOWNLOAD === "false"
          ? [
              {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap",
              },
            ]
          : [],
    },
  },
  modules: [
    "@nuxt/fonts",
    "@nuxt/content",
    "nuxt-clarity-analytics",
    "nuxt-gtag",
    "nuxt-aos",
  ],

  gtag: {
    id: "G-HJH56CLEWZ",
  },

  fonts: {
    families: [
      {
        name: "Noto Sans TC",
        provider:
          process.env.NUXT_GOOGLE_FONTS_DOWNLOAD === "false"
            ? "none"
            : "google",
        weights: [400, 500, 700, 900],
        styles: ["normal"],
        display: "swap",
      },
    ],
  },

  css: ["~/assets/css/main.css", "~/assets/css/fonts.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  aos: {
    duration: 750,
    offset: 0,
    easing: "ease-out-quart",
    once: true,
  },

  runtimeConfig: {
    clarityId: process.env.NUXT_CLARITY_ID || "",
  },
});
