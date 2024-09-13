import { createRouter, createWebHistory } from 'vue-router'
import PersonalInfo from '@/components/PersonalInfo.vue'
import Preview from '@/components/Preview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'form',
      component: PersonalInfo
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    }
  ]
})

export default router
