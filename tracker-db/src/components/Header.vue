<template>
  <header>
    <h1>{{ title }}</h1>
    <AppButton
        v-show="homePage"
        v-on:show-add-btn="handleShowAddBtn($event)"
        :text="showAddTask ? 'Close' : 'Add Task'"
        :color="showAddTask ? 'green' : 'red'"
    ></AppButton>
  </header>
</template>

<script>
import AppButton from "@/components/Button.vue";

export default {
  name: 'AppHeader',
  components: {AppButton},
  props: {
    title: {
      type: String,
      showAddTask: Boolean
    }
  },
  data(){
    return {}
  },
  methods: {
    handleShowAddBtn: function (){
      this.$emit('show-add-btn-header');
    }
  },
  computed: {
    homePage() {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    },
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>