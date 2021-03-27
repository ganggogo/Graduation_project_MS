import Vue from 'vue'
import VueRouter from 'vue-router'


const shouye = ()=>import('views/shouye/shouye.vue')
const login = ()=>import('views/login/login.vue')
const register = ()=>import('views/register/register.vue')


const xingchenginfo = ()=>import('views/shouye/shouyechild/xingchenginfo.vue')
const goodsinfo = ()=>import('views/shouye/shouyechild/goodsinfo.vue')
const xingchengorderinfo = ()=>import('views/shouye/shouyechild/xingchengorderinfo.vue')
const goodsorderinfo = ()=>import('views/shouye/shouyechild/goodsorderinfo.vue')
const usersinfo = ()=>import('views/shouye/shouyechild/usersinfo.vue')
const admininfo = ()=>import('views/shouye/shouyechild/admininfo.vue')

Vue.use(VueRouter)

const routes = [
    //首页
  {
    path:"",
    redirect:"/login"
  },
  {
    path:'/shouye',
    component:shouye,
    meta:{
      title:'首页'
    },
    children:[
      {
        path:'/shouye/xingchenginfo',
        component:xingchenginfo
      },
      {
        path:'/shouye/goodsinfo',
        component:goodsinfo
      },
      {
        path:'/shouye/xingchengorderinfo',
        component:xingchengorderinfo
      },
      {
        path:'/shouye/goodsorderinfo',
        component:goodsorderinfo
      },
      {
        path:'/shouye/usersinfo',
        component:usersinfo
      },
      {
        path:'/shouye/admininfo',
        component:admininfo
      }
    ]
  },
  {
    path:'/login',
    component:login,
    meta:{
      title:'登录页'
    }
  },
  {
    path:'/register',
    component:register,
    meta:{
      title:'注册页'
    }
  }
]
const router = new VueRouter({
  routes,
  mode:"history"
})


export default router