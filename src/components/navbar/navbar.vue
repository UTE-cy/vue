<template lang="html">
  <div class="navwrap" v-show="show">
    <div class="navbg" @click='navHide'></div>
    <ul class="navbar">
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
import Event from '../../js/event'
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    navHide () {
      this.show = false
    }
  },
  created () {
    Event.$on('nav-msg', (msg) => {
      msg === true ? this.show = true : this.show = false
    })
  }
}
</script>

<style lang="scss">
  .navwrap{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    .navbg{
      width: 100%;
      height: 100%;
    }
    .navbar{
      position: absolute;
      left: 0;
      top: 0;
      width: 10rem;
      height: 100%;
      background: blue;
      z-index: 100;
      li{
        font-size: 0.7rem;
        color: #fff;
        line-height: 1.4rem;
        border-bottom: 1px solid red;
      }
    }
  }
</style>
