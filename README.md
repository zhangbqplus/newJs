# newJs 函数封装库
建议引入方式：

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

##### newJs.osInf

获取系统信息

##### newJs.bind

数据及事件的绑定

属性： 写法如下		以‘:’开始的属性内容为事件执行后返回内容，当出现多个返回值时首字符为$作为标识符

```
<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>newjS 事件封装库UI</title>
		<script src="newJs/newJs_1.0.0.js"></script>
	</head>
	<body>
		<div id="myApp" class="aaa" :value="ahfga">
			<p @onclick="add()">{{c}}</p>
			<p>3333
				<div>{{a + a}} hfahfa</div>
			</p>
			<p>4444</p>
			<div :class='c == 100 ? "red " : "block " '>
				改变我的样式
			</div>
			<div :class='$ "red" : 100 > c && c > 10  , "green" : c > 100,'>
			改变我的样式
			</div>
			<p @onclick="sub()" >{{a}}</p>
			<p>{{b}}</p>
			<p>{{a + b + c == c ? 'yes' : 'no'}}</p>
			<p>{{c == 105 ? 999 : 212 }}</p>
			<p>{{c == 10 ? 10000 : 222 }}</p>
			<input type="" name="" [value]="c" />
			<input type="" name="" [value]="c" />
		</div>

		<input id="aa" type="text" value="111" />
		<input type="text" value='2222' />
		<span id="bb">{{test}}</span>
		<div class="aaa">
			<p>5555</p>
			<p>6666</p>
			<p>7777</p>
			<p>{{a}}</p>
		</div>
	</body>
	<style>
		.red{
			color: red;
		}
		.block{
			color: black;
		}
		.green{
			color: green;
		}
	</style>
	<script type="text/javascript">
		var newjs = new newJs();
		//数据流的绑定
		newjs.bind({
			id: 'myApp', //挂载点
			data: { //数据
				a: newjs.osInf()[0],
				b: '1',
				ddd: {
					a: '1'
				},
				c: 10
			},
			// onloud: function() { //钩子1，进入即执行
			// 	nihao();
			// },
			method: function() { //方法
				function onloud() { //钩子1，进入即执行 （内部外部同时出现时，只执行内部的）
					nihao();
				}
				function nihao() {
					c = 100;
				}
				function aaa() {
					c = c + 1;
				}
				function add() {
					c = ++ c;
					console.log(c);
				}
				function sub() {
					c = -- c;
					console.log(c);
				}
			},
		});
	</script>
</html>

```



##### 说明：

以上内容为已经公开的函数，我们想要收集更多关于原生js需求，从而封装成更容易使用的函数事件，以解决您在工作时遇到的一些麻烦，或者节约您的开发时间。同时您也可以找到您所需要的函数，单独拿出来使用。当然如果您有更好的建议或者已经完成的函数，欢迎提交至本脚本中，也可以直接与我们联系（zbq_0427@163.com)。

##### 使用：

针对已经成熟的不同版本将，我们将放置在 produce 文件夹下