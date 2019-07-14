<template>

    <toolbar-login-avatar v-if="isAuth"></toolbar-login-avatar>
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
    import ToolbarLoginAvatar from './ToolbarLoginAvatar'

    export default {
        name: "LoginToolbar",
        components: {ToolbarLoginAvatar},
        computed: {
            ...mapGetters(['isAuth'])
        }
    }
</script>

<style scoped>

</style>
