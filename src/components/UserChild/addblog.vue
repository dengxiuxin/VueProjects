<template>
	<div>
		<div class="col-md-5 col-sm-8 col-xs-8" style="padding-left:5%;">

			<h2>添加博客</h2>

			<form v-if="!submmited" class="form-horizontal">
				<div class="form-group col-md-12 col-sm-12 col-xs-12">
					<label>博客标题</label>
					<input type="text" class="form-control" v-model="blog.title" required>
				</div>
				<div class="form-group col-md-12 col-sm-12 col-xs-12 ">
					<label>博客内容</label>
					<textarea class="form-control" rows="5" v-model="blog.content"></textarea>
				</div>
				<div class="form-group col-md-12 col-sm-12 col-xs-12 ">
					<div id="checkboxes">
						<label>Vue.js</label>
						<input type="checkbox" value="Vue.js" v-model="blog.categories" />
						<label>Node.js</label>
						<input type="checkbox" value="Node.js" v-model="blog.categories" />
						<label>React.js</label>
						<input type="checkbox" value="React.js" v-model="blog.categories" />
						<label>Angular</label>
						<input type="checkbox" value="Angular" v-model="blog.categories" />
						</br>
						<div class="form-group">
							<label class="col-md-1 col-sm-1 col-xs-3 control-label" style="padding: 0; margin: 0;padding-left: 10px;">其他</label>
							<div class="col-md-4 col-sm-5 col-xs-6">
								<input type="text" class="form-control" v-model="blog.categorie">
							</div>
						</div>
					</div>
				</div>
				<div class="form-group col-md-12 col-sm-12 col-xs-12 ">
					<label>作者:</label>
					<select v-model="blog.author">
						<option v-for="(author,index) in authors" :key="index">{{author}}</option>
					</select>
				</div>
				<div class="form-group col-md-12 col-sm-12 col-xs-12 text-center">
					<button @click.prevent="post" type="button" class="btn btn-primary btn-lg">发布博客</button>
				</div>


			</form>
			<div v-if="submmited">
				<div class="alert alert-success" role="alert">发布成功!</div>
			</div>
		</div>
		<div class="col-md-4 col-sm-8 col-xs-8 preview">
			<div class="form-group col-md-12 col-sm-12 col-xs-12 text-center" id="preview">
				<br />
				<p style="font-size: 30px; font-weight: bold;">博客预览</p>

				<div class="form-group col-md-12 col-sm-12 col-xs-12">
					<h4><b>博客标题:</b></h4>
					<p>{{blog.title}}</p>
				</div>
				<div class="form-group col-md-12 col-sm-12 col-xs-12">
					<h4><b>博客内容:</b></h4>
					<p>{{blog.content}}</p>
				</div>
				<p><b>博客分类:</b></p>
				<div class="form-group col-md-12 col-sm-12 col-xs-12 text-center">

						<p v-for="(category,index) in blog.categories" :key="index"  class="col-md-3 col-sm-3 col-xs-3 text-center">
							{{category}}
						</p>
						<p>{{blog.categorie}}</p>
				</div>
				<p><b>作者:</b>{{blog.author}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'addblog',
		data() {
			return {
				blog: {
					title: "",
					content: "",
					categories: [],
					categorie:"",

				},
				authors: [
					"LaoDeng", "花花", "无为君", ""
				],
				submmited: false
			}
		},
		methods: {
			post() {
				this.$http.post("https://jsonplaceholder.typicode.com/posts", {
					title: this.blog.title,
					body: this.blog.content,
					userId: 1
				}).then(
					function(data) {
						console.log(data)
						this.submmited = true
					})


			}
		},
	}
</script>

<style scoped>
	.preview {
		border: 1px solid #ccc;
		padding-top: 10px;
		margin-top: 20px;
	}
</style>
