<template>
  <div>
    <ul class="_cla-box">
      <li><a href="#"></a></li>
    </ul>
    <hr style="background-color: #999999; margin: 0px; padding: 0px;" />

    <ul class="row _new">


      <li class="col-md-12 col-ms-12 col-xs-12" v-for="(item,index) in this.$store.state.artivcle" v-if='index<=num'
        :key="index">
        <div class="col-md-2 col-ms-3 col-xs-3">
			
          <img :src="'http://localhost:3000'+item.logo" class="img-rounded img-responsive">
          <h5 class="text-center">{{item.nickname}}</h5>
        </div>

        <div class="col-md-10 col-ms-9 col-xs-9">

            <a style="cursor:pointer">
              <h4 class="h4a"  @click="query(item)">{{item.summary}}</h4>
              <span style="max-height: 41px!important;"  @click="query(item)">{{item.content}}</span>
            </a>
          <small>
            <b>{{new Date(item.create_ad).toLocaleString()}}</b>
          </small>
          <br />
          <div class="creare">{{item.tags}}</div>


        </div>
      </li>


    </ul>
    <div class="sdl col-md-12 col-ms-12 col-xs-12">
      <button class="btn-default btn btn-info text-center" @click="loading">加载更多</button>
      <button class="btn-default btn btn-info text-center" @click="cancel" v-if="num>6">返回上一步</button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        num: 3,
        sum: 4,
      }
    },
    methods: {
      loading() {
        this.num += this.sum

      },
      cancel() {
        if (!this.num <= 5) {
          this.num -= this.sum

        }
      },
      query(item) {
        this.$router.push({
          path: '/bolg',
          query: {
            shopid: item
          }
        });
        console.log(item)
      }
    },
    mounted: function() {
      let _this = this;
      //最新注册的用户信息
      this.axios.post('http://127.0.0.1:3000/artivcle', {
          sta: 200
        })
        .then(response => {
          _this.$store.commit('SAVE_ARTIVCLE', response.data)

        })
    }
  }
</script>

<style scoped>
  .creare {
    float: right;
    border: 1px solid #C0C0C0;
    padding: 4px;
    border-radius: 10px;
  }

  .sdl {
    text-align: center;
    padding: 15px;
  }

  ._cla-box {
    background-image: url(../../../static/img/hotnew.png);
    height: 38px;
  }

  ._cla-box li {
    width: 14%;
    float: right;
    margin-top: 20px;
    padding: 0px;
    text-align: center;
    background-color: #EEF0F1;
    border-radius: 5px;
    margin-right: 5px;
  }

  ._new {
    margin: 0px;
    padding: 0px;
  }

  ._new li {
    padding: 10px 10px 0 0;
    border-bottom: 1px solid #EAEAEA;
  }

  ._new h4 {
    margin-top: 0px;
    margin-bottom: 5px;
    font-weight: bold;
  }

  ._new span {
    margin-top: 5px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: -o-ellipsis-lastline;
    text-overflow: ellipsis;
  }

  @media (max-width:480px) {
    ._new h5 {
      font-size: 8px;
    }

    ._cla-box li {
      width: 18%;
      font-size: 8px;
    }
  }

  @media (max-width:580px) {
    .creare {
      float: right;
      border: 1px solid #C0C0C0;
      padding: 0px 2px;
      border-radius: 10px;
      margin-top: -20px;
      font-size: 12px;
    }

    .h4a {
      font-size: 15px;
    }
  }
</style>
