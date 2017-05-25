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
var dog = new Animal("bark", "Snoopy", "black and white")
var cat = new Animal("meow","Garfield", "orange" )

//constructor function that
function Animal(speak, name, color){
  this.speak = speak
  this.name = name
  this.color = color
}

//dog.speak returns "bark"
//dog["speak"] returns "bark"
//dog["speak"] = "arf", dog now returns speak as arf, 
