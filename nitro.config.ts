import { defineNuxtConfig } from '@nuxt/bridge';
import axios from 'axios';

const mainRoute = ['/'];

export default defineNuxtConfig({
  nitro: {
    hooks: {
      async "prerender:generate"(route) {
        console.log('route =', route);
        let changedRoutes = [];
        let prerenderAllSite = false;
        try {
          const response = await axios.get('http://localhost:3000/api/changedRoutes');
          changedRoutes = response.data.api;
          prerenderAllSite = response.data.prerenderAllSite;
        } catch (error) {
          console.error('Error fetching changedRoutes:', error);
        }

        if (prerenderAllSite) {
          console.log('changedRoutes is empty, continuing prerendering all routes.');
          return;
        }

        if (mainRoute.includes(route.route) || changedRoutes.some((changedRoute: string) => route.fileName?.includes(changedRoute))) {
          console.log('Prerendering route:', route.route);
        } else {
          console.log('Skipping prerender for route:', route.route);
          route.skip = true;
        }
      },
    },
  },
});
