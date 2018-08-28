import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './containers/pages/Home.vue'

import Numbers from './containers/pages/Numbers.vue'
import Numbers1 from './containers/practices/Numbers1.vue'

import Abc from './containers/pages/Abc.vue'
import Abc1 from './containers/practices/Abc1.vue'

import Colors from './containers/pages/Colors.vue'
import Colors1 from './containers/practices/Colors1.vue'

import Professions from './containers/pages/Professions.vue'
import Professions1 from './containers/practices/Professions1.vue'

Vue.use(VueRouter)


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    {name: "home", path: '/', component: Home},
    {name: "numbers", path: '/numbers', component: Numbers},
    {name: "numbers1", path: '/numbers1', component: Numbers1},
    {name: "abc", path: '/abc', component: Abc},
    {name: "abc1", path: '/abc1', component: Abc1},
    {name: "colors", path: '/colors', component: Colors},
    {name: "colors1", path: '/colors1', component: Colors1},
    {name: "professions", path: '/professions', component: Professions},
    {name: "professions1", path: '/professions1', component: Professions1}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = new VueRouter({
    routes
})
