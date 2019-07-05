<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <tabs :words="getLetters" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle" :exercises="exercises"
                        :soundPath="getSoundPath"  :fab="fab"  :textEnable="textEnable" :img="img" ></tabs>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import {soundAbcPath} from '../../../config/config'
    import Tabs from '../../../containers/tabs/Tabs.vue'
    import {mapGetters} from 'vuex'

    export default {
        name: 'Abc',
        components: {Tabs},
        mounted: function(){
          this.$store.commit("setMaxTab",4)
        },
        computed: {
            ...mapGetters([
                'getLetters'
            ]),
            getSoundPath: function () {
                return soundAbcPath;
            }
        },
        data: function () {
            return {
                fab: true,
                textEnable: true,
                img:false,
                enName: "letter",
                esName: "la letra",
                enTitle: "Alphabet",
                esTitle: "Abecedario",
                exercises: {
                    learn: {enable: true},
                    listen: {enable: true},
                    dictation: {enable: true},
                    pairs: {enable: true}
                }
            }
        }
    }
</script>
