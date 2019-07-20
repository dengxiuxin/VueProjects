import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
	keji:[],
	news:[],
	tops:[],
  userinfo:{},
}

const mutations = {
	SAVE_KEJIINFO(state,keji){
		state.keji = keji
	},
	SAVE_NEWSINFO(state,news){
		state.news = news
	},
	SAVE_TOPINFO(state,tops){
		state.tops = tops
	},
  SAVE_USERINFO(state,userinfo){
    state.userinfo = userinfo
     console.log("用户信息",state.userinfo)
  }

}

export default new Vuex.Store({
	state,
	mutations
})
