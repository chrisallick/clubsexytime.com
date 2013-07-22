changeBackground = function( x, y ) {
	$("#logo .sprite").css({
		backgroundPosition: x+"px "+y+"px",
		//backgroundPosition: y
	});
}

var count;
$(document).ready(function() {

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