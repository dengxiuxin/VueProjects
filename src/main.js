// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper,/*swiper*/)
// 引入swiper轮播图插件

import Resource from 'vue-resource'
Vue.use(Resource)
// 引入Resource

import App from './App'
import router from './router'
import $ from 'jquery'

import store from './vuex/store'

import axios from 'axios'
Vue.prototype.axios=axios
//引入axios

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../static/css/style.css';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// 引入ElementUI


// import md5 from 'js-md5';
// Vue.prototype.$md5 = md5;
//引入MD5加密模块

// 全局引入子组件
const newsby = () => import('./components/HomeChild/newsby.vue')
const daily = () => import('./components/HomeChild/daily.vue')
const hright = () => import('./components/HomeChild/hright.vue')

const addblog = () => import('./components/UserChild/addblog.vue')
const uinfo = () => import('./components/UserChild/uinfo.vue')
// 声明子组件
Vue.component('newsby',newsby);
Vue.component('daily',daily);
Vue.component('hright',hright);
Vue.component('addblog',addblog);
Vue.component('uinfo',uinfo);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
