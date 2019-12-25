# newJs 函数封装库
引入说明：改进原直接引入的方式，新添加new 声明，防止全局污染。

引入后  先定义一个变量，然后声明；

写法：

```
var newJs = new newJs();
```



##### newJs.$

class .   id # 标签 < 获取选择器中第一个标签 $ 获取 选择器中的全部 @   不填时为name

```
console.log(newJs.$（"#id");
console.log(newJs.$（".class");
console.log(newJs.$（"<标签名");
console.log(newJs.$（"name");
console.log(newJs.$（"$.box1>p");
console.log(newJs.$（"@.box1>p");
```

##### newJs.screenH

屏幕的高度

##### newJs.screenW

屏幕高度

##### newJs.pcMb

判断是电脑端还是手机端   pc 为电脑端 mb 为移动端

