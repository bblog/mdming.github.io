
document.querySelector('.menu').addEventListener("click",function (e){
	var bn=document.querySelector('.menu-nav');
	var x = bn.classList.contains("menu-content");//用于判断菜单是否展开
	bn.classList.toggle("menu-content");//更替类
	this.classList.toggle("change");//改变按钮形状
	if(x){
		bn.style.height="0%";
		bn.style.width="0%";
		document.querySelector('.container-nav').setAttribute('style','background-color: rgb(255, 255, 255);')
	}
	else{
		bn.style.height=(window.innerHeight-50)+"px";
		bn.style.width=window.innerWidth+"px";
		document.querySelector('.container-nav').setAttribute('style','background-color: aliceblue;')
	}
})
window.onscroll=function(event){
	// var t=document.documentElement.scrollY;
	var st= document.documentElement.scrollTop;
	if(st>500){
		// document.querySelector('.top').style.width="auto"
		document.querySelector('.top').style.right=5+"px"
	}
	else{
				// document.querySelector('.top').style.width="0"
				// document.querySelector('.top').style.display="none"
				document.querySelector('.top').style.right=-39+"px"
	}
	// console.log(e.wheelDelta);
}
// window.onload = function(){
  // function test(){
  //   var e = e || window.event;
  //   // if(e.wheelDelta){
  //     console.log(e.wheelDelta);
  //   // }else if(e.detail){
  //   //   alert(e.detail);
  //   }
   // };
  //  function nav(){
	 //    var e = e || window.event;
		// var a = e.wheelDelta;
	 //   if(a<0){
		//    document.querySelector('.container-nav').style.top=-50+"px";
	 //   }
	 //   else{
		//    document.querySelector('.container-nav').style.top=0+"px";
	 //   }
	 //   console.log(a)
  //  }
  //  document.DOMMouseScroll = function(){
  //  var e = e || window.event;
  // 		var a = e.wheelDelta;
		//  console.log(a)
  // if(a<0){
  // 		   document.querySelector('.container-nav').style.top=-50+"px";
  // }
  // else{
  // 		   document.querySelector('.container-nav').style.top=0+"px";
  // }
  //  }
 window.onload = function(){
 document.DOMMouseScroll = function(){
  var e = e || window.event;
  		var a = e.wheelDelta;
  if(a<0){
  		   document.querySelectorAll('.container-nav')[0].style.top=-50+"px";
  		   document.querySelectorAll('.container-nav')[1].style.top=-50+"px";
  }
  else{
  		document.querySelectorAll('.container-nav')[0].style.top=0+"px";
  		document.querySelectorAll('.container-nav')[1].style.top=0+"px";
  }
   }
   document.onmousewheel = function(){
   var e = e || window.event;
   		var a = e.wheelDelta;
   		
   if(a<0){
   		   document.querySelectorAll('.container-nav')[0].style.top=-50+"px";
   		   document.querySelectorAll('.container-nav')[1].style.top=-50+"px";
   }
   else{
   		document.querySelectorAll('.container-nav')[0].style.top=0+"px";
		document.querySelectorAll('.container-nav')[1].style.top=0+"px";
   }
  		
   }         
 }
