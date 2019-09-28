<template>
  <div class="nav">
    <ul>
      <router-link tag='li' to='/recommend' active-class='active'><span>推荐</span></router-link>
      <router-link tag='li' to='/singer' active-class='active'><span>歌手</span></router-link>
      <router-link tag='li' to='/rank' active-class='active'><span>排行</span></router-link>
      <router-link tag='li' to='/search' active-class='active'><span>搜索</span></router-link>
    </ul>
  </div>
</template>

<script>

export default {
  
}
</script>

<style lang="less" scoped>
@import '../style/index.less';
.nav{
  width: 100%;
  .h(44);
  background: @bg;
  > ul{
    width: 100%;
    height: 100%;
    display: flex;
    > li{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: hsla(0,0%,100%,.5);
    }
    > .active{
      color: @cl;
      > span{
        display: block;
        padding-bottom: 5px;
        border-bottom: 2px solid @cl;
      }
    }
  }
}
</style>