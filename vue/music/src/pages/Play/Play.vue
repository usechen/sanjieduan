<template>
   <div class="paly">
      <div class="dapaly">
         大播放器
         <button @click="yincang">隐藏</button>
         <br>
         <audio :src="songurl" controls></audio>
         <hr>
         <button>播放</button>
         <button @click="qiege('xia')">下一首</button>
         <button @click="qiege('shang')">上一首</button>
      </div>
      <div class="xiaopaly">
         小播放器
      </div>
   </div>
</template>

<script>
import playUrl from './playUrl'
import state from 'vuex'
export default {
   data(){
      return{
         list :['003NGKTc2tabpb','001Qu4I30eVFYb','001HKVU52wokMA'],
         index:0,
      }
   },
   methods:{
      //  控制大的播放器显示隐藏
      yincang(){
         // console.log(playUrl)
      },
      //  音乐的地址
      // songurl(){
      //    let songmid = this.list[0]
      //    return playUrl(songmid)
      // }
      qiege(panduan){
         console.log(panduan)
         if(panduan === 'xia'){
            this.index++
         }else{
            this.index--
         }
         console.log(this.$store.state.play.list)
      }
   },
   computed:{
      songurl(){
         let songmid = this.list[this.index]
         return playUrl.songUrl(songmid)
      },
      
   }
}
</script>

<style lang="less" scoped>
@import '../../style/index.less';
.dapaly{
   position: fixed;
   top:0;
   bottom: 70px;
   left: 0;
   right: 0;
   background: red;
}
.xiaopaly{
   height: 70px;
   position: fixed;
   bottom: 0;
   left: 0;
   right: 0;
   background: yellow;
}
</style>