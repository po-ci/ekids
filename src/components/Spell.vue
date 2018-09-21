<template>
    <v-btn small color="orange" v-on:click="spell()" :disabled="getDisabled">
       SPELL IT
    </v-btn>
</template>

<script>
  import {mapState} from 'vuex'
  import {soundAbcPath} from '../config/config'
export default {
  name: 'Spell',
  props: {
    word: String,
    enable: {type:Boolean,default:false}
  },
  data: function(){
    return {
      wordSplit: [],
      currentKey: 0,
    }
  },
  methods: {
    spell: function(){
      this.$emit("spell",this.word);
      this.currentKey = 0;
      this.wordSplit = this.word.split("")
      this.playSound(this.wordSplit[this.currentKey]);
    },
    playNext: function (){
      this.currentKey++;
      if(this.wordSplit[this.currentKey] != undefined && this.enable == true) {
        this.playSound(this.wordSplit[this.currentKey]);
      }else{
        this.currentKey = 0
      }
    },
    playSound: function (sound) {
      var target = soundAbcPath + sound + '.mp3';
      var audio = new Audio(target);

      audio.addEventListener("ended", () => {
        audio.currentTime = 0;
        setTimeout(this.playNext,1000)
      });

      audio.play()

    },
  },
  computed: {
    ...mapState([
      'words'
    ]),
    getDisabled: function(){
      if(!this.word || (this.word && this.currentKey > 0 && this.currentKey < this.word.length) || this.enable == false ){
        return true
      }
      return false
    }
  }
}
</script>
