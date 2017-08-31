<template lang="html">
  <div class="home">
    <swiperbar></swiperbar>

  </div>
</template>

<script>
import Swiperbar from '../swiper/swipe'

export default {
  components: {
    'swiperbar': Swiperbar
  }
}
</script>

<style lang="scss">
  .home{
    width: 100%;
    height: 1500px;
    background: #333;
  }
</style>
