<script setup>
const counter = useCounter();
</script>


<template>
    <div> counter component:</div>
    <div> Counter = {{ counter }}</div>
    <button @click="counter++"> + </button>
    <button @click="counter--"> - </button>
</template>