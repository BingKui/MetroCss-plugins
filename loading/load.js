var MyLoading = function(options) {
	if (options.text != undefined) {
		this.loadText = options.text || "加载中...";
	}
	this.init();
}
MyLoading.prototype = {
	init: function() {
		var self = this;
		var _load = self.creatDiv("mc-load").css("border-radius", "10px").appendTo($('body'));
		var _con = self.creatDiv("mc-load-main").appendTo(_load);
		self.text = $("<span></span>").addClass("mc-load-info").html(self.loadText).appendTo(_load);
		//设置位置窗口居中
		_load.css({
			"position": "fixed",
			"top": "50%",
			"left": "50%",
			"margin-left": "-48px",
			"margin-top": "-46px"
		}).hide();
		var _conLoad = '<div class="mc-load-square-jelly-box">' +
			' <div></div>' +
			'<div></div>' +
			'</div>';
		_con.html(_conLoad);
		self.load = _load;
	},
	open: function() {
		this.load.show();
	},
	close: function() {
		this.load.hide();
	},
	creatDiv: function(str) {
		return $("<div></div>").addClass(str);
	},
	setContent: function(str) {
		this.text.html(str);
	}
}