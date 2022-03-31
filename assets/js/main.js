$(window).on('load',function() {
  $(".preloaderBg").delay(0).fadeOut("slow");
});

function openNav() {
    if ($(window).width() < 1025 && $(window).width() > 767) {
        document.getElementById("how-braap-works").style.width = "70%";
    } else if ($(window).width() < 768) {
        document.getElementById("how-braap-works").style.width = "100%";
    } else {
        document.getElementById("how-braap-works").style.width = "70%";
    }
    $('html').css('overflow-y', 'hidden');
    $(".how-braap-works-content").delay(300).fadeIn("slow");
    $(".body-overlay").delay(0).fadeIn();
}

function closeNav() {
    $(".how-braap-works-content").delay(0).fadeOut("slow");
    setTimeout( function()  {
        document.getElementById("how-braap-works").style.width = "0";
        $('html').css('overflow-y', 'scroll');
    }, 500);
    $(".body-overlay").delay(500).fadeOut();
    
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$( ".header-search input" ).focus(function() {
    $(".search-results-static").delay(0).fadeIn();
});
$( ".header-search input" ).focusout(function() {
    $(".search-results-static").delay(0).fadeOut();
});
$( ".sticky-search-bar input" ).focus(function() {
    $(".home-search-results").delay(0).fadeIn();
});
$( ".sticky-search-bar input" ).focusout(function() {
    $(".home-search-results").delay(0).fadeOut();
});

var heroSliderHeight = $('.hero-slider').height()+270;
$('.hero-slider-slides').css('height', heroSliderHeight+'px');
$( window ).resize(function() {
    heroSliderHeight = $('.hero-slider').height()+270;
    $('.hero-slider-slides').css('height', heroSliderHeight+'px');
});

jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > heroSliderHeight) {
        jQuery('.sticky-search-bar').fadeIn()
        jQuery('.sticky-search-bar').addClass('top-0')
    } else {
        jQuery('.sticky-search-bar').fadeOut()
        jQuery('.sticky-search-bar').removeClass('top-0')
    }
});

window.sr = ScrollReveal({
    distance: '0px',
    duration: 1000,
    scale: 1,
    easing: 'ease',
    mobile: false,
    reset: false,
    viewFactor: 0.2,
});
ScrollReveal.debug = true;
sr.reveal('.fade-in');
sr.reveal('.fade-left',{origin: 'left', distance: '100px', duration: 800, delay: 200});
sr.reveal('.fade-left-delay',{origin: 'left', distance: '100px', duration: 800, delay: 300});
sr.reveal('.fade-left-delay-600',{origin: 'left', distance: '100px', duration: 500, delay: 600});
sr.reveal('.fade-left-vf40',{origin: 'left', distance: '100px', duration: 800, viewFactor: 0.4});
sr.reveal('.fade-right',{origin: 'right', distance: '100px', duration: 800,});
sr.reveal('.fade-right-delay',{origin: 'right', distance: '100px', duration: 800, delay: 300});
sr.reveal('.fade-right-delay-600',{origin: 'right', distance: '100px', duration: 800, delay: 600});
sr.reveal('.fade-bottom',{origin: 'bottom', distance: '100px', duration: 800,});
sr.reveal('.fade-bottom-delay',{origin: 'bottom', distance: '100px', duration: 800, delay: 300});
sr.reveal('.fade-bottom-delay-600',{origin: 'bottom', distance: '100px', duration: 800, delay: 600});
sr.reveal('.fade-bottom-vf40',{origin: 'bottom', distance: '100px', duration: 800, viewFactor: 0.4});
sr.reveal('.fade-top',{origin: 'top', distance: '100px', duration: 800});
sr.reveal('.fade-top-delay',{origin: 'top', distance: '100px', duration: 800, delay: 300});
sr.reveal('.fade-top-delay-600',{origin: 'top', distance: '100px', duration: 800, delay: 600});