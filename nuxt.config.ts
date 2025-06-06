// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: process.env.NODE_ENV !== "production" },

  // 網站 meta 設定
  app: {
    head: {
      title: "體驗營最終任務 - 個人品牌網站",
      htmlAttrs: {
        lang: "zh-Hant",
      },
      script: [],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/content",
    "@nuxt/image-edge",
    "nuxt-gtag",
    "nuxt-aos",
  ],

  gtag: {
    id: "G-HJH56CLEWZ",
  },

  // Google Fonts 的相關配置
  googleFonts: {
    families: {
      "Noto+Sans+TC": [400, 500, 700, 900],
    },
    download: false,
    inject: true,
    display: "swap",
  },

  css: ["~/assets/css/fonts.css"],

  aos: {
    duration: 750,
  },

  image: {
    provider: "vercel",
  },

  nitro: {
    compressPublicAssets: true,
  },
});
