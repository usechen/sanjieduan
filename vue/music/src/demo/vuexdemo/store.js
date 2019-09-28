import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    num : 1,
    name : 'hmm',
    list : [{shi :'今天打游戏',zhuang : true},{shi : '明天打游戏',zhuang : false}],
    inputValue : 'sdfsdf'
  },
  mutations : {
    addNum(state,params){
      state.num+=params
    },
    changeName(state,name){
      state.name = name
    },
    //  改变状态的操作，通过改变list中的zhuang属性值
    gaibianzhuang(state,index){
      state.list[index].zhuang = true
    },
    //  添加操作
    addlist(state){
      state.list.push({shi:state.inputValue,zhuang:false})
    },
    //  删除操作
    del(state,index){
      state.list.splice(index,1)
    }
  },
  getters:{
    doudle(state){
      return state.num * 2
    }
  },
  actions:{
    actionNum(obj,params){
      console.log('触发了actions', obj,params)
      let {commit} = obj
      commit('addNum',params)
      
    },
    //  使用dispatch中间进行添加list值
    tianlist(obj){
      obj.commit('addlist')
    },
    //  使用dispatch中间删除list值
    dellist(obj,index){
      obj.commit('del',index)
    },
    //  使用dispatch中间进行完成操作
    gaizhuang(obj,index){
      obj.commit('gaibianzhuang',index)
    }
  }
})


export default store