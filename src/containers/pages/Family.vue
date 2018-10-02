<template>
    <v-container fluid>

        <v-layout row wrap>
            <v-flex lg1 offset-lg5  xs3 offset-xs3>
                <family-img :item="words.family.grandpa" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
            </v-flex>
            <v-flex lg1 xs1>
                <family-img :item="words.family.grandma" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
            </v-flex>

        </v-layout>
        <v-layout >
            <v-flex lg1  offset-lg4 xs3 >
                <family-img :item="words.family.dad" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
            </v-flex>
            <v-flex lg1 xs3>
                <family-img :item="words.family.mum" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
            </v-flex>

            <v-flex lg1 offset-lg1 xs3 >
                <family-img :item="words.family.aunt" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
            </v-flex>
            <v-flex lg1 xs3>
                <family-img :item="words.family.uncle" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
            </v-flex>

        </v-layout>
       <v-layout >
           <v-flex lg1 offset-lg3 xs3>
               <family-img :item="words.family.sister" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
           </v-flex>
           <v-flex lg1 xs3>
               <family-img :item="words.family.me" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
           </v-flex>
           <v-flex lg1 xs3>
               <family-img :item="words.family.brother" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
           </v-flex>
           <v-flex lg1  offset-lg1 xs3 offset-xs1>
               <family-img :item="words.family.cousin" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
           </v-flex>
           <v-flex lg1 xs3>
               <family-img :item="words.family.baby" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
           </v-flex>

       </v-layout>
    </v-container>
</template>

<script>
    import {soundFamilyPath, imgFamilyPath} from '../../config/config'
    import FamilyImg from '../../components/FamilyImg.vue'
    import {mapState} from 'vuex'

    export default {
        name: 'Family',
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
                enName: "family",
                esName: "la familia",
                enTitle: "Family",
                esTitle: "Familia",
                exercises: {
                    listen: {enable: false},
                    read: {enable: false},
                    dictation: {enable: false},
                    pairs: {enable: false},
                    remember: {enable: false}
                }
            }
        }
    }
</script>
