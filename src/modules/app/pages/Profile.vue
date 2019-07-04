<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <tabs
                    :qa="qa.profile"
                    :enName="enName"
                    :esName="esName"
                    :enTitle="enTitle"
                    :esTitle="esTitle"
                    :exercises="exercises"
                    :soundPath="getSoundPath"
                    :fab="fab"
                    :textEnable="textEnable"
                    :img="img">

            </tabs>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import {soundPath, imgPath} from '../../../config/config'
    import Tabs from '../../../containers/tabs/Tabs.vue'
    import {mapState} from 'vuex'

    export default {
        name: 'Profile',
        components: {Tabs},
        computed: {
            ...mapState([
                'qa'
            ]),
            getSoundPath: function () {
                return soundPath+this.enName+"/";
            },
            getImgPath: function () {
                return imgPath+this.enName+"/";
            }
        },
        mounted: function () {
            this.$store.commit("setMaxTab", 1)
        },
        data: function () {
            return {
                fab: false,
                textEnable: false,
                img: false,
                enName: "profile",
                esName: "perfil",
                enTitle: "Profile",
                esTitle: "Perfil",
                exercises: {
                    showQa: {enable: true},
                }
            }
        }
    }
</script>
