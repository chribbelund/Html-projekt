/*function skillbar() {
  var elem = document.getElementById("skills");
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}
*/
$(document).ready(function () {
  $("#hamburger").click(function () {
    $(".navbarli").toggle("slow");
  });
});


$("#slideshow > div:gt(0)").hide();

setInterval(function () {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);

function store() {
  var inputName = document
}

const slideshowImages = document.querySelectorAll(".pictures");

const nextImageDelay = 3000;
let currentImageCounter = 0;


slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {

    slideshowImages[currentImageCounter].style.zIndex = -2;
    const tempCounter = currentImageCounter;
    setTimeout(()=>{
      slideshowImages[tempCounter].style.opacity = 0;
    }, 1000);
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;

    slideshowImages[currentImageCounter].style.opacity = 1;
    slideshowImages[currentImageCounter].style.zIndex = -1;


}

var mySlideshow = document.getElementById(".pictures"); 

function playPause() { 
  if (mySlideshow.paused) 
    mySlideshow.play(); 
  else 
    mySlideshow.pause(); 
}