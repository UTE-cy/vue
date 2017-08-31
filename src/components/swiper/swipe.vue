<template lang="html">
  <mt-swipe :auto="4000">
    <mt-swipe-item class="slide1"><img :src="rootPath+'cc.jpg'" alt=""></mt-swipe-item>
    <mt-swipe-item class="slide2"><img :src="rootPath+'cc.jpg'" alt=""></mt-swipe-item>
    <mt-swipe-item class="slide3"><img :src="rootPath+'cc.jpg'" alt=""></mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  data () {
    return {
      rootPath: '/static/'
    }
  }
}
</script>

<style lang="scss">
  .mint-swipe {
    height: 7rem;
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 20px;
  }
  .mint-swipe-item {
    line-height: 7rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .slide1 {
    background-color: #0089dc;
    color: #fff;
  }
  .slide2 {
    background-color: #ffd705;
    color: #000;
  }
  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }
</style>
