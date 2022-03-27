$(window).on('load',function() {
  $(".preloader").delay(0).fadeOut("slow");
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