<!--1.模板 -->
<template>
    <div class="home">
        {{msg}} home page
    </div>
</template>

<!-- 2.逻辑 -->
<script>
    export default {
        data(){
            return {
                msg:'hello'
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
</style>