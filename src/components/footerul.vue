<template>
    <v-footer color="#8f604a"  flat theme="dark" style=" bottom: 0; float: bottom; height: 70px" >
        <v-row align="center" justify="center">
            <v-col text-align="center" cols="12" sm="6" class="text-center black--text">
                {{ new Date().getFullYear() }} — <strong>© e-coffee</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
export default {
    name: "footer-ul"
}
</script>