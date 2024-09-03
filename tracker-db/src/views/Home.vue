<template>
  <div v-show="showAddTask">
    <AddTask v-on:add-task="appAddTask($event)"></AddTask>
  </div>
  <Tasks
      v-on:toggle-reminder="appToggleReminder($event)"
      v-on:delete-task="appDeleteTask($event)"
      v-bind:tasks="tasks"
  >
  </Tasks>
</template>

<script>
import Tasks from "@/components/Tasks.vue";
import AddTask from "@/components/AddTask.vue";

export default {
  name: "AppHome",
  components: {AddTask, Tasks},
  props:{
    showAddTask: Boolean
  },
  data(){
    return {
      tasks: []
    }
  },
  methods:{
    async appDeleteTask(id){
      if (confirm('Are you sure you want to delete this task?')){

        const res = await fetch(`api/tasks/${id}`, {
          method:'DELETE'
        });

        res.status === 200 ? (this.tasks = this.tasks.filter(task => task.id !== id)) : alert("error")
      }
    },
    async appToggleReminder(id){

      const taskToToggle = await this.fetchTask(id);
      const updTask = {...taskToToggle, reminder: !taskToToggle.reminder};

      const  res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask)
      })

      const data = await res.json();

      this.tasks = this.tasks.map((task) =>
          task.id === id ? { ...task, reminder: data.reminder } : task
      )
    },
    async appAddTask(task){
      const res = await fetch('api/tasks',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task)
      })

      const data = await res.json();

      this.tasks = [...this.tasks, data];
      console.log(data);
    },
    async fetchTasks(){
      const res = await fetch("api/tasks");

      const data = await res.json();
      return data;
    },
    async fetchTask(id){
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;

    }
  },
  async created() {
    this.tasks = await this.fetchTasks();
  }
}
</script>


<style scoped>

</style>