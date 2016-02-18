;
/**
 * tabs组件
 * @param {Object} $
 */
(function($) {
	$.tabs = function(tabtit, tab_conbox, event) {
		$(tab_conbox).find("li").hide();
		$(tabtit).find("li:first").addClass("thistab").show();
		$(tab_conbox).find("li:first").show();
		$(tabtit).find("li").bind(event, function() {
			$(this).addClass("thistab").siblings("li").removeClass("thistab");
			var activeindex = $(tabtit).find("li").index(this);
			$(tab_conbox).children().eq(activeindex).show().siblings().hide();
			return false;
		});
	}
})(jQuery)