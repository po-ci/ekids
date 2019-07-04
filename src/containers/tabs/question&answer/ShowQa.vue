<template>
    <v-layout row wrap>

        <v-flex xs12 sm12 lg12>
            <v-card>
                <!--Header-->
                <header-page :enTitle="enTitle"
                             :esTitle="esTitle"
                             :enDesc="enDesc"
                             :esDesc="esDesc">
                </header-page>
                <!--Buttons-->
                <v-card-text>

                    <v-layout v-for="(item,i) in qa" :key="i" class="pa-3 ma-2 text-xs-center">

                        <!--Ingles-->
                        <v-flex xs12 lg8 offset-lg2>

                            <v-layout class="pa-1">

                                <v-flex xs6>
                                    <v-tooltip top>
                                    <v-btn color="purple" large dark slot="activator" class="text-uppercase"> {{getQuestionEn(item)}}
                                    </v-btn>
                                        <span>{{getQuestionEs(item)}}</span>
                                    </v-tooltip>
                                </v-flex>

                                <v-flex xs6>
                                    <v-tooltip bottom>
                                        <v-btn color="green" large dark slot="activator" class="text-uppercase"> {{getAnswerEn(item)}}</v-btn>
                                        <span>{{getAnswerEs(item)}}</span>
                                    </v-tooltip>
                                </v-flex>
                            </v-layout>

                        </v-flex>


                    </v-layout>

                </v-card-text>


            </v-card>
        </v-flex>

    </v-layout>
</template>

<script>
    import MultiButtons from '../../../modules/app/components/MultiButtons.vue'
    import MultiImgs from '../../../modules/app/components/MultiImgs.vue'
    import HeaderPage from '../../../modules/app/components/HeaderPage.vue'

    export default {
        name: 'ShowQa',
        components: {MultiButtons, MultiImgs, HeaderPage},
        props: {
            enName: String,
            esName: String,
            enTitle: String,
            esTitle: String,
            qa: Array,
            headers: Object,
            exercises: Array,
            soundPath: String,
            imgPath: String,
            img: {type: Boolean, default: false},
            textEnable: {type: Boolean, default: true},
            fab: {type: Boolean, default: true}
        },
        mounted: function () {
        },
        computed: {
            enDesc: function () {
                return "Press the button to hear their pronunciation"
            },
            esDesc: function () {
                return "Oprime el boton para escuchar su pronunciación"
            },
        },
        methods: {
            getQuestionEn: function(item){
                return item.question.en+" ?"
            },
            getAnswerEn: function(item){
                return item.answer.en.replace("#",item.answer.enWord)
            },
            getQuestionEs: function(item){
                return "¿ "+item.question.es+" ?"
            },
            getAnswerEs: function(item){
                return item.answer.es.replace("#",item.answer.enWord)
            }
        }
    }
</script>
