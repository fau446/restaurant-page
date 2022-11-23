export default function pageLoad(loadContent) {
  resetPage()
  loadContent()
}

function resetPage() {
  let parent = document.querySelector('#content')
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}