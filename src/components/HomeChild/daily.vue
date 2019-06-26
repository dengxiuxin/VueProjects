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
			<li class="col-md-12 col-ms-12 col-xs-12">
				<div class="col-md-2 col-ms-3 col-xs-3">
					<img src="../../../static/images/banner-b_2.png" class="img-rounded img-responsive">
					<h5 class="text-center">我也不知</h5>
				</div>
				<div class="col-md-10 col-ms-9 col-xs-9">
					<h4>你说是什么就是什么吧</h4>
					<small><b>什么东西</b></small>
					<br />
					<span>爱咋咋地吧 什么爱咋咋地吧 什么爱咋咋地吧 什么爱咋咋地吧 什么爱咋咋地吧 什么爱咋咋地吧 什么爱咋咋地吧 什么</span>
				</div>
			</li>
			<li class="col-md-12 col-ms-12 col-xs-12">
				<div class="col-md-2 col-ms-3 col-xs-3">
					<img src="../../../static/images/banner-b_2.png" class="img-rounded img-responsive">
					<h5 class="text-center">我也不知</h5>
				</div>
				<div class="col-md-10 col-ms-9 col-xs-9">
					<h4>你说是什么就是什么吧</h4>
					<small><b>什么东西</b></small>
					<br />
					<span>爱咋咋地吧 什么</span>
				</div>
			</li>
			<li class="col-md-12 col-ms-12 col-xs-12">
				<div class="col-md-2 col-ms-3 col-xs-3">
					<img src="../../../static/images/banner-b_2.png" class="img-rounded img-responsive">
					<h5 class="text-center">我也不知</h5>
				</div>
				<div class="col-md-10 col-ms-9 col-xs-9">
					<h4>你说是什么就是什么吧</h4>
					<small><b>什么东西</b></small>
					<br />
					<span>爱咋咋地吧 什么</span>
				</div>
			</li>
			<li class="col-md-12 col-ms-12 col-xs-12">
				<div class="col-md-2 col-ms-3 col-xs-3">
					<img src="../../../static/images/banner-b_2.png" class="img-rounded img-responsive">
					<h5 class="text-center">我也不知</h5>
				</div>
				<div class="col-md-10 col-ms-9 col-xs-9">
					<h4>你说是什么就是什么吧</h4>
					<small><b>什么东西</b></small>
					<br />
					<span>爱咋咋地吧 什么</span>
				</div>
			</li>
		</ul>
		<hr />
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
	._new img {
		margin-left: 30px;
	}
	
	._new span {
		margin-top: 5px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
</style>
