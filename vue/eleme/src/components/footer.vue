<template>
  <div class="footer">
    <ul class="nav">
      <router-link tag='li' to='/homePage' active-class='active'>首页</router-link>
      <router-link tag='li' to='/find' active-class='active'>发现</router-link>
      <router-link tag='li' to='/order' active-class='active'>订单</router-link>
      <router-link tag='li' to='/login' active-class='active'>我的</router-link>
    </ul>
  </div>
</template>

<script>

export default {
}
</script>


<style lang="less" scoped>
.footer{
  width: 100%;
  height: 70px;
  > .nav{
    width: 100%;
    height: 100%;
    display: flex;
    > li{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>