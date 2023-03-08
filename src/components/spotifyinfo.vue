<template>
    <v-dialog width="500" v-model="info">
        <template v-slot:activator="{ on }">
                <v-btn v-on="on" icon class="mt-4 mr-2"><v-icon>mdi-alpha-i-circle-outline</v-icon></v-btn>
        </template>

        <v-card>
            <v-container class="popup header">
                <v-card-title class="text">Cum adaug un playlist de pe Spotify?</v-card-title>
                <v-btn class="mr-3 mt-3" icon @click="close()"><v-icon>mdi mdi-close</v-icon></v-btn>
            </v-container>

            <v-container>
                <v-list class="popup">
                    <v-list-item>
                        Deschide Spotify, găsește playlist-ul
                    </v-list-item>
                    <v-list-item>
                        Right-click, share, embed
                    </v-list-item>
                    <v-list-item>
                        Copiază link-ul din src:
                    </v-list-item>
                    <v-list-item>
                        <v-img src="../assets/spotify.png"></v-img>
                    </v-list-item>
                </v-list>
            </v-container>
            
        </v-card>

    </v-dialog>
</template>

<script>

export default {
    name: "spotify-info",
    data: () => ({
        info: false,
        // pozica: poza
    }),
    methods: {
        close(){
            this.info = false
        }
    },
}

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');

.popup {
    background-color: #ffe7d6 !important;
    font-family: 'Montserrat', sans-serif;
}

.header{
    display: flex;
    justify-content: space-between;
}

</style>