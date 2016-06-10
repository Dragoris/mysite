


// media query event handler
if (matchMedia) {
  var mq = window.matchMedia("only screen and (min-width: 990px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    // window width is at least 990px
    window.addEventListener('scroll', function () {
    var scrolled = window.scrollY;
    	document.querySelector('.banner h1').style.marginTop =  (35+scrolled*0.75)+ "px";
	});
  } 

}
//scroll to location of an id matching the link hash
$('a[href^="#"]').click(function(e) {
  $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 1000); 
});
