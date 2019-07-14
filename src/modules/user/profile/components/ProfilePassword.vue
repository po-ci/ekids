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
                <password-form></password-form>
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
    import PasswordForm from './ProfilePasswordForm'

    export default {
        name: "ProfilePassword",
        components: {
            PasswordForm
        },
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
