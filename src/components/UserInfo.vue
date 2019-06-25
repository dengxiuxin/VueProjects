<template>
	<div class="hello">
		<div class="header col-lg-10 col-md-10 col-sm-8 col-xs-8">
			<div class="var">
				<img src="../../static/img/var.png" width="50px;" height="50px;" />
			</div>
		</div>

		<div class="left col-lg-2 col-md-2 col-sm-4 col-xs-4">
			<h3>{{name}}</h3>
			<div class="left_info">
				<div class="left_in">
					<img src="../../static/img/touxianga.jpg" class="img-rounded" />
				</div>
				<div class="left_fo">
					<span>你好! </span><span>
						老邓</span><br />
					<span><img src="../../static/img/start.png" width="20px" height="20px" />
						online</span>
				</div>

			</div>



			<hr />
			<div class="meun">
				<br />
				<h1>控制台</h1>
			</div>
			<div class="btn-group bt">
				<button type="button" class="btn btn-info btn-lg dropdown-toggle btn-block" data-toggle="dropdown" aria-haspopup="true"
				 aria-expanded="false">
					文章 <span class="caret"></span>
				</button>
				<ul class="dropdown-menu dr_menu">
					<li><a href="#">Action</a></li>
					<li><a href="#">Another action</a></li>
					<li><a href="#">Something else here</a></li>
					<li><a href="#">Separated link</a></li>
				</ul>
			</div>
			<div class="btn-group bt">
				<button type="button" class="btn btn-info btn-lg dropdown-toggle btn-block" data-toggle="dropdown" aria-haspopup="true"
				 aria-expanded="false">
					分类 <span class="caret"></span>
				</button>
				<ul class="dropdown-menu dr_menu">
					<li><a href="#">Action</a></li>
					<li><a href="#">Another action</a></li>
					<li><a href="#">Something else here</a></li>
					<li><a href="#">Separated link</a></li>
				</ul>
			</div>
			<div class="btn-group bt">
				<button type="button" class="btn btn-info btn-lg dropdown-toggle btn-block" data-toggle="dropdown" aria-haspopup="true"
				 aria-expanded="false">
					标签 <span class="caret"></span>
				</button>
				<ul class="dropdown-menu dr_menu">
					<li><a href="#">Action</a></li>
					<li><a href="#">Another action</a></li>
					<li><a href="#">Something else here</a></li>
					<li><a href="#">Separated link</a></li>
				</ul>
			</div>
			<div></div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {

				name: '个人中心',
				news:[]

			}
		},
		methods: {
		},
	}
</script>

<style scoped>
	.dr_menu {
		width: 100%;
		margin-top: -2px;
	}

	.bt {
		width: 100% !important;
		padding: 0 2px;
		margin-bottom: 10px;
	}

	.hello {
		border: 5px solid #CC0000;
		float: left;
		width: 100%;
	}

	.header {
		float: right;
		padding: 0 !important;
		height: 50px;
		margin: 0px;
		border-bottom: 2px solid #cc0000;
	}

	.var {
		float: left;
	}


	.left {
		float: left;
		background-image: linear-gradient(to top, #FFFFCC, #ffffff);
		border-right: 2px solid #CC1111;
		padding: 0 !important;
		height: 687px;
	}

	.left h3 {
		float: left;
		width: 100%;
		height: 50px;
		text-align: center;
		border-bottom: 2px solid #CC1111;
		line-height: 50px;
		letter-spacing: 5px;
		margin: 0;
	}

	.left_info {
		float: left;
		width: 100%;
		height: 15%;
		background-color: #FFFFFF;
		margin-bottom: 20px;
	}

	.left_in {
		float: left;
		width: 30%;
		text-align: center;
		padding: 5px;
	}

	.left_in img {
		width: 50px;
	}

	.left_fo {
		float: left;
		width: 70%;
		text-align: center;
		height: 30%;
		line-height: 30px;


	}

	.meun h1 {
		font-size: 25px;
		letter-spacing: 8px;
		text-align: center;

	}

	@media (max-width:430px) {
		.left_in {
			float: left;
			width: 100%;
			text-align: center;
			padding: 5px;
		}

		.left_fo {
			float: left;
			width: 100%;
			text-align: center;
			height: 30%;
			line-height: 30px;


		}

		.meun h1 {
			font-size: 20px;
			letter-spacing: 8px;
			text-align: center;

		}
	}
</style>
