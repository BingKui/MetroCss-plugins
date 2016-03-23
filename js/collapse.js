;$(function() {
	//隐藏所有消息主体内容
	$('.mc-collapse-content').hide();
	//点击标题相对应的内容展开，再次点击后折叠
	$('.mc-list-item').bind("click", function() {
		var _con = $(this).find('.mc-collapse-content');
		if (!_con.hasClass("mc-collapse-show")) {
			//获取所有的元素
			var _allCon = $(".mc-list-item div.mc-collapse-content");
			for (var i = 0; i < _allCon.length; i++) {
				if ($(_allCon[i]).hasClass("mc-collapse-show")) {
					$(_allCon[i]).removeClass("mc-collapse-show");
					$(_allCon[i]).prev(".mc-item-icon").removeClass("mc-top");
					$(_allCon[i]).slideToggle(400);
				}
			}
			_con.addClass("mc-collapse-show");
			_con.prev(".mc-item-icon").addClass("mc-top");
		}else{
			_con.removeClass("mc-collapse-show");
			_con.prev(".mc-item-icon").removeClass("mc-top");
		}
		_con.slideToggle(400);
	});
});