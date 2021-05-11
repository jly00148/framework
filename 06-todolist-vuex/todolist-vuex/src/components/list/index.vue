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
        <!-- <p>共计：{{total}}</p> -->
    </div>    
</template>

<script>
export default {
    name:'List',
    methods:{
        handDelItem(id){
            console.log(id)
        }
    },
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