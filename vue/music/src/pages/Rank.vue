<template>
   <div class="rank">
      排行页
   </div>
</template>

<script>
import  jsonp from  'jsonp'
export default {
   methods:{
      initData(){
         let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&uin=0&needNewCode=1&platform=h5'
         jsonp(url,{param:'jsonpCallback'},(err,data) => {
            console.log(err,data)
         })
      },
      initjiekou(){
         let url = 'https://api.map.baidu.com/location/ip'
         jsonp
      }
   },
   created(){
      this.initData()
   }
}
</script>

<style lang="less" scoped>
@import '../style/index.less';
.rank{
   width: 100%;
   position: fixed;
   top: 88px;
   bottom: 0;
   box-sizing: border-box;
   font-size: 14px;
   overflow: hidden;
}
</style>