import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
	userinfo:{}, 
	artivcle:[]
}

const mutations = {
  SAVE_USERINFO(state,userinfo){
    state.userinfo = userinfo
  },
  
  SAVE_ARTIVCLE(state,artivcle){
    state.artivcle = artivcle
   console.log(artivcle)
  }

}

export default new Vuex.Store({
	state,
	mutations
})
