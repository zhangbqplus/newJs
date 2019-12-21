//欢迎使用newJs——事件封装库
var newJs={};
// 获取节点id,或类   class .   id # 标签 < 获取选择器中第一个标签 $ 获取 选择器中的全部 @   不填时为name
newJs.$=function(id){
  if (id.substring(0,1)==".") {
    return document.getElementsByClassName(id.substring(1,id.length));
  }else if (id.substring(0,1)=="#") {
    return document.getElementById(id.substring(1,id.length));
  }else if (id.substring(0,1)=="<") {
    return document.getElementsByTagName(id.substring(1,id.length));
  }else if (id.substring(0,1)=="$") {
    return document.querySelector(id.substring(1,id.length));
  }else if (id.substring(0,1)=="@") {
    return document.querySelectorAll(id.substring(1,id.length));
  }else{
	return document.getElementsByName(id.substring(1,id.length));
  }
  /*
  1、通过id获取,可以交给一个变量保存（括号里写id名）
     let a = document.getElementById("box");
     console.log(a);
  2、通过class获取（获取到的是数组）
     console.log(document.getElementsByClassName("1"));
  3、通过标签名获取（获取到的是数组）
     console.log(document.getElementsByTagName("div"));
  4、通过name属性获取（获取到的是数组）
     console.log(document.getElementsByName(2));
	 html5获取节点方法
  1、获取到的是满足选择器的第一个标签（括号里写css选择器）
     console.log(document.querySelector(".box1>p"));
  2、获取到的是数组（括号里写css选择器）
     console.log(document.querySelectorAll(".box1>p"));
	 */
};
//判断是电脑端还是手机端
newJs.pcMb=function(){
  if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
   return 'mb';
  } else {
   return 'pc';
  }
};
//获取屏幕的宽和高
newJs.screenH=function(){
  return window.screen.height;
};
newJs.screenW=function(){
  return window.screen.width;
};
//获取移动端信息
newJs.osInf=function(){
	var device_type = navigator.userAgent;//获取userAgent信息
	var md = new MobileDetect(device_type);//初始化mobile-detect
	var os = md.os();//获取系统
	return os;
}