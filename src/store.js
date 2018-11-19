import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{
      userName:'',
      passWord:''
    }
  },
  //可以看成store中的计算属性
  getters:{
     
  },
  mutations: {
    increment(state){
      state.count++
    }
  },
  actions: {
    
  }
})
