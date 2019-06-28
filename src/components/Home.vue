<template>
	<div class="hello" id="home">
		<div class="container _box_content">
			<div class="row _plate-head">
				<div class="col-md-8 col-sm-7 col-xs-12 _plate-png" style="background-image:url(../../static/img/touzhu.png);">
					<h2>博客</h2>
				</div>
				<div class="col-md-4 col-sm-5 col-xs-0">
					<div class="statistical">
						这里收录了<span id="blogNum">778</span>个博客，<span id="blogArticleNum">15244</span>篇博文
					</div>
				</div>
			</div>
		</div>
		<p class="container lins"></p>
		<!-- content-box -->
		
		
		
		<div class="container" style="background-color: #FFFFFF;">
			<div class="row">
				<div class="col-md-9 col-xs-12 col-sm-12 _box"><!-- 左边 -->			
						<div class="col-md-12 col-xs-12 col-sm-12">
							<newsby></newsby>
							<!-- 这是轮播和头条子组件 -->
						</div>
						<div class="col-md-12 col-xs-12 col-sm-12">
							<daily></daily>	
							<!-- 这是左下的博条 -->
						</div>
				</div>


				<div class="col-md-3 col-xs-12 col-sm-12"><!-- 右边-->
					<hright></hright>
				</div>
				
			</div>
		</div>


		
		
		
		<router-view></router-view>
		<footer class="footer navbar-fixed-bottom ">
			<div class="container footd">
				<p>科技代码的测试网站，网站名为“未来是一场梦” 研发中!
					<a href="kejidaima.com" style="color:#FFFFFF; font-size: 10px;">www.kejidaima.com</a> 科技代码所有权
					<a href="http://www.miitbeian.gov.cn/" style="color:#FFFFFF; font-size: 10px;">@粤ICP备1715606号</a>
				</p>
			</div>
		</footer>
	</div>

</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {				
				content: 'hot',

				news: [], //yule 
				hot: [],  //top
				text: [], //text
				keji: [], //keji

				
			}

		},
		mounted: function() {
			this.axios.get('/api/user/addUser')
				.then(response => {
					console.log(response)
					this.news = response.data.result
				})
			this.axios.get('./../static/json/keji.json')
				.then(response => {
					this.hot = response.data.result
				})
			this.axios.get('./../static/json/text.json')
				.then(response => {
					this.text = response.data.result
				})
			this.axios.get('./../static/json/yule.json')
				.then(response => {
					this.keji = response.data.result
				})
		},
	}
</script>

<style scoped>
	._box {
		border-right: 1px solid #EAEAEA;
		margin: 0; 
		padding: 0;
	}
	.footd {
		width: 100%;
		height: 13px;
		background-color: #D5D5D5;
	}

	.footd p {
		font-size: 11px;
		line-height: 13px;
		text-align: center;
		color: #999999;
	}
	
	.v-enter {
		opacity: 0;
	}

	.v-enter-active {
		transition: opacity 0.3s;
	}

	/* 此时v-leave这个时刻opacity是1，到第二帧的时候v-leave结束，v-leave-to开始，此时opacity开始变化，但是有v-leave-active监听着，所以不会让他瞬间改变，而是花三秒 */
	.v-leave-to {
		opacity: 0;
	}

	/* 在整个过程中，v-leave-active都监听着opacit这个属性，一旦他发生改变，就让他用三秒时间改变。 */
	.v-leave-active {
		transition: opacity 0.3s;

	}
	.statistical {
		float: right;
		padding-top: 38px;
		color: #999999;
	}
	.lins {
	
		margin-bottom: 1px !important;
		height: 4px;
		background-color: #999999;
	}
	._plate-head {
		background-color: #FFFFFF;
	}
	
	._plate-png {
		/* background-image: url(img/touzhu.png); */
		background-position: 15px 27px;
		background-repeat: no-repeat;
	
	}
</style>
