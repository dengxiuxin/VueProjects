<template>
	<div class="hello">
		<div id="Materials_box">
			<!-- 大模块 -->
			
			<div class="container">
				<div class="con_box">
					<ul class="row con_text">
						<li class="con_box_s col-lg-4 col-md-4 col-sm-6 col-xs-12" v-for="item in titles" :key="item.id">
							<div class="content_box">
							<a href="#">
								<img src="../../static/img/bookS.png" class="pl">
							</a>
							<div class="word">
								<a href="#">{{item.title}}</a>
							</div>
							
							<p>{{item.name}}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<router-view >
		</router-view>
	</div>
</template>

<script>
	export default {
		name:'HelloWorld',
		data () {
			return {
				titles:[
						{title:'javascript',name:'动态网站开发技术'},
						{title:'PHP语言',name:'网站,小程序,App的后台'},
						{title:'ES6',name:'JavaScript语言的新标准'},
						{title:'jquery',name:'让代码写的更少做的更多'},
						{title:'VUE.js',name:'Web界面的渐进式框架'},
						{title:'AJAX技术',name:'让网页实现异步更新'},
						{title:'Node.js',name:'让JavaScript运行在服务端的开发平台'},
						{title:'Tomcat',name:'一个免费的开放源代码的Web 应用服务器'},
						{title:'Apache',name:'Apache是一款Web服务器软件'},
						{title:'Mysql',name:'MySQL是一个关系型数据库管理系统'},
						{title:'LANMP_WDCP',name:'服务器环境控制平台(Nginx、Apache、MySQL、PHP、phpMyAdmin)'},
						{title:'Bootstrap',name:'与我们联系-我们将帮你寻找你所需要的资源！'},
						
						{title:'还需要点什么？',name:'Bootstrap 自带以下特性：全局的 CSS设置、定义基本的 HTML 元素样式、可扩展的 class，以及一个先进的网格系统。'},
						],
			}
		}
	}
</script>

<style>
	.notes {
		width: 1200px;
		height: 595px;
		background-color: #FFFFFF;
	}
</style>