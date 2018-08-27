<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout row wrap>

                <v-flex xs12 sm12 lg12>
                    <v-card class="ma-2">

                        <v-card-title primary-title>
                            <div>
                                <div class="headline">Practice: Colors</div>
                                <div class="pink--text">Practicar: Colores</div>
                                <p>Para comenzar, oprime el  boton verde y luego has click en el color que escuchaste.
                                    Suma 3 puntos si la respuesta es correcta, resta 1 punto si es incorrecta. </p>
                            </div>

                        </v-card-title>
                    </v-card>

                    <v-card class="ma-2">
               
                            <v-toolbar  card >

                                <v-toolbar-title>
                                    <v-btn fab small :color="getPlayColor" v-on:click="randomcolor()">
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
                                        <v-icon v-if="colorShow" class="green--text" >thumb_up</v-icon>
                                        <v-icon v-if="!colorShow" class="red--text" >thumb_down</v-icon>
                                    </div>
                                </v-toolbar-title>
                                <v-toolbar-title class="pr-3">
                                    <span class="green--text">{{getcolor}}</span>
                                </v-toolbar-title>

                            </v-toolbar>

                            <div class="pa-3">
                                <v-btn v-for="color in colors" depressed small :color="colorBtnColor(color)"
                                       v-on:click="checkcolor(color)">{{color}}
                                </v-btn>
                            </div>


                    </v-card>
                </v-flex>


            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import {soundColorsPath, soundHelpersPath} from '../../config/config'

    export default {
        name: 'Colors1',
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
            getcolor: function () {
                if (this.colorShow) {
                    return this.colorShow.toUpperCase()
                }
                return "";
            }
        },
        methods: {
            colorBtnColor: function (color) {
                if (this.colorsGame.find(item => item === color)) {
                    return "blue"
                }
                return "red"
            },
            removecolor: function (color) {
                this.colorsGame.splice(this.colorsGame.findIndex(item => item === color), 1)
            },
            checkcolor: function (color) {
                if (this.ready == true) {
                    return
                }

                if (color == this.colorSelected) {
                    var audio = new Audio(soundHelpersPath + 'yes.mp3')
                    audio.play()
                    this.ready = true
                    this.colorShow = color
                    this.helpShow = true;
                    this.points = this.points + 3;
                    this.removecolor(color);
                } else {
                    this.points--;
                    this.helpShow = true;
                    var audio = new Audio(soundHelpersPath + 'nonono.mp3')
                    audio.play()
                }
            },
            randomcolor: function () {
                console.log(this.ready);
                if (this.ready == true) {
                    this.helpShow = null;
                    this.colorShow = null
                    this.ready = false
                    var item = this.colorsGame[Math.floor(Math.random() * this.colorsGame.length)]
                    this.colorSelected = item

                    var audio = new Audio(soundColorsPath + item + '.mp3')
                    audio.play()
                } else {
                    var audio = new Audio(soundColorsPath + this.colorSelected + '.mp3')
                    audio.play()
                }
            }
        },
        data: function () {
            return {
                colors: ["red", "blue", "green", "yellow", "black", "white", "pink", "grey"],
                colorsGame: ["red", "blue", "green", "yellow", "black", "white", "pink", "grey"],
                colorSelected: null,
                colorShow: "",
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
