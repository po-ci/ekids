<template>
    <v-toolbar color="primary" dark fixed app clipped-left>
        <v-toolbar-side-icon @click.stop="$emit('drawer',!drawer)"></v-toolbar-side-icon>
        <toolbar-logo title="EKIDS"></toolbar-logo>
        <v-spacer></v-spacer>
        <slot name="toolbar"></slot>
        <toolbar-login></toolbar-login>
    </v-toolbar>
</template>

<script>
    import ToolbarLogo from './ToolbarLogo'
    import ToolbarLogin from '../../modules/user/auth/components/ToolbarLogin'

    export default {
        name: "Toolbar",
        components:{
            ToolbarLogo,ToolbarLogin
        },
        props:{
            drawer: Boolean
        }
    }
</script>

<style scoped>

</style>