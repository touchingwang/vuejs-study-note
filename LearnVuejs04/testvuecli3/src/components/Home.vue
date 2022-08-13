<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容,哈哈哈</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      path: '/home/news',
    }
  },
  created() {
    console.log('created')
  },
  destoryed() {
    console.log('destoryed')
  },
  activated() {
    console.log('activeted')
    this.$router.push(this.path)
  },
  // deactivated() {
  //   //这种方法不行,我们会发现,当处于不活跃的状态触发的时候,
  //   //这个path已经变成'关于'的path了
  //   console.log(this.$router.path)
  //   console.log('deactiveted')
  //   this.path = this.$router.path
  // },
  beforeRouteLeave(to, from, next) {
    //导航离开该组件的对应路由时调用
    console.log(this.$route.path)
    this.path = this.$route.path
    next()
  },
}
</script>

<style scoped></style>
