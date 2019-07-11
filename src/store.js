import Vue from 'vue'
import Vuex from 'vuex'

import authStore from './modules/auth/storage/AuthStore'

import appStore from './modules/app/storage/AppStore'
import profileStore from './modules/profile/storage/ProfileStore'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        authStore: authStore,
        profileStore: profileStore,
        appStore: appStore
    },
    plugins: [
        createPersistedState({
            key: 'ekids',
            paths: ['authStore'],
            reducer: state => (
                {
                    authStore: {
                        access_token: state.authStore.access_token,
                        me: state.authStore.me
                    }
                })
            // filter: (mutation) => {return ['SET_AUTH_LOADING'].indexOf(mutation.type) ==  -1}
        })
    ]
})
