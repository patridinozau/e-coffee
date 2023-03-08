<template>
  <v-app>
    <v-main class="main">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');


.main{
  font-family: 'Montserrat', sans-serif;
}
</style>

