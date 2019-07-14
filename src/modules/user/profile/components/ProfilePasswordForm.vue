<template>
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
</template>

<script>
    export default {
        name: "ProfilePasswordForm"
    }
</script>

<style scoped>

</style>