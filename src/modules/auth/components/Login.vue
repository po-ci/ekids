<template>
    <v-container fluid fill-height class="grey lighten-3">

        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Inicio de Sesión</v-toolbar-title>
                        <v-spacer></v-spacer>


                    </v-toolbar>
                    <v-card-text class="pb-0">

                        <v-alert
                                :value="getUserInvalid"
                                type="error"
                                outline

                                class="mb-3"
                        >
                            Usuario o Contraseña invalida
                        </v-alert>


                        <v-form @keyup.enter.native="loginUser">


                            <v-text-field prepend-icon="person"
                                          name="username"
                                          label="Usuario"
                                          type="text"
                                          v-model="loginA.username"
                                          placeholder="Usuario"
                            >

                            </v-text-field>

                            <v-text-field id="password"
                                          prepend-icon="lock"
                                          name="password"
                                          label="Contraseña"
                                          type="password"
                                          v-model="loginA.password"
                                          placeholder="Contraseña"
                            >

                            </v-text-field>

                        </v-form>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn round
                               :loading="getAuthLoading"
                               color="grey"
                               dark
                               @click="loginUser">
                            Iniciar Sesión
                        </v-btn>
                    </v-card-actions>

                    <v-card-text class="text-xs-left pt-0 mt-0">
                        <router-link to="recovery">Olvido su contraseña?</router-link>
                    </v-card-text>
                </v-card>

                <v-card class="elevation-12 mt-3">
                    <v-card-text class="text-xs-center">
                        Aun no tienes cuenta?
                        <router-link to="" class="font-weight-black">CREAR CUENTA</router-link>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "Login",
        data: () => {
            return {
                loginA: {
                    "username": null,
                    "password": null
                }
            }
        },
        computed: {
            ...mapGetters(['getLogin', 'getAuthLoading', 'getUserInvalid'])
        },
        methods: {
            ...mapActions(['login', 'me']),

            loginUser() {
                this.login(this.loginA)
            }
        }
    }
</script>