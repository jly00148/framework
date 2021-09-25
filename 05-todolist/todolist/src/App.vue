<template>
  <div>
    <nav>
        <router-link to="/home">home</router-link>|
        <router-link to="/todolist">todolist</router-link>
    </nav>
    <div>
      <!-- 路由出口 -->
      <router-view></router-view>
  </div> 
  </div>
</template>

<script>

</script>