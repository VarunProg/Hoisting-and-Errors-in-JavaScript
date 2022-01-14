# Hoisting-and-Errors-in-JavaScript
# what is Hoisting in JavaScript?
Hoisting in JavaScript is a phenomena by which we can access functions and variables even before initilization.

# Hoisting in the case of function and var declaration
Here is the example\
//accessing variable before initializing\
console.log(b); \
//calling function even  before declaring it\
a(); \
var b = 10; \
function a() { \
    console.log("a funcion");\
}
 \
 output\
 undefined\
 a function 
 # so what happens behind the scenes
 Hoisting as a core concept relies on the way how Execution Context is created.\
 So first let's understand what is execution context and how it's created to understand better hoisting concept.\
 first Javascript engine loads the JS file and parses the code then it enters into Global Execution Context that is the default execution context where JavaScript engine enters first.\
 Whenever JS program is run a global object is created, global execution context is created along with that execution context and this keyword is created. Global obejct is created even before JS engine enters to the GEC(Global Execution Context) and what Global object contains it contains eventHandlers, history,ScrollX,Window object(in the case of browser), localStorage and more..
 
Now let's understand How code is executed?\
Global Execution Context is created and it is pushed into the callstack, Global Execution Context is like a big container where all code is executed it has 2 phases.\
1- Memory creation phase\
2- Code Execution phase

In **Memory creation phase** memoery is allocated to global variables and global functions even before single of code is executed, in the case of variables memory is assigned undefined and in the case of functions the exact copy of function. **that is why this is the reason in the case of var declaration it gives us Undefined when we try to access variable even before initialization** so this is the first phase done in Global Execution Context.\
\
In **Code Execution phase** value is assigned to variables and functions. As JS engine reaches to function invocation it creates a new execution context, it has again 2 phases Memory creation phase or Code Execution phase and in this phase again same thing happpens memory is assigned to variables and functions first then value is assigned to the functions and variables in Code Execution phase.

# Hoisting in the case of let and const declaration
when we try to access variables declaration with let and const even before initialization it gives errors.\

So are let and const declration are Hoisted?


 
 
