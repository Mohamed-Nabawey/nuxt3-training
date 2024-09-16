// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

import { defineNuxtConfig } from '@nuxt/bridge';
import nitroConfig from './nitro.config';
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
  nitro: {
    static: true,
  },


  // calling nitro config with custom hooks
  ...nitroConfig

  // pre-render specific routes configs
  // use npx nuxt build to generate the HTML files.
  // nitro: {
  //   prerender: {
  //     routes: ['/hafez']
  //   }
  // },

  
  // import nitro config to add custom hooks
  // ...nitroConfig,

  // Enable ISR (Incremental Static Regeneration)
  // ISR means : Pages are generated on-demand when first requested, then cached and reused for subsequent requests.
  // Only the pages that have changed are regenerated, the rest remain cached.
  // routeRules: {
  //  // all routes will be background revalidated (ISR) at most every 60 seconds
  //  '/**': { isr: 60  },
  //  // generated on demand once until next deployment, cached on CDN permanently.
  //  '/about': { isr: true }
  // },
})
