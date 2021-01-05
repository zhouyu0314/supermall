<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="tab-bar-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="tab-bar-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="tab-bar-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="tab-bar-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="tab-bar-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="tab-bar-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="tab-bar-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="tab-bar-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="tab-bar-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="tab-bar-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="tab-bar-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="tab-bar-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
    import TabBar from "components/common/tabBar/TabBar";
    import TabBarItem from "components/common/tabBar/TabBarItem";

    export default {
        name: "MainTabBar",
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>
