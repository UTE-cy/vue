import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/index/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // component: Home,
      redirect: '/home'   // 重定向 ！！
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
