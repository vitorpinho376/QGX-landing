// Sticky Header

$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('.main-header').addClass('fix-header');
        $('.header-cta').removeClass('dark-btn');
        $('.header-cta').addClass('primary-btn');
    }
    else {
        $('.main-header').removeClass('fix-header');
        $('.header-cta').removeClass('primary-btn');
        $('.header-cta').addClass('dark-btn');
    }
});
