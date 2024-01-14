const prompt = require("prompt-sync")({sigint:true})
const {log}=require("console")
let name='harry'
// log(name.length)
// log(name.toUpperCase())
// log(name.toLowerCase())
// log(name.slice(2,4))
// log(name.slice(1))
// log(name.replace("har", "per"))
let friend="naman"
log(name.concat(" is a friend of ", friend))
let fr="     meena"
log(fr)
log(fr.trim())