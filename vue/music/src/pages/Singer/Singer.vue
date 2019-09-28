<template>
   <div class="singer">
      
      <div class="singer-wrapper" ref="bs">
         <ul class="singer-namelist">
            <li v-for='(item,index) in list' 
               :key='index'
               :ref='item.title'>
               <div>{{item.title}}</div>
               <ol class="singer-items">
                  <li v-for='(singer,sindex) in item.items'
                     :key='sindex'
                     @click='goDetail(singer)'>
                     <div class="imgbox">
                        <img :src='singer.Fsinger_mid' alt="">
                     </div>
                     <div class="singer-name">
                        <span>{{singer.Fsinger_name}}</span>
                     </div>
                  </li>
               </ol>
            </li>
         </ul>
      </div>
      <ul class='indexlist' ref="indexlist"
         @touchstart='touchstart'
         @touchmove='touchmove'
         @touchend='touchend'>
         <li v-for ='(item,index) in test'
            :class='item===moveIndex?"selClass":""'
            :key='index'
            @click="move(item)">
         {{item}}
         </li>
      </ul>
      <router-view></router-view>
   </div>
</template>

<script>
import jsonp from 'jsonp'
import {parseData} from './SingerData'
import BS from 'better-scroll'
export default {
   data(){
      return{
         list :[],
         moveIndex : 'hot'
      }
   },
   computed:{
      test(){
         let arr = []
         this.list.forEach((item) => {
            arr.push(item.title)
            
         })
         // console.log(arr)

         return arr
      },
      
   },
   methods :{
      initData(){
         let url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq'
         jsonp(url,{param:'jsonpCallback'},(err,data) => {
            this.list = parseData(data.data.list)
            // console.log(this.list)
            this.$nextTick(() => {
               this.getHeightArr()
               // console.log(111)
            })
         })
      },
      initBS(){
         this.bs = new BS(this.$refs.bs,{probeType:3,click:true})
         this.bs.on('scroll',(pos) => {
            let arr = this.getHeightArr()
            let y = Math.abs(pos.y)
            console.log(y)
            arr.forEach((item,index) => {
               if(y >= arr[index] && y <= arr[index+1]){
                  let findex = this.test[index]
                  console.log(findex)
                  this.moveIndex = findex
               }
            })
         })
      },
      touchstart(e){
         let y = e.touches[0].clientY
         let startY = y - (this.$refs.indexlist.offsetTop + 88)
         let startindex = Math.ceil(startY / 20)
         this.touchs.startindex = startindex
         this.touchs.startY = y

      },
      touchmove(e){
         let {startY} = this.touchs
         let y = e.touches[0].clientY
         let moveY = y - startY
         let moveNum = Math.ceil(moveY / 20)
         let findex = this.test[moveNum + this.touchs.startindex]
         let indexAll = moveNum + this.touchs.startindex - 1
         if(indexAll < 0 || indexAll > 23){
            return false
         }
         this.move(this.test[indexAll])
      },
      touchend(){
         console.log('taiqi')
      },
      move(item){
         this.moveIndex = item
         this.bs.scrollToElement(this.$refs[item][0])
      },
      getHeightArr(){
         let arr = [0]
         let els = this.$refs
         
         for(let key in els){
            if(key !== 'bs' && key !== 'indexlist' && key !== 'hot'){
               arr.push(els[key][0].offsetTop)
            }
         }
         return arr
      },
      goDetail(item){
         console.log(item)
         const reg = /\sdf/
         let mid=item.Fsinger_mid
         
         let aaa = 'dsfsdfsdf'
         this.$router.push(`/singer/${aaa}`)
      }
   },
   created(){
      this.initData()
   },
   mounted(){
      this.touchs = {}
      this.initBS()
      // console.log(this.$refs)
   }
}
</script>

<style lang="less" scoped>
@import '../../style/index.less';
.singer{
   width: 100%;
   position: fixed;
   top: 88px;
   bottom: 0;
   box-sizing: border-box;
   font-size: 14px;
   overflow: hidden;
   > .singer-wrapper{
      height: 100%;
      width: 100%;
      > .singer-namelist{
         > li{
            padding-bottom: 30px;
            background: #222;
            color: hsla(0,0%,100%,.5);
            > div{
               width: 100%;
               height: 30px;
               background: #333;
               font-size: 14px;
               color: hsla(0,0%,100%,.5);
               line-height: 30px;
               padding-left: 20px;
            }
            > .singer-items{
               > li{
                  display: flex;
                  padding: 20px 0 0 30px;
                  > .imgbox{
                     width: 50px;
                     height: 50px;
                     border-radius: 50%;
                     overflow: hidden;
                     > img{
                        width: 100%;
                        height: 100%;
                     }
                  }
                  > .singer-name{
                     display: flex;
                     flex-direction: column;
                     justify-content: center;
                     margin-left: 20px;
                  }
               }
            }
         }
      }
   }
   > .indexlist{
      position: absolute;
      top: 60px;
      right: 0;
      > li{
         height: 20px;
         color: hsla(0,0%,100%,.5);
      }
      .selClass{
         color: yellow;
      }
   }
}
</style>