<template>
    <v-container grid-list-md>
        <practice-one-page :words="words.professions"
                           :headers="headers"
                           :soundPath="getSoundPath"
                           :img="true" :imgPath="getImgPath"
        >
        </practice-one-page>
    </v-container>
</template>

<script>
    import {soundProfessionsPath, imgProfessionsPath} from '../../config/config'
    import HeaderPage from '../../components/HeaderPage.vue'
    import PracticeOnePage from '../../components/PracticeOnePage.vue'
    import { mapState } from 'vuex'

    export default {
        name: 'Professions1',
        components: {PracticeOnePage, HeaderPage},
        props: {
            msg: String
        },
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
        methods: {},
        data: function () {
            return {
                headers: {
                    enTitle: "Professions",
                    esTitle: "Profesiones",
                    enDesc: "Press the green button and click on the profession you heard. Correct answer: +3. Incorrect answer: -1",
                    esDesc: "Oprime el  boton verde y has click en la profesion que escuchaste. Respuesta correcta: +3. Respuesta Incorrecta: -1 "
                },
            };
        }
    }
</script>

