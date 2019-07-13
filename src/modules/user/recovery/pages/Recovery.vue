<template>


    <v-container v-if="status" fluid fill-height class="grey lighten-3">

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
                            {{message}}
                        </v-alert>

                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>

    <v-container v-else fluid fill-height class="grey lighten-3">

        <v-alert v-if="status === false">
            {{message}}
        </v-alert>

        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <recovery-form/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

    import {mapActions, mapState} from 'vuex'
    import RecoveryForm from '../components/RecoveryForm'

    export default {
        name: "Recovery",
        components: {RecoveryForm},
        data: () => ({
                recoverySuccess: false,
                recoveryMessage: '',
            }
        ),
        computed: {
            ...mapState({
                status: state => state.UserRecoveryStore.recoveryStatus,
                message: state => state.UserRecoveryStore.recoveryMessage
            })
        },
        methods: {
          ...mapActions(['resetRecovery'])
        },
        destroyed() {
            this.resetRecovery()
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>