import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: () => import('@/views/Login'), hidden: true },
  { path: '/logout', component: () => import('@/views/Login'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/adminhome',
    name: 'AdminHome',
    component: () => import('@/views/AdminHome'),
    children: [
      {
        path: '/mainPage',
        name: 'MainPage',
        component: () => import('@/views/MainPage')
      },
      {
        path: '/adminProblem',
        name: 'AdminProblem',
        component: () => import('@/views/AdminProblem')
      },
      {
        path: '/passwordUpdate',
        name: 'PasswordUpdate',
        component: () => import('@/views/PasswordUpdate')
      }
    ]
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home'),
    children: [
      {
        path: '/mainPage',
        name: 'MainPage',
        component: () => import('@/views/MainPage')
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  routes
})

export default router
