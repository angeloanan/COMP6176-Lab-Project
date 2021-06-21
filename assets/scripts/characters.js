function revealCharacter(area, character) {
  document.querySelectorAll(`#${area}-gallery .gallery-content`).forEach((el) => el.style.display = 'none')
  document.querySelector(`#${character}`).style.display = 'flex'
}

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById("amber").style.display = 'flex'
  document.getElementById("ganyu").style.display = 'flex'
})