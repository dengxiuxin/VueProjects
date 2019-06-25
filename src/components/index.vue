<template>
	<div class="index">
		
		<div class="content">
			<h2 class="monsterText">你好
				<br>未来是一场梦
			</h2>
			<a 
		</div>
		
		<div class="monster">
			<div class="eye">
				<div class="eyeBall"></div>
			</div>
			<div class="mouth"></div>
		</div>
		
		<div class="monster blue">
			<div class="eye">
				<div class="eyeBall"></div>
			</div>
			<div class="mouth"></div>
		</div>
		
		
		<div id="rem">
		<div class="pageLoading">
			
			<div class="monster">
				<div class="eye">
					<div class="eyeBall"></div>
				</div>
				<div class="mouth"></div>
			</div>
			
			<div class="loading">
				<div class="bar"></div>
			</div>
			<h3 class="addtext">正在玩命加载</h3>
		</div>	
		</div>	
		
		<router-view >
		</router-view>
	</div>
</template>

<script>
	export default {
		name:'index',
		data () {
			return {
				
			}
		}
	}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	text-decoration: none;
}

a {
	color: #FFFFFF;
}
.index {
	width: 100%;
	height: 100%;
	background-color: #DB4D6D;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #FFFFFF;
	font-family:"Microsoft Yahei"
}

.content {
	padding: 20px;
}

.monster {
	width: 110px;
	height: 100px;
	border-radius: 20px;
	background-color: #e55A54;
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	position: relative;
	animation: jumping 0.8s infinite alternate;
}
h2,h3{
	letter-spacing: 5px;
}
.monster .eye {
	width: 40%;
	height: 40%;
	border-radius: 50%;
	background-color: #fff;
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.monster .eye .eyeBall {
	width: 50%;
	height: 50%;
	border-radius: 50%;
	background-color: #0C4475;
	animation: eyemove 1.6s infinite alternate;
}

.monster .mouth {
	width: 32%;
	height: 12px;
	border-radius: 12px;
	background-color: #fff;
}

.monster::before,
.monster::after {
	position: absolute;
	content: '';
	display: block;
	width: 20%;
	height: 10px;
	border-radius: 10px;
	background-color: #FFF;
	top: -10px;
	left: 50%;
}

.monster::before {
	transform: translateX(-70%) rotate(45deg);
}

.monster::after {
	transform: translateX(-30%) rotate(-45deg);
}

.monster.blue {
	animation-delay: 0.5s;
	background-color: #0C4475;
}

.monster.blue .eyeBall,
.monster.blue .mouth {
	background-color: #DB4D6D;
}

@keyframes jumping {

	50% {
		top: 0;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}

	100% {
		top: -50px;
		box-shadow: 0 120px 20px rgba(0, 0, 0, 0.1);
	}
}

@keyframes eyemove {

	0%,
	10%{
		transform: translateX(-50%)

	}
	90%,
	100% {
		transform: translate(50%);

	}
}

.pageLoading {
	position: fixed;
	top:0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #00B7FF;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	transition: opacity 0.5s;
}

.pageLoading .loading {
	width: 250px;
	height: 12px;
	background-color: #fff;
	border-radius: 5px;
	margin-top: 50px;
	overflow: hidden;
}
.pageLoading .loading .bar {
	width: 0%;
	height: 100%;
	background-color: #DB4D6D;
}
.pageLoading.complete {
	opacity: 0;
}
.pageLoading.complete .monster {
	transition: 0.5s;
	transform: scale(0.1) rotateZ(360deg);
}
.button {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 200px;
	height: 100px;
	border-radius: 15px;
	font-size: 30px;
	/* 	margin-left: 50px; */
	cursor: pointer;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
	background: #1E90FF; /* 背景颜色 */
	outline: none; /* 不显示轮廓线 */
	font-family: Microsoft YaHei;
	}
.button:active {
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.8);
	
}
.smal {
	font-size: 15px;
}
</style>