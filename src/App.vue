<template>
  <div id="app">
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// import StartUp from './components/StartUp.vue'
// import Login from './components/login/Login.vue'

export default {
  name: 'app',
  components: {
    // StartUp,
    // Login
  },

  created() {
    this.$router.push('start');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
