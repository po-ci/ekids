<template>
    <v-app>
        <layout :nav="nav" :title="title">
            <!--Contenido-->
                <router-view></router-view>
        </layout>
    </v-app>
</template>

<script>

    import nav from './nav'
    import Layout from './layout/pages/Layout'

    export default {
        name: 'App',
        components: {
            Layout
        },
        data() {
            return {
                nav: nav,
                title: 'EKIDS'
            }
        }
    }
</script>
