var height = document.documentElement.clientHeight;
if (document.documentElement.clientHeight != height) {
	document.querySelector('.main').style.height = height + "px";
}
document.querySelector('main').addEventListener("click", (function (e) {
	var x = e.target.className;
	if (x == "t") {
		window.location.href = "we/book.html"
	} else if (x == "b") {
		window.location.href = "we/plan.html"
	} 
}))

document.querySelector('.img-left').addEventListener("click", (function (e) {
	window.location.href = "we/book.html"
}))
document.querySelector('.img-right').addEventListener("click", (function (e) {
	window.location.href = "we/plan.html"
}))