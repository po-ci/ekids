<template>
    <v-container  fluid fill-height class="grey lighten-3">

        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-card-text>
                        <v-alert
                                :value="true"
                                color="success"
                                icon="check_circle"
                                outline
                        >
                            Hemos enviado un correo a <strong>{{email}}</strong> para validar y finalizar la creación de su cuenta.
                        </v-alert>

                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "RegisterSuccessful",
        props: {
            email: String
        }
    }
</script>

<style scoped>

</style>