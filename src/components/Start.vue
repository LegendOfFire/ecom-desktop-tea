<template>
  <div>
    <h3>{{ msg }}</h3>
    <router-link :to="{name: 'login'}">Click to Login</router-link>
  </div>
</template>

<script>
export default {
  name: 'Start',
  data() {
    return {
      msg: 'Welcome to Ecom Desktop Teaching Application!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
</style>
