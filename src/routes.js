import Vue from 'vue'
import VueRouter from 'vue-router'
import Abc from './containers/Abc.vue'
import Home from './containers/Home.vue'
Vue.use(VueRouter)


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { name: "home", path: '/', component: Home,
    name: "abc", path: '/abc', component: Abc,
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = new VueRouter({
  routes
})
