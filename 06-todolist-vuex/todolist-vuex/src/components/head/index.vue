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
                console.log(this.task)
                this.task = ''
            }
        }
    }
</script>
