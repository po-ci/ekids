import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './containers/pages/Home.vue'

import Numbers from './containers/pages/Numbers.vue'

import Abc from './containers/pages/Abc.vue'

import Colors from './containers/pages/Colors.vue'

import Professions from './containers/pages/Professions.vue'

import Shapes from './containers/pages/Shapes.vue'

import Clothes from './containers/pages/Clothes.vue'

import House from './containers/pages/House.vue'

import Fruits from './containers/pages/Fruits.vue'

import Family from './containers/pages/Family.vue'

import Weather from './containers/pages/Weather.vue'

import Animals from './containers/pages/Animals.vue'

Vue.use(VueRouter)


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    {name: "home", path: '/', component: Home},
    {name: "abc", path: '/abc', component: Abc},
    {name: "numbers", path: '/numbers', component: Numbers},
    {name: "colors", path: '/colors', component: Colors},
    {name: "professions", path: '/professions', component: Professions},
    {name: "shapes", path: '/shapes', component: Shapes},
    {name: "clothes", path: '/clothes', component: Clothes},
    {name: "house", path: '/house', component: House},
    {name: "fruits", path: '/fruits', component: Fruits},
    {name: "family", path: '/family', component: Family},
    {name: "weather", path: '/weather', component: Weather},
    {name: "animals", path: '/animals', component: Animals}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = new VueRouter({
    mode: 'history',
    routes: routes
})
