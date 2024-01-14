const prompt = require("prompt-sync")({sigint:true});
const  {log}=require("console")
let a=[93,82,68,83,false, null,"absent"]
a[7]=23//new element
a[5]=41//change
for(let i=0 ; i<a.length ; i++)
{
    log(a[i])
}
log(typeof a)


