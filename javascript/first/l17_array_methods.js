const prompt = require("prompt-sync")({sigint:true})
const {log}=require("console")
//array methods
let a=[12 , 13  , 76 ,65 ,78]
let c=a.join("-")
log(c)
// a=a.toString()
// log(typeof a)
//pop
log(a.pop())
log(a)
let r=a.push(56)
log(a,a.length)
//shift->POP OUT FIRST ELEMENT OF ARRAY AND RETURNS IT
let p=a.shift()
log(p)
//unshift->adds new element in the beginning
q=a.unshift(9)
log(a)