const changebodyred = ()=>
  {
    document.body.firstElementChild.getElementsByClassName("style").color="red"
  }
let b = document.body
console.log("the first child of b is: ", b.firstChild)//agr space hai  to text node ya comment kch bhi aa skta hai
console.log("the first element of b is: ", b.firstElementChild)//sirf element child hi  dega