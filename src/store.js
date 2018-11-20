import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
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
    storeUserInfo(state){
      state.count++
    }
  },
  actions: {
    submitLogin({commit},payload){
      console.log(payload);
      axios.get('info.json').then(data=>{
        debugger
      }).catch(data=>{

      })
      commit('storeUserInfo',payload)
    }
  }
})
