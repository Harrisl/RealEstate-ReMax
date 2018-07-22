import Vue from 'vue'
import Router from 'vue-router'
//import House from '../pages/House/HouseView.vue'

// The meta data for your routes
const meta = require('./meta.json')

// Function to create routes
// Is default lazy but can be changed
function route (path, view, name, children) {
  return {
    path: path,
    meta: meta[path],
    name,
    children,
    component: resolve => import(`pages/${view}View.vue`).then(resolve)
  }
}

Vue.use(Router)

export function createRouter () {
    const router = new Router({
      base: __dirname,
      mode: 'history',
      scrollBehavior: () => ({ y: 0 }),
      routes: [
        //{path: '/house', component: House},
        route('/', 'Main', null, [
          route('/', 'Welcome', 'home'),
          route('/new', 'Home', 'homewe'),
          route('/inspire', 'Inspire', 'inspire'),
          route('/about', 'About', 'about'),
          route('/property', 'House/House', 'house'),        
          route('/property/buy', 'House/Buy', 'buy'),
          route('/property/Sell', 'House/Sell', 'Sell'),
          route('/property/rent', 'House/Rent', 'rent'),
          route('/property/:id', 'House/HouseInfo', 'houseid'),
          route('/404', 'PageNotFound','pagenotfound'),
          // Global redirect for 404
      ]),
        { path: '*', redirect: '/404' }
      ]
    })

    // Send a pageview to Google Analytics
    router.beforeEach((to, from, next) => {
      global.store.dispatch('checkPageTitle', to.path)
      
        if (typeof ga !== 'undefined') {
            ga('set', 'page', to.path)
            ga('send', 'pageview')
        }
        next()
    })

    return router
}
