import Vue from 'vue'
import Vuex from 'vuex'
import {activeList,inactiveList} from '../data/controllerList'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeList,
    inactiveList,
    currentChannel:'__all__'
  },
  mutations: {
    changeChannel(state,payload){
      // 改变当前频道
      state.currentChannel=payload.currentChannel
    }
  },
  actions: {
  },
  modules: {
  }
})
