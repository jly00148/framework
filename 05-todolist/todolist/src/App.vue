<!-- 整个页面的根组件 -->

<!-- 模板 -->

<template>
  <div id="app">
    <Home></Home>
    <div>root</div>
  </div>
</template>

<!-- 逻辑 -->
<script>
  import Home from './pages/home/index'

  //导出当前组件配置:
  export default {
    components:{
      Home:Home
    }
  }
</script>


<!-- 样式 -->