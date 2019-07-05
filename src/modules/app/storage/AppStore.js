import vocabulary from '../resources/vocabulary'
import numbers from '../resources/numbers'
import colors from '../resources/colors'
import letters from '../resources/letters'
import family from '../resources/family'

import Albums from '../resources/albums'
import Questions from '../resources/questions'


export default {
    state: {
        vocabulary: vocabulary,
        numbers: numbers,
        colors: colors,
        letters: letters,
        family: family,
        albums: Albums,
        qa: Questions,
        activeTab: 0,
        maxTab: 4,
    },
    getters: {
        getCategoryVocabularyList: state => category => {
            return state.vocabulary[category].list;
        },
        getLetters(state){
            return state.letters
        },
        getColors(state){
            return state.colors
        },
        getNumbers(state){
            return state.numbers
        },
        getFamily(state){
            return state.family
        }


    },
    actions: {

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
        }
    }
}