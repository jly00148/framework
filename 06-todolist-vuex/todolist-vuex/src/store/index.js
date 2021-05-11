//1.引入
import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios'

//2.安装
Vue.use(Vuex)

//3.生成store实例，注意，整个应用只有一个store实例
const store  = new Vuex.Store({
    state:{
        list:[{id:1,task:"vue1 vue vue"},{id:2,task:"react react react1"}]
    },
    getters:{
        total(state){
            return state.list.length
        }
    },
    actions:{
        async loadItem({ commit }){//利用解构赋值,原可写为任意参数,该参数为为store，store下有commit方法
            const result = await axios.get('http://127.0.0.1:3000')
            commit('loadItem',result.data)
        }
    },
    mutations:{
        loadItem(state,payload){
            this.state.list = payload
        },
        addItem(state,payload){
            this.state.list.push(payload)
        },
        delItem(state,payload){
           const list = this.state.list.filter(item=> item.id != payload)
           this.state.list = list
        }
    }
})



//4.导出,在main.js中配制接收
export default store