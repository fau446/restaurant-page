export default function pageLoad(loadContent) {
  resetPage()
  resetButtonHightlight()
  loadContent()
}

function resetPage() {
  let parent = document.querySelector('#content')
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

function resetButtonHightlight() {
  let homeButton = document.querySelector('.home-btn')
  let menuButton = document.querySelector('.menu-btn')
  let contactButton = document.querySelector('.contact-btn')

  homeButton.classList.remove('selected')
  menuButton.classList.remove('selected')
  contactButton.classList.remove('selected')
}