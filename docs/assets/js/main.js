//  nav fadeout
$(function() {
	var navBox = $(".nav");
	var TargetPos = 200;
	$(window).scroll( function() {
	  var ScrollPos = $(window).scrollTop();
	  if( ScrollPos > TargetPos ) {
	  navBox.fadeOut();
	}
	else {
	  navBox.fadeIn();
	}
  });
  });
  
//  nav2 fadein
$(function() {
	var navBox = $(".nav2");
	navBox.hide();
	var TargetPos = 200;
	$(window).scroll( function() {
	  var ScrollPos = $(window).scrollTop();
	  if( ScrollPos > TargetPos ) {
	  navBox.fadeIn();
	}
	else {
	  navBox.fadeOut();
	}
  });
	});


		