<template>
  <div class="order">
    <div class="imgbox">
      <img src="http://cube.elemecdn.com/8/c8/bbe5984003cb26fc7b445a4a15195png.png" alt="图片为加载出来">
      <h3>近三个月无外卖订单记录</h3>
    </div>  
    <div class="orderbox">
      <p>查看三个月前的外卖订单<span>xiajian</span></p>
    </div>  
  </div>
</template>

<script>

export default {
  created(){
                    
    let url = '/hehe/restapi/bos/v2/users/1817426641/old_orders?limit=8&from_time=1554630077'
    this.$axios.get(url)
    .then((data) => {
      console.log(data)
    })
  }

}
</script>


<style lang="less" scoped>
.order{
  background: #f5f5f5;
  flex: 1;
  overflow: auto;
  > .imgbox{
    width: 100%;
    margin-top: 26.67vw;
    text-align: center;
    > img{
      width: 200px;
    }
    > h3{
      text-align: center;
      height: 20px;
      margin: 10px 0 10px;
      line-height: 20px;
      color: #6a6a6a;
      font-weight: 400;
      font-size: 17px;
    }
  }
  > .orderbox{
    text-align: center;
    color: #999;
    font-size: 12px;
  }
}
</style>