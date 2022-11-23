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
    h.classList.toggle("bi-heart");
  }
function ChangeIconeStar(s) {
    s.classList.toggle("bi-star-fill");
    s.classList.toggle("bi-star");
  }
function ChangeIconeShare(sh) {
    sh.classList.toggle("bi-share-fill");
    sh.classList.toggle("bi-share");
  }