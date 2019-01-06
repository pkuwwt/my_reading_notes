
# Tricky part of Javascript


## Data Types

```javascript
null === null                  // true
undefined === undefined        // true
NaN === NaN                    // false
isNaN(undefind)                // true
isNaN(null)                    // false
typeof null === 'object'       // true
null.constructor               // TypeError
typeof undefind === 'undefind' // true
typeof NaN === 'number'        // true
typeof 'a' === 'string'        // true
'a' instanceof String          // false
'a'.constructor === String     // true
typeof 1 === 'number'          // true
1 instanceof Number            // false
typeof true === 'boolean'      // true
true instanceof Boolean        // false
```
