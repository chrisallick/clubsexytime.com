changeBackground = function( x, y ) { 
	$("#logo .sprite").css({
		backgroundPositionX: x,
		backgroundPositionY: y
	})
}

var count;
$(document).ready(function() {
	$("#info").click(function(event){
		event.preventDefault();
		if( $(this).hasClass("hidden") ) {
			$(this).removeClass("hidden").addClass("show");
			
			$("#email,#experiments").stop().animate({
				top: 110
			}, 150, function(){
				$("#expanded-info").fadeIn(200);
			});
		} else {
			$(this).removeClass("show").addClass("hidden");

			$("#expanded-info").stop().fadeOut(200,function(){
				$("#email,#experiments").stop().animate({
					top: 0
				}, 150);	
			});
		}
	});

	count = 0;
	$(document).mousemove(function(){
		//console.log("uuuwwaaaaaaaawaaaaa");
		count++;
		if( count > 3 ) {
			changeBackground( getRandomInt(-1,0)*571, getRandomInt(-1,0)*163);	
			count = 0;
		}
	})
});