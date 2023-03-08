<template>
    <v-app class="main">
  
      <navigation />
  
      <p class="titlu mt-8">Adaugă un task</p>
  
      <addTaskForm />
  
      <v-container class="content">
         <v-card v-for="task in tasks" :key="task" outlined class="tasks ma-8">
        <v-card-title class="task-title">{{ task.title }}
            <v-btn text icon circle><v-icon>mdi mdi-delete-outline</v-icon></v-btn>
        </v-card-title>
        <v-card-text class="task-text mt-4">{{ task.description }}</v-card-text>
      </v-card>
      </v-container>
  
      <footerul />
  
    </v-app>
  </template>
  
  <script>
  import Navigation from '@/components/navigation'
  import addTaskForm from '@/components/addTaskForm'
  import footerul from "../components/footerul.vue";
  
  export default {
    name: "task-page",
    components: {
      Navigation,
      addTaskForm,
      footerul
    },
    data() {
      return {
        tasks: JSON.parse(window.sessionStorage.getItem('tasks') || [])
      }
  },
  }
  
  
  </script>
  
  <style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');

  
  .main{
    background-color: #ffe7d6;
    font-family: 'Montserrat', sans-serif;
  }
  
  .list-item-holder {
    display: flex;
  }
  
  [data-status="true"] label {
    text-decoration: line-through;
  }
  
  .titlu {
    font-size: xxx-large;
    color: #523623;
    align-self: center;
  }
  
  .tasks{
    width:20rem;
    height: 20rem;
    background-color: #fff6e9;
  }
  
  .task-title {
    background-color: #8f604a;
    color: #fff6e9;
    width: 100%;
    justify-content: space-between;
  }
  
  .task-text{
    color: #210f03;
    font-weight: 500;
  }
  
  .content {
    display: flex;
    flex-wrap: wrap;
    height:100%
  }
  
  </style>