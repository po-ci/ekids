<template>

    <avatar-tolbar v-if="isAuth"></avatar-tolbar>
    <v-btn v-else
           flat
           dark
           to="/login"
           round
    >
        Iniciar Sesión
    </v-btn>

</template>

<script>
    import {mapGetters} from 'vuex'
    import AvatarTolbar from './AvatarToolbar'

    export default {
        name: "LoginToolbar",
        components: {AvatarTolbar},
        computed: {
            ...mapGetters(['isAuth'])
        }
    }
</script>

<style scoped>

</style>
