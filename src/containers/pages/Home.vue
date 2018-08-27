<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout row align-center fill-height>
                <v-flex xs12 sm12 lg12 >
                    <v-card>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">Ingles  para chicos</h3>
                                <div>Proyecto iniciado...</div>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
  export default {
    name: 'Home',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
