import Vue from 'vue'
import Vuex from 'vuex'
import Vocabulary from '../modules/app/resources/vocabulary'
import Albums from '../modules/app/resources/albums'
import Questions from '../modules/app/resources/questions'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        words: Vocabulary,
        albums: Albums,
        qa: Questions,
        activeTab: 0,
        maxTab: 4,
        name: null,
        stars: null,
        points: null,
        level: null,
        userCards: [],
    },
    getters:
        {
            getWords: state => {
                return state.words
            },
            getName:
                () => {
                    return localStorage.getItem("name")
                },
            getStars:
                () => {
                    return localStorage.getItem("stars")
                },
            getPoints:
                () => {
                    return localStorage.getItem("points")
                },
            getLevel:
                () => {
                    return localStorage.getItem("level")
                },
            getUserCards:
                () => {
                    return localStorage.getItem("userCards").split(",")
                }
        }
    ,
    actions: {
        initLocalStorage: ({commit}) => {
            commit("setName", localStorage.getItem("name") ? localStorage.getItem("name") : "")
            commit("setLevel", localStorage.getItem("level") ? parseInt(localStorage.getItem("level")) : 1)
            commit("setStars", localStorage.getItem("stars") ? parseInt(localStorage.getItem("stars")) : 0)
            commit("setPoints", localStorage.getItem("points") ? parseInt(localStorage.getItem("points")) : 0)

            commit("setUserCards", localStorage.getItem("userCards") ? localStorage.getItem("userCards").split(",") : [])
        }
    }
    ,
    mutations: {
        setTab(state, tab) {
            state.activeTab = tab
        }
        ,
        nextTab(state) {
            state.activeTab = (state.activeTab < state.maxTab) ? state.activeTab + 1 : 0
        }
        ,
        setMaxTab(state, max) {
            state.maxTab = max;
        }
        ,
        addUserCard(state, cardNumber) {
            state.userCards.push(String(cardNumber));
            localStorage.setItem("userCards", state.userCards)
        }
        ,
        setUserCards(state, userCards) {
            state.userCards = userCards;
            localStorage.setItem("userCards", state.userCards)
        }
        ,
        setName(state, name) {
            state.name = name;
            localStorage.setItem("name", state.name)
        }
        ,
        setLevel(state, level) {
            state.level = level
            localStorage.setItem("level", state.level)
        }
        ,
        setStars(state, stars) {
            state.stars = (stars) ? stars : 9
            localStorage.setItem("stars", state.stars)
        }
        ,
        setPoints(state, points) {
            state.points = points
            localStorage.setItem("points", state.points)
        }
        ,
        addLevel(state) {
            state.level = parseInt(state.level) + 1
            localStorage.setItem("level", state.level)
        }
        ,
        addStars(state, stars) {
            state.stars = parseInt(state.stars) + parseInt(stars)
            localStorage.setItem("stars", state.stars)
        }
        ,
        subtractStars(state, stars) {
            state.stars = parseInt(state.stars) - parseInt(stars)
            localStorage.setItem("stars", state.stars)
        }
        ,
        addPoints(state, points) {
            state.points = parseInt(state.points) + parseInt(points)

            if (state.points >= 100) {
                state.level = parseInt(state.level) + 1
                state.points = 0
                localStorage.setItem("level", state.level)
            }

            localStorage.setItem("points", state.points)
        }
    }
})