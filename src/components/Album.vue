<template>
    <v-container grid-list-lg>
        <v-slide-y-transition mode="out-in">
            <v-layout row wrap justify-center>
                <v-flex v-for="(card,i) in getCards" shrink>
                    <album-card
                            :album="album"
                            :card="card"
                            :key="i"
                    >

                    </album-card>
                </v-flex>

            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import AlbumCard from './AlbumCard.vue'
    import {mapState} from 'vuex'

    export default {
        name: 'Album',
        components: {AlbumCard},
        props: {
            album: String
        },
        computed: {
            ...mapState([
                'albums'
            ]),
            getCards: function () {
                    return this.albums[this.album].cards
            }
        }
    }
</script>

