// 'use strict'
// the value of this inside a function is undefined

// function global(){
//   debugger
//   this.firstName = "Ann"
//   console.log(`${this.firstName} says hi`)
// }

// let paul = {
//   firstName: "Paul",
//   lastName: "Nicholsen",
//   greet: function(){
//     console.log(`${this.firstName} says hi`)
//     setFullName = () => { //was an arrow function
//       this.fullName = this.firstName + " " + this.lastName
//     }
//     setFullName()
//   }
// }

let paul = {
  firstName: "Paul",
  lastName: "Nicholsen",
  greet: greet
}

let ann = {
  firstName: "Ann",
  lastName: "Duong",
  greet: greet
}

// function greet(){
//   console.log(`${this.firstName} says hi`)
// }
function greet(person1, person2){
  console.log(`${this.firstName} says hi to ${person1} and ${person2}`)
}

//.bind, .call, and .apply

//bind return a new function (copy of the old, with a new this)

// let boundedGreet = greet.bind(ann)
// let anotherGreet = boundedGreet.bind(paul)
// let boundedGreet = greet.bind(ann)
// let boundedAnnAndRob = greet.bind(ann, "Rob")
// let boundedPaulAndBruno = greet.bind(paul, "Bruno")
// let boundedAnnAndSam = greet.bind(ann, "Sam")

//call and apply
greet.call(ann, "Hillary","Lane")
greet.apply(ann, ["Lane","Hillary"])










//
