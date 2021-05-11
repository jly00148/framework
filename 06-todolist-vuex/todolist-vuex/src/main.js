// 此文件是项目入口文件

import Vue from 'vue'
import App from './App.vue'

// router实例
import router from './router/index';

//关闭生产环境模式更改提示
Vue.config.productionTip = false

///引入store
import store from './store/index'

//实例挂载到根组件上，$mount：实例上的$mount方法,d等价以下方法,根组件App挂载到组件#app2上
new Vue({
  router:router,///配制router
  store,//配制store,为了所有组件都能拿到数据
  render: h => h(App)
}).$mount('#app2')

// new Vue({
//   el:'#app',
//   render: h => h(App)
// })