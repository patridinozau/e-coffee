<template>
    <v-app-bar style="margin-bottom: 10vh" class="font" app color="#8f604a" flat>
  
      <router-link to="/">
          <img style="width: 80%" src="../assets/logutss.png" />
        </router-link>
      <router-link class="links black--text" to="/" style="margin-right:1rem; min-width:7rem" overflow-visible><v-icon class="iconitsa">mdi mdi-home-account</v-icon>e-coffee</router-link>
      <router-link class="links black--text" to="/timer"><v-icon class="iconitsa">mdi-alarm</v-icon>timer</router-link>
      <router-link class="links black--text" to="/tasks">
        <v-icon class="iconitsa">mdi-calendar-check-outline</v-icon>tasks</router-link>
      <router-link class="links black--text" to="/daily">
          <v-icon class="iconitsa">mdi-white-balance-sunny</v-icon>daily cafelutsa</router-link>
      
    </v-app-bar>
  </template>
  
  <script>
  
  export default {
    name: 'navigation-bar',
  }
  </script>
  
  <style>
  .font{
    color: #210f03;
  }
  
  .links{
    text-decoration: none;
    margin-right: 2rem;
    color: #210f03;
    font-size: 1.25rem;
    display:inline-flex;
  }
  
  .iconitsa{
    margin-right:0.5rem;
  }
  
  .v-application a {
      color: #210f03 !important;
  }
  
  </style>