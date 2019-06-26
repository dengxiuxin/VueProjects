<template>
	<div>
		<div class="row">


			<div class="col-lg-5 col-md-6 col-sm-6 col-xs-12">
				<div id="containers">
					<a class="items" href="#">
						<img src="../../../static/img/a2.jpg" />
					</a>
					<ul id="tabss">
						<li class="tabs actives"></li>
						<li class="tabs"></li>
						<li class="tabs"></li>
						<li class="tabs"></li>
						<li class="tabs"></li>
					</ul>
					<div class="taba">美好的一天</div>
				</div>
			</div>
			<!-- 轮播图 -->


			<div class=" col-lg-7 col-md-6 col-sm-6 col-xs-12">
				<!-- <div class="_box-tent col-md-12 col-ms-12 col-xs-12" v-for="(item,index) in news.data" v-if='index<=4' :key="item.id">
						<h4><a :href="item.url">{{item.author_name}}</a></h4>
						<small><p>{{item.title}}</p></small>
						<hr style="background-color: #999999;" />
					</div> -->
				<div class="_box-tent col-md-12 col-ms-12 col-xs-12">
					<h4><a>你哈</a></h4>
					<small>
						<p>难受吗 你是什么东西啊</p>
					</small>
					<hr style="background-color: #999999;" />
				</div>
				<div class="_box-tent col-md-12 col-ms-12 col-xs-12">
					<h4><a>你哈</a></h4>
					<small>
						<p>难受吗 你是什么东西啊</p>
					</small>
					<hr style="background-color: #999999;" />
				</div>
				<div class="_box-tent col-md-12 col-ms-12 col-xs-12">
					<h4><a>你哈</a></h4>
					<small>
						<p>难受吗 你是什么东西啊</p>
					</small>
					<hr style="background-color: #999999;" />
				</div>
				<div class="_box-tent col-md-12 col-ms-12 col-xs-12">
					<h4><a>你哈</a></h4>
					<small>
						<p>难受吗 你是什么东西啊</p>
					</small>
					<hr style="background-color: #999999;" />
				</div>
				<div class="_box-tent col-md-12 col-ms-12 col-xs-12">
					<h4><a>你哈</a></h4>
					<small>
						<p>难受吗 你是什么东西啊</p>
					</small>
					<hr style="background-color: #999999;" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	._box-tent h4 a {
		text-decoration: none;
		color: #000000;
	}
	
	._box-tent h4 a:hover {
		color: #337AB7;
	}
	
	._box-tent p {}
	
	#tabss {
		width: 100%;
		position: absolute;
		bottom: 20px;
		left: -20px;
	}
	
	.tabs {
		float: left;
		margin-right: 10px;
		width: 20px;
		height: 20px;
		border: 3px solid rgba(184, 178, 182, .8);
		border-radius: 50%;
		background: #989196;
		cursor: pointer;
		list-style: none;
	}
	
	.taba {
		list-style: none;
		left: 200px;
		top: 430px;
		color: #999999;
		position: absolute;
	}
	
	.actives {
		background: #fff;
		border-color: #999497;
	}
	
	.btns {
		position: absolute;
		top: 45%;
		margin-top: -35px;
		width: 40px;
		height: 70px;
		color: #d6d3d5;
		font-size: 36px;
		line-height: 70px;
		text-align: center;
		cursor: pointer;
	}
	
	.btns:hover {
		background: rgba(127, 120, 125, 0.8);
	}
	
	.items {
		position: absolute;
	
	}
	
	.items img {
		height: 420px;
	}
	#containers {
		width: 350px;
		height: 480px;
		position: relative;
		overflow: hidden;
	}
</style>
