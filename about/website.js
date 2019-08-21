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