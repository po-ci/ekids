import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    words:{
        abc: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        numbers: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],
        colors: [{text:"red",bgcolor:"red"},{text:"blue",bgcolor:"blue"},{text:"green",bgcolor:"green"},{text:"yellow",bgcolor:"yellow"},{text:"pink",bgcolor:"pink"},{text:"grey",bgcolor:"grey"},{text:"brown",bgcolor:"brown"},{text:"orange",bgcolor:"orange"},{text:"purple",bgcolor:"purple"},{text:"white",bgcolor:"white"},{text:"black",bgcolor:"black"}],
        professions: [{text:"policeman",src:"policeman.png"},{text:"fireman",src:"fireman.png"},{text:"medic",src:"medic.png"}]
    }
  },
  getters: {
    getWords: state => {
      return state.words
    }
  },
  actions: {

  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})