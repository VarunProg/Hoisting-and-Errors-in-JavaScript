# Hoisting-and-Errors-in-JavaScript
what is Hoisting in JavaScript?\
Hoisting in JavaScript is a phenomena by which we can access functions and variables even before initilization.\
Here is the example\
// Hoisting in the case of function and var declaration\
accessing variable before initializing\
console.log(b); 

calling function even  before declaring it\
a(); \
var b = 10; \
function a() { \
    console.log("a funcion");\
}
