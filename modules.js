// console.log(arguments); // See wrapping variables
// console.log(require("module").wrapper); // See wrapper function itself

// module.exports
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(2, 5));

// exports
const calc2 = require("./test-module-2");
console.log(calc2.add(2, 5));
console.log(calc2.multiply(2, 5));

// exports destructuring
const { add, multiply, divide } = require("./test-module-2");
console.log(multiply(2, 5));

// caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
