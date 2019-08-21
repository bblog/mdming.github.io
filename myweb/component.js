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
var x1 = document.querySelectorAll('.xh-rater li');
document.querySelector('.xh-rater').addEventListener("click", (function (e) {
    nth = e.srcElement || e.target;
    for (i = 0; i < x1.length; i++) x1[i].classList.replace('fa-star', 'fa-star-o');
    for (i = x1.length; i > 0; i--) {
        x1[i - 1].classList.replace('fa-star-o', 'fa-star');
        if (x1[i - 1] == nth) break;
    }
}))
// 改变QQ地址
var width = document.documentElement.clientWidth
if (width < 600) {
	document.querySelector('#qq').href = "mqqwpa://im/chat?chat_type=wpa&uin=790430354&version=1&src_type=web&web_src=oicqzone.com"
	document.querySelector('#qq-f').href = "mqqwpa://im/chat?chat_type=wpa&uin=790430354&version=1&src_type=web&web_src=oicqzone.com"
}
// 遮盖层
document.querySelector('#weixin-f').addEventListener("click",(function(){
	document.querySelector('.cover').style.width="100%"
	document.querySelector(".cover").addEventListener("click",(function(){
this.style.width="0"
	}))
}))