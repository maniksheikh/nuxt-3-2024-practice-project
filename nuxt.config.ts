// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve} from "path"
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", '@nuxt/content', '@pinia/nuxt'], 
  alias: {
    "@": resolve(__dirname, "/")
  },
   css: ["~/assests/main.scss"],
})
