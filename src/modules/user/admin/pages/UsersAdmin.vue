<template>
    <v-container>
        <v-layout row wrap>

            <v-flex xs12 class="pa-3">

                <user-list></user-list>

            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
    import UserList from '../components/UserList'

    export default {
        name: "Users",
        components: {
            UserList
        }
    }
</script>

<style scoped>

</style>