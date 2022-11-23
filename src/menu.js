export default function menuContent() {
  let content = document.querySelector('#content')
  let pageTitle = document.createElement('h1')

  pageTitle.innerHTML = "Menu"

  content.appendChild(pageTitle)
}