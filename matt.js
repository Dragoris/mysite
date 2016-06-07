// media query event handler
if (matchMedia) {
	console.log('1')
  var mq = window.matchMedia("only screen and (min-width: 850px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    // window width is at least 600px
    window.addEventListener('scroll', function () {
    var scrolled = window.scrollY;
    	document.querySelector('.banner h1').style.marginTop =  (35+scrolled*0.75)+ "px";
	});
  } 

}
