<template>
  <div>
    <h2>{{message}}</h2>
    <button>按钮</button>
    <h2>{{name}}</h2>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'Hello Webpack',
      name: 'touchingwang',
    }
  },
  methods: {},
}
</script>
<style scoped>

</style>
