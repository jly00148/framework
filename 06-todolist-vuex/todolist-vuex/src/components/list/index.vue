<template>
    <div>
        <transition-group class="list" tag="ul" name="fade" appear>
            <li
               v-for="item in this.list"
               :key="item.id"
                @click="handDelItem(item.id)"
            >
                {{item.task}}
            </li>
        </transition-group>
        <p>共计：{{this.total}}</p>
    </div>    
</template>

<script>
// 辅助函数mapState，把store中state映射过来 ,v-for="item in this.$store.state.list"  改为 v-for="item in this.list"
// 辅助函数mapGetters，把getters中映射过来 ,共计：{{this.$store.getters.total}}  改为 {{ this.total }}
    import { mapState,mapGetters,mapActions }  from 'vuex';

    export default {
        name:'List',
        methods:{
            ...mapActions(['loadItem']),
            handDelItem(id){
                this.$store.commit('delItem',id)
            }
        },
        mounted(){
            // this.$store.dispatch('loadItem') 注销用辅助函数mapActions
            this.loadItem()
        },
        computed:{
            // ...mapState(['list']) //方法同以下
           ...mapState({
               list:state=>state.list

           }),
            // ...mapGetters(['total'])
            ...mapGetters({
                total:'total'
            })
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