import { createRouter, createWebHistory } from 'vue-router'
import SignupVue from '@/components/Signup/Signup.vue'
import LandingPage from '@/components/LandingPage/Landing.vue'
import dashboardVue from '@/components/Dashboard/dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
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
      name: 'dashboard',
      component: dashboardVue
    }
  ]
})

export default router
