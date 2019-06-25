<template>
	<div class="hello">
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
		<div class="container">
			<div class="row _mian-box">
				<div class="col-md-9 col-xs-12 col-sm-12 _mian-left" style="border-right: 1px solid #EAEAEA;">
					<div class="row">
						<div class=" col-lg-5 col-md-6 col-xs-12 col-sm-6">
							<div id="containers">
								<a class="items" :href="item.url" v-for="(item,index) in news.data" v-if='index<=4' :key="item.id">
									<img :src="item.thumbnail_pic_s02" style="width: 100%!important;" />
								</a>
								<div class="btns prevs"></div>
								<div class="btns nexts"></div>
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
						<div class=" col-lg-7 col-md-6 col-xs-12 col-sm-6">
							<div class="_box-tent col-md-12 col-ms-12 col-xs-12" v-for="(item,index) in news.data" v-if='index<=4' :key="item.id">
								<h4><a :href="item.url">{{item.author_name}}</a></h4>
								<small><p>{{item.title}}</p></small>
								<hr style="background-color: #999999;" />
							</div>
						</div>
					</div>
					<ul class="_cla-box">
						<li class=""><a href="#">默认</a></li>
						<li class=""><a href="#">今日头条</a></li>
						<li class=""><a href="#">科技事件</a></li>
						<li class=""><a href="#">娱乐事件</a></li>
					</ul>
					<hr style="background-color: #999999; margin: 0px; padding: 0px;" />
					<ul class="row _new">
						<li class="col-md-12 col-ms-12 col-xs-12" v-for="(item,index) in keji.data" v-if='index<=15' :key="item.id">
							<div class="col-md-2 col-ms-3 col-xs-3"><a :href="item.url">
									<img :src="item.thumbnail_pic_s03" class="img-rounded img-responsive"></a>

								<h5 class="text-center"><a :href="item.url">{{item.author_name}}</a></h5>
							</div>
							<div class="col-md-10 col-ms-9 col-xs-9">
								<h4><a :href="item.url">{{item.author_name}}</a></h4>
								<small><b>{{item.date}}</b></small>
								<br />
								<span><a :href="item.url">{{item.title}}</a></span>
							</div>
						</li>
					</ul>
					<hr />
				</div>


				<div class="col-md-3 col-xs-0 col-sm-0 _mian-right">
					<div class="col-md-12 col-xs-12 col-sm-12 text-center _res" :class="qie">
						<h3>你的知音都在这里</h3>
						<p>表达网民立场，记录个人生活，聚集意见领袖，众多草根精英，以我们的观点影响社会的进程 。</p>
						<hr>

						<button type="button" class="btn btn-primary">注册博客</button>
						<button type="button" class="btn btn-primary" v-on:click="aqie"><span class="glyphicon glyphicon-refresh"></span></button>


					</div>
					<div class="col-md-12 col-xs-12 col-sm-12 _res _yinc" :class="qieb">
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
									<input :type="pas" class="form-control" placeholder="请输入密码" name='pwd'>
									<span :class="btn" class="glyphicon form-control-feedback"></span>
								</div>
								<button type="button" class="btn btn-xs btn-info _pwd" v-on:click="bqieb"><span class="glyphicon glyphicon-refresh"></span></button>
								<div class="btn btn-xs btn-info _pwd" v-on:click="onclick">显示密码</div>
								<div class="btn btn-xs btn-info _pwd" v-on:click="onrevom">隐藏密码</div>
								<button type="submit" class="btn btn-primary btn btn-block">登 录</button>
							</div>
						</form>
					</div>
					<p class="_line"></p>
					<div class="col-md-12 col-xs-12 col-sm-12">
						<h3>新秀<img src="../../static/img/xuankuang_.png" style="float: right; width: 25px; height: 25px;"></h3>
						<ul class="row _figure">
							<li class="col-md-12 col-ms-12 col-xs-12">
								<img src="../../static/img/touxianga.jpg" class="img-thumbnail">
								<h5>鞋带儿 <span class="label label-danger">New</span></h5>
								<small>
									来自本地的一位程序猿，技术咱也不知道，咱也不敢问！
								</small>
							</li>
							<li class="col-md-12 col-ms-12 col-xs-12">
								<img src="../../static/img/touxiang.jpg" class="img-thumbnail">
								<h5>无为君 <span class="label label-danger">New</span></h5>
								<small>
									我也许不是渣渣辉，但我一定是渣渣！
								</small>
							</li>
							<li class="col-md-12 col-ms-12 col-xs-12">
								<img src="../../static/img/ye.jpg" class="img-thumbnail">
								<h5>我会喊溜溜溜 <span class="label label-danger">New</span></h5>
								<small>
									大河向东流，而你像下流，嘿嘿嘿~！
								</small>
							</li>
							<li class="col-md-12 col-ms-12 col-xs-12">
								<img src="../../static/img/user.png" class="img-thumbnail">
								<h5>像风一样的男子<span class="label label-danger">New</span></h5>
								<small>
									如果还能遇见你，那我一定一定会给你一个...
								</small>
							</li>
						</ul>
					</div>
					<p class="_line"></p>
					<div class="col-md-12 col-xs-12 col-sm-12">
						<h3>热文榜<img src="../../static/img/bianqian_.png" style="float: right; width: 25px; height: 25px;"></h3>
						<ul class="row _figure _s">
							<li class="col-md-12 col-ms-12 col-xs-12" v-for="(item,index) in news.data" v-if='index<=18' :key="item.id">
								<span class="label label-danger">{{item.category}}</span>
								<small>
									<a :href="item.url">{{item.title}}</a>

								</small>
							</li>
						</ul>
					</div>
				</div>
				<h2>{{news.ltitle}}</h2>
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
				btn: 'glyphicon-eye-close',
				pas: 'password',
				qie: '',
				qieb: '',
				
				content: 'hot',

				news: [], //yule 
				hot: [],  //top
				text: [], //text
				keji: [], //keji

				
			}

		},
		mounted: function() {
			this.axios.get('./../static/json/top.json')
				.then(response => {
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
		methods: {
			
			onclick: function() {
				if (this.btn == this.btn) {
					this.btn = 'glyphicon-eye-open'
				}
				if (this.pas == this.pas) {
					this.pas = 'text'
				}
			},
			onrevom: function() {
				if (this.btn == this.btn) {
					this.btn = 'glyphicon-eye-close'
				}
				if (this.pas == this.pas) {
					this.pas = 'password'
				}
			},
			aqie: function() {
				this.qie = '_yinc',
					this.qieb = '_xins'

			},
			bqieb: function() {
				this.qie = '_xins',
					this.qieb = '_yinc'
			}
		}

	}
</script>

<style scoped>
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

	._figure li {
		padding: 8px 0;
		margin-bottom: 5px;
		border-bottom: 1px solid #EAEAEA;
	}

	._figure h5 {
		margin-left: -17px;
	}

	._cla-box {
		background-image: url(../../static/img/hotnew.png);
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

	._pwd {
		float: right;
		margin-bottom: 5px;
		margin-right: 10px;
		margin-top: 0px;
		padding-top: 0px;
	}

	._yinc {
		display: none;
	}

	._xins {
		display: block;
	}

	@media (max-width:586px) {
		._new h4 {
			font-weight: bold;
			font-size: 14px;
		}

		._new span {
			font-size: 12px;
		}

	}

	@media (max-width:768px) {
		._cla-box li {
			width: 18%;
		}
	}

	@media (max-width:375px) {
		._cla-box li {
			width: 20%;
			font-size: 8px;
		}
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
</style>
