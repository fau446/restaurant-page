export default function pageLoad(loadFunction) {
  removeChildNodes()
  loadFunction()
}

function removeChildNodes() {
  let parent = document.querySelector('#content')
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}