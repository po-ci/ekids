<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <learn-page :words="words.professions"
                        :headers="headers"
                        :exercises="exercises"
                        :soundPath="getSoundPath"
                        :img="true" :imgPath="getImgPath"
            >

            </learn-page>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import {soundProfessionsPath, imgProfessionsPath} from '../../config/config'
    import LearnPage from '../../components/LearnPage.vue'
    import { mapState } from 'vuex'

    export default {
        name: 'Professions',
        components: {LearnPage},
        computed: {
            ...mapState([
               'words'
            ]),
            getSoundPath: function(){
                return soundProfessionsPath;
            },
            getImgPath: function(){
                return imgProfessionsPath;
            }
        },
        data: function(){
            return {
                headers: {
                    enTitle: "Professions",
                    esTitle: "Profesiones",
                    enDesc: "Press the button to hear how it is pronounced",
                    esDesc: "Oprime el Boton para escuchar como se pronuncia"
                },
                exercises: [
                    {name:"1. Listen and identify | Escucha e Identifica", to:"/professions1"}
                ]
            }
        }
    }
</script>
