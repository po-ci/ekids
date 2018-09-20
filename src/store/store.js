import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
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
        setName(state, name) {
            state.name = name;
            localStorage.setItem("name", state.name)
        },
        setLevel(state, level) {
            state.level = level
            localStorage.setItem("level", state.level)
        },
        setStars(state, stars) {
            state.stars = stars
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
            }

            localStorage.setItem("points", state.points)
        }
    }
})