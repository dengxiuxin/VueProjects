import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = () => import('@/components/HelloWorld')
const Home = () => import('@/components/Home')
const Egret = () => import('@/components/Egret')
const UserInfo = () => import('@/components/UserInfo')
const undefind = () => import('@/components/undefind')
const registered = () => import('@/components/registered')
const bolg = () => import('@/components/bolg')

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
			name: 'HelloWorld',
			component: HelloWorld,
			children: [{
					path: '/Home',
					component: Home
				},
				{
					path: '/Egret',
					component: Egret
				},
				{
					path: '/UserInfo',
					component: UserInfo
				},
				{
					path: '/registered',
					component: registered
				},
				{
					path: '/bolg',
					component: bolg
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
