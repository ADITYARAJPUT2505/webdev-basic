//block of code which executes a  fixed task written in it
const prompt=require("prompt-sync")({signint:true})
const {log}=require("console")
function avg(a,b)
{
    return Math.round((a+b)/2)
}
//we can round off the value by math.round function
let a=2
let b=9
let c=6
log(avg(a,b))
log(avg(c,b))
log(avg(a,c))
//arrow function
const sum=(p,q)=>
{
    return p+q
}
log(sum(a,b))