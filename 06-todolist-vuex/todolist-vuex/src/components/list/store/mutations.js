import { LOADITEM } from './type'

export default {
        [LOADITEM](state,payload){//state是state.js中的数据，payload是commit方法第二个参数
         //this是整个应用store。
        // console.log(this.state.todolist.list == state.list) //true
        // this.state.list = payload
            state.list = payload
        },
        addItem(state,payload){
            state.list.push(payload)
        },
        delItem(state,payload){
           const list = state.list.filter(item=> item.id != payload)
           state.list = list
        }
}