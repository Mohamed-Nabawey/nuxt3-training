<template>
    <div>
      <h2>{{ data }} </h2>
      <div> </div>
    </div>
</template>
  
  <style scoped>

  </style>

  <script setup>
  const uri = 'https://hafez.free.beeceptor.com/todos';
  const {data: data} = await useFetch(uri);
  console.log(data);

</script>
