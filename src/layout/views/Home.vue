<template>
    <div>

    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "home",
        mounted: function () {
        },
        computed: {
            ...mapGetters(['getMe'])
        },
        methods: {
            ...mapActions(['me', 'logout'])
        }
    }
</script>

<style scoped>

</style>