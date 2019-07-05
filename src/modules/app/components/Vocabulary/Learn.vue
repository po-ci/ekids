<template>
    <v-layout row wrap>

        <v-flex xs12 sm12 lg12>
            <v-card>
                <!--Header-->
                <header-page :enTitle="enTitle"
                             :esTitle="esTitle"
                             :enDesc="enDesc"
                             :esDesc="esDesc">
                </header-page>
                <!--Buttons-->
                <v-card-text>
                    <v-container grid-list-lg>
                        <v-layout row wrap>
                            <v-flex xs6 sm4 md3 lg2
                                    v-for="(w,index) in this.words"
                                    :key="index"
                            >
                                <w-card
                                        :category="category"
                                        :word="w"
                                ></w-card>
                            </v-flex>
                        </v-layout>
                    </v-container>

                </v-card-text>


            </v-card>
        </v-flex>

    </v-layout>
</template>

<script>
    import HeaderPage from '../HeaderPage.vue'
    import WCard from "../WCard/WCard";

    export default {
        name: 'Learn',
        components: {WCard, HeaderPage},
        props: {
            category: String,
            enName: String,
            esName: String,
            enTitle: String,
            esTitle: String,
            words: Array,
            headers: Object,
            textEnable: {type: Boolean, default: true},
            fab: {type: Boolean, default: true}
        },
        computed: {
            enDesc() {
                return "Press the " + this.enName + " to hear their pronunciation"
            },
            esDesc() {
                return "Oprime sobre " + this.esName + " para escuchar su pronunciación"
            },
        }
    }
</script>
