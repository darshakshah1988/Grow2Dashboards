import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard/DashboardComponent.vue'
import SignupVue from '@/components/Signup/Signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupVue
    },
    {
      path: '/login',
      name: 'login',
      component: SignupVue,
      props: { isLoginPage: true }
    },
    {
      path: '/dashboard',
      name: 'login',
      component: SignupVue,
      props: { isLoginPage: true }
    }
  ]
})

export default router
