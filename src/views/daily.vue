<template>
    <v-app class="mt-8">
      <navigation />
        <v-container fluid class="main-app">
          <v-row style="margin-left: 8rem; margin-bottom: 3rem; margin-top:2.5rem">
          <h1 class="font-title">Curiozitati despre cafea</h1>
        </v-row>


        <v-row>
          
        </v-row>

        <v-row class="ma-5 rows">

          <v-container class="rows">
            <v-card style="width:30%; height:25vh" flat outlined >
              <v-card-title style="word-break: break-word" class="font-mid">Cum s-a descoperit cafeaua?</v-card-title>

              <v-card-text class="font-sm">Se pare că descoperirea cafelei a fost făcută de către un păstor care a observat 
                cum caprele sale au devenit extrem de energice după ce au mâncat anumite fructe de pădure.
              </v-card-text>
            </v-card>
            <v-container style="width: 50%; margin-right:0%">
              <v-img src="../assets/scientist.png" width="80%" height="80%"></v-img>
            </v-container>
          </v-container>

        </v-row>

        <v-row class="ma-5 rows" style="align-items: center; display:fex;justify-items: center;">

          <v-container class="info-pics">
            <v-container style="width: 50%; margin-left:0%">
              <v-img src="../assets/fuel.png" width="70%" height="70%"></v-img>
            </v-container>
            <v-card style="width:30%; height:25vh" flat outlined >
              <v-card-title style="word-break: break-word" class="font-mid">Cafeaua este viitoarea benzina?</v-card-title>

              <v-card-text class="font-sm">Oamenii de știință au transformat cu succes cafeaua măcinată în biodiesel, 
                astfel încât într-o zi cafeaua ar putea să vă alimenteze mașina.
              </v-card-text>
            </v-card>
          </v-container>

        </v-row>

        <v-row class="mr-5 ml-5 mt-15 mb-5 rows" style="display: flex; justify-content: center; align-content: center;">

          <v-container class="info-pics">
            <v-card style="width:30%; height:25vh" flat outlined >
              <v-card-title style="word-break: break-word" class="font-mid">Tipuri de cafea</v-card-title>
              <v-card-text class="font-sm">Există două categorii principale de cafea: Robusta și Arabica. 
                Cafeaua Robusta are o aromă mai acidă și mai aspră, cu un nivel mai ridicat de cafeină. 
                Cafeaua Arabica este cunoscută pentru aroma sa delicată și aciditatea scăzută.</v-card-text>
            </v-card>
            <v-container style="width: 50%; margin-right:0%">
              <v-img src="../assets/cafea-reala.png" width="70%" height="70%"></v-img>
            </v-container>
          </v-container>

        </v-row>

        <v-row class="ma-5 rows">

          <v-container class="info-pics">
            <v-container style="width: 50%; margin-left:0%">
              <v-img src="../assets/health.png" width="70%" height="70%"></v-img>
            </v-container>
            <v-card style="width:30%; height:35vh" flat outlined >
              <v-card-title style="word-break: break-word" class="font-mid">Sanatate?</v-card-title>

              <v-card-text class="font-sm">Cercetarile au legat consumul moderat de cafea ,
                cu o durata de viata mai lunga, plus un risc redus de boli cardiovasculare, 
                diabet de tip 2 si Parkinson, potrivit publicatiei Harvard Health.

                Deasemenea consumul regulat poate avea beneficii pentru sanatate: riscul redus de boli precum cancerul, 
                bolile de inima si Alzheimer.
              </v-card-text>
            </v-card>
          </v-container>

        </v-row>

        <v-row class="mr-5 ml-5 mt-15 mb-5 rows" style="display: flex; justify-content: center; align-content: center;">

          <v-container class="info-pics">
            <v-card style="width:30%; height:25vh" flat outlined >
              <v-card-title style="word-break: break-word" class="font-mid">Consum</v-card-title>
              <v-card-text class="font-sm">Consumul de cafea la nivel mondial este de 2,25 miliarde de căni/zi.</v-card-text>
            </v-card>
            <v-container style="width: 50%; margin-right:0%">
              <v-img src="../assets/worldwide.png" width="70%" height="70%"></v-img>
            </v-container>
          </v-container>

        </v-row>

        <v-row class="ma-5 rows">

          <v-container class="info-pics">
            <v-container style="width: 50%; margin-left:0%">
              <v-img src="../assets/chillin.png" width="70%" height="70%"></v-img>
            </v-container>
            <v-card style="width:30%; height:25vh" flat outlined >
              <v-card-title style="word-break: break-word" class="font-mid">Cata cafeina?</v-card-title>

              <v-card-text class="font-sm">Există mai multă cafeină într-o cafea lungă decât într-un espresso.
              </v-card-text>
            </v-card>
          </v-container>

        </v-row>

        <v-row class="mr-5 ml-5 mt-15 mb-5 rows" style="display: flex; justify-content: center; align-content: center;">

          <v-container class="info-pics">
            <v-card style="width:30%; height:25vh" flat outlined >
              <v-card-title style="word-break: break-word" class="font-mid">Diminetile cu ea...</v-card-title>
              <v-card-text class="font-sm">Simplul miros al cafelei te ajuta să-ti incepi dimineața frumos!</v-card-text>
            </v-card>
            <v-container style="width: 50%; margin-right:0%">
              <v-img src="../assets/gudmorning.png" width="70%" height="70%"></v-img>
            </v-container>
          </v-container>

        </v-row>
        
        </v-container>
      <footerul />
    </v-app>
</template>
  
  <script>
  import Navigation from '@/components/navigation'
  import footerul from '@/components/footerul'

  export default {
    name: "daily-page",
    components: {
      Navigation,
      footerul
    }
  }
  </script>
  
  <style scoped>

.main-app{
  height:100%;
  background-color: #ffe7d6;
}

.font-title{
  font-size: xxx-large;
  color: #3e1c06;
}

.font-sm{
  color: #3e1c06;
}

.font-mid{
  color: #3e1c06;
}

.rows{
  align-content: center;
  justify-content: space-between;
  display: flex;
}

  </style>