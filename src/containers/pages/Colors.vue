<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <tabs :words="words.colors" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                  :exercises="exercises"
                  :fab="fab" :textEnable="textEnable" :soundPath="getSoundPath" :img="img">
            </tabs>

        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import {soundColorsPath} from '../../config/config'
    import Tabs from '../tabs/Tabs.vue'
    import {mapState} from 'vuex'

    export default {
        name: 'Abc',
        components: {Tabs},
        computed: {
            ...mapState([
                'words'
            ]),
            getSoundPath: function () {
                return soundColorsPath;
            }
        },
        mounted: function(){
            this.$store.commit("setMaxTab",6)
        },
        data: function () {
            return {
                fab: false,
                textEnable: false,
                img: false,
                enName: "color",
                esName: "el color",
                enTitle: "Colors",
                esTitle: "Colores",
                exercises: {
                    listen: {enable: true},
                    read: {enable: true},
                    dictation: {enable: true},
                    pairs: {enable: true},
                    remember: {enable: true}
                }
            }
        }
    }
</script>
