<template>
    <div>
        <span> <v-icon blue >control_point</v-icon> {{points}} <v-icon yellow >star</v-icon> {{stars}}</span>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'Stats',
        computed: {
            ...mapState([
                'stars','points'
            ]),
        }
    }
</script>

