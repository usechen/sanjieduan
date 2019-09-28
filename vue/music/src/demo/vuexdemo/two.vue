<template>
  <div>
    two页面
    <hr>
    {{this.$store.state.num}}
    {{this.$store.state.name}}
    {{this.$store.getters.doudle}}
    <button @click="change">Name</button>
  </div>
</template>

<script>
export default {
  methods:{
    change(){
      this.$store.commit('changeName','cpj')
    }
  },
  mounted(){
    console.log(this.$store)
  }
}
</script>

<style lang="less">
  
</style>