export default function contactContent() {
  let content = document.querySelector('#content')
  let pageTitle = document.createElement('h1')

  pageTitle.innerHTML = "Contact"

  content.appendChild(pageTitle)
}