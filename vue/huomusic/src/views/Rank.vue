<template>
  <div class="rank">
    <div class="bscroll" ref="bs">
      <ul class='bscroll-container'>
        <li v-for="(item,index) in list" :key='index'>
          <!-- {{item.topTitle}} -->
          <div class="imgbox"><img :src="item.picUrl" alt=""></div>
          <ul class="songlist">
            <li v-for="(songlist,index) in item.songList" :key="index">
              <span>{{(index+1)}} </span>
              <span>{{songlist.songname}}-{{songlist.singername}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BS from "better-scroll";
export default {
  data(){
    return{
      list:[]
    }
  },
  methods:{
    initData(){
      let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&uin=0&needNewCode=1&platform=h5'
      this.$jsonp(url,{
        callbackQuery:'jsonpCallback',
        callbackName:'jp0'
      })
      .then((data) => {
        this.list = data.data.topList
      })
    },
  },
  created(){
    this.initData()
  },
  mounted(){
    this.bs = new BS(this.$refs.bs)
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
  left: 0;
  right: 0;
  background: @bg;
  padding-bottom: 20px;
  > .bscroll{
    width: 100%;
    height: 100%;
    overflow: hidden;
    > .bscroll-container{
      > li{
        width: 100%;
        padding:20px 20px 0 20px;
        box-sizing: border-box;
        .h(120);
        display: flex;
        font-size: 12px;
        > .imgbox{
          .w(100);
          .h(100);
          > img{
            width: 100%;
            height: 100%;
          }
        }
        > .songlist{
          flex: 1;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #333;
          min-width:0;
          > li{
            line-height: 26px;
            color: hsla(0,0%,100%,.3);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>