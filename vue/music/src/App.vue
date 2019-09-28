<template>
  <div id="app">
    <Header></Header>
    <Nav></Nav>
    <router-view></router-view>
    <Play></Play>
  </div>
</template>

<script>
import Header from './components/Header'
import Nav from './components/Nav'
import Play from './pages/Play/Play'
export default {
  components : {Header,Nav,Play}
}
</script>

<style lang="less">
  #app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
</style>
