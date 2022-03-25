$(document).ready(function(){

	$( ".hero-search input" ).focus(function() {
	  	$("#home-search-results").delay(0).fadeIn();
	});
	$( ".hero-search input" ).focusout(function() {
	  	$("#home-search-results").delay(0).fadeOut();
	});

	$('.hero-slider-slides').slick({
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
		speed:1000,
		infinite: true,
	  	dots: false,
	  	arrows: true,
	  	autoplay: true,
	  	autoplaySpeed: 5000,
	  	fade: true,
	  	draggable: false
	});

	// $('.story-slider').slick({
	//   	slidesToShow: 1,
	//   	slidesToScroll: 1,
	// 	speed:500,
	// 	infinite: true,
	//   	dots: true,
	//   	autoplay: false,
	//   	arrows: true,
	//     // swipe: false,
	//   // 	responsive: [
	// 	 //    {
	// 		//     breakpoint: 1585,
	// 		//     settings: {
	// 		//         centerPadding: '30%',
	// 		//     }
	// 	 //    },
	// 	 //    {
	// 		//     breakpoint: 768,
	// 		//     settings: {
	// 		//         centerMode: false,
	// 		//     }
	// 	 //    },
	// 		// ]
	// });


	$('a[data-slide]').click(function(e) {
	   	e.preventDefault();
	   	var slideno = $(this).data('slide');
	   	$('a[data-slide=0]').removeClass('active');
	   	$('a[data-slide=1]').removeClass('active');
	   	$('a[data-slide=2]').removeClass('active');
	   	$('a[data-slide=3]').removeClass('active');
	   	$('a[data-slide=4]').removeClass('active');
	   	$('a[data-slide=5]').removeClass('active');
	   	$('a[data-slide=' + slideno + ']').addClass('active');
	   	$('.hero-slider-slides').slick('slickGoTo', slideno);
	});

	$(".hero-slider-slides").on("afterChange", function (event, slick, currentSlide, nextSlide) {
	    $('a[data-slide=0]').removeClass('active');
	   	$('a[data-slide=1]').removeClass('active');
	   	$('a[data-slide=2]').removeClass('active');
	   	$('a[data-slide=3]').removeClass('active');
	   	$('a[data-slide=4]').removeClass('active');
	   	$('a[data-slide=5]').removeClass('active');
	   	$('a[data-slide=' + currentSlide + ']').addClass('active');
	})
	
	// $('.more-slider').slick({
	//   	slidesToShow: 2,
	//   	slidesToScroll: 1,
	// 	speed:500,
	// 	infinite: true,
	//   	dots: false,
	//   	autoplay: false,
	//   	arrows: false,
	//   	responsive: [
	// 	    {
	// 		    breakpoint: 768,
	// 		    settings: {
	// 		    	slidesToShow: 1,
	//   				slidesToScroll: 1,
	// 		        centerMode: true,
 //  					centerPadding: '60px',
 //  					infinite: false
	// 		    }
	// 	    },
	// 	    {
	// 		    breakpoint: 576,
	// 		    settings: {
	// 		    	slidesToShow: 1,
	//   				slidesToScroll: 1,
	// 		        centerMode: true,
 //  					centerPadding: '30px',
 //  					infinite: false
	// 		    }
	// 	    },
	// 	]
	// });

});