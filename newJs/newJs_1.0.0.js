//欢迎使用newJs——事件封装库
var newJs={};
// 获取id,或类
newJs.$=function(id){
  if (id.substring(0,1)==".") {
    return document.getElementsByClassName(id.substring(1,id.length));
  }
  return document.getElementById(id);
};
//判断是电脑端还是手机端
newJs.pcORmb=function(){
  var result;
  if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    result='mb';
  } else {
    result='pc';
  }
  return result;
};
//获取屏幕的宽和高
newJs.screenH=function(){
  return window.screen.height;
};
newJs.screenW=function(){
  return window.screen.width;
};
//添加newJs节点，并返回id下的所有内容
newJs.setnewJs=function(id){
  var newJs_Start=id.innerHTML.replace(/{{/g,"<newJs class='newJs'>");
  id.innerHTML=newJs_Start;
  var regS = new RegExp("}}","g");
  var newJs_End=id.innerHTML.replace(regS,"</newJs>");
  id.innerHTML=newJs_End;
  return id.innerHTML;
};
// 隐藏所有newJs内容,并寻找是否具有数据绑定
newJs.setDate=function(id){
  var newJs=document.getElementsByClassName('newJs');
  for (var i = 0; i < newJs.length; i++) {//遍历html具有数据绑定的数据
    var newJs=newJs[i].innerText.split(".");//数据绑定结构拆分
    for (var k = 0; k < Data.length; k++) {//遍历Data具有的数据
      var dataK=Data[k]+'';//字符串处理
      var data=dataK.split('=>');//Data结构拆分
      if (newJs[0]==data[0]) {
        console.log(dataK);
      }

    }
  }
  console.log(newJs);
};
