
# JavaScript

## Overview

### JavaScript vs. EMACScript

JavaScript is the general/unofficial name, while EMACScript is the offiial name, and usually called with a version: like ES6 (ES2015).


### Hoisting
Because of there is no block scope for `var` in ES5, each declaration of `var` will be relocated to the beginning of the function scope or global scope, while the assignment of the variable will still be left at its original place.

So the following codes are equivalent:
```javascript
console.log(test);
var test = 1;
```
```javascript
var test;
console.log(test);
test = 1;
```

## References

  * [awesome javascript learning](https://github.com/micromata/awesome-javascript-learning)
