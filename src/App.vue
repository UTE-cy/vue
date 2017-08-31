<template>
  <div id="app">
    <headTop></headTop>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import headTop from './components/header/head'
import navbar from './components/navbar/navbar'
export default {
  name: 'app',
  components: {
    'headTop': headTop,
    'navbar': navbar
  }
}
</script>

<style lang="scss">
@import './style/common';
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
  padding-top: 1.95rem;
}
</style>
