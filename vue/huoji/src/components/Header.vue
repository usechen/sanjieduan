<template>
  <div class="header">
    <h2>这里是头部</h2>
  </div>
</template>

<script>

export default {
  
}
</script>

<style lang="less" scoped>
@import '../style/index.less';
.header{
  width: 100%;
  .h(40);
  background: @bg;
  color: @cl;
  font-size: @fs;
  text-align: center;
  
}
</style>