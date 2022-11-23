import initialLoad from './functions/initialLoad.js'
import pageLoad from './functions/pageLoad.js'
import homeContent from './home.js'
import menuContent from './menu.js'
import contactContent from './contact.js'
import './style.css'

initialLoad()

//cache DOM
let homeButton = document.querySelector('.home-btn')
let menuButton = document.querySelector('.menu-btn')
let contactButton = document.querySelector('.contact-btn')

homeButton.addEventListener('click', () => pageLoad(homeContent))
menuButton.addEventListener('click', () => pageLoad(menuContent))
contactButton.addEventListener('click', () => pageLoad(contactContent))