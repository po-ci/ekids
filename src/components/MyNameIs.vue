<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row align-center>
          <v-flex xs4 sm4 lg4 align-center >

              <v-avatar align-center
                      :tile="tile"
                      :size="avatarSize"
                      color="grey lighten-4"
              >
                  <img src="/img/avatars/pikachu.png" alt="avatar">
              </v-avatar>

          </v-flex>
          <v-flex xs8 sm8 lg8 >
              <div class="text-xs-center">
              <span >My name is </span>
              <input type="text" class="text-xs-center" :class="getInputNameClass" v-model="name" />
              </div>
          </v-flex>

      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: 'MyNameIs',
  props: {
    msg: String
  },
  computed: {
    getInputNameClass: function(){
      if(!this.name){
        return "name parpadea"
      }else{
        return ""
      }
    }
  },
  data: function(){
    return {
      name:"",
      tile:false,
      avatarSize: 50
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



    .parpadea {


        animation-name: parpadeo;
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;

        -webkit-animation-name:parpadeo;
        -webkit-animation-duration: 1s;
        -webkit-animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
    }

    @-moz-keyframes parpadeo{
        0% {  background-color: greenyellow; }
        50% {  background-color: white; }
        100% {  background-color: greenyellow; }
    }

    @-webkit-keyframes parpadeo {
        0% {  background-color: greenyellow; }
        50% {  background-color: white; }
        100% {  background-color: greenyellow; }
    }

    @keyframes parpadeo {
        0% {  background-color: greenyellow; }
        50% {  background-color: white; }
        100% {  background-color: greenyellow; }
    }
</style>
