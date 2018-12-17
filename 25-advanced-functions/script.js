//Higher Order Functions

//Callbacks
// let arr = [2,3,4]
// console.log(arr.map(x => x + 10))

// function addTen(x){
//   return x + 10
// }
//
// function trippler(x){
//   return x*3
// }
//
// function myMapper(arr, callback){
//   let newArray = []
//   for(let i=0; i<arr.length; i++){
//     let transformedElement = callback(arr[i])
//     newArray.push(transformedElement)
//   }
//   return newArray
// }
//
// let arr = [2,3,4]
//
// console.log(myMapper(arr, el => el * 0.5 ))

// function onboardStudent(studentName, process){
//   console.log(`Welcome ${studentName}!`)
//   process()
// }
//
// function giveKeyCard(){
//   console.log(`here is your keycard`)
// }
//
// function kickOut(){
//   console.log(`please leave`)
// }



//Using callbacks irl
// setTimeout(sayHi, 2000)
// setInterval(sayHi, 1000)
// let timerId = setInterval(sayHi, 1000)
// setTimeout(function(){
//   clearInterval(timerId)
// }, 5000)
//
// function sayHi(){
//   console.log("HI!!!!")
// }



//Functions that return functions

// function welcomeStudentToModFactory(num){
//   //num exists in this scope
//   return function(studentName){
//     console.log(`Welcome ${studentName} to Mod ${num}`)
//   }
// }
//
// let welcomeStudentToMod1 = welcomeStudentToModFactory(1)
// let welcomeStudentToMod2 = welcomeStudentToModFactory(2)
// let welcomeStudentToMod3 = welcomeStudentToModFactory(3)
// let welcomeStudentToMod4 = welcomeStudentToModFactory(4)
// let welcomeStudentToMod5 = welcomeStudentToModFactory(5)
// let welcomeStudentToMod6 = welcomeStudentToModFactory(6)
//
// welcomeStudentToMod1()
// welcomeStudentToMod2("Lane")

//
// function welcome(studentName, num){
//   console.log(`Welcome ${studentName} to Mod ${num}`)
// }
//

//Closure
// function createStudentId(){
//   let id = 0
//   return function(studentName){
//     id++
//     console.log(`Welcome ${studentName}, your ID is ${id}`)
//   }
// }
//
// let generateStudentId = createStudentId()


//Immediately Invoked Function Express (IIFE)
(function (date, location, cohort){
  let city = "DC"
  window.campus =
  `${city} opened up on ${date} at ${location} with ${cohort}`
})("Feb 2018", "G street", "Baby Got Stack")



















//
