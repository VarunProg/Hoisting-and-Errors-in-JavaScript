// Hoisting in the case of function and var declaration
console.log(b);
a();
var b = 10;
function a() {
    console.log("a funcion");
}
