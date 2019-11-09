<template>
	<div>
		<ul class="_cla-box">
			<li v-for="(item,index) in category"><a href="#">{{item.title}}</a></li>
		</ul>
		<hr style="background-color: #999999; margin: 0px; padding: 0px;" />

		<ul class="row _new"  >


			<li class="col-md-12 col-ms-12 col-xs-12" v-for="(item,index) in this.$store.state.artivcle" v-if='index<=num' :key="index">
				<div class="col-md-2 col-ms-3 col-xs-3">
					<img :src="'../../../static/userimg/'+item.logo" class="img-rounded img-responsive">
					<h5 class="text-center">{{item.nickname}}</h5>
				</div>
				<div class="col-md-10 col-ms-9 col-xs-9">
					<h4>{{item.summary}}</h4>
           <span>{{item.content}}</span>
					<small>

            <b>{{new Date(item.create_ad).toLocaleString()}}</b>
          </small>
					<br />
					<span><a :href="item.create_ad">详情</a></span>
				</div>
			</li>


		</ul>
		<div class="sdl col-md-12 col-ms-12 col-xs-12">
			<button class="btn-default btn btn-info text-center" @click="loading">加载更多</button>
			<button class="btn-default btn btn-info text-center" @click="cancel" v-if="num>6">取消上一步</button>
		</div>

	</div>
</template>
<script>
	export default {
		data() {
			return {
        category:[],
				num: 4,
				sum: 5,
			}
		},
		methods:{
			loading(){
				this.num += this.sum
        var timestamp1 = (new Date()).valueOf();
        console.log(timestamp1)
			},
			cancel(){
				if(!this.num <=5){
					this.num -= this.sum

				}
			},
		},
		mounted: function() {
			let _this = this;
		//最新注册的用户信息
		this.axios.post('http://47.107.63.20:3000/category',{
		  sta: 200
		})
		.then(response => {
			_this.category = response.data
      console.log(_this.category)
		})
     this.axios.post('http://47.107.63.20:3000/artivcle',{
      sta: 200
    })
    .then(response => {
      	_this.$store.commit('SAVE_ARTIVCLE',response.data)
      console.log(response.data)
    })

		},



	}
</script>

<style scoped>
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
</style>
