<template>
  <div class="banner">
    <div class="swiper-container" ref="banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in list" :key="index">
          <img :src="item.picUrl" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" ref="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  data(){
    return{
      list:[]
    }
  },
  methods:{
    initSwiper(){
      this.banner = new Swiper(this.$refs.banner,{
        autoplay:true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  },
  mounted(){
    // this.initSwiper()
  },
  created(){
    let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&platform=h5&uin=0&needNewCode=1'
    this.$jsonp(url,{
                      
        callbackQuery:'jsonpCallback',
        callbackName : 'jp0'

    })
    .then((data) => {
      this.list = data.data.slider
      this.$nextTick(() => {
        this.initSwiper()
      })
      
    })
  }
}
</script>

<style lang="less" scoped>
@import '../style/index.less';
@import '../../node_modules/swiper/css/swiper.min.css';
.banner{
  width: 100%;
  .h(150);
  > .swiper-container{
    width: 100%;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>