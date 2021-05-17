//1.引入
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

//2.安装
Vue.use(Vuex)

//3.生成store实例，注意，整个应用只有一个store实例
const store  = new Vuex.Store({
    state:state,
    getters:getters,//vuex的计算属性
    actions:actions,
    mutations:mutations
})



//4.导出,在main.js中配制接收
export default store