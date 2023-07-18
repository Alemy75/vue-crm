import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'Main'
    },
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'Empty'
    },
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      layout: 'Empty'
    },
    component: () => import('@/views/RegisterView.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {
      layout: 'Main'
    },
    component: () => import('@/views/CategoriesView.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    meta: {
      layout: 'Main'
    },
    component: () => import('@/views/DetailRecordView.vue')
  },
  {
    path: '/history',
    name: 'history',
    meta: {
      layout: 'Main'
    },
    component: () => import('@/views/HistoryView.vue')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: {
      layout: 'Main'
    },
    component: () => import('@/views/PlanningView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      layout: 'Main'
    },
    component: () => import('@/views/ProfileView.vue')
  },
  {
    path: '/record',
    name: 'record',
    meta: {
      layout: 'Main'
    },
    component: () => import('@/views/RecordView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
