$(function() {
    //caches a jQuery object containing the header element
    var header = $(".vertical-header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 500) {
            header.removeClass("vertical-header").addClass("horizontal-header");
        } else {
            header.removeClass("horizontal-header").addClass("vertical-header");
        }
        if (scroll >= 700){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });
});