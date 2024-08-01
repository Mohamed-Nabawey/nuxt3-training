<script setup>
const route = useRoute();
console.log('route', route);
</script>

<template>
    <div>
    event with id = {{ $route.params.id }}
    </div>
</template>
