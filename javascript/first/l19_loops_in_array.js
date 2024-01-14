const prompt=require("prompt-sync")({sigint:true})
const {log}=require("console")
let arr=[1,6 ,6,7,4,76]
//for each->calls a function once for each element of array
arr.forEach((element)=>
{
    log(element * element)
})
//array from
let name='harry'
let a=Array.from(name )
log(a)//array from string 
//for..of method fro arr
for(let i of arr)
{
    log(i)
}