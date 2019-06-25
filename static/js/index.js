var per = 0;
var timer;
timer = setInterval(function() {
	$('.bar').css('width', per + '%');
	per += 1;
	if (per > 100) {
		$('.pageLoading').addClass('complete');
		setTimeout(function() {
			$('.monsterText').html('<h2>Welome</h2><h3>进入我的项目列表</h3><h4 class="smal">Go to my project list</h4></br><div class="button"><a href="#">进入</a></div>');
			$("#rem").empty();
		}, 2700);
		clearInterval(timer);
	}
}, 30);
setTimeout(function() {
	$('.addtext').append('.');
}, 500);
setTimeout(function() {
	$('.addtext').append('.');
}, 900);
setTimeout(function() {
	$('.addtext').append('.');
}, 1200);
setTimeout(function() {
	$('.addtext').html('正在玩命加载')
}, 1400);
setTimeout(function() {
	$('.addtext').append('.');
}, 1700);
setTimeout(function() {
	$('.addtext').append('.');
}, 2300);
setTimeout(function() {
	$('.addtext').append('.');
}, 2600);