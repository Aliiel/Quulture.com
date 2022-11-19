$(window).scroll(function(){
    console.log($(this))
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//   }

function ChangeIconeHeart(h) {
    h.classList.toggle("bi-heart-fill");
  }
function ChangeIconeStar(s) {
    s.classList.toggle("bi-star-fill");
  }
function ChangeIconeShare(sh) {
    sh.classList.toggle("bi-share-fill");
  }