//printing maarks of students using for loop
let marks={
    harry:90,
    shubham:9,
    adi:99,
    mona:4
}
for(let i=0 ; i<Object.keys(marks).length; i++)
{
    console.log("the marks of"+ Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}
for(let a in marks)
{
    console.log("the marks of " , a ," are " , marks[a]);
}