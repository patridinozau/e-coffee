<template>
  <v-app class="main">

    <navigation />

    <v-container class="container mt-9">
      <h1 align="center">Cronometrează-ți timpul de învățare!</h1>

      <stopwatch
          :timer="formattedTime"
          :state="timerState"
          @start="start"
          @stop="stop"
          @pause="pause"
      />
      
    </v-container>
    <footerul />
  </v-app>
</template>

<script>
import Navigation from '@/components/navigation'
import stopwatch from "./stopwatch";
import footerul from "../components/footerul.vue";

export default {
  name: "timer-ul",
  components: {
    Navigation, stopwatch, footerul
  },

  data: function ()  {
    return {
      timerState: 'stopped',
      crtTimer:0 ,
      formattedTime: "00:00:00",
      ticker: undefined,
      snackbar: false
    }
  },
  methods: {
    start: function() {
      if(this.timerState !== 'running')
      {
        this.startTime = new Date();
        this.tick();
        this.timerState = 'running';
      }
    },
    stop () {
      window.clearInterval(this.ticker)
      this.formattedTime = "00:00:00";
      this.timerState = "stopped";
    },
    pause () {
      window.clearInterval(this.ticker);
      this.timerState = 'paused';
    },
    tick: function () {
      this.ticker = setInterval(()=> {
        this.formattedTime = this.formatTime();
      },10)
    },
    formatTime() {
      // const actualTime = new Date();
      const formatTimeDiff = (unit) => {
        if (unit < 10) {
          return `0${unit}`;
        }
        return unit;
      }
      
      let timeDiff = new Date() - this.startTime;

      const hours = Math.floor(timeDiff / 1000 / 60 / 60);
      timeDiff -= hours * 1000 * 60 * 60;

      const minutes = Math.floor(timeDiff / 1000 / 60);
      timeDiff -= minutes * 1000 * 60;

      const seconds = Math.floor(timeDiff / 1000)

    
      return `${formatTimeDiff(hours)}:` +
      `${formatTimeDiff(minutes)}:` +
      `${formatTimeDiff(seconds)}`
    }
  }
}
</script>

<style scoped>
.main{
  background-color: #ffe7d6;
}

.container{
  height: 100%;
}

</style>