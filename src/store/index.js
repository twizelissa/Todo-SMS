import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [],
    currentTask: null
  },
  mutations: {
    addTask(state, task){
      let sameTasks = state.tasks.filter(indexTask=> indexTask._id==task._id);
      if(sameTasks.length < 1) state.tasks.push(task);
    },
    setCurrentTask(state, task_id){
      let foundTasks = state.tasks.filter(task=> task._id==task_id);
      foundTasks.length>0? state.currentTask = foundTasks[0]: state.currentTask=null;
    },
    removeTask(state, task_id){
      state.tasks = state.tasks.filter(task=> task._id!=task_id);
    },
    setTasks(state, tasks){
      state.tasks = tasks;
    },
    updateTask(state, data){
      let task = state.tasks.filter(task=> task._id==data.task_id)[0];
      state.tasks[state.tasks.indexOf(task)].title = data.title;
      state.tasks[state.tasks.indexOf(task)].description = data.description;
    }
  },
  getters: {
    getTasks(state){
      return state.tasks;
    },
    getCurrentTask(state){
      return state.currentTask;
    }
  },
  actions: {
    resetState({state, commit}){
      state.currentTask = null;
      commit('setTasks', []);
    }
  },
  modules: {
  }
})
