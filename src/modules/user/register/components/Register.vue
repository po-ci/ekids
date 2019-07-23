<template>
    <register-successful v-if="isAccountCreated"></register-successful>
    <register-form v-else></register-form>
</template>

<script>

    import RegisterForm from "./RegisterForm";
    import RegisterSuccessful from "./RegisterSuccessful";

    export default {
        name: "Register",
        components: {RegisterSuccessful, RegisterForm},
        data: () => ({
                isAccountCreated: false
            }
        ),

    }
</script>

<style scoped>
</style>
