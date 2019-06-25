import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Materials from '@/components/Materials'
import notes from '@/components/notes'
import chitchat from '@/components/chitchat'
import UserInfo from '@/components/UserInfo'
import index from '@/components/index'

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
				{path:'/notes',component:notes},
				{path:'/chitchat',component:chitchat},
				{path:'/UserInfo',component:UserInfo},
				{path:'/index',component:index}
			]
    },
  ],
	beforeRouteEnter(to, from, next) {
     next(()=>{
         window.location.reload()
     })
},
})
