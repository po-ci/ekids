<template>
    <v-container fluid grid-list-xs class="pa-0 ma-0">
        <v-layout row wrap align-start>
            <template v-for="(item,index) in items">
                <v-flex class="text-xs-center" shrink>

                    <img :key="'img'+index" class="pa-1 btnImg"
                         :class="getImgClass(item) "
                         :src="getSrc(item)" height="120px"
                         v-on:click="playButton(item)"
                    />
                    <br>
                    <span v-if="showName" :key="'text'+index">{{getText(item).toUpperCase()}}</span>
                </v-flex>
            </template>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'MultiImg',
        props: {
            showName: {type: Boolean, default: false},
            cssclass: String,
            items: Array,
            soundPath: String,
            imgPath: String,
            fab: {type: Boolean, default: true},
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
        },
        computed: {},
        methods: {
            playSound: function (sound) {
                var target = this.soundPath + sound.replace(' ','_') + '.mp3';
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
                if (this.img && this.gameListDone.find(obj => obj === item)) {
                    return this.gameBgColor
                }

                if (item.bgcolor != undefined) {
                    if (this.gameListDone.find(obj => obj === item)) {
                        return item.bgcolor + " imgReady"
                    }
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
    .imgReady {
        -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0)));
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    }

    .btnImg {
        cursor: pointer;
    }

</style>
