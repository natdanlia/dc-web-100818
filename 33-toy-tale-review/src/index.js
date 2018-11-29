
const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

// YOUR CODE HERE

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})


// OR HERE!
//When the DOM content loads, I want to make a get fetch call, and manipulate the DOM by adding toy cards for each toy

function getToys() {
  fetch("http://localhost:3000/toys")
  .then(res => res.json())
  .then(data => data.forEach(toy => renderToy(toy)))
}

function renderToy(toy) {
  let toyCollection = document.querySelector("#toy-collection")

  let toyDiv = document.createElement("div")
  toyDiv.className = "card"

  let toyName = document.createElement("h2")
  toyName.innerText = toy.name

  let toyImage = document.createElement("img")
  toyImage.className = "toy-avatar"
  toyImage.src = toy.image

  let toyLikesParagraph = document.createElement("p")
  toyLikesParagraph.innerText = `${toy.likes} Likes`

  let toyLikeBtn = document.createElement("button")
  toyLikeBtn.className = "like-btn"
  toyLikeBtn.innerText = "Like <3"
  toyLikeBtn.dataset.id = toy.id
  toyLikeBtn.dataset.likes = toy.likes
  toyLikeBtn.addEventListener("click", updateLikes)


  toyDiv.append(toyName, toyImage, toyLikesParagraph, toyLikeBtn)

  toyCollection.appendChild(toyDiv)

}

getToys()



//
// When I click the "create new toy" button, I want to make a post fetch call, and manipulate the DOM render the created toy
const createToyForm = document.querySelector(".add-toy-form")
createToyForm.addEventListener("submit", createNewToy)

function createNewToy(e) {
  e.preventDefault()
  // get the right inputs and their data
  let name = document.getElementsByName("name")[0].value
  let image = document.getElementsByName("image")[0].value

  let data = {
    name: name,
    image: image,
    likes: 0
  }

  // fetch post to db.json
  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(data => renderToy(data))
}



// When I click the like button, I want to make a PATCH fetch call, and manipulate the DOM update the likes in the toy card

function updateLikes(e) {
  let toyDataId = e.target.dataset.id

  let currentToyLikes = parseInt(e.target.dataset.likes)

  let data = {likes: currentToyLikes + 1}

  e.target.parentElement.querySelector("p").innerText = `${currentToyLikes + 1} Likes`

  e.target.dataset.likes = currentToyLikes + 1

  fetch(`http://localhost:3000/toys/${toyDataId}`, {
    method: 'PATCH',
    headers:
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
  .then(data => {
    e.target.parentElement.querySelector("p").innerText = `${data.likes} Likes`

    e.target.dataset.likes = data.likes
  })

}
