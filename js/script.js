// for loader image
$(window).on("load", function() {
    // Animate loader off screen
    $("#loaderWrap").fadeOut("500");
    $(".animated").addClass("flipInY");
    $("#pageLogo img").addClass("animated pulse");
});

// smooth scrolling third party js

$('a[href*="#"]:not([href="#"])').on("click",function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
	    $('html,body').animate({
	      scrollTop: target.offset().top
	    }, 1000);``    `` 
	    return false;
	  }
	} 
});

// scrolling effects
$(document).scroll(function() {
    var scrollPos = $(this).scrollTop();
    if (scrollPos > $("#about").offset().top) {
        $("#floatNav").css("right", "0px");
    }else{
        $("#floatNav").css("right", "-55px");
    }; // make the float nav appear
    
    if (scrollPos >= $(".nav").offset().top-2) {
        $("#navHome").removeClass ("active");
        $("#navAbt").addClass("active");
    } else{
        $("#navAbt").removeClass ("active");
        $("#navHome").addClass("active");
    };

});