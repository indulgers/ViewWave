import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'index',
      component: () => import('@/views/Index.vue')
    },
    {
      path: '/cloud',
      name: 'cloud',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/CloudWare.vue')
    },
    {
      path: '/interact',
      name:'interact',
        component: () => import('@/views/Interact.vue')
    },
    {
        path: '/mall',
        name:'mall',
        component: () => import('@/views/Mall.vue')
    },
    {
        path: '/mine',
        name:'mine',
        component: () => import('@/views/Mine.vue')
    }
  ]
})

export default router
