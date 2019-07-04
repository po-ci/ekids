import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './modules/app/pages/Home.vue'

import Numbers from './modules/app/pages/Numbers.vue'

import Abc from './modules/app/pages/Abc.vue'

import Colors from './modules/app/pages/Colors.vue'

import Professions from './modules/app/pages/Professions.vue'

import Shapes from './modules/app/pages/Shapes.vue'

import Clothes from './modules/app/pages/Clothes.vue'

import House from './modules/app/pages/House.vue'

import Fruits from './modules/app/pages/Fruits.vue'

import Family from './modules/app/pages/Family.vue'

import Weather from './modules/app/pages/Weather.vue'

import Animals from './modules/app/pages/Animals.vue'

import Hair from './modules/app/pages/Hair.vue'

import Body from './modules/app/pages/Body.vue'

import Profile from './modules/app/pages/Profile.vue'

import Albums from './modules/app/pages/Albums.vue'

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
    {name: "animals", path: '/animals', component: Animals},
    {name: "hair", path: '/hair', component: Hair},
    {name: "body", path: '/body', component: Body},
    {name: "profile", path: '/profile', component: Profile},
    {name: "albums", path: '/albums', component: Albums}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = new VueRouter({
    mode: 'history',
    routes: routes
})
