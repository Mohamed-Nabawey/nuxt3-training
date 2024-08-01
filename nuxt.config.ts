// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

import { defineNuxtConfig } from '@nuxt/bridge';
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt Store',
      meta: [
        { name: 'description', content: 'Nuxt Store description' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      ],
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, 'src'),
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
  ],

  // pre-render specific routes configs
  // use npx nuxt build to generate the HTML files.
  nitro: {
    prerender: {
      routes: ['/about'] // specify the routes you want to pre-render
    }
  }

  // pre-render all routes SSG (static site generation) configs
  // HTML files are generated at build time
  // nitro: {
  //   static: true,
  // },
})
