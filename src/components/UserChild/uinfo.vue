<template>
  <div>
    <div class="col-md-12 col-sm-12 col-xs-12" style="padding:0px;">

      <div class="col-md-3 col-sm-12 col-xs-12">
        <div class="row">
          <div class="thumbnail">
            <img :src="'../../../static/userimg/'+$store.state.userinfo.logo">
            <div>
              <button type="button" class="btn btn-info btn-sm">修改头像</button>
            </div>
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
  </div>
</template>

<script>
  export default {
    name: 'uinfo',
    data() {
      return {

      }
    },
    methods: {

    }
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
    border-bottom: 1px solid antiquewhite;
  }

  @media (max-width:400px) {}
</style>
