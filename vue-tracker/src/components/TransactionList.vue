<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li v-for="item in transactions" v-bind:key="item.id" :class="item.amount < 0 ? 'minus' : 'plus'">
      {{ item.text }} <span>${{ item.amount }}</span>
      <button v-on:click="deleteTransaction(item.id)" class="delete-btn">x</button>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'AppTransactionList',
  props:{
    transactions: {
      type: Array,
      required: true,
    }
  },
  data(){
    return {}
  },
  methods:{
    deleteTransaction(id){
      this.$emit('deleteTransaction', id);
    }
  }
}
</script>
<style>

</style>