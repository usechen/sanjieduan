<template>
  <div class="box">
    <ul class="nav">
      <router-link tag='li' to='/recommend' active-class='active'>推荐</router-link>
      <router-link tag='li' to='/singer' active-class='active'>歌手</router-link>
      <router-link tag='li' to='/rank' active-class='active'>排行</router-link>
      <router-link tag='li' to='/search' active-class='active'>搜索</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  }
}
</script>

<style scoped lang="less">
@import '../style/index.less';
.box{
  width: 100%;
  .h(44);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 44px;
  left: 0;
  .nav{
  width: 100%;
  .h(44);
  background: @bc-black;
  font-size: @fs-l;
  color: @fc-white5;
  display: flex;
  position: fixed;
  top: 44px;
  left: 0;
    > li{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .active{
        color: @fc-yellow;
    }
  }
}


</style>
