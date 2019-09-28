<template>
  <div>
    <ul>
      <li v-for='(item,index) in this.$store.state.list' 
          :key='index' :class='item.zhuang?"active":""'>
        {{item.shi}}
        <button @click='del(index)'>删除</button>
        <span v-if='item.zhuang'>已完成</span>
        <button v-else @click='change(index)'>完成</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  methods:{
    change(index){
      //  直接使用commit进行改变操作
      // this.$store.commit('gaibianzhuang',index)

      
      //  使用dispatch进行中间改变操作
      this.$store.dispatch('gaizhuang',index) 
      // this.$store.state.list[index].zhuang = true
    },
    del(index){
      //  直接使用commit进行删除操作
      // this.$store.commit('del',index)

      
      //  使用dispatch进行中间删除操作
      this.$store.dispatch('dellist',index)
    }
  },
}
</script>

<style lang="less">
  .active{
    background-color: red;
  }
</style>