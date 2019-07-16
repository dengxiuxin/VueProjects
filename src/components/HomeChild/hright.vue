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
				<span class="login_logo"><i class="el-icon-loading"></i>登录</span>
				<el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="50px" class="demo-loginForm ">
					<el-form-item label="账号" prop="username">
						<el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="password">
						<el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item class="log_btn">
						<el-button type="primary" @click="submitForm('loginForm')" class="login_button">登录</el-button>
						<el-button @click="resetForm('loginForm')" class="login_button">重置</el-button>
						<el-button  @click="show" class="res_button"><span class="glyphicon glyphicon-refresh"></span></el-button>
					</el-form-item>
				</el-form>
				

				
				
			</div>
			<p class="_line"></p>
			<div class="col-md-12 col-xs-12 col-sm-12">
				<h3>新秀<img src="../../../static/img/xuankuang_.png" style="float: right; width: 25px; height: 25px;"></h3>
				<ul class="row _figure _fih">
					<li class="col-md-12 col-ms-12 col-xs-12" v-for="(item,index) in this.$store.state.tops.data" v-if='index<=6' :key="index">
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
					<li class="col-md-12 col-ms-12 col-xs-12" v-for="(item,index) in this.$store.state.tops.data" v-if='index<=15' :key="index">
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
			
			//表单数据
			return {
				isShow:true,
				loginForm: {
          username: '',
          password: ''
        },
				//验证规则
        rules: {
         username:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
				 ],
				 password :[
					 { required: true, message: '请输入密码', trigger: 'blur' },
					 { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
				 ]
        }
			}
			
		},
		methods: {
			show(){				
					this.isShow = !this.isShow
					// 登录表单切换
			},
			 submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert("登录成功");
						alert("登录成功"+"输出数据账号："+this.loginForm.username+"输出数据密码:"+this.loginForm.username)
          } else {
            console.log('登录失败，请检查账号或密码是否正确，或是输入条件是否满足！');
            return false;
          }
        });
      },
      resetForm(loginForm) {
        this.$refs[loginForm].resetFields();
      }
		},
	}
</script>

<style scoped>
	.res_button {
		width: 30px;
		height: 30px;
		padding: 0!important;
	}
	.login_logo {
		display: block;
		margin-bottom: 5px;
		font-size: 22px;
		color: #333;
	}
	.login_button {
				width: 50px;
				height: 30px;
				padding: 0!important;
				
		}
	._res {
		background-color: #F6F6F6;
		border-radius: 2px;
		padding-top: 10px;
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
