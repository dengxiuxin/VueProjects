import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
	tops:[],
	newuserinfo:[],
  userinfo:{},
  artivcle:[]
}

const mutations = {

	SAVE_TOPINFO(state,tops){
		state.tops = tops
	},
  SAVE_USERINFO(state,userinfo){
    state.userinfo = userinfo
  },
  SAVE_NEWUSERINFO(state,newuserinfo){
  	state.newuserinfo = newuserinfo
  },

  SAVE_ARTIVCLE(state,artivcle){
    state.artivcle = artivcle
  }

}

export default new Vuex.Store({
	state,
	mutations
})
