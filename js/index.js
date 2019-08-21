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
if (document.documentElement.clientWidth < 600) {
	document.querySelector('#qq').href = "mqqwpa://im/chat?chat_type=wpa&uin=790430354&version=1&src_type=web&web_src=oicqzone.com"
	document.querySelector('#qq-f').href = "mqqwpa://im/chat?chat_type=wpa&uin=790430354&version=1&src_type=web&web_src=oicqzone.com"
}
// 遮盖层
document.querySelector('#weixin-f').addEventListener("click", (function () {
	document.querySelector('.cover').style.width = "100%"
	document.querySelector(".cover").addEventListener("click", (function () {
		this.style.width = "0"
	}))
}))
// 轮播图
var index = 0;

var length = document.querySelectorAll('.items').length;

// 浏览器尺寸变化时进行响应
document.querySelector('.index').style.height = 350 + "px" //为模块设置高度为浏览器的高度(适应手机)
// 初始设置容器、轮播图的宽高
document.querySelector('.banner-list').style.width = length * document.querySelector('.banner').clientWidth + 'px';
if (document.body.clientWidth > 768) {
	//document.querySelector('.index').style.height = window.innerHeight + "px" //为模块设置高度为PC浏览器的高度
} else {
	document.querySelector('.index').style.height = 350 + "px" //为模块设置高度为浏览器的高度(适应手机)
}
for (var j = 0; j < length; j++) {
	document.querySelectorAll('.items')[j].style.width = document.querySelector('.banner').clientWidth + 'px';

}
// 创建小点
for (var i = 0; i < length; i++) {
	var points = document.createElement('li')
	document.querySelector('.point').appendChild(points)
	points.classList.add('point-items')
	// 第一个点要先亮
	if (i == 0) {
		points.classList.add('active')
	}
}
// 下一张函数
var Next = function () {
	document.querySelector('.banner-list').style.transition = "all 1s"
	if (index >= length - 1) {
		index = -1;
	}
	index++;
	document.querySelector('#go').style.width = "100%"
	var width = -index * document.querySelector('.banner').clientWidth + 'px';
	// 设置转化的大小
	Points();
	document.querySelector('.banner-list').style.transform = "translate3d(" + width + ",0, 0px)"
	// if (index == 0) {
	// 	document.querySelector('.banner-list').style.transition = "none"
	// }
}
// 上一张函数
var Pre = function () {
	index--;
	if (index < 0) {
		index = length - 1;
	}
	Points();
	var width = -index * document.querySelector('.banner').clientWidth + 'px';
	document.querySelector('.banner-list').style.transition = "all 1s"
	document.querySelector('.banner-list').style.transform = "translate3d(" + width + ",0, 0px)"
}
// 是否轮播及设定轮播
var Interval = setInterval(Next, 5000);
// 鼠标再上面就停止轮播
document.querySelector('.banner').addEventListener("mouseenter", (function () {
	// 移除进度条
	document.querySelector('#go').classList.remove("go-bar")
	clearInterval(Interval);
}))
// 鼠标离开后就继续轮播
document.querySelector('.banner').addEventListener("mouseleave", (function () {
	// 设置进度条
	document.querySelector('#go').classList.add("go-bar")
	Interval = setInterval(Next, 5000);
}))

//点的设置
var Points = function () {
	var points = document.querySelectorAll('.point-items')
	for (var i = 0; i < length; i++) {
		points[i].classList.remove("active")
	}
	// 加判断条件防止下标越界
	if (index < length) {
		points[index].classList.add("active")
	}
}
// 上一张、下一站按钮
document.querySelector('.pre').addEventListener("click", (function () {
	Pre();

}))
document.querySelector('.next').addEventListener("click", (function () {
	Next();
}))
// 让页面刚加载完就显示点
Points();
// 监听下面的点
document.querySelector('.point').addEventListener("click", function (e) {
	clearInterval(Interval);
	for (var i = 0; i < document.querySelectorAll('.point-items').length; i++) {
		if (document.querySelectorAll('.point-items')[i] == e.target) {
			index = i - 1
			Next(); //立刻跳转
			document.querySelector('#go').classList.remove("go-bar")
			setTimeout(function () {
				Interval = setInterval(Next, 5000)
				document.querySelector('#go').classList.add("go-bar");
			}, 3000);
		}
	}
})
//**************************************** */
// 移动端的跟手性
//******************************************* */
// 开始触摸
var startX = 0
var moveX = 0
var endX = 0
document.querySelector('.banner-list').addEventListener("touchstart", (function (e) {
	this.style.transition = "none"
	startX = e.changedTouches[0].clientX
}))
// 触摸过程
var width
document.querySelector('.banner-list').addEventListener("touchmove", (function (e) {
	moveX = e.changedTouches[0].clientX
	if (index <= -1) {
		index = length - 1
	}
	width = -index * document.querySelector('.banner').clientWidth;
	var deltaX = -(startX - moveX) + width + 'px'
	document.querySelector('.banner-list').style.transform = "translate3d(" + deltaX + ",0px, 0px)"
}))
// 手指离开
document.querySelector('.banner-list').addEventListener("touchend", (function (e) {
	// console.log("结束", e.changedTouches[0].clientX)
	endX = e.changedTouches[0].clientX
	var deltaX = -(startX - endX)
	var changed = document.querySelector('.banner').clientWidth * 0.5
	width = -index * document.querySelector('.banner').clientWidth + "px" //width: 转换的距离
	if (deltaX < 0 && deltaX < -changed) {
		if (index == length - 1) {
			index = -1
		}
		Next();
	} else if (deltaX > changed) {
		Pre();
	} else {
		document.querySelector('.banner-list').style.transition = "all 1s"
		document.querySelector('.banner-list').style.transform = "translate3d(" + width + ",0px, 0px)"
	}
}))
