<template>
  <div class="header">
    这是头部区域
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
  @import '../style/index.less';
  .header{
    background: @bc-black;
    .w(375);
    .h(44);
    font-size: @fs-l;
    color: @fc-yellow;
    text-align: center;
    .l_h(44);
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
