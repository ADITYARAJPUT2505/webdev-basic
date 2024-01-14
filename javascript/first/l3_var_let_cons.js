var a=23
var b='harry'
var c= null
var d=undefined
console.log(b)
//var can be changed from anywhere in the code 
{
    b='this'
    console.log(b)
    let e='man'
    console.log(e)
    //let be changed  inside the block
    e='women'
    console.log(e)
}
console.log(b)
//console.log(e) this line will give error because e is defined in the upper block
const r='monkey'
console.log(r)
//r='donkey' this line will throw error because const can be re valued it  is constant througout the code
console.log(r)


