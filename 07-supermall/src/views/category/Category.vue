<template>
  <div class="wrapper">
    <div class="content">
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      />
      <goods-list :goods="showGoods" />
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "Category",
  mounted() {
    new BScroll(document.querySelector(".wrapper"), {});
  },
};
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: pink;
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>
