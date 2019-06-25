<template>
	<div class="hello">
		<div class="chitchat container">
			<h1>{{msg}}</h1>
		</div>
			
		<router-view >
		</router-view>
	</div>
</template>

<script>
	export default {
		name:'HelloWorld',
		data () {
			return {
				msg:'休闲养生'
			}
		}
	}
</script>

<style>
	.chitchat {
		width: 1200px;
		height: 595px;
		background-color: #FFFFFF;
	}
</style>