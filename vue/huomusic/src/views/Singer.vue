<template>
  <div class="singer">
    <div class="bscroll" ref="bs">
      <ul class="bscroll-container">
        <li v-for="(item,index) in list" :key="index" :ref="item.title">
          <h2>{{item.title}}</h2>
          <ol class="singerNav">
            <li v-for="(items,index) in item.items" :key="index">
              <div class="singerimg">
                <img :src="items.avator" alt="">
              </div>
              <span>{{items.Fsinger_name}}</span>
            </li>
          </ol>
        </li>
      </ul>
    </div>
    <div class="indexlist">
      <ul @touchstart.stop='touchstart'
          @touchmove.stop='touchmove'
          @touchend.stop='touchend'>
        <li v-for="(item,index) in indexList" 
            :key="index"
            @click="sel(item)"
            :class="item===selitem?'selClass':''">
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SinggerData from '../base/SingerData'
import BS from 'better-scroll'
export default {
  data(){
    return{
      list:[],
      selitem:'热',
      touchs:{}
    }
  },
  methods:{
    initData(){
      let url = '/haha/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq'
      this.$axios.get(url)
      .then((data) => {
        this.list = SinggerData.parseData(data.data.list)
      })
    },
    sel(item){
      if(item === '热'){
        item = '热门'
      }
      this.selitem = item
      let el = this.$refs[item][0]
      this.bs.scrollToElement(el)
    },
    getHeight(){
      let arr = [0]
      let el = this.$refs
      for (const key in el) {
        if (key !== '热门' && key !== 'bs') {
          arr.push(el[key][0].offsetTop)
        }
      }
      return arr
    },
    touchstart(e){
      let arr = this.indexList
      let startY = e.touches[0].screenY
      this.touchs.startY = startY
      for(let i = 0;i < arr.length;i++){
        if(arr[i] === e.path[0].innerText){
          this.touchs.startIndex = i
        }
      }
    },
    touchmove(e){
      let moveY = e.touches[0].screenY - this.touchs.startY
      let moveIndex = Math.ceil(moveY / 18)
      let index = this.touchs.startIndex + moveIndex
      let arr = this.indexList
      arr = arr.map((item) => {
        if(item === "热"){
          item = "热门"
        }
        return item
      })
      if(index < 0 || index >= this.indexList.length){
        return false
      }
      if(index === 0){
        this.selitem = "热"
      }else{
        this.selitem = arr[index]
      }
      let el = this.$refs[arr[index]][0]
      this.bs.scrollToElement(el)
    },
    touchend(){
      console.log('抬起')
    },
  },
  computed:{
    indexList(){
      let list = []
      this.list.forEach((item) => {
        if(item.title === '热门'){
          list.push('热')
        }else{
          list.push(item.title)
        }
      })
      return list
    }
  },
  created(){
    this.initData()
  },
  mounted(){
    this.bs = new BS(this.$refs.bs,{probeType:3,click:true})
    this.bs.on('scroll',(pos) => {
      let y = Math.abs(pos.y)
      let arr = this.getHeight()
      for(let i = 0;i < arr.length;i++){
        if(y >= arr[i] && y <= arr[i + 1] || y>arr[arr.length-1]){
          this.selitem = this.indexList[i]
        }
      }
    })
  }
}
</script>

<style lang="less" scoped>
@import '../style/index.less';
.singer{
  position: fixed;
  top: 88px;
  bottom: 0;
  left: 0;
  right: 0;
  background: #222;
  overflow: hidden;
  color: hsla(0,0%,100%,.5);
  font-size: 14px;
  > .bscroll{
    width: 100%;
    height: 100%;
    > .bscroll-container{
      width: 100%;
      > li{
        width: 100%;
        padding-bottom: 30px;
        > h2{
          width: 100%;
          .h(30);
          background: #333;
          line-height: 30px;
          padding-left: 20px;
          box-sizing: border-box;
          font-size: 12px;
        }
        > .singerNav{
          > li{
            width: 100%;
            box-sizing: border-box;
            padding: 20px 0 0 30px;
            .h(70);
            display: flex;
            align-items: center;
            > .singerimg{
              .w(50);
              .h(50);
              border-radius: 50%;
              overflow: hidden;
              > img{
                width: 100%;
                height: 100%;
              }
            }
            > span{
              display: block;
              color: hsla(0,0%,100%,.5);
              font-size: 14px;
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
  > .indexlist{
    .w(20);
    background: #ff00ff;
    position: absolute;
    top : 50%;
    right: 0;
    transform: translateY(-50%);
    padding: 20px 0;
    border-radius: 10px;
    background: rgba(0,0,0,.3);
    font-size: 12px;
    font-family: Helvetica;
    li{
      text-align: center;
      line-height: 18px;
      .h(18)
    }
    .selClass{
      color: #ff00ff;
    }
  }
}
</style>
