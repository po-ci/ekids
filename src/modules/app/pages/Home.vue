<template>
    <v-container fluid grid-list-md>
        <v-slide-y-transition mode="out-in">
            <v-layout row wrap fill-height>
                <v-flex xs6 sm6 md4 lg3 v-for="item in nav" v-if="item.panel != false">
                    <v-card class="purple white--text" :to="item.link">
                        <v-card-title class="justify-center">
                            <div>
                                <div class="headline">{{item.text}}</div>
                                <div class="text-xs-center">{{item.esText}}</div>
                            </div>
                        </v-card-title>
                        <v-card-title class="justify-center">

                        </v-card-title>

                        <v-card-text class="text-xs-center">
                            <v-icon class="white--text" x-large>{{item.icon}}</v-icon>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import nav from '../../../nav'

    export default {
        name: 'Home',
        props: {},
        data() {
            return {
                nav: nav,
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
