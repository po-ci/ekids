import Vue from 'vue'
import VueRouter from 'vue-router'

//Users
import Login from './modules/user/auth/pages/Login.vue'
import Recovery from './modules/user/recovery/pages/Recovery.vue'
import Me from './modules/user/profile/pages/Profile.vue'

import Home from './modules/app/pages/Home.vue'


import Numbers from './modules/app/pages/Numbers.vue'

import Abc from './modules/app/pages/Abc.vue'

import Colors from './modules/app/pages/Colors.vue'

import Family from './modules/app/pages/Family.vue'


import Profile from './modules/app/pages/Profile.vue'

import Albums from './modules/app/pages/Albums.vue'

import Vocabulary from "./modules/app/pages/Vocabulary";

Vue.use(VueRouter)


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [

    //USERS
    {name: "login", path: '/login', component: Login},
    {name: "recovery", path: '/recovery', component: Recovery},
    {name: "me", path: '/me', component: Me},

    //HOME
    {name: "home", path: '/', component: Home},

    //OTHERS
    {name: "profile", path: '/profile', component: Profile},
    {name: "albums", path: '/albums', component: Albums},

    //Vocabulary Specific
    {name: "abc", path: '/abc', component: Abc},
    {name: "numbers", path: '/numbers', component: Numbers},
    {name: "colors", path: '/colors', component: Colors},
    {name: "family", path: '/family', component: Family},

    //Vocabulary Replica
    {name: "vocabulary", path: '/vocabulary/:category', component: Vocabulary, props:true}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = new VueRouter({
    mode: 'history',
    routes: routes
})
