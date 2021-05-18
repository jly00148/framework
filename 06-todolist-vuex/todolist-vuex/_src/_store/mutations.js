import { LOADITEM } from './type'
export default {
        [LOADITEM](state,payload){//state是state.js中的数据，payload是commit方法第二个参数
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
