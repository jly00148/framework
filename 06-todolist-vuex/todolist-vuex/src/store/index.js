//1.引入
import Vue from 'vue';
import Vuex from 'vuex';

//2.安装
Vue.use(Vuex)

//3.生成store实例，注意，整个应用只有一个store实例
const store  = new Vuex.Store({
    state:{
        list:[{id:1,task:"vue1 vue vue"},{id:2,task:"react react react1"}]
    }
})

//4.导出,在main.js中配制接收
export default store