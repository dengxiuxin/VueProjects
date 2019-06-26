// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios' //引入axios
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../static/css/style.css';
import '../static/js/lunbotu.js';

// 全局引入子组件
import newsby from './components/HomeChild/newsby.vue';
import daily from './components/HomeChild/daily.vue';
import hright from './components/HomeChild/hright.vue';
// 声明子组件
Vue.component('newsby',newsby);
Vue.component('daily',daily);
Vue.component('hright',hright);

Vue.prototype.axios=axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
