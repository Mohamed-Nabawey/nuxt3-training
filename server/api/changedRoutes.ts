export default defineEventHandler(async (event) => {
    // ... Do whatever you want here
    console.log(event);
    return {
        routes: ['/about', '/hafez',],
        prerenderAllSite: true,
    }
  })

// []
// ['/about', '/hafez', '/product', '/products/index', '/product/1']
  