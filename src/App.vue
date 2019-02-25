<template>
  <div id="app">
    <StartUp msg="Welcome to ECom Desktop Teaching Application"/>
  </div>
</template>

<script>
import StartUp from './components/StartUp.vue'

export default {
  name: 'app',
  components: {
    StartUp
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
