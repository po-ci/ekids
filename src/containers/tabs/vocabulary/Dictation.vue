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
                    <v-toolbar-title>
                        <spell :word="getText(itemSelected)" v-on:spell="onSpell" :enable="!ready"></spell>
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

                <!--Excercise-->
                <!--<v-card-text>-->
                    <!--<div>-->
                        <!--<v-text-field v-model="inputText" @keyup="checkName" ref="inputText"></v-text-field>-->
                    <!--</div>-->
                <!--</v-card-text>-->

                <v-card-text>
                    <input-split :word="getItemSelectedText" v-on:match="match" :wfocus="wfocus"></input-split>
                </v-card-text>

            </v-card>
        </v-flex>
        <reward-dialog :stars="this.stars" :points="this.points" :inDialog="dialog" v-on:repeat="repeat"></reward-dialog>
    </v-layout>
</template>

<script>
    import MultiButtons from '../../../components/MultiButtons.vue'
    import Spell from '../../../components/Spell.vue'
    import HeaderPage from '../../../components/HeaderPage'
    import {soundHelpersPath} from '../../../config/config'
    import InputSplit from '../../../components/InputSplit.vue'
    import RewardDialog from '../../../components/RewardDialog.vue'
    import MixinTabs from './MixinTabs'

    export default {
        name: 'Dictation',
        components: {MultiButtons, HeaderPage, Spell, InputSplit,RewardDialog},
        mixins: [MixinTabs],
        props: {
            enName: String,
            esName: String,
            enTitle: String,
            esTitle: String,
            words: Array,
            headers: Object,
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
                inputText: "",
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
                wfocus: 0
            }
        },
        computed: {
            enDesc: function () {
                return "Press the green button and write the " + this.enName + " you heard. Correct answer: +3"
            },
            esDesc: function () {
                return "Oprime el  boton verde y escribe " + this.esName + " que escuchaste. Respuesta correcta: +3"
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
            onSpell: function () {
                this.wfocus++
            },
            removeItem: function (item) {
                this.gameList.splice(this.gameList.findIndex(obj => obj === item), 1)
                this.gameListDone.push(item)
                if (this.gameList.length == 0) {
                    this.finishGame = true;
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
            match: function (word) {
                if (this.ready == true) {
                    return
                }
                this.playYes()
                this.ready = true
                this.itemShow = word
                this.helpShow = true
                this.points = this.points + 3
                this.removeItem(this.itemSelected)

            },
            checkName: function () {
                if (this.ready == true) {
                    return
                }
                if (this.inputText && this.inputText.toLowerCase() == this.getText(this.itemSelected)) {
                    this.playYes()
                    this.ready = true
                    this.itemShow = this.inputText
                    this.helpShow = true
                    this.points = this.points + 3
                    this.removeItem(this.itemSelected)

                }
            },
            randomItem: function () {
                if(this.finishGame){
                    this.repeat()
                }

                if (this.ready == true) {
                    this.inputText = ""
                    //this.$refs.inputText.focus()
                    this.helpShow = null
                    this.itemShow = null
                    this.ready = false
                    var item = this.gameList[Math.floor(Math.random() * this.gameList.length)]
                    this.itemSelected = item
                    this.playSound(item)
                } else {
                    this.playSound(this.itemSelected);
                    this.wfocus++
                }
            },
            getText: function (item) {
                if (typeof item === "string") {
                    return item.toLowerCase()
                }
                if (item && item.text != undefined && typeof item.text === "string") {
                    return item.text.toLowerCase()
                }
                return null;
            },
            getSound: function (item) {
                return this.getText(item).replace(' ','_')
            },
            playSound: function (item) {
                var target = this.soundPath + this.getSound(item) + '.mp3';
                var audio = new Audio(target);
                audio.play()

            },
        }
    }
</script>
