<template>
        <div style="position: relative">
            <v-tabs
                    v-model="active"
                    color="cyan"
                    dark
                    slider-color="yellow"
                    :show-arrows="true"
            >
                <v-tabs-slider color="yellow"></v-tabs-slider>
                <v-tab key="0"  ripple>Learn</v-tab>
                <v-tab key="1" ripple  v-if="exercises.identify.enable">Identify</v-tab>
                <v-tab key="2" ripple  v-if="exercises.dictation.enable">Dictation</v-tab>
                <v-tab key="3" ripple  v-if="exercises.pairs.enable">Memotest</v-tab>
                <v-tab key="4" ripple  v-if="exercises.remember.enable">Remember</v-tab>

                <!--Learn-->
                <v-tab-item key="0">
                    <learn :words="words" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                           :soundPath="soundPath" :img="img" :imgPath="imgPath"  :fab="fab"  :textEnable="textEnable">
                    </learn>
                </v-tab-item>


                <!--Identify-->
                <v-tab-item key="1"  v-if="exercises.identify.enable">
                    <identify :words="words" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                              :soundPath="soundPath" :img="img" :imgPath="imgPath"  :fab="fab"  :textEnable="textEnable">
                    </identify>
                </v-tab-item>

                <!--Dictation-->
                <v-tab-item key="2"  v-if="exercises.dictation.enable">
                    <dictation :words="words" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                               :soundPath="soundPath" :img="img" :imgPath="imgPath"  :fab="fab"  :textEnable="textEnable">
                    </dictation>
                </v-tab-item>

                <!--Pairs-->
                <v-tab-item key="3"  v-if="exercises.pairs.enable">
                    <pairs :words="words" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                               :soundPath="soundPath" :img="img" :imgPath="imgPath" :textEnable="textEnable">
                    </pairs>
                </v-tab-item>

                <!--Remember-->
                <v-tab-item key="4"  v-if="exercises.remember.enable">
                    <Remember :words="words" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                               :soundPath="soundPath" :img="img" :imgPath="imgPath"  :fab="fab"  :textEnable="textEnable">
                    </Remember>
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
    import Identify from './Identify'
    import Dictation from './Dictation'
    import Pairs from './Pairs'
    import Remember from './Remember.vue'
    export default {
        name: 'Tabs',
        components: {Learn,Identify,Dictation,Pairs,Remember},
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
        data() {
            return {
                active: 0,
            }
        },
        methods: {
            next() {
                const active = parseInt(this.active)
                this.active = (active < 4 ? active + 1 : 0)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
