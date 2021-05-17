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
    import { mapState,mapGetters,mapActions,mapMutations }  from 'vuex';
    import { LOADITEM } from '../../store/type'

    export default {
        name:'List',
        //初始化数据,来自非服务器返回数据
        computed:{
            // ...mapState(['list']) //方法同以下
           ...mapState({
               list:state=>state.list

           }),
            // ...mapGetters(['total']) ,计算总条数
            ...mapGetters({
                total:'total'
            })
        },

        //从服务返回的数据
        methods:{
            // ...mapActions(['loadItem']),//与下相同
            // ...mapActions([LOADITEM]), //与上下相同，LOADITEM是类型，对上的修改
            ...mapActions({
                loadItem:LOADITEM
            }),
            //删除
            ...mapMutations({
                delItem:'delItem'
            }),
            handDelItem(id){
                this.delItem(id)
                // this.$store.commit('delItem',id)//之前/之前的写法
            }
        },
        //组件挂载完毕。
        mounted(){
            // this.$store.dispatch('loadItem')//发送dispatch到actions。注销用辅助函数mapActions
            this.loadItem()
        }    
    }
    // v-for="item in this.$store.state.list"    可以直接获取store中list数据
    // {{this.$store.getters.total}}获取总计数

</script>

<style lang="less" scoped>
    .fade-enter-active,.fade-leave-active{
        transition: opacity 0.5s;
    }
    .fade-enter,.fade-leave-to{
        opacity: 0;
    }
</style>    