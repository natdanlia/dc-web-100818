//Hositing

// for(let i = 0; i<10; i++){
//
// }
//
// var a = "ANN"
// var e = "ERIN"




























//function declaration are always hoisted
function funcDeclaration(){
  console.log("inside a function declaration")
}

//function expression are NOT hoisted
var funcExpression = function(){
  console.log("inside a function expression")
}

//arrow functions
var arrowFunction = () => {
  console.log('inside an arrow function')
}

// var timesThree = (number) => {return number * 3}
// var timesThree = number => {return number * 3}
var timesThree = x => x * 3
//extreme succinct in certain user cases




//Scope = where a variable is born, lives, and dies
//const, let, and var
var cookie = "chocolate chip"
var cookie = "almond butter"
cookie = "oatmeal raisin"
//var can be redeclared, var can be reassigned

let brownie = "fudge"
brownie = "cookie"
//let CANT be redeclared, it CAN be reassigned

const bread = "white"
// bread = "whole wheat"
//const CANT be redeclared, and CANT be reassigned

//global, functional, block
//var has functional
//let and const has block

// var teacher = "Erin"

// let teacher = "Paul"

// function aFunction(){
//   if(true){
//     console.log("inside block",teacher)
//   }
//   console.log("outside block",teacher)
// }
//
// aFunction()

// var teacher = "Paul"
//
// function aFunction(){
//   function otherFunction(){
//     console.log(teacher)
//   }
//
//   otherFunction()
// }
//
// aFunction()
//parent scope is determined by where the function is physically located, NOT where it is invoked











let obj = {key1: "value1", key2: "value2", key3:"value3"}
let arr = [4,5,6]


// for(let i = 0; i<arr.length; i++){
//   console.log(arr[i])
// }

//for...of (use them for arraysm, iterate through the elements)
// for(const element of arr){
//   console.log(element)
// }

//for...in (use them with arrays, iterate through index)
// for(const index in arr){
//   console.log(arr[index])
// }

//for...in (use them with objects, iterating through the keys)
// for(const key in obj){
//   console.log(obj[key])
// }


arr = [4,5,6]
// let doubleMe = function(num){return num * 2}

let newArray = arr.map(num => num * 2)
console.log(newArray)


// arr.forEach(logToScreen)
//
// function logToScreen(thing){
//   console.log(thing)
// }










//
