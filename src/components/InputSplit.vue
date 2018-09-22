<template>
    <div>

        <v-layout>
            <input-split-letter v-for="(letter,index) in splitLetters"
                                :index="index"
                                :key="word+index"
                                :letter="letter"
                                :ref="index"
                                v-on:letterState="letterState"
                                :focus="focus"
                                :wfocus="wfocus"
            >
            </input-split-letter>
        </v-layout>
    </div>
</template>

<script>
    import InputSplitLetter from './InputSplitLetter'

    export default {
        name: 'InputSplit',
        components: {InputSplitLetter},
        props: {
            word: String,
            wfocus: Number
        },
        data: function () {
            return {
                splitLetters: [],
                inputSplit: {},
                inputWord: "",
                focus: 0
            }
        },
        watch: {
            word: function () {
                this.makeSplitLetters()
            }
        },
        computed: {},
        methods: {
            makeSplitLetters: function () {
                this.splitLetters = []

                if (this.word) {
                    this.splitLetters = this.word.split('')
                }
                this.focus = 0
            },
            letterState: function (data) {
                if (data.state) {
                    this.inputSplit[data.index] = data.letter
                    //FOCUS
                    this.focus = data.index + 1

                }
                if (this.checkWord()) {
                    this.$emit("match", this.word)
                }
            },
            checkWord: function () {
                for (var i = 0; i < this.splitLetters.length; i++) {
                    if (this.inputSplit[i] == undefined || this.inputSplit[i] != this.splitLetters[i]) {
                        return false
                    }
                }
                return true

            },
            getLetter(e) {
                if (e.key) return e.key
                let keyFromCode = String.fromCharCode(e.keyCode)
                if (keyFromCode) return keyFromCode
                return null
            }
        }

    }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }

</style>
