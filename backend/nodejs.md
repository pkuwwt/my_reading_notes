
# Node.js

## Communication with Dynamic Libraries

There are three ways to do that:

  * use `ffi` library to wrap the C language interface of the dynamic libraries
  * compile a `node-nyp` module over the dynamic libraries
  * use `child_process` library to create a sub-process, and comunicate it through `stdin/stdout`. We'd best create an executable which supports pipe.

Sample code for `child_process`:
```javascript
var {spawn} = require('child_process');
var process = spawn('./test.exe');
process.stdout.setEncoding('utf-8');
process.stdout.on('data', data => console.log(data));
process.stdin.write('message' + '\n');  // NB: the '\n' is necessary for a piped program
```

## Node.js in Windows

### Call Functions in Native DLL


#### Prepare DLL File

The compiled DLL file should exposure C Function other than C++, so we should declare the API in code as follows:

```C++
extern "C" __declspec(dllexport)
int getPrimes(int under, int primes[]) {
    //...
}
```

#### Install libraries
    * `npm install -g --production windows-build-tools`
    * `npm install -D ref-array ffi ref`
    
#### Call the Functions

Assume we have a DLL `prime.dll` with a C API `int getPrimes(int, int[])`, then we can call the function as follows:

```javascript
var ArrayType = require('ref-array');
var IntArray = ArrayType(int);
var a = new IntArray(10); // creates an integer array of size 10
var ffi = require('ffi')
var ref = require('ref')
var int = ref.types.int

var libprime = ffi.Library('./prime', {
  'getPrimes': [ int, [ int, IntArray] ]
})
var count = libprime.getPrimes(under, a);
var primes = a.toArray().slice(0, count);
```

## References

  * [Writing to Files in Node.js](https://stackabuse.com/writing-to-files-in-node-js/)
  * [Calling Native C++ DLLs from a Node.js Web App](https://nodeaddons.com/calling-native-c-dlls-from-a-node-js-web-app/)
