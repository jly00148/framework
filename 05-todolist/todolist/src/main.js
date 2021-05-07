// 此文件是项目入口文件

import Vue from 'vue'
import App from './App.vue'

//关闭生产环境模式更改提示
Vue.config.productionTip = false

//实例挂载到根组件上，$mount：实例上的$mount方法,d等价以下方法
new Vue({
  render: h => h(App)
}).$mount('#app')


// new Vue({
//   el:'#app',
//   render: h => h(App)
// })