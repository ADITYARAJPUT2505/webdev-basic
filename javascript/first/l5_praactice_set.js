let a="harry"
let b=3
let c=a+b
console.log(c)
console.log(typeof c)
const a1=
{
    name:"harry",
    section: 1,
    isprinciple:false
}
//we can't assign new value  to a1 because it  is reference to keys in object a1
//adding new key 
a1['friend']="mona"
console.log(a1)
//we can change key details
//changing detail of a key
a1['name']='adi'
console.log(a1)
console.log(a1.name)