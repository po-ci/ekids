<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <tabs :words="words.shapes" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                  :exercises="exercises"
                  :fab="fab" :textEnable="textEnable" :soundPath="getSoundPath" :img="img" :imgPath="getImgPath">
            </tabs>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import MiximPages from './MixinPages'
    import Tabs from '../tabs/Tabs.vue'
    import {mapState} from 'vuex'

    export default {
        name: 'Shapes',
        components: {Tabs},
        mixins: [MiximPages],
        computed: {
            ...mapState([
                'words'
            ])
        },
        mounted: function(){
            this.$store.commit("setMaxTab",6)
        },
        data: function () {
            return {
                fab: false,
                textEnable: false,
                img: true,
                enName: "shapes",
                esName: "las formas",
                enTitle: "Shapes",
                esTitle: "Formas",
                exercises: {
                    learn: {enable: true},
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
