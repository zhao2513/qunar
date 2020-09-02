import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)//vuex是插件，用vue.use


export default new Vuex.Store({
  state,
  mutations
//   actions:{//接收到外部的参数，给mutations修改
//     changeCity(ctx,city){
//     //city是传过来的参数,ctx是拿到commit方法
//       ctx.commit('changeCity',city)
//       //commit让actions沟通mutations
//     }
// },
  // getters:{//实现数据相加
  //   doubleCity(state){
  //     return state.city+ ''+state.city
// }
// }
})