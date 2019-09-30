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
var navbar;
$("#hamburger").click(function () {
  toggleNavbar();
});

function toggleNavbar() {
  $(".navbarli").toggle("slow");
  if (navbar == false) {
    navbar = true;
  }
  else {
    navbar = false;
  }

}


function myFunction(x) {
  if (x.matches && navbar==true) { // If media query matches
    toggleNavbar();
  }
}

var x = window.matchMedia("(min-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


