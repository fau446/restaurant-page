export default function menuContent() {
  let content = document.querySelector('#content')
  let pageTitle = document.createElement('h2')
  let menuButton = document.querySelector('.menu-btn')

  pageTitle.innerHTML = "Menu"

  content.appendChild(pageTitle)

  menuButton.classList.add('selected')
}