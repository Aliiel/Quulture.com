$(window).scroll(function(){
    console.log($(this))
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//   }