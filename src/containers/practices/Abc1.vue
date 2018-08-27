<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout row wrap>

                <v-flex xs12 sm12 lg12>
                    <v-card>

                        <v-card-title primary-title>
                            <div>
                                <div class="headline">Practice: Alphabet</div>
                                <div class="pink--text">Practicar: Abecedario</div>
                                <p>Para comenzar, oprime el  boton verde y luego has click en la letra que escuchaste.
                                    Suma 10 puntos si la respuesta es correcta, resta 1 punto si es incorrecta. </p>
                            </div>

                        </v-card-title>


                        <v-card-text>
                            <v-layout row wrap>
                                <v-flex xs3 sm3 lg3>
                                    <v-btn fab :color="getPlayColor" v-on:click="randomLetter()">
                                        <v-icon>{{getIcon}}</v-icon>
                                    </v-btn>
                                </v-flex>

                                <v-flex xs3 sm3 lg3>
                                    <div v-if="helpShow">
                                        <h1 v-if="letterShow" class="green--text">YES</h1>
                                        <h1 v-if="!letterShow" class="red--text">No No No!</h1>
                                    </div>
                                </v-flex>
                                <v-flex xs3 sm3 lg3 align-center>
                                    <h1 class="text-xs-center">Letter: <span class="green--text">{{getLetter}}</span>
                                    </h1>
                                </v-flex>
                                <v-flex xs3 sm3 lg3>
                                    <h1 class="text-xs-center">Points: <span class="blue--text">{{points}}</span></h1>
                                </v-flex>
                            </v-layout>

                            <div>
                                <v-btn v-for="letter in abc" depressed small :color="letterBtnColor(letter)"
                                       v-on:click="checkLetter(letter)">{{letter}}
                                </v-btn>
                            </div>
                        </v-card-text>

                    </v-card>
                </v-flex>


            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
  import {soundAbcPath, soundHelpersPath} from '../../config/config'

  export default {
    name: 'Abc1',
    props: {
      msg: String
    },
    computed: {

      getIcon: function () {
        if (this.ready == true) {
          return "play_arrow"
        } else {
          return "refresh"
        }
      },
      getPlayColor: function () {
        return (this.ready == true) ? 'green' : 'yellow'
      },
      getLetter: function () {
        if (this.letterShow) {
          return this.letterShow.toUpperCase()
        }
        return "";
      }
    },
    methods: {
      letterBtnColor: function(letter){
        if(this.abcGame.find(item => item === letter)){
          return "blue"
        }
        return "red"
      },
      removeLetter: function(letter){
        this.abcGame.splice(this.abcGame.findIndex(item => item === letter),1)
      },
      checkLetter: function (letter) {
        if (this.ready == true) {
          return
        }

        if (letter == this.letterSelected) {
          var audio = new Audio(soundHelpersPath + 'yes.mp3')
          audio.play()
          this.ready = true
          this.letterShow = letter
          this.helpShow = true;
          this.points = this.points + 10;
          this.removeLetter(letter);
        } else {
          this.points--;
          this.helpShow = true;
          var audio = new Audio(soundHelpersPath + 'nonono.mp3')
          audio.play()
        }
      },
      randomLetter: function () {
        console.log(this.ready);
        if (this.ready == true) {
          this.helpShow = null;
          this.letterShow = null
          this.ready = false
          var item = this.abcGame[Math.floor(Math.random() * this.abcGame.length)]
          this.letterSelected = item

          var audio = new Audio(soundAbcPath + item + '.mp3')
          audio.play()
        } else {
          var audio = new Audio(soundAbcPath + this.letterSelected + '.mp3')
          audio.play()
        }
      }
    },
    data: function () {
      return {
        abc: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        abcGame: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        letterSelected: null,
        letterShow: "",
        ready: true,
        points: 100,
        helpShow: null,
      };
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
