const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {


var p = parseInt(userInput[0]);
console.log(p);
var mi;

 kg = p/2.2046226218 ;

console.log(kg);


});
