$(function () {
  main.clickScrollEvt();
});

var main = function(){
  return {
		clickScrollEvt : function() {
			$("header .btn-home").on("click", function(){
				TweenMax.to($("html, body"), 0.5, {scrollTop:0, ease:Power3.easeOut});
			});

			$("header .gnb .menu").each(function(q){
				$(this).on("click", function(){
					TweenMax.to($("html, body"), 0.5, {scrollTop:$("#"+$(this).attr("data")).offset().top - 100, ease:Power3.easeOut});
				});
			});
		}
	}
}();