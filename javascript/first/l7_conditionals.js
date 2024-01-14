const prompt = require("prompt-sync")({sigint: true});
let nam = prompt("What is your age?");

console.log(typeof nam)
//inside prompt everything is string we can change it to parseint as desired
a = parseInt(nam);

console.log(typeof a);
console.log(a);
//ternary operator make case in output line
console.log("you can", (nam<18? "not drive" : "drive"))