const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {


var m = parseInt(userInput[0]);
console.log(m);
var mi;

 mi = m/1609.344 ;

console.log(mi);


});
