<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <div>
                    <v-btn v-for="letter in abc" depressed small color="primary" v-on:click="playSound(letter)">{{letter}}</v-btn>
                </div>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
  import {soundAbcPath} from './../config/config'

  export default {
    name: 'Abc',
    props: {
      msg: String
    },
    methods:  {
      playSound: letter => {
       // var audio = new Audio(soundAbcPath + letter + '.mp3');
        var audio = new Audio(soundAbcPath+letter+'.mp3');
        audio.play()
      }
    },
    data: function () {
      return {
        abc: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"]

      };
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
