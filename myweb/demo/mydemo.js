// 手机菜单键操作按钮
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
// 顶导航栏及置顶键的响应
window.onload = function () {
	var scrollTop = 0;
	document.onscroll = function () {
		// console.log(scrollTop);
		if (!document.querySelector('.menu-nav').classList.contains("menu-content")) {
			if (scrollTop < (document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop)) { //判断页面滚动的方向

				document.querySelectorAll('.container-nav')[0].style.top = -50 + "px";
				document.querySelectorAll('.container-nav')[1].style.top = -50 + "px";
				document.querySelector('.aside').style.right = -45 + "px";
			} else {
				document.querySelectorAll('.container-nav')[0].style.top = 0 + "px";
				document.querySelectorAll('.container-nav')[1].style.top = 0 + "px";
				document.querySelector('.aside').style.right = 5 + "px";
			}
			if (scrollTop < 150) {
				document.querySelector('.aside').style.right = -45 + "px";

			}
			scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;;
		}
	}
	// 手机右侧切换菜单样式按钮
	document.querySelector('label.switch').addEventListener("click", function () {
		document.querySelector('.nav-m').style.display = "none";
		document.querySelector('.nav-bottom').style.display = "block";
		document.querySelector('.menu-nav').style.visibility = "hidden";
	})
}