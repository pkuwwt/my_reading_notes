
# JavaScript Recipes

## Inheritance

### prototype based inheritance

```
function Parent(options) {
    this.options = options;
}
Parent.prototype.test = function () { console.log(this.options); }

function Child(options) {
    Parent.call(this, options);
}
Child.prototype = Object.create(Parent.prototype);
Child.constructor = Parent;

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



## RegExp

  * match all including newline: `[\s\S]`
  
