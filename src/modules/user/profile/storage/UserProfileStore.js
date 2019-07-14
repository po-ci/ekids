import UserProfileProvider from './../providers/UserProfileProvider'


export default {
    state: {
        loadingUserProfile: false
    },
    getters: {
    },
    actions: {

        changeAvatar({commit}, params) {
            commit('LOADING_USER_PROFILE_ON')
            UserProfileProvider.changeAvatar(params).then((response) => {
                commit('LOADING_USER_PROFILE_OFF')
            }).catch((error) => {
                //Todo handleErrors
            })
        },
        changePassword({commit}, params) {
            commit('LOADING_USER_PROFILE_ON')
            UserProfileProvider.changePassword(params).then((response) => {
                commit('LOADING_USER_PROFILE_OFF')
            }).catch((error) => {
                //Todo handleErrors
            })
        },
    },
    mutations: {
        LOADING_USER_PROFILE_ON(state) {
            state.loadingUserProfile = true
        },
        LOADING_USER_PROFILE_OFF(state) {
            state.loadingUserProfile = true
        },
        SET_TEMPLATE_RESULT(state, value) {

        }

    }
}
