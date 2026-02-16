// 3️ Extract Names
// Given:
// [
// {name:"Irfan", age:22},
// {name:"Allen", age:15}
// ]
//  Return only names as an array.


const people =[
    {name:"Irfan", age:22},
    {name:"Allen", age:15}
];

const names = [];

for (let i = 0; i < people.length; i++) {
    names.push(people[i].name);
}

console.log(names);
