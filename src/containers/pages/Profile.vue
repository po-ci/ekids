<template>
    <v-container fluid>

        <v-layout row wrap>


       </v-layout>
    </v-container>
</template>

<script>
    import {soundFamilyPath, imgFamilyPath} from '../../config/config'
    import FamilyImg from '../../components/FamilyImg.vue'
    import {mapState} from 'vuex'

    export default {
        name: 'Profile',
        components: {FamilyImg},
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
                enName: "profile",
                esName: "perfil",
                enTitle: "Profile",
                esTitle: "Perfil",
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
