<template>
  <div>
			<el-dialog :visible.sync="dialogVisible">	 
				    <div style="height: 550px;">
						<uinfo></uinfo>	
					</div>
			</el-dialog>
			
			
    <el-collapse-transition>
      <div class="col-md-12 col-xs-12 col-sm-12 text-center _res" v-if="isShow">
        <h3>你的知音都在这里</h3>
        <p>表达网民立场，记录个人生活，聚集意见领袖，众多草根精英，以我们的观点影响社会的进程 。</p>
        <hr>
        <router-link to="/registered"><button type="button" class="btn btn-primary">注册博客</button></router-link>
        <button type="button" class="btn btn-primary" style="cursor: pointer;" @click="show"><span class="glyphicon glyphicon-refresh"></span></button>
      </div>
    </el-collapse-transition>

    <el-collapse-transition>
      <div class="col-md-12 col-xs-12 col-sm-12 _res" v-if="isShows">
        <span class="login_logo"><i class="el-icon-loading"></i>登录</span>



		<el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="55px" class="demo-loginForm ">
          <el-form-item label="账号" prop="username">
            <el-input type="text" v-model="loginForm.username" placeholder="请输入邮箱账号" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item class="log_btn">
            <el-button type="primary" @click="submitForm('loginForm')" class="login_button">登录</el-button>
            <el-button @click="resetForm('loginForm')" class="login_button">重置</el-button>

            <el-button @click="shows" class="res_button" style="cursor: pointer;"><span class="glyphicon glyphicon-refresh"></span></el-button>
          </el-form-item>
        </el-form>
	  </div>
	  
    </el-collapse-transition>

    <el-collapse-transition>
      <div class="col-md-12 col-xs-12 col-sm-12 _res" v-if="isuser">
        <div style="height: 20px;"></div>
        <div class="user_box">
          <div class="user_img" style="text-align: center; margin-top: -30px;">
            <img :src="$store.state.userinfo.logo" width="100%" height="100%" style="padding: 3px; border-radius: 50%;"
              class="img-thumbnail" />
          </div>
          <h3 class="text-center" style="color: #f2a11c;">{{$store.state.userinfo.nickname}}</h3>
          <div class="text-center">
            <button type="button" class="btn btn-primary  btn-sm"  @click="dialogVisible = true">博客信息</button>
            <button type="button" class="btn btn-primary  btn-sm"  @click="outlogin">退出登录</button>
          </div>
        </div>
      </div>
    </el-collapse-transition>
		

    <!-- <p class="_line"></p>
    <div class="col-md-12 col-xs-12 col-sm-12">
      <h3>新秀<img src="../../../static/img/xuankuang_.png" style="float: right; width: 25px; height: 25px;"></h3>
      <ul class="row _figure _fih">
        <li class="col-md-12 col-ms-12 col-xs-12" v-for="(item,index) in this.$store.state.newuserinfo" v-if='index<=4' 
          :key="index">
          <img :src="item.logo" class="img-thumbnail">
          <h5>{{item.username}}</h5><span class="label label-danger">New</span>
          <small>
            {{item.signature}}
          </small>
        </li>

      </ul>
    </div>
    <p class="_line"></p> -->
	
    <!-- <div class="col-md-12 col-xs-12 col-sm-12">
      <h3>热文榜<img src="../../../static/img/bianqian_.png" style="float: right; width: 25px; height: 25px;"></h3>
      <ul class="row _figure _s">
        <li class="col-md-12 col-ms-12 col-xs-12" v-for="(item,index) in this.$store.state.tops.data" v-if='index<=8'
          :key="index">
          <p class="label label-danger">{{index+1}}</p>
          <p class="_b">
            <a :href="item.url">{{item.title}}</a>

          </p>
        </li>
      </ul>
    </div> -->
  </div>

</template>

<script>
  export default {
    data() {
		
      //表单数据
      return {
				dialogVisible: false,
        isShow: true,
        isShows: false,
        isuser: false,
        loginForm: {
          username: '',
          password: ''
        },
        //验证规则
        rules: {
          username: [{
              required: true,
              message: '请输入用户名',
              trigger: 'blur'
            },
            {
              min: 4,
              max: 25,
              message: '长度在 4 到 25 个字符',
              trigger: 'blur'
            }
          ],
          password: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            {
              min: 6,
              max: 15,
              message: '长度在 6 到 23 个字符',
              trigger: 'blur'
            }
          ]
        }
      }

    },
    methods: {
      bloginfo (){
          this.$router.push({path:'/UserInfo'});
      },
      outlogin() {
        //退出登录
        this.isShow = true,
          this.isShows = false,
          this.isuser = false
        var storage = window.localStorage;
        storage.clear();
        this.loginForm.username = '',
          this.loginForm.password = ''
      },

      show() {
          this.isShow = false,
          this.isShows = true
      },
      shows() {
        this.isShow = true,
          this.isShows = false
      },

      //登录验证模块
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let _this = this;
            this.axios.post('http://127.0.0.1:3000/checklogin', {
                username: _this.loginForm.username,
                password: _this.loginForm.password
              })
              .then(response => {
                console.log('接受到数据！', response.data)

                if (response.data.length) {

                  //把用户数据存入本地
                  localStorage.setItem('userinfo', JSON.stringify(response.data[0]))
                  //取出本地用户数据
                  let userinfo = JSON.parse(localStorage.getItem('userinfo'))
                  //把登录后去到的用户信息存入vuex里
                  _this.$store.commit('SAVE_USERINFO', userinfo)
                  _this.$message({
                    type: 'success',
                    message: '登录成功!',
                  });
                  _this.isuser = true,
                    _this.isShow = false,
                    _this.isShows = false

                } else {
                  _this.$message({
                    type: 'error',
                    message: '登录失败！ 账号或者密码错了哟~ 亲'
                  })
                }
              })

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
    mounted: function() {
      //加载本地用户数据
      if (JSON.parse(localStorage.getItem('userinfo')) == null) {
      } else {
        this.$store.commit('SAVE_USERINFO', JSON.parse(localStorage.getItem('userinfo')))
        this.isuser = true,
          this.isShow = false,
          this.isShows = false
      }
    },
  }
</script>

<style scoped>
  .user_box {
    background-color: #FFF;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 2px 1px 1px rgba(0, 0, 0, 0.2);

  }

  .user_img img {
	width: 100px;
	height: 100px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
  }

  .res_button {
    width: 30px;
    height: 30px;
    padding: 0 !important;
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
    padding: 0 !important;

  }

  ._res {
    background-color: #EDF5FF;
    border-radius: 2px;
	margin-top: 7px;
    padding-top: 10px;
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
    padding: 0px !important;
    position: relative;
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

  ._fih li {
    border-bottom: 1px solid #EAEAEA;
    margin-top: 3px;
    padding-bottom: 5px;
  }

  ._figure li h5 {
    position: absolute;
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
