<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="submit">
    <div class="form-control">
      <label for="text">Text</label>
      <input v-model="form.text" type="text" id="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label for="amount"
      >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input v-model="form.amount" type="number" id="amount" placeholder="Enter amount..." />
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>
<script>
import { useToast } from "vue-toastification";

export default {
  name: 'AppAddTransaction',
  data(){
    return {
      form:{
        text: null,
        amount: null
      }
    }
  },
  methods:{
    submit(){
      const toast = useToast();
      if (this.form.text != null && this.form.amount != null){
        this.$emit('transactionSubmitted',this.form);
        toast.success("Successfully added transaction");
      }else{
        toast.error("Please enter an amount");
      }

    }
  }
}
</script>
<style>

</style>