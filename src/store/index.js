import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import {get} from 'utils/http'
import {activeList,inactiveList} from '../data/controllerList'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeList,
    inactiveList,
    currentChannel:'__all__',
    refreshData:[],
    isRotate:false
  },
  getters:{
    
  },
  mutations: {
    refresh(state,payload){
      console.log(payload)
    },
    // 改变当前频道
    changeChannel(state,payload){
      state.currentChannel=payload.currentChannel
    },
    // 删除频道
    removeChannel(state,payload){
      // 重新clone原数据结构，更改完数据再进行改变原数据的引用
      let {name,manage,status} = payload
      if(status){
        const tempObj = _.cloneDeep(state.activeList)
        delete tempObj[name] 
        state.activeList = tempObj
      }else{
        const tempObj = _.cloneDeep(state.inactiveList)
        delete tempObj[name]
        state.inactiveList = tempObj
      }
    },
    addChannel(state,payload){
      let {name,manage,status} = payload
      // 增加一项
      if(status){
        const tempObj = _.cloneDeep(state.inactiveList)
        tempObj[name] = {
          channel:manage,
          status: !status
        }
        state.inactiveList = tempObj
      }else{
        const tempObj = _.cloneDeep(state.activeList)
        tempObj[name] = {
          channel:manage,
          status: !status
        }
        state.activeList = tempObj
      }
    }
    
  },
  actions: {
    async refresh({commit,state},payload){
      state.isRotate = true
      let result = await get({channel:state.currentChannel})
      commit('refresh',{
        refreshData : result
      })
      state.refreshData = result
      console.log(result)
      console.log(state.refreshData)
      state.isRotate = false
    }
  },
  modules: {
  }
})
