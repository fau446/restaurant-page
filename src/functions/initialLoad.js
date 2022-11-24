import homeContent from '../home.js'
import pageLoad from './pageLoad.js'

export default function initialLoad() {
  createHeader()
  createLogo()
  createNav()
  pageLoad(homeContent)
}

function createLogo() {
  let logo = document.createElement('h1')
  let header = document.querySelector('header')
  logo.innerHTML = "Bear's"
  header.appendChild(logo)
}

function createNav() {
  let nav = document.createElement('nav')
  let header = document.querySelector('header')
  let homeButton = document.createElement('button')
  let menuButton = document.createElement('button')
  let contactButton = document.createElement('button')

  homeButton.innerHTML = "Home"
  menuButton.innerHTML = "Menu"
  contactButton.innerHTML = "Contact Us"

  homeButton.classList.add('home-btn')
  menuButton.classList.add('menu-btn')
  contactButton.classList.add('contact-btn')

  nav.appendChild(homeButton)
  nav.appendChild(menuButton)
  nav.appendChild(contactButton)
  header.appendChild(nav)
}

function createHeader() {
  let header = document.createElement('header')
  let content = document.querySelector('#content')

  content.parentNode.insertBefore(header, content)
}