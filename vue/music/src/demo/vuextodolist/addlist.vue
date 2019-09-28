<template>
  <div>
    <input type="text" v-model='$store.state.inputValue'>
    <button @click="addlist">添加</button>
    {{this.$store.state.inputValue}}
  </div>
</template>


<script>
export default {
  methods:{
    addlist(){
      //  直接使用commit进行添加操作
      // this.$store.commit('addlist')

      
      //  使用dispatch进行中间添加操作
      this.$store.dispatch('tianlist')
    }
  }
}
</script>

<style lang="less">
  
</style>