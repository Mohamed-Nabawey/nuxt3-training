// import { defineNuxtConfig } from '@nuxt/bridge';
// import fetch from 'node-fetch';

// let changedRoutes: string[] = [];

// const fetchChangedRoutes = async () => {
//   try {
//     const response = await fetch('https://nuxt3-training-two.vercel.app/api/changedPaths');
//     if (response.ok) {
//       changedRoutes = await response.json() as string[];
//       console.log('Fetched changed routes:', changedRoutes);
//     } else {
//       console.error('Failed to fetch changed routes:', response.statusText);
//     }
//   } catch (error) {
//     console.error('Error fetching changed routes:', error);
//   }
// };

// // Fetch the changed routes before the Nitro hooks are executed
// fetchChangedRoutes();

// export default defineNuxtConfig({
//   nitro: {
//     hooks: {
//       "prerender:generate"(route) {
//         console.log('in nitro hook for route: ', route.route);

//         if (changedRoutes.includes(route.route)) {
//           console.log('Prerendering route: ', route.route);
//         } else {
//           console.log('Skipping prerender for route: ', route.route);
//           route.skip = true;
//         }
//       },
//     },
//   },
// });
