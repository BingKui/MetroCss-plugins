;
(function($) {
	$.fn.Loading = function(options) {
		return new loading(options);
	}
	var loading = function(options) {
		this.init(options);
	}
	loading.prototype = {
		init: function(options) {
			var self = this;
			self.opts = $.extend({}, {
				type: "spinner",
				text: "加载中..."
			}, options);
			var _load = self.creatDiv("mc-load").css("border-radius", "10px").appendTo($('body'));
			var _con = self.creatDiv("mc-load-main").appendTo(_load);
			_con.html(self.getContent(self.opts.type));
			self.text = $("<span></span>").addClass("mc-load-info").html(self.opts.text).appendTo(_load);
			//设置位置窗口居中
			_load.css({
				"position": "fixed",
				"top": "50%",
				"left": "50%",
				"margin-left": "-48px",
				"margin-top": "-46px"
			}).hide();
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
		},
		getContent: function(type) {
			if (type == "spinner") {
				return '<div class="mc-load-spinner">' +
					'<div class="bar1"></div>' +
					'<div class="bar2"></div>' +
					'<div class="bar3"></div>' +
					'<div class="bar4"></div>' +
					'<div class="bar5"></div>' +
					'<div class="bar6"></div>' +
					'<div class="bar7"></div>' +
					'<div class="bar8"></div>' +
					'<div class="bar9"></div>' +
					'<div class="bar10"></div>' +
					'<div class="bar11"></div>' +
					'<div class="bar12"></div>' +
					'</div>';
			}
			if (type == "atom") {
				return '<div class="mc-load-atom">' +
					'<div></div>' +
					'<div></div>' +
					'<div></div>' +
					'<div></div>' +
					'</div>';
			}
			if (type == "block") {
				return '<div class="mc-load-block"></div>';
			}
			if (type == "gradient") {
				return '<div class="mc-load-gradient"></div>';
			}
			if (type == "bounce") {
				return '<div class="mc-load-bounce">' +
					'<div class="bounce-one"></div>' +
					'<div class="bounce-two"></div>' +
					'</div>';
			}
			if (type == "climbing-dot") {
				return '<div class="mc-load-climbing-dot">' +
					' <div></div>' +
					' <div></div>' +
					' <div></div>' +
					' <div></div>' +
					' </div>';
			}
			if (type == "scale-ripple-multiple") {
				return '<div class="mc-load-scale-ripple-multiple">' +
					'   <div></div>' +
					' <div></div>' +
					' <div></div>' +
					' </div>';
			}
			if (type == "scale-multiple") {
				return '<div class="mc-load-scale-multiple">' +
					'   <div></div>' +
					'    <div></div>' +
					'    <div></div>' +
					'</div>';
			}
			if (type == "spin-clockwise") {
				return '<div class="mc-load-spin-clockwise ">' +
					'  <div></div>' +
					'  <div></div>' +
					' <div></div>' +
					'  <div></div>' +
					'  <div></div>' +
					' <div></div>' +
					'  <div></div>' +
					'<div></div>' +
					'  </div>';
			}
			if (type == "triangle-path") {
				return '<div class="mc-load-triangle-path">' +
					'  <div></div>' +
					' <div></div>' +
					'  <div></div>' +
					' </div>';
			}
			if (type == "square-jelly-box") {
				return '<div class="mc-load-square-jelly-box">' +
					' <div></div>' +
					'<div></div>' +
					'</div>';
			}
			if (type == "timer") {
				return '<div class="mc-load-timer">' +
					'<div></div>' +
					' </div>';
			}
		}
	}
})(jQuery)