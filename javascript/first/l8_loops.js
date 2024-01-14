const prompt=require("prompt-sync")({sigint:true});
const {log}=require("console");
let sum=0
let n=prompt("write no ")
n=parseInt(n)
for(let i=1 ; i<=n ; i++)
{
    sum=sum+i
}
console.log("the sum of n no is" , sum)
//for in loop
let obj={
    harry:23,
    ram:45,
    shubh:89,
    alok:67
}
for(let a in obj)
{
    console.log("the marks of",a ,"is" , obj[a])
}
//for of loop
for(m of "harry")
{
    console.log(m)
}
//while loop
let a= prompt('enter the value')
a=parseInt(a)
while(a<=10)
{
    log(a)
    ++a
}
//do while loop
let b=prompt("enter any no")
b=parseInt(b)
let i=0
do{
    log(b)
    i++
}while(i<=10)