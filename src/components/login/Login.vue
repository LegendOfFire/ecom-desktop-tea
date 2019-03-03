<template>
    <div>
        <h3>{{ msg }}</h3>
        <el-button type="primary" round>
        <router-link :to="{name: 'settings'}">Settings</router-link>
        </el-button>
        <el-button type="success" round>
        <router-link :to="{name: 'navigation'}">Login</router-link>
        </el-button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            msg: 'This is Login Page.'
        }
    }
}
</script>

<style lang="less" scoped>



</style>
