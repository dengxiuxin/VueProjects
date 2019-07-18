<template>
	<div class="hello">

		<nav class="navbar navbar-default tou_bu navbar-static-top">
			<div class="container">

				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
					 aria-expanded="false">
						<span class="sr-only">切换导航</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>

					</button>
					<a class="navbar-brand" href="#"><img class="logo" src="../../static/img/logos.png" /></a>
				</div>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav header_tab">

						<li v-for="(titl,index) in titles" :key="index"><a href="#" :key="titl.index">
								<router-link :to="titl.url">{{titl.name}}</router-link>
							</a></li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <div><img src="../../build/logo.png" width="20px" height="20px" />欢迎回来~<b>邓秀鑫</b></div>
                <!-- <span class="caret"></span> -->
                </a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
					</ul>

					<form class="navbar-form navbar-right select_sou">
						<div class="input-group _input-group">
							<input type="text" class="form-control" placeholder="搜索一下">
							<span class="input-group-btn">
								<button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>
							</span>
						</div>
					</form>
				</div>
			</div>
		</nav>
		<!-- 	编写者：LaoDeng
		注：出现"_" 为自定义类名 -->
		<div>
			<transition mode="out-in">
				<router-view></router-view>
			</transition>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				titles: [{
						name: '主页',
						url: '/home'
					},
					{
						name: '学习资料',
						url: '/Materials'
					},
					{
						name: '博客中心',
						url: '/UserInfo'
					},

				],
				uu:'',
			}
		},

	}
</script>

<style scoped>
	.navbar-brand {
		padding: 0px;
	}

	.logo {
		width: 180px;
		height: 48px;
	}

	.navbar {
		margin-bottom: 1px !important;

	}
</style>
