<template>
  <v-app>
    <v-container fill-height  class="main" fluid>

      <!--      navbar-->
      <navigation/>

      <!--      <v-container class="main">-->

      <v-container fluid class="main" style="margin-top:15rem;">
            <v-row align="center">

              <!--      carusel    poze-->
              <v-col class="coloana1">
                <v-card flat style="background-color: rgba(255, 255, 255, 0);">
                  <v-carousel :show-arrows="false">
                    <v-carousel-item>
                      <v-img class="carusel-item" src="../assets/v1dark.png"></v-img>
                    </v-carousel-item>
                    <v-carousel-item>
                      <v-img class="carusel-item" src="../assets/v2dark.png"></v-img>
                    </v-carousel-item>
                    <v-carousel-item>
                      <v-img class="carusel-item" src="../assets/v3dark.png"></v-img>
                    </v-carousel-item>
                    <v-carousel-item>
                      <v-img class="carusel-item" src="../assets/v4micdark.png"></v-img>
                    </v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-col>

            </v-row>

            <!-- spotify playlist -->
                <!-- de facut cu session storage -->

            <v-row class="mt-3">
              <v-col class="coloana1">
                  <v-card v-if="linkExists !== true" class="spotify-design" outlined>
                      <v-container style="display: flex; justify-content: space-between;">
                        <v-card-title style="word-break: break-word" class="font-mid">vrei sa-ti asculti muzica de pe spotify?</v-card-title>
                        <spotifyinfo />
                      </v-container>

                      <v-row class="ma-1">
                          <v-col align="center" cols="10">
                              <v-text-field 
                              label="linkul aici" 
                              clearable
                              outlined
                              v-model="linkSpotify"
                              ></v-text-field>
                          </v-col>

                          <v-col align="center" cols="2">
                            <v-btn @click="sendSpotifyLink" :loaging="loading" icon text depressed>
                              <v-icon class="icons">mdi mdi-check-bold</v-icon></v-btn>
                          </v-col>
                      </v-row>

                  </v-card>

                  <v-card flat v-if="linkExists === true" style="background-color: rgba(0, 0, 0 , 0); elevation: none">
                      <iframe :src=linkSpotify width="300" height="380" frameborder="0" allowtransparency="true"
                          allow="encrypted-media"
                      ></iframe>
                  </v-card>
                  </v-col>

                  <!-- sunete background -->
                  <v-container style="display: flex; align-items: center; max-width:40rem;">

                    <!-- <v-row class="coloana ma-2"><h2 class="font">sunete ambientale:</h2></v-row> -->

                    <v-col class="coloana3">

                      <v-row class="coloana ma-2"><h2 class="font">sunete ambientale:</h2>
                      </v-row>

                        <v-row class="coloana ma-2">
                          <h2 class="font">cani si farfurii</h2>
                    
                          <audio id="audio-cups" volume="0.4">
                            <source src="../assets/sounds/clinking-cups.mp3">
                          </audio>

                          <v-btn v-model="cups" class="ml-5" icon outlined @click="togglecups()">
                            <v-icon v-if="cups === false">mdi mdi-play</v-icon>
                            <v-icon v-else>mdi mdi-pause</v-icon>
                          </v-btn>
                        </v-row>

                        <v-row class="coloana ma-2">
                          <h2 class="font">chitara acustica</h2>
                    
                          <audio id="audio-guitar" volume="0.3">
                            <source src="../assets/sounds/people-guitar.mp3">
                          </audio>

                          <v-btn v-model="guitar" class="ml-5" icon outlined @click="toggleguitar()">
                            <v-icon v-if="guitar == false">mdi mdi-play</v-icon>
                            <v-icon v-else>mdi mdi-pause</v-icon>
                          </v-btn>
                        </v-row>

                        <v-row class="coloana ma-2">
                          <h2 class="font">ploaie</h2>
                    
                          <audio id="audio-rain" volume="0.3">
                            <source src="../assets/sounds/rain.mp3">
                          </audio>

                          <v-btn v-model="rain" class="ml-5" icon outlined @click="togglerain()">
                            <v-icon v-if="rain == false">mdi mdi-play</v-icon>
                            <v-icon v-else>mdi mdi-pause</v-icon>
                          </v-btn>
                        </v-row>

                        <v-row class="coloana ma-2">
                          <h2 class="font">muzica lofi</h2>
                    
                          <audio id="audio-lofi" volume="0.1">
                            <source src="../assets/sounds/lofi.mp3">
                          </audio>

                          <v-btn v-model="lofi" class="ml-5" icon outlined @click="togglelofi()">
                            <v-icon v-if="lofi == false">mdi mdi-play</v-icon>
                            <v-icon v-else>mdi mdi-pause</v-icon>
                          </v-btn>
                        </v-row>
                        
                        
                    </v-col>
                  </v-container>
            </v-row>

      </v-container>

      <!--        info button-->
      
      <generalinfo />

      <!--        la scroll pe homepage-->

      <v-container fluid class="main" style="margin-top:15rem;">

        <v-row style="margin-left: 8rem; margin-bottom: 3rem">
          <h1 class="font">Ce poti face pe e-coffee?</h1>
        </v-row>

        <v-row class="ma-5">

          <v-container class="info-pics">
            <v-card style="width:30%; height:25vh" flat outlined >
              <v-card-title class="font-mid">Bea o cafea!</v-card-title>

              <v-card-text class="font-sm">Ce poate fi mai relaxant decat sa te bucuri de o cana de cafea dupa o lunga zi de scoala?
                Porneste muzica, sunetele ambientale si relaxeaza-te cu imaginile linistitoare pe fundal!
              </v-card-text>
            </v-card>
            <v-container style="width: 50%; margin-right:0%">
              <v-img src="../assets/capuccino.png" width="70%" height="70%"></v-img>
            </v-container>
          </v-container>

        </v-row>

        <v-row class="ma-5">

          <v-container class="info-pics">
            <v-container style="width: 50%; margin-left:0%">
              <v-img src="../assets/fata.png" width="70%" height="70%"></v-img>
            </v-container>
            <v-card style="width:30%; height:25vh" flat outlined >
              <v-card-title class="font-mid">Invata!</v-card-title>

              <v-card-text class="font-sm">Invata fara distrageri, dar intr-un mediu placut. Foloseste doar instrumentele integrate,
                ca sa nu-ti pierzi concentrarea!
              </v-card-text>
            </v-card>
          </v-container>

        </v-row>

        <v-row class="mr-5 ml-5 mt-15 mb-5" style="display: flex; justify-content: center; align-content: center;">

          <v-container class="info-pics">
            <v-card style="width:30%; height:25vh" flat outlined >
              <v-card-title class="font-mid">Culturalizeaza-te!</v-card-title>
              <v-card-text class="font-sm">Afla informatii noi despre cea mai populara bautura din lume!</v-card-text>
            </v-card>
            <v-container style="width: 50%; margin-right:0%">
              <v-img src="../assets/cafea-reala.png" width="70%" height="70%"></v-img>
            </v-container>
          </v-container>

        </v-row>

      </v-container>

    </v-container>

    <footerul />


  </v-app>
</template>

<script>

import Navigation from "@/components/navigation";
import spotifyinfo from "../components/spotifyinfo.vue";
import generalinfo from "../components/generalinfo.vue"
import footerul from "../components/footerul.vue";

export default {
  name: 'Home-page',
  components: {
    Navigation,
    spotifyinfo,
    generalinfo,
    footerul
  },
  items: [
      {src: '../assets/v1dark.png'},
      {src: '../assets/v2dark.png'},
      {src: '../assets/v3dark.png'},
      {src: '../assets/v4dark.png'}
    ],
  data:() => ({
    linkSpotify: window.sessionStorage.getItem("spotifyURL") || '',
    loading: false,
    // linkExists: false,
    rain: false,
    cups: false,
    guitar: false,
    lofi: false,
    // (() => {})(); -> functia se autoapeleaza
    linkExists: (() => {
      if(window.sessionStorage.getItem("spotifyURL") !== null)
        return true;
      return false;
    })(),
  }),
  methods: {
    sendSpotifyLink () 
    {
      if(this.linkSpotify != '')
      {
        this.loading = true
        this.linkExists = true
        // linkSpotify = 
        window.sessionStorage.setItem('spotifyURL', this.linkSpotify);
        // loading = false
        // this.linkSpotify = ''
      }
    },
    togglerain() {
      var audio = document.getElementById("audio-rain");
      if (audio.paused) {
        audio.play();
        this.rain = true
      } else {
        audio.pause();
        this.rain = false
      }
    },
    togglecups() {
      var audio = document.getElementById("audio-cups");
      if (audio.paused) {
        audio.play();
        this.cups = true
      } else {
        audio.pause();
        this.cups = false
      }
    },
    toggleguitar() {
      var audio = document.getElementById("audio-guitar");
      if (audio.paused) {
        audio.play();
        this.guitar = true
      } else {
        audio.pause();
        this.guitar = false
      }
    },
    togglelofi() {
      var audio = document.getElementById("audio-lofi");
      if (audio.paused) {
        audio.play();
        this.lofi = true
      } else {
        audio.pause();
        this.lofi = false
      }
    }
  }
}
</script>

<style>
.container {
  width: 100%;
  padding: 0px;
  margin-right: auto;
  margin-left: auto;

}
.main{
  background-color: #ffe7d6;
}

.spotify-design{
  word-break: break-all !important;
  background-color: #ffe7d6 !important;
  max-width: 25rem;
}

.info-pics{
  display: flex;
  justify-content: space-between;
}

.coloana{
  /* justify-content: center; */
  align-content: center;
  align-items:center;
  display:flex;
}

.coloana1{
  justify-content: center;
  align-content: center;
  align-items:center;
  display:flex;
}

.coloana3{
  justify-content: center;
  align-content: center;
  display: list-item;
  list-style-type: none;
}

.carusel-item{
  width:50rem; height:50vh;
}

.font{
  color: #3e1c06;
  font-size: xx-large;
}

.font-mid {
  color: #3e1c06;
  font-size: x-large;
}

.font-sm{
  color: #3e1c06;
}

.icons{
  color: #3e1c06;
}

.v-carousel__controls{
  background-color: rgba(0, 0, 0, 0);
}

</style>