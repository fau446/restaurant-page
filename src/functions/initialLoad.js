import homeContent from '../home.js'
import pageLoad from './pageLoad.js'

export default function initialLoad() {
  createNav()
  pageLoad(homeContent)
}

function createNav() {
  let nav = document.createElement('nav')
  let content = document.querySelector('#content')
  let homeButton = document.createElement('button')
  let menuButton = document.createElement('button')
  let contactButton = document.createElement('button')

  homeButton.innerHTML = "Home"
  menuButton.innerHTML = "Menu"
  contactButton.innerHTML = "Contact Us"

  content.parentNode.insertBefore(nav, content)
  nav.appendChild(homeButton)
  nav.appendChild(menuButton)
  nav.appendChild(contactButton)
}