<template>
    <v-card @click="play" class="pointer">

        <v-responsive>
            <v-img :src="getImg"/>
        </v-responsive>
        <v-card-text class="text-xs-center">
            <h3 class="text-capitalize">{{word.en}}</h3>
            <h4 class="subheading">{{word.es}}</h4>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "WCard",
        props: {
            category: {type: String},
            word: {type: Object},
        },
        methods: {
            play(){
                var audio = new Audio(this.getSnd);
                audio.play()
            }
        },
        computed: {
            getImg() {
                return this.imgPath + this.word.img
            },
            getSnd() {
                return this.soundPath + this.word.en.replace(' ', '_')+ '.mp3';
            },
            soundPath() {
                return "/sounds/" + this.category + "/"
            },
            imgPath() {
                return "/img/" + this.category + "/"
            }
        }
    }
</script>

<style scoped>
    .pointer{
        cursor: pointer;
    }
</style>