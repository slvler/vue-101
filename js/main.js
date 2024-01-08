(function ($) {
	"use strict";

    // Sticky Navbar
    $(window).scroll(function() {
    	if ($(this).scrollTop() > 25) {
    		$('.MenuNavigation').addClass('menu-sabit');
    	} else {
    		$('.MenuNavigation').removeClass('menu-sabit');
    	}
    });


    $(window).scroll(function () {
    	if ($(this).scrollTop() > 350) {
    		$('.back-to-top').fadeIn('slow');
    	} else {
    		$('.back-to-top').fadeOut('slow');
    	}
    });
    $('.back-to-top').click(function () {
    	$('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    	return false;
    });
    



    $(document).ready(function() {    

    	var id = '#dialog';

		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();


		$('#mask').css({'width':maskWidth,'height':maskHeight});
		
		//transition effect		
		$('#mask').fadeIn(500);	
		$('#mask').fadeTo("slow",0.9);	
		
		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();
		
		//Set the popup window to center
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
		

		$(window).resize(function(){//boyut değişirse

			var maskHeight = $(document).height();
			var maskWidth = $(window).width();


			$('#mask').css({'width':maskWidth,'height':maskHeight});

			var winH = $(window).height();
			var winW = $(window).width();

			$(id).css('top',  winH/2-$(id).height()/2);
			$(id).css('left', winW/2-$(id).width()/2);

		});
		
		//transition effect
		$(id).fadeIn(2000); 	
		//Set heigth and width to mask to fill up the whole screen


	//if close button is clicked
	$('.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();
		
		$('#mask').hide();
		$('.window').hide();
	});		
	
	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});		
	
});







    $('.owl-carousel').owlCarousel({
    	loop:true,
    	margin:10,
    	responsiveClass:true,
    	autoplay:true,
    	autoplayTimeout:4000,
    	autoplayHoverPause:true,
    	responsive:{
    		0:{
    			items:1,
    			nav:true
    		},
    		600:{
    			items:1,
    			nav:false
    		},
    		1000:{
    			items:1,
    			nav:true,
    			loop:true
    		}
    	}
    });




})(jQuery);