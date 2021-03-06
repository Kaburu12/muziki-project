//slideshow functions
let slideIndex = 1;
showSlides(slideIndex);

function nextSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideshow");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

//subcription message on button click
const input = document.getElementById('button');

function onClickAlert() {
    alert("Already Subscribed");
}

input.addEventListener('click', onClickAlert);