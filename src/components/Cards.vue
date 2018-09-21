<template>
    <div>
        <v-container fluid>
        <v-layout justify-space-around row wrap>
            <v-flex v-for="(item,index) in items" xs4 sm4 md3 lg2 >
                <card
                        :key="index"
                        :item="item"
                        :img="img"
                        :imgPath="imgPath"
                        :soundPath="soundPath"
                        :index1="index1"
                        :index2="index2"
                        :index="index"
                        :ready="ready"
                        :gameListDone="gameListDone"
                        v-on:pickCard="onPickCard"
                />
            </v-flex>
        </v-layout>
        </v-container>
    </div>
</template>

<script>
    import Card from './Card.vue'

    export default {
        name: 'Cards',
        components: {Card},
        props: {
            ready: {type: Boolean, default: false},
            cssclass: String,
            items: Array,
            soundPath: String,
            imgPath: String,
            img: {type: Boolean, default: false},
            soundEnable: {type: Boolean, default: true},
            textEnable: {type: Boolean, default: true},
            defaultBgColor: {type: String, default: "primary"},
            gameListDone: {
                type: Array, default: function () {
                    return []
                }
            },
            gameBgColor: {type: String, default: "green"},
            index1: {default: null},
            index2: {default: null},
        },
        mounted: function(){

        },
        computed: {
            showCard: function (item) {

            }
        },
        methods: {
            onPickCard: function (index,item) {
                this.$emit("pickCard", index, item)
            },
            playSound: function (sound) {
                var target = this.soundPath + sound + '.mp3';
                var audio = new Audio(target);
                audio.play()
            },
            playButton: function (item) {
                if (this.soundEnable == true) {
                    this.playSound(this.getText(item))
                }
                this.$emit('playButton', item);
            },
            getBtnText: function (item) {
                if (this.textEnable == false) {
                    return ""
                }
                return this.getText(item)
            },
            getText: function (item) {

                if (typeof item === "string") {
                    return item
                }
                if (item.text != undefined && typeof item.text === "string") {
                    return item.text
                }
                return "";
            },
            getImgClass: function (item) {
                if (this.gameListDone.find(obj => obj === item)) {
                    return "imgReady"
                }
                return ""
            },
            getBgColor: function (item) {
                if (this.gameListDone.find(obj => obj === item)) {
                    return this.gameBgColor
                }

                if (item.bgcolor != undefined) {
                    return item.bgcolor
                }
                return this.defaultBgColor
            },
            getSrc: function (item) {
                if (item.src != undefined) {
                    return this.imgPath + item.src
                }
                return ""
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .ecardHide {
        background: darkblue;
        border: aliceblue 1px solid;
    }

    .imgReady {
        -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0)));
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    }

</style>
