// 8️ Check All Adults
// Given:
// [
// {name:"A", age:25},
// {name:"B", age:30},
// {name:"C", age:18}
// ]
//  Check whether all users are adults (age ≥ 18).


const people =[
    {name:"Allen", age:22},
    {name:"Black", age:15},
    {name:"James", age:30}
];
const adults =[]
for (let i=0;i<people.length;i++){
    if(people[i].age>=18){
        adults.push(people[i]);
    }
}

console.log(adults);
