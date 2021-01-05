<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center" >购物街</div>
    </nav-bar>
    <home-swiper ref="hSwiper" :banner="banner"></home-swiper>
  </div>

</template>

<script>
    import NavBar from "components/common/navBar/NavBar";
    import HomeSwiper from './components/HomeSwiper'
    import {getHomeMultiData} from "views/home/api/home";

    export default {
        name: "Home",
        components: {
            NavBar,HomeSwiper
        },
        created() {
            this.initHomeMultiData();
        },
        data(){
            return{
                banner:[],//轮播图
                recommend:[],
            }
        },
        methods:{
            initHomeMultiData(){
                getHomeMultiData().then(res =>{
                    console.log(res.data);
                    this.banner = res.data.banner.list;
                    this.recommend = res.data.recommend.list;
                })
            }
        }
    }
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>
