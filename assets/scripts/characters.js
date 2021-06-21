function revealCharacter(area, character) {
  console.log(`From ${area}, opening ${character}`);
  document.querySelectorAll(`#${area}-gallery .gallery-content`).forEach((el) => el.style.display = 'none')
  document.querySelector(`#${character}`).style.display = 'flex'
}

window.addEventListener('load', () => {
  document.getElementById("amber").style.display = 'flex'
  document.getElementById("ganyu").style.display = 'flex'
})