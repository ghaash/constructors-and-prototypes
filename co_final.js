//es5 inheritance, below is the constructor
function Animal(sound) {
  this.sound = sound
}


//speak inherits from the animal parent
Animal.prototype.speak = function() {
  return this.sound
}

//test test test!
//test Animal
var seal = new Animal("hork!")
seal.sound // "hork!"
seal.speak() // "hork!"


// We want Dog to inherit from Animal so .call it with Animal so this sets to a new Dog
function Dog(sound, name) {
  Animal.call(this, sound)
  this.name = name
}

//As I mentioned above, Javascript is a prototype language. Every object in JS has a prototype which the parent object from which the object was created from. Wordy? Yea. So Animal is the parent here and the Dog is the child because it inherits the prototype from Animal. This allows Dog to share Animal's properties and speak()!
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

//Dog inherits from Animal now!
var pupper = new Dog("bork", "Poe Dameron")
pupper.sound // "bork"
pupper.speak() // "bork"
pupper.name // "Poe Dameron"


//Cat inherits from Animal as well.
function Cat(sound, name, color) {
  Animal.call(this, sound)
  this.name = name
  this.color = color
}

//Prototype chain
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat

//test Cat
var kitteh = new Cat("meowth", "Mr. Lucky", "orange")
kitteh.sound // "meowth"
kitteh.speak() // "meowth"
kitteh.name // "Garfield"
kitteh.color // "Orange"
