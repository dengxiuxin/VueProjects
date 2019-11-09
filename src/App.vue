<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {

      }
    },
    methods: {

    },

    mounted() {
      // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
      window.onbeforeunload = function(e) {
        localStorage.setItem('time',JSON.stringify(response.data[0]))
      }
    }
  }
</script>

<style>
	p,h3,span{
		font-family: arial;
	}
</style>
