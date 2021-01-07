<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper ref="hSwiper" :banners="banners"/>
    <home-recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行','新款','精选']" class="tab-control"/>
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
    </ul>
  </div>

</template>

<script>
    import NavBar from "components/common/navBar/NavBar";
    import TabControl from "components/content/tabControl/TabControl";

    import HomeSwiper from './components/HomeSwiper'
    import HomeRecommendView from "./components/HomeRecommendView";
    import FeatureView from "./components/FeatureView";

    import {getHomeMultiData, getHomeGoods} from "views/home/api/home";

    export default {
        name: "Home",
        components: {
            NavBar,
            TabControl,
            HomeSwiper,
            HomeRecommendView,
            FeatureView,

        },
        created() {
            this.initHomeMultiData();
            this.initHomeGoods('pop');
            this.initHomeGoods('new');
            this.initHomeGoods('sell');
        },
        data() {
            return {
                banners: [],//轮播图
                recommends: [],
                goods: {
                    pop: {page: 0, list: []},
                    new: {page: 0, list: []},
                    sell: {page: 0, list: []}
                }
            }
        },
        methods: {
            initHomeMultiData() {
                getHomeMultiData().then(res => {
                    this.banners = res.data.banner.list;
                    this.recommends = res.data.recommend.list;
                })
            },
            initHomeGoods(type) {
                let params = {
                    type: type,
                    page: this.goods[type].page + 1
                };
                getHomeGoods(params).then(res => {
                    this.goods[type].list.push(...res.data.list);
                    this.goods[type].page += 1;
                })
            }
        }
    }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;

    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
