import Vue from 'vue'
import VueRouter from 'vue-router'
import Abc from './containers/pages/Abc.vue'
import Abc1 from './containers/practices/Abc1.vue'
import Home from './containers/pages/Home.vue'
import Colors from './containers/pages/Colors.vue'
Vue.use(VueRouter)


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { name: "home", path: '/', component: Home},
  { name: "abc", path: '/abc', component: Abc},
  { name: "abc1", path: '/abc1', component: Abc1},
  { name: "colors", path: '/colors', component: Colors}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = new VueRouter({
  routes
})
