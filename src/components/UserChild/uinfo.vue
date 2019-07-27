<template>
  <div>
    <div class="col-md-8 col-sm-8 col-xs-8" style="padding-left:5%;">

      <div class="row">
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <img :src="'../../../static/img/'+$store.state.userinfo.logo">


              <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
                :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed"
                :file-list="fileList">
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>


          </div>
        </div>
      </div>

      <h2>用户基本信息</h2>
      <div class="panel-info">姓名：<span> {{$store.state.userinfo.username}}</span></div>
      <div class="panel-info">昵称：<span> {{$store.state.userinfo.nickname}}</span></div>
      <div class="panel-info">个人说明：<span> {{$store.state.userinfo.signature}}</span></div>
      <div class="panel-info">账号状态：<span> {{$store.state.userinfo.status}}</span></div>
      <div class="panel-info">邮箱：<span> {{$store.state.userinfo.email}}</span></div>
      <div class="panel-info">性别：<span> {{$store.state.userinfo.gender}}</span></div>
      <div class="panel-info">年龄：<span> {{$store.state.userinfo.age}}</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'uinfo',
    data() {
      return {
         fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      }
    },
    methods: {
       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    },
  }
</script>

<style scoped>

</style>
