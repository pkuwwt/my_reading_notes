
# JavaScript Frequent Asked Questions

## Explain what is Javascript? List some data types supported by Javascript?

Javascript is an object-oriented computer programming language commonly used to create interactive effects within web browsers.It is first used by the Netscape browser, that provides access to the HTML document object model (DOM), provides access to the browser object model (BOM). Javascript syntax looks a lot like java, c or c++ syntax.

Below is the list of data types supported by Javascript:

  * Undefined
  * Null
  * Boolean
  * String
  * Symbol
  * Number
  * Object
  
## What close() does in Javascript?
In Javascript close() method is used to close the current window. You must write window.close() to ensure that this command is associated with a window object and not some other JavaScript object.


## What is the difference between let and var?
Both var and let are used for variable/ method declaration in javascript but the main difference between let and var is that var is function scoped whereas let is block scoped.

## Explain Closures in JavaScript?
Closures are the combination of lexical environment and function within which the function was declared. This allows JavaScript programmers to write better, more creative, concise and expressive codes. The closure will consist of all the local variables that were in-scope when the closure was created.

Sure, closures appear to be complex and beyond the scope, but after you read this article, closures will be much more easy to understand and more simple for your everyday JavaScript programming tasks. JavaScript is  a very function-oriented language it gives the user freedom to use functions as the wish of the programmer.

## Explain JavaScript Event Delegation Model?
In JavaScript, there is some cool stuff that makes it the best of all. One of them is Delegation Model. When capturing and bubbling, allow functions to implement one single handler to many elements at one particular time then that is called event delegation. Event delegation allows you to add event listeners to one parent instead of specified nodes. That particular listener analyzes bubbled events to find a match on the child elements. Many people think it to be complicated but in reality, it is very simple if one starts understanding it.

Also, Read [Five JavaScript Frameworks to learn in 2018](https://www.onlineinterviewquestions.com/blog/5-javascript-frameworks-to-learn/)

## Describe negative infinity in JavaScript?
NEGATIVE_INFINITY property represents negative infinity and is a number in javascript, which is derived by ‘dividing negative number by zero’. It can be better understood as a number that is lower than any other number. Its properties are as follows:
  * A number of objects need not to be created to access this static property.
  * The value of negative infinity is the same as the negative value of the infinity property of the global object.

The values behave differently than the mathematical infinity:

  * Any positive value, including POSITIVE_INFINITY, multiplied by NEGATIVE_INFINITY is NEGATIVE_INFINITY.
  * Any negative value, including NEGATIVE_INFINITY, multiplied by NEGATIVE_INFINITY is POSITIVE_INFINITY.
  * Zero multiplied by NEGATIVE_INFINITY is NaN.
  * NaN multiplied by NEGATIVE_INFINITY is NaN.
  * NEGATIVE_INFINITY, divided by any negative value except NEGATIVE_INFINITY, is POSITIVE_INFINITY.
  * NEGATIVE_INFINITY, divided by any positive value except POSITIVE_INFINITY, is NEGATIVE_INFINITY.
  * NEGATIVE_INFINITY, divided by either NEGATIVE_INFINITY or POSITIVE_INFINITY, is NaN.
  * Any number divided by NEGATIVE_INFINITY is zero.
  
 ## Explain function hoisting in JavaScript?
JavaScript’s default behavior that allows moving declarations to the top is called Hoisting. The 2 ways of creating functions in JavaScript are Function Declaration and Function Expression. Let’s find out more about these:

### Function Declaration
A function with the specific parameters is known as function declarations. To create a variable in JavaScript is called declarations.

e.g:

```javascript
hoisted(); // logs "foo"

function hoisted() {
  console.log('foo');
}
```

### Function Expression

When a function is created by using an expression it is called function expression.

e.g:

```javascript
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {
   console.log('bar');
};
```

## What is the use of let & const?
In modern javascript let & const are different ways of creating variables.Earlier in javascript, we use the var keyword for creating variables. let & const keyword is introduced in version ES6 with the vision of creating two different types of variables in javascript one is immutable and other is mutable.
  * const: It is used to create an immutable variable. Immutable variables are variables whose value is never changed in the complete life cycle of the program.
  * let: let is used to create a mutable variable. Mutable variables are normal variables like var that can be changed any number of time.
  
 ## Explain Arrow functions?
An arrow function is a consise and short way to write function expressions in Es6 or above.A rrow functions cannot be used as constructors and also does not supports this, arguments, super, or new.target keywords. It is best suited for non-method functions. In general an arrow function looks like `const function_name = ()=>{}`

```javascript
 const greet=()=>{console.log('hello');}
 greet();
 ```
 
 
