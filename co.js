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

var animal = new Animal("rawr")
var dog = new Animal("bark", "Snoopy", "black and white")
var cat = new Animal("meow","Garfield", "orange" )

function Animal(speak, name, color){
  this.speak = speak
  this.name = name
  this.color = color
}
