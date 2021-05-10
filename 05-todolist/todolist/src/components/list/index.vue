<template>
    <div>
        <transition-group class="list" tag="ul" name="fade" appear>
            <li class="item"
                v-for="item in list"
                :key="item.id"
                @click="handDelItem(item.id)"
            >
                {{item.task}}
            </li>
        </transition-group>
        <p>共计：{{total}}</p>
    </div>    
</template>

<script>
export default {
    name:'List',
    props:{
        list:{
            type:Array,
            default:[]
        },
        delItem:{
            type:Function
        }
    },
    methods:{
        handDelItem(id){
            this.delItem(id)
        }
    },
    computed:{
        total(){
            return this.list.length;
        }
    }
}
</script>


<style lang="less" scoped>
    .fade-enter-active,.fade-leave-active{
        transition: opacity 0.5s;
    }
    .fade-enter,.fade-leave-to{
        opacity: 0;
    }
</style>    