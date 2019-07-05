export default {
    state: {
        name: null,
        stars: null,
        points: null,
        level: null,
        userCards: [],
    },
    getters: {
        getName(state){
            return state.name
        },
        getStars(state){
            return state.stars
        },
        getPoints(state){
            return state.points
        },
        getLevel(state){
            return state.level
        },
        getUserCards(state){
            return state.userCards
        }
    },
    actions: {
    },
    mutations: {

        addUserCard(state, cardNumber) {
            state.userCards.push(String(cardNumber));
            localStorage.setItem("userCards", state.userCards)
        },
        setUserCards(state, userCards) {
            state.userCards = userCards;
        },
        setName(state, name) {
            state.name = name;
        },
        setLevel(state, level) {
            state.level = level
        },
        setStars(state, stars) {
            state.stars = (stars) ? stars : 9
        },
        setPoints(state, points) {
            state.points = points
        },
        addLevel(state) {
            state.level = parseInt(state.level) + 1
        },
        addStars(state, stars) {
            state.stars = parseInt(state.stars) + parseInt(stars)
        },
        subtractStars(state, stars) {
            state.stars = parseInt(state.stars) - parseInt(stars)
        },
        addPoints(state, points) {
            state.points = parseInt(state.points) + parseInt(points)

            if (state.points >= 100) {
                state.level = parseInt(state.level) + 1
                state.points = 0
            }

        }
    }
}