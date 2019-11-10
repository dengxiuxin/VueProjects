<template>
	<div class="hello">
			<div id="Materials_box">
			<!-- 大模块 -->
			
			<div class="container">
				<div class="con_box">
					<ul class="row con_text">
						<li class="con_box_s col-lg-12 col-md-12 col-sm-12 col-xs-12" v-for="item in titles" :key="item.id">
							<div class="content_box">
							<a href="#">
								<img src="../../static/img/bookS.png" class="pl">
							</a>
							<div class="word">
								<a href="/egret/blackwhite/index.html">{{item.title}}</a>
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
						{title:'别踩白块儿',name:'黑白方块'},
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