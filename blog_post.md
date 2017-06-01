# Javascript, Constructors, Prototypes and Inheritance..!
So learning ruby was (still is!) great. It was a nice, simple, easy-to-understand language. It's creator Yukihiro "Matz" Matsumoto designed and created ruby with the philosophy of it being fun, productive and following the principle of least astonishment.

The principle of least atonishment is a design principle that reduces the amount of atonishment (confusion or being surprised) in its use. So that's exactly why ruby flows so beautifully and is easy to understand! That's we all <3 ruby!

So the syntax that creates a class and object and allows for inheritance in ruby is simple and easy to understand.

For example:

```
class Dog
  def initialize(name, breed, color)
    @name = name
  end

  def name
    @name
  end
end

pupper = Dog.new("Poe")

pupper.name #prints out "Poe"
```

And to share say to a Cat class, I'll that I would have to do is:

```
class Cat < Dog
end
```

and I could call:

```
kitteh = Cat.new("Cate")

kitteh.name #prints out "Cate"
```

Then we started to learn javascript which is the defacto language of the internet along HTML and CSS. Javascript is more complex than ruby as it is not a true OOP (object oriented programming) language. It is a scripting

Javascript (pre-ES6, ES6 does allow for class!) does not handle object-oriented programming like ruby does - it does not do classes at all, technically. Javascript uses prototype, it is a style of object-oriented programming where classes (no class Dog!) are not present, and behavior reuse (or inheritance in class-based languages) is performed by cloning existing objects that serve as prototypes.

So to do the same code above in Javascript it would look like this:

Constructors to initialize are alike Ruby but we do not need a seperate method to define sound.

```
//es5 inheritance, below is the constructor
function Animal(sound) {
  this.sound = sound
}
```

//speak inherits from the animal parent
```
Animal.prototype.speak = function() {
  return this.sound
}
```
//test test test!
```
//test Animal
var seal = new Animal("hork!")
seal.sound // "hork!"
seal.speak() // "hork!"
```

// We want Dog to inherit from Animal so .call it with Animal so this sets to a new Dog
```
function Dog(sound, name) {
  Animal.call(this, sound)
  this.name = name
}
//As I mentioned above, Javascript is a prototype language. Every object in JS has a prototype which the parent object from which the object was created from. Wordy? Yea. So Animal is the parent here and the Dog is the child because it inherits the prototype from Animal. This allows Dog to share Animal's properties and speak()!

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

var pupper = new Dog("bork", "Poe Dameron")
pupper.sound // "bork"
pupper.speak() // "bork"
pupper.name // "Poe Dameron"
```
```
//Cat inherits from Animal as well.
function Cat(sound, name, color) {
  Animal.call(this, sound)
  this.name = name
  this.color = color
}

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat

//test Cat
var kitteh = new Cat("meowth", "Mr. Lucky", "orange")
kitteh.sound // "meowth"
kitteh.speak() // "meowth"
kitteh.name // "Garfield"
kitteh.color // "Orange"
```

And that's how you have classes and inheritance in Javascript ES5!
