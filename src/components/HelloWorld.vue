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
						
						<li v-for="titl in titles"><a href="#" :key="titl.id">
								<router-link :to="titl.url">{{titl.name}}</router-link> 
							</a></li>
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
				titles:[
						{name:'主页',url:'/home'},
						{name:'学习资料',url:'/Materials'},
						{name:'往期新闻',url:'/notes'},
						{name:'个人中心',url:'/UserInfo'},
						{name:'index',url:'/index'},
						]
			}
		}
	}
</script>

<style scoped>

</style>
