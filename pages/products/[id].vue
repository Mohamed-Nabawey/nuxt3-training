<template>
    <div>
      <ProductDetails :product="product" />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'product',
});

const id = useRoute().params.id;
const uri = 'https://fakestoreapi.com/products/' + id;
const { data: product } = await useFetch(uri);
if(!product.value) {
    throw createError({ statusCode: 404, message: 'Product not found' });
}

</script>

<style lang="scss" scoped></style>