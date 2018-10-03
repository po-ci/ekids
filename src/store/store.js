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
        userCards: [],
        albums: {
            Emojis: {
                cards: [
                    {number: 1, name: "romantic"},
                    {number: 2, name: "dreamer"},
                    {number: 3, name: "jesting"},
                    {number: 4, name: "angry"},
                    {number: 5, name: "asleep"},
                    {number: 6, name: "birthday"},
                    {number: 7, name: "call me"},
                    {number: 8, name: "crazy"},
                    {number: 9, name: "crying"},
                    {number: 10, name: "devil"},
                    {number: 11, name: "dislike"},
                    {number: 12, name: "embarrased"},
                    {number: 13, name: "fear"},
                    {number: 14, name: "glasses"},
                    {number: 15, name: "happy"},
                    {number: 16, name: "ice cream"},
                    {number: 17, name: "in love"},
                    {number: 18, name: "kiss"},
                    {number: 19, name: "laugh"},
                    {number: 20, name: "mistake"},
                    {number: 21, name: "music"},
                    {number: 22, name: "poop"},
                    {number: 23, name: "positive"},
                    {number: 24, name: "sad"},
                    {number: 25, name: "sick"},
                    {number: 26, name: "silence"},
                    {number: 27, name: "sleepy"},
                    {number: 28, name: "victory"},
                    {number: 29, name: "wink"},
                    {number: 30, name: "sticking tongue"}
                ]
            }
        },
        qa: {
            profile: [
                {
                    question: {en: "what is your name", es: "cual es tu nombre"},
                    answer: {
                        en: "my name is #",
                        enWord: "Lisa",
                        es: "mi nombre es #",
                        esWord: "Lisa"
                    }
                },
                {
                    question: {en: "what is your favorite color", es: "cual es tu color favorito"},
                    answer: {
                        en: "my Favorite color is #",
                        enWord: "green",
                        es: "mi color favorito es #",
                        esWord: "verde"
                    }
                },
                {
                    question: {en: "how old are you", es: "cuantos años tenes"},
                    answer: {
                        en: "I am # years old",
                        enWord: "7",
                        es: "Tengo # años",
                        esWord: "7"
                    }
                }
            ]
        },
        words: {
            abc: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
            numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
            colors: [
                {text: "red", bgcolor: "red", es: "rojo"},
                {text: "blue", bgcolor: "blue", es: "azul"},
                {text: "green", bgcolor: "green", es: "verde"},
                {text: "yellow", bgcolor: "yellow", es: "amarillo"},
                {text: "pink", bgcolor: "pink", es: "rosa"},
                {text: "grey", bgcolor: "grey", es: "gris"},
                {text: "brown", bgcolor: "brown", es: "marron"},
                {text: "orange", bgcolor: "orange", es: "naranja"},
                {text: "purple", bgcolor: "purple", es: "purpura"},
                {text: "white", bgcolor: "white", es: "blanco"},
                {text: "black", bgcolor: "black", es: "negro"}
            ],
            professions: [
                {text: "policeman", src: "policeman.png", es: "policia"},
                {text: "fireman", src: "fireman.png", es: "bombero"},
                {text: "medic", src: "medic.png", es: "medico"},
                {text: "farmer", src: "farmer.png", es: "granjero"},
                {text: "journalist", src: "journalist.png", es: "periodista"},
                {text: "student", src: "student.png", es: "estudiante"},
                {text: "artist", src: "artist.png", es: "artista"},
                {text: "chef", src: "chef.png", es: "cocinero"},
                {text: "waiter", src: "waiter.png", es: "camarero"},
                {text: "postman", src: "postman.png", es: "cartero"},
                {text: "judge", src: "judge.png", es: "juez"},
                {text: "pirate", src: "pirate.png", es: "pirata"}
            ],
            shapes: [
                {text: "square", src: "square.png", es: "cuadrado"},
                {text: "triangle", src: "triangle.png", es: "triangulo"},
                {text: "circle", src: "circle.png", es: "circulo"},
                {text: "rectangle", src: "rectangle.png", es: "rectangulo"},
                {text: "diamond", src: "diamond.png", es: "diamante"},
                {text: "star", src: "star.png", es: "estrella"},
            ],
            clothes: [
                {text: "cardigan", src: "cardigan.png", es: "cardigan"},
                {text: "coat", src: "coat.png", es: "capa"},
                {text: "dress", src: "dress.png", es: "vestido"},
                {text: "hat", src: "hat.png", es: "sombrero"},
                {text: "jacket", src: "jacket.png", es: "campera"},
                {text: "shoes", src: "shoes.png", es: "zapatillas"},
                {text: "shorts", src: "shorts.png", es: "pantalon corto"},
                {text: "socks", src: "socks.png", es: "medias"},
                {text: "skirt", src: "skirt.png", es: "pollera"},
                {text: "t-shirt", src: "t-shirt.png", es: "remera"},
                {text: "tracksuit", src: "tracksuit.png", es: "chandal"},
                {text: "trousers", src: "trousers.png", es: "pantalones"},
            ],
            house: [
                {text: "house", src: "house.png", es: "casa"},
                {text: "kitchen", src: "kitchen.png", es: "cocina"},
                {text: "bathroom", src: "bathroom.png", es: "baño"},
                {text: "bedroom", src: "bedroom.png", es: "dormitorio"},
                {text: "living room", src: "living_room.png", es: "living"},
                {text: "dining room", src: "dining_room.png", es: "comedor"},
                {text: "garden", src: "garden.png", es: "jardin"},
                {text: "front door", src: "front_door.png", es: "puerta principal"}
            ],
            weather: [
                {text: "sunny", src: "sunny.png", es: "soleado"},
                {text: "cloudy", src: "cloudy.png", es: "nublado"},
                {text: "rainy", src: "rainy.png", es: "lluvioso"},
                {text: "windy", src: "windy.png", es: "ventoso"},
                {text: "snowy", src: "snowy.png", es: "nevado"}
            ],
            hair: [
                {text: "blond", src: "blond.png", es: "rubio"},
                {text: "brown", src: "brown.png", es: "castaño"},
                {text: "long", src: "long.png", es: "largo"},
                {text: "short", src: "short.png", es: "corto"},
                {text: "curly", src: "curly.png", es: "rizado"},
                {text: "straight", src: "straight.png", es: "lacio"}
            ],
            fruits: [
                {text: "apple", src: "apple.png", es: "manzana"},
                {text: "pear", src: "pear.png", es: "pera"},
                {text: "grapes", src: "grapes.png", es: "uvas"},
                {text: "orange", src: "orange.png", es: "naranja"},
                {text: "cherries", src: "cherries.png", es: "cerezas"},
                {text: "banana", src: "banana.png", es: "banana"},
            ],
            family: {
                me: {text: "me", src: "me.png", es: "yo"},
                sister: {text: "sister", src: "sister.png", es: "hermana"},
                brother: {text: "brother", src: "brother.png", es: "hermano"},
                dad: {text: "dad", src: "dad.png", es: "papa"},
                mum: {text: "mum", src: "mum.png", es: "mama"},
                grandpa: {text: "grandpa", src: "grandpa.png", es: "abuelo"},
                grandma: {text: "grandma", src: "grandma.png", es: "abuela"},
                aunt: {text: "aunt", src: "aunt.png", es: "tia"},
                uncle: {text: "uncle", src: "uncle.png", es: "tio"},
                cousin: {text: "cousin", src: "cousin.png", es: "primo"},
                baby: {text: "baby", src: "baby.png", es: "bebe"},
            },
            animals: [
                {text: "dog", src: "dog.png", es: "perro"},
                {text: "cat", src: "cat.png", es: "gato"},
                {text: "lion", src: "lion.png", es: "leon"},
                {text: "turtle", src: "turtle.png", es: "tortuga"},
                {text: "horse", src: "horse.png", es: "caballo"},
                {text: "donkey", src: "donkey.png", es: "burro"},
                {text: "rabbit", src: "rabbit.png", es: "conejo"},
                {text: "hippo", src: "hippo.png", es: "hipopotamo"},
                {text: "gorilla", src: "gorilla.png", es: "gorila"},
                {text: "leopard", src: "leopard.png", es: "leopardo"},
                {text: "elephant", src: "elephant.png", es: "elefante"},
                {text: "giraffe", src: "giraffe.png", es: "girafa"},
                {text: "dolphin", src: "dolphin.png", es: "delfin"},
                {text: "monkey", src: "monkey.png", es: "mono"},
                {text: "penguin", src: "penguin.png", es: "pinguino"},
                {text: "snake", src: "snake.png", es: "vivora"},
                {text: "bird", src: "bird.png", es: "pajaro"}
            ],
            body: [
                {text: "ear", src: "ear.png", es: "oreja"},
                {text: "eye", src: "eye.png", es: "ojo"},
                {text: "nose", src: "nose.png", es: "nariz"},
                {text: "mouth", src: "mouth.png", es: "boca"},
                {text: "tongue", src: "tongue.png", es: "lengua"},
                {text: "arm", src: "arm.png", es: "brazo"},
                {text: "hand", src: "hand.png", es: "mano"},
                {text: "finger", src: "finger.png", es: "dedo"},
                {text: "tooth", src: "tooth.png", es: "diente"},
                {text: "leg", src: "leg.png", es: "pierna"},
                {text: "foot", src: "foot.png", es: "pie"},
            ],
        },
        nav: [
            {
                icon: 'home',
                text: 'Home',
                esText: 'Principal',
                link: {name: "home"},
                panel: false

            },
            {
                icon: 'format_list_numbered',
                text: 'Numbers',
                esText: 'Numeros',
                link: {name: "numbers"}

            },
            {
                icon: 'format_color_text',
                text: 'Alphabet',
                esText: 'Abecedario',
                link: {name: "abc"}

            },
            {
                icon: 'palette',
                text: 'Colors',
                esText: 'Colores',
                link: {name: "colors"},

            },
            {
                icon: 'work',
                text: 'Professions',
                esText: 'Profesiones',
                link: {name: "professions"},

            },
            {
                icon: 'category',
                text: 'Shapes',
                esText: 'Formas',
                link: {name: "shapes"},

            },
            {
                icon: 'loyalty',
                text: 'Clothes',
                esText: 'Ropa',
                link: {name: "clothes"},

            },
            {
                icon: 'wb_sunny',
                text: 'Weather',
                esText: 'Clima',
                link: {name: "weather"},

            },
            {
                icon: 'shopping_basket',
                text: 'Fruits',
                esText: 'Frutas',
                link: {name: "fruits"},

            },
            {
                icon: 'gesture',
                text: 'Hair',
                esText: 'Pelo',
                link: {name: "hair"},

            },
            {
                icon: 'store',
                text: 'The House',
                esText: 'La Casa',
                link: {name: "house"},

            },
            {
                icon: 'child_friendly',
                text: 'Family',
                esText: 'Familia',
                link: {name: "family"},

            },
            {
                icon: 'pets',
                text: 'Animals',
                esText: 'Animales',
                link: {name: "animals"},

            },
            // {
            //     icon: 'face',
            //     text: 'Profile',
            //     esText: 'Perfil',
            //     link: {name: "profile"},
            //
            // }
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
        },
        getUserCards: () => {
            return localStorage.getItem("userCards").split(",")
        }
    },
    actions: {
        initLocalStorage: ({commit}) => {
            commit("setName", localStorage.getItem("name") ? localStorage.getItem("name") : "")
            commit("setLevel", localStorage.getItem("level") ? parseInt(localStorage.getItem("level")) : 1)
            commit("setStars", localStorage.getItem("stars") ? parseInt(localStorage.getItem("stars")) : 0)
            commit("setPoints", localStorage.getItem("points") ? parseInt(localStorage.getItem("points")) : 0)

            commit("setUserCards", localStorage.getItem("userCards") ? localStorage.getItem("userCards").split(",") : [])
        }
    },
    mutations: {
        setTab(state, tab) {
            state.activeTab = tab
        },
        nextTab(state) {
            state.activeTab = (state.activeTab < state.maxTab) ? state.activeTab + 1 : 0
        },
        setMaxTab(state, max) {
            state.maxTab = max;
        },
       addUserCard(state, cardNumber) {
            state.userCards.push(String(cardNumber));
            localStorage.setItem("userCards", state.userCards)
        },
        setUserCards(state, userCards) {
            state.userCards = userCards;
            localStorage.setItem("userCards", state.userCards)
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
            state.stars = (stars) ? stars : 9
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
        subtractStars(state, stars) {
            state.stars = parseInt(state.stars) - parseInt(stars)
            localStorage.setItem("stars", state.stars)
        },
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