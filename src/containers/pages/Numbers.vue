<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <tabs :words="words.numbers"  :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle" :exercises="exercises"
                  :fab="fab"  :textEnable="textEnable" :soundPath="getSoundPath" :img="img" >
            </tabs>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import {soundNumbersPath} from '../../config/config'
    import Tabs from '../tabs/Tabs.vue'
    import { mapState } from 'vuex'

    export default {
        name: 'Numbers',
        components: {Tabs},
        computed: {
            ...mapState([
               'words'
            ]),
            getSoundPath: function(){
                return soundNumbersPath;
            }
        },
        mounted: function(){
            this.$store.commit("setMaxTab",4)
        },
        data: function(){
            return {
                fab: true,
                textEnable: true,
                img: false,
                enName: "number",
                esName: "el numero",
                enTitle: "Numbers",
                esTitle: "Numeros",
                exercises: {
                    listen: {enable: true},
                    dictation: {enable: true},
                    pairs: {enable: true},
                }
            }
        }
    }
</script>
