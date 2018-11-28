// console.log('connected')

// httpGet(`https://pokeapi.co/api/v2/pokemon/`, function(){
//   //iterate through and find bulbasaur
//   let pokemonUrl = pokemon.url
//   httpGet(pokemonUrl, function(){
//     //iterate through the abilities array
//     //find the ability obj where is_hidden = true
//     let abilityURL = ability.url
//     httpGet(abilityURL, function(){
//       let ability = effect_entries[0]
//       ability.effect //THIS IS THE THING I WANT!!!
//     })
//   })
// })

//do somthing1
//do something2
//do something3
//do something4

// fetch('https://animal-farm-api.herokuapp.com/animals')
// //returns a Promise object
//
// var p = new Promise(()=>{})
//
// let resolveInFiveSeconds = (resolve) => {
// 	setTimeout(function(){resolve('I am resolved')}, 5000)
// }
//
// p = new Promise(resolveInFiveSeconds)
//
// var p = fetch('https://animal-farm-api.herokuapp.com/animals')
// //p will resolve when the server responds
//
// var p = fetch('https://animal-farm-api.herokuapp.com/animals')
// p.then(() => {console.log('promise has been fullfilled')})
//
// fetch('https://animal-farm-api.herokuapp.com/animals')
// .then((response) => {return response.json()})
// .then((data) => {console.log(data)})
//
// fetch('https://animal-farm-api.herokuapp.com/animals')
// .then(response => response.json())
// .then(data => {
// 	console.log(data)
// 	//do something with my data
// })

document.addEventListener("DOMContentLoaded", function(){
  fetchAnimals()
})

function fetchAnimals(){
  fetch('https://animal-farm-api.herokuapp.com/animals')
  .then(response => response.json())
  .then(data => {
  	console.log(data) //data is an array
  	//do something with my data
    data.forEach(character => {renderToDOM(character)})
  })
}

function renderToDOM(character){
  let header = document.createElement('h2')
  header.innerText = character.name

  let image = document.createElement('img')
  image.src = character.img

  getContainerElement().appendChild(header)
  getContainerElement().appendChild(image)
}

function getContainerElement(){
  return document.querySelector('.container')
}





//
