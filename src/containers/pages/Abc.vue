<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout row wrap>

                <v-flex xs12 sm12 lg12 >
                    <v-card>

                        <v-card-title primary-title>
                            <div>
                                <div class="headline">Learn: Alphabet</div>
                                <div class="pink--text">Aprender: Abecedario</div>
                                <p>Oprime las letras para escuchar su pronunciación</p>
                            </div>

                        </v-card-title>


                        <v-card-text>

                            <div>
                                <v-btn small fab depressed  v-for="letter in abc"  color="primary"
                                       v-on:click="playSound(letter)">{{letter}}
                                </v-btn>
                            </div>
                        </v-card-text>

                    </v-card>
                </v-flex>

                <v-flex xs12 sm12 lg12>
                    <v-card>


                        <v-card-text>
                            <v-btn color="blue-grey" class="white--text" to="/abc1">
                                <v-icon right round left>explore</v-icon> Practice  1
                            </v-btn>

                        </v-card-text>

                    </v-card>
                </v-flex>

            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
  import {soundAbcPath} from '../../config/config'

  export default {
    name: 'Abc',
    props: {
      msg: String
    },
    methods: {
      playSound: letter => {
        // var audio = new Audio(soundAbcPath + letter + '.mp3');
        var audio = new Audio(soundAbcPath + letter + '.mp3');
        audio.play()
      }
    },
    data: function () {
      return {
        abc: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"]

      };
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
