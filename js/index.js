document.querySelector('.menu').addEventListener("click", function (e) {
	var bn = document.querySelector('.menu-nav');
	var x = bn.classList.contains("menu-content"); //用于判断菜单是否展开
	bn.classList.toggle("menu-content"); //更替类
	this.classList.toggle("change"); //改变按钮形状
	if (x) {
		bn.style.height = "0%";
		bn.style.width = "0%";
		document.querySelector('.container-nav').setAttribute('style', 'background-color: rgb(255, 255, 255);')
	} else {
		bn.style.height = (window.innerHeight - 50) + "px";
		bn.style.width = window.innerWidth + "px";
		document.querySelector('.container-nav').setAttribute('style', 'background-color: #F0F8FF;')
	}
})
window.onload = function () {
	document.onmousewheel = function () {
		var e = e || window.event;
		var a = e.wheelDelta;
		var st = document.documentElement.scrollTop;
		if (a < 0) {
			document.querySelectorAll('.container-nav')[0].style.top = -50 + "px";
			document.querySelectorAll('.container-nav')[1].style.top = -50 + "px";
		} else {
			document.querySelectorAll('.container-nav')[0].style.top = 0 + "px";
			document.querySelectorAll('.container-nav')[1].style.top = 0 + "px";
		}
		if (st > 300) {
			document.querySelector('.top').style.right = 5 + "px"
		} else {
			document.querySelector('.top').style.right = -39 + "px"
		}
	}
}
var ClientY = 0;
document.addEventListener("touchstart", function (e) {
	ClientY = e.changedTouches[0].clientY;
})
document.addEventListener("touchend", function (e) {
	if (ClientY > e.changedTouches[0].clientY) {
		document.querySelectorAll('.container-nav')[0].style.top = -50 + "px";
	} else {
		document.querySelectorAll('.container-nav')[0].style.top = 0 + "px";
	}
	if (ClientY > e.changedTouches[0].clientY || document.documentElement.scrollTop < 200) {
		document.querySelector('.top').style.right = -39 + "px"
	} else {
		document.querySelector('.top').style.right = 5 + "px"
	}
})