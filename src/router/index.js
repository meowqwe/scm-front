import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Test1 from '../views/Test1'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: () => import('@/views/Login'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/home',
    name: 'Home',
    component: Home,
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
