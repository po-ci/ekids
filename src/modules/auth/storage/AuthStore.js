import {router} from '../../../routes'

import AuthProvider from './../providers/AuthProvider'

import {
    SET_TOKEN,
    SET_ME_USER,
    SET_AUTH_LOADING,
    SET_GENERAL_ERROR,
    SET_USER_IMG,
    SET_USER_INVALID,
} from './auth-mutations-type'



export default {
    state: {
        access_token: null,
        me: {
            id: null,
            username: null,
            name: null,
            email: null,
            phone: null,
            img: null,
            roles: []
        },
        loadingAuth: false,
        generalError: null,
        userInvalid: false,
    },
    getters: {
        getToken(state) {
            return state.access_token
        },
        getMe(state) {
            return state.me
        },
        getAuthLoading(state) {
            return state.loadingAuth
        },
        getGeneralError(state) {
            return state.generalError
        },
        isAuth(state) {
            return (state.access_token) ? true : false
        },
        getUserInvalid(state) {
            return state.userInvalid
        },
        hasRole: (state) => (groups) => {
            let value = false
            groups.forEach(function (gruop) {
                if (state.me && state.me.groups && state.me.groups.some(value => value.name == gruop)) {
                    value = true
                }
            })

            return value
        },
    },
    actions: {
        login({commit, dispatch}, login) {
            commit(SET_TOKEN, '')
            commit(SET_AUTH_LOADING, true)
            commit(SET_GENERAL_ERROR, "")
            commit(SET_USER_INVALID, false)

            AuthProvider.auth(login.username, login.password).then((response) => {
                commit(SET_TOKEN, response.data.tokenAuth.token)
                commit(SET_ME_USER, response.data.tokenAuth.user)
                commit(SET_AUTH_LOADING, false)
                router.push('/')

            }).catch((error) => {
                commit(SET_GENERAL_ERROR, error)
                commit(SET_AUTH_LOADING, false)
                commit(SET_USER_INVALID, true)
            })


        },

        me({commit, dispatch}) {
            commit(SET_AUTH_LOADING, true)
            commit(SET_GENERAL_ERROR, "")
            AuthProvider.me().then((response) => {
                commit(SET_ME_USER, response.data.me)
                commit(SET_AUTH_LOADING, false)
            }).catch((error) => {
                commit(SET_GENERAL_ERROR, error)
                commit(SET_AUTH_LOADING, false)
                dispatch('logout')
            })
        },


        avatarChange({commit}, data) {
            commit(SET_AUTH_LOADING, true)
            //console.log(data)
            AuthProvider.avatar(data.id, data.avatar).then((response) => {
                commit(SET_AUTH_LOADING, false)
                commit(SET_USER_IMG, response.data.avatar.image)
            });

        },

        logout({commit}) {
            commit(SET_TOKEN, '')
            commit(SET_ME_USER, [])
            graphqlClient.resetStore()
            router.push('/login')
        },

        checkAuth: ({state, dispatch}) => {
            if (state.access_token) {
                let payload = JSON.parse(atob(state.access_token.split('.')[1]))
                if (payload.exp) {
                    let dateNow = new Date();
                    if ((dateNow.getTime() / 1000) > state.exp) {
                        dispatch('logout')
                    }
                }
            }

        },
    },
    mutations: {
        [SET_TOKEN](state, token) {
            state.access_token = token
        }
        ,
        [SET_ME_USER](state, data) {
            state.me = data
        }
        ,
        [SET_AUTH_LOADING](state, data) {
            state.loadingAuth = data
        }
        ,
        [SET_GENERAL_ERROR](state, data) {
            state.generalError = data
        }
        ,
        [SET_USER_IMG](state, img) {
            state.me.avatar = {image: null}
            Vue.set(state.me.avatar, 'image', img)
        }
        ,
        [SET_USER_INVALID](state, data) {
            state.userInvalid = data
        },

    }
}
