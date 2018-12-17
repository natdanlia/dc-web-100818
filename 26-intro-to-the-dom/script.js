document.addEventListener("DOMContentLoaded", function(){
  addInstructorToTable()
})

function getTableBody(){
  return document.querySelector('tbody')
}

function addInstructorHTML(){
  let tbodyElement = getTableBody()
  let firstName = "Jane"
  let lastName = "Doe"
  let email = "jane@google.com"
  tbodyElement.innerHTML += `<tr id="row-4">
    <td class="firstName">${firstName}</td>
    <td class="lastName">${lastName}</td>
    <td class="email">${email}</td>
  </tr>`
}

function addInstructorToTable(){
  let trElement = document.createElement('tr')
  getTableBody().appendChild(trElement)
  trElement.id = "row-4"
  let firstNameElement = document.createElement('td')
  let lastNameElement = document.createElement('td')
  let emailElement = document.createElement('td')
  trElement.appendChild(firstNameElement)
  trElement.appendChild(lastNameElement)
  trElement.appendChild(emailElement)
  firstNameElement.innerText = 'Jane'
  lastNameElement.innerText = 'Doe'
  emailElement.innerText = 'jane@gmail.com'
}
