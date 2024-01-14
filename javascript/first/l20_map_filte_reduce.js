const prompt=require("prompt-sync")({sigint:true});
const {log}=require("console");

let arr=[13,6,8,45,54]
//arr.forEach((data)=>
//   log(data)
//)
//map->create an array by performing some element on each array element
// let a=arr.map((value,index,array)=>
//    { 
//     log(value,index,arr)
//     return value+1}//new array made by map is made with return values
// )
// log(a)
let arr2=[322,35,54,54,2,4]
let a2=arr2.filter((a)=>//filter passes  the values which passes the required test
{
   return a<50
}
)
//log(a2,arr2)
let arr3=[5,4,8,3,2]//add from first+second then it to thihd then it four and so on
let a3=arr3.reduce((h1,h2)=>{//reduces to single value acc to given condition
   return h1+h2
}
)
log(a3)