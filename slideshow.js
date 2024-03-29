

var width = 720;
var animationSpeed = 1000;
var pause = 3000;
var currentSlide = 1;

var $slider = $('#slider');
var $slideContainer = $('.slides', $slider);
var $slides = $('.slide', $slider);

var interval;
var buttonPressed = false;
function startSlider() {
    interval = setInterval(function () {
        $slideContainer.animate({ 'margin-left': '-=' + width }, animationSpeed, function () {
            if (++currentSlide === $slides.length) {
                currentSlide = 1;
                $slideContainer.css('margin-left', 0);
            }
        });
    }, pause);
}
function pauseSlider() {
    clearInterval(interval);
}


$("#pauseSlideshow").click(function () {
    if (buttonPressed == false) {
        pauseSlider();
        buttonPressed = true;
        document.getElementById("pauseSlideshow").innerHTML = "Starta";
    }
    else {
        startSlider();
        buttonPressed = false;
        document.getElementById("pauseSlideshow").innerHTML = "Pausa";
    }
});

$(document).ready(function () {
    startSlider();
});

