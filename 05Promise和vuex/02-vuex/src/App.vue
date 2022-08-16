<template>
  <div id="app">
    <h2>{{ $store.state.counter }}</h2>
    <button @click="updateInfo()">按钮</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    updateInfo() {
      // this.$store.commit('updateInfo')//不同步的方法

      // this.$store.dispatch("aUpdateInfo", {
      //   message: "我是携带的信息",
      //   success: () => {
      //     console.log("里面已经完成了");
      //   }
      // });

      this.$store.dispatch("aUpdateInfo", "我是携带的信息");
    }
  }
};
</script>
<style>
@import "./assets/css/base.css";
</style>
