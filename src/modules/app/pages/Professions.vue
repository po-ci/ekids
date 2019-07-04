<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <tabs :words="words.professions" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                  :exercises="exercises"
                  :fab="fab" :textEnable="textEnable" :soundPath="getSoundPath" :img="img" :imgPath="getImgPath">
            </tabs>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import MiximPages from './MixinPages'
    import Tabs from '../../../containers/tabs/Tabs.vue'
    import {mapState} from 'vuex'

    export default {
        name: 'Professions',
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
                enName: "professions",
                esName: "las profesiones",
                enTitle: "Professions",
                esTitle: "Profesiones",
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
