changeLogo = function() {
	clearTimeout( t );

	$("#header").html( logos.getLogo() );

	t = setTimeout(changeLogo, 7000 );
}

changeBackground = function( x, y ) {
	$("#logo .sprite").css({
		backgroundPosition: x+"px "+y+"px"
	});
}

$(window).load(function(){
	logos = new Logos("./img/logos/",logo_images,function(){
		$("#header").html( logos.getLogo(firstLogo) );

		t = setTimeout( changeLogo, 7000 );
	});
});

var count;
var logo_images = ["logo","girl","chris", "flag"];
var logos;
var firstLogo;
var t;
$(document).ready(function() {

	firstLogo = getRandomInt(0,logo_images.length-1);
	$("#header .logo").attr("src","./img/logos/"+self.logo_images[firstLogo]+".png");

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