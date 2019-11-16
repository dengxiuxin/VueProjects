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
				localStorage.setItem('time', JSON.stringify(response.data[0]))
			}
		}
	}
</script>

<style>
	/* 隐藏右边滚动条 */
	::-webkit-scrollbar {
		display: none;
	}

	p,
	h3,
	span {
		font-family: arial;
	}
	.el-dialog {
		width: 30%!important;
	}
	@media (max-width:1050px) {
		.el-dialog {
			width: 40%!important;
		}
	}
	@media (max-width:768px) {
		.el-dialog {
			width: 50%!important;
		}
	}
	@media (max-width:610px) {
		.el-dialog {
			width: 60%!important;
		}
	}
	@media (max-width:510px) {
		.el-dialog {
			width: 80%!important;
		}
	}
	@media (max-width:380px) {
		.el-dialog {
			width: 90%!important;
		}
	}
</style>
