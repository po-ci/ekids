<template>
    <v-container fluid grid-list-sm>
        <v-slide-y-transition mode="out-in">
            <v-tabs
                    v-model="active"
                    color="deep-purple"
                    dark
                    slider-color="white"
                    :show-arrows="true"
                    icons-and-text
                    centered
            >
                <v-tabs-slider color="white"></v-tabs-slider>
                <v-tab key="Emojis">
                    Emojis
                    <v-icon>mood</v-icon>
                </v-tab>

                <v-tab key="Toys">
                    Toys
                    <v-icon>bug_report</v-icon>
                </v-tab>

                <v-tab-item key="0">

                    <album album="emojis"></album>
                </v-tab-item>

                <v-tab-item key="0">

                    <album album="toys"></album>
                </v-tab-item>
            </v-tabs>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import Album from './../../components/Album.vue'
    import {mapState} from 'vuex'

    export default {
        name: 'Albums',
        components: {Album},
        computed: {},
        data() {
            return {
                active: 0,
            }
        },
    }
</script>
