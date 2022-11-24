export default function contactContent() {
  let content = document.querySelector('#content')
  let pageTitle = document.createElement('h2')
  let contactButton = document.querySelector('.contact-btn')

  pageTitle.innerHTML = "Contact Us"

  content.appendChild(pageTitle)
  contactButton.classList.add('selected')
}