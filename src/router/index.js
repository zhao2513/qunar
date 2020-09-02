import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
		  path: '/',
		  name: 'Home',
		  component: Home
    },{
		  path: '/city',
		  name: 'City',
		  component: City
    },{
		  path: '/detail/:id',
//动态路由，路径前面必须是detail，
//当点击时动态的把id的数据传入id的参数中
		  name: 'Detail',
		  component: Detail
    }],
      scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
