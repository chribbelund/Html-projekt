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