<template>
    <v-dialog width="500" v-model="geninfo">
        <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="#8f604a" right fixed bottom small fab dark><v-icon>mdi-alpha-i-circle-outline</v-icon></v-btn>
        </template>
        <v-card style="min-height: 50vh">
            <v-container style="min-height: 50vh" class="popup">
                
                <v-container class="header bg">
                    <v-card-title class="text">Ce poți face pe e-coffee?</v-card-title>
                    <v-btn class="mr-3 mt-3" icon @click="close()"><v-icon>mdi mdi-close</v-icon></v-btn>
                </v-container>

                <v-container class="mt-9">
                    <v-list class="popup">
                        <v-list-item>
                            Ascultă muzica preferată de pe Spotify! 
                            Introdu linkul unui playlist, așa cum este arătat în fereastra de informații a zonei.
                        </v-list-item>
                        <v-list-item>
                            Adaugă sunete ambientale pentru atmosfera de cafenea acasă!
                        </v-list-item>
                        <v-list-item>
                            Adaugă &nbsp;
                            <router-link to="/tasks" style="text-decoration: underline; color:#834115">taskuri</router-link>&nbsp; ca să nu uiți ce ai de facut!
                        </v-list-item>
                        <v-list-item>
                            Cronometrează-ți &nbsp;
                            <router-link to="/timer" style="text-decoration: underline; color:#834115">timpul</router-link>&nbsp; de învățare!
                        </v-list-item>
                        <v-list-item>
                            Află &nbsp;
                            <router-link to="/daily" style="text-decoration: underline; color:#834115">informații</router-link>&nbsp; 
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');

.header{
    display: flex;
    justify-content: space-between;
    background-color: #ffe7d6 !important;
    font-family: 'Montserrat', sans-serif;

}

.popup {
    background-color: #ffe7d6 !important;
    font-family: 'Montserrat', sans-serif;

    /* color:#3e1c06; */
}

.bg{
    background-image: url('../assets/v4micdark.png') !important;
}

.v-application a {
    color:#834115;
}

</style>