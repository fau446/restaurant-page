export default function contactContent() {
  let content = document.querySelector('#content')
  let pageTitle = document.createElement('h2')
  let contactButton = document.querySelector('.contact-btn')

  pageTitle.innerHTML = "Contact Us"

  content.appendChild(pageTitle)
  content.appendChild(createContactItem('Address', '1234 Fake St, Fake City'))
  content.appendChild(createContactItem('Phone', '(123) 456-7890'))
  content.appendChild(createContactItem('Email', 'fakeemail@domain.com'))
  contactButton.classList.add('selected')
}

function createContactItem(headerName, content) {
  let contactItem = document.createElement('div')
  let header = document.createElement('h3')
  header.innerHTML = headerName
  let info = document.createElement('p')
  info.innerHTML = content

  contactItem.appendChild(header)
  contactItem.appendChild(info)

  contactItem.classList.add('contact-item')

  return contactItem
}