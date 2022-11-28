export default function homeContent() {
  let content = document.querySelector('#content')
  let pageTitle = document.createElement('h2')
  let image = document.createElement('img')
  let description = document.createElement('p')
  let homeButton = document.querySelector('.home-btn')

  pageTitle.innerHTML = "About Us"
  image.src = 'images/chef_cooking.jpg'
  image.width = '413'
  image.height = '285'
  description.innerHTML = "Welcome to Bear's, home to the world-famous \"Bear Burger\"."

  content.appendChild(pageTitle)
  content.appendChild(image)
  content.appendChild(description)

  homeButton.classList.add('selected')
}