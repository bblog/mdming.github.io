// 顶导航栏及置顶键的响应
window.onload = function () {
	var scrollTop = 0;
	document.onscroll = function () {
		// console.log(scrollTop);

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
var w=window.innerWidth ;
var  h=document.body.clientWidth ;
 var width= document.documentElement.clientWidth
console.log(w)
if(width<768){
	document.querySelector('#qq').href="mqqwpa://im/chat?chat_type=wpa&uin=479858761&version=1&src_type=web&web_src=oicqzone.com"
	
}