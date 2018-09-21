import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        activeTab: 0,
        maxTab: 4,
        name: null,
        stars: null,
        points: null,
        level: null,
        words: {
            abc: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
            numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
            colors: [
                {text: "red", bgcolor: "red"},
                {text: "blue", bgcolor: "blue"},
                {text: "green", bgcolor: "green"},
                {text: "yellow", bgcolor: "yellow"},
                {text: "pink", bgcolor: "pink"},
                {text: "grey", bgcolor: "grey"},
                {text: "brown", bgcolor: "brown"},
                {text: "orange", bgcolor: "orange"},
                {text: "purple", bgcolor: "purple"},
                {text: "white", bgcolor: "white"},
                {text: "black", bgcolor: "black"}
            ],
            professions: [
                {text: "policeman", src: "policeman.png"},
                {text: "fireman", src: "fireman.png"},
                {text: "medic", src: "medic.png"},
                {text: "farmer", src: "farmer.png"},
                {text: "journalist", src: "journalist.png"},
                {text: "student", src: "student.png"},
                {text: "artist", src: "artist.png"}
            ],
            shapes: [
                {text: "square", src: "square.png"},
                {text: "triangle", src: "triangle.png"},
                {text: "circle", src: "circle.png"},
                {text: "rectangle", src: "rectangle.png"},
                {text: "diamond", src: "diamond.png"},
            ],
            clothes: [
                {text: "cardigan", src: "cardigan.png"},
                {text: "coat", src: "coat.png"},
                {text: "dress", src: "dress.png"},
                {text: "hat", src: "hat.png"},
                {text: "jacket", src: "jacket.png"},
                {text: "shoes", src: "shoes.png"},
                {text: "shorts", src: "shorts.png"},
                {text: "socks", src: "socks.png"},
                {text: "skirt", src: "skirt.png"},
                {text: "t-shirt", src: "t-shirt.png"},
                {text: "tracksuit", src: "tracksuit.png"},
                {text: "trousers", src: "trousers.png"},
            ]
        },
        nav: [
            {
                icon: 'home',
                text: 'Home / Principal',
                link: {name: "home"},
                panel: false

            },
            {
                icon: 'format_list_numbered',
                text: 'Numbers / Numeros',
                link: {name: "numbers"}

            },
            {
                icon: 'format_color_text',
                text: 'Alphabet / Abecedario',
                link: {name: "abc"}

            },
            {
                icon: 'palette',
                text: 'Colors / Colores',
                link: {name: "colors"},

            },
            {
                icon: 'work',
                text: 'Professions / Profesiones',
                link: {name: "professions"},

            },
            {
                icon: 'work',
                text: 'Shapes / Figuras',
                link: {name: "shapes"},

            },
            {
                icon: 'work',
                text: 'Clothes / Ropa',
                link: {name: "clothes"},

            }
        ],
    },
    getters: {
        getWords: state => {
            return state.words
        },
        getName: () => {
            return localStorage.getItem("name")
        },
        getStars: () => {
            return localStorage.getItem("stars")
        },
        getPoints: () => {
            return localStorage.getItem("points")
        },
        getLevel: () => {
            return localStorage.getItem("level")
        }
    },
    actions: {
        initLocalStorage: ({commit}) => {
            commit("setName", localStorage.getItem("name")?localStorage.getItem("name"):"")
            commit("setLevel",localStorage.getItem("level")?parseInt(localStorage.getItem("level")):1)
            commit("setStars", localStorage.getItem("stars")?parseInt(localStorage.getItem("stars")):0)
            commit("setPoints",localStorage.getItem("points")?parseInt(localStorage.getItem("points")):0)
        }
    },
    mutations: {
        setTab(state,tab) {
            state.activeTab = tab
        },
        nextTab(state) {
            state.activeTab = (state.activeTab < state.maxTab)?state.activeTab + 1 : 0
        },
        setMaxTab(state, max) {
            state.maxTab = max;
        },
        setName(state, name) {
            state.name = name;
            localStorage.setItem("name", state.name)
        },
        setLevel(state, level) {
            state.level = level
            localStorage.setItem("level", state.level)
        },
        setStars(state, stars) {
            state.stars = (stars)?stars:9
            localStorage.setItem("stars", state.stars)
        },
        setPoints(state, points) {
            state.points = points
            localStorage.setItem("points", state.points)
        },
        addLevel(state) {
            state.level = parseInt(state.level) + 1
            localStorage.setItem("level", state.level)
        },
        addStars(state, stars) {
            state.stars = parseInt(state.stars) + parseInt(stars)
            localStorage.setItem("stars", state.stars)
        },
        addPoints(state, points) {
            state.points = parseInt(state.points) + parseInt(points)

            if(state.points >= 100){
                state.level = parseInt(state.level) + 1
                state.points = 0
                localStorage.setItem("level", state.level)
            }

            localStorage.setItem("points", state.points)
        }
    }
})