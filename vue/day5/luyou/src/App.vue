<template>
  <div id="app">
    这是首页
    <hr>
    <router-link to='/reg'>注册</router-link>
    <router-link to='/login'>登录</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  
};
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
</style>
