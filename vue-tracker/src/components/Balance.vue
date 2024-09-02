<template>
  <h4>Your Balance</h4>
  <h1 id="balance">${{ total }}</h1>
</template>

<script>
export default {
  name: 'AppBalance',
  data(){
    return {}
  },
  props:{
    total: {
      type: Array,
      required: true,
    }
  },
}
</script>
<style scoped>

</style>