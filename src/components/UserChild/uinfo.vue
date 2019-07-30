<template>
  <div>
    <div class="col-md-9 col-sm-8 col-xs-8" style="padding:0px;">

      <div class="col-md-3 col-sm-12 col-xs-12">
        <div class="row">
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
      <div class="col-md-9 col-sm-12 col-xs-12" style="padding: 0px;">
        <div style="background-color: #FFFFFF; padding: 15px; margin: 10px; border: 1px solid #9BCEEA; border-radius: 5px;">
          <ul style="padding-left: 5px;">
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
              {{$store.state.userinfo.signature}}
            </li>
            <li
            ><b class="panel-info">账号状态：</b>
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
          </ul>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'uinfo',
    data() {
      return {
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
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
    ._thead {
      font-size: 16px;
      font-weight: bold;
      border-bottom: 1px solid silver;
    }
    ul>li {
      padding: 5px;
       border-bottom: 1px solid antiquewhite  ;
    }
  @media (max-width:400px) {}
</style>
