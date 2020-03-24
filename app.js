// Importing files
var nameFromAnotherFile = require('./nameDeclaration.js');
const add = require('./sum.js');

console.log("Inside Original app File");


// if we don't write export in nameDeclaration file, we won't get the name here
console.log(nameFromAnotherFile);
const sum = add(3,4);
console.log(sum);
