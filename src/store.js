import Vue from 'vue'
import Vuex from 'vuex'


import UserAuthStore from './modules/user/auth/storage/UserAuthStore'
import UserRecoveryStore from "./modules/user/recovery/storage/UserRecoveryStore";
import UserProfileStore from "./modules/user/profile/storage/UserProfileStore";
import UserAdminStore from "./modules/user/admin/storage/UserAdminStore";

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
        auth: UserAuthStore,
        recovery: UserRecoveryStore,
        profile: UserProfileStore,
        admin: UserAdminStore,

        //APP
        appStore: appStore,
        profileStore: profileStore
    },
    plugins: [
        createPersistedState({
            key: 'ekidss',
            paths: ['auth'],
            reducer: state => (
                {
                    auth: {
                        access_token: state.auth.access_token,
                        me: state.auth.me
                    }
                })
        })
    ]
})
