$(window).on('load',function() {
  $(".preloader").delay(0).fadeOut("slow");
});
function openNav() {
    if ($(window).width() < 1025 && $(window).width() > 767) {
        document.getElementById("mySidenav").style.width = "50%";
    } else if ($(window).width() < 768) {
        document.getElementById("mySidenav").style.width = "100%";
    } else {
        document.getElementById("mySidenav").style.width = "40%";
    }
    $(".sidenav-content").delay(300).fadeIn("slow");
}

function closeNav() {
    $(".sidenav-content").delay(0).fadeOut("slow");
    setTimeout( function()  {
        document.getElementById("mySidenav").style.width = "0";
    }, 500);
    
}