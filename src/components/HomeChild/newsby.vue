<template>
	<div>
		<div class="row">


			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<swiper :options="swiperOption">
					<swiper-slide>
						<a class="items" href="#">
						<img src="../../../static/img/werpe.jpg" width="100%" height="450px" />
						</a>
					</swiper-slide>
					<swiper-slide>
						<a class="items" href="#">
						<img src="../../../static/img/weprn.png" width="100%" height="450px" />
						</a>
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
					<!-- <div class="swiper-button-prev" slot="button-prev"></div>
					<div class="swiper-button-next" slot="button-next"></div> -->
				</swiper>
			</div>
			<!-- 轮播图 -->
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {


				swiperOption: {
					spaceBetween: 30,
					centeredSlides: true,
					autoplay: {
						delay: 2500,
						disableOnInteraction: false
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
				}

			}
		},
	}
</script>

<style scoped>

	.items img {
		height: 420px;
	}

/* 	#containers {
		width: 350px;
		height: 460px;
		position: relative;
		overflow: hidden;
	} */
</style>
