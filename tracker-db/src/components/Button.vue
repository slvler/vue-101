<template>
  <button
      v-on:click="onClick()"
      :style="{ background: color}"
      class="btn"
  >{{ text }}</button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    text:{
      type: String
    },
    color:{
      type: String
    }
  },
  data(){
    return {}
  },
  methods:{
    onClick: function (){
      this.$emit('show-add-btn');
    }
  }
}
</script>

<style scoped>

</style>