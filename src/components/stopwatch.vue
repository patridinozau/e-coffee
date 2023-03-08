<template>
    <v-container>
        <v-container class="main-container">
          <div align="center" class="timer-design">{{ timer }}</div>
            <v-container class="btn-container">
              <v-btn text outlined class="buttons butoane font-weight-bold" @click="$emit('start')"
                      :disabled="state == 'running'">
                start
              </v-btn>
              <v-btn text outlined class="buttons butoane font-weight-bold ma-4" @click="$emit('pause')"
                      :disabled="state == 'paused'">
                pauză
              </v-btn>
              <v-btn text outlined class="buttons butoane font-weight-bold" @click="$emit('stop')"
                      :disabled="state == 'stopped'">
                reset
              </v-btn>
            </v-container>
        </v-container>
  
    </v-container>
  
  </template>
  
  <script>
  
  export default {
    name: "stop-watch",
    props: ['timer', 'state']
  }
  </script>
  
  <style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');

  .buton{
    background-color: #8f604a;
  }
  
  .timer{
    width:50%;
  }
  
  .buttons{
    color: #8f604a;
  }
  
  .timer-design{
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 5rem;
    border-radius: 0.5rem;
    max-width: 30rem;
    min-width: 30rem;
    font-size: xxx-large;
    color: #523623;
    background-color: #fff6e9;
    justify-self: center;
    align-self: center;
  }
  
  .main-container {
    display: grid;
    align-content: center;
  }
  
  .btn-container{
    align-items: center;
    display: flex;
    justify-content: center;
  }
  
  </style>