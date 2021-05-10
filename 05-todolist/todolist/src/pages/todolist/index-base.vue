<!--1.模板 -->
<template>
    <div class="todolist">
        {{msg}} todolist page
        <div class="head">
            <input type="text" v-model="task" />
            <button @click="addItem">提交</button>
        </div>
        <transition-group class="list" tag="ul" name="fade" appear>
            <li class="item"
                v-for="item in list"
                :key="item.id"
                @click="delItem(item.id)"
            >
                {{item.task}}
            </li>
        </transition-group>
        <p>共计：{{total}}</p>
    </div>
</template>

<!-- 2.逻辑 -->
<script>
    import axios from 'axios';

    export default {
        data(){
            return {
                msg:'hello',
                list:[
                    {id:1,task:'learn react'},
                    {id:2,task:'learn vue'}
                ],
                task:''
            }
        },
        methods:{
            addItem(){
                //禁止输入空格空字符串
                if(this.task == ''){
                    return
                }
                this.list.push({
                    id:Date.now(),
                    task:this.task,
                })
                this.task = ''
            },
            delItem(id){
                const list = this.list.filter(item=>item.id !=id)
                this.list = list
            }
        },
        async mounted(){
            const result = await axios.get('http://127.0.0.1:3000')
            this.list = result.data
        },
        computed:{
            total(){
                return this.list.length
            }
        }
    }
</script>


<!-- 3.样式 -->
//scoped选项会为当前的组件所有的标签动态生成一个属性，然后用该属性作为属性选择器来保护当前页面，样式只对当前组件样式有效，不加scoped属性会修改其他组件的样式
<style lang="less" scoped>
    @priary-color:#f0f;
    div{
        color: @priary-color;
    }
    .todolist{
        width: 300px;
        height: 100px;
        margin: 100px auto;
    }
    .fade-enter-active,.fade-leave-active{
        transition: opacity 0.5s;
    }
    .fade-enter,.fade-leave-to{
        opacity: 0;
    }
</style>