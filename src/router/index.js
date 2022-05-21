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
      },
      {
        path: '/userManager',
        name: 'UserManager',
        component: () => import('@/views/UserManager')
      },
      {
        path: '/tradeCheck',
        name: 'TradeCheck',
        component: () => import('@/views/TradeCheck')
      },
      {
        path: '/rentCheck',
        name: 'RentCheck',
        component: () => import('@/views/RentCheck')
      }
    ]
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home'),
    children: [
      {
        path: '/mainPage1',
        name: 'MainPage',
        component: () => import('@/views/MainPage')
      },
      {
        path: '/personalCenter',
        name: 'PersonalCenter',
        component: () => import('@/views/PersonalCenter')
      },
      {
        path: '/trade',
        name: 'Trade',
        component: () => import('@/views/Trade')
      },
      {
        path: '/addTrade',
        name: 'AddTrade',
        component: () => import('@/views/AddTrade')
      },
      {
        path: '/userService',
        name: 'UserService',
        component: () => import('@/views/UserService')
      },
      {
        path: '/rent',
        name: 'Rent',
        component: () => import('@/views/Rent')
      },
      {
        path: '/addRent',
        name: 'AddRent',
        component: () => import('@/views/AddRent')
      },
      {
        path: '/userProblem',
        name: 'UserProblem',
        component: () => import('@/views/UserProblem')
      },
      {
        path: '/userShop',
        name: 'UserShop',
        component: () => import('@/views/UserShop')
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  routes
})

export default router
