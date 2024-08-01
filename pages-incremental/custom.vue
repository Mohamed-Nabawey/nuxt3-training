<script setup>
definePageMeta({
    layout: 'custom',
    middleware: 'custom',
});

const counter = useCounter();

import { useCounterStore } from '~/stores/myStore.js';
const store = useCounterStore();

</script>


<template>
    <div id="main">
        <p> Custom incremental page</p>
    </div>

    <div> Counter = {{ counter }}</div>
    <button @click="counter++"> + </button>
    <button @click="counter--"> - </button>


    <Counter  id="counter"/>


    <PiniaCounter  id="piniaCounter"/>
</template>