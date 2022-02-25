const assert = require('assert')

// TODO: 
// implement a way to create a prototype chain
// of leopard -> lynx -> cat
// leopard prototype must have ONLY a hiss method
// lynx prototype must have ONLY a purr method
// cat prototype must have ONLY a meow method
// * Method 1
// const leopard = {
//     hiss: function() {
//         console.log(this.name + ': hsss')
//     }
// }

// const lynx = Object.create(leopard, {
//     purr: {
//         value: function() {
//             console.log(this.name + ': prrr')
//         }
//     }
// })

// const createCat = (name) => {
//     const cat = Object.create(lynx, {
//         name: {
//             value: name,
//         },
//         meow: {
//             value: function() {
//                 console.log(this.name + ': meow');
//             }
//         }
//     })
//     return cat;
// }

// * Method 2
// function Leopard(name) {
//     this.name = name;
// }

// Leopard.prototype.hiss = function() {
//     console.log(this.name + ': hsss')
// }

// function Lynx(name) {
//     Leopard.call(this, name);
// }

// Lynx.prototype = Object.create(Leopard.prototype)

// Lynx.prototype.purr = function() {
//     console.log(this.name + ': prrr')
// }

// function Cat(name) {
//     Lynx.call(this, name);
// }

// Cat.prototype = Object.create(Lynx.prototype)


// Cat.prototype.meow = function() {
//     console.log(this.name + ': meow')
// }

// * Method 3
class Leopard {
    constructor(name) {
        this.name = name;
    }

    hiss() {
        console.log(this.name + ': hsss')
    }
}

class Lynx extends Leopard {
    constructor(name) {
        super(name)
    }
    purr() {
        console.log(this.name + ': prrr')
    }
}

class Cat extends Lynx {
    constructor(name) {
        super(name)
    }
    meow() {
        console.log(this.name + ': meow')
    }
}

// const felix = null //TODO replace null with instantiation of a cat
// const felix = createCat('Felix the cat')
const felix = new Cat('Felix the cat')
felix.meow() // prints Felix the cat: meow
felix.purr() // prints Felix the cat: prrr
felix.hiss() // prints Felix the cat: hsss

// prototype checks, do not remove
const felixProto = Object.getPrototypeOf(felix)
const felixProtoProto = Object.getPrototypeOf(felixProto)
const felixProtoProtoProto = Object.getPrototypeOf(felixProtoProto)

assert(Object.getOwnPropertyNames(felixProto).length, 1)
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1)
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1)
assert(typeof felixProto.meow, 'function')
assert(typeof felixProtoProto.purr, 'function')
assert(typeof felixProtoProtoProto.hiss, 'function')
console.log('prototype checks passed!')