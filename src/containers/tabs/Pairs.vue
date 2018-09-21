<template>
    <v-layout row wrap>

        <v-flex xs12 sm12 lg12>
            <v-card>
                <!--Header-->
                <header-page :enTitle="enTitle" :esTitle="esTitle" :enDesc="enDesc" :esDesc="esDesc">
                </header-page>

                <!--ToolBar-->
                <v-toolbar card>

                    <v-toolbar-title class="pr-3">
                        <span class="blue--text">{{points}}</span>
                    </v-toolbar-title>

                </v-toolbar>


                <!--Excercise-->
                <v-card-text>

                        <cards
                                :soundEnable="false"
                                :items="gameList"
                                :soundPath="soundPath"
                                :img="img" :imgPath="imgPath"
                                :gameListDone="gameListDone"
                                :textEnable="textEnable"
                                :gameBgColor="gameBgColor"
                                :index1="index1"
                                :index2="index2"
                                :ready="ready"
                                v-on:pickCard="onPickCard"
                        >
                        </cards>

                </v-card-text>

                <v-card-text>
                    <h4 v-if="itemShow" class="text-xs-center display-1">{{getItemShow}}</h4>
                </v-card-text>


            </v-card>
        </v-flex>

        <reward-dialog :stars="this.stars" :points="this.points" :inDialog="dialog" v-on:repeat="repeat"></reward-dialog>
    </v-layout>
</template>

<script>
    import Cards from '../../components/Cards.vue'
    import HeaderPage from '../../components/HeaderPage.vue'
    import {soundHelpersPath} from '../../config/config'
    import RewardDialog from '../../components/RewardDialog.vue'
    import shuffle from './../../helpers/shuffle'

    export default {
        name: 'Pairs',
        components: {HeaderPage, RewardDialog, Cards},
        props: {
            enName: String,
            esName: String,
            enTitle: String,
            esTitle: String,
            words: Array,
            soundPath: String,
            //Cards
            imgPath: String,
            img: {type: Boolean, default: false},
            fab: {type: Boolean, default: true},
            textEnable: {type: Boolean, default: true},
            gameBgColor: {type: String, default: "green"},
            limit: {type: Number, default: 6}
        },
        mounted: function () {
            this.baseList = Object.assign([], this.words);

            var a = shuffle(this.baseList)
            var b = [];
            for (var i = 0; i < this.getLimit; i++) {
                b.push(a[i]);
                b.push(a[i]);
            }

            this.gameList = shuffle(b)
        },
        data: function () {
            return {
                baseList: [],
                gameList: [],
                gameListDone: [],
                itemSelected: null,
                itemShow: " ",
                ready: true,
                initialPoints: 10,
                points: 10,
                stars: 1,
                helpShow: null,
                finishGame: false,
                dialog: false,
                index1: null,
                index2: null,
                item1: null,
                item2: null
            }
        },
        computed: {
            getLimit: function () {
                if (this.limit < this.words.length) {
                    return this.limit
                }
                return this.words.length
            },
            enDesc: function () {
                return "Find Pairs "
            },
            esDesc: function () {
                return "Encuentra los pares"
            },
            getItemShow: function () {

                if (this.itemShow && typeof this.itemShow === "string") {
                    return this.itemShow.toUpperCase()
                }
                if (this.itemShow && this.itemShow.text != undefined && typeof this.itemShow.text === "string") {
                    return this.itemShow.text.toUpperCase()
                }
                return "";
            }
        },
        methods: {
            repeat: function(){
                this.gameListDone = []
                this.points = this.initialPoints
                this.finishGame = false
                this.dialog = false
                this.itemSelected = null
                this.index1= null
                this.index2 = null


                var a = shuffle(this.baseList)
                var b = [];
                for (var i = 0; i < this.getLimit; i++) {
                    b.push(a[i]);
                    b.push(a[i]);
                }

                this.gameList = shuffle(b)
                this.ready=true
            },
            pay: function () {
                this.$store.commit("addStars", this.stars)
                this.$store.commit("addPoints", this.points)
                this.dialog = true
            },
            onPickCard: function (index, item) {
                this.itemShow = this.getText(item)
                if (this.index1 === null) {
                    this.index1 = index
                    this.item1 = item
                } else if (this.index2 === null) {
                    this.index2 = index
                    this.item2 = item
                    this.ready = false
                }


                if (this.index1 != null && this.index2 != null) {
                    if (this.item1 === this.item2) {
                        this.playYes()
                        this.gameListDone.push(this.item1)
                        this.points = this.points +3


                        if (this.gameList.length == (this.gameListDone.length * 2)) {
                            this.finishGame = true
                            this.pay()
                        }else {
                            this.nextCards()
                        }
                    } else {
                        this.playNo()
                        setTimeout(this.nextCards, 1000)
                    }

                }

            },
            nextCards: function () {
                this.itemShow = "-"
                this.item1 = null
                this.item2 = null
                this.index1 = null
                this.index2 = null
                this.ready = true
            },
            removeItem: function (item) {
                this.gameList.splice(this.gameList.findIndex(obj => obj === item), 1)
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
            getText: function (item) {

                if (typeof item === "string") {
                    return item
                }
                if (item.text != undefined && typeof item.text === "string") {
                    return item.text
                }
                return "";
            },
        }
    }
</script>
