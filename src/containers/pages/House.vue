<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <tabs :words="words.house" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                  :exercises="exercises"
                  :fab="fab" :textEnable="textEnable" :soundPath="getSoundPath" :img="img" :imgPath="getImgPath">
            </tabs>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import {soundHousePath, imgHousePath} from '../../config/config'

    import Tabs from '../tabs/Tabs.vue'
    import {mapState} from 'vuex'

    export default {
        name: 'House',
        components: {Tabs},
        computed: {
            ...mapState([
                'words'
            ]),
            getSoundPath: function () {
                return soundHousePath;
            },
            getImgPath: function () {
                return imgHousePath;
            }
        },
        mounted: function(){
            this.$store.commit("setMaxTab",6)
        },
        data: function () {
            return {
                fab: false,
                textEnable: false,
                img: true,
                enName: "the parts of House",
                esName: "las partes de la casa",
                enTitle: "The House",
                esTitle: "La casa",
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
