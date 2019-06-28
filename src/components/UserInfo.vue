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
			<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>


			<div>
			</div>
		</div>

		<addblog></addblog>
		<!-- 添加博客组件 -->

		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				name: "博客中心",
				data: [{
					label: '列表',
					children: [{
						label: '子列表',
					}]
				},{
					label: '列表',
					children: [{
						label: '子列表',
					}]
				},
				{
					label: '列表',
					children: [{
						label: '子列表',
					}, {
						label: '子列表',
					}]
				}, {
					label: '列表',
					children: [{
						label: '子列表',
					}, {
						label: '子列表',
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			}
		},
		methods: {
			handleNodeClick() {

			}
		}
	}
</script>

<style scoped>
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

	@media (max-width:990px) {
		.left {
			float: left;
			background-image: linear-gradient(to top, #FFFFCC, #ffffff);
			border-right: 2px solid #CC1111;
			padding: 0 !important;
			height: 946px;
		}
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
