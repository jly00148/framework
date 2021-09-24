<!--1.模板 -->
<template>
    <div class="todolist">
        {{msg}} todolist page
        <div class="wrap">
            <input type="text" v-model="task">
            <button @click="add()">添加</button>
            <ul>
                <li v-for = "(item,index) in items"
                    @click="del(index)"
                    :key='index'
                >
                    {{item}}
                </li>
            </ul>
            <p>{{total}}</p>
        </div>
    </div>
</template>

<!-- 2.逻辑 -->
<script>
    export default {
        data(){
            return {
                msg:'hello',
                items:[
                    'crossfire',
                    'lol'
                ],
                task:''
            }
        },
        methods:{
            add(){
                if(this.task == ''){
                    return
                }
                this.items.push(this.task)
                this.task = ''
            },
            del(index){
                this.items.splice(index,1);
            }
        },
        computed:{
            total(){
                return this.items.length
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
    .wrap{
            width: 600px;
            height: 400px;
            border: 1px solid #000;
            margin: 100px auto;
            box-sizing: border-box;
            padding: 10px;

        }
        li{
            list-style: none;
            height: 40px;
            line-height: 40px;
            border: 1px dotted #000;
            margin-top: 10px;
            padding: 10px;
        }

</style>