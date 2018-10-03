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
                <v-tab key="0">
                    Emojis
                    <v-icon>mood</v-icon>
                </v-tab>

                <v-tab-item key="0">
                    <h2 class="text-xs-center mt-3">Change <v-icon color="orange">star</v-icon> for collectible cards!</h2>
                    <p class="text-xs-center">You can get stars by doing exercises in the different categories</p>
                    <album album="emojis"></album>
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
