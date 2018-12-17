document.addEventListener("DOMContentLoaded", function(){
  //adding event listeners to emails
  let arr = Array.from(document.getElementsByClassName('email'))
  arr.forEach(el => {el.addEventListener('click', sendEmail)})

  //add event listener to the form
  document.querySelector('form').addEventListener('submit', getFormValues)

  //adding event listeners to entire instructor row to view profile
  let ar = Array.from(document.getElementsByClassName('person'))
  ar.forEach(el => {el.addEventListener('click', viewingProfile, true)})

})

function viewingProfile(event){
  console.log(`viewing profile ${event.currentTarget.innerText}`)
}

function getFormValues(event){
  event.preventDefault()
  let firstName = document.querySelector('#firstNameInput').value
  let lastName = document.querySelector('#lastNameInput').value
  let email = document.querySelector('#emailInput').value
  document.querySelector('form').reset()
  addInstructorToTable(firstName, lastName, email)
}

function sendEmail(event){
  // event.stopPropagation()
  let email = event.target.innerText
  console.log(`sending an email to ${email}....`)
}

function getTableBody(){
  return document.querySelector('tbody')
}

function addInstructorToTable(firstName, lastName, email){
  let trElement = document.createElement('tr')
  getTableBody().appendChild(trElement)
  trElement.id = "row-4"
  let firstNameElement = document.createElement('td')
  let lastNameElement = document.createElement('td')
  let emailElement = document.createElement('td')

  emailElement.addEventListener('click', sendEmail)

  trElement.appendChild(firstNameElement)
  trElement.appendChild(lastNameElement)
  trElement.appendChild(emailElement)
  firstNameElement.innerText = firstName
  lastNameElement.innerText = lastName
  emailElement.innerText = email
}

// function addInstructorHTML(firstName, lastName, email){
//   let tbodyElement = getTableBody()
//   tbodyElement.innerHTML += `<tr id="row-4">
//     <td class="firstName">${firstName}</td>
//     <td class="lastName">${lastName}</td>
//     <td class="email">${email}</td>
//   </tr>`
// }
