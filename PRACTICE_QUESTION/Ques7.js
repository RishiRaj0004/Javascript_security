
// 7️ Check Admin Exists
// Given:
// [
// {name:"Irfan", role:"user"},
// {name:"Ali", role:"admin"}
// ]
// Check whether any user has role "admin"


const users =[
    {name:"Irfan",role:"user"},
    {name:"Ali",role:"admin"}
]

for (let i=0;i<users.length;i++){
    if(users[i].role==="admin"){
        console.log("Admin exists");
        break;
    }
}