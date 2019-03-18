import HelloWorld from './components/HelloWorld'
import Variables from './components/Variables'
import Zones from './components/Zones'
import Policies from './components/Policies'
import Services from './components/Services'
import Filters from './components/Filters'
import Snat from './components/Snat'
import Dnat from './components/Dnat'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/variables', component: Variables },
  { path: '/zones', component: Zones},
  { path: '/policies', component: Policies},
  { path: '/services', component: Services},
  { path: '/filters', component: Filters},
  { path: '/snat', component: Snat},
  { path: '/dnat', component: Dnat}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

export default router;