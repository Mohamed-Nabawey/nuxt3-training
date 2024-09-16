<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'product',
});

// fetch products 
const {data: products} = await useFetch('https://fakestoreapi.com/products?limit=5');

</script>

<style lang="scss" scoped>

</style>