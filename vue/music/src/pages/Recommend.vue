<template>
   <div class="box">
      <Banner></Banner>
      <div class="listnav">
         <h2>热门推荐</h2>
         <ul>
            <li v-for='(item,index) in list' :key='index'>
               <div class="imgbox">
                  <img v-lazy='item.imgurl' alt="">
               </div>
               <div class="jiebox">
                  <h3>{{item.creator.name}}</h3>
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
   components : {Banner},
   data(){
      return{
         list : []
      }
   },
   created() {
     let url='/hehe/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.07173379566119986'
   //   Axios.get(url)
   //   .then((data)=>{
   //       data.data.data.list.forEach((item) => {
   //         this.list.push(item)
   //       })      
   //    }) 
      this.$axios.get(url)
      .then((data) => {
         console.log(data)
         this.list = data.list
         console.log(this)
      })
   },
}
</script>

<style lang="less" scoped>
@import '../style/index.less';
.box{
   flex: 1;
   width: 100%;
   overflow: auto;
   position: fixed;
   top: 88px;
   bottom: 0;
   overflow: auto;
   .listnav{
      font-size: 14px;
      background: @bc-black;
      > h2{
         width: 100%;
         height: 65px;
         text-align: center;
         color:@fc-yellow;
         line-height: 65px;
      }
      li{
         display: flex;
         padding: 0 20px 20px;
         color: #fff;
         .imgbox{
            width: 60px;
            height: 60px;
            padding-right: 20px;
            img{
               width: 100%;
               height: 100%;
            }
         }
      }
   }
}
</style>