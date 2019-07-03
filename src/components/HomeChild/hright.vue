<template>
	<div>
			<div class="col-md-12 col-xs-12 col-sm-12 text-center _res" v-if="isShow">
				<h3>你的知音都在这里</h3>
				<p>表达网民立场，记录个人生活，聚集意见领袖，众多草根精英，以我们的观点影响社会的进程 。</p>
				<hr>
				<button type="button" class="btn btn-primary">注册博客</button>
				<button type="button" class="btn btn-primary" @click="show"><span class="glyphicon glyphicon-refresh"></span></button>
			</div>
			
			<div class="col-md-12 col-xs-12 col-sm-12 _res" v-if="!isShow">
				<form action='#' method='post'>
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						
						<div class="text-center">
							<h3>欢迎登录</h3>
						</div>
						
						<div class="form-group">
							<label for="exampleInputEmail1">用户名:</label>
							<input type="text" class="form-control" placeholder="请输入用户名" name='username'>
						</div>
						
						<div class="form-group has-feedback">
							<label for="exampleInputPassword1">用户密码:</label>
							<input id="password" class="form-control" :type="pas" placeholder="请输入密码"  name='pwd'>
							<span :class="btn" class="glyphicon form-control-feedback"></span>
							<p><label><input id="meod" type="checkbox" @click="eye"> 显示密码</label></p>
						</div>
						
						<div class="text-center">
							<button type="button" class="btn btn-primary">登录博客</button>
							<button type="button" class="btn btn-primary" @click="show"><span class="glyphicon glyphicon-refresh"></span></button>
						</div>
						
						
					</div>
				</form>
			</div>
			<p class="_line"></p>
			<div class="col-md-12 col-xs-12 col-sm-12">
				<h3>新秀<img src="../../../static/img/xuankuang_.png" style="float: right; width: 25px; height: 25px;"></h3>
				<ul class="row _figure _fih">
					<li class="col-md-12 col-ms-12 col-xs-12" v-for="(item,index) in top.data" v-if='index<=6' :key="index">
						<img :src="item.img" class="img-thumbnail">
						<h5>{{item.name}}</h5><span class="label label-danger">New</span>
						<small>
							{{item.sdasd}}
						</small>
					</li>
					
				</ul>
			</div>
			<p class="_line"></p>
			<div class="col-md-12 col-xs-12 col-sm-12">
				<h3>热文榜<img src="../../../static/img/bianqian_.png" style="float: right; width: 25px; height: 25px;"></h3>
				<ul class="row _figure _s">
					<li class="col-md-12 col-ms-12 col-xs-12" v-for="(item,index) in top.data" v-if='index<=15' :key="index">
						<p class="label label-danger">{{index+1}}</p>
						<p class="_b">
							<a :href="item.url">{{item.title}}</a>
			
						</p>
					</li>
				</ul>
			</div>
	</div>
	
</template>

<script>
	export default {
		data (){
			return {
				isShow:true,
				eyes:true,
				pas:"password",
				btn:"glyphicon-eye-open"
			}
			
		},
		methods: {
			show(){				
					this.isShow = !this.isShow
					// 登录表单切换
			},
			
			eye (){
				if(this.eyes = !this.eyes){
					console.log(this.eyes)
					this.btn = 'glyphicon-eye-open'
					this.pas = 'text'
				}else{
					this.btn = 'glyphicon-eye-close'
					this.pas = 'password'
				}
				// 密码显示切换
			}
			
		},
		props:['top'],
	}
</script>

<style scoped>
	._res {
		background-color: #F6F6F6;
		border-radius: 2px;
		padding-bottom: 10px;
	}
	._line {
		width: 100%;
		height: 5px;
		display: block;
		float: left;
		border-bottom: 1px solid #EAEAEA;
		border-top: 1px solid #EAEAEA;
		margin-top: 6px;
		padding: 0px;
		margin-bottom: -5px;
	}
	._figure {
		padding: 0px!important;
		position:relative;
	}
	._figure li img {
		width: 75px;
		height: 75px;
		float: left;
		padding: 2px;
		
	}
	._figure li h4 {
		float: left;
		display: initial;
	}
	._figure li p {
		float: left;
	}
	._fih li{
		border-bottom: 1px solid #EAEAEA;
		margin-top: 3px;
		padding-bottom: 5px;
	}
	._figure li h5{
		position:absolute;
		left: 100px;
	}
	._figure li small {
		position: absolute;
		padding: 5px;
		top: 24px;
	}
	._figure span {
		position: absolute;
		top: 10px;
		right: 20px;
		width: 34px;
		height: 15px;
		font-size: 12px;
		padding: 0;
		margin: 0;
	}
	._s small {
		margin-top: -25px;
		padding-left: 10px;
		height: 50px;
		width: 100% !important;
		overflow: hidden;
	}
	
	._s small a {
		white-space: nowrap;
	}
	._b {
		padding-left: 5px;
	}
</style>
