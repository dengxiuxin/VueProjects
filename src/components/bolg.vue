<template>
  <div class="bolg">
    <div class="container _box_content">
      <div class="row _plate-head">
        <div class="col-md-8 col-sm-7 col-xs-12 _plate-png" style="background-image:url(../../static/img/touzhu.png);">
          <h2>博客</h2>
        </div>
        <div class="col-md-4 col-sm-5 col-xs-0">
          <div class="statistical">
            这里收录了<span id="blogNum">778</span>个博客，<span id="blogArticleNum">15244</span>篇博文
          </div>
        </div>
      </div>
    </div>

    <p class="container lins"></p>
    <div class="container" style="background-color: #FFFFFF;">
      <div class="row">
        <div class="col-md-9 col-xs-12 col-sm-12">
          <div class="col-md-12 col-xs-12 col-sm-12 bolg-title">
            <h3>{{shopid.title}}</h3>
            <h5>{{shopid.summary}}</h5>
            <h6 style="float: right;">
              <span>{{shopid.cerate_ad}}</span>&nbsp;&nbsp;
              <a class="nickname-a">{{shopid.nickname}}</a>&nbsp;&nbsp;
              <span>阅读数：11</span>
            </h6>
          </div>
          <div class="col-md-12 col-xs-12 col-sm-12 text-center" style="padding: 15px;">
            <!-- <img :src="'../../static/img/'+shopid.cover" style="width: 100%;"> -->
          </div>
          <div class="col-md-12 col-xs-12 col-sm-12">
						
						<div class="ql-container ql-snow">
						    <div class="ql-editor" style="height: auto;">
										<div v-html="shopid.content"></div>
						    </div>
						</div>
          </div>

        </div>


        <div class="col-md-3 col-xs-12 col-sm-12" style=" border-left: 1px solid #EAEAEA;">
          <!-- 右边-->
          <hright></hright>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bolg',
    data() {
      return {
        shopid: (() => {
          return this.$route.query.shopid

        })(),
      }

    },
    methods: {
    },
    mounted: function() {
      let _this = this;
		
       
        // //最新注册的用户信息
        // this.axios.post('http://127.0.0.1:3000/alluserinfo', {
        //   sta: 200
        // })
        // .then(response => {
        //   _this.$store.commit('SAVE_NEWUSERINFO', response.data)
        // })
    },
  }
</script>

<style scoped>
  .bolg-title {
    margin-bottom: 5px;
  }

  .nickname-a {
    color: cornflowerblue;
    cursor: pointer;
  }

  .statistical {
    float: right;
    padding-top: 38px;
    color: #999999;
  }

  ._plate-png {
    /* background-image: url(img/touzhu.png); */
    background-position: 15px 27px;
    background-repeat: no-repeat;

  }

  ._plate-head {
    background-color: #FFFFFF;
		margin-top: 25px;
  }

  .lins {
    margin-bottom: 0px !important;
    height: 4px;
    background-color: #999999;
  }
</style>
