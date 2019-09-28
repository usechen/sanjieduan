import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import play from './play/play'

const store = new Vuex.Store({
  modules: {
    play
  }
})

export default store