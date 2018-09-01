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
                    <div>
                        <multi-buttons :items="this.words"
                                       :fab="fab"
                                       :textEnable="textEnable"
                                       :soundPath="soundPath"
                                       :img="img" :imgPath="imgPath"
                        >

                        </multi-buttons>
                    </div>
                </v-card-text>


            </v-card>
        </v-flex>

    </v-layout>
</template>

<script>
    import MultiButtons from './../../components/MultiButtons.vue'
    import HeaderPage from './../../components/HeaderPage.vue'

    export default {
        name: 'Learn',
        components: {MultiButtons, HeaderPage},
        props: {
            enName: String,
            esName: String,
            enTitle: String,
            esTitle: String,
            words: Array,
            headers: Object,
            exercises: Array,
            soundPath: String,
            imgPath: String,
            img: {type: Boolean, default: false},
            textEnable:  {type: Boolean, default: true},
            fab: {type:Boolean,default:true}
        },
        computed:{
            enDesc: function () {
                return "Press the "+this.enName+" to hear their pronunciation"
            },
            esDesc: function () {
                return "Oprime "+this.esName+" para escuchar su pronunciación"
            },
        }
    }
</script>
