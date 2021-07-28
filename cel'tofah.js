const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {


var c = parseInt(userInput[0]);
console.log(c);
var f;

 f = c*1.8+32;

console.log(f);


});
