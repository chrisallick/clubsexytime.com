$(document).ready(function() {

	$("#info").click(function(event){
		event.preventDefault();
		if( $(this).hasClass("hidden") ) {
			$(this).removeClass("hidden").addClass("show");
			$("#expanded-info").stop().fadeIn(250);
		} else {
			$(this).removeClass("show").addClass("hidden");
			$("#expanded-info").stop().fadeOut(250);
		}
	});

});