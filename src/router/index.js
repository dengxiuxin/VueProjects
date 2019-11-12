import Vue from 'vue'
import Router from 'vue-router'

const Main = () => import('@/components/Main')
const Home = () => import('@/components/Home')
const Egret = () => import('@/components/Egret')
const undefind = () => import('@/components/undefind')
const bolg = () => import('@/components/bolg')
const addblog = () => import('@/components/addblog')
Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			redirect: '/home',
			component: Home,
		},
		{
			path: '/',
			name: 'Main',
			component: Main,
			children: [{
					path: '/Home',
					component: Home
				},
				{
					path: '/Egret',
					component: Egret
				},
				{
					path: '/bolg',
					component: bolg
				},
				{
					path: '/addblog',
					component: addblog
				},
				{
					path: '*',
					component: undefind
				}
			]
		},
	],
	beforeRouteEnter(to, from, next) {
		next(() => {
			window.location.reload()
		})
	},
})
