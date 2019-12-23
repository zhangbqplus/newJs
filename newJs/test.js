var a = function() {
	var a = "HTC";
	var newJs_bind_opt_data = {
		"a": "HTC",
		"b": "1",
		"ddd": {
			"a": "1"
		},
		"c": 10
	};
	var b = "1";
	var newJs_bind_opt_data = {
		"a": "HTC",
		"b": "1",
		"ddd": {
			"a": "1"
		},
		"c": 10
	};
	var ddd = {
		"a": "1"
	};
	var newJs_bind_opt_data = {
		"a": "HTC",
		"b": "1",
		"ddd": {
			"a": "1"
		},
		"c": 10
	};
	var c = 10;
	var newJs_bind_opt_data = {
		"a": "HTC",
		"b": "1",
		"ddd": {
			"a": "1"
		},
		"c": 10
	};
	var method = function() {
		//$为保留字，如果想使用$，请用 &dollar转译
		// console.log(1111);
		function nihao() {
			alert(111);
			c = 100;
		}
		nihao()
	};
	method();
	var retrnData = function() {
		for (var key in newJs_bind_opt_data) {
			newJs_bind_opt_data[key] = eval(key);
		};
		return newJs_bind_opt_data;
	};
	retrnData();
	return newJs_bind_opt_data;
}
