<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link> -->

    <!-- <button @click="lickToHome">首页</button>
    <button @click="lickToAbout">关于</button> -->

    <router-link to="/home" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <router-link :to="/user/+userId" replace>用户</router-link>
    <!-- <router-link to="/profile" replace>档案</router-link> -->
    <router-link :to="{path: '/profile',
      query: {name:'why',age:18,height:1.88}}">
      档案
    </router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi',
      imgURL: 'http://www.baidu.com'
    }
  },
  methods: {
    lickToHome() {
      this.$router.push('/home')
    },
    lickToAbout() {
      this.$router.push('/about')
    },
  }
}
</script>

<style>
.active{
  color: blueviolet ;
}
</style>
