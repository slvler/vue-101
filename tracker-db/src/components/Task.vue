<template>
  <div v-on:dblclick="toggleReminder(task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>
      {{ task.text }}
      <i v-on:click="onDelete(task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>

export default {
  name: "AppTask",
  props:{
    task:{
      type:Object,
      required: true
    }
  },
  data(){
    return {}
  },
  methods: {
    onDelete(id){
      this.$emit('deleteTask', id)
    },
    toggleReminder(id){
      this.$emit('toggleReminder', id)
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