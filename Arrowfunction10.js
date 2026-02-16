// const add =(a,b) => a+b;

// console.log(add(5,3));

// //FUNC 2  NO PARAMETER

// const square=x=>x*x;

// console.log(square(4));

// //FUNC 3
// const sayHello=()=>console.log("Hello");

// sayHello();

// //func 4 multiple statements

// const multiply = (a,b) => {
//     let result = a*b;
//     console.log("inside function");
//     return result;

    
// }

// console.log(multiply(10,20));

// map function

let numbers=[1,2,3,4];
let squares= numbers.map(n => n*n);
console.log(squares);   // call back function  n=>n*n is called callback function and map is higher order function because it takes a function as an argument.

//func foreach

let fruits=["apple","banana","Mango"];

fruits.forEach(fruit => console.log(fruit));



