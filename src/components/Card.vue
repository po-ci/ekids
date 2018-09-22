<template>
    <div v-if="!getShowCard && item" class="gameCard" :class="getGameCardClass" v-on:click="pickCard"></div>


    <v-img v-else-if="img && item" class="pa-0" :class="getImgClass" :src="getSrc" :contain="true" max-height="100px">
    </v-img>


    <div v-else-if="item"  class="gameCard text-xs-center" :class="getBgColor">

    </div>

    <div v-else>

    </div>

</template>

<script>


    export default {
        name: 'Card',
        props: {
            ready: {type: Boolean, default: false},
            index: {type: Number, default: null},
            item: {default: null},
            showCard: {type: Boolean, default: false},
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
        data: function () {
            return {}
        },
        computed: {
            getGameCardClass: function () {
                return (this.getShowCard) ? "" : "gameCardHide"
            },
            getShowCard: function () {
                if (this.index === this.index1 || this.index === this.index2) {
                    return true
                }

                if (this.istItemDone) {
                    return true
                }

                return false
            },
            istItemDone: function(){
                if (this.gameListDone.find(obj => obj === this.item)) {
                    return true
                }
                return false
            },
            getBgColor: function () {
                if (this.img && this.gameListDone.find(obj => obj === this.item)) {
                    return "imgReady"
                }
                if (this.item && this.item.bgcolor != undefined) {
                    if (this.gameListDone.find(obj => obj === this.item)) {
                        return "imgReady "+this.item.bgcolor
                    }
                    return this.item.bgcolor
                }
                return this.defaultBgColor
            },
            getSrc: function () {
                var src = ""
                if (this.item.src != undefined) {
                    src = this.imgPath + this.item.src
                }
                return src
            },
            getBtnText: function () {
                if (this.textEnable == false) {
                    return ""
                }
                return this.getText
            },
            getText: function () {
                if (this.item && typeof this.item === "string") {
                    return this.item
                }
                if (this.item && this.item.text != undefined && typeof this.item.text === "string") {
                    return this.item.text
                }
                return "";
            },
            getImgClass: function () {
                if (this.istItemDone) {
                    return "imgReady"
                }
                return ""
            },
        },
        methods: {
            playSound: function () {
                var target = this.soundPath + this.getText.replace(' ','_') + '.mp3';
                var audio = new Audio(target);
                audio.play()
            },
            pickCard: function () {
                if (this.ready) {
                    if (this.soundEnable == true) {
                        this.playSound()
                    }
                    this.$emit('pickCard', this.index, this.item);
                }
            },

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .gameCard {
        height: 100px;
        border: black 1px solid;
    }

    .gameCardHide {
        background: darkblue;
        border: aliceblue 1px solid;
        background:
                linear-gradient(135deg, #1a237e 22px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),
                linear-gradient(225deg, #1a237e 22px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 64px;
        background-color:#1a237e;
        background-size: 64px 128px
    }

    .imgReady {
        -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0)));
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    }

</style>
