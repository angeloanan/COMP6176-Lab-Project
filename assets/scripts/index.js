const carouselMask = document.querySelector(".slideshow-mask");
const carouselImages = document.querySelectorAll(".slideshow-mask img")

let imageCounter = 0;
let imageSize = carouselImages[0].getBoundingClientRect().width

updateImageSlideshow()

document.getElementById("btn-left").onclick = () => {
  imageCounter = --imageCounter < 0 ? 7 : imageCounter
  updateImageSlideshow()
}

document.getElementById("btn-right").onclick = () => {
  imageCounter = ++imageCounter >= 8 ? 0 : imageCounter
  updateImageSlideshow()
}

function updateImageSlideshow() {
  carouselMask.style.transform = `translateX(${-imageSize * imageCounter}px)`
}

// Update imageSize on window resize
window.addEventListener('resize', () => {
  carouselMask.style.transform = 'unset'
  imageSize = carouselImages[0].getBoundingClientRect().width
  updateImageSlideshow()
  carouselMask.style.transform = 'transition: transform 0.25s ease-in-out;'
})

window.addEventListener('load', () => {
  imageSize = carouselImages[0].getBoundingClientRect().width
  updateImageSlideshow()
})