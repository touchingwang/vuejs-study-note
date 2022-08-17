<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/icon01.png" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/icon01_active.png"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/icon02.png" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/icon02_active.png"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/icon03.png" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/icon03_active.png"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/icon04.png" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/icon04_active.png"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped></style>
