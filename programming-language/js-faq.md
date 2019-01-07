
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
 
## What are exports and imports?
Imports and exports help us to write modular javascript code. Using Imports and exports we can split our code into multiple files. Imports allow taking only some specific variables or methods of a file. We can import methods or variables that are exported by a module. See the below example for more detail.

```javascript
 //index.js
 import name,age from './person'; 

 console.log(name);
 console.log(age);
```
```javascript
 //person.js
 let name ='Sharad', occupation='developer', age =26;

 export { name, age};
 ```

## What is difference between module.exports and export?
The module is a plain JavaScript object with an exports property. Exports is a plain JavaScript variable that happens to be set to module.exports. At the end of your file, node.js will basically ‘return’ module.exports to the require function. A simplified way to view a JS file in Node could be this:

```javascript
var module = { exports: {} };
var exports = module.exports;

// your code
return module.exports;
```

If you set a property on exports, like exports.a = 9;, that will set module.exports.a as well because objects are passed around as references in JavaScript, which means that if you set multiple variables to the same object, they are all the same object; so then exports and module.exports are the same objects.
But if you set exports to something new, it will no longer be set to module.exports, so exports and module.exports are no longer the same objects.

Source : https://stackoverflow.com/questions/16383795/difference-between-module-exports-and-exports-in-the-commonjs-module-system

## How to import all exports of a file as an object.
`import * as object name from ‘./file.js’` is used to import all exported members as an object. You can simply access the exported variables or methods using dot (.) operator of the object.

Example:

```javascript
objectname.member1;
objectname.member2;
objectname.memberfunc();
```

## Explain “use strict” ?
“use strict” is a javascript directive that is introduced in Es5. The purpose of using “use strict” directive is to enforce the code is executed in strict mode. In strict mode we can’t use a variable without declaring it. “use strict” is ignored by earlier versions of Javascript.

## In Javascript are calculations with fractional numbers guaranteed to be precise?
NO, calculations with fractional numbers are not guaranteed to be precise in Javascript

## List the comparison operators supported by Javascript?
Javascript supports below comparison operators

  * `>` Greater than
  * `<` Less than
  * `<=` Less than or equal to
  * `>=` Greater than or equal to
  * `==` Equal to
  * `!=` Not Equal to
  * `===` Equal to with datatype check
  * `!==` Not equal to with datatype check

## How do you declare variables in Javascript?
In Javascript variable are declared using the var keyword.A variable must begin with A letter, $ or _.

e.g.
```javascript
var myVar = ”Online Interview Questions”;
```

PS: All variables in Javascript are Case sensitive.

Also, read [Advanced JavaScript Interview Questions](https://www.onlineinterviewquestions.com/advanced-javascript-interview-questions/)


What will happen if an infinite while loop is run in Javascript?
The program will crash the browser.

## List HTML DOM mouse events?
HTML DOM mouse events

  * onclick
  * ondblclick
  * mousemove
  * mousedown
  * mouseover
  * mouseout
  * mouseup

## How to get the last index of a string in Javascript?
string.length-1 is used to get the last index of a string in Javascript

Example Usage:-

var myString="JavascriptQuestions";
console.log(myString.length-1);

## How to get the primitive value of a string in Javascript?
In Javascript valueOf() method is used to get the primitive value of a string.

Example Usage:

var myVar= "Hi!"
console.log(myVar.valueOf())

## What are the primitive data types in JavaScript?
A primitive is a basic data type that’s not built out of other data types. It can only represent one single value. All primitives are built-in data types by necessity, (the compiler has to know about them,) but not all built-in data types are primitives.

In JavaScript there are 5 primitive data types are available they are undefined, null, boolean, string and number are available.Everything else in Javascript is an object.

## Explain Event bubbling and Event Capturing in JavaScript?
Event Capture and Bubbling: In HTML DOM API there are two ways of event propagation and determines the order in which event will be received. The two ways are Event Bubbling and Event Capturing. The first method event bubbling directs the event to its intended target, and the second is called event capture in which the event goes down to the element.

### Event Capture
The capture procedure is rarely used but when it’s used it proves to be very helpful. This process is also called ‘trickling’. In this process, the event is captured first by the outermost element and then propagated to the innermost element. For example:

<div>

<ul>

<li></li>

</ul>

</div>
From the above example, suppose the click event did occur in the ‘li’ element, in that case capturing event it will be first handled ‘div’, then ‘ul’ and at last the target element will be hit that is ‘li’

### Event Bubbling
Bubbling just works like the bubbles, the event gets handled by the innermost element and then propagated to the outer element.

<div>
 <ul>

<li></li>

</ul>

</div>
From the above example, suppose the click event did occur in the ‘li’ element in bubbling model the event will be handled first by ‘li’ then by ‘ul’ and at last by ‘div’ element.

## What does the instanceof operator do?
In Javascript instanceof operator checks whether the object is an instance of a class or not:

Example Usage

```javascript
Square.prototype = new Square();
console.log(sq instanceof Square); // true
```

## What is Javascript BOM?
BOM stands for “Browser Object Modal” that allows Javascript to ‘talk’ to the browser, no standards, modern browsers implement similar BOMS – window, screen, location, history, navigator, timing, cookies.

## What are different types of Popup boxes available in Javascript?
In Javascript there are 3 types of Popup Boxes are available, they are

  * Alert
  * Confirm
  * Prompt

## How can you create an array in Javascript?
There are 3 different ways to create an array in Javascript. They are

### By array literal
```javascript
 var myArray=[value1,value2...valueN];
 ```
### By creating instance of Array
```javascript
var myArray=new Array();
```

### By using an Array constructor
```javascript
var myArray=new Array('value1','value2',...,'valueN');
```

## What is the 'Strict' mode in JavaScript and how can it be enabled?
Strict mode is a way to introduce better error-checking into your code. When you use strict mode, you cannot, for example, use implicitly declared variables, or assign a value to a read-only property, or add a property to an object that is not extensible.

You can enable strict mode by adding “use strict”; at the beginning of a file, a program, or a function. This kind of declaration is known as a directive prologue. The scope of a strict mode declaration depends on its context. If it is declared in a global context (outside the scope of a function), all the code in the program is in strict mode. If it is declared in a function, all the code in the function is in strict mode.

## How to calculate Fibonacci numbers in JavaScript?
Calculating Fibonacci series in JavaScript
Fibonacci numbers are a sequence of numbers where each value is the sum of the previous two, starting with 0 and 1. The first few values are 0, 1, 1, 2, 3, 5, 8, 13 ,…,

```javascript
function fib(n) {
	var a=0, b=1;
	for (var i=0; i < n; i++) {
		var temp = a+b; 
		a = b;
		b = temp;
	}
	return a;
}
```

## What is the difference between the substr() and substring() functions in JavaScript?

The substr() function has the form substr(startIndex,length). It returns the substring from startIndex and returns ‘length’ number of characters.

var s = "hello";
( s.substr(1,4) == "ello" ) // true
The substring() function has the form substring(startIndex,endIndex). It returns the substring from startIndex up to endIndex – 1.

var s = "hello";
( s.substring(1,4) == "ell" ) // true

## What are different types of Inheritence? Which Inheritance is followed in Javascript.
There are two types of Inherientence in OOPS Classic and Prototypical Inheritance. Javascript follows Prototypical Inheritance.


## What is output of undefined * 2 in Javascript?
nan is output of undefined * 2.

## How to add/remove properties to object dynamically in Javascript?
You can add a property to an object using object.property_name =value, delete object.property_name is used to delete a property.

Example:

```javascript
let user = new Object();
// adding a property
user.name='Anil';
user.age  =25;
console.log(user);
delete user.age;
console.log(user);
```
 
## How to convert Javascript date to ISO standard?
toISOString() method is used to convert javascript date to ISO standard. It converts JavaScript Date object into a string, using the ISO standard.

Usage:

```javascript
var date = new Date();
var n = date.toISOString();
console.log(n);
// YYYY-MM-DDTHH:mm:ss.sssZ
```

## How to get inner Html of an element in JavaScript?
InnerHTML property of HTML DOM is used to get inner Html of an element in JavaScript.

Example Usage:

This is inner Element
```javascript
var  inner= document.getElementById("inner").innerHTML ;
console.log(inner); // This is inner Element
document.getElementById("inner").innerHTML = "Html changed!";
var  inner= document.getElementById("inner").innerHTML ;
console.log(inner); // Html changed!
```

## How to clone an object in Javascript?
Object.assign() method is used for cloning an object in Javascript.Here is sample usage

```javascript
var x = {myProp: "value"};
var y = Object.assign({}, x); 
```

## List different ways of empty an array in Javascript?
In Javascript, there are many ways to empty an array in Javascript, below we have listed 4 major

### By assigning an empty array.

```javascript
var arr1 =[1,4,5,6];
arr1=[];
```

### By assigning array length to 0.

```javascript
var arr2 =[1,4,5,6];
arr2.length=0;
```

### By poping the elements of the array.

```javascript
var arr2 =[1,4,5,6];
while(arr.length > 0) {
    arr.pop();
}
```

### By using .splice() .

```javascript
var arr =[1,4,5,6];
arr.splice(0,arr.length)
```

## How to get an element by class in JavaScript ?
document.getElementsByClassName() method is used in Javascript to get an element with a class name.

The syntax is `document.getElementsByClassName('className')`, and the output is an array of `HTMLCollection` that have class `className`.

## Explain Typecasting in Javascript?
In Programming whenever we need to convert a variable from one data type to another Typecasting is used. In Javascript, we can do this via library functions. There are basically 3 typecasts are available in Javascript Programming, they are:

  * Boolean(value): Casts the inputted value to a Boolean
  * Number(value): Casts the inputted value to an Integer or Floating point Number.
  * String(value) : Casts the inputted value value a string

## How to encode and decode a URL in JavaScript?
encodeURI() function is used to encode an URL in Javascript.It takes a url string as parameter and return encoded string. Note: encodeURI() did not encode characters like / ? : @ & = + $ #, if you have to encode these characters too please use encodeURIComponent(). Usage:

```javascript
var uri = "my profile.php?name=sammer&occupation=pāntiNG";
var encoded_uri = encodeURI(uri);
decodeURI() function is used to decode an URL in Javascript.It takes a encoded url string as parameter and return decoded string. Usage:

var uri = "my profile.php?name=sammer&occupation=pāntiNG";
var encoded_uri = encodeURI(uri);
decodeURI(encoded_uri);
```

## How to you change the title of the page by JavaScript?
You can change the title of a webpage using setting the title property of the document object.

Example usage

```javascript
document.title="My New Title";
```

## What is difference between deep and shallow object coping in JavaScript?
Some differences are:

Deep copy means copies all values or properties recursively in the new object whereas shallow copy copies only the reference.
In a deep copy, changes in the new object don't show in original object whereas, in shallow copy, changes in new objects will reflect in the original object.
In a deep copy, original objects do not share the same properties with new object whereas, in shallow copy, they do.

## List some Unit Testing Frameworks JavaScript
Below is the list of few most Popular Javascript Unit Testing Frameworks:

  * Unit.js
  * Jasmine
  * Karma
  * Chai
  * AVA
  * Mocha
  * JSUnit
  * QUnit
  * Jest

## How to add a new property in existing function JavaScript?
It is easy to add a new property in existing function by just giving value to the existing function it. For example, let we have an existing object person, to give new property check the below code:

```javascript
person.country= "India";
```
The new property "country" has added to the object person.

## Explain JavaScript Accessors ?


## List few difference between primitive and non primitive JavaScript data types?
The primitive data types are numbers, strings, Boolean, undefined, null and anything other than these data types are known as non-primitive such as objects and functions.

Primitive data types are immutable while non-primitives are mutable.

Primitives are known immutable as they can't be changed once they created but non-primitive are changeable, means once an object is created, it can be changed.

Primitives data types are compared with their values, it means two values are strictly equal if they have the same data type and holds the same value.

Non-primitives are not compared with values. For example, if two objects have the same properties and values, they are strictly not equal.

## Explain higher-order functions in JavaScript?
Higher order function is the best feature of functional programming available in JavaScript. It is the function which takes a function as an argument and returns a function as a result. Some of the inbuilt higher-order functions are mapping, filtering, reduction, zipping, etc.

## Explain few difference between null, undefined or undeclared JavaScript variable?
Null is a value that can be assigned to a variable or an object.

Undefined means a variable has been declared but no value is assigned to it. This type of variable is declared itself to be undefined.

Undeclared means the variable has declared without any datatype.

Null, Undefined are primitive data types whereas Undeclared is not a primitive data type.

## How host objects are different from native objects in JavaScript?
Host objects: These are those objects which environment gives. It means they are different for different environments. For example, browsers include objects such as windows but Node.js environments give objects such as Node List.

Native Objects: these are built-in objects in JavaScript. They are also known as Global Objects because they will be available to you independent of ay environment if you working in JavaScript.

## What is difference between var x=1; and x=1;?
`var x = 1` will declare a variable only in current scope, while `x=1` will declare a variable in global scope.

## Explain spread operator in JavaScript?
The spread operator expands an expression in places where multiple argument/variables/elements are needed to present. It represents with three dots (…).

For example:

```javascript
var mid = [3, 4];
var newarray = [1, 2, ...mid, 5, 6];
console.log(newarray);
// [1, 2, 3, 4, 5, 6]
```

In above example, instead of appending mid array, it rather expands in the newarray with the help of spread operator. This is how spread operator works in JavaScript.

## How to remove duplicates from JavaScript Array?
There are many ways to remove duplicates from JavaScript array. These are described below with examples:

### By using Set
It is the simplest approach to remove duplicates. Set is an inbuilt object to store unique values in an array. Here's how we use set:

```javascript
function uniquearray(array) { 
   let unique_array= Array.from(set(array)) 
   return unique_array;
}
```
As in the above code, you created a set of an array which automatically eliminates the duplicate values.

### By using Filter
Another approach to remove duplicates from an array is applying filter on an array. To call filter method, it requires three arguments: array, current element, index of current element. Here’s how we use filter:

```javascript
function unque_array (arr){
 let unique_array = arr.filter(function(elem, index, self) {
     return index == self.indexOf(elem); 
  }); 
  return unique_array
}
console.log(unique_array(array_with_duplicates));
```
### By using for loop
In this, we can use for loop to remove duplicates. In this we make an empty array in which those elements will be added from the duplicate array which are not present in this before. Thus, finally we will get an array which has unique elements. Code to implement this:
```javascript
Array dups_names = ['Ron', 'Pal', 'Fred', 'Rongo', 'Ron'];
function dups_array(dups_names) {
 let unique = {};
 names.forEach(function(i) {
    If (!unique[i]) {
      unique[i] = true;    }
  });
return Object.keys(unique);}   // Ron, Pal, Fred, Rongo
Dups_array(names);
```

These are the main three methods used in JavaScript to get a unique array.

## How to call a function in every x seconds in JavaScript?
In JavaScript, we use the function setInterval() to call any function in every x seconds.

```javascript
setInterval(function, milliseconds, param1, param2, ...)
```
  * function: it is a required parameter which includes the function to be execute.
  * milliseconds: required parameter which tells how often the function will execute.
  * Others are an additional parameter.

For example: 
```javascript
setInterval(function (){ alert("Hello"); }, 3000);
```

In the above example, this function calls hello function in very 3 seconds.

## Explain Promise in JavaScript?
A promise is an object in JavaScript which is used to produce a value that may give result in the future. The value can be resolved value or it can be a reason which tells why the value is not resolved.

A promise can be of three states:

  * Fulfilled: The operation is completed and the promise has a specific value.
  * Rejected: The operation is failed and promise has a reason which shows why the operation failed.
  * Pending: Th operation is not fulfilled or rejected, means it has not completed yet.

## What is difference between Array.splice() and Array.slice() method in JavaScript?
The array.slice() removes items from the array and then return those removed items as an array whereas array.slice() method is selected items from an array and then those elements as a new array object.
The splice() method affects the original array whereas slice() method doesn’t affect the original array.
Splice() method takes n number of arguments whereas slice() can take only two arguments.
Syntax of splice(): array.splice(index, howmany, item1, ....., itemX)

Syntax of slice(): 

```javascript
array.slice(start, end)
```

## Is JavaScript multi-threaded or single-threaded?
JavaScript is single-threaded.

## Explain JavaScript Debounce Function?
   

## List some Design patterns in JavaScript?
The design pattern is a general reusable solution to a commonly occurring problem in software design. Some of the design patterns are:

Creational design pattern: These patterns dealt with the mechanism of object creation which optimize object creation with the basic approach.
Structural design pattern: these patterns deal with different classes and objects to provide new functionality.
Behavioral Patterns: These patterns are to improve communication between objects and to recognize patterns.
Concurrency design patterns: These patterns handle with multi-thread programming paradigms.
Architectural design patterns: These patterns used to deal with architectural designs.

## What is console.time() and console.timeEnd()? What is its syntax, and why is it used?
   

## What are different types of Scope Chain available in JavaScript?
If we check in the program, every local scope has a connection with one or more scope in their back which forms a chain. This chain goes on until it met with the global scope which is the root of this hierarchy. As global scope doesn't have a parent, so it is on the top of the chain. This is known as scope chain.

The scope chain in JavaScript is basically used to resolve the values of the variable. Without this, it is difficult for a JavaScript to choose a certain value for a variable if there are many variables defined at different scopes.

## How to remove duplicate values from a JavaScript array?
We can use array.indexOf method to check a value exists or not. See below example to remove duplicate values.

```javascript
let duplicates = ['delhi','kanpur','kanpur','goa','delhi','new york'];
function removeDuplicatesValues(arr){
    let unique_array = [];
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array
}
console.log(removeDuplicatesValues(duplicates));
```

## How to redirect a page to another page in Javascript?
There are several ways to redirect page to another page in JavaScript. These are:

Using location.href: It is the first approach to redirect page. In this, we can go back to access the original document. Syntax:window.location.href =“https://www.onlineinterviewquestions.com/”
Using location.replace: Another approach to redirect page. In this, it is not possible to navigate back to the original document by clicking on the back button as it removes the URL of the original document. 

```javascript
window.location.replace(" https://www.onlineinterviewquestions.com/;");
```

## Is it possible to do 301 redirects in Javascript ?
JavaScript entirely runs on the client machine. 301 is response code that is sent by the server as a response. So it is not possible to do 301 Redirects In JavaScript.

## Write a program to reverse a string in pure JavaScript?
There are many ways to reverse a string in JavaScript. These are:

Using in-built functions: the inbuilt function reverse() reverses the string directly. Here’ how:

```javascript
str="jQuery";
str = str.split(""); //convert 'jQuery' to array
str = str.reverse(); //reverse 'jQuery' order 
str = str.join(""); //then combines  the reverse order values.
alert(str);
```

First split the string to an array, then reverse an array and after that join the characters to form a string.

Using a loop: First, count a number of characters in a string, then apply a decrementing loop on an original string which starts from the last character and prints each character until count becomes zero.

 
## List few Difference between JAVA and JavaScript?
   
## Explain MUL function in Javascript?
MUL means simple multiplication of numbers. It is a techique in which you pass a one value as an argument in a function and that function returns another function to which you pass the second value and the process go on. For example: x*y*z can be representing as:

```javascript
function mul (x) {  
return function (y) { // anonymous function    
return function (z) { // anonymous function      
return x * y * z;    };
  };
}
```

## List few advantages of using JavaScript?
Few advantage of Javascript

Javascript is executed on user's computer, the meaning is that whatever you do in Javascript will not add any processing strain on the server. and that's why it is called as the client-side programming language. And this feature makes your sites responsive for the end user and less expensive for you in terms of server traffic.
With the help of Javascript, you can create highly responsive interfaces which will improve the user experience and provide dynamic functionality, without waiting for the server to show another page.
If you want to make online systems available offline and sync automatically once the computer goes online, then Javascript is the best technology you can use. you can do this using the right browser add-ons (Such as Google or Yahoo Browser Plus).
Content loading and changing it dynamically. Using Ajax in Javascript you can load content into the document if and when the user needs it, without reloading the entire page.
Using the Principles of unobtrusive JavaScript(defensive Scripting), JavaScript can test for what is possible in your browser and react accordingly.

## What is use of settimeout function in JavaScript?
   
## What is difference between local and global scope in JavaScript ?
   
## What are anonymous functions in JavaScript ?
   
## Please explain equality operators in JavaScript?
