$(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $('header').addClass('header-smaller');
        $('#account-menu-wrap').addClass('account-menu-scrolled');
    }
    else {
        $('header').removeClass('header-smaller');
        $('#account-menu-wrap').removeClass('account-menu-scrolled');
    }
});

$(document).ready(function () {
    $("#m-button").click(function () {
        $("#m-nav").toggleClass('m-nav-active');
    });
    $(".m-header-search").click(function () {
        $("#m-search").toggleClass('search-active');
    });
    $("#account-menu-control, #account-menu").hover(function () {
        $("#account-menu-wrap").toggle();
        $("#last-li").toggleClass('highlight');
    });
    $('.back-to-top-wrap').click(function () {
    $('html,body').animate({scrollTop:0},500);
    });
});

