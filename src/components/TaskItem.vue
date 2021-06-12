<template>
  <div class="task" :id="'item'+index">
      <p><b>Title</b>: {{task.title}}</p>
      <p><b>Description</b>: {{task.description}}</p>
      <p><button type="button" @click="updateTask">Edit</button></p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name: 'TaskItem',
    props: {
        task: {
            type: Object,
            required: true
        },
        index: Number
    },
    mounted(){
        if(this.index%2==0){
            document.querySelector('#item'+this.index).style.backgroundColor="skyblue";
        }else{
            document.querySelector('#item'+this.index).style.backgroundColor="white";
        }
    },
    methods: {
        ...mapMutations(['setCurrentTask']),
        updateTask(){
            this.setCurrentTask(this.task._id);
            this.$router.push('/update-task');
        }
    }
}
</script>

<style scoped>
    .task {
        width: 500px;
        height: auto;
        text-align: left;
        padding: 10px 20px;
    }
</style>