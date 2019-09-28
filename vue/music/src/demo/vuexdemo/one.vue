<template>
  <div>
    one页面
    <hr>
    {{this.$store.state.num}}
    {{this.$store.state.name}}
    <button @click="add">ADD</button>
  </div>
</template>

<script>
export default {
  methods:{
    add(){
      // this.$store.commit('addNum',5)
      this.$store.dispatch('actionNum',5)
    }
  },
  mounted(){
    console.log(this.$store)
  }
}
</script>

<style lang="less">
  
</style>