<template>


</template>

<script>
    import {mapGetters} from 'vuex'
    import RegisterSuccessful from "../components/RegisterSuccessful";

    export default {
        name: "Register",
        components: {RegisterSuccessful},
        created() {
            if (this.isAuth) {
                this.$router.push({name: "home"})
            }
        },
        computed: {
            ...mapGetters(['isAuth'])
        },
        methods: {}
    }
</script>

<style scoped>

</style>