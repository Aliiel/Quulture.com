$(window).scroll(function(){
    console.log($(this))
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});