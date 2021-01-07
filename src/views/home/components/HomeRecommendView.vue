<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item ,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeRecommendView",
        props: {
            recommends: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped>
  .recommend {
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 12px;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }

  .recommend-item {
    flex-shrink: 1;
  }
  .recommend-item img{
    width: 85px;
    height: 85px;
    margin-bottom: 10px;
  }
</style>
