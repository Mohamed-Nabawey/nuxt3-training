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

  // pre-render all routes SSG (static site generation) configs
  // HTML files are generated at build time
  // nitro: {
  //   static: true,
  // },

  // pre-render specific routes configs
  // use npx nuxt build to generate the HTML files.
  // nitro: {
  //   prerender: {
  //     routes: ['/about']
  //   }
  // },

  // try to genereate only about pages failed
  // npm run generate -- --route /about
  // generate: {
  //   dir: '/about', 
  // },

  // routeRules: {
  //   // all routes will be background revalidated (ISR) at most every 60 seconds
  //   '/**': { isr: 60000 },
  //   // this page will be generated on demand and cached permanently
  //   '/about': { isr: true }
  // },


  // Enable ISR (Incremental Static Regeneration)
  // ISR means : Pages are generated on-demand when first requested, then cached and reused for subsequent requests.
  // Only the pages that have changed are regenerated, the rest remain cached.
  // routeRules: {
  //  // all routes will be background revalidated (ISR) at most every 60 seconds
  //  '/**': { isr: 60 },
  //  // this page will be generated on demand and cached permanently
  //  '/about': { isr: true }
  // },
})
