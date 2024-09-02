<template>
  <Header></Header>
  <div class="container">
    <Balance
        v-bind:total="total">
    </Balance>
    <IncomeExpenses
        v-bind:income="income"
        v-bind:expenses="expenses"
    ></IncomeExpenses>
    <TransactionList
        v-on:deleteTransaction="handleDeleteTransaction($event)"
        v-bind:transactions="transactions">
    </TransactionList>
    <AddTransaction
        v-on:transactionSubmitted="handleTransactionSubmitted($event)">
    </AddTransaction>
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Balance from '@/components/Balance.vue';
import IncomeExpenses from '@/components/IncomeExpenses.vue';
import TransactionList from '@/components/TransactionList.vue';
import AddTransaction from '@/components/AddTransaction.vue';

import { useToast } from "vue-toastification";

export default {
  name: 'App',
  components:{Balance, Header, IncomeExpenses, TransactionList, AddTransaction},
  data(){
    return {
      transactions:[
        { id: 1, text: 'Flower', amount: -10.8 },
        { id: 2, text: 'Salary', amount: 118.3 },
        { id: 3, text: 'Book', amount: 20.5 },
        { id: 4, text: 'Camera', amount: -100.3 },
        { id: 5, text: 'Shoes', amount: 10.3 },
      ]
    }
  },
  computed:{
    total: function (){
      return this.transactions.reduce((acc, cur) => {
        return acc + cur.amount;
      }, 0)
    },
    income: function (){
      return this.transactions
          .filter(x => x.amount > 0)
          .reduce((acc, cur) => {
            return acc + cur.amount;
          }, 0)
          .toFixed(2);
    },
    expenses: function (){
      return this.transactions
          .filter(x => x.amount < 0)
          .reduce((acc, cur) => {
            return acc + cur.amount;
          }, 0)
          .toFixed(2);
    }
  },
  methods: {
    handleTransactionSubmitted: function($event) {
      this.transactions.push({
        id: this.generateUniqueId(),
        text: $event.text,
        amount: $event.amount
      });

      console.log(this.transactions);
    },
    generateUniqueId: function (){
      return Math.floor(Math.random()*10000);
    },
    handleDeleteTransaction: function ($event){
      console.log($event);

      const toast = useToast();

      this.transactions = this.transactions.filter((transaction) => transaction.id !== $event);
      toast.success("Transaction Delete");

    }
  }
}
</script>

<style>

</style>
