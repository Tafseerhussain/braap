// PRELOADER SETTING
$(window).on('load',function() {
  $(".preloaderBg").delay(0).fadeOut("slow");
});
// TOOLTIPS
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  // return new bootstrap.Tooltip(tooltipTriggerEl)
  return new bootstrap.Tooltip(tooltipTriggerEl, {
    boundary: document.body // or document.querySelector('#boundary')
  })
})
// PAGE LOAD SECTION ANIMATIONS
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

sr.reveal('.slide-bottom',{origin: 'bottom', distance: '50px', duration: 800, delay: 300});

//====================================================
// HOMEPAGE START
//====================================================
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

$('.trending-fixes .trending-card .card-overlay').click(function() {
    $(this).next(".trending-hidden-parts").css("height", "100%");
    $(this).next(".trending-hidden-parts").css("padding", "15px");
    $(this).next(".trending-hidden-parts").children('.parts').delay(300).fadeIn("slow");
})
$('.trending-fixes .trending-card .close-hidden-parts').click(function() {
    $(this).next(".parts").delay(0).fadeOut("slow");
    var elem = this;
    setTimeout( function()  {
        $(elem).closest(".trending-hidden-parts").css("height", "0");
        $(elem).closest(".trending-hidden-parts").css("padding", "0");
    }, 500);
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

//====================================================
// HOMEPAGE END --------------------------------------
//====================================================

//====================================================
// SEARCH PAGE START
//====================================================
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
//====================================================
// SEARCH PAGE END -----------------------------------
//====================================================



//====================================================
// DATAHUB PAGE START
//====================================================
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
//====================================================
// DATAHUB PAGE END ----------------------------------
//====================================================


//====================================================
// SEARCH PAGE START -
//====================================================
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

$(document).ready(function() {
    $('.video-btn').click(function() {
        var video = $(this).data( "src" );
        $videoSrc = "https://iframe.videodelivery.net/" + $(this).data( "src" );
        $('#myModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
        })
          
        // stop playing the youtube video when I close the modal
        $('#myModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src',"");
        })
    })
})


// SEARCH RESULTS PARTS PAGE JS
function openPartNav() {
    if ($(window).width() < 1025 && $(window).width() > 767) {
        document.getElementById("part-sidebar").style.width = "80%";
    } else if ($(window).width() < 768) {
        document.getElementById("part-sidebar").style.width = "90%";
    } else {
        document.getElementById("part-sidebar").style.width = "650px";
    }
    $('html').css('overflow-y', 'hidden');
    $(".part-sidebar-content").delay(300).fadeIn("slow");
    $(".body-overlay").delay(0).fadeIn();
}

function closePartNav() {
    $(".part-sidebar-content").delay(0).fadeOut("slow");
    setTimeout( function()  {
        document.getElementById("part-sidebar").style.width = "0";
        $('html').css('overflow-y', 'scroll');
    }, 500);
    $(".body-overlay").delay(500).fadeOut();
    
}

function openRelatedPartNav() {
    $('html').css('overflow-y', 'hidden');
    $("#related-part-sidebar").css("right","0");
    $(".body-overlay").delay(0).fadeIn();
}

function closeRelatedPartNav() {
    $('html').css('overflow-y', 'scroll');
    $("#related-part-sidebar").css("right","-1000px");
    $(".body-overlay").delay(0).fadeOut();   
}

$(function() {
    //----- OPEN
    $('[pd-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('pd-popup-open');
        $('[pd-popup="' + targeted_popup_class + '"]').fadeIn(300);
        $('.related-parts .loading').fadeOut(200);
        $('.related-parts-popup-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            infinite: true,
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000
        });
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[pd-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('pd-popup-close');
        $('[pd-popup="' + targeted_popup_class + '"]').fadeOut(300);
 
        e.preventDefault();
    });
});

$('.part-details-popup .description .img-boxes a img').click(function() {
    $('.part-details-popup .description .img-box img').attr('src', $(this).attr("src"));
})

$('.part-details-popup .nav-link').click(function() {
    if ($(this).hasClass('related-tab')) {
        $('.related-parts .loading').fadeIn();
        setTimeout(function(){
            $('.related-parts .loading').fadeOut(200);
            $('.related-parts-popup-slider').slick('refresh').fadeIn(300);
        },500);
    } else {
        $('.related-parts .loading').fadeIn();
        $('.related-parts-popup-slider').fadeOut();
    }
})
// $('#pills-related-tab').click(function() {
//     var popupSize = $('.part-details-popup .popup-body').width();
//     if ($('#pills-related-tab').hasClass("active")) {
//         $('.related-parts-popup-slider').width(popupSize);
//         setTimeout(function(){
//             $('.related-parts .loading').fadeOut(200);
//             $('.related-parts-popup-slider').slick({
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 speed: 500,
//                 infinite: true,
//                 dots: false,
//                 arrows: true,
//                 autoplay: true,
//                 autoplaySpeed: 4000
//             }).fadeIn(1000);
//             // $('.related-parts-popup-slider').fadeIn(1000);
//         },1000);  
//     }
// })
$('.part-details-popup .popup-close').click(function() {
    setTimeout(function(){
        $('.part-details-popup .popup-body .nav-link').removeClass('active');
        $('.part-details-popup .popup-body .tab-pane').removeClass('active');
        $('#pills-desc-tab').addClass('active');
        $('.part-details-popup .popup-body .tab-pane.description').addClass('active show');
        $('.related-parts .loading').fadeIn();
        $('.related-parts-popup-slider').fadeOut();
        $('.related-parts-popup-slider').slick('unslick');
    },500);
})
//====================================================
// SEARCH RESULTS PAGE END ---------------------------
//====================================================



// ========================================================
// MY SHOP JS
// ========================================================
function openTimelineNav() {
    if ($(window).width() < 1025 && $(window).width() > 767) {
        document.getElementById("timeline-sidebar").style.width = "80%";
    } else if ($(window).width() < 768) {
        document.getElementById("timeline-sidebar").style.width = "90%";
    } else {
        document.getElementById("timeline-sidebar").style.width = "55%";
    }
    $('html').css('overflow-y', 'hidden');
    $(".timeline-sidebar-content").delay(300).fadeIn("slow");
    $(".body-overlay").delay(0).fadeIn();
}

function closeTimelineNav() {
    $(".timeline-sidebar-content").delay(0).fadeOut("slow");
    setTimeout( function()  {
        document.getElementById("timeline-sidebar").style.width = "0";
        $('html').css('overflow-y', 'scroll');
    }, 500);
    $(".body-overlay").delay(500).fadeOut();
    
}
$('.contact-customer-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
});
$('.associate-machine-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    infinite: false,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
});
$('.user-customers .ac-btn-border').click(function() {
    $('.contact-customer-slider').slick('refresh');
    $('.associate-machine-slider').slick('refresh');
})

// MY SHOP CUSTOMERS
function openSearchedPopUp() {
    document.getElementById("my-shop-searched-popup").style.height = "100%";
    $('html').css('overflow-y', 'hidden');
    $(".my-shop-searched-popup-content").delay(300).fadeIn("slow");
    $(".body-overlay").delay(0).fadeIn();
}
function closeSearchedPopUp() {
    $(".my-shop-searched-popup-content").delay(0).fadeOut("slow");
    setTimeout( function()  {
        document.getElementById("my-shop-searched-popup").style.height = "0";
        $('html').css('overflow-y', 'scroll');
    }, 500);
    $(".body-overlay").delay(500).fadeOut();
}

// ========================================================
// MY SHOP JS END -----------------------------------------
// ========================================================


// ========================================================
// INTERATIVE WORKSPACE PAGE START
// ========================================================
$('.workspace-img-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    infinite: false,
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 4000
});
$('.workspace-img-slider .workspace-img-slide .workspace-img img').click(function() {
    $('.workspace-img-main img.main').attr('src', $(this).attr("src"));
})
if ($(".workspace-date-input")[0]) {
    $('.workspace-date-input').datepicker({
        format: 'MM dd, yyyy',
        leftArrow: '<i class="fa-solid fa-chevron-left"></i>',
        rightArrow: '<i class="fa-solid fa-chevron-right"></i>',
        todayBtn: true,
        todayHighlight: true
    });
}
$('.distance-changer').on('change', function() {
    if ($(this).is(':checked')) {
        $('#km-miles').html('Miles');
    } else {
        $('#km-miles').html('Kilometers');
    }
})
function showExtendedWorkspaceView() {
    $('html').css('overflow-y', 'hidden');
    $("#workspace-extended-view").css('height', '100%');
    $(".workspace-extended-view-content").delay(300).fadeIn("slow");
}
function hideExtendedWorkspaceView() {
    $(".workspace-extended-view-content").delay(0).fadeOut("slow");
    setTimeout( function()  {
        $("#workspace-extended-view").css('height', '0');
        $('html').css('overflow-y', 'scroll');
    }, 400);
    setTimeout( function()  {
        $("#workspace-extended-view").removeClass('workspace-sided-view');
        $('.workspace-sidebar-view').html('<img src="assets/icons/sidebar.svg" alt="sidebar"><span>Sidebar View</span>');
    },1000);
}
function extendedToSideView() {
    if ($(".workspace-extended-view").hasClass('workspace-sided-view')) {
        $('html').css('overflow-y', 'hidden');
        $("#workspace-extended-view").removeClass('workspace-sided-view');
        $('.workspace-sidebar-view').html('<img src="assets/icons/sidebar.svg" alt="sidebar"><span>Sidebar View</span>');
    } else {
        $('html').css('overflow-y', 'scroll');
        $("#workspace-extended-view").addClass('workspace-sided-view');
        $('.workspace-sidebar-view').html('<img src="assets/icons/extended.svg" alt="extended"><span>Extended View</span>');
    }
}
// ========================================================
// INTERATIVE WORKSPACE PAGE END --------------------------
// ========================================================

// ========================================================
// USER ACCOUNT PAGE JS
// ========================================================
$(".user-account .skills .skill-tags .skill-tag .dropdown-menu .dropdown-item").on('click', function() {
    $(this).parents(".skill-tag").find('.tag-type').html($(this).data('tag'));
});