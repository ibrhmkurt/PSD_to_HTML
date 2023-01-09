$(function () {

    var scrollTop = $(window).scrollTop();
    if (scrollTop > 0) {
        $('.header-navbar').addClass('header-fixed');
    } else {
        $('.header-navbar').removeClass('header-fixed'); 
    }

    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 0) {
            $('.header-navbar').addClass('header-fixed');
        } else {
            $('.header-navbar').removeClass('header-fixed'); 
        }
    });

});

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
    offset: 80
});