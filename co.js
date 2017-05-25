// Prototype
// constructor and how prototype works
// then blog
// message him js and blog post

// animal.speak() // "rawr"
// dog.speak() // "bark"
// dog.name // "Snoopy"
// cat.speak() // "meow"
// cat.name // "Garfield"
// cat.color // "Oragne"

// defining and creating animal/dog/cat with Animal class
var animal = new Animal("rawr")
var dog = new Animal("bark", "Snoopy")
var cat = new Animal("meow","Garfield", "orange" )

//constructor function that
function Animal(speak, name, color){
  this.speak = speak
  this.name = name
  this.color = color
}

//dog.speak returns "bark"
//dog["speak"] returns "bark"
//dog["speak"] = "arf", dog now returns speak as arf, bark is forever gone

//this
//in a constructor, this refers to the current object being created
//eg this.speak = Animal.speak and var whatever is whatever.speak

//Prototypes, this is a method, its a function that is part of the object
var animal = new Animal("rawr")
var dog = new Animal("bark", "Snoopy")
var cat = new Animal("meow","Garfield", "orange")

function Animal(speak, name, color){
  this.speak = speak
  this.name = name
  this.color = color
  this.animalSays = function() {
    console.log("This animal says " + this.speak)
  }
}

// but we can refactor this with prototype, pulling this.animalSays out of the constructor
var animal = new Animal("rawr")
var dog = new Animal("bark", "Snoopy")
var cat = new Animal("meow","Garfield", "orange")

function Animal(speak, name, color){
  this.speak = speak
  this.name = name
  this.color = color
}

//.prototype searches for the Animal class and "pulls the constructor in so we can use it!"
Animal.prototype.animalSays = function() {
  console.log("This animal says " + this.speak)
}
