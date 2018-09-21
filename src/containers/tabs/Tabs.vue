<template>
        <div style="position: relative">
            <v-tabs
                    v-model="active"
                    color="indigo"
                    dark
                    slider-color="yellow"
                    :show-arrows="true"
            >
                <v-tabs-slider color="yellow"></v-tabs-slider>
                <v-tab key="0"  ripple>Learn</v-tab>
                <v-tab key="1" ripple  v-if="exercises.listen && exercises.listen.enable">Listen</v-tab>
                <v-tab key="2" ripple  v-if="exercises.read && exercises.read.enable">Read</v-tab>

                <v-tab key="3" ripple  v-if="exercises.dictation && exercises.dictation.enable">Dictation</v-tab>

                <v-tab key="4" ripple  v-if="exercises.remember && exercises.remember.enable">Remember</v-tab>
                <v-tab key="5" ripple  v-if="exercises.pairs && exercises.pairs.enable">Memotest</v-tab>

                <!--Learn-->
                <v-tab-item key="0">
                    <learn :words="words" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                           :soundPath="soundPath" :img="img" :imgPath="imgPath"  :fab="fab"  :textEnable="textEnable">
                    </learn>
                </v-tab-item>


                <!--Listen-->
                <v-tab-item key="1"  v-if="exercises.listen && exercises.listen.enable">
                    <listen :words="words" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                              :soundPath="soundPath" :img="img" :imgPath="imgPath"  :fab="fab"  :textEnable="textEnable">
                    </listen>
                </v-tab-item>

                <!--Read-->
                <v-tab-item key="2"  v-if="exercises.read && exercises.read.enable">
                    <read :words="words" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                            :soundPath="soundPath" :img="img" :imgPath="imgPath"  :fab="fab"  :textEnable="textEnable">
                    </read>
                </v-tab-item>

                <!--Dictation-->
                <v-tab-item key="3"  v-if="exercises.dictation && exercises.dictation.enable">
                    <dictation :words="words" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                               :soundPath="soundPath" :img="img" :imgPath="imgPath"  :fab="fab"  :textEnable="textEnable">
                    </dictation>
                </v-tab-item>


                <!--Remember-->
                <v-tab-item key="4"  v-if="exercises.remember && exercises.remember.enable">
                    <Remember :words="words" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                               :soundPath="soundPath" :img="img" :imgPath="imgPath"  :fab="fab"  :textEnable="textEnable">
                    </Remember>
                </v-tab-item>

                <!--Memotest-->
                <v-tab-item key="5"  v-if="exercises.pairs && exercises.pairs.enable">
                    <pairs :words="words" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                           :soundPath="soundPath" :img="img" :imgPath="imgPath" :textEnable="textEnable">
                    </pairs>
                </v-tab-item>



            </v-tabs>

                <!--<v-btn-->
                        <!--dark-->
                        <!--fab-->
                        <!--top-->
                        <!--right-->
                        <!--color="pink"-->
                        <!--class="v-btn&#45;&#45;absolute"-->
                        <!--style=" top: -4px; right: -10px"-->
                        <!--@click="next"-->
                    <!--<v-icon>navigate_next</v-icon>-->
                <!--</v-btn>-->

        </div>
</template>

<script>
    import Learn from './Learn'
    import Listen from './Listen'
    import Read from './Read'
    import Dictation from './Dictation'
    import Pairs from './Pairs'
    import Remember from './Remember.vue'
    import {mapState} from 'vuex'

    export default {
        name: 'Tabs',
        components: {Learn,Listen,Read,Dictation,Pairs,Remember},
        props: {
            words: Array,
            learnHeaders: Object,
            enName: String,
            esName: String,
            enTitle: String,
            esTitle: String,
            exercises: Object,
            soundPath: String,
            imgPath: String,
            img: {type: Boolean, default: false},
            textEnable: {type: Boolean, default: true},
            fab: {type: Boolean, default: true}
        },
        watch: {
          activeTab: function(){
              this.active = this.activeTab
          }
        },
        data() {
            return {
                active: 0,
            }
        },
        computed: {
            ...mapState([
                'activeTab'
            ]),
        },
        methods: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
