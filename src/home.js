export default function homeContent() {
  let content = document.querySelector('#content')
  let headline = document.createElement('h1')
  let image = document.createElement('img')
  let description = document.createElement('div')

  headline.innerHTML = "Amazing Restaurant"
  image.src = '../src/images/brick-wall-ga7e8974e2_640.jpg'
  description.innerHTML = "Come check out our restaurant!"

  content.appendChild(headline)
  content.appendChild(image)
  content.appendChild(description)
}