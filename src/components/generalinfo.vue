<template>
    <v-dialog width="500" v-model="geninfo">
        <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="#8f604a" right fixed bottom small fab dark><v-icon>mdi-alpha-i-circle-outline</v-icon></v-btn>
        </template>
        <v-card style="min-height: 50vh">
            <v-container style="min-height: 50vh" class="popup">
                
                <v-container class="header bg">
                    <v-card-title class="text">Ce poti face pe e-coffee?</v-card-title>
                    <v-btn class="mr-3 mt-3" icon @click="close()"><v-icon>mdi mdi-close</v-icon></v-btn>
                </v-container>

                <v-container class="mt-9">
                    <v-list class="popup">
                        <v-list-item>
                            Asculta muzica preferata de pe Spotify! 
                            Introdu linkul unui playlist, asa cum este aratat in fereastra de informatii a zonei.
                        </v-list-item>
                        <v-list-item>
                            Adauga sunete ambientale pentru atmosfera de cafenea acasa!
                        </v-list-item>
                        <v-list-item>
                            Adauga &nbsp;
                            <router-link to="/tasks" style="text-decoration: underline; color:#834115">taskuri</router-link>&nbsp; ca sa nu uiti ce ai de facut!
                        </v-list-item>
                        <v-list-item>
                            Cronometreaza-ti &nbsp;
                            <router-link to="/timer" style="text-decoration: underline; color:#834115">timpul</router-link>&nbsp; de invatare!
                        </v-list-item>
                        <v-list-item>
                            Afla &nbsp;
                            <router-link to="/daily" style="text-decoration: underline; color:#834115">informatii</router-link>&nbsp; 
                            interesante despre cafea!
                        </v-list-item>
                    </v-list>
                </v-container>

            </v-container>
            
            
        </v-card>
    </v-dialog>
</template>

<script>

export default {
    name: "general-info",
    data: () => ({
        geninfo: false,
    }),
    methods: {
        close(){
            this.geninfo = false
        }
    },
}

</script>

<style>
.header{
    display: flex;
    justify-content: space-between;
    background-color: #ffe7d6 !important;
}

.popup {
    background-color: #ffe7d6 !important;
    /* color:#3e1c06; */
}

.bg{
    background-image: url('../assets/v4micdark.png') !important;
}

.v-application a {
    color:#834115;
}

</style>