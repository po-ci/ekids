<template>

    <v-container v-if="isAuth" fluid fill-height class="grey lighten-3">
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">

                    <profile-image></profile-image>


                    <v-divider></v-divider>

                    <v-card-text>
                        <v-list two-line>
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-icon color="primary">account_box</v-icon>
                                </v-list-tile-action>

                                <v-list-tile-content>
                                    <v-list-tile-sub-title class="primary--text">Nombre</v-list-tile-sub-title>
                                    <v-list-tile-title> {{getMe.firstName}}</v-list-tile-title>

                                </v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-icon color="primary">mail</v-icon>
                                </v-list-tile-action>

                                <v-list-tile-content>
                                    <v-list-tile-sub-title class="primary--text">Email</v-list-tile-sub-title>
                                    <v-list-tile-title> {{getMe.email}}</v-list-tile-title>

                                </v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-icon color="primary">phone</v-icon>
                                </v-list-tile-action>

                                <v-list-tile-content>
                                    <v-list-tile-sub-title class="primary--text">Télefono</v-list-tile-sub-title>
                                    <v-list-tile-title> {{getMe.phone}}</v-list-tile-title>

                                </v-list-tile-content>


                            </v-list-tile>
                        </v-list>

                    </v-card-text>


                    <v-card-text class="text-xs-center pt-0 pb-3">
                        <v-btn round @click="openDialog">
                            <v-icon left>lock</v-icon>
                            Cambiar Contraseña
                        </v-btn>

                    </v-card-text>
                </v-card>
            </v-flex>


        </v-layout>
        <profile-password :openDialog="dialog" :id="getMe.id" @closeDialog="dialog = false"></profile-password>
    </v-container>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import ProfileImage from './../components/ProfileImage'
    import ProfilePassword from './../components/ProfilePassword'

    export default {
        name: "Profile",
        components: {ProfileImage, ProfilePassword},
        data: () => {
            return {
                dialog: false
            }
        },
        computed: {
            ...mapGetters([
                'getMe',
                'isAuth',
                'getAuthLoading'
            ]),
        },
        methods: {
            ...mapActions([]),
            openDialog() {
                this.$store.commit('SET_CHANGE_PASSWORD', false)
                this.dialog = true
            }
        }
    }
</script>

<style scoped>

</style>