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

window.sr = ScrollReveal({
    distance: '0px',
    duration: 1000,
    scale: 1,
    easing: 'ease',
    mobile: false,
    reset: false,
    viewFactor: 0.2,
});
sr.reveal('.fade-in');
sr.reveal('.fade-left',{origin: 'left', distance: '100px', duration: 500,});
sr.reveal('.fade-left-delay',{origin: 'left', distance: '100px', duration: 500, delay: 300});
sr.reveal('.fade-left-delay-600',{origin: 'left', distance: '100px', duration: 500, delay: 600});
sr.reveal('.fade-left-vf40',{origin: 'left', distance: '100px', duration: 500, viewFactor: 0.4,});
sr.reveal('.fade-right',{origin: 'right', distance: '100px', duration: 500,});
sr.reveal('.fade-right-delay',{origin: 'right', distance: '100px', duration: 500, delay: 300});
sr.reveal('.fade-bottom',{origin: 'bottom', distance: '100px', duration: 500,});
sr.reveal('.fade-bottom-vf40',{origin: 'bottom', distance: '100px', duration: 500, viewFactor: 0.4,});
sr.reveal('.fade-top',{origin: 'top', distance: '100px', duration: 500,});

$( ".header-search input" ).focus(function() {
    $(".search-results-static").delay(0).fadeIn();
});
$( ".header-search input" ).focusout(function() {
    $(".search-results-static").delay(0).fadeOut();
});