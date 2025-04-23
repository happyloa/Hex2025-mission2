// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
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
