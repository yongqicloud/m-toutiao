import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from 'pages/index/Layout'
import Manage from 'pages/manage/ChannelManage'
import Search from 'pages/search/Search'
import NewsList from 'components/NewsList'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/index'
  },
  {
    path:'/index',
    name: 'index',
    component: Index,
    children:[
      {
        path:'channel/:channel',
        name:'channel',
        component:NewsList
      }
    ]
  },
  {
    path: '/manage',
    name: 'manage',
    component : Manage
  },
  {
    path: '/search',
    name: 'search',
    component : Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
