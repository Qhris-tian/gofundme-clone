import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/s',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/create/fundraiser/category',
      name: 'create-fundraiser',
      component: () => import('../views/landing/CreateFundraiserView.vue')
    },
    {
      path: '/how-it-works',
      name: 'how-it-works',
      component: () => import('../views/landing/HowItWorksView.vue')
    },
    {
      path: '/discover',
      name: 'discover',
      component: () => import('../views/landing/DiscoverView.vue')
    }
  ]
})

export default router
