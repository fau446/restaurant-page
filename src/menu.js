export default function menuContent() {
  let content = document.querySelector('#content')
  let pageTitle = document.createElement('h2')
  let menuButton = document.querySelector('.menu-btn')

  pageTitle.innerHTML = "Menu"

  content.appendChild(pageTitle)
  content.appendChild(createFoodItem('Bear Burger', 'The world-famous Bear Burger.', 'bear_burger.jpg'))
  content.appendChild(createFoodItem('Mushroom Pizza', 'A delicious mushroom pizza.', 'pizza.jpg'))

  menuButton.classList.add('selected')
}

function createFoodItem(name, description, img_name) {
  //cache DOM
  let itemContainer = document.createElement('div')
  let itemName = document.createElement('h3')
  let itemContent = document.createElement('div')
  let itemImage = document.createElement('img')
  let itemDescription = document.createElement('p')

  itemImage.src = `${img_name}`
  itemImage.width = '320'
  itemImage.height = '180'

  itemContent.classList.add('item-content')

  itemContainer.appendChild(itemName)
  itemContainer.appendChild(itemContent)

  itemContent.appendChild(itemImage)
  itemContent.appendChild(itemDescription)

  itemName.innerHTML = name
  itemDescription.innerHTML = description

  itemContainer.classList.add('item')
  return itemContainer
}