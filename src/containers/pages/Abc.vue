<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <tabs :words="words.abc" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle" :exercises="exercises"
                        :soundPath="getSoundPath"  :fab="fab"  :textEnable="textEnable" :img="img" ></tabs>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import {soundAbcPath} from '../../config/config'
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
                    identify: {enable: true},
                    dictation: {enable: true},
                    pairs: {enable: true},
                    remember: {enable: false}
                }
            }
        }
    }
</script>
