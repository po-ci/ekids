import TemplateProvider from '../providers/UserRegisterProvider'


export default {
    state: {
        loadingTemplate: false
    },
    getters: {
    },
    actions: {

        someAction({commit}, someParam) {
            commit('LOADING_TEMPLATE_ON')
            TemplateProvider.someAction(someParam).then((response) => {
                commit('LOADING_TEMPLATE_OFF')
            }).catch((error) => {
                //Todo handleErrors
            })
        },
    },
    mutations: {
        LOADING_TEMPLATE_ON(state) {
            state.loadingUserProfile = true
        },
        LOADING_TEMPLATE_OFF(state) {
            state.loadingUserProfile = true
        },
        SET_TEMPLATE_RESULT(state, value) {

        }

    }
}
