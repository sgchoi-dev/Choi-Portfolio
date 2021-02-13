$(function () {
  main.swipe();
});

$(document).ready(function(){
	if($('#firstViewPopup').length != 0){
		setTimeout(function(){
			$('html, body').scrollTop(0);
		}, 1000);
	}
	if($(window).width() < 1025){
		if($('.personalBanner').length != 0){
			setTimeout(function(){
				$('html, body').scrollTop(0);
			}, 1000);
		}
	}
});

var main = function(){
	var _isChkInAppBrwMn = false;
  var _resizeW, _resizeH;

  return {
		initializeEvt : function() {
			if(navigator.userAgent.indexOf("KAKAO") > -1) {
				_isChkInAppBrwMn = true;
			} else {
				_isChkInAppBrwMn = false;
			}

			if(navigator.userAgent.indexOf("Mobi") > -1) {
                _isChkMobile = true;
            } else {
                _isChkMobile = false;
            }
		},
		swipe : function () {
			var mainSwiper = new Swiper('.swiper-container.main-swiper', {
				observeParents: true,
				observer: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
		},
	}
}();