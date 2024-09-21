let slideIndex = 0;
showSlides();

// Function to control the slideshow
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides initially
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    

    // Remove "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";

    // Change image every 4 seconds
    setTimeout(showSlides, 8000); 
}

// Controls for navigating between slides (manual control)
function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}

// Direct navigation by clicking dots
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}
