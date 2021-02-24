import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import LoginComponent from '../src/views/login.vue'
import WelcomeComponent from '../src/views/welcome.vue'

// Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'welcome'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeComponent
    }
  ]
})

Vue.use(VueRouter)

const app = new Vue({
  router
  // render: h => h(App)

}).$mount('#app')
