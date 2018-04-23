// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {store} from './store/store.js'

axios.defaults.baseURL='http://localhost:3000'
//配置Vue原型
Vue.prototype.$axios = axios

Vue.config.productionTip = false

//路由全局守卫
// router.beforeEach((to,from,next)=>{
//   //判断store.getters.isLogin===false
//   if(to.path=='/login' || to.path=='/register'){
//     next();
//   }else{
//     alert("还没有登录，请先登录！");
//     next('/login')
//   }
// })

//路由后置钩子
// router.afterEach((to,from)=>{
//   alert("afterEach");
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
