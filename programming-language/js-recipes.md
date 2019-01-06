
# JavaScript Recipes

## Inheritance

### prototype based inheritance

```javascript
function Parent(options) {
    this.options = options;
}
Parent.prototype.test = function () { console.log(this.options); }

function Child(options) {
    Parent.call(this, options);
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

var child = new Child();
```

### class based inheritance

```javascript
class Dog extends Animal {
  constructor(options) {
    super(options)
  }
}
```

Notice that, the `prototype` property of a function is an object used to build a protype-chain. 
In specific, a `new`ed object is created by `Object.create(Child.prototype)`, i.e. the `this` or `child`, so that `child.__proto__` is equal to `Child.prototype`.

By default, `Parent.prototype.constructor === Parent`, so we correct the inheritance by `Child.prototype.constructor = Child`. Or, the `child.constructor` will be equal to `Parent`.

The `instanceof` operator is essentially check these `__proto__` and `prototype`. So, we can fool JavaScript by

```javascript
({__proto__: Child.prototype}) instanceof Child // true
```

## Constructor

```javascript
function F () {}
F.constructor === Function.prototype.constructor
F.prototype.constructor ==== F

f = new F()
f.constructor === F
```

## Iterator

A iterable object is an object with `@@iterator` property, this property should be defining `[Symbol.iterator]` as an iterator. An iterator is a function that must return an object `{next}`, where `next` is a function must return an object `{done: Boolean, value: Any}`.

So we can make an object `obj` iterable by defining `obj[Symbol.iterator]`, or make a constructor `F`'s instances iterable by defining `F.prototype[Symbol.iterator]`, or make a class iterable by defining its member function `[Symbol.iterator]`. We can also make a promised object iterable by defining `[Symbol.asyncIterator]`.

### Reference

  * [Understanding the For...of Loop in JavaScript](https://blog.bitsrc.io/understanding-the-for-of-loop-in-javascript-8aded97d7ef8)

## RegExp

  * match all including newline: `[\s\S]`
  
