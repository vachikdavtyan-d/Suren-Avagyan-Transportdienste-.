// ====== Slideshow ======
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // alle 4 Sekunden wechseln
}

// ====== Fade-In Animation ======
document.addEventListener("scroll", () => {
  let elements = document.querySelectorAll(".fade-in");
  elements.forEach(el => {
    let rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
});
