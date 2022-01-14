# Hoisting-and-Errors-in-JavaScript
# what is Hoisting in JavaScript?
Hoisting in JavaScript is a phenomena by which we can access functions and variables even before initilization.

# Hoisting in the case of function and var declaration
Here is the example\
//accessing variable before initializing\
console.log(b); \
calling function even  before declaring it\
a(); \
var b = 10; \
function a() { \
    console.log("a funcion");\
}
 \
 output\
 undefined\
 a function \
 # so what happens behind the scenes
 Hoisting as a core concept relies on the way how Execution Context is created.
 
