// Function or Methods

// Variable -> Noun
// Function/Method -> Verb

// Incorrect
var FirstName = ""

// Correct
// var firstName = "" // Camel Casing
// var first_name = "" // snake Casing
// var "first-name" = "" // kebab Casing

// console.log("outside the function")

// function addTwoNumbers(a = 0,b = 0,c = 0) {
//     console.log(`${a} + ${b} + ${c} =`,a + b + c)
// }

// addTwoNumbers(1,2,3)
// addTwoNumbers(150,250)

// const students = [
//     {
//         firstName : "Ramesh",
//         lastName: "M"
//     },
//     {
//         firstName : "Vignesh",
//         lastName: "R"
//     }
// ]

// Left side -> Key/Property
// Right side -> Value

// const student = {
//     firstName : "Ramesh",
//     lastName: "M",
//     fullName: function() {
//         return this.firstName + " " + this.lastName
//     }
// }

// console.log(student.fullName())


// console.log(Math.floor(Math.random() * 100000))

// 2 - ceil
// 1.25
// 1 - Floor


// Set
// const list = new Set()

// list.add(1)
// list.add(1)
// list.add(2)
// list.delete(1)

// console.log(list)

// for (var i of list){
//     console.log(i)
// }

const maps = new Map();

maps.set("first-name", "Ramesh")
maps.set("last-name", "M")

console.log(maps.get("first-name"))

// Assignment
// 1. var vs let vs const (Deepa)
// 2. Object Constructors (Set/Map) (Prakesh)
// 3. Switch / While / Do While (Narmadha)