const fs = require('fs');

const data = fs.readFileSync('jsonFloors.json');
// biary data 
console.log(data);

console.log(data.toString());

const testJson = fs.readFileSync('1-json-test.json');
console.log(testJson);
console.log(testJson.toString());
const testObj = JSON.parse(testJson);
console.log(testObj);
testObj.age = (parseInt(testObj.age) + 1).toString();
console.log(testObj);

const testObjJsonNew = JSON.stringify(testObj);
console.log("Before writing into a file "+testObjJsonNew);
fs.writeFileSync('1-json-test.json',testObjJsonNew);