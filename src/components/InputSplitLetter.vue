<template>

    <v-flex align-center align-content-center justify-center pa-1>
        <v-text-field
                @keyup="checkLetter"
                @keydown="blank"
                :success="success"
                :error="error"
                ref="i"
                maxlength="1"
                v-model="inputLetter"
                :full-width="false"
                class="splitLetter title" :class="getClass"
                :autofocus="getFocus"
                :disabled="success"
        >
        </v-text-field>
    </v-flex>
</template>

<script>
    export default {
        name: 'InputSplitLetter',
        props: {
            letter: String,
            index: Number,
            focus: Number
        },
        data: function () {
            return {
                inputLetter: "",
                lastLetter: "",
                success: false,
                error: false,
            }
        },
        watch: {
            focus: function () {
                if ((this.focus == this.index)) {
                    this.$refs.i.focus()
                }
            }
        },
        computed: {
            getFocus: function () {
                return (this.focus == this.index) ? true : false
            },
            getClass: function(){
                if(this.success){
                    return "splitLetterSuccess"
                }else if(this.error){
                    return "splitLetterError"
                }
                return ""
            }
        },
        methods: {
            blank: function (event) {
                console.log("blank");
                this.inputLetter = this.getLetter(event)
            },
            checkLetter: function (event) {
                if (this.getLetter(event).length > 1) {
                    this.inputLetter = ""
                }

                if (this.inputLetter.toUpperCase() == this.letter.toUpperCase()) {
                    this.success = true
                    this.error = false
                    this.$emit("letterState", {state: true, letter: this.letter, index: this.index})
                } else {
                    this.success = false
                    this.error = true
                    this.$emit("letterState", {state: false, letter: this.letter, index: this.index})
                    this.lastLetter = this.inputLetter
                }
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

<style>
    .splitLetter input[type=text] {
        text-align: center !important;
        text-transform: uppercase;
    }

    .splitLetterSuccess  input[type=text]{
        color: darkgreen !important;
    }

    .splitLetterError  input[type=text]{
        color: darkred !important;
    }

</style>
