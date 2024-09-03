<template>
  <div v-for="task in tasks" :key="task.id">
    <Task v-on:toggleReminder="handleToggleReminder($event)" v-on:deleteTask="handleDeleteTask($event)" v-bind:task="task"></Task>
  </div>
</template>

<script>
import Task from "@/components/Task.vue";

export default {
  name: "AppTasks",
  components: { Task },
  data(){
    return {}
  },
  props: {
    tasks: {
      type: Array,
      required: true
    },
  },
  methods: {
    handleDeleteTask(id){
      this.$emit('delete-task', id)
    },
    handleToggleReminder(id){
      this.$emit('toggle-reminder', id)
    }
  }
}
</script>


<style scoped>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>