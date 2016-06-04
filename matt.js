window.addEventListener('scroll', function () {
    var scrolled = window.scrollY;
    document.querySelector('.banner h1').style.marginTop =  (35+scrolled*0.75)+ "px";
});