const prompt = require("prompt-sync")({sigint:true})
const {log}=require("console")
//strings are collection of characters
let name='harry'
log(name.length)
for(let i=0 ; i<name.length ; i++)
{
    log(name[i])
}
//template literals 
let boy1='nikhil'
let boy2='promod'
let sentence=`${boy1} is a friend of ${boy2}`
log(sentence)
//we can use singel or double quote inside backtick
log(`my name is 'adit'`)
//escape sequence -> after backslash we can use single or double quote
log('aditya\'s')
// \n->new line
// \t->tab
