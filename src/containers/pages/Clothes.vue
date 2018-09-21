<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <tabs :words="words.clothes" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                  :exercises="exercises"
                  :fab="fab" :textEnable="textEnable" :soundPath="getSoundPath" :img="img" :imgPath="getImgPath">
            </tabs>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import {soundClothesPath, imgClothesPath} from '../../config/config'
    import Tabs from '../tabs/Tabs.vue'
    import {mapState} from 'vuex'

    export default {
        name: 'Clothes',
        components: {Tabs},
        computed: {
            ...mapState([
                'words'
            ]),
            getSoundPath: function () {
                return soundClothesPath;
            },
            getImgPath: function () {
                return imgClothesPath;
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
                enName: "clothes",
                esName: "las ropa",
                enTitle: "Clothes",
                esTitle: "Clothes",
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
