<template>
        <div>
            <v-tabs
                    v-model="active"
                    color="cyan"
                    dark
                    slider-color="yellow"
                    next-icon="mdi-arrow-right-bold-box-outline"
                    prev-icon="mdi-arrow-left-bold-box-outline"
                    show-arrows
            >
                <v-tabs-slider color="yellow"></v-tabs-slider>
                <v-tab key="0"  ripple>Learn</v-tab>
                <v-tab key="1" ripple>Identify</v-tab>
                <v-tab key="2" ripple>Dictation</v-tab>
                <v-tab key="3" ripple>Pairs</v-tab>

                <!--Learn-->
                <v-tab-item key="0">
                    <learn :words="words" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                           :soundPath="soundPath" :img="img" :imgPath="imgPath"  :fab="fab"  :textEnable="textEnable">
                    </learn>
                </v-tab-item>


                <!--Identify-->
                <v-tab-item key="1">
                    <identify :words="words" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                              :soundPath="soundPath" :img="img" :imgPath="imgPath"  :fab="fab"  :textEnable="textEnable">
                    </identify>
                </v-tab-item>

                <!--Dictation-->
                <v-tab-item key="2">
                    <dictation :words="words" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                               :soundPath="soundPath" :img="img" :imgPath="imgPath"  :fab="fab"  :textEnable="textEnable">
                    </dictation>
                </v-tab-item>

                <!--Pairs-->
                <v-tab-item key="3">
                    <pairs :words="words" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                               :soundPath="soundPath" :img="img" :imgPath="imgPath" :textEnable="textEnable">
                    </pairs>
                </v-tab-item>

            </v-tabs>

            <div class="text-xs-center mt-3">
                <v-btn @click="next">next</v-btn>
            </div>
        </div>
</template>

<script>
    import Learn from './Learn'
    import Identify from './Identify'
    import Dictation from './Dictation'
    import Pairs from './Pairs'
    export default {
        name: 'Tabs',
        components: {Learn,Identify,Dictation,Pairs},
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
                this.active = (active < 3 ? active + 1 : 0)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
