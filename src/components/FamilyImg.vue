<template>

    <div class="text-xs-center">
        <img class="pa-1 btnImg"
             :src="getSrc()" height="120px"
             v-on:click="playButton()"
        />
        <br>
        <span  class="font-weight-bold">{{getText().toUpperCase()}}</span><br>
        <span >{{getTextEs().toUpperCase()}}</span>
    </div>

</template>

<script>
    export default {
        name: 'FamilyImg',
        props: {
            item: Object,
            soundPath: String,
            imgPath: String,
            soundEnable: {type: Boolean, default: true},
        },
        methods: {
            playSound: function (sound) {
                var target = this.soundPath + sound.replace(' ', '_') + '.mp3';
                var audio = new Audio(target);
                audio.play()
            },
            playButton: function () {
                if (this.soundEnable == true) {
                    this.playSound(this.getText())
                }
                this.$emit('playButton', this.item);
            },
            getText: function () {

                if (typeof this.item === "string") {
                    return this.item
                }
                if (this.item.text != undefined && typeof this.item.text === "string") {
                    return this.item.text
                }
                return "";
            },
            getTextEs: function () {
                if (typeof this.item.es === "string") {
                    return this.item.es
                }
                return "";
            },
            getSrc: function () {
                if (this.item.src != undefined) {
                    return this.imgPath + this.item.src
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
