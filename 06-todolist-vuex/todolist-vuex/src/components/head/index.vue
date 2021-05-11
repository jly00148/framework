<template>
    <div class="head">
        <input type="text" v-model="task" />
        <button @click="handAddItem">提交</button>
    </div>
</template>

<script>
    import { mapMutations }  from 'vuex';
    export default {
        name:'Head',
        data(){
            return{
                task : ''
            }
        },
        methods:{
            ...mapMutations(['addItem']),
            handAddItem(){
                if(this.task == ''){
                    return
                }
                const payload = {
                    id:Date.now(),
                    task:this.task
                }

                // this.$store.commit('addItem',payload) // 注销使用辅助函数
                this.addItem(payload)
                this.task = ''
            }
        },
    }
</script>
