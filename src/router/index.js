import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Admin from '@/components/Admin'
import About from '@/components/about/About'
import Login from '@/components/Login'
import Register from '@/components/Register'

//二级路由
import Contact from '@/components/about/Contact'
import Delivery from '@/components/about/Delivery'
import History from '@/components/about/History'
import OrderingGuide from '@/components/about/OrderingGuide'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'home',components: {
      //路由复用
      default:Home,
      'orderingGuide':OrderingGuide,
      'delivery':Delivery,
      'history':History,
    }},
    {path: '/menu',name: 'menu',component: Menu},
    {path: '/admin',name: 'admin',component: Admin,
    //beforeEnter:(to,from,next)=>{
      //路由独享首位
      //   //判断store.getters.isLogin===false
      // if(to.path=='/login' || to.path=='/register'){
      //   next();
      // }else{
      //   alert("还没有登录，请先登录！");
      //   next('/login')
      // }
    //}
  },
    {path: '/about',name: 'about', redirect:'/contact', component: About,children:[
      {path: '/contact',name: 'contact',component: Contact},
      {path: '/delivery',name: 'delivery',component: Delivery},
      {path: '/history',name: 'history',component: History},
      {path: '/orderingGuide',name: 'orderingGuide',component: OrderingGuide},
    ]},
    {path: '/login',name: 'login',component: Login},
    {path: '/register',name: 'register',component: Register},
    {path: '*',redirect:'/'},
  ],
  mode:"history",
  //路由滚动，通过浏览器的前进后退来触发
  scrollBehavior(to,from,savedPosition){
    //return { x:0, y:100 }
    //return {selector:'.btn'}
    if(savedPosition){
      return savedPosition  //浏览上一个页面的位置
    }else{
      return { x:0, y:0 }
    }
  }
})




