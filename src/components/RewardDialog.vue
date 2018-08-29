<template>
    <v-dialog
            v-model="dialog"
            width="500"
    >
        <v-card>
            <v-card-title class="headline">Reward / Recompenza</v-card-title>

            <v-card-text>
                <h4 ><v-icon yellow x-large>star</v-icon> {{stars}}</h4><br>
                <h4 ><v-icon blue x-large>control_point</v-icon> {{points}}</h4>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                        color="green darken-1"
                        flat="flat"
                        @click="repeat"
                >
                    Repeat
                </v-btn>

                <v-btn
                        color="green darken-1"
                        flat="flat"
                        @click="goHome"
                >
                    HOME
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: 'RewardDialog',
        props: {
            stars: Number,
            points: Number,
            inDialog: {type: Boolean, default: false}
        },
        watch: {
            inDialog: function () {
                this.dialog = this.inDialog
            }
        },
        data() {
            return {
                dialog: false
            }
        },
        methods: {
            repeat: function () {
                this.dialog = close
                this.$emit("repeat")
            },
            goHome: function () {
                this.dialog = close
                this.$router.push({ name: 'home'})
            }
        }
    }
</script>
