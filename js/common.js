/*
 * 框架模板
 * version:0.0.1
 */
(function($) {
	/*
	 * 数据配置数组的配置参数
	 * 0为本地数据，1为远程数据
	 */
	var conf = 0;
	var srcPref = ["../src/json", "http://"];
	var dataArray = [{
		//登录
		"login": srcPref[conf] + "login.json?1=1"
	}, {
		//登录
		"login": srcPref[conf] + "baseserver?eventid=1"
	}];
	var dataUrl = dataArray[conf];
	/*
	 * 扩展jQuery的Ajax方法，用于异步获取数据
	 * get方式，post方式，json返回
	 * 2个比较重要：GetJson  , PostJson
	 */
	$(function() {
		$.extend({
			/*
			 * get方式请求数据。返回的JSON要符合规范。
			 * 引号不能去掉。完整写法：{"key","value"}
			 */
			GetJson: function(url, datas, callback) {
				$.ajax({
					url: url,
					type: "GET",
					data: "_=" + (new Date()).getTime() + (datas == null || datas == "" ? "" : ("&" + datas)),
					cache: false,
					dataType: "json",
					beforeSend: function(xhr) {
						xhr.overrideMimeType("text/plain; charset=utf-8");
					},
					success: function(json) {
						callback("success", json);
					},
					error: function(e) {
						callback("error", {
							"flag": false,
							"errmsg": "Call service failed！"
						});
					}
				});
			},
			/*
			 * post方式提交数据，适用于大数据提交。返回的JSON要符合规范。
			 * 引号不能去掉。完整写法：{"key" , "value"}
			 */
			PostJson: function(url, datas, callback) {
				$.ajax({
					url: url,
					type: "POST",
					data: "_=" + (new Date()).getTime() + (datas == null || datas == "" ? "" : ("&" + datas)),
					cache: false,
					dataType: "json",
					beforeSend: function(xhr) {
						xhr.overrideMimeType("text/plain; charset=utf-8");
					},
					success: function(json) {
						callback("success", json);
					},
					error: function(e) {
						callback("error", {
							"flag": false,
							"errmsg": "Call service failed！"
						});
					}
				});
			}
		});
	});
})(jQuery);