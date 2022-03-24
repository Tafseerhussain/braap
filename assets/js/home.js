gsap.registerPlugin(ScrollTrigger)

var heroLogo = document.querySelector('.hero-logo')
var heroText = document.querySelector('.hero-text')
var navbarBrand = document.querySelector('.navbar-brand')
var vision = document.querySelector('.vision')
var navbar = document.querySelector('.navbar')

if ($(window).innerWidth() >= 1200) {

	var tl = gsap.timeline({
	    scrollTrigger:{
	        trigger: heroLogo,
	        start: "50% 25%",
	        end: "10% 0",
	        markers: false,
	        scrub: true,
	        once: false,
	    }
	})

	var tl2 = gsap.timeline({
	    scrollTrigger:{
	        trigger: vision,
	        start: "0 90%",
	        end: "0 0",
	        markers: false,
	        scrub: true,
	        once: false,
	    }
	})

    tl.to(heroLogo, {width: 200, y: -100})
    tl.to(navbarBrand, {opacity: 1})
    tl.to(heroLogo, {opacity: 0})
    // tl.to(heroLogo, {position: 'fixed', top: 10 })
    tl2.to(heroText, {opacity: 0})
    tl2.to(navbar, {
        background: 'rgba(0,0,0)',
        // boxShadow: '0px 10px 20px rgba(0,0,0,0.25)',
        // backdropFilter: 'saturate(200%) blur(19px)',
        // backgroundColor: 'rgb(12 12 12 / 0%)',
    })
    
} else if ($(window).innerWidth() >= 992 && $(window).innerWidth() <= 1199) {

    var tl = gsap.timeline({
	    scrollTrigger:{
	        trigger: heroLogo,
	        start: "50% 25%",
	        end: "10% 0",
	        markers: false,
	        scrub: true,
	        once: false,
	    }
	})

	var tl2 = gsap.timeline({
	    scrollTrigger:{
	        trigger: vision,
	        start: "0 60%",
	        end: "0 0",
	        markers: false,
	        scrub: true,
	        once: false,
	    }
	})

    tl.to(heroLogo, {width: 200, y: -100})
    tl.to(navbarBrand, {opacity: 1})
    tl.to(heroLogo, {opacity: 0})
    tl2.to(heroText, {opacity: 0})
    tl2.to(navbar, {background: 'rgba(0,0,0)'})

}

$(document).ready(function(){

	$('.salon-slider').slick({
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
		speed:500,
		infinite: false,
	  	dots: false,
	  	arrows: false,
	  	autoplay: true,
	});

	$('.story-slider').slick({
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
		speed:500,
		infinite: true,
	  	dots: true,
	  	autoplay: false,
	  	arrows: true,
	    // swipe: false,
	  // 	responsive: [
		 //    {
			//     breakpoint: 1585,
			//     settings: {
			//         centerPadding: '30%',
			//     }
		 //    },
		 //    {
			//     breakpoint: 768,
			//     settings: {
			//         centerMode: false,
			//     }
		 //    },
			// ]
	});


	$('a[data-slide]').click(function(e) {
	   	e.preventDefault();
	   	var slideno = $(this).data('slide');
	   	$('a[data-slide=0]').removeClass('active');
	   	$('a[data-slide=1]').removeClass('active');
	   	$('a[data-slide=2]').removeClass('active');
	   	$('a[data-slide=3]').removeClass('active');
	   	$('a[data-slide=' + slideno + ']').addClass('active');
	   	$('.story-slider').slick('slickGoTo', slideno);
	});

	$(".story-slider").on("afterChange", function (event, slick, currentSlide, nextSlide) {
	    $('a[data-slide=0]').removeClass('active');
	   	$('a[data-slide=1]').removeClass('active');
	   	$('a[data-slide=2]').removeClass('active');
	   	$('a[data-slide=3]').removeClass('active');
	   	$('a[data-slide=' + currentSlide + ']').addClass('active');
	})
	
	$('.more-slider').slick({
	  	slidesToShow: 2,
	  	slidesToScroll: 1,
		speed:500,
		infinite: true,
	  	dots: false,
	  	autoplay: false,
	  	arrows: false,
	  	responsive: [
		    {
			    breakpoint: 768,
			    settings: {
			    	slidesToShow: 1,
	  				slidesToScroll: 1,
			        centerMode: true,
  					centerPadding: '60px',
  					infinite: false
			    }
		    },
		    {
			    breakpoint: 576,
			    settings: {
			    	slidesToShow: 1,
	  				slidesToScroll: 1,
			        centerMode: true,
  					centerPadding: '30px',
  					infinite: false
			    }
		    },
		]
	});

});