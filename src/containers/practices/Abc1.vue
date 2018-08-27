<template>
    <v-container grid-list-md>
            <v-layout row wrap>

                <v-flex xs12>
                    <v-card >

                        <v-card-title primary-title>
                            <div>
                                <div class="headline">Practice: Alphabet</div>
                                <div class="pink--text">Practicar: Abecedario</div>
                                <p>Para comenzar, oprime el  boton verde y luego has click en la letra que escuchaste.
                                    Suma 3 puntos si la respuesta es correcta, resta 1 punto si es incorrecta. </p>
                            </div>

                        </v-card-title>
                    </v-card>

                    <v-card >

                                <v-toolbar  card >

                                    <v-toolbar-title>
                                        <v-btn fab small :color="getPlayColor" v-on:click="randomLetter()">
                                            <v-icon>{{getIcon}}</v-icon>
                                        </v-btn>
                                    </v-toolbar-title>

                                    <v-divider vertical></v-divider>
                                    <v-toolbar-title class="pr-3">
                                      <span class="blue--text">{{points}}</span>
                                    </v-toolbar-title>



                                    <v-spacer></v-spacer>

                                    <v-toolbar-title>
                                        <div v-if="helpShow">
                                         <v-icon v-if="letterShow" class="green--text" >thumb_up</v-icon>
                                            <v-icon v-if="!letterShow" class="red--text" >thumb_down</v-icon>
                                        </div>
                                    </v-toolbar-title>
                                    <v-toolbar-title class="pr-3">
                                        <span class="green--text">{{getLetter}}</span>
                                    </v-toolbar-title>

                                </v-toolbar>

                            <div class="pa-1">
                                <v-btn v-for="letter in abc" depressed small fab :color="letterBtnColor(letter)"
                                       v-on:click="checkLetter(letter)">{{letter}}
                                </v-btn>
                            </div>


                    </v-card>
                </v-flex>


            </v-layout>
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
      letterBtnColor: function (letter) {
        if (this.abcGame.find(item => item === letter)) {
          return "blue"
        }
        return "red"
      },
      removeLetter: function (letter) {
        this.abcGame.splice(this.abcGame.findIndex(item => item === letter), 1)
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
          this.points = this.points + 3;
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
        points: 10,
        helpShow: null,
      };
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
