// 顶导航栏及置顶键的响应
window.onload = function () {
	var scrollTop = 0;
	document.onscroll = function () {
		if (scrollTop < (document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop)) { //判断页面滚动的方向
			document.querySelector('.container-nav').style.top = -50 + "px";
			document.querySelector('.aside').style.right = -45 + "px";
		} else {
			document.querySelector('.container-nav').style.top = 0 + "px";
			document.querySelector('.aside').style.right = 5 + "px";
		}
		if (scrollTop < 150) {
			document.querySelector('.aside').style.right = -45 + "px";
		}
		scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		// 次级导航栏响应
		var z = document.querySelector('.myweb-nav').offsetTop;
		if (scrollTop > z) {
			document.querySelector('.top-nav').style.display = "block";
		} else {
			document.querySelector('.top-nav').style.display = "none";
		}
	}
}
window.addEventListener("scroll", (function () {
	var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	var nth = document.querySelectorAll('.card-list');
	for (var i = 0; i < nth.length - 1; i++) { //遍历除最后一个，因为下面的if语句会造成下标越界
		document.querySelectorAll('#active li')[i].classList.remove('active'); //清除、不然一直显示
		document.querySelectorAll('#active li')[3].classList.remove('active');
		if (scrollTop + 50 >= nth[i].offsetTop && scrollTop + 50 <= nth[i + 1].offsetTop) {
			document.querySelectorAll('#active li')[i].classList.add('active');
		} else if (scrollTop + 50 >= nth[3].offsetTop) { //处理最后一个
			document.querySelectorAll('#active li')[3].classList.add('active');
		}
	}
}))
var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
if (scrollTop < 300 && scrollTop > 150)
	document.querySelector('.top-nav').style.display = "block";