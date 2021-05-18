//1.引入
//现在注销，整个应用store会引入
// import Vue from 'vue';
// import Vuex from 'vuex';

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

//2.安装
//现在注销，整个应用store会引入
// Vue.use(Vuex)


//4.导出,在main.js中配制接收
export default {
    state:state,
    getters:getters,//vuex的计算属性
    actions:actions,
    mutations:mutations
}