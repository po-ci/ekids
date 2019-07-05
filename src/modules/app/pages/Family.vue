<template>
    <v-container fluid>

        <v-layout row wrap>
            <v-flex lg1 offset-lg5  xs3 offset-xs3>
                <family-img :item="getFamily.grandpa" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
            </v-flex>
            <v-flex lg1 xs1>
                <family-img :item="getFamily.grandma" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
            </v-flex>

        </v-layout>
        <v-layout >
            <v-flex lg1  offset-lg4 xs3 >
                <family-img :item="getFamily.dad" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
            </v-flex>
            <v-flex lg1 xs3>
                <family-img :item="getFamily.mum" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
            </v-flex>

            <v-flex lg1 offset-lg1 xs3 >
                <family-img :item="getFamily.aunt" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
            </v-flex>
            <v-flex lg1 xs3>
                <family-img :item="getFamily.uncle" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
            </v-flex>

        </v-layout>
       <v-layout >
           <v-flex lg1 offset-lg3 xs3>
               <family-img :item="getFamily.sister" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
           </v-flex>
           <v-flex lg1 xs3>
               <family-img :item="getFamily.me" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
           </v-flex>
           <v-flex lg1 xs3>
               <family-img :item="getFamily.brother" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
           </v-flex>
           <v-flex lg1  offset-lg1 xs3 offset-xs1>
               <family-img :item="getFamily.cousin" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
           </v-flex>
           <v-flex lg1 xs3>
               <family-img :item="getFamily.baby" :img-path="getImgPath" :sound-path="getSoundPath"></family-img>
           </v-flex>

       </v-layout>
    </v-container>
</template>

<script>
    import MiximPages from './MixinPages'
    import FamilyImg from '../components/FamilyImg.vue'
    import {mapGetters} from 'vuex'

    export default {
        name: 'Family',
        components: {FamilyImg},
        mixins: [MiximPages],
        computed: {
            ...mapGetters([
                'getFamily'
            ]),
            words(){
                return this.getFamily
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
