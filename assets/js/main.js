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
  // return new bootstrap.Tooltip(tooltipTriggerEl)
  return new bootstrap.Tooltip(tooltipTriggerEl, {
    boundary: document.body // or document.querySelector('#boundary')
  })
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

sr.reveal('.fade-left',{origin: 'left', distance: '100px', duration: 800});
sr.reveal('.fade-left-delay',{origin: 'left', distance: '100px', duration: 800, delay: 300});
sr.reveal('.fade-left-delay-600',{origin: 'left', distance: '100px', duration: 500, delay: 600});
sr.reveal('.fade-left-vf40',{origin: 'left', distance: '100px', duration: 800, viewFactor: 0.4});

sr.reveal('.fade-right',{origin: 'right', distance: '100px', duration: 800});
sr.reveal('.fade-right-delay',{origin: 'right', distance: '100px', duration: 800, delay: 300});
sr.reveal('.fade-right-delay-600',{origin: 'right', distance: '100px', duration: 800, delay: 600});

sr.reveal('.fade-bottom',{origin: 'bottom', distance: '100px', duration: 800});
sr.reveal('.fade-bottom-delay',{origin: 'bottom', distance: '100px', duration: 800, delay: 300});
sr.reveal('.fade-bottom-delay-600',{origin: 'bottom', distance: '100px', duration: 800, delay: 600});
sr.reveal('.fade-bottom-vf40',{origin: 'bottom', distance: '100px', duration: 800, viewFactor: 0.4});

sr.reveal('.fade-top',{origin: 'top', distance: '100px', duration: 800});
sr.reveal('.fade-top-delay',{origin: 'top', distance: '100px', duration: 800, delay: 300});
sr.reveal('.fade-top-delay-600',{origin: 'top', distance: '100px', duration: 800, delay: 600});

$(function(){
    $(".ac-btn-border").click(function() {
        $(".parts-rows .accordion-button").closest(".accordion-item").css("border-color", "transparent");
        $(".parts-rows .accordion-item:odd").css("background", "var(--bg-gray)");

        if ($(this).hasClass('collapsed')) {
            $(this).closest(".accordion-item").css("border-color", "transparent")
        } else {
            $(this).closest(".accordion-item").css("border-color", "orange")
            $(this).closest(".accordion-item").css("background", "#fff")
        }
        $(".parts-section-row .accordion-item").css("border-color", "transparent");
        $(".mul-select").select2({
          matcher: matchCustom
        });
        $('.part-images-slider').slick({
            slidesToShow: 15,
            slidesToScroll: 1,
            speed: 500,
            infinite: true,
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
        });
        $('.related-parts-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            infinite: true,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
        });
    })
})

function matchCustom(params, data) {
// If there are no search terms, return all of the data
if ($.trim(params.term) === '') {
  return data;
}

// Do not display the item if there is no 'text' property
if (typeof data.text === 'undefined') {
  return null;
}

// `params.term` should be the term that is used for searching
// `data.text` is the text that is displayed for the data object
if (data.text.indexOf(params.term) > -1) {
  var modifiedData = $.extend({}, data, true);
  modifiedData.text += ' (matched)';

  // You can return modified objects from here
  // This includes matching the `children` how you want in nested data sets
  return modifiedData;
}

// Return `null` if the term should not be displayed
return null;
}
$(".mul-select").select2({
  matcher: matchCustom
});

// parseFloat($(".decimal-input").val()).toFixed(2)
$('.date-input').datepicker({
    format: 'MM dd, yyyy',
    leftArrow: '<i class="fa-solid fa-chevron-left"></i>',
    rightArrow: '<i class="fa-solid fa-chevron-right"></i>',
    todayBtn: true,
    todayHighlight: true
});