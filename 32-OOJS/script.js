// var paul = {
//   firstName: "Paul",
//   lastName: "Nicholsen"
// }
//
// var rob = {
//   firstName: "Rob",
//   lastName: "Cobb"
// }

//factory pattern
// function instructorFactory(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }
// var paul = instructorFactory("Paul", "Nicholsen")
// var rob = instructorFactory("Rob", "Cobb")

// Array.prototype.sayHi = function(){console.log('hi')}

//ES5 way to simulating OO in JavaScript
// function Instructor(firstName, lastName){
//   //this starts as {}
//   this.firstName = firstName
//   this.lastName = lastName
//   Instructor.all.push(this)
// }
//
// Instructor.prototype.teach = function(){
//   console.log(`${this.firstName} is giving a lecture`)
// }
//
// Instructor.prototype.goHome = function(){
//   console.log(`${this.firstName} is going home for the day`)
// }
//
// Instructor.all = []
// Instructor.lecture = function(){console.log('All isntructors give lectures')}
//
// var paul = new Instructor("Paul", "Nicholsen")
// var rob = new Instructor("Rob", "Cobb")

//ES6

class Person {
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }

  greet(){
    console.log(`${this.firstName} says hi`)
  }
}

class Instructor extends Person{
    constructor(firstName, lastName){
      super(firstName, lastName)
      this.bff = null
      Instructor.all.push(this)
    }

    teach(){
      console.log(`${this.firstName} is giving a lecture`)
    }

    goHome(){
      console.log(`${this.firstName} is heading home`)
    }

    setBFF(instructor){
      this.bff = instructor
    }

    static lecture(){
      console.log('all instructors give lectures')
    }
}
Instructor.all = []

var paul = new Instructor("Paul", "Nicholsen")
var rob = new Instructor("Rob", "Cobb")
var jane = new Person('Jane','Doe')














//
