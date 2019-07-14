<template>
    <v-dialog
            :value="openDialog"
            width="500"
            persistent
    >

        <v-card v-if="getChangePassword">
            <v-card-text>
                <v-alert
                        :value="true"
                        color="success"
                        icon="check_circle"
                        outline
                >
                    Su contraseña ha sido modificada con exito.

                </v-alert>

            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>


                <v-btn
                        color="success"
                        flat="flat"
                        @click="closeDialog"
                >
                    Cerrar
                </v-btn>
            </v-card-actions>
        </v-card>

        <v-card v-else>
            <v-card-title></v-card-title>
            <v-card-text>
                <v-form ref="form" autocomplete="off" v-model="valid" @submit.prevent="submit">

                    <v-text-field id="password"
                                  prepend-icon="lock"
                                  name="password"
                                  label="Nueva Contraseña"
                                  type="password"
                                  v-model="form.password"
                                  :rules="validations.password"
                                  placeholder="Nueva Contraseña"
                                  autocomplete="new-password"

                                  :error="errors.password.length?true:false"
                                  :error-messages="errors.password"


                                  required
                    ></v-text-field>

                    <v-text-field id="password_verify"
                                  prepend-icon="lock"
                                  name="password_verify"
                                  label="Repetir Nueva Contraseña"
                                  type="password"
                                  v-model="form.password_verify"
                                  :rules="validations.password"
                                  placeholder="Repetir Nueva Contraseña"
                                  autocomplete="new-password"

                                  :error="errors.password_verify.length?true:false"
                                  :error-messages="errors.password_verify"


                                  required
                    >

                    </v-text-field>


                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>


                <v-btn round
                       color="grey darken-1"
                       flat="flat"
                       @click="closeDialog"
                >
                    Cancelar
                </v-btn>

                <v-btn round
                       :loading="getUsersLoading"
                       color="primary"
                       dark
                       @click="submit">Cambiar Contraseña
                </v-btn>

            </v-card-actions>
        </v-card>

    </v-dialog>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "ProfilePassword",
        props: {
            openDialog: Boolean,
            id: String
        },
        data: () => ({
                valid: true,
                isPasswordChange: false,
                form: {
                    id: null,
                    password: null,
                    password_verify: null,
                },
                errors: {
                    password: [],
                    password_verify: []
                },
                validations: {
                    password: [
                        v => !!v || 'Contraseña es requerido',
                    ],
                }
            }
        ),
        computed: {
            ...mapGetters([
                'getMe',
                'getUsersLoading',
                'getChangePassword'
            ]),
        },
        methods: {
            ...mapActions(['passwordChange']),

            closeDialog: function () {

                this.$emit('closeDialog')
                this.isPasswordChange = false

            },

            resetValidation: function () {
                this.errors = {
                    password: [],
                    password_verify: []
                }
            },

            submit() {

                this.resetValidation()
                this.form.id = parseInt(this.id)
                this.passwordChange(this.form)
            },
        }
    }
</script>

<style scoped>

</style>
