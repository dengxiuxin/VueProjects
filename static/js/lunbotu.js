
$(document).ready(function(){		
   var arr = ["这里的链接！","都可以点的！","新闻API以链接！","Users完成度68%！","努力开发中！"];
   console.log(arr);
   var i = 0 ;
   var timer;
  //用jquery方法设置第一张图片显示，其余隐藏
  $('.items').eq(0).show().siblings('.items').hide();
   
  //调用showTime()函数（轮播函数）
  showTime();
   
  //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
  $('.tabs').hover(function(){
    //获取当前i的值，并显示，同时还要清除定时器
    i = $(this).index();
    Show();
    clearInterval(timer);
  },function(){
    //
    showTime();
  });
   
  //鼠标点击左侧的箭头
  $('.prevs').click(function(){
    clearInterval(timer);
    if(i == 0){
      i = 5;//注意此时i的值
    }
    i--;
    Show();
    showTime();
  });
   
  //鼠标点击右侧的箭头
  $('.nexts').click(function(){
    clearInterval(timer);
    if(i == 4){
      i = -1;//注意此时i的值
    }
    i++;
    Show();
    showTime();
  });
   
//创建一个showTime函数
function showTime(){
  //定时器
  timer = setInterval(function(){
    //调用一个Show()函数
    Show();
    i++;
    //当图片是最后一张的后面时，设置图片为第一张
    if(i==5){
      i=0;
    }
  },2000);
}
 
 
//创建一个Show函数
function Show(){
  //在这里可以用其他jquery的动画
  $('.items').eq(i).fadeIn(300).siblings('.items').fadeOut(300);
    $(".taba").text(arr[i]);
  //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
  $('.tabs').eq(i).addClass('actives').siblings('.tabs').removeClass('actives');
   
}

// $("#pwd").click(function() {
// 					console.log("响应");
// 						if ($("#pwd").hasClass("glyphicon-eye-open") == true) {
// 							$("#pwd").removeClass("glyphicon-eye-open");
// 							$("#pwd").addClass("glyphicon-eye-close");
// 							$(".form-control").attr("type", "text");
// 						} else {
// 							$("#pwd").removeClass("glyphicon-eye-close");
// 							$("#pwd").addClass("glyphicon-eye-open");
// 							$(".form-control").attr("type", "password");
// 						}
// 					});
});