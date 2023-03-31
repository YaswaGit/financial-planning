import { createRouter, createWebHistory } from 'vue-router'
import FinancialPlanning from '../views/FinancialPlanning.vue'
import SignUpView from '../views/SignUpView.vue'
// import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/FinancialPlanning',
    name: 'FinancialPlanning',
    component: FinancialPlanning
  },
  // {
  //   path: '/Login',
  //   name: 'Login',
  //   component: LoginView
  // },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUpView
  },
  {
    path: '/Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '*',
    name: 'FinancialPlanning',
    component: FinancialPlanning
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
