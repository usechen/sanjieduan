<template>
<div>

  <transition name="hehe">
    <div class="demo1" v-if="change">
      jkljkljkljkljlk
      
    </div>
  </transition>
    <button @click='gaibian'>改变</button>
  
</div>
  
</template>

<script>

export default {
  data(){
    return{
      change:true
    }
  },
  methods:{
    gaibian(){
      console.log(111)
      this.change = !this.change
    }
  }
}
</script>

<style lang="less">
.demo1{
  width: 200px;
  height: 200px;
  background: #ff00ff;
}
.hehe-enter{
  opacity: 0;
}
.hehe-enter-to{
  opacity: 1;
}
.hehe-enter-active{
  transition: all 3s;
}
</style>