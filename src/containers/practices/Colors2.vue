<template>
    <v-container grid-list-md>
        <practice-two-page :words="words.colors"
                           :headers="headers"
                           :fab="false"
                           :textEnable="false"
                           gameBgColor="blue-grey"
                           :soundPath="getSoundPath">
        </practice-two-page>
    </v-container>
</template>

<script>
    import {soundColorsPath} from '../../config/config'
    import HeaderPage from '../../components/HeaderPage.vue'
    import PracticeTwoPage from '../../components/PracticeTwoPage.vue'
    import { mapState } from 'vuex'

    export default {
        name: 'Colors2',
        components: {PracticeTwoPage, HeaderPage},
        props: {
            msg: String
        },
        computed: {
            ...mapState([
                'words'
            ]),
            getSoundPath: function () {
                return soundColorsPath;
            },

        },
        methods: {},
        data: function () {
            return {
                headers: {
                    enTitle: "Colors",
                    esTitle: "Colores",
                    enDesc: "Press the green button and write the color you heard. Correct answer: +3",
                    esDesc: "Oprime el  boton verde y escribe el color que escuchaste. Respuesta correcta: +3"
                },
            };
        }
    }
</script>

