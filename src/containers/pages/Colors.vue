<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout row wrap >
                <v-flex xs12 sm12 lg12 >
                    <v-card>

                        <v-card-title primary-title>
                            <div>
                                <div class="headline">Colors</div>
                                <div class="pink--text">Colores</div>
                                <p>Oprime las colores para escuchar su pronunciación</p>
                            </div>

                        </v-card-title>


                        <v-card-text>

                            <div>
                                <v-btn v-for="color in colors"  small :color="color" class="background:color" v-on:click="playSound(color)"></v-btn>
                            </div>
                        </v-card-text>

                    </v-card>
                </v-flex>

                <v-flex xs12 sm12 lg12>
                    <v-card>

                        <v-card-text  >
                            <h3 class="diplay-3 text-xs-center"  align-center >{{getSelectedColor}}</h3>
                        </v-card-text>

                    </v-card>
                </v-flex>

            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
  import {soundColorsPath} from '../../config/config'

  export default {
    name: 'Colors',
    props: {
      msg: String
    },
    computed: {
      getSelectedColor: function(){
        if(this.selectedColor){
          return this.selectedColor.toUpperCase()
        }
        return ""
      }
    },
    methods:  {
      playSound: function (color){
        this.selectedColor = color;
        var audio = new Audio(soundColorsPath+color+'.mp3');
        audio.play()
      }
    },
    data: function () {
      return {
        colors: ["red","blue","green","yellow","black","white","pink","grey"],
        selectedColor: null,
      };
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
