// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // 網站 meta 設定
  app: {
    head: {
      title: "體驗營最終任務 - 個人品牌網站",
      htmlAttrs: {
        lang: "zh-Hant",
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],

  // Google Fonts 的相關配置
  googleFonts: {
    families: {
      "Noto+Sans+TC": [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    download: true,
    inject: true,
    display: "swap",
  },

  css: ["~/assets/css/fonts.css"],
});
