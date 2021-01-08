<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper ref="hSwiper" :banners="banners"/>
    <home-recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行','新款','精选']" class="tab-control"/>
<goods-list :goods="goods['pop'].list"/>
  </div>

</template>

<script>
    import NavBar from "components/common/navBar/NavBar";
    import TabControl from "components/content/tabControl/TabControl";
    import GoodsList from "components/content/goods/GoodsList";

    import HomeSwiper from './components/HomeSwiper'
    import HomeRecommendView from "./components/HomeRecommendView";
    import FeatureView from "./components/FeatureView";


    import {getHomeMultiData, getHomeGoods} from "views/home/api/home";

    export default {
        name: "Home",
        components: {
            NavBar,
            TabControl,
            GoodsList,
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
