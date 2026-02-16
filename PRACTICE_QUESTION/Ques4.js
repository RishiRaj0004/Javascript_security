// 4️ Filter Adults
// Given:
// [
// {name:"Allen", age:22},
// {name:"Black", age:15},
// {name:"James", age:30}
// ]


//  Return only those who are 18 or older.

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
