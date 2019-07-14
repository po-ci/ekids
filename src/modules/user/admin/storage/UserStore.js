import Vue from 'vue'
import Vuex from 'vuex'
import router from '../../../router'
import gql from 'graphql-tag'
import graphqlClient from '../../../vue-apollo';
import {
    SET_USERS,
    SET_USERS_LOADING,
    SET_GENERAL_ERROR,
    SET_ROLES,
    SET_ROLES_LOADING,
    SET_FLASH_MESSAGE,
    SET_NEW_USER,
    UPDATE_USER,
    SET_RESULT,
    SET_ERROR_USER,
    SET_CHANGE_PASSWORD,
    SET_MESSAGE_ROCOVERY,
    SET_RECOVERY_FAILD,
    SET_RECOVERY_SUCCES
} from './user-mutations-type'

import UserProvider from "./../providers/UserProvider";

Vue.use(Vuex)


export default {
    state: {
        users: [],
        loadingUsers: false,
        roles: [],
        rolesLoading: false,
        result: false,
        changePassword: false,
        flashMessage: null,
        recoverySuccess: false,
        messageRecovery: null,
        recoveryFaild: false,
        errorsUser: [],

    },
    getters: {
        getUsers(state) {
            return state.users
        },
        getUsersLoading(state) {
            return state.loadingUsers
        },
        getRoles(state) {
            return state.roles
        },
        getRolesLoading(state) {
            return state.rolesLoading
        },
        getResult(state) {
            return state.result
        },
        getChangePassword(state) {
            return state.changePassword
        },
        getFlashMessage(state) {
            return state.flashMessage
        },
        getErrors(state) {
            return state.errorsUser
        },
        getRecoverySucces(state) {
            return state.recoverySuccess
        },
        getMessageRecovery(state) {
            return state.messageRecovery
        },
        getRecoveryFaild(state) {
            return state.recoveryFaild
        },
        hasFieldInUserErrors: (state) => (field) => {
            return state.errorsUser.some(item => item.field == field)
        },
        getMessagesInUserErrors: (state) => (field) => {
            let i = state.errorsUser.find(item => item.field == field)
            return i ? i.messages : []
        },
    },
    actions: {
        fetchAll({commit}) {
            commit(SET_USERS_LOADING, true)
            commit(SET_GENERAL_ERROR, "")
            UserProvider.fetchAll().then((response) => {
                commit(SET_USERS, response.data)
                commit(SET_USERS_LOADING, false)
            }).catch((error) => {
                commit(SET_GENERAL_ERROR, error)
                commit(SET_USERS_LOADING, false)
            })

        },

        fetchAllRoles({commit}) {
            commit(SET_ROLES_LOADING, true)
            UserProvider.fetchAllRoles().then((response) => {
                commit(SET_ROLES, response.data.group)
                commit(SET_ROLES_LOADING, false)
            })
        },

        createUser({commit}, data) {
            commit(SET_USERS_LOADING, true)
            commit(SET_RESULT, null)
            commit(SET_FLASH_MESSAGE, "")
            commit(SET_ERROR_USER, [])

            UserProvider.create(
                data.username,
                data.email,
                data.password,
                data.password_verify,
                data.phone,
                data.groups,
                data.firstName,
                data.isActive
            ).then((response) => {


                if (response.data.registerUser.user) {
                    commit(SET_NEW_USER, response.data.registerUser.user)
                    commit(SET_RESULT, true)
                    commit(SET_FLASH_MESSAGE, "Se creo correctamente el Usuario")
                } else {
                    commit(SET_ERROR_USER, response.data.registerUser.errors)
                }

                commit(SET_USERS_LOADING, false)
            }).catch((error) => {
                console.log(error)
                commit(SET_USERS_LOADING, false)
                commit(SET_RESULT, false)

            })

        },


        userUpdate({commit}, data) {
            commit(SET_USERS_LOADING, true)
            commit(SET_RESULT, null)
            commit(SET_FLASH_MESSAGE, "")

            UserProvider.update(
                data.id,
                data.email,
                data.phone,
                data.groups,
                data.firstName,
                data.isActive).then((response) => {

                if (response.data.updateUser.user) {
                    commit(UPDATE_USER, response.data.updateUser.user)
                    commit(SET_RESULT, true)
                    commit(SET_FLASH_MESSAGE, "Se edito correctamente el Usuario")
                } else {
                    commit(SET_ERROR_USER, response.data.updateUser.errors)
                }

                commit(SET_USERS_LOADING, false)


            }).catch((error) => {
                console.log(error.message)
                //commit(SET_ERROR, error.message)
                commit(SET_RESULT, false)
                commit(SET_USERS_LOADING, false)

            })

        },

        passwordChange({commit}, data) {
            commit(SET_USERS_LOADING, true)
            commit(SET_CHANGE_PASSWORD, false)
            UserProvider.password(data.id, data.password, data.password_verify).then((response) => {
                console.log(response)
                commit(SET_USERS_LOADING, false)
                commit(SET_CHANGE_PASSWORD, true)
            }).catch((error) => {
                console.log(error)
                commit(SET_USERS_LOADING, false)
                commit(SET_CHANGE_PASSWORD, false)
            })
        },
        recoverySend({commit}, email) {
            commit(SET_USERS_LOADING, true)
            commit(SET_RECOVERY_SUCCES, false)
            commit(SET_MESSAGE_ROCOVERY, null)
            commit(SET_RECOVERY_FAILD, false)

            UserProvider.recoveryPassword(email).then((response) => {
                commit(SET_RECOVERY_SUCCES, true)
                commit(SET_MESSAGE_ROCOVERY, "Se envio correctamente un mail con tu nueva contraseña")
                commit(SET_USERS_LOADING, false)
            }).catch((error) => {
                commit(SET_RECOVERY_FAILD, true)
                commit(SET_MESSAGE_ROCOVERY, error.message)
                commit(SET_USERS_LOADING, false)
            })
        }

    },
    mutations: {
        [SET_USERS](state, data) {
            state.users = data
        },
        [SET_USERS_LOADING](state, data) {
            state.loadingUsers = data
        },
        [SET_ROLES](state, data) {
            state.roles = data
        },
        [SET_ROLES_LOADING](state, data) {
            state.rolesLoading = data
        },
        [SET_NEW_USER](state, data) {
            state.users.users.push(data)
        },
        [UPDATE_USER](state, data) {
            if (data.avatar) {
                data.avatar.image = process.env.VUE_APP_APIHOST + "/media/" + data.avatar.image
            }
            let index = state.users.users.findIndex(user => user.id == data.id)
            Vue.set(state.users.users, index, data)
        },
        [SET_RESULT](state, data) {
            state.result = data
        },
        [SET_ERROR_USER](state, data) {
            state.errorsUser = data
        },
        [SET_CHANGE_PASSWORD](state, data) {
            state.changePassword = data
        },
        [SET_FLASH_MESSAGE](state, data) {
            state.flashMessage = data
        },
        [SET_RECOVERY_SUCCES](state, data) {
            state.recoverySuccess = data
        },
        [SET_MESSAGE_ROCOVERY](state, data) {
            state.messageRecovery = data
        },
        [SET_RECOVERY_FAILD](state, data) {
            state.recoveryFaild = data
        }
    }
}
