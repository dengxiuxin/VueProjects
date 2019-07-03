<template>
	<div>
		<ul class="_cla-box">
			<li class=""><a href="#">默认</a></li>
			<li class=""><a href="#">今日头条</a></li>
			<li class=""><a href="#">科技事件</a></li>
			<li class=""><a href="#">娱乐事件</a></li>
		</ul>
		<hr style="background-color: #999999; margin: 0px; padding: 0px;" />

		<ul class="row _new"  >
			<li class="col-md-12 col-ms-12 col-xs-12" v-for="(item,index) in keji.data" v-if='index<=num' :key="index">
				<div class="col-md-2 col-ms-3 col-xs-3">
					<img :src="item.pic_img" class="img-rounded img-responsive">
					<h5 class="text-center">{{item.author_name}}</h5>
				</div>
				<div class="col-md-10 col-ms-9 col-xs-9">
					<h4>{{item.title}}</h4>
					<small><b>{{item.date}}</b></small>
					<br />
					<span><a :href="item.url">详情</a></span>
				</div>
			</li>
		</ul>
		<div class="sdl col-md-12 col-ms-12 col-xs-12">
			<button class="btn-default btn btn-info text-center" @click="loading">加载更多</button>
			<button class="btn-default btn btn-info text-center" @click="cancel" v-if="num>6">取消上一步</button>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				num: 4,
				sum: 5
			}
		},
		methods:{
			loading(){
				this.num += this.sum,
				console.log("num"+this.num)
				console.log("sum"+this.sum)
			},
			cancel(){
				if(!this.num <=5){
					this.num -= this.sum
				}	
			}
		},
		props:['keji'],
	}
</script>

<style scoped>
	.sdl {
		text-align: center;
		padding: 15px;
	}
	._cla-box {
		background-image: url(../../../static/img/hotnew.png);
		height: 38px;
	}

	._cla-box li {
		width: 14%;
		float: right;
		margin-top: 20px;
		padding: 0px;
		text-align: center;
		background-color: #EEF0F1;
		border-radius: 5px;
		margin-right: 5px;
	}
	._new {
		margin: 0px;
		padding: 0px;
	}
	
	._new li {
		padding: 10px 10px 0 0;
		border-bottom: 1px solid #EAEAEA;
	}
	
	._new h4 {
		margin-top: 0px;
		margin-bottom: 5px;
		font-weight: bold;
	}
	._new span {
		margin-top: 5px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	@media (max-width:480px) {
		._new h5 {
			font-size: 8px;
		}
	._cla-box li {
		width: 18%;
		font-size: 8px;
	}	
	}
</style>
