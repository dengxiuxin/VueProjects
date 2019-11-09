<template>
  <div>
    <div class="container-fluid box">
      <div class="col-md-offset-3 col-md-6 backimg col-xs-12 col-sm-12">
        <div class="heder col-md-12 col-xs-12 col-sm-12">
          <h1><i class="glyphicon glyphicon-pencil"></i> 用户注册</h1>
        </div>
        <el-collapse-transition>
          <div class="col-md-12 col-xs-12 col-sm-12 _res">

            <el-form :model="registform" status-icon :rules="rules" ref="registform" label-width="100px" class="demo-registform">


              <el-form-item label="邮箱" prop="email">
                <el-input type="text" v-model="registform.email" placeholder="请输入邮箱账号" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="registform.pass" placeholder="请填写密码" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="registform.checkPass" placeholder="请确认密码" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="真实姓名" prop="username">
                <el-input type="text" v-model="registform.username" placeholder="请输入真实姓名" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="用户昵称" prop="nickname">
                <el-input type="text" v-model="registform.nickname" placeholder="请输入用户昵称" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="用户头像" prop="logo">
                <el-radio-group v-model="registform.logo">
                <el-radio label="1.png"><img src="../../static/userimg/1.png" width="30px"></el-radio>
                <el-radio label="2.png"><img src="../../static/userimg/2.png" width="30px"></el-radio>
                <el-radio label="3.png"><img src="../../static/userimg/3.png" width="30px"></el-radio>
                <el-radio label="4.png"><img src="../../static/userimg/4.png" width="30px"></el-radio>
                <el-radio label="5.png"><img src="../../static/userimg/5.png" width="30px"></el-radio>
                <el-radio label="6.png"><img src="../../static/userimg/6.png" width="30px"></el-radio>
                <el-radio label="7.png"><img src="../../static/userimg/7.png" width="30px"></el-radio>
                <el-radio label="8.png"><img src="../../static/userimg/8.png" width="30px"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="年龄" prop="age">
                <el-input v-model.number="registform.age"></el-input>
              </el-form-item>

              <el-form-item label="性别" prop="gender">
                <el-radio-group v-model="registform.gender">
                  <el-radio label="男生"></el-radio>
                  <el-radio label="女生"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="个人说明" prop="signature">
                <el-input type="textarea" v-model="registform.signature" placeholder="个人说明" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('registform')">提交</el-button>
                <el-button @click="resetForm('registform')">重置</el-button>
              </el-form-item>

            </el-form>
          </div>
        </el-collapse-transition>
      </div>
    </div>


    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      //判断密码是否一致
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registform.checkPass !== '') {
            this.$refs.registform.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registform.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

      return {
        registform: {
          email: '',
          pass: '',
          checkPass: '',
          age: '',
          gender: '',
          nickname: '',
          username: '',
          signature: '',
          logo:''
        },
        rules: {
          resource: [{
            required: true,
            message: '请选择你的性别',
            trigger: 'change'
          }],
          logo: [{
            required: true,
            message: '请选择你的头像',
            trigger: 'change'
          }],
          signature: [{
              required: false,
              message: '个人说明',
              trigger: 'blur'
            },
            {
              min: 1,
              max: 56,
              message: '长度在 0 到 35 个字符',
              trigger: 'blur'
            }
          ],
          username: [{
              required: true,
              message: '请输入真实姓名',
              trigger: 'blur'
            },
            {
              min: 2,
              max: 6,
              message: '长度在 1 到 6 个字符',
              trigger: 'blur'
            }
          ],
          nickname: [{
              required: true,
              message: '请输入用户昵称',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 10,
              message: '长度在 3 到 10 个字符',
              trigger: 'blur'
            }
          ],
          email: [{
              required: true,
              message: '请输入邮箱地址',
              trigger: 'blur'
            },
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
              trigger: ['blur', 'change']
            }
          ],
          pass: [{
            required: true,
            validator: validatePass,
            trigger: 'blur'
          }],
          checkPass: [{
            required: true,
            validator: validatePass2,
            trigger: 'blur'
          }],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let _this = this;
            this.axios.post('http://127.0.0.1:3000/checksubmit', {
                email: _this.registform.email,
                checkPass: _this.registform.checkPass,
                age: _this.registform.age,
                nickname: _this.registform.nickname,
                username: _this.registform.username,
                gender: _this.registform.gender,
                signature: _this.registform.signature,
                logo: _this.registform.logo,
              })
              .then(response => {
                console.log('接受到数据！', response.data.exists)
                if (response.data.exists == 101) {
                  _this.$message({
                    type: 'error',
                    message: '注册失败！ 邮箱已经被注册了~ 亲'
                  })
                } else if (response.data.exists == 103) {
                  _this.$message({
                    type: 'error',
                    message: '注册失败！ 真实姓名已存在~ 亲'
                  })
                } else if (response.data.exists == 200) {
                  _this.$message({
                    type: 'success',
                    message: '注册成功! 请到主页登录！'
                  });
                  _this.$router.push({
                    path: '/home'
                  })
                }

              })
          } else {


            console.log('error submit!!');
            return false;


          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
  .el-radio {
    margin-right: 5px!important;
  }
</style>
<style scoped>
  .box {
    background-image: url(../../static/img/skyblue.jpg);
    background-size: 100% 100%;
    background-repead: no-repead;
    height: 798px;
  }

  .heder {
    font-weight: bold;
    margin-bottom: 15px;
  }

  .backimg {
    margin-top: 45px;
    background-color: #6ADFF7;
    box-shadow: 0 2px 1px 1px rgba(0, 0, 0, 0.2);
  }
</style>
