<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">



        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import {soundFamilyPath, imgFamilyPath} from '../../config/config'
    import Tabs from '../tabs/Tabs.vue'
    import {mapState} from 'vuex'

    export default {
        name: 'Family',
        components: {Tabs},
        computed: {
            ...mapState([
                'words'
            ]),
            getSoundPath: function () {
                return soundFamilyPath;
            },
            getImgPath: function () {
                return imgFamilyPath;
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
