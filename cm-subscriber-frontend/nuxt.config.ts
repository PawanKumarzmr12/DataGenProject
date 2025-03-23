// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:4000',  // Your backend API URL
    },
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
});
