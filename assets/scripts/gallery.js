const carouselMask = document.querySelector(".slideshow-mask");
const carouselImages = document.querySelectorAll(".slideshow-mask img")

let imageCounter = 0;
let imageSize = carouselImages[0].getBoundingClientRect().width

updateImageSlideshow()

document.getElementById("btn-left").onclick = () => {
  imageCounter = --imageCounter < 0 ? 6 : imageCounter
  updateImageSlideshow()
}

document.getElementById("btn-right").onclick = () => {
  imageCounter = ++imageCounter >= 7 ? 0 : imageCounter
  updateImageSlideshow()
}

function updateImageSlideshow() {
  carouselMask.style.transform = `translateX(${-imageSize * imageCounter}px)`
}

// Update imageSize on window resize
window.onresize = () => {
  carouselMask.style.transform = 'none'
  imageSize = carouselImages[0].getBoundingClientRect().width
  updateImageSlideshow()
  carouselMask.style.transform = 'transition: transform 0.25s ease-in-out;'
}