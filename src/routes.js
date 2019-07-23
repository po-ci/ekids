import Vue from 'vue'
import VueRouter from 'vue-router'

//Users
import Login from './modules/user/auth/pages/Login.vue'
import Recovery from './modules/user/recovery/pages/Recovery.vue'
import Me from './modules/user/profile/pages/Profile.vue'
import UserAdmin from './modules/user/admin/pages/UsersAdmin.vue'


import Home from './modules/app/pages/Home.vue'


import Numbers from './modules/app/pages/Numbers.vue'

import Abc from './modules/app/pages/Abc.vue'

import Colors from './modules/app/pages/Colors.vue'

import Family from './modules/app/pages/Family.vue'


import Profile from './modules/app/pages/Profile.vue'

import Albums from './modules/app/pages/Albums.vue'

import Vocabulary from './modules/app/pages/Vocabulary';

Vue.use(VueRouter)

import store from './store'


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [

    //USERS
    {
        name: "login",
        path: '/login',
        component: Login
    },
    {
        name: "recovery",
        path: '/recovery',
        component: Recovery
    },
    {
        name: "me",
        path: '/me',
        component: Me,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: "usersAdmin",
        path: '/admin',
        component: UserAdmin,
        meta: {
            requiresAuth: true,
            role: "administrator"
        }
    },

    //HOME
    {name: "home", path: '/', component: Home},

    //OTHERS
    {
        name: "profile",
        path: '/profile',
        component: Profile,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: "albums",
        path: '/albums',
        component: Albums,
        meta: {
            requiresAuth: true
        }
    },

    //Vocabulary Specific
    {
        name: "abc", path: '/abc', component: Abc,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: "numbers", path: '/numbers', component: Numbers,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: "colors", path: '/colors', component: Colors,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: "family", path: '/family', component: Family,
        meta: {
            requiresAuth: true
        }
    },

    //Vocabulary Replica
    {
        name: "vocabulary",
        path: '/vocabulary/:category',
        component: Vocabulary,
        props: true,
        meta: {
            requiresAuth: true
        }
    }
]


// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    mode: 'history',
    routes: routes
})

router.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        store.dispatch('checkAuth')

        if (!store.getters.isAuth) {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        } else {


            if (to.meta.role && !store.getters.hasRole(to.meta.role)) {
                next({
                    path: '/',
                    query: {redirect: to.fullPath}
                })
            } else {
                next()
            }

        }
    } else {
        next() // make sure to always call next()!
    }
})


export default router
