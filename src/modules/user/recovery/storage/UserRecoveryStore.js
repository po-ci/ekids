import {router} from '../../../../routes'
import graphqlClient from "../../../../apollo";
import UserProfileProvider from '../providers/UserRecoveryProvider'


export default {
    state: {
        loadingUserRecovery: false,
        recoveryStatus: null,
        recoveryMessage: ""
    },
    getters: {
    },
    actions: {

        recoveryPassword({commit}, email) {
            commit('LOADING_USERPROFILE_ON')
            commit('SET_RECOVERY_RESULT', {status: null, message: ""})
            UserProfileProvider.recoveryPassword(email).then((response) => {
                commit('SET_RECOVERY_RESULT', response.data.recoveryPassword)
                commit('LOADING_USERPROFILE_OFF')
            }).catch((error) => {
                //Todo handleErrors
            })
        },
        resetRecovery({commit}){
            commit('SET_RECOVERY_RESULT', {status: null, message: ""})
        }

    },
    mutations: {
        LOADING_USERPROFILE_ON(state) {
            state.loadingUserProfile = true
        },
        LOADING_USERPROFILE_OFF(state) {
            state.loadingUserProfile = true
        },
        SET_RECOVERY_RESULT(state, {status, message}) {
            console.log(message)
            state.recoveryStatus = status
            state.recoveryMessage = message
        }

    }
}
