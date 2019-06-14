let container = document.querySelector('#card-holder')
let button = document.querySelector('#button')

// Create Component
function createHTML(text) {
  return `
  <section class="card">
  <p>${text}</p>
  <button class="delete">Delete</button>
  </section>
  `
}

// On click, take text content and apply it to dom
button.addEventListener('click', () => {
  let textValue = document.querySelector('#text-input').value
  container.innerHTML += createHTML(textValue)
  getDeleteButtons()
})

// Add delete functions
function getDeleteButtons() {
  document.querySelectorAll('.delete').forEach(deleteButton => {
    deleteButton.addEventListener('click', event => {
      let cardHolder = event.target.parentElement.parentElement
      cardHolder.removeChild(event.target.parentElement)
    })
  })
}

