<template>
    <div>
        <h3>{{ msg }}</h3>
        <el-button type="success" round @click="onClick">
            OK
        </el-button>
    </div>
</template>

<script>
export default {
    name: 'Settings',
    data() {
        return {
            msg: 'This is Settings Page.'
        }
    },

    methods: {
        onClick() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="less" scoped>

</style>
