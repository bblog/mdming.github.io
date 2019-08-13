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
	}
}