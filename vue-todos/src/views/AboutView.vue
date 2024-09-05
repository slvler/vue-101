<script setup>
import { computed } from "vue";

const comp = computed(() => {
  console.log("about page");
})


</script>
<template>
  <div>
    <h1>About page {{ comp }}</h1>
  </div>
</template>

<style>

</style>
