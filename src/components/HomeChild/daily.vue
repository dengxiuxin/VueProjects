<template>
	<div>
		<ul class="_cla-box">
			<li><a href="#"></a></li>
		</ul>
		<hr style="background-color: #999999; margin: 0px; padding: 0px;" />

		<ul class="row _new">


			<li class="col-md-12 col-ms-12 col-xs-12 " v-for="(item,index) in this.$store.state.artivcle" v-if='index<=num' :key="index">
				<div class="row _wenzhangbox">

					<div class="col-md-2 col-ms-3 col-xs-3">

						<img :src="'http://localhost:3000'+item.logo" class="img-rounded img-responsive">
						<h5 class="text-center">{{item.nickname}}</h5>
					</div>

					<div class="col-md-10 col-ms-9 col-xs-9">

						<a style="cursor:pointer">
							<h4 class="h4a" @click="query(item)">{{item.title}}</h4>
							<span style="max-height: 41px!important;" @click="query(item)">{{item.summary}}</span>
						</a>



						<br />

					</div>
					<div class="creare">
						<i class="_text_i">{{item.tags}}</i>
						<b style="color: #AC2925;">{{item.cerate_ad}}</b>
					</div>

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
			}
		},
		mounted: function() {
			let _this = this;
			//文章
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
	._text_i {
		border: 1px solid #C0C0C0;
		padding: 3px;
		margin: 2px;
		color: #13CE66;
	    border-radius: 5px;
	}
	._wenzhangbox {
		border: 1px solid #EDF5FF;
		padding: 15px;
		margin: 10px;
		background-color: rgba(237, 245, 255, 0.5);
	}

	._pos {
		position: absolute;
	}

	.creare {
		float: right;
		border: 1px solid #C0C0C0;
		padding: 5px;
		margin: 5px;
		margin-bottom: 20px;
		margin-right: 35px;
		border-radius: 5px;
		position: absolute;
		bottom: 0;
		right: 0;
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
			padding: 2px;
			margin: 1px;
			margin-bottom: 16px;
			margin-right: 35px;
			border-radius: 5px;
			position: absolute;
			bottom: 0;
			right: 0;
			font-size: 12px;
		}
		._text_i { 
			padding: 1px;
			margin: 0px;
		}
		.h4a {
			font-size: 15px;
		}
	}

	@media (max-width:450px) {
		.creare {
			float: right;
			border: 1px solid #C0C0C0;
			padding: 1px;
			margin: 0px;
			margin-bottom: 13px;
			margin-right: 28px;
			border-radius: 5px;
			position: absolute;
			bottom: 0;
			right: 0;
			font-size: 12px;
		}
	}
</style>
