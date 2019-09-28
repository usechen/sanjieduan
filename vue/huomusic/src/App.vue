<template>
  <div id="app">
    <Header></Header>
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './components/Header'
import Nav from './components/Nav'
export default {
  components:{Header,Nav}
}
</script>
<style lang="less">
@import './style/index.less';
#app{
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

</style>
