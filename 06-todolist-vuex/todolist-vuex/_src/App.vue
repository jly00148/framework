<!-- 整个页面的根组件 -->

<!-- 模板 -->

<template>
  <div id="app1">
    <!-- <Home></Home>
    <div>root</div> -->
    <nav>
        <router-link to="/home">home</router-link>
        <router-link to="/todolist">todolist</router-link>
    </nav>
    <div>
      <!-- 路由出口 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<!-- 逻辑 -->
<script>
  import Home from './pages/home/index'
  import Todolist from './pages/todolist/index'

  //导出当前组件配置:
  export default {
    components:{
      //注册组件
      Home:Home,
      Todolist:Todolist
    }
  }
</script>


<!-- 样式 -->