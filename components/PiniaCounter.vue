<script setup>
import { useCounterStore } from '~/stores/myStore.js';
const store = useCounterStore();
</script>


<template>
    <div> Pinia counter component:</div>
    <div> Counter = {{ store.count }}</div>
    <button @click="store.count++"> + </button>
    <button @click="store.count--"> - </button>
</template>