<template>
    <v-container grid-list-md>
        <practice-one-page :words="words.numbers"
                           :headers="headers"
                           :soundPath="getSoundPath">
        </practice-one-page>
    </v-container>
</template>

<script>
    import {soundNumbersPath} from '../../config/config'
    import HeaderPage from '../../components/HeaderPage.vue'
    import PracticeOnePage from '../../components/PracticeOnePage.vue'
    import { mapState } from 'vuex'

    export default {
        name: 'Numbers1',
        components: {PracticeOnePage, HeaderPage},
        props: {
            msg: String
        },
        computed: {
            ...mapState([
                'words'
            ]),
            getSoundPath: function () {
                return soundNumbersPath;
            },

        },
        methods: {},
        data: function () {
            return {
                headers: {
                    enTitle: "Numbers",
                    esTitle: "Numeros",
                    enDesc: "Press the green button and click on the number you heard. Correct answer: +3. Incorrect answer: -1",
                    esDesc: "Oprime el  boton verde y has click en el numero que escuchaste. Respuesta correcta: +3. Respuesta Incorrecta: -1 "
                },
            };
        }
    }
</script>

