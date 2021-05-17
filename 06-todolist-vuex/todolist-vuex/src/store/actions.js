import axios from 'axios';
import { LOADITEM } from './type'

export default  {
        //async loadItem({ commit }){//commit是一个对象里面有commitf方法。利用解构赋值,原可写为任意参数,该参数为为store，store下有commit方法
        async [LOADITEM]({ commit }){//同上
            const result = await axios.get('http://127.0.0.1:3000')
            commit('loadItem',result.data)//第一个参数是type类型，第二个是payload,commit之后走到mutation,通过mutation改变数据
        }
}