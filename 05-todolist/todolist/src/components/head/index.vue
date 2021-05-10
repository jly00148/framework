<template>
    <div class="head">
        <input type="text" v-model="task" />
        <button @click="handAddItem">提交</button>
    </div>
</template>

<script>
    export default {
        name:'Head',
        props:{
            addItem:{
                type:Function
            }
        },
        data(){
            return{
                task : ''
            }
        },
        methods:{
            handAddItem(){
                this.addItem(this.task)
                this.task = ''
            }
        }
    }
</script>
