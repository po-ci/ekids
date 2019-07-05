<template>
    <div class="album-card" @click="clickCard">

        <v-hover>
            <v-card style="border: 1px solid #555555;" slot-scope="{ hover }" class="mx-auto" :class="`elevation-${hover ? 12 : 2}`">
                <v-card-text class="pa-2 ma-0" :class="cardTextClass">
                    <v-img class="album-card-img pa-0" :src="getSrc" :contain="true">
                    </v-img>
                </v-card-text>

                <v-card-text class="pa-2 ma-0" :class="cardTextClass">

                    <div class="album-card-detail text-xs-center  ">
                        <v-layout row wrap fill-height class="align-center align-content-center">
                            <v-flex>
                                <span v-if="hasCard"
                                      class="album-card-detail-name font-weight-black white--text">{{card.name.toUpperCase()}}</span>
                                <br>
                                <span class="album-card-detail-number font-weight-black white--text">{{card.number}}</span>
                            </v-flex>
                        </v-layout>
                    </div>

                </v-card-text>


            </v-card>
        </v-hover>

        <v-dialog v-model="dialog"
                  width="500">
            <v-card>
                <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                >
                    {{dialogTitle}}
                </v-card-title>

                <v-card-text>
                    {{dialogText}}
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="red darken-1"
                            flat="flat"
                            @click="dialog = false"
                    >
                        Cancel
                    </v-btn>

                    <v-btn
                            color="green darken-1"
                            flat="flat"
                            @click="addCard"
                    >
                        Ok
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>
    import {imgPath} from '../../../../config/config'
    import {mapState} from 'vuex'

    export default {
        name: 'AlbumCard',
        props: {
            album: String,
            card: {type: Object, default: null},
            imgPath: String,
        },
        data: function () {
            return {
                dialog: false,
                dialogText: "",
                dialogTitle: "",
                color: "",
                colors: [
                    "cyan",
                    "red",
                    "green",
                    "light-green",
                    "lime",
                    "pink",
                    "purple",
                    "deep-purple",
                    "blue",
                    "light-blue",
                    "teal",
                    "indigo",
                    "yellow",
                    "amber",
                    "orange",
                    "deep-orange",

                ]
            }
        },
        mounted: function () {
            this.color = this.getRandomColor()
        },
        methods: {
            clickCard: function () {
                if (!this.hasCard) {
                    this.dialogText = "Do you want exchange " + this.cardStars + " stars for this card?"
                    this.dialogTitle = "Exchange card"
                    this.dialog = true
                }
            },
            addCard: function () {
                if (!this.hasCard) {
                    if (this.hasEnoughStars) {
                        this.dialog = false;
                        this.$store.commit("subtractStars", this.cardStars)
                        this.$store.commit("addUserCard", this.card.number)
                    } else {
                        //TODO "no tiene suficiente estrellas"
                        this.dialogText = "Sorry, you need more stars"
                    }

                }
            },
            getRandomColor: function () {
                let r = Math.floor(Math.random() * 16);
                return this.colors[r];
            },
        },
        computed: {
            ...mapState([
                'userCards',
                'stars'
            ]),
            cardTextClass: function () {
                if (this.hasCard) {
                    if (this.card.color) {
                        return this.card.color
                    }
                    return this.color
                }
                return "grey"
            },
            cardStars: function () {
                if (this.card.stars) {
                    return this.card.stars
                }
                return 3
            },
            hasEnoughStars() {
                if (this.stars >= this.cardStars) {
                    return true
                }
                return false
            },
            hasCard: function () {
                if (this.userCards.indexOf(String(this.card.number)) != -1) {
                    return true
                }
                return false
            },
            getSrc: function () {
                if (!this.hasCard) {
                    return imgPath + '/helper/question.png'
                }
                return imgPath + this.album + '/' + this.card.name.replace(" ", "_") + '.png'
            },
            getNameClass: function () {

            }
        }
    }
</script>

<style scope>

    .album-card-img{
        border: 1px solid #555555;
    }

    @media (min-width: 100px) {
        .album-card {
            height: 150px;
        }

        .album-card-img {
            width: 100px;
            height: 100px;
        }

        .album-card-detail {
            width: 100px;
            height: 30px;
        }

        .album-card-detail-name {
            font-size: 3vw;
        }

        .album-card-detail-number {
            font-size: 2vw;
        }

    }

    @media (min-width: 500px) {
        .album-card {
            height: 300px;
        }

        .album-card-img {
            width: 200px;
            height: 200px;
        }

        .album-card-detail {
            width: 200px;
            height: 80px;
        }

        .album-card-detail-name {
            font-size: 2.5vw;
        }

        .album-card-detail-number {
            font-size: 1.8vw;
        }

    }

    @media (min-width: 1000px) {
        .album-card {
            height: 300px;
        }

        .album-card-img {
            width: 200px;
            height: 200px;
        }

        .album-card-detail {
            width: 200px;
            height: 80px;
        }

        .album-card-detail-name {
            font-size: 2vw;
        }

        .album-card-detail-number {
            font-size: 1vw;
        }

        .album-card-hide {
            width: 200px;
            height: 280px;
        }

    }


</style>