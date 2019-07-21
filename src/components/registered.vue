<template>
  <div>
    <div class="container box">
      <div class="heder col-md-12 col-xs-12 col-sm-12">
        <h1><i class=""></i>用户注册</h1>
      </div>
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
              <el-button @click="shows" class="res_button"><span class="glyphicon glyphicon-refresh"></span></el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-collapse-transition>


    </div>


    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [{
              required: true,
              message: '请输入活动名称',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            }
          ],
          region: [{
            required: true,
            message: '请选择活动区域',
            trigger: 'change'
          }],
          date1: [{
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
          date2: [{
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }],
          type: [{
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }],
          resource: [{
            required: true,
            message: '请选择活动资源',
            trigger: 'change'
          }],
          desc: [{
            required: true,
            message: '请填写活动形式',
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
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

<style scoped>
  .box {
    background-color: #F0F0F0;
  }

  .heder {
    text-align: center;
    font-weight: bold;
    margin-bottom: 15px;
  }
</style>
