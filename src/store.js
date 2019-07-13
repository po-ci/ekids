import Vue from 'vue'
import Vuex from 'vuex'


import UserAuthStore from './modules/user/auth/storage/UserAuthStore'
import UserRecoveryStore from "./modules/user/recovery/storage/UserRecoveryStore";

import appStore from './modules/app/storage/AppStore'
import profileStore from './modules/profile/storage/ProfileStore'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        //USER
        //userStore: UserStore,
        UserAuthStore: UserAuthStore,
        UserRecoveryStore: UserRecoveryStore,
        //APP
        appStore: appStore,
        profileStore: profileStore
    },
    plugins: [
        createPersistedState({
            key: 'ekidss',
            paths: ['UserAuthStore'],
            reducer: state => (
                {
                    UserAuthStore: {
                        access_token: state.UserAuthStore.access_token,
                        me: state.UserAuthStore.me
                    }
                })
        })
    ]
})
