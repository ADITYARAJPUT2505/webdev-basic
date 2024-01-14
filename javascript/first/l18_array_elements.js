const prompt = require("prompt-sync")({sigint:true})
const {log}=require("console")
let num=[1,2,3,4,5,6,7,8,9]
// delete num[0]
// log(num,num.length)
let num_more=[1,2,3,4,4,5,5,5,6,6,4,3]
let newarray=num.concat(num.concat(num_more,num_more))//it can add more than 1 arrays 
// log(newarray)
log(newarray.sort())
log(num.reverse())
num.splice(2,3,1032,102,20,13,54)
log(num)//splice->three arguements where,how many deleted,what added
//slice
let new_num=num.slice(3,9)//from 3rd element to 9th element
log(new_num)
