<template>
    <v-app>
        <layout :nav="nav" title="EKIDS">

            <!--Contenido-->
                <router-view></router-view>
        </layout>
    </v-app>
</template>

<script>
    import MyNameIs from './modules/app/components/MyNameIs.vue'
    import Stats from './modules/app/components/Stats.vue'
    import nav from './nav'
    import Layout from './layout/components/Layout'

    export default {
        name: 'App',
        components: {
            Layout, MyNameIs, Stats
        },
        data() {
            return {
                nav: nav,
                clipped: false,
                drawer: false,
                fixed: false,
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'EKIDS'
            }
        }
    }
</script>
