<template>
  <div class="home">
    <div v-if="tasks.length>0" class="tasks">
      <h3>List Of Tasks</h3>
      <task-item v-for="(task,index) in tasks" :task="task" :index="index" :key="index"></task-item>
    </div>
    <div v-else><h2>No Tasks available.</h2></div>
  </div>
</template>

<script>
import TaskItem from '../components/TaskItem.vue'
import { mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
    TaskItem
  },
  computed: {
    ...mapState(["tasks"])
  },
  methods: {
  }
}
</script>
<style scoped>
  .tasks {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
