<template>
  <div>
      <h3>Update Task task</h3>
      <label for="title">Title</label><br>
      <input type="text" id="title" v-model="title" placeholder="Enter Task Title..."><br>
      <label for="desc">Description</label><br>
      <input type="text" id="desc" v-model="description" placeholder="Enter Task Description..."><br>
      <p>{{message}}</p>
      <button type="button" @click="updateTaskItem">Update</button>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
    name: "AddTask",
    data(){
        return {
            task: {_id: '', title: '', description: ''},
            title: "",
            description: "",
            message: ""
        }
    },
    mounted(){
        let task = this.getCurrentTask();
        if(!task){
            alert('invalid task');
            this.$router.push('/');
        }
        this.task = task;
        this.title = task.title;
        this.description = task.description;
    },
    methods: {
        ...mapMutations(['updateTask','setCurrentTask']),
        ...mapGetters(['getCurrentTask']),
        updateTaskItem(){
            this.updateTask({task_id: this.task._id, title: this.title, description: this.description});
            this.setCurrentTask(null);
            this.title = "";
            this.description = "";
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>