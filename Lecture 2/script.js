// call=demo 
// function sample(call){
//     console.log("sample");
//     call();
// }
// function demo(){
//     console.log("demo")
// }
// sample(demo)

// let numbers=[1,2,3]
// let doubled=numbers.map((x)=>x)
// console.log(doubled);

// let marks=[10,40,30,20,34,29,0.5,16,8,1]

// let result= marks.filter((mark)=>mark>=16);
// console.log(result);

// question - take different marks and print the marks and message
// of pass and fail for example-"pass"


// let marks=[10,20,30,22,24,18,17,15,12,14]
// let result= marks.filter((mark)=>mark>=12)
// marks.forEach(mark=>{
//     if (mark >= 12){
//         console.log(mark + "pass");
// }else{
//     console.log(mark + "fail");
// }
// });
// let fruits = ["apple,"banana];
// let newlength = fruits.push("cherry");
//pop
// let fruits = ['apple','banana','cherry]
// Q1. reverse the Array using Push and pop method
let fruit =['apple', 'banana', 'cherry']
fruit.pop()
fruit.pop()
fruit.pop()
fruit.push('cherry')
fruit.push('banana')
fruit.push('apple')

console.log(fruit)

// Q2 remove all negative Number forme an Array
let arr=[5,-3,16,-11,-7,8]
let result=[]

for(let i=0;i<arr.length;i++)
    if(arr[i]>=0){
        result.push(arr[i]);
    }

 console.log(result)
