$(function () {
    $(window).resize(function () { 
        if ($(window).width() > 1000) { //If >1000px show parallax effect
          window.addEventListener('scroll', function () {
          var scrolled = window.scrollY;
          document.querySelector('.banner h1').style.marginTop =  (35+scrolled*0.7)+ "px";
          })
        }else{ //else set margin to 0 (ie. no parallax)
          window.addEventListener('scroll', function () {
          document.querySelector('.banner h1').style.marginTop = 0+ "px";
          })
        }
    }).resize(); //call resize function 
});

//scroll to location of an id matching the link hash
$('a[href^="#"]').click(function(e) {
  $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 1000); 
});
