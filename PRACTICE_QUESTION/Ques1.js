// 1️ Filter Even Numbers
// Given an array of numbers:
// [1,2,3,4,5,6,7,8]
//  Write a program to return only even numbers.


const numbers =[1,2,3,4,5,6,7,8];

for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
        console.log(numbers[i]);
    }
}