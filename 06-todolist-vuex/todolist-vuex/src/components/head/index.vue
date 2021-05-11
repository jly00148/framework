<template>
    <div class="head">
        <input type="text" v-model="task" />
        <button @click="handAddItem">提交</button>
    </div>
</template>

<script>
    export default {
        name:'Head',
        data(){
            return{
                task : ''
            }
        },
        methods:{
            handAddItem(){
                if(this.task == ''){
                    return
                }
                const payload = {
                    id:Date.now(),
                    task:this.task
                }

                this.$store.commit('addItem',payload)

                this.task = ''
            }
        },
    }
</script>
