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
