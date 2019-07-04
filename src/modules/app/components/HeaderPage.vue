<template>
    <v-card-title primary-title>
        <v-layout row wrap>
            <v-flex xs12 sm6>
                <div class="headline">{{enTitle}}</div>
                <p>{{enDesc}}</p>
            </v-flex>

            <v-flex xs12 sm6>
                <div class="headline text-xs-right grey--text">{{esTitle}}</div>
                <p class="text-xs-right grey--text">{{esDesc}}</p>
            </v-flex>
        </v-layout>
    </v-card-title>
</template>

<script>
    export default {
        name: 'HeaderPage',
        props: {
            enTitle: String,
            esTitle: String,
            enDesc: String,
            esDesc: String
        }
    }
</script>
