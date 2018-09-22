<template>

    <div class="text-xs-center">
    <img class="pa-1 btnImg"
         :src="getSrc()"
         v-on:click="playButton()"
    />
    <br>
    <span v-if="showName" :key="'text'+index">{{getText(item).toUpperCase()}}</span>
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
