<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <tabs :words="words.body" :enName="enName" :esName="esName" :enTitle="enTitle" :esTitle="esTitle"
                  :exercises="exercises"
                  :fab="fab" :textEnable="textEnable" :soundPath="getSoundPath" :img="img" :imgPath="getImgPath">
            </tabs>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import {soundPath, imgPath} from '../../../config/config'
    import Tabs from '../../../containers/tabs/Tabs.vue'
    import {mapState} from 'vuex'

    export default {
        name: 'Body',
        components: {Tabs},
        computed: {
            ...mapState([
                'words'
            ]),
            getSoundPath: function () {
                return soundPath+this.enName+"/";
            },
            getImgPath: function () {
                return imgPath+this.enName+"/";
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
                enName: "body",
                esName: "el cuerpo",
                enTitle: "Body",
                esTitle: "El cuerpo",
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
