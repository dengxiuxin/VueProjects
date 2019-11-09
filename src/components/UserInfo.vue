<template>
  <div class="hello">
    <div class="header col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <img :src="'../../static/img/'+img" width="50px" @click="lfte" />

      <el-badge :value="12" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="3" class="item">
        <el-button size="small">回复</el-button>
      </el-badge>
      <el-badge :value="1" class="item" type="primary">
        <el-button size="small">我的</el-button>
      </el-badge>

    </div>

    <transition name="el-zoom-in-left">
    <div class="left col-lg-2 col-md-2 col-sm-4 col-xs-4" v-if="isShow">

      <div class="left_info">
        <div class="left_in">
          <img :src="$store.state.userinfo.logo" class="img-rounded" style="margin-left: 20px; margin-top: 15px;" />
        </div>
        <div class="left_fo">
          <span>你好!</span><span>
            {{$store.state.userinfo.username}}</span><br />
          <span><img src="../../static/img/start.png" width="20px" height="20px" />
            {{$store.state.userinfo.status}}</span>
        </div>

      </div>

      <hr />
      <div class="meun">
        <br />
        <h1>信息中心</h1>
      </div>

      <el-row>
        <el-col>
          <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu index="0">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>控制台</span>
              </template>
              <el-menu-item index="0" @click="uinfo">用户资料</el-menu-item>

              <el-submenu index="0-1">
                <template slot="title">发布博客</template>
                <el-menu-item index="0-2" @click="write">写博客</el-menu-item>
                <el-menu-item index="0-3">已发布博客</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>

    </div>
    </transition>

    <transition name="el-zoom-in-top">
      <div v-if="writes" :class="cla">
        <addblog></addblog>
        <!-- 添加博客组件 -->
      </div>
    </transition>

    <transition name="el-zoom-in-top">
      <div v-if="uinfos" :class="cla">
        <uinfo></uinfo>
        <!-- 添加博客组件 -->
      </div>
    </transition>


    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        img:'var.png',
        cla:'col-md-10 col-sm-8 col-xs-8',
        isShow:true,
        name: "博客中心",
        uinfos: true,
        writes: false,
      }
    },
    methods: {
      lfte() {
        this.isShow = !this.isShow
        if(this.isShow == true){
          this.cla = 'col-md-10 col-sm-8 col-xs-8',
          this.img = 'var.png'
        }else {
          this.cla = 'col-md-12 col-sm-12 col-xs-12',
          this.img = 'vara.png'
        }
      },
      write() {
        this.uinfos = false
        this.writes = true
      },
      uinfo() {
        this.writes = false
        this.uinfos = true
      },


      handleNodeClick() {

      },
      handleOpen(key, keyPath) {

      },
      handleClose(key, keyPath) {

      }

    },
  }
</script>

<style scoped>
  .item {
    margin-right: 15px;
    margin-left: 15px;
  }

  .hello {
    border: 5px solid #CC0000;
    float: left;
    width: 100%;
  }

  .header {
    float: right;
    padding: 0 !important;
    height: 50px;
    margin: 0px;
    border-bottom: 2px solid #cc0000;
    background-color: #fff;
  }

  .left {
    float: left;
    background-image: linear-gradient(to top, #FFFFCC, #ffffff);
    border-right: 2px solid #CC1111;
    padding: 0 !important;
    height: 680px;
  }

  .left h3 {
    float: left;
    width: 100%;
    height: 50px;
    text-align: center;
    border-bottom: 2px solid #CC1111;
    line-height: 50px;
    letter-spacing: 3px;
    margin: 0;
  }

  .left_info {
    float: left;
    width: 100%;
    height: 15%;
    background-color: #FFFFFF;
    margin-bottom: 20px;
  }

  .left_in {
    float: left;
    width: 30%;
    text-align: center;
    padding: 5px;
  }

  .left_in img {
    width: 50px;
  }

  .left_fo {
    float: left;
    width: 70%;
    text-align: center;
    height: 30%;
    line-height: 30px;
    margin-top: 10px;

  }

  .meun h1 {
    font-size: 25px;
    letter-spacing: 8px;
    text-align: center;

  }

  @media (max-width:990px) {
    .left {
      float: left;
      background-image: linear-gradient(to top, #FFFFCC, #ffffff);
      border-right: 2px solid #CC1111;
      padding: 0 !important;
      height: 990px;
    }
    .item {
      margin-right: 19px;
    }
  }
  @media (min-width:980) {
     .left {
      float: left;
      background-image: linear-gradient(to top, #FFFFCC, #ffffff);
      border-right: 2px solid #CC1111;
      padding: 0 !important;
      height: 990px;
    }
  }
  @media (max-width:490px) {
    .item {
      margin-right: 15px;
      margin-left: 15px;
    }
  }
  @media (max-width:430px) {
    .left_in {
      float: left;
      width: 100%;
      text-align: center;
      padding: 5px;
    }

    .left_fo {
      float: left;
      width: 100%;
      text-align: center;
      height: 30%;
      line-height: 30px;


    }

    .meun h1 {
      font-size: 15px;
      letter-spacing: 6px;
      text-align: center;

    }
  }
  @media (max-width:380px) {
     .item {
      margin-right: 10px;
      margin-left: 10px;
    }
     .left h3 {
      letter-spacing: -1px;
    }
  }
</style>
<style>
  .el-submenu .el-menu-item {
    padding: 0 25px!important;
    height: 50px;
    line-height: 50px;
    min-width: 100px!important;
  }
  .el-submenu__title {
    padding-left: 25px!important;
  }
  .el-submenu__title span {
    margin-left: -12px!important;
  }
  .el-submenu__title i {
    margin-left: -20px!important;
  }
</style>
