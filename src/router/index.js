import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/components/Login.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    redirect: '/admin'
  },
  {
    path: '/admin',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router