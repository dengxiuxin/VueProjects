# kejidaima

> 未来是一场梦
> VUE单页应用

![Image text](https://github.com/dengxiuxin/VueProjects/blob/master/static/img/kejidiama.png)
## 响应式
![Image text](https://github.com/dengxiuxin/VueProjects/blob/master/static/img/kejidaimape.png)
## Build Setup

``` bash
# install dependencies							13699817056
npm install

# 已安装的依赖
	bootstrap	jquery
	popper		vue
	vue-router	axios
	vuex		vue-resource
	element-ui
	vue-quill-editor

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

```
# github 更新项目
# git status
# git add .
# git commit -m "text"
# git push origin master
```

```
#2019-06-26 更新
# 主页的改动
# 将主页的元素划分为子组件
# 修改了切换代码
# 让页面结构更加清晰可见


```

```
#2019-06-27 更新
# 替换jquery编写的轮播图组件
# 使用swiper轮播图插件
# 删减多余的图片文件夹
```

```
#2019-06-28 更新
# 新增插件 Element-ul
# add博客中心子组件
```

```
# 2019-07-12 更新
# 加入vuex管理数据
# 将本地json文件移动到 EasyMock API
# 实现父子孙组件的交互，数据的全局共享
```

```
# 2019-07-04

```

```
## 2019-07-18  重要修改
#  增加了server
#  加入express后端模块 载入mysql数据库
#  移除了notes组件
#  开始为用户群模块准备
```

```
## 2019-07-20 修复
# 完善登录模块
# 开始进行用户模块的扩展
# 在服务端引入cors实现跨域
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

```
## 2019-11-10 模块更新 大改
# Init Component Info
# 模板文件
#   Main.Vue --> 首页头部导航
#   Home.Vue --> 主体容器
#       ~ HomeChild --> 主体容器的子组件文件夹
#   Egret.vue --> 白鹭游戏展示页面
# 　registered.vue --> 用户注册页面
#   undefind.vue --> 404页面
#   bolg.vue --> 博客详情页
#       ~ UserChild --> 用户子组件文件夹
#   addbolg --> 写文章

```