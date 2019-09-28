<template>
  <div class="recommend">
    <Banner></Banner>
    <div class="listnav">
      <h2>热门歌单推荐</h2>
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <div class="imgbox">
            <img :src="item.imgurl" alt="">
          </div>
          <div class="textbox">
            <h2>{{item.creator.name}}</h2>
            <p>{{item.dissname}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner'
export default {
  data(){
    return{
      list:[]
    }
  },
  components:{Banner},
  methods:{
    initData(){
      let url = '/music/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.34862805318954604'
      this.$axios.get(url)
      .then((data) => {
        this.list = data.data.list
      })
    }
  },
  created(){
    this.initData()
  },
}
</script>

<style lang="less" scoped>
@import '../style/index.less';
.recommend{
  position: fixed;
  top: 88px;
  bottom: 0;
  left: 0;
  right: 0;
  background: #222;
  overflow: auto;
  > .listnav{
    width: 100%;
    color: #ffffff;
    > h2{
      width: 100%;
      .h(65);
      font-size: 14px;
      color: #ffcd32;
      text-align: center;
      line-height: 65px;
    }
    > ul{
      width: 100%;
      > li{
        width: 100%;
        .h(80);
        box-sizing: border-box;
        padding: 0 20px 20px;
        display: flex;
        > .imgbox{
          .w(60);
          .h(60);
          padding-right: 20px;
          > img{
            width: 100%;
            height: 100%;
          }
        }
        > .textbox{
          font-size: 14px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          > h2{
            .h(20);
            padding-bottom: 10px;
            line-height: 20px;
          }
          > p{
            line-height: 20px;
            color: hsla(0,0%,100%,.3);
          }
        }
      }
    }
  }
}
</style>