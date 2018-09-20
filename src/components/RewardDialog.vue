<template>
    <v-dialog
            v-model="dialog"
            width="500"
    >
        <v-card>
            <v-card-title class="headline">Reward / Recompenza</v-card-title>

            <v-card-text class="text-lg-center text-xs-center">
                <h4 class="display-1">
                    <v-tooltip bottom>
                        <v-icon  color="yellow" slot="activator" yellow x-large>star</v-icon>
                        <span>Star</span>
                    </v-tooltip>
                    +{{stars}}
                    <v-tooltip bottom>
                    <v-icon  color="red" slot="activator" blue x-large>control_point</v-icon>   <span>Points</span>
                    </v-tooltip>
                    +{{points}}</h4>

                <h4 class="display-1"> </h4>
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
