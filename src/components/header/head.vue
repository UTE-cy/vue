<template lang="html">
  <header id="head_top">
    <ul id="nav_top" class="nav_top">
      <router-link class="router-link" to="/home" exact tag="li"><a>应用</a></router-link>
      <router-link class="router-link" to="/terrace" exact tag="li"><a>平台</a></router-link>
      <router-link class="router-link" to="/arvr" exact tag="li"><a>ARVR系统</a></router-link>
      <router-link class="router-link" to="/about" exact tag="li"><a>关于我们</a></router-link>
      <li @click="navShow">list</li>
    </ul>
  </header>
</template>

<script>
import Event from '../../js/event'
export default {
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    navShow () {
      Event.$emit('nav-msg', this.isShow)
    }
  }
}
</script>

<style lang="scss">
  @import '../../style/mixin';
  #head_top{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 80;
    background-color: $blue;
    // position: fixed;
    // z-index: 100;
    // left: 0;
    // top: 0;
    @include wh(100%, 1.95rem);
  }
  .nav_top{
    width: 100%;
    height: 100%;
    li{
      width: 20%;
      float: left;
      text-align: center;
      @include sc(0.65rem, #fff);
      line-height: 1.95rem;
    }
  }
</style>
