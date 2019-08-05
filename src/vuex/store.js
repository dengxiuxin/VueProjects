import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
	keji:[],
	news:[],
	tops:[],
	newuserinfo:[],
  userinfo:{},
  artivcle:[]
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
  },
  SAVE_NEWUSERINFO(state,newuserinfo){
  	state.newuserinfo = newuserinfo
	 console.log("10条用户信息",state.newuserinfo)
  },

  SAVE_ARTIVCLE(state,artivcle){
    state.artivcle = artivcle
    console.log("文章",state.artivcle)
  }

}

export default new Vuex.Store({
	state,
	mutations
})
