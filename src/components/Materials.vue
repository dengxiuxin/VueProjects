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
						{title:'Html+Css',name:'网站开发的基础语言'},
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
						{title:'还需要点什么？',name:'与我们联系-我们将帮你寻找你所需要的资源！'},
						{title:'还需要点什么？',name:'与我们联系-我们将帮你寻找你所需要的资源！'},
						{title:'还需要点什么？',name:'与我们联系-我们将帮你寻找你所需要的资源！'},
						{title:'还需要点什么？',name:'与我们联系-我们将帮你寻找你所需要的资源！'},
						{title:'还需要点什么？',name:'与我们联系-我们将帮你寻找你所需要的资源！'},
						{title:'还需要点什么？',name:'与我们联系-我们将帮你寻找你所需要的资源！'},
						],
			
			}
		}
	}
</script>

<style scoped>	
	.con_box_s {
		text-align: center;
		/* background-color:rgba(0,0,255,0.5); */
		/* background-color: #FFFFFF; */
		margin-top: 5px;
		padding: 5px;
		border-radius: 7px;
		height: auto;
		
	}
	.content_box {
		background-color:rgba(225,255,255,0.5);
	}
	.pl {
		width: 100px;
		padding: 5px;
	}
	
	.con_text {
		text-align: center;
		margin: 0px;
		padding: 0px;
		overflow: hidden;
		margin-left: 2px;
	}
	
	.con_box_s p {
		font-size: 12px;
		color: #999;
		overflow: hidden;
		height: 30px;
		margin-top: 10px;
		margin-bottom: 5px;
	}
	
	.con_box_s a {
		text-decoration: none;
	}
	
	.con_text .content_box:hover {
		box-shadow: 0 4px 2px 2px rgba(0, 0, 0, 0.2);
	}
	.word {
			font-weight: bold;
			height: 15px;
			line-height: 15px;
			margin-top: 10px;
		}
</style>