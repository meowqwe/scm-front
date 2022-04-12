import Vue from 'vue'
import VueRouter from 'vue-router'
import Test1 from '../views/Test1'

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
        path: '/test1',
        name: 'Test1',
        component: Test1
      }
    ]
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home'),
    children: [
      {
        path: '/test1',
        name: 'Test1',
        component: Test1
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  routes
})

export default router
