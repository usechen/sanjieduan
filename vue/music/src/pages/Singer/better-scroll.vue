<template>
   <div class="singer">
      <div class="wrapper" ref='bs'>
         <ul class="content">
            <li v-for='(item,index) in 30' :key='index'>{{item}}</li>
         </ul>
      <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
      </div>
   </div>
</template>

<script>
import BS from 'better-scroll'


export default{
   mounted(){
      this.bs = new BS(this.$refs.bs)
   },
}
</script>

<style lang="less" scoped>
@import '../../style/index.less';
.singer{
   width: 100%;
   position: fixed; 
   top: 88px;
   bottom: 0;
   .wrapper{
      width: 100%;
      height: 100%;
      overflow: hidden;
   }
}
</style>