<template>
    <v-layout row wrap>

        <v-flex xs12 sm12 lg12>
            <v-card>
                <!--Header-->
                <header-page :enTitle="enTitle" :esTitle="esTitle" :enDesc="enDesc" :esDesc="esDesc">
                </header-page>

                <!--ToolBar-->
                <v-toolbar card>

                    <v-toolbar-title>
                        <v-btn fab small :color="getPlayColor" v-on:click="randomItem()">
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
                            <v-icon v-if="itemShow" class="green--text">thumb_up</v-icon>
                            <v-icon v-if="!itemShow" class="red--text">thumb_down</v-icon>
                            <span class="green--text"> {{getItemShow}}</span>
                        </div>
                    </v-toolbar-title>

                </v-toolbar>

                <v-card-text>
                    <h4 v-if="itemSelected" class="text-xs-center display-1">{{getItemSelectedText.toUpperCase()}}</h4>
                </v-card-text>

                <!--Excercise-->
                <v-card-text>
                    <div>
                        <multi-buttons
                                :soundEnable="false"
                                :items="this.baseList"
                                :fab="fab"
                                :soundPath="soundPath"
                                :img="img" :imgPath="imgPath"
                                :gameListDone="gameListDone"
                                :textEnable="textEnable"
                                :gameBgColor="gameBgColor"
                                v-on:playButton="playButton"
                        >
                        </multi-buttons>
                    </div>
                </v-card-text>

            </v-card>
        </v-flex>

        <reward-dialog :stars="this.stars" :points="this.points" :inDialog="dialog" v-on:repeat="repeat"></reward-dialog>
    </v-layout>
</template>

<script>
    import MultiButtons from '../../components/MultiButtons.vue'
    import HeaderPage from '../../components/HeaderPage.vue'
    import {soundHelpersPath} from '../../config/config'
    import RewardDialog from '../../components/RewardDialog.vue'
    import MixinTabs from './MixinTabs'



    export default {
        name: 'Read',
        components: {MultiButtons, HeaderPage, RewardDialog},
        mixins: [MixinTabs],
        props: {
            enName: String,
            esName: String,
            enTitle: String,
            esTitle: String,
            words: Array,
            exercises: Array,
            soundPath: String,
            //MultiButtons
            imgPath: String,
            img: {type: Boolean, default: false},
            fab: {type: Boolean, default: true},
            textEnable: {type: Boolean, default: true},
            gameBgColor: {type: String, default: "green"},
        },
        mounted: function () {
            this.baseList = Object.assign([], this.words);
            this.gameList = Object.assign([], this.words);
        },
        data: function () {
            return {
                baseList: [],
                gameList: [],
                gameListDone: [],
                itemSelected: null,
                itemShow: "",
                ready: true,
                initialPoints: 10,
                points: 10,
                stars: 1,
                helpShow: null,
                finishGame: false,
                dialog: false,
            }
        },
        computed: {
            enDesc: function () {
                return "Press the green button and click on the " + this.enName + " you read. Correct answer: +3. Incorrect answer: -1"
            },
            esDesc: function () {
                return "Oprime el  boton verde y has click en " + this.esName + " que leiste. Respuesta correcta: +3. Respuesta Incorrecta: -1 "
            },
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
            getItemShow: function () {

                if (this.itemShow && typeof this.itemShow === "string") {
                    return this.itemShow.toUpperCase()
                }
                if (this.itemShow && this.itemShow.text != undefined && typeof this.itemShow.text === "string") {
                    return this.itemShow.text.toUpperCase()
                }
                console.log(this.itemShow)
                return "";
            },
            getItemSelectedText: function () {
                if (typeof this.itemSelected === "string") {
                    return this.itemSelected.toLowerCase()
                }
                if (this.itemSelected && this.itemSelected.text != undefined && typeof this.itemSelected.text === "string") {
                    return this.itemSelected.text.toLowerCase()
                }
                return null;
            },
        },
        methods: {

            pay: function () {
                this.$store.commit("addStars", this.stars)
                this.$store.commit("addPoints", this.points)
                this.dialog = true
            },
            removeItem: function (item) {
                this.gameList.splice(this.gameList.findIndex(obj => obj === item), 1)
                this.gameListDone.push(item)
                if (this.gameList.length == 0) {
                    this.finishGame = true
                    this.pay()
                }
            },
            playYes: function () {
                var audio = new Audio(soundHelpersPath + 'yes.mp3')
                audio.play()
            },
            playNo: function () {
                var audio = new Audio(soundHelpersPath + 'nonono.mp3')
                audio.play()
            },
            playButton: function (item) {
                if (this.ready == true) {
                    return
                }

                if (item == this.itemSelected) {
                    this.playYes()
                    this.ready = true
                    this.itemShow = item
                    this.helpShow = true
                    this.points = this.points + 3
                    this.removeItem(item)

                } else {
                    this.points--
                    this.helpShow = true
                    this.playNo()
                }
            },
            randomItem: function () {
                if (this.ready == true) {
                    this.helpShow = null
                    this.itemShow = null
                    this.ready = false
                    var item = this.gameList[Math.floor(Math.random() * this.gameList.length)]
                    this.itemSelected = item

                }
            },
            getSound: function (item) {
                if (typeof item === "string") {
                    return item
                }
                if (item.text != undefined && typeof item.text === "string") {
                    return item.text
                }
                return "";
            },
            playSound: function (item) {
                var target = this.soundPath + this.getSound(item) + '.mp3';
                var audio = new Audio(target);
                audio.play()

            },
        }
    }
</script>
