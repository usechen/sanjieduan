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
  .h(44);
  background: @bg;
  color: @cl;
  text-align: center;
  > h2{
    font-size: 18px;
    line-height: 44px;
  }
}
</style>