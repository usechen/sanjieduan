<template>
  <div id="app">
    
    <demo1></demo1>
  </div>
</template>

<script>
import addlist from './vuextodolist/addlist'
import dislist from './vuextodolist/dislist'
import demo1 from './transition/transition'
export default {
  components:{demo1}
}
</script>

<style lang="less">
  #app{
    font-size: 30px;
  }
</style>
