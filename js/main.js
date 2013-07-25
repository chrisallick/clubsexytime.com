changeLogo = function() {
	clearTimeout( t );

	var $next = $('.logo.on').removeClass('on').next('.logo');
	if ($next.length) {
	    $next.addClass('on'); 
	}
	else {
	    $(".logo:first").addClass('on');
	}

	t = setTimeout(changeLogo, 7000 );
}

changeBackground = function( x, y ) {
	$("#logo .sprite").css({
		backgroundPosition: x+"px "+y+"px",
		//backgroundPosition: y
	});
}

var count, t;
$(document).ready(function() {

	//t = setTimeout(changeLogo, 7000 );

	$("#info").click(function(event){
		event.preventDefault();
		if( $(this).hasClass("hidden") ) {
			$(this).removeClass("hidden").addClass("show");
			$("#expanded-info").stop().fadeIn(200);
		} else {
			$(this).removeClass("show").addClass("hidden");
			$("#expanded-info").stop().fadeOut(200);
		}
	});

	count = 0;
	$("body").mousemove(function(){
		count++;
		if( count > 3 ) {
			changeBackground( getRandomInt(-1,0)*571, getRandomInt(-1,0)*163);	
			count = 0;
		}
	})
});