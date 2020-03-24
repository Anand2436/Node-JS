// using installed npm package validator

const validator = require('validator');

console.log("Inside npm installed Package tester file");

console.log(validator.isEmail('example.com'));
console.log(validator.isEmail('anandRao@gmail.com'));

console.log(validator.isURL('http:/example.com'));
console.log(validator.isURL('https://nodejs.org/en/about/'));