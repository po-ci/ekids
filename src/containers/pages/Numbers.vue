<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <learn-page :words="words.numbers" :headers="headers" :exercises="exercises" :soundPath="getSoundPath"></learn-page>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import {soundNumbersPath} from '../../config/config'
    import LearnPage from '../../components/LearnPage.vue'
    import { mapState } from 'vuex'

    export default {
        name: 'Numbers',
        components: {LearnPage},
        props: {
            msg: String
        },
        computed: {
            ...mapState([
               'words'
            ]),
            getSoundPath: function(){
                return soundNumbersPath;
            }
        },
        data: function(){
            return {
                headers: {
                    enTitle: "Numbers",
                    esTitle: "Numeros",
                    enDesc: "Press the button to hear how it is pronounced",
                    esDesc: "Oprime el Boton para escuchar como se pronuncia"
                },
                exercises: [
                    {name:"1. Practice", to:"/numbers1"}
                ]
            }
        }
    }
</script>
