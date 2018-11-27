document.addEventListener("DOMContentLoaded", function(){
  fetchAllPokemon()
  getForm().addEventListener('submit', addNewPokemon)
});

function addNewPokemon(event){
  event.preventDefault()
  let name = document.querySelector('#name-input').value
  let spriteURL = document.querySelector('#sprite-input').value
  postFetch(name, spriteURL)
}

function postFetch(name, spriteURL){
  let data = {
    name: name,
    sprite: spriteURL
  }
  fetch('http://localhost:3000/pokemon', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      //data is a pokemon obj
      renderPokemon(data)
    })
}

function fetchAllPokemon(){
  fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(data => {
      //data is an array
      data.forEach(pokemon => {renderPokemon(pokemon)})
    })
}

function removePokemon(event){
  console.log('deleting a pokemon...', event.currentTarget)
  let pokemonId = event.currentTarget.id.split('-')[1]
  deleteFetch(pokemonId)
}

function deleteFetch(id){
  fetch(`http://localhost:3000/pokemon/${id}`, {
    method: "DELETE"
  })
    .then(response => response.json())
    .then(data => {
      let pokemonDiv = document.querySelector(`#pokemon-${id}`)
      pokemonDiv.remove()
    })
}

//takes a pokemon and -> creates a div and appends it to pokemon-container
function renderPokemon(pokemon){
  //i have a pokemon, I want <div> on the DOM
  let divElement = document.createElement('div')
  divElement.classList.add('card')
  divElement.addEventListener('click', removePokemon)
  divElement.id = `pokemon-${pokemon.id}`
  divElement.dataset.id = pokemon.id

  let headerElement = document.createElement('h3')
  headerElement.innerText = pokemon.name

  let imageElement = document.createElement('img')
  imageElement.src = pokemon.sprite

  divElement.appendChild(headerElement)
  divElement.appendChild(imageElement)
  getPokemonContainer().appendChild(divElement)
}

function getPokemonContainer(){
  return document.querySelector('#pokemon-container')
}

function getForm(){
  return document.querySelector('form')
}
