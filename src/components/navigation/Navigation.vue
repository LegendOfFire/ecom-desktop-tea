<template>
    <div>
        <h3>{{ msg }}</h3>
        <el-button type="primary" round>
            <router-link :to="{name: 'functions'}">Functions</router-link>
        </el-button>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            msg: 'This is Navagation page.'
        }
    }
}
</script>

<style lang="less" scoped>

</style>
