<template>
  <div id="app">
    <Header></Header>
    
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
export default {
  components : {Header,Nav}
}
</script>

<style lang="less">
#app{
  width:100%;
  height: 100%;
  display: flex;
  background: red;
  flex-direction: column;
}
</style>
