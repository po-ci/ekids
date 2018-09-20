<template>
    <v-layout justify-space-between>

        <v-flex xs2>
            <v-progress-circular
                    :rotate="360"
                    :size="30"
                    :width="5"
                    :value="points"
                    color="teal"
            >
                {{ points }}
            </v-progress-circular>
        </v-flex>
        <v-flex xs3 class="pt-1">
            <span class="caption">Level: {{level}}</span>
        </v-flex>
        <v-flex xs2>
            <span class="text-lg-right"><v-icon color="yellow">star</v-icon> {{stars}}</span>
        </v-flex>

    </v-layout>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'Stats',
        computed: {
            ...mapState([
                'stars', 'points', 'level'
            ]),

        }
    }
</script>

