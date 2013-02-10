/*!
 * jQuery scrollHistory Plugin v1.0
 * https://github.com/robi50/scrollHistory
 *
 * Copyright 2013 robi50
 */
$.scrollHistory = function(cookieTimeOut){
	var cookieTimeOut = cookieTimeOut >= 0 ? cookieTimeOut : 999999999999999999;

	var currentUrl = window.location.href;

	/* if exists current url ? set the scrollTop */
	$.setCurrentUrlScroll = function(currentUrl){
		if($.cookie(currentUrl)){
			$("body").scrollTop($.cookie(currentUrl));
		}
	}

	/* when scroll moving ? update the scrollTop */
	$.updateCurrentUrlScroll = function(currentUrl){
		$(window).scroll(function(){
			var date = new Date();
			date.setTime(date.getTime() + (cookieTimeOut * 1000));

			var currentUrlScroll = $("body").scrollTop();
			if($.cookie(currentUrl)){$.removeCookie(currentUrl)}
			$.cookie(currentUrl, currentUrlScroll, {expires : date});
		});		
	}

	/* start the parts */
	$.setCurrentUrlScroll(currentUrl);
	$.updateCurrentUrlScroll(currentUrl);
}	
