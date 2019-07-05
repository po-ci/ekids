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
    import {mapGetters, mapActions} from 'vuex'
    import AvatarTolbar from './AvatarToolbar'

    export default {
        name: "LoginToolbar",
        components: {AvatarTolbar},
        computed: {
            ...mapGetters(['isAuth'])
        },
        mounted: function () {

        },
        methods: {}
    }
</script>

<style scoped>

</style>
