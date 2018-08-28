<template>
    <v-container grid-list-md>
        <practice-one-page :words="words.colors"
                           :headers="headers"
                           :fab="false"
                           :textEnable="false"
                           gameBgColor="blue-grey"
                           :soundPath="getSoundPath">
        </practice-one-page>
    </v-container>
</template>

<script>
    import {soundColorsPath} from '../../config/config'
    import HeaderPage from '../../components/HeaderPage.vue'
    import PracticeOnePage from '../../components/PracticeOnePage.vue'
    import { mapState } from 'vuex'

    export default {
        name: 'Colors1',
        components: {PracticeOnePage, HeaderPage},
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
                    enDesc: "Press the green button and click on the color you heard. Correct answer: +3. Incorrect answer: -1",
                    esDesc: "Oprime el  boton verde y has click en el color que escuchaste. Respuesta correcta: +3. Respuesta Incorrecta: -1 "
                },
            };
        }
    }
</script>

