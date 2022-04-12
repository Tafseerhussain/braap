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

$(function() {
  $('#pt-1').hover(function() {
    $('#t-1').css('display', 'block');
    $('.pc1').css('display', 'none');
  }, function() {
    $('.pc1').css('display', 'block');
    $('#t-1').css('display', 'none');
  });
});

$(function() {
  $('#pb-1').hover(function() {
    $('#b-1').css('display', 'block');
    $('.pc1').css('display', 'none');
  }, function() {
    $('.pc1').css('display', 'block');
    $('#b-1').css('display', 'none');
  });
});

$(function() {
  $('#p1').hover(function() {
    $('#h-1').css('display', 'block');
    $('.pc1').css('display', 'none');
  }, function() {
    $('.pc1').css('display', 'block');
    $('#h-1').css('display', 'none');
  });
});

$(function() {
  $('#p2').hover(function() {
    $('#h-2').css('display', 'block');
    $('.pc1').css('display', 'none');
  }, function() {
    $('.pc1').css('display', 'block');
    $('#h-2').css('display', 'none');
  });
});

$(function() {
  $('#p3').hover(function() {
    $('#h-3').css('display', 'block');
    $('.pc1').css('display', 'none');
  }, function() {
    $('.pc1').css('display', 'block');
    $('#h-3').css('display', 'none');
  });
});

$(function() {
  $('#p4').hover(function() {
    $('#h-4').css('display', 'block');
    $('.pc1').css('display', 'none');
  }, function() {
    $('.pc1').css('display', 'block');
    $('#h-4').css('display', 'none');
  });
});

$(function() {
  $('#p5').hover(function() {
    $('#h-5').css('display', 'block');
    $('.pc1').css('display', 'none');
  }, function() {
    $('.pc1').css('display', 'block');
    $('#h-5').css('display', 'none');
  });
});

$(function() {
  $('#p6').hover(function() {
    $('#h-6').css('display', 'block');
    $('.pc1').css('display', 'none');
  }, function() {
    $('.pc1').css('display', 'block');
    $('#h-6').css('display', 'none');
  });
});

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

var resultsHeader = $('.results-header').height()+100;

jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > heroSliderHeight) {
        jQuery('.sticky-search-bar').fadeIn()
        jQuery('.sticky-search-bar').addClass('top-0')
    } else {
        jQuery('.sticky-search-bar').fadeOut()
        jQuery('.sticky-search-bar').removeClass('top-0')
    }
    if ($(".results-header")[0]) {
        if (jQuery(this).scrollTop() > resultsHeader) {
            jQuery('.navbar .header-search').fadeIn();
        } else {
            jQuery('.navbar .header-search').fadeOut();
        }
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
    autoplaySpeed: 4000
});

$(function(){
    $(".ac-btn-border").click(function() {
        $(".part-images-slider").slick("refresh");
        $(".related-parts-slider").slick("refresh");
        $(".parts-rows .accordion-button").closest(".accordion-item").css("border-color", "transparent");
        $(".parts-rows .accordion-item:odd").css("background", "var(--bg-gray)");

        if ($(this).hasClass('collapsed')) {
            $(this).closest(".accordion-item").css("border-color", "transparent")
        } else {
            $(this).closest(".accordion-item").css("border-color", "orange")
            $(this).closest(".accordion-item").css("background", "#fff")
        }
        $(".parts-section-row .accordion-item").css("border-color", "transparent");
        if ($(".mul-select")[0]) {
            $(".mul-select").select2({
              matcher: matchCustom
            });
        }
    })
})
$(function(){
    $("#accordionRelatedParts .accordion-button").click(function() {
        $(".related-parts-slider").slick("refresh");
    })
})

function matchCustom(params, data) {
    if ($.trim(params.term) === '') {
        return data;
    }
    if (typeof data.text === 'undefined') {
        return null;
    }
    if (data.text.indexOf(params.term) > -1) {
        var modifiedData = $.extend({}, data, true);
        modifiedData.text += ' (matched)';
        return modifiedData;
    }
    return null;
}
if ($(".mul-select")[0]) {
    $(".mul-select").select2({
        matcher: matchCustom
    });
}

// parseFloat($(".decimal-input").val()).toFixed(2)
if ($(".date-input")[0]) {
    $('.date-input').datepicker({
        format: 'MM dd, yyyy',
        leftArrow: '<i class="fa-solid fa-chevron-left"></i>',
        rightArrow: '<i class="fa-solid fa-chevron-right"></i>',
        todayBtn: true,
        todayHighlight: true
    });
}

if ($(".size-tags")[0]) {
    var sizeTags = document.querySelector('.size-tags');
    new Tagify(sizeTags)
}
if ($(".size-tags")[0]) {
    var colorTags = document.querySelector('.color-tags');
    new Tagify(colorTags)
}
if ($(".size-tags")[0]) {
    var braapMasterTags = document.querySelector('.braap-master-tags');
    new Tagify(braapMasterTags)
}
if ($(".size-tags")[0]) {
    var braapSubTags = document.querySelector('.braap-subsystem-tags');
    new Tagify(braapSubTags)
}


if ($(".search-part-card .show-more")[0]) {
    $(".search-part-card .show-more").click(function() {
        $(".search-part-card .search-part-text span").toggleClass("show-full");
        $(this).closest('.show-less').css('display', 'block');
        if ($(".search-part-card .search-part-text span").hasClass('show-full')) {
            console.log(this);
            $(this).closest('.show-more').html('Show Less <img src="assets/icons/arrow-right-orange.svg" alt="right arrow">');
        } else {
            $(this).closest('.show-more').html('Show More <img src="assets/icons/arrow-right-orange.svg" alt="right arrow">');
        }
    })
}