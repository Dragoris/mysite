$(function() {
    //caches a jQuery object containing the header element
    var header = $(".vertical-header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 650) {
            header.removeClass("vertical-header").addClass("horizontal-header");
        } else {
            header.removeClass("horizontal-header").addClass("vertical-header");
        }
        if (scroll >= 750){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });
});


$(document).scroll(function() {
    var position = $(document).scrollTop();
    if (position <= 650){
        var margin = parseInt(position * -0.3) + 'px';
        $('.vertical-header').css('margin-top', margin);
    } else{
        $('.vertical-header').css('margin-top', 0);
    }

});