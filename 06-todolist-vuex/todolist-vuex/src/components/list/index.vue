<template>
    <div>
        <transition-group class="list" tag="ul" name="fade" appear>
            <li
                v-for="item in this.$store.state.list"
               :key="item.id"
                @click="handDelItem(item.id)"
            >
                {{item.task}}
            </li>
        </transition-group>
        <p>共计：{{this.$store.getters.total}}</p>
    </div>    
</template>

<script>
export default {
    name:'List',
    methods:{
        handDelItem(id){
            this.$store.commit('delItem',id)
        }
    },
    mounted(){
        this.$store.dispatch('loadItem')
    }
}
// v-for="item in this.$store.state.list"    可以直接获取store中list数据
// {{this.$store.getters.total}}            获取总计数

</script>


<style lang="less" scoped>
    .fade-enter-active,.fade-leave-active{
        transition: opacity 0.5s;
    }
    .fade-enter,.fade-leave-to{
        opacity: 0;
    }
</style>    