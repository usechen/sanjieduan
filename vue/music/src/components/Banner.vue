<template>
   <div class="swiper-container" ref='banner'>
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for='(item,index) in list' :key='index'>
           <img :src="item.picUrl" alt="">
        </div>
        <div class="swiper-pagination" ref='pagination'></div>
    </div>
</div>
</template>

<script>
import Swiper from 'swiper'
import jsonp from 'jsonp'
export default {
   data(){
      return{
         list : []
      }
   },
   methods:{
      initSwiper(){
         this.banner1 = new Swiper(this.$refs.banner,{
            loop: true,
            pagination:{ el: '.swiper-pagination'}
         })
      }
   },
   created(){
      let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&platform=h5&uin=0&needNewCode=1'
      jsonp(url,{param:'jsonpCallback'},(err,data) => {
         this.list = data.data.slider
         this.$nextTick(() => {
            this.initSwiper()
         })
      })
   },
   mounted(){
      // this.initSwiper()
   }
}
</script>

<style lang="less" scoped>
@import '../style/index.less';
@import '../../node_modules/swiper/dist/css/swiper.min.css';
.swiper-container{
   width: 100%;
   height: 150px;
   img{
      width: 100%;
      height: 100%;
   }
}
</style>