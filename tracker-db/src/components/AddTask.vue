<template>
  <form @submit="submit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input
          type="text"
          v-model="form.text"
          name="text"
          placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
          type="text"
          v-model="form.day"
          name="day"
          placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input
          v-model="form.reminder"
          type="checkbox"
          name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data(){
    return {
      form: {
        text: '',
        day: '',
        reminder: false
      }
    }
  },
  methods: {
    submit: function (e) {
      e.preventDefault();

      if (!this.form.text || !this.form.day){
        alert("error");
      }

      let newTask = {
        id: String(Math.floor(Math.random()*1000)),
        text: this.form.text,
        day: this.form.day,
        reminder: this.form.reminder
      }

      this.form.text = '';
      this.form.day = '';
      this.form.reminder = false;

      this.$emit('add-task', newTask);

    }
  }
}
</script>


<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>