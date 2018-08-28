<template>
    <v-layout row wrap>

        <v-flex xs12 sm12 lg12>
            <v-card>
                <!--Header-->
                <header-page :enTitle="headers.enTitle"
                             :esTitle="headers.esTitle"
                             :enDesc="headers.enDesc"
                             :esDesc="headers.esDesc">
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

                <!--Exercises Title-->
                <v-card-title>
                    <v-layout row wrap>
                        <v-flex xs6 sm6>
                            <div class="headline">Excercises</div>
                        </v-flex>
                        <v-flex xs6 sm6>
                            <div class="headline text-xs-right grey--text">Ejercicios</div>
                        </v-flex>
                    </v-layout>
                </v-card-title>
                <!--Exercises List-->
                <v-card-text>
                    <v-btn v-for="e in exercises" color="blue-grey" class="white--text" :to="e.to">
                        {{e.name}}
                        <!--<v-icon round right>explore</v-icon>-->
                    </v-btn>
                </v-card-text>

            </v-card>
        </v-flex>

    </v-layout>
</template>

<script>
    import MultiButtons from './MultiButtons.vue'
    import HeaderPage from './HeaderPage.vue'

    export default {
        name: 'LearnPage',
        components: {MultiButtons, HeaderPage},
        props: {
            words: Array,
            headers: Object,
            exercises: Array,
            soundPath: String,
            imgPath: String,
            img: {type: Boolean, default: false},
            textEnable:  {type: Boolean, default: true},
            fab: {type:Boolean,default:true}
        }
    }
</script>
