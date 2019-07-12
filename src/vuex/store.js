import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
	keji:[],
	news:[],
	tops:[]
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
			console.log("top数据",state.tops)
	}
}

export default new Vuex.Store({
	state,
	mutations
})
