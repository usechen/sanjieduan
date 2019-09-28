<template>
  <div class="login">
    <div class="logo">
      <img src="/favicon.ico" alt="没有图片">
    </div>
    <loginShuru v-if='panduan'></loginShuru>
  </div>
</template>

<script>
import loginShuru from '../components/login_shuru'
export default {
  data(){
    return{
      panduan:true
    }
  },
  components:{
    loginShuru
  }
}
</script>


<style lang="less" scoped>
.login{
  width: 100%;
  height: 100%;
  background: yellow;
  flex: 1;
  overflow: auto;
  > .logo {
    margin-top: 20px;
    text-align: center;
    > img{
      width: 100px;
    }
  }
}
</style>
