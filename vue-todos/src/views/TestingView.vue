<script setup>
import { computed } from "vue";

const comp = computed(() => {
  console.log("Testing page");
})


</script>
<template>
  <div>
    <h1>Testing page {{ comp }}</h1>
  </div>
</template>

<style>

</style>
