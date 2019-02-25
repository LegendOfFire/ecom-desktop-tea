<template>
  <div class="home">
    <StartUp msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import StartUp from '@/components/StartUp.vue'

export default {
  name: 'home',
  components: {
    StartUp
  }
}
</script>
