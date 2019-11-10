<template>
	<div>
		<el-dialog :visible.sync="dialogVisible">
			
			<div style="height: 550px;">
				<h4>信息修改<i class="el-icon-document"></i></h4>
				<ul style="margin-left: 0; padding-left: 0;">
					<li>
						<b class="panel-info">姓名：</b>
						<el-input v-model="input" placeholder="姓名"></el-input>
					</li>
					<li>
						<b class="panel-info">昵称：</b>
						<el-input v-model="input1" placeholder="昵称"></el-input>
					</li>
					<li>
						<b class="panel-info">性别：</b>
						<el-input v-model="input3" placeholder="性别"></el-input>
					</li>
					<li>
						<b class="panel-info">年龄：</b>
						<el-input v-model="input4" placeholder="年龄"></el-input>
					</li>
					<li>
						<b class="panel-info">个人说明：</b>
						<el-input type="textarea" :rows="4" v-model="input2" placeholder="个人说明"></el-input>
					</li>
				</ul>
				<el-button type="success">确认修改 <i class="el-icon-edit"></i></el-button>
			</div>
		</el-dialog>

		<div class="col-md-12 col-sm-12 col-xs-12" style="padding: 0px;">
			<div style="background-color: #FFFFFF; padding: 15px; margin: 0px; border: 1px solid #9BCEEA; border-radius: 5px;">
				<ul style="padding-left: 5px;">
					<li>
						<el-upload class="avatar-uploader" action="api/image" :data="uploadData" :show-file-list="false" :on-success="handleAvatarSuccess"
						 :before-upload="beforeAvatarUpload">
							<img v-if="imageUrl" :src="imageUrl" class="avatar">
							<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</li>
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
						{{$store.state.userinfo.personal}}
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
						<button type="button" class="btn btn-primary btn-sm" @click="dialogVisible = true">修改信息</button>
						<button type="button" class="btn btn-default btn-sm" disabled="disabled">修改密码</button>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dialogVisible: false,
				imageUrl: JSON.parse(localStorage.getItem('userinfo')).logo,
				uploadData: JSON.parse(localStorage.getItem('userinfo')),
				input: this.$store.state.userinfo.username,
				input1: this.$store.state.userinfo.nickname,
				input2: this.$store.state.userinfo.personal,
				input3: this.$store.state.userinfo.gender,
				input4: this.$store.state.userinfo.age
			};
		},
		methods: {
			handleAvatarSuccess(res, file) {
				console.log(res);
				console.log(file);
				console.log(this.uploadData)
				this.imageUrl = URL.createObjectURL(file.raw);
			},

			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M && this.uploadData.user;
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
		border-bottom: 1px solid antiquewhite;
	}

	@media (max-width:400px) {}
</style>
<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}

	.el-upload__input {
		display: none !important;
	}
</style>
