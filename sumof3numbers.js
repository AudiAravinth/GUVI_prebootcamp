const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {


var a = userInput[0].split(' ');
console.log(a);

var b = parseInt(a[0])+parseInt(a[1])+parseInt(a[2]);
console.log(b);


});
