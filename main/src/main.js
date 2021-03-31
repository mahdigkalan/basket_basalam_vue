import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './route'

Vue.use(VueRouter) ;

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
