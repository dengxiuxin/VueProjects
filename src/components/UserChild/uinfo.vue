<template>
  <div>

      <div class="col-md-9 col-sm-12 col-xs-12" style="padding: 0px;">
        <div style="background-color: #FFFFFF; padding: 15px; margin: 10px; border: 1px solid #9BCEEA; border-radius: 5px;">
          <ul style="padding-left: 5px;">
			  <li>
				  <el-upload class="avatar-uploader" action="api/image" :data="uploadData" :show-file-list="false" :on-success="handleAvatarSuccess"
				    :before-upload="beforeAvatarUpload">
				    <img v-if="imageUrl" :src="imageUrl" class="avatar">
				    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
				  </el-upload>
			  </li>
            <li class="_thead">用户基本信息</li>
            <li>
              <b class="panel-info">姓名：</b>
              {{$store.state.userinfo.username}}
            </li>
            <li>
              <b class="panel-info">昵称：</b>
              {{$store.state.userinfo.nickname}}
            </li>
            <li>
              <b class="panel-info">个人说明：</b>
              {{$store.state.userinfo.personal}}
            </li>
            <li><b class="panel-info">账号状态：</b>
              {{$store.state.userinfo.status}}
            </li>
            <li>
              <b class="panel-info">邮箱：</b>
              {{$store.state.userinfo.email}}
            </li>
            <li>
              <b class="panel-info">性别：</b>
              {{$store.state.userinfo.gender}}
            </li>
            <li>
              <b class="panel-info">年龄：</b>
              {{$store.state.userinfo.age}}
            </li>
            <li>
              <button type="button" class="btn btn-primary btn-sm">修改信息</button>
              <button type="button" class="btn btn-default btn-sm" disabled="disabled">修改密码</button>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imageUrl: JSON.parse(localStorage.getItem('userinfo')).logo,
        uploadData:JSON.parse(localStorage.getItem('userinfo'))

      };
    },
    methods: {

      handleAvatarSuccess(res, file) {
        console.log(res);
        console.log(file);
        console.log(this.uploadData)
        this.imageUrl = URL.createObjectURL(file.raw);
      },

      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M && this.uploadData.user;
      }
    },
  }
</script>

<style scoped>
 /* .userimg {
    background-color: #FFFFFF;
    text-align: center;
    padding: 50px 0;
    margin-top: 15px;
    border: 1px solid #9BCEEA;
    border-radius: 5px;
  } */

  ._thead {
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px solid silver;
  }

  ul>li {
    padding: 5px;
    border-bottom: 1px solid antiquewhite;
  }

  @media (max-width:400px) {}
</style>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .el-upload__input {
    display: none !important;
  }
</style>
