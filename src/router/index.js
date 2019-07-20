import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = () => import('@/components/HelloWorld')
const Home = () => import('@/components/Home')
const Materials = () => import('@/components/Materials')
// import notes from '@/components/notes' 		//在2019-07-08移除出项目..
const UserInfo = () => import('@/components/UserInfo')
const undefind = () => import('@/components/undefind')

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
     {
			 path: '/',
			 redirect: '/home',
		},
		{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
			children:[
				{path:'/Home',component:Home},
				{path:'/Materials',component:Materials},
				{path:'/UserInfo',component:UserInfo},
				{path:'*',component:undefind}
			]
    },
  ],
	beforeRouteEnter(to, from, next) {
     next(()=>{
         window.location.reload()
     })
},
})
