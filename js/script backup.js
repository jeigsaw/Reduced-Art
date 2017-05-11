// for loader image
$(window).on("load", function() {
    // Animate loader off screen
    $("#loaderWrap").fadeOut("500");
    $(".animated").addClass("flipInY");
});

// smooth scrolling third party js
var topOffset;
if ($(window).width() > 768) {
    topOffset = 52;
} else {
    topOffset = 80;
};

$('a[href*="#"]:not([href="#"])').on("click",function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
	    $('html,body').animate({
	      scrollTop: target.offset().top-topOffset
	    }, 1000);
	    return false;
	  }
	} 
});



// whenever user scrolls
	window.onscroll = function  () {
		var navAll = $(".navbar li");
		var scrollPos = window.scrollY+topOffset;
        
        // fix the nav bar
        if (scrollPos >= $("#about").offset().top){
            $(".navbar").addClass("navbar-fixed-top");
        } else {
            $(".navbar").removeClass("navbar-fixed-top");
        };

		// make all the list items inactive
		navAll.removeClass("active");

		// make the nav items active with respect to the appearance of the sections
		if (scrollPos >= $("#home").offset().top) {
			navAll.removeClass("active");
			$("#navHome").addClass("active");
		} // for home menu

		if (scrollPos >= $("#about").offset().top) {
			navAll.removeClass("active");
			$("#navAbt").addClass("active");
		} // for services menu

		if (scrollPos >= $("#work").offset().top) {
			navAll.removeClass("active");
			$("#navWrk").addClass("active");
		} // for works menu

		if (scrollPos >= $("#connect").offset().top) {
			navAll.removeClass("active");
			$("#navCnt").addClass("active");
		} // for about menu
	};