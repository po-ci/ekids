<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <learn-page :words="words.colors" :fab="false" :headers="headers"
                        :exercises="exercises" :textEnable="false" :soundPath="getSoundPath">
            </learn-page>

        </v-slide-y-transition>
    </v-container>
</template>

<script>
  import {soundColorsPath} from '../../config/config'
  import LearnPage from '../../components/LearnPage.vue'
  import {mapState} from 'vuex'

  export default {
    name: 'Abc',
    components: {LearnPage},
    computed: {
      ...mapState([
        'words'
      ]),
      getSoundPath: function () {
        return soundColorsPath;
      }
    },
    data: function () {
      return {
        headers: {
          enTitle: "Colors",
          esTitle: "Colores",
          enDesc: "Press the colors to hear their pronunciation",
          esDesc: "Oprime los colores para escuchar su pronunciación"
        },
        exercises: [
          {name: "1. Listen and identify | Escucha e Identifica", to: "/colors1"},
          {name: "2. Listen and write | Escucha y escribe", to: "/colors2"}
        ]
      }
    }
  }
</script>
