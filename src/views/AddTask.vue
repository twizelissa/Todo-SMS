<template>
  <div>
      <h4>Add New task</h4>
      <label for="title">Title</label><br>
      <input type="text" id="title" v-model="title" placeholder="Enter Task Title..."><br>
      <label for="desc">Description</label><br>
      <input type="text" id="desc" v-model="description" placeholder="Enter Task Description..."><br>
      <p>{{message}}</p>
      <button type="button" @click="submitTask">Add</button>
  </div>
</template>

<script>
const { uuid } = require('uuidv4');
import {mapMutations} from 'vuex'
import Router from '../router'
export default {
    name: "AddTask",
    data(){
        return {
            title: "",
            description: "",
            message: ""
        }
    },
    methods: {
        ...mapMutations(['addTask']),
        submitTask(){
            this.message="";
            if(this.title.trim()=="" || this.description.trim()==""){
                this.message = "All fields are required.";
                return;
            }
            let id = uuid().toString();
            this.addTask({_id: id, title: this.title, description: this.description});
            this.title = "";
            this.description = "";
            this.message = "Task Added";
            Router.push('/')
        }
    }
}
</script>

<style>

</style>