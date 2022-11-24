export default function homeContent() {
  let content = document.querySelector('#content')
  let pageTitle = document.createElement('h2')
  let image = document.createElement('img')
  let description = document.createElement('p')
  let homeButton = document.querySelector('.home-btn')

  pageTitle.innerHTML = "About Us"
  //image.src = '../src/images/brick-wall-ga7e8974e2_640.jpg'
  description.innerHTML = "Come check out our restaurant!"

  content.appendChild(pageTitle)
  content.appendChild(image)
  content.appendChild(description)

  homeButton.classList.add('selected')
}