// 5️ Find Product by ID
// Given:
// [
// {id:1, name:"Laptop"},
// {id:2, name:"Mobile"},
// {id:3, name:"Tablet"}
// ]
//  Find the product whose id is 2


const products =[
    {
        id:1 ,name:"Laptop"
    },
    {
        id:2 ,name:"Mobile"
    },
    {
        id:3 ,name:"Tablet"
    }
]

for ( let i =0;i< products .length;i++){
    if(products[i].id===2){
        console.log(products[i]);
    }
}