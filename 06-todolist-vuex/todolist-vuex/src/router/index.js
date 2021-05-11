import Vue from 'vue'
import VueRouter from 'vue-router'

//1 注册VueRouter
Vue.use(VueRouter)

//2 引入组件
import Home from '../pages/home/index'
import Todolist from '../pages/todolist/index'


//3 定义路由
const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/todolist',
    component: Todolist
  }  

]
//4 根据路由创建router实例
const router = new VueRouter({
  mode:'history',//仅添加属性即可为h5路由
  routes
})

//导出路由
export default router
