<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <learn-page :words="words.abc" :headers="headers" :exercises="exercises" :soundPath="getSoundPath"></learn-page>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import {soundAbcPath} from '../../config/config'
    import LearnPage from '../../components/LearnPage.vue'
    import { mapState } from 'vuex'

    export default {
        name: 'Abc',
        components: {LearnPage},
        computed: {
            ...mapState([
               'words'
            ]),
            getSoundPath: function(){
                return soundAbcPath;
            }
        },
        data: function(){
            return {
                headers: {
                    enTitle: "Alphabet",
                    esTitle: "Abecedario",
                    enDesc: "Press the button to hear how it is pronounced",
                    esDesc: "Oprime el Boton para escuchar como se pronuncia"
                },
                exercises: [
                    {name:"1. Listen and identify | Escucha e Identifica", to:"/abc1"}
                ]
            }
        }
    }
</script>
