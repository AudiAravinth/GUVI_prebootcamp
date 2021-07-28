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
var b = userInput[1].split(" ");

if (a<b)
{
    console.log(a);
}
else
{
    console.log(b)
}

});
