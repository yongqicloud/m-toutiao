import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from 'pages/index/Layout'
import Manage from 'pages/manage/ChannelManage'
import Search from 'pages/search/Search'
import Details from 'pages/details/Details'
import NewsList from 'components/NewsList'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/index/channel/__all__'
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
  },
  {
    path: '/details/:id',
    name: 'details',
    component : Details
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
